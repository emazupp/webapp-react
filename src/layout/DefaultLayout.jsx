import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />

      <main className="container mt-5">
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}
