import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michael Fedorovsky | DevOps Engineer & System Administrator",
  description:
    "Results-driven DevOps Engineer with expertise in cloud infrastructure, CI/CD automation, container orchestration, and monitoring systems. 50+ automation tools built. Expert in AWS, Docker, Kubernetes, Prometheus/Grafana, and Python/Bash scripting.",
  keywords: [
    "DevOps Engineer",
    "System Administrator",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Infrastructure Automation",
    "Israel",
  ],
  authors: [{ name: "Michael Fedorovsky" }],
  openGraph: {
    title: "Michael Fedorovsky | DevOps Engineer",
    description:
      "Results-driven DevOps Engineer with expertise in cloud infrastructure, CI/CD automation, and container orchestration. 50+ automation tools built.",
    url: "https://michaelunkai.github.io/portfolio-website",
    siteName: "Michael Fedorovsky Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Fedorovsky | DevOps Engineer",
    description:
      "Results-driven DevOps Engineer with expertise in cloud infrastructure, CI/CD automation, and container orchestration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
