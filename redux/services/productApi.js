/* import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; */
/* 
export const productsApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
}); */

/* export const { useGetProductsQuery, useCreateProductMutation  } = productsApi; */
