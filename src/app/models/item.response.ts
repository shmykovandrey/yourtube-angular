interface Thumbnails {
  url: string;
  width: number;
  heigth: number;
}

export default interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
      standart: Thumbnails;
      maxres: Thumbnails;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
