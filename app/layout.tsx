import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { websiteMetadata } from "@/lib/data";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const { title, description } = websiteMetadata;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title,
    description,
};

export default function Root({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
