import { useState, useEffect } from "react";
import "./App.scss";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (

    <>
      {!loading ? (
        <>
          <DefaultLayout />
        </>
      ) : (
        <LoadingScreen />
      )}

    </>


  );
}

export default App;
