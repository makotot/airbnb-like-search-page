import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RESULT_LIMIT } from "../../../../config";
import { RootState } from "../../../../state/store";
import { filterFalsyFromObject } from "../../../../utils";
import { selectTotal } from "../searchResultSlice";

const MAX_PAGE_ITEMS_DISPLAY_SIZE = 5;

export const usePagination = ({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}): {
  pages: number[];
  hasPrev: () => boolean;
  hasNext: () => boolean;
  hasFirst: () => boolean;
  hasLast: () => boolean;
  isBackwardTrucated: () => boolean;
  isForwardTruncated: () => boolean;
  totalPage: number;
  currentPage: number;
} => {
  const [pages, updatePages] = useState<number[]>([]);
  const displayPageItemsSize = MAX_PAGE_ITEMS_DISPLAY_SIZE * 2 + 1;
  const setPages = useCallback(() => {
    const pageItems = [...Array(totalPage)].map((_, i) => i + 1);
    const isBackwardDeadEnd = currentPage <= MAX_PAGE_ITEMS_DISPLAY_SIZE;
    const isForwardDeadEnd =
      currentPage + MAX_PAGE_ITEMS_DISPLAY_SIZE >= totalPage;

    if (isBackwardDeadEnd) {
      return updatePages(pageItems.slice(0, displayPageItemsSize));
    }
    if (isForwardDeadEnd) {
      return updatePages(pageItems.slice(-displayPageItemsSize));
    }

    return updatePages(
      pageItems.slice(
        currentPage - MAX_PAGE_ITEMS_DISPLAY_SIZE - 1,
        currentPage + MAX_PAGE_ITEMS_DISPLAY_SIZE
      )
    );
  }, [
    totalPage,
    currentPage,
    MAX_PAGE_ITEMS_DISPLAY_SIZE,
    displayPageItemsSize,
  ]);

  const hasPrev = useCallback(() => currentPage > 1, [currentPage]);
  const hasFirst = useCallback(
    () =>
      currentPage > displayPageItemsSize - MAX_PAGE_ITEMS_DISPLAY_SIZE &&
      totalPage > displayPageItemsSize,
    [currentPage, totalPage, displayPageItemsSize, MAX_PAGE_ITEMS_DISPLAY_SIZE]
  );
  const isBackwardTrucated = useCallback(
    () =>
      hasPrev() &&
      hasFirst() &&
      currentPage !== displayPageItemsSize - 1 &&
      totalPage > displayPageItemsSize + 1,
    [hasPrev, hasFirst, currentPage, totalPage, displayPageItemsSize]
  );

  const hasNext = useCallback(() => totalPage > currentPage, [
    totalPage,
    currentPage,
  ]);
  const hasLast = useCallback(
    () =>
      totalPage > currentPage + MAX_PAGE_ITEMS_DISPLAY_SIZE &&
      totalPage > displayPageItemsSize,
    [currentPage, MAX_PAGE_ITEMS_DISPLAY_SIZE, totalPage, displayPageItemsSize]
  );
  const isForwardTruncated = useCallback(
    () =>
      hasNext() &&
      hasLast() &&
      currentPage !== totalPage - MAX_PAGE_ITEMS_DISPLAY_SIZE - 1 &&
      totalPage > displayPageItemsSize + 1,
    [
      hasNext,
      hasLast,
      currentPage,
      totalPage,
      MAX_PAGE_ITEMS_DISPLAY_SIZE,
      displayPageItemsSize,
    ]
  );

  useEffect(() => {
    setPages();
  }, [totalPage, currentPage, setPages]);

  return {
    pages,
    hasPrev,
    hasNext,
    hasFirst,
    hasLast,
    isBackwardTrucated,
    isForwardTruncated,
    totalPage,
    currentPage,
  };
};

export const usePresenter = () => {
  const router = useRouter();
  const { total } = useSelector((state: RootState) => state.searchResult);
  const currentPageTotalRoom = useSelector(selectTotal);
  const totalPage = Math.ceil(Number(total) / RESULT_LIMIT) || 1;
  const currentPage = router.query.page ? Number(router.query.page) : 1;
  const pagination = usePagination({ totalPage, currentPage });

  const handleChangePage = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: {
        ...filterFalsyFromObject({
          destination: router.query.destination,
          dateStart: router.query.dateStart,
          dateEnd: router.query.dateEnd,
          people: router.query.people,
          page: e.currentTarget.dataset.page,
          limit: RESULT_LIMIT,
        }),
      },
    });
  };

  return {
    pagination,
    handleChangePage,
    currentPageTotalRoom,
    total,
    currentPage,
  };
};
