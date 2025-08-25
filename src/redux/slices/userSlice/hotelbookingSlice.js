import { baseApi } from '../../baseApi.js';

export const userHotelSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    // createBookingHotel: builder.mutation({
    //   query: ({ id, ...credentials }) => ({
    //     console.log(credentials);

    //     url: `/hotel-booking/${id}`,
    //     method: 'POST',
    //     body: credentials,
    //   }),
    //   invalidatesTags: ['CreateBookingHotels'],
    //   meta: { skipAuth: false },
    // }),

    createBookingHotel: builder.mutation({
      query: ({ hotelId, ...credentials }) => {
        // console.log('Booking credentials 👉', credentials, hotelId);

        return {
          url: `/hotel-booking/${hotelId}`,
          method: 'POST',
          body: credentials?.finalPayload,
        };
      },
      invalidatesTags: ['CreateBookingHotels'],
      meta: { skipAuth: false },
    }),

    // getAllHotels: builder.query({
    //   query: ({ page = 1, limit = 10 } = {}) => `/hotels?page=${page}`,
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    getAllHotels: builder.query({
      query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
        // console.log(filters);

        const paramsObj = { page, limit, ...filters };

        if (searchTerm && searchTerm.trim()) {
          paramsObj.searchTerm = searchTerm.trim();
        }

        const params = new URLSearchParams(paramsObj).toString();
        // console.log('LINE AT 64', params);

        return `/hotels?${params}`;
      },
      meta: { skipAuth: false },
    }),



    getPopularHotels: builder.query({
      query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
        const paramsObj = { page, limit, ...filters };

        if (searchTerm && searchTerm.trim()) {
          paramsObj.searchTerm = searchTerm.trim();
        }

        const params = new URLSearchParams(paramsObj).toString();
        // console.log('LINE AT 64', params);

        return `/hotels/popular?${params}`;
      },
      meta: {
        skipAuth: false,
      },
    }),

    getAllHotelBooking: builder.query({
      query: () => `/hotel-booking/my-bookings`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),
    getSingleHotel: builder.query({
      query: id => {
        console.log('LINE AT 70', id);
        return `/hotels/${id}`;
      },
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),
    addFavouriteHotel: builder.mutation({
      query: ({ hotelId }) => ({
        url: `/hotels/favorite/${hotelId}`,
        method: 'POST',
        // body: credentials,
      }),
      invalidatesTags: ['AddFavouriteHotel'],
      meta: { skipAuth: false },
    }),

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

    addReviewHotel: builder.mutation({
      query: ({ hotelId, rating, comment }) => {
        console.log('LINE AT 109', hotelId, rating, comment);

        return {
          url: `/reviews/hotel`,
          method: 'POST',
          body: { hotelId, rating, comment },
        };
      },
      // invalidatesTags: ['AddFavouriteHotel'],
      meta: { skipAuth: false },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateBookingHotelMutation,
  useGetPopularHotelsQuery,
  useGetAllHotelsQuery,
  useAddFavouriteHotelMutation,
  //   useUpdateProviderHotelMutation,
  useGetAllHotelBookingQuery,
  useGetSingleHotelQuery,

  useAddReviewHotelMutation,
} = userHotelSlice;
