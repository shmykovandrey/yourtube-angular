import Item from './item.response';

export default interface Responce {
  kind: string;
  etag: string;
  pageInfo: {
    totalResult: number;
    resultsPerPage: number;
  };
  items: Item[];
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
