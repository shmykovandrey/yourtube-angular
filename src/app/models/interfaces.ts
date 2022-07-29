type FilterSelector = 'none' | 'up' | 'down';

export default interface SearchFilter {
  byDate: FilterSelector;
  byCount: FilterSelector;
  byWord: string;
}
