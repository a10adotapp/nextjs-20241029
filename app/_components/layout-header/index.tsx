import { use } from "react";
import { getUserCached } from "@/actions/get-user";
import { Container } from "@/components/container";

export function LayoutHeader() {
  console.log("LayoutHeader");

  const user = use(getUserCached());

  const title = `Layout Header (${user.id})`;

  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
