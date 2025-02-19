import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import GlobalStyles from "./globals.css";

export default function Home() {
  return (
    <body className={`${GlobalStyles}`}>
      <Header />
      <Container />
      <Footer />
    </body>
  );
}
