import { Container } from "./styles";

import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";
import { GroupCard } from "@components/GroupCard/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="" />
    </Container>
  );
}
