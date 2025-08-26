import { jwtDecode } from "jwt-decode";
import { baseApi } from "../baseApi.js";
import { setToken, setUser } from "../reducers/authReducer.js";

export const authSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // console.log('Login data:', data);
          // dispatch(setToken(data.refresh));
          dispatch(setUser(jwtDecode(data?.data?.accessToken)));
          dispatch(setToken(data?.data?.accessToken)); // ✅ store ACCESS token, not refresh
          // dispatch(setUser(jwtDecode(data.access))); // optional
        } catch (error) {
          console.log(error);
        }
      },
    }),

    register: builder.mutation({
      query: (credentials) => {
        console.log("🔐 register credentials:", credentials); // ✅ Log credentials here
        return {
          url: "/auth/signup",
          method: "POST",
          body: credentials,
        };
      },
      // invalidatesTags: ['players'],
      // meta: {
      //   skipAuth: true, // ✅ This tells prepareHeaders to skip Authorization
      // },
    }),

    logout: builder.mutation({
      query: (credentials) => ({
        url: "/auth/logout",
        method: "POST",
        body: credentials,
      }),
    }),

    forgotPasswordEmail: builder.mutation({
      query: (credentials) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: credentials,
      }),
    }),

    verifyCode: builder.mutation({
      query: (credentials) => {
        console.log("🔐 verifyCode credentials:", credentials); // ✅ Log credentials here
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: credentials,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: credentials,
      }),

      meta: {
        skipAuth: false, // ✅ This tells prepareHeaders to skip Authorization
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Login data:", data);
          // dispatch(setToken(data.refresh));
          dispatch(setUser(jwtDecode(data?.data?.accessToken)));
          dispatch(setToken(data?.data?.accessToken)); // ✅ store ACCESS token, not refresh
          // dispatch(setUser(jwtDecode(data.access))); // optional
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getProviderProfile: builder.query({
      query: () => "/users/my-profile",
      providesTags: ["ProviderProfile"],
      meta: {
        skipAuth: false, // or true if you want to skip setting the Authorization header
      },
    }),

    updateProfile: builder.mutation({
      query: (credentials) => ({
        url: "/users/update",
        method: "PATCH",
        body: credentials,
      }),
      invalidatesTags: ["ProviderProfile"],
      meta: {
        skipAuth: false,
      },
    }),

    getSingleUser: builder.query({
      query: ({ id }) => {
        console.log("LINE AT 111", id);

        return `/users/${id}`;
      },
      meta: {
        skipAuth: false, // or true if you want to skip setting the Authorization header
      },
    }),

    deleteUserAccount: builder.mutation({
      query: (credentials) => ({
        url: "/users/my-account",
        method: "PATCH",
        // body: credentials, // optional, DELETE usually doesn’t need a body
      }),
      meta: {
        skipAuth: false, // or true if you want to skip setting the Authorization header
      },
    }),

    getPrivacyPolicy: builder.query({
      query: () => `/policy`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getTerms: builder.query({
      query: () => `/terms-conditions`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    getAbout: builder.query({
      query: () => `/settings/about`,
      //   providesTags: ['CreateProviderHotels', 'UpdateProviderSingleHotel'],
      meta: {
        skipAuth: false,
      },
    }),

    sendNotification: builder.mutation({
      query: ({ id, ...credentials }) => {
        console.log(
          "🔐 sendNotification credentials:",
          credentials,
          "USER ID 157",
          id
        ); // ✅ Log credentials here

        return {
          url: `/notifications/send-notification/${id}`,
          method: "POST",
          body: credentials,
        };
      },
      meta: {
        skipAuth: false, // or true if you want to skip setting the Authorization header
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgotPasswordEmailMutation,
  useResetPasswordMutation,
  useVerifyCodeMutation,

  useGetProviderProfileQuery,

  useUpdateProfileMutation,

  useGetSingleUserQuery,

  useDeleteUserAccountMutation,

  useGetPrivacyPolicyQuery,

  useGetTermsQuery,

  useGetAboutQuery,

  useSendNotificationMutation,
} = authSlice;
