import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";

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
      <body className="font-malayalam">
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
