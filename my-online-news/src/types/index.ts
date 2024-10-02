export type News = {
  id: number;
  title: string;
  section: string;
  url: string;
  abstract: string;
  media: Array<{
    'media-metadata': Array<{
      url: string;
    }>;
  }>;
};

export type NewsCategory = {
  id: number;
  title: string;
  section: string;
  url: string;
  abstract: string;
  multimedia: Array<{
    url: string;
  }>;
}

export type Tags = {
  des_facet: string[]
}
