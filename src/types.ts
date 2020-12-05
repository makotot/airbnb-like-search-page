export type Room = {
  id: number;
  title: string;
  capacity: number;
  price: string;
  dateStart: Date;
  dateEnd: Date;
  country: string;
  prefecture: {
    id: number;
    name: string;
  };
  features: string[];
  rate: number;
};
