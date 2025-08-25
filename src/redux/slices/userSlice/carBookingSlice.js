import { baseApi } from '../../baseApi.js';

export const userCarSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createBookingCar: builder.mutation({
      query: ({ carId, ...credentials }) => {
        // console.log('Booking credentials 👉', credentials, carId);

        return {
          url: `/car-booking/${carId}`,
          method: 'POST',
          body: credentials?.finalPayload,
        };
      },
      invalidatesTags: ['CreateBookingCar'],
      meta: { skipAuth: false },
    }),

    // getAllHotels: builder.query({
    //   query: ({ page = 1, limit = 10 } = {}) => `/hotels?page=${page}`,
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    getAllCar: builder.query({
      query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
        // console.log(filters);

        const paramsObj = { page, limit, ...filters };

        if (searchTerm && searchTerm.trim()) {
          paramsObj.searchTerm = searchTerm.trim();
        }

        const params = new URLSearchParams(paramsObj).toString();
        // console.log('LINE AT 64', params);

        return `/car-rentals?${params}`;
      },
      meta: { skipAuth: false },
    }),

    getAllCarBooking: builder.query({
      query: () => `/car-booking/my-bookings`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getAllCarPromoCode: builder.query({
      query: () => `/promo-codes`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),
    

    // getPopularHotels: builder.query({
    //   query: () => `/hotels/popular`,
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),
    // updateProviderHotel: builder.mutation({
    //   query: credentials => {
    //     console.log('Credentials being sent:', credentials); // ✅ Log here
    //     const idEntry = credentials?._parts?.find(([key]) => key === 'id');
    //     const id = idEntry ? idEntry[1] : null;
    //     // console.log('Updating hotel with id:', id);
    //     return {
    //       url: `/hotels/${id}`,
    //       method: 'PATCH',
    //       body: credentials,
    //     };
    //   },
    //   invalidatesTags: ['UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),
  }),

  overrideExisting: true,
});

export const {
  useCreateBookingCarMutation,
  //   useGetPopularCarQuery,
  useGetAllCarQuery,
  useGetAllCarBookingQuery,
  useGetAllCarPromoCodeQuery
  //   useUpdateProviderHotelMutation,
} = userCarSlice;
