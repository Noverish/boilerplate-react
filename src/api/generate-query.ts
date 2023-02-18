import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface GenerateQueryOption<P> {
  name: string;
  api: (p: P) => AxiosRequestConfig<P>;
}

interface GenerateQueryResult<P, R> {
  useApi: (p: P) => R;
}

export function generateQuery<P, R>(option: GenerateQueryOption<P>): GenerateQueryResult<P, R> {
  const key = (p: P) => [option.name, JSON.stringify(p)];
  const api = (p: P) => axios<R>(option.api(p)).then(v => v.data);

  const useApi = (p: P) => useQuery(key(p), () => api(p), { staleTime: Infinity }).data!!;

  return {
    useApi,
  };
}
