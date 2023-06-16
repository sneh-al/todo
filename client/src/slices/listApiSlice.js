import { apiSlice } from "./apiSlice";

const LIST_URL = "/list";

const listApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLists: builder.mutation({
      query: (userId) => ({
        url: `${LIST_URL}/${userId}`,
        method: "GET",
      }),
    }),
    createList: builder.mutation({
      query: (data) => ({
        url: `${LIST_URL}/${data.user}`,
        method: "POST",
        body: data,
      }),
    }),

    getFav: builder.mutation({
      query: (data) => ({
        url: `${LIST_URL}/${data.user}`,
        method: "PUT",
        body: data.favs,
      }),
    }),
  }),
});

export const {
  useGetListsMutation,
  useCreateListMutation,
  
} = listApiSlice;
