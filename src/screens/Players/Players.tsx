import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

import { Header } from "@components/Header/Header";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { Highlight } from "@components/Highlight/Highlight";
import { Input } from "@components/Input/Input";
import { Filter } from "@components/Filter/Filter";
import { PlayerCard } from "@components/ PlayerCard/ PlayerCard";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["brenda"]);

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
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
}
