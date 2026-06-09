import prisma from "../config/database.js";

const countLabels = [
  "properties",
  "agents",
  "careers",
  "clientRequests",
  "valuationRequests",
  "complianceRequests",
  "legalRequests",
  "offers",
  "jobApplications",
];

const queryLabels = [
  "valuationRequests",
  "complianceRequests",
  "legalRequests",
  "offers",
  "jobApplications",
  "contactInquiries",
];

export const getDashboardStats = async () => {
  try {
    const countResults = await Promise.allSettled([
      prisma.property.count(),
      prisma.agent.count(),
      prisma.career.count({ where: { is_active: true } }),
      prisma.clientRequest.count(),
      prisma.valuationRequest.count(),
      prisma.complianceRequest.count(),
      prisma.legalRequest.count(),
      prisma.offer.count(),
      prisma.jobApplication.count(),
    ]);

    const [properties, agents, careers, totalRequests, valuations, compliance, legal, offers, applications] = countResults.map((result, index) => {
      if (result.status === "fulfilled") return result.value;
      console.error(`Dashboard count failed for ${countLabels[index]}:`, result.reason);
      return 0;
    });

    const queryResults = await Promise.allSettled([
      prisma.valuationRequest.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { valuation_request_id: true, created_at: true } }),
      prisma.complianceRequest.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { compliance_request_id: true, created_at: true } }),
      prisma.legalRequest.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { legal_request_id: true, created_at: true } }),
      prisma.offer.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { offer_id: true, created_at: true } }),
      prisma.jobApplication.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { application_id: true, created_at: true } }),
      prisma.contactInquiry.findMany({ orderBy: [{ created_at: "desc" }], take: 3, select: { inquiry_id: true, created_at: true } }),
    ]);

    const [valuationItems, complianceItems, legalItems, offerItems, applicationItems, contactItems] = queryResults.map((result, index) => {
      if (result.status === "fulfilled") return result.value;
      console.error(`Dashboard query failed for ${queryLabels[index]}:`, result.reason);
      return [];
    });

    const topAgents = await prisma.agent.findMany({
      orderBy: { created_at: "desc" },
      take: 5,
      select: {
        agent_id: true,
        first_name: true,
        last_name: true,
      },
    }).catch((error) => {
      console.error("Dashboard query failed for topAgents:", error);
      return [];
    });

    const recentActivity = [
      ...valuationItems.map((item) => ({
        id: item.valuation_request_id,
        type: "valuation",
        message: "New valuation request submitted",
        created_at: item.created_at,
      })),
      ...complianceItems.map((item) => ({
        id: item.compliance_request_id,
        type: "compliance",
        message: "New compliance request submitted",
        created_at: item.created_at,
      })),
      ...legalItems.map((item) => ({
        id: item.legal_request_id,
        type: "legal",
        message: "New legal advice request",
        created_at: item.created_at,
      })),
      ...offerItems.map((item) => ({
        id: item.offer_id,
        type: "offer",
        message: "Offer to purchase received",
        created_at: item.created_at,
      })),
      ...applicationItems.map((item) => ({
        id: item.application_id,
        type: "application",
        message: "New career application received",
        created_at: item.created_at,
      })),
      ...contactItems.map((item) => ({
        id: item.inquiry_id,
        type: "contact",
        message: "New contact inquiry received",
        created_at: item.created_at,
      })),
    ]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 6);

    return {
      properties,
      agents,
      careers,
      totalRequests,
      requests: {
        valuations,
        compliance,
        legal,
        offers,
        applications,
      },
      topAgents: topAgents.map((agent) => ({
        id: agent.agent_id,
        name: `${agent.first_name} ${agent.last_name}`,
        rating: null,
      })),
      recentActivity,
    };
  } catch (error) {
    console.error("Dashboard service failed:", error);
    return {
      properties: 0,
      agents: 0,
      careers: 0,
      totalRequests: 0,
      requests: {
        valuations: 0,
        compliance: 0,
        legal: 0,
        offers: 0,
        applications: 0,
      },
      topAgents: [],
      recentActivity: [],
    };
  }
};
