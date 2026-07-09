import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import auth from './routes/admin.route.js';
import bondsRouter from "./routes/bond.route.js";
import prequalificationRouter from "./routes/prequalification.route.js";
import complianceRouter from "./routes/compliance.route.js";
import valuationRouter from "./routes/valuation.route.js";
import legalRouter from "./routes/legal.route.js";
import careerRouter from "./routes/career.route.js";
import propertyRouter from "./routes/property.route.js";
import propertyImg from "./routes/propertyImage.route.js";
import publicPropertyRouter from "./routes/publicProperty.route.js";
import jobApplicationRouter from "./routes/jobApplication.route.js";
import propertyInquiryRouter from "./routes/inquiry.route.js";
import contactInquiryRouter from "./routes/contactInquiry.route.js";
import offerRouter from "./routes/offer.route.js";
import agentRouter from "./routes/agent.route.js";
import publicAgentRouter from "./routes/publicAgent.route.js";
import adminInquiryRouter from "./routes/adminInquiry.route.js";
import dashboardRouter from "./routes/dashboard.route.js";

const app = express();

app.set("trust proxy", 1);

const knownOrigins = [
  "http://localhost:5173",
  "http://localhost:5176",
  "http://localhost:5177",
  "http://localhost:3000",
  process.env.CLIENT_URL,
  process.env.FRONTEND_URL,
  process.env.FRONTEND_ORIGIN,
  process.env.APP_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : undefined,
  process.env.CORS_ALLOWED_ORIGINS,
]
  .filter(Boolean)
  .flatMap((value) => value.split(',').map((url) => url.trim()).filter(Boolean));

const allowedOrigins = [...new Set(knownOrigins)];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests, or same-origin navigations)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else if (process.env.NODE_ENV !== 'production') {
        // In development, allow all origins for easier debugging
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/bonds", bondsRouter);
app.use("/api/prequalifications", prequalificationRouter);
app.use("/api/auth", auth);
app.use("/api/compliance", complianceRouter);
app.use("/api/valuations", valuationRouter);
app.use("/api/legal", legalRouter);
app.use("/api/careers", careerRouter);
app.use("/api/properties", publicPropertyRouter);
app.use("/api/admin/properties", propertyRouter);
app.use("/api/admin/properties", propertyImg);
app.use("/api/job-applications", jobApplicationRouter);
app.use("/api/admin/job-applications", jobApplicationRouter);
app.use("/api/inquiries", propertyInquiryRouter);
app.use("/api/contact-inquiries", contactInquiryRouter);
app.use("/api/offers", offerRouter);
app.use("/api/admin/agents", agentRouter);
app.use("/api/agents", publicAgentRouter);
app.use("/api/admin/inquiries", adminInquiryRouter);
app.use("/api/admin/dashboard", dashboardRouter);

// error handler (should be last middleware)
import errorHandler from './middleware/error.middleware.js';
app.use(errorHandler);

export default app;