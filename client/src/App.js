import { Route, Routes, useLocation } from "react-router-dom";
import { About, Detail, FormGame, Home, Landing } from "./views";
import { Footer, Header } from "./components";
import { Fragment } from "react";

function App() {
  const { pathname } = useLocation();
  return (
    <Fragment>
      {pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<FormGame />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </Fragment>
  );
}

export default App;
