export const FIRM_DETAILS = {
  name: "Mwaniki & Associates",
  tagline: "Advocates of the High Court of Kenya",
  address: "12th Floor, Western Heights, Karuna Road, Westlands, Nairobi",
  phone: "+254 700 000 000",
  email: "legal@mwanikiadvocates.com",
  whatsapp: "254700000000",
  workingHours: "Mon - Fri: 08:00 - 17:00",
  socials: {
    linkedin: "#",
    twitter: "#",
    instagram: "#"
  }
};

export const PRACTICE_AREAS = [
  {
    id: "corporate",
    title: "Corporate Governance",
    subtitle: "Strategic Legal Advisory",
    description: "From eCitizen registrations to complex M&A, we handle the legal architecture of your business growth.",
    icon: "Briefcase",
    size: "large"
  },
  {
    id: "conveyancing",
    title: "Real Estate & Property",
    subtitle: "Conveyancing Experts",
    description: "Secure property transitions, title searches, and multi-unit development legalities across Kenya.",
    icon: "Home",
    size: "medium"
  },
  {
    id: "litigation",
    title: "Dispute Resolution",
    subtitle: "Courtroom Excellence",
    description: "Aggressive representation and tactical mediation in civil and commercial litigation cases.",
    icon: "Gavel",
    size: "medium"
  },
  {
    id: "family",
    title: "Family Law",
    subtitle: "Sensitive Estate Planning",
    description: "Succession planning, probate, and matrimonial matters handled with the utmost discretion.",
    icon: "Users",
    size: "small"
  },
  {
    id: "intellectual",
    title: "Intellectual Property",
    subtitle: "Protecting Innovation",
    description: "Trademark registrations and IP protection for the vibrant Kenyan tech and creative sectors.",
    icon: "Zap",
    size: "small"
  }
];

/**
 * Renamed from TEAM to TEAM_MEMBERS to fix import error in Team.tsx 
 * and added properties (education, specialties) required for the Team member cards.
 */
export const TEAM_MEMBERS = [
  {
    name: "Silas Mwaniki",
    role: "Managing Partner",
    bio: "Specializing in High-Value Conveyancing and Corporate Law with over 15 years of practice.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    lsk: "P105/12345/14",
    education: "LL.B (Hons) UoN, Dip. KSL",
    specialties: ["Corporate Law", "Conveyancing", "Taxation"]
  },
  {
    name: "Faith Njeri",
    role: "Senior Associate",
    bio: "A leading voice in Matrimonial Law and Alternative Dispute Resolution in the East African region.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    lsk: "P105/67890/18",
    education: "LL.B (Hons) Strathmore, Dip. KSL",
    specialties: ["Family Law", "ADR", "Succession"]
  }
];
