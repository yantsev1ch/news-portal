import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodeBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  user: User;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
