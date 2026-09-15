import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/navigation_bar";
import localFont from "next/font/local";
import AssetLoader from "./components/asset_loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const minecrafterAlt = localFont({
  src: "./fonts/Minecrafter.Alt.ttf",
  variable: "--font-minecrafter-alt"
})

const minecrafterReg = localFont({
  src: "./fonts/Minecrafter.Reg.ttf",
  variable: "--font-minecrafter-reg"
})

const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--font-minecraft"
})

const mcNametag = localFont({
  src: "./fonts/MCNametag.otf",
  variable: "--font-mc-nametag"
})




export const metadata: Metadata = {
  title: "ITS-JP Portfolio",
  description: "JP's minecraft themed portfolio!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${minecrafterAlt.variable} ${minecrafterReg.variable} ${minecraft.variable} ${mcNametag.variable}`}>
        <AssetLoader>
          <NavigationBar />
          {children}
        </AssetLoader>
      </body>
    </html>
  );
}
