import "./globals.css";
import { Noto_Serif_Malayalam } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const malayalam = Noto_Serif_Malayalam({ subsets: ["latin"] });

export const metadata = {
  title: "The Developer's Station",
  description:
    "The Developer's Station: a one stop station to understand Git/Github, Tailwindcss, & Next.js!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={malayalam.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
