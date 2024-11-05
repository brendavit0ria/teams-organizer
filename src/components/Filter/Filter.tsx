import { TouchableOpacityProps } from "react-native";
import { Container, Title, FIlterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FIlterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
