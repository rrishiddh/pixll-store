import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "pixll",
  description: "Pixll || Digital Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable}  antialiased max-w-[1440px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
