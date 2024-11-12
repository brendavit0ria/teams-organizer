import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { Header } from "@components/Header/Header";
import { Highlight } from "@components/Highlight/Highlight";
import { GroupCard } from "@components/GroupCard/GroupCard";
import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { Button } from "@components/Button/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
