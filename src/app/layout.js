import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
      
    </html>
  );
}
