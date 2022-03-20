import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const exchangeApiHeaders = {
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//   "x-rapidapi-key": "ad4a3e82f1mshef7e9186aedb4f9p16d8dejsnefa0c1935d43",
// };

const baseUrl = "https://api.coingecko.com/api/v3";

const createRequest = (url) => ({ url });
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'ad4a3e82f1mshef7e9186aedb4f9p16d8dejsnefa0c1935d43'
//     }
//   };

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    // }),
  }),
});

export const { useGetExchangesQuery } = exchangeApi;
