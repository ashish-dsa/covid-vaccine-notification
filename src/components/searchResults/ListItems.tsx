import { List } from "react-native-paper";

export const ListItems = ({ items, value }: { items: Array<any>; value: string }) => {
  return items.map((item, index) => {
    return <List.Item title={item[value]} key={index} />;
  });
};
