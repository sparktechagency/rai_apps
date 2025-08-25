import { baseApi } from '../../baseApi.js';

export const userSecuritySlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createBookingSecurity: builder.mutation({
      query: ({ securityId, ...credentials }) => {
        // console.log('Booking credentials 👉', credentials, securityId);

        return {
          url: `/security-booking/${securityId}`,
          method: 'POST',
          body: credentials?.finalPayload,
        };
      },
      invalidatesTags: ['CreateBookingSecurity'],
      meta: { skipAuth: false },
    }),

    // getAllHotels: builder.query({
    //   query: ({ page = 1, limit = 10 } = {}) => `/hotels?page=${page}`,
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    getAllSecurity: builder.query({
      query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
        // console.log(filters);

        const paramsObj = { page, limit, ...filters };

        if (searchTerm && searchTerm.trim()) {
          paramsObj.searchTerm = searchTerm.trim();
        }

        const params = new URLSearchParams(paramsObj).toString();
        // console.log('LINE AT 64', params);

        return `/security-protocols?${params}`;
      },
      meta: { skipAuth: false },
    }),

    getAllSecurityBooking: builder.query({
      query: () => `/security-booking/my-bookings`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getAllSecurityByCategory: builder.query({
      query: () => `/security-protocols/grouped-by-category`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getSecurityByPopular: builder.query({
      query: () => `/security-protocols/popular`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getSingleSecurity: builder.query({
      query: id => {
        // console.log('LINE AT 70', id);
        return `/security-protocols/${id}`;
      },
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
  useCreateBookingSecurityMutation,
  //   useGetPopularSecurityQuery,
  useGetAllSecurityQuery,
  //   useUpdateProviderHotelMutation,
  useGetAllSecurityBookingQuery,
  useGetSingleSecurityQuery,

  useGetAllSecurityByCategoryQuery,

  useGetSecurityByPopularQuery,
} = userSecuritySlice;
