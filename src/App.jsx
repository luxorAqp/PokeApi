import { useState } from "react";
import LayoutHome from "./pages/home/layout/LayoutHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LayoutHome />
    </>
  );
}

export default App;
