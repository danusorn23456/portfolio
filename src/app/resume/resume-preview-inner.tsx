"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { ResumeDocument } from "@/lib/resume-document";

export function ResumePreview() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh", border: "none" }}>
      <ResumeDocument />
    </PDFViewer>
  );
}
