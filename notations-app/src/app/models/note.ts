import { ICategory } from './category';

export type INote = {
  id: number;
  text: string;
  category: ICategory;
  isFinished?: boolean;
};
