import Navbar from "@/components/Navbar";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import AuthSession from "@/components/providers/session-provider";
export const metadata = {
  title: "Starter",
  description: "Starter",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <AuthSession>
          <Navbar currentUser={currentUser} />
          <div>{children}</div>
        </AuthSession>
      </body>
    </html>
  );
}
