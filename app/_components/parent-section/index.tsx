import { getUserCached } from "@/actions/get-user";
import { Container } from "@/components/container";

export async function ParentSection() {
  console.log("ParentSection");

  const user = await getUserCached();

  const title = `Parent Section (${user.id})`;

  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
