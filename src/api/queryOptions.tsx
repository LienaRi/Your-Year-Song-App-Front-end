import { queryOptions } from "@tanstack/react-query";
import { fetchSongs } from "./fetchSongs";

export const songsQueryOptions = queryOptions({
    queryKey: ['songs'],
    queryFn: (year) => fetchSongs(Number(year)),
  });

export const searchedSongsQueryOptions = (year: number) => queryOptions({
    queryKey: ['songs', { year }],
    queryFn: () => fetchSongs(year),
  });
