export interface ImageData {
  name: string;
  url: string;
  uuid: string;
}
export interface ImageGridProps {
  images?: ImageData[];
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: number;
}
export interface CurrentCarouselImage {
  title?: string;
  length: number;
  url?: string;
  index: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}
