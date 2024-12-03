import type { Metadata } from "next";
import { Inter,Fira_Code} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";


const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bs-tech-blogs.vercel.app"),
  title: {  
    default:"BSTechBlog - A blog for developers",
    template: '%s | BSTechBlog - A blog for developers',

  },
  description: "A blog posts for developers by developer.",
  openGraph:{
    title: "BSTechBlog - A blog for developers",
    description: "A blog posts for developers by developer.",
    type: "website",
    locale: "en_PK",
    url: "https://bs-tech-blogs.vercel.app/",
    siteName: "BSTechBlogs",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
