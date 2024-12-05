import { Outlet } from "react-router-dom";

const NoSidebarLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default NoSidebarLayout;
