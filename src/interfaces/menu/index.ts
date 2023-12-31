import { DishInterface } from 'interfaces/dish';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  restaurant_id: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  dish?: DishInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    dish?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  name?: string;
}
