import { baseApi } from '../../baseApi.js';

export const providerCarSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCar: builder.mutation({
      query: credentials => ({
        url: '/car-rentals',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['CreateProviderCar'],
      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    getProviderCar: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/car-rentals/partner?page=${page}`,
      providesTags: ['CreateProviderCar', 'UpdateProviderSingleCar'],
      meta: {
        skipAuth: false,
      },
    }),

    updateProviderCar: builder.mutation({
      query: credentials => {
        console.log('Credentials being sent:', credentials); // ✅ Log here
        const idEntry = credentials?._parts?.find(([key]) => key === 'id');
        const id = idEntry ? idEntry[1] : null;
        // console.log('Updating Security with id:', id);
        return {
          url: `/car-rentals/${id}`,
          method: 'PATCH',
          body: credentials,
        };
      },
      invalidatesTags: ['UpdateProviderSingleCar'],
      meta: {
        skipAuth: false,
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateCarMutation,
  useGetProviderCarQuery,
  useUpdateProviderCarMutation,
} = providerCarSlice;
