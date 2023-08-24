import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../Api/AuthApi";
import cashierSlice from "../Slice/cashierSlice";
import { productApi } from "../Api/productApi";
import { mediaApi } from "../Api/MediaApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    cashier: cashierSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, mediaApi.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
