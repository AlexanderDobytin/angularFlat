export interface IPaginationData {
  count: number;
  page: number;
  pageSize: number;
}
export interface IFlatImage {
  name: string;
  image: string;
  isPlanImage: boolean;
}

export interface IFlatCategory {
  id: number;
  name: string;
}

export interface IFlatCity {
  name: string;
}

export interface IFlat {
  id: number;
  images: IFlatImage[] | null;
  address: string;
  extraInformation: string | null;
  apartment: string;
  isNewFlat: boolean;
  numRooms: number;
  square: number | null;
  squareLot: number | null;
  floor: number;
  floorsHouse: number;
  price: number;
  material: string;
  finishing: string;
  dateConstruction: string;
  builtYear: string | null;
  readyQuarter: string | null;
  constructionCompany: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  description: string;
  district: string | null;
  cityId: number;
  city: IFlatCity;
  category: IFlatCategory;
  commercialCategory: IFlatCategory | null;
}

export interface IFilter {
  city?: number;
  category: number[];
  room_count: number[];
}
