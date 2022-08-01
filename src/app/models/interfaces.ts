type FilterSelector = null | boolean;

export default interface SearchFilter {
  byDate: FilterSelector;
  byCount: FilterSelector;
  byWord: string;
}
