// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://d.mmsdev.site/api/v1' }),
  endpoints: (builder) => ({
    // getAllProducts: builder.query({
    //   query: () => `/product`,
    // }),

    getAllProducts: builder.mutation({
      query: (token) => ({
        url: `/product`,
        method: 'GET',
        headers:{authorization: `Bearer ${token}`}
      }),
      invalidatesTags:['auth']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsMutation } = productApi