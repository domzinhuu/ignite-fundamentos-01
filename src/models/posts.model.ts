export interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

export interface PostContent {
  type: string;
  content: string;
}

export interface PostModel {
  id: number;
  author: Author;
  publishedAt: Date;
  content: PostContent[];
}
