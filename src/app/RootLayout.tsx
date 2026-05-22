import Alert from "@/components/common/Alert";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Alert />
      {children}
    </>
  );
}
