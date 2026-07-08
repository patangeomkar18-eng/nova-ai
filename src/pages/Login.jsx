import PageBackground from "../layouts/PageBackground";

import LoginForm from "../components/auth/LoginForm";
import AuthBrandPanel from "../components/auth/AuthBrandPanel";

export default function Login() {
  return (
    <PageBackground>
      <div className="min-h-screen flex">
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <LoginForm />
        </div>

        <AuthBrandPanel />
      </div>
    </PageBackground>
  );
}