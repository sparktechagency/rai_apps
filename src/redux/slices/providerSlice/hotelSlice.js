import { baseApi } from '../../baseApi.js';

export const providerHotelSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createHotel: builder.mutation({
      query: credentials => ({
        url: '/hotels',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['CreateProviderHotels'],
      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    getProviderHotels: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/hotels/partner?page=${page}`,
      providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    updateProviderHotel: builder.mutation({
      query: credentials => {
        console.log('Credentials being sent:', credentials); // ✅ Log here
        const idEntry = credentials?._parts?.find(([key]) => key === 'id');
        const id = idEntry ? idEntry[1] : null;
        // console.log('Updating hotel with id:', id);
        return {
          url: `/hotels/${id}`,
          method: 'PATCH',
          body: credentials,
        };
      },
      invalidatesTags: ['UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateHotelMutation,
  useGetProviderHotelsQuery,
  useUpdateProviderHotelMutation,
} = providerHotelSlice;
