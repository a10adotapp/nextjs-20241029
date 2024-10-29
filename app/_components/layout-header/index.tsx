import { getUserCached } from "@/actions/get-user";
import { Container } from "@/components/container";

export async function LayoutHeader() {
  console.log("LayoutHeader");

  const user = await getUserCached();

  const title = `Layout Header (${user.id})`;

  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
}
