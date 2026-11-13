import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

const title = "Muhammad Anas | Full-Stack Engineer";
const description =
  "Full-stack engineer in Germany building real-time systems end to end: firmware, data pipelines, AWS cloud and the dashboards people use every day.";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadanas.vercel.app"),
  title,
  description,
  authors: [{ name: "Muhammad Anas" }],
  keywords: ["Muhammad Anas", "Full-Stack Engineer", "IoT", "AWS", "Next.js", "React", "Node.js", "Germany", "Passau"],
  openGraph: { title, description, url: "/", siteName: "Muhammad Anas", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0b100f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
