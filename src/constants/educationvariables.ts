export interface EducationItem {
  degree: string;
  institution: string;
  dates?: string;
  coursework?: string[];
}

export const education: EducationItem[] = [
  {
    degree: "M.S. Computer Science",
    institution: "University of Colorado Boulder",
    dates: "In progress, expected 2028",
    coursework: ["Network Systems", "Object-Oriented Analysis & Design"],
  },
  {
    degree: "Software Engineering",
    institution: "The Grace Hopper Program at Fullstack Academy of Code",
    dates: "April 2020",
  },
  {
    degree: "Coursework in Android Development & Mathematics",
    institution: "Rio Salado Community College",
  },
  {
    degree: "B.F.A. Theatrical Production Design and Technology",
    institution: "University of Arizona",
    dates: "December 2008",
  },
];

export interface CertificationItem {
  name: string;
  url: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "IBM Developer Profession — Level 2 Experienced Credential",
    url: "https://www.credly.com/badges/db9d6c92-b1c6-4e52-97a7-166a92e6f4fa",
  },
  {
    name: "IBM Blue Core Coach",
    url: "https://www.credly.com/badges/68d4a990-ccf3-42fd-a3ef-a0e481898a54/public_url",
  },
];
