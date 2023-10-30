import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute z-10 h-full w-full top-0 left-0">{children}</div>
  );
};

export default AdminLayout;
