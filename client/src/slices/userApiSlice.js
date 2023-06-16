import { apiSlice } from "./apiSlice";

const USER_URL = "/user";
const LIST_URL = "/list";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/logout`,
        method: "POST",
        body: data,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    setFavList: builder.mutation({
      query: (data) => ({
        url: `${LIST_URL}/${data.user}`,
        method: "PUT",
        body: data.favs,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateMutation,
  useSetFavListMutation,
} = userApiSlice;
