// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "  https://d.mmsdev.site/api/v1" }),
  tagTypes: ["media"],
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: ({token, photos}) => ({
        url: `/photo`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: photos,
      }),

      invalidatesTags: ["media"],
    }),

    getImages: builder.mutation({
      query: (token) => ({
        url: `/photo`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),

      invalidatesTags: ["media"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadImageMutation, useGetImagesMutation } = mediaApi;
