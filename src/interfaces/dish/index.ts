import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface DishInterface {
  id?: string;
  menu_id: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: any;
  updated_at?: any;

  menu?: MenuInterface;
  _count?: {};
}

export interface DishGetQueryInterface extends GetQueryInterface {
  id?: string;
  menu_id?: string;
  name?: string;
  description?: string;
  image?: string;
}
