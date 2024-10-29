import { ReactNode, Suspense } from "react";
import { Container } from "@/components/container";
import Loading from "@/components/loading";
import { LayoutHeader } from "./_components/layout-header";
import "./globals.css";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  console.log("Layout");

  const title = "Layout";

  return (
    <html>
      <body>
        <main className="p-4">
          <Container>
            <div>{title}</div>

            <LayoutHeader />

            <Suspense fallback={<Loading label="Page" />}>
              {children}
            </Suspense>
          </Container>
        </main>
      </body>
    </html>
  );
}
