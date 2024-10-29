import { Container } from "@/components/container";
import { ParentSection } from "./_components/parent-section";
import { Suspense } from "react";
import Loading from "@/components/loading";

export default function Page() {
  console.log("Page");

  const title = `Page`;

  return (
    <Container>
      <div>{title}</div>

      <Suspense fallback={<Loading label="Parent Section" />}>
        <ParentSection />
      </Suspense>
    </Container>
  );
}
