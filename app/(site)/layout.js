import localFont from 'next/font/local';
import Footer from "../componnent/Footer";
import Header from "../componnent/Header";
import "../globals.css";
const myFontOne = localFont({
  src: "../../public/Font/RAKIBY.ttf",
  variable: "--rakiby"
});

const myFontTwo = localFont({
  src: "../../public/Font/BeausiteFitWebTrial-Regular.woff2",
  variable: "--beaust"
});

export const metadata = {
  title: "Book-Showcase",
  description: "Social media accounts for international businesses in multiple languages,write website content that ranks globally,create Google Ads campaigns targeting international audiences,affordable digital marketing solutions for international businesses,design a logo for a global brand,the best copywriter for international website content"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${myFontOne.variable} ${myFontTwo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
