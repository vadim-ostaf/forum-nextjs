import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <root>
          <div className="main">
            <Header/>
            {children}
          </div>
        <Footer></Footer>
      </root>
    </>
  )
}