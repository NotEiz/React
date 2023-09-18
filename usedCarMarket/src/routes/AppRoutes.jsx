import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routeConsts";
import { UserContext } from "../contexts/userContext";
const AppRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);

  return (
    <>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
