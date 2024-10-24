import { Container } from "./styles";

import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
