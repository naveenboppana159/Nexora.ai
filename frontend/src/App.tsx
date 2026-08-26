import { useState } from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

type AuthPage = "signin" | "signup";

function App() {
  const [currentPage, setCurrentPage] =
    useState<AuthPage>("signin");

  if (currentPage === "signup") {
    return (
      <SignUp
        onNavigateToSignIn={() => setCurrentPage("signin")}
      />
    );
  }

  return (
    <SignIn
      onNavigateToSignUp={() => setCurrentPage("signup")}
    />
  );
}

export default App;