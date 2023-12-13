export interface SearchItem {
  kind: 'youtube#video';
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailData;
    medium: ThumbnailData;
    high: ThumbnailData;
    standard: ThumbnailData;
    maxres: ThumbnailData;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: DefaultLanguage;
  defaultLanguage?: DefaultLanguage;
}

export interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}

export enum DefaultLanguage {
  en = 'en',
  us = 'en-US',
  ru = 'ru',
}
