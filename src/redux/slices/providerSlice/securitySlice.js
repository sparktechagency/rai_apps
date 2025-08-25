import { baseApi } from '../../baseApi.js';

export const providerSecuritySlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    createSecurity: builder.mutation({
      query: credentials => ({
        url: '/security-protocols',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['CreateProviderSecurity'],
      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
    }),

    getProviderSecurity: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `/security-protocols/partner?page=${page}`,
      providesTags: ['CreateProviderSecurity', 'UpdateProviderSingleSecurity'],
      meta: {
        skipAuth: false,
      },
    }),

    updateProviderSecurity: builder.mutation({
      query: credentials => {
        console.log('Credentials being sent:', credentials); // ✅ Log here
        const idEntry = credentials?._parts?.find(([key]) => key === 'id');
        const id = idEntry ? idEntry[1] : null;
        // console.log('Updating Security with id:', id);
        return {
          url: `/security-protocols/${id}`,
          method: 'PATCH',
          body: credentials,
        };
      },
      invalidatesTags: ['UpdateProviderSingleSecurity'],
      meta: {
        skipAuth: false,
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateSecurityMutation,
  useGetProviderSecurityQuery,
  useUpdateProviderSecurityMutation,
} = providerSecuritySlice;
