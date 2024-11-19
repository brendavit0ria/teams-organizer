import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
