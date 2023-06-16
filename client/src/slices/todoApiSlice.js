import { apiSlice } from "./apiSlice";

export const totoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTodos: builder.mutation({
      query: (data) => ({
        url: `${data.listId}`,
        method: "POST",
        body: data,
      }),
    }),
    getTodos: builder.mutation({
      query: (data) => ({
        url: `${data.listId}`,
        method: "GET",
      }),
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `${data.listId}`,
        method: "DELETE",
        body: data,
      }),
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `${data.listId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddTodosMutation,
  useGetTodosMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = totoApiSlice;
