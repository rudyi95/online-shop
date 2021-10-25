import { ButtonIconType } from "./enums";

declare interface Item {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  rating: ItemRating;
  image: string;
}
// declare interface Item {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   volume: number;
//   description: string;
//   popular: boolean;
//   image?: string;
// }
declare interface ItemRating {
  rate: number;
  count: number;
}

declare interface SearchItem {
  category: string;
  term: string;
  sortValue: string;
  itemsPerPage: number;
  usePriceFilter: string | boolean;
  minPrice: number;
  maxPrice: number;
  page: number;
}

declare interface IconButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  type: ButtonIconType;
  disabled?: boolean;
  useDefaultStyles?: boolean;
  fontSize?: IconFontSizeType;
  color?: IconColorType;
  buttonType?: IconButtonType;
  badgeContent?: React.ReactNode;
  href?: string;
  badgeColor?: BadgeColorType;
}

declare type IconFontSizeType = "inherit" | "default" | "large" | "small";
declare type IconColorType = "inherit" | "primary" | "secondary" | "default";
declare type IconButtonType = "withBadge" | "withTooltip";

declare type ButtonSizeType = "large" | "small" | "medium";

declare type BadgeColorType = "default" | "primary" | "secondary" | "error";
