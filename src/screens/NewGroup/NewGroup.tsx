import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";
import { Button } from "@components/Button/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
