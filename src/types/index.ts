export interface ImageData {
  name: string;
  url: string;
  uuid: string;
}
export interface ImageGridProps {
  images?: ImageData[];
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}
export interface CurrentCarouselImage {
  length: number;
  url?: string;
  index: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}
