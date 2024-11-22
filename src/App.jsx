import { useState } from "react";
import LayoutHome from "./pages/home/layout/LayoutHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>prueba</h1>
      <LayoutHome />
    </>
  );
}

export default App;
