import Navbar from "@/components/Navbar";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";

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
        <Navbar currentUser={currentUser} />
        <div>{children}</div>
      </body>
    </html>
  );
}
