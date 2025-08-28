import { baseApi } from "../../baseApi";

export const addItemSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAddItem: builder.mutation({
      query: (credentials) => {
        console.log("Booking credentials 👉", credentials);

        return {
          url: `/items/CreateItem`,
          method: "POST",
          body: credentials,
        };
      },
      //   invalidatesTags: ['CreateBookingAttraction'],
      //   meta: { skipAuth: false },
    }),

    // getAllAttractionByCountry: builder.query({
    //   query: ({ page = 1, limit = 10, searchTerm, ...filters } = {}) => {
    //     // console.log(filters);

    //    const paramsObj = { page, limit, ...filters };

    //     if (searchTerm && searchTerm.trim()) {
    //       paramsObj.searchTerm = searchTerm.trim();
    //     }

    //     const params = new URLSearchParams(paramsObj).toString();

    //     return `/attractions?${params}`;
    //   },
    //   meta: { skipAuth: false },
    // }),

    getAllCategory: builder.query({
      query: () => `/Category/getAllCategory`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      // meta: {
      //   skipAuth: false,
      // },
    }),

    getAllMaterial: builder.query({
      query: () => `/Metarial/getAllMetarial`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      // meta: {
      //   skipAuth: false,
      // },
    }),

    // getSingleAttraction: builder.query({
    //   query: id => {
    //     // console.log('LINE AT 70', id);
    //     return `/attractions/${id}`;
    //   },
    //   //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
    //   meta: {
    //     skipAuth: false,
    //   },
    // }),

    getAllItem: builder.query({
      query: () => `/items/getItems`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      // meta: {
      //   skipAuth: false,
      // },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateAddItemMutation,

  useGetAllCategoryQuery,

  useGetAllMaterialQuery,

  useGetAllItemQuery,
  //   useGetPopularattractionQuery,
  //   useGetAllAttractionByCountryQuery,
  //   useUpdateProviderHotelMutation,
  //   useGetAllAttractionBookingQuery,
  //   useGetSingleAttractionQuery
} = addItemSlice;
