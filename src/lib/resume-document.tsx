import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { portfolio, totalExperienceYears } from "@/lib/portfolio";

const styles = StyleSheet.create({
  page: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#18181b",
    padding: 32,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  qrCode: {
    width: 52,
    height: 52,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
  },
  role: {
    fontSize: 9,
    color: "#52525b",
    marginTop: 3,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 4,
  },
  contactText: {
    fontSize: 8.5,
    color: "#3f3f46",
  },

  // Sections
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginTop: 16,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#d4d4d8",
    marginBottom: 10,
  },
  description: {
    lineHeight: 0.75,
    color: "#3f3f46",
  },

  // Skills
  skillGroup: {
    marginBottom: 6,
  },
  skillCategory: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 8.5,
    color: "#3f3f46",
    lineHeight: 1.75,
  },

  // Experience
  jobBlock: {
    marginBottom: 14,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    flex: 1,
    marginRight: 8,
  },
  jobPeriod: {
    fontSize: 8.5,
    color: "#71717a",
  },
  jobOverview: {
    color: "#3f3f46",
    lineHeight: 0.75,
  },
  bullet: {
    flexDirection: "row",
    marginTop: 3,
  },
  bulletDot: {
    width: 10,
    color: "#71717a",
  },
  bulletText: {
    flex: 1,
    color: "#3f3f46",
    lineHeight: 0.75,
  },

  // Education
  educationEntry: {
    marginBottom: 8,
  },
  educationYear: {
    fontSize: 8,
    color: "#a1a1aa",
    marginBottom: 2,
  },
  educationProgram: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
  },
  educationSchool: {
    fontSize: 8.5,
    color: "#3f3f46",
  },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionDivider} />
      {children}
    </View>
  );
}

export function ResumeDocument() {
  const { profile, contact, experience, main_skills, education } = portfolio;
  const years = totalExperienceYears(experience);
  const portfolioUrl = process.env.NEXT_PUBLIC_APP_DOMAIN;

  return (
    <Document title={`${profile.name} — Resume`}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>
              Software Developer · {profile.age} y.o. · {profile.location} · {years}+ years experience
            </Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactText}>{contact.email}</Text>
              <Text style={styles.contactText}>{contact.phone}</Text>
              {portfolioUrl ? (
                <Text style={styles.contactText}>{portfolioUrl.replace(/^https?:\/\//, "")}</Text>
              ) : null}
            </View>
          </View>
          {portfolioUrl ? (
            <Image style={styles.qrCode} src={() => QRCode.toDataURL(portfolioUrl, { margin: 0 })} />
          ) : null}
        </View>

        <Section title="PROFILE">
          <Text style={styles.description}>{profile.description}</Text>
        </Section>

        <Section title="SKILLS">
          <Text style={styles.skillItems}>{main_skills.join(", ")}</Text>
        </Section>

        <Section title="EXPERIENCE">
          {experience.map((job) => (
            <View key={`${job.company}-${job.period.start}`} style={styles.jobBlock}>
              <View wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitle}>
                    {job.workType ? `${job.workType} ` : ""}
                    {job.role} — {job.company}
                  </Text>
                  <Text style={styles.jobPeriod}>
                    {job.period.start} — {job.period.end}
                  </Text>
                </View>
                <Text style={styles.jobOverview}>{job.overview}</Text>
              </View>
              {job.keyContributions.map((item) => (
                <View key={item} style={styles.bullet} wrap={false}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </Section>

        <Section title="EDUCATION">
          {education.map((edu) => (
            <View key={`${edu.school}-${edu.program}`} style={styles.educationEntry} wrap={false}>
              {edu.period?.end ? <Text style={styles.educationYear}>{edu.period.end}</Text> : null}
              <Text style={styles.educationProgram}>{edu.program}</Text>
              <Text style={styles.educationSchool}>{edu.school}</Text>
            </View>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
