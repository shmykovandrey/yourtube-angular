enum FilterSelector {
  none,
  true,
  false,
}

export default interface SearchFilter {
  byDate: FilterSelector;
  byCount: FilterSelector;
  byWord: string;
}
