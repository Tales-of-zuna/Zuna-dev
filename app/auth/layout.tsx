import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login",
};
const LoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-screen absolute z-20 top-0 left-0 w-screen">
      {children}
    </section>
  );
};

export default LoginLayout;
