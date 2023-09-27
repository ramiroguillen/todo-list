import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/tasks" }),
  endpoints: (builder) => ({
    // findOne: builder.query({
    //   query: (id) => `/${id}`,
    //   providesTags: ["findOne"],
    // }),
    findAll: builder.query({
      query: () => "/",
      providesTags: ["findAll"],
    }),
    create: builder.mutation({
      query: (task) => ({
        url: "/",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["findAll"],
    }),
    remove: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["findAll"],
    }),
    update: builder.mutation({
      query: (task) => ({
        url: `/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["findAll"],
    }),
  }),
});

export const {
  useFindAllQuery,
  // useFindOneQuery,
  useCreateMutation,
  useRemoveMutation,
  useUpdateMutation,
} = tasksApi;
