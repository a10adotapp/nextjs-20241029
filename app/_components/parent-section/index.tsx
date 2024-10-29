import { use } from "react";
import { getUserCached } from "@/actions/get-user";
import { Container } from "@/components/container";

export function ParentSection() {
  console.log("ParentSection");

  const user = use(getUserCached());

  const title = `Parent Section (${user.id})`;

  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
