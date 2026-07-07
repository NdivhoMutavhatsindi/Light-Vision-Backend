-- CreateEnum
CREATE TYPE "JobApplicationStatus" AS ENUM ('PENDING', 'REVIEWED', 'REJECTED', 'ACCEPTED');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('fulltime', 'parttime', 'temporary', 'contract', 'internship');

-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('for_sale', 'for_rent', 'sold', 'pending', 'rented', 'under_offer', 'price_adjusted');

-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('pending', 'responded', 'closed');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateTable
CREATE TABLE "admins" (
    "admin_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3),

    CONSTRAINT "admins_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "bond_applications" (
    "bond_application_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "id_number" TEXT NOT NULL,
    "marital_status" TEXT,
    "employment_status" TEXT,
    "employer_name" TEXT,
    "base_salary" DECIMAL(12,2) NOT NULL,
    "allowances" DECIMAL(12,2) NOT NULL,
    "other_income" DECIMAL(12,2) NOT NULL,
    "gross_income" DECIMAL(12,2) NOT NULL,
    "monthly_expenses" DECIMAL(12,2) NOT NULL,
    "available_for_bond" DECIMAL(12,2) NOT NULL,
    "debt_to_income_ratio" DECIMAL(5,2) NOT NULL,
    "disposable_income" DECIMAL(12,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bond_applications_pkey" PRIMARY KEY ("bond_application_id")
);

-- CreateTable
CREATE TABLE "client_requests" (
    "request_id" TEXT NOT NULL,
    "request_type" TEXT NOT NULL,
    "reference_id" TEXT NOT NULL,
    "client_email" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_requests_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "prequalification_applications" (
    "prequalification_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "id_number" TEXT NOT NULL,
    "marital_status" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "employment_status" TEXT NOT NULL,
    "employer_name" TEXT,
    "gross_monthly_income" DECIMAL(12,2) NOT NULL,
    "monthly_expenses" DECIMAL(12,2) NOT NULL,
    "property_type" TEXT,
    "price_range" TEXT,
    "deposit_available" DECIMAL(12,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prequalification_applications_pkey" PRIMARY KEY ("prequalification_id")
);

-- CreateTable
CREATE TABLE "compliance_requests" (
    "compliance_request_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compliance_requests_pkey" PRIMARY KEY ("compliance_request_id")
);

-- CreateTable
CREATE TABLE "valuation_requests" (
    "valuation_request_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "property_address" TEXT NOT NULL,
    "property_type" TEXT NOT NULL,
    "floor_area" INTEGER,
    "erf_size" INTEGER,
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "garages" INTEGER,
    "year_built" INTEGER,
    "property_condition" TEXT,
    "swimming_pool" BOOLEAN NOT NULL DEFAULT false,
    "solar_power" BOOLEAN NOT NULL DEFAULT false,
    "home_theatre" BOOLEAN NOT NULL DEFAULT false,
    "wine_cellar" BOOLEAN NOT NULL DEFAULT false,
    "smart_home" BOOLEAN NOT NULL DEFAULT false,
    "staff_quarters" BOOLEAN NOT NULL DEFAULT false,
    "generator" BOOLEAN NOT NULL DEFAULT false,
    "borehole" BOOLEAN NOT NULL DEFAULT false,
    "preferred_contact" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "valuation_requests_pkey" PRIMARY KEY ("valuation_request_id")
);

-- CreateTable
CREATE TABLE "legal_advice_requests" (
    "legal_request_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "legal_advice_requests_pkey" PRIMARY KEY ("legal_request_id")
);

-- CreateTable
CREATE TABLE "careers" (
    "career_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "employment_type" "EmploymentType" NOT NULL DEFAULT 'fulltime',
    "description" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "careers_pkey" PRIMARY KEY ("career_id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "application_id" UUID NOT NULL,
    "career_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cv_url" TEXT NOT NULL,
    "cover_letter" TEXT,
    "status" "JobApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("application_id")
);

-- CreateTable
CREATE TABLE "properties" (
    "property_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "property_type" TEXT NOT NULL,
    "status" "PropertyStatus" NOT NULL DEFAULT 'for_sale',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("property_id")
);

-- CreateTable
CREATE TABLE "property_images" (
    "image_id" UUID NOT NULL,
    "property_id" UUID NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "property_images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "property_inquiries" (
    "inquiry_id" UUID NOT NULL,
    "property_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "property_inquiries_pkey" PRIMARY KEY ("inquiry_id")
);

-- CreateTable
CREATE TABLE "contact_inquiries" (
    "inquiry_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_inquiries_pkey" PRIMARY KEY ("inquiry_id")
);

-- CreateTable
CREATE TABLE "offer" (
    "offer_id" UUID NOT NULL,
    "property_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "offer_document_url" TEXT NOT NULL,
    "offer_amount" DECIMAL(12,2) NOT NULL,
    "message" TEXT,
    "status" "OfferStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "offer_pkey" PRIMARY KEY ("offer_id")
);

-- CreateTable
CREATE TABLE "agents" (
    "agent_id" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "facebook_url" TEXT,
    "instagram_url" TEXT,
    "whatsapp_url" TEXT,
    "twitter_url" TEXT,
    "linkedin_url" TEXT,
    "profile_image" TEXT,
    "bio" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("agent_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "agents_email_key" ON "agents"("email");

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "careers"("career_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_images" ADD CONSTRAINT "property_images_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_inquiries" ADD CONSTRAINT "property_inquiries_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offer" ADD CONSTRAINT "offer_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "properties"("property_id") ON DELETE CASCADE ON UPDATE CASCADE;
