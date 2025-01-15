import React from "react";
import LoginForm from "../( components )/Loginform";
import RegisterForm from "../( components )/Registerform";

const MainLayout = () => {
  return (
    <main className="flex flex-col lg:flex-row max-w-6xl items-center mx-auto
      py-10 px-6 gap-10">
      <LoginForm />
      <RegisterForm />
    </main>
  );
};

export default MainLayout;
