import React, { createContext, useCallback, useState } from "react";
import { SAMPLE_PRODUCTS } from "../utils/services/constants";

type TProductsContext = {
  category: string;
  setCategory: Function;
  term: string;
  setTerm: Function;
  sortValue: string;
  setSortValue: Function;
  usePriceFilter: boolean;
  setUsePriceFilter: Function;
  showPopular: boolean;
  setShowPopular: Function;
  itemsPerPage: number;
  minPrice: number;
  setMinPrice: Function;
  setMaxPrice: Function;
  maxPrice: number;
  page: number;
  setPage: Function;
  items: Function;
  totalLength: number;
};

export const ProductsContext = createContext<TProductsContext>({
  category: "popular",
  term: "",
  sortValue: "lh",
  itemsPerPage: 8,
  usePriceFilter: false,
  showPopular: false,
  minPrice: 0,
  maxPrice: 1000,
  page: 1,
  totalLength: 0,

  setCategory: () => {},
  setTerm: () => {},
  setSortValue: () => {},
  setUsePriceFilter: () => {},
  setShowPopular: () => {},
  setMinPrice: () => {},
  setMaxPrice: () => {},
  setPage: () => {},
  items: () => {},
});

export const ProductsContextProvider: React.FC<any> = ({ children }) => {
  const [category, setCategory] = useState<string>("popular");
  const [term, setTerm] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>("lh");
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [usePriceFilter, setUsePriceFilter] = useState<boolean>(false);
  const [showPopular, setShowPopular] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);
  const [totalLength, setTotalLength] = useState(0);

  const sortByPrice = (data: any, sortval: any) => {
    if (sortval !== "lh" && sortval !== "hl") return data;

    let items = [...data];

    if (sortval === "lh") {
      items.sort((a, b) => a.price - b.price);
    } else {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  };

  const items = useCallback(() => {
    let data = SAMPLE_PRODUCTS.filter((item) => {
      if (
        showPopular &&
        (item.category === category || category === "Усі категорії")
      ) {
        return item.popular;
      }
      if (usePriceFilter && (item.price < minPrice || item.price > maxPrice)) {
        return false;
      }

      if (category === "popular") {
        return item.popular;
      }

      if (category !== "Усі категорії" && category !== item.category)
        return false;

      if (term && !item.name.toLowerCase().includes(term.toLowerCase()))
        return false;

      return true;
    });

    data = sortByPrice(data, sortValue);

    setTotalLength(data.length);

    data = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return data;
  }, [
    showPopular,
    category,
    sortValue,
    usePriceFilter,
    minPrice,
    maxPrice,
    itemsPerPage,
    page,
    term,
  ]);

  return (
    <ProductsContext.Provider
      value={{
        category,
        term,
        sortValue,
        itemsPerPage,
        usePriceFilter,
        showPopular,
        minPrice,
        maxPrice,
        page,
        totalLength,
        setTerm,

        setCategory,
        setSortValue,
        setUsePriceFilter,
        setShowPopular,
        setMinPrice,
        setMaxPrice,
        setPage,
        items,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
//   let data = SAMPLE_PRODUCTS.filter((item) => {
//     if (showPopular) {
//       return false;
//     }
//     if (usePriceFilter && (item.price < minPrice || item.price > maxPrice)) {
//       return false;
//     }

//     if (category === "popular") {
//       return item.popular;
//     }

//     if (category !== "Усі категорії" && category !== item.category)
//       return false;

//     if (term && !item.name.toLowerCase().includes(term.toLowerCase()))
//       return false;

//     return true;
//   });

//   let totalLength = data.length;

//   data = sortByPrice(data, sortValue);

//   data = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   resolve({ data, totalLength });
