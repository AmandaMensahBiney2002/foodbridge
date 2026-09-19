import Wrapper from "./Wrapper";
import Sidebar from "../components/Sidebar";

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1">
          {children}
        </main>
      </div>
    </Wrapper>
  );
}

export default AuthLayout;