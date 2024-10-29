import { Container } from "@/components/container";

export default function Loading({
  label,
}: {
  label: string;
}) {
  return (
    <Container>
      Loading ({label})...
    </Container>
  )
}
