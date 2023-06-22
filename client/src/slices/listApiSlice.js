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
    deleteList: builder.mutation({
      query: (data) => ({
        url: `${LIST_URL}/${data}`,
        method: "DELETE",
      }),
    }),
    updateList: builder.mutation({
      query: (data) => ({
        url: `${LIST_URL}/${data.listId}`,
        method: "PUT",
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
  useUpdateListMutation,
  useDeleteListMutation,
} = listApiSlice;
