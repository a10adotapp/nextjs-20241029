import { use } from "react";
import { getUser } from "@/actions/get-user";
import { Container } from "@/components/container";

export function ParentSection() {
  console.log("ParentSection");

  const user = use(getUser());

  const title = `Parent Section (${user.id})`;

  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
