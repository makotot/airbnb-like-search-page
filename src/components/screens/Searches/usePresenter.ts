import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { filterFalsyFromObject } from "./utils";
import { RESULT_LIMIT } from "../../../config";
import { searchFormSlice } from "../../features/SearchForm/searchFromSlice";

export const usePresenter = () => {
  const [queryParameter, updateQueryParameter] = useState("");
  const router = useRouter();
  const { destination, dateRange, people } = useSelector(
    (state: RootState) => state.searchForm
  );
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: {
        ...filterFalsyFromObject({
          destination: destination.value,
          dateStart: dateRange.value.start,
          dateEnd: dateRange.value.end,
          people: people.value,
          page: 1,
          limit: RESULT_LIMIT,
        }),
      },
    });
    dispatch(searchFormSlice.actions.hideForm());
  };

  useEffect(() => {
    const destination = router.query.destination
      ? `prefecture.name_like=${router.query.destination}`
      : null;
    const dateStart = router.query.dateStart
      ? `dateStart_gte=${router.query.dateStart}`
      : null;
    const dateEnd = router.query.dateStart
      ? `dateEnd_lte=${router.query.dateEnd}`
      : null;
    const people = router.query.people
      ? `capacity_gte=${router.query.people}`
      : null;
    const pagination = `_page=${router.query.page || 1}&_limit=${
      router.query.limit || RESULT_LIMIT
    }`;
    const parameters = [destination, dateStart, dateEnd, people, pagination]
      .filter((v) => v)
      .join("&");

    updateQueryParameter(parameters);
  }, [router.query]);

  return {
    queryParameter,
    router,
    handleSubmit,
  };
};
