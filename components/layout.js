import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <root>
      <Header/>
        <div className="main">
          {children}
        </div>
      <Footer></Footer>
      </root>
    </>
  )
}