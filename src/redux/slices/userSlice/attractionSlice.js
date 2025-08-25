import { baseApi } from '../../baseApi.js';

export const userAttractionSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createBookingAttraction: builder.mutation({
      query: ({ attractionId, ...credentials }) => {
        // console.log('Booking credentials 👉', credentials, attractionId);

        return {
          url: `/attraction-booking/${attractionId}`,
          method: 'POST',
          body: credentials?.finalPayload,
        };
      },
      invalidatesTags: ['CreateBookingAttraction'],
      meta: { skipAuth: false },
    }),

    // getAllHotels: builder.query({
    //   query: ({ page = 1, limit = 10 } = {}) => `/hotels?page=${page}`,
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    getAllAttractionByCountry: builder.query({
      query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
        // console.log(filters);

       const paramsObj = { page, limit, ...filters };

        if (searchTerm && searchTerm.trim()) {
          paramsObj.searchTerm = searchTerm.trim();
        }

        const params = new URLSearchParams(paramsObj).toString();
        
        return `/attractions?${params}`;
      },
      meta: { skipAuth: false },
    }),

     getAllAttractionBooking: builder.query({
      query: () => `/attraction-booking/my-bookings`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getSingleAttraction: builder.query({
      query: id => {
        // console.log('LINE AT 70', id);
        return `/attractions/${id}`;
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
  useCreateBookingAttractionMutation,
  //   useGetPopularattractionQuery,
  useGetAllAttractionByCountryQuery,
  //   useUpdateProviderHotelMutation,
  useGetAllAttractionBookingQuery,
  useGetSingleAttractionQuery
} = userAttractionSlice;
