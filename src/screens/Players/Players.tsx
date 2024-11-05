import { Container, Form } from "./styles";

import { Header } from "@components/Header/Header";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Highlight } from "@components/Highlight/Highlight";
import { Input } from "@components/Input/Input";
import { Filter } from "@components/Filter/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <Filter title="TIME A" isActive />
    </Container>
  );
}
