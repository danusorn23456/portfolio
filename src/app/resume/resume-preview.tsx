"use client";

import dynamic from "next/dynamic";

const ResumePreviewInner = dynamic(
  () => import("./resume-preview-inner").then((mod) => mod.ResumePreview),
  { ssr: false, loading: () => <p className="p-6 text-sm text-muted">Loading preview…</p> },
);

export function ResumePreview() {
  return <ResumePreviewInner />;
}
