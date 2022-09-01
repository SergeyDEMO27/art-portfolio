import { useMemo } from "react";
import { IGalleryImg } from "../types/types";

export const useSortedImages = (
  images: Array<IGalleryImg>,
  sortValue: string
): Array<IGalleryImg> => {
  const filteredImages = useMemo(() => {
    switch (sortValue) {
      case "nameUp":
        return [...images].sort((a, b) => a.title.localeCompare(b.title));
      case "nameDown":
        return [...images].sort((a, b) => b.title.localeCompare(a.title));
      case "type":
        return [...images].sort((a, b) => a.type.localeCompare(b.type));
      default:
        return images;
    }
  }, [images, sortValue]);

  return filteredImages;
};

export const useSortedSearchedImages = (
  images: Array<IGalleryImg>,
  sortValue: string,
  searchValue: string
): Array<IGalleryImg> => {
  const sortedImages = useSortedImages(images, sortValue);

  const filteredSearchedImages = useMemo(() => {
    return sortedImages.filter(({ title }) =>
      title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [sortedImages, searchValue]);

  return filteredSearchedImages;
};
