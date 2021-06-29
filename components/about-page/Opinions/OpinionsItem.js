//styles
import { Wrapper, Opinion, Name } from "./OpinionsItem.style";

const OpinionsItem = ({ item }) => {
  const { opinion, name } = item;

  return (
    <Wrapper>
      <Opinion>{opinion}</Opinion>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default OpinionsItem;
