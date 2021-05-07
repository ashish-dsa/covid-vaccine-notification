import { NavigationProp } from "@react-navigation/native";
import { IFilters } from "./IFilters";

export interface ISearchParams {
  filters: IFilters;
  searchType: string;
  searchParams: any;
  navigation?: NavigationProp<any>;
}
