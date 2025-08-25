import { baseApi } from '../../baseApi.js';

export const providerAttractionSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createAttraction: builder.mutation({
      query: credentials => ({
        url: '/attractions',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['CreateProviderAttraction'],
      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    getProviderAttraction: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/attractions/partner?page=${page}`,
      providesTags: [
        'CreateProviderAttraction',
        'UpdateProviderSingleAttraction',
      ],
      meta: {
        skipAuth: false,
      },
    }),

    updateProviderAttraction: builder.mutation({
      query: credentials => {
        console.log('Credentials being sent:', credentials); // ✅ Log here
        const idEntry = credentials?._parts?.find(([key]) => key === 'id');
        const id = idEntry ? idEntry[1] : null;
        // console.log('Updating Security with id:', id);
        return {
          url: `/attractions/${id}`,
          method: 'PATCH',
          body: credentials,
        };
      },
      invalidatesTags: ['UpdateProviderSingleAttraction'],
      meta: {
        skipAuth: false,
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateAttractionMutation,
  useGetProviderAttractionQuery,
  useUpdateProviderAttractionMutation,
} = providerAttractionSlice;
