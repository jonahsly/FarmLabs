// Centralized route map to prevent path drift across routing and links.
export const APP_ROUTES = Object.freeze({
  HOME: "/",
  CREATE_ACCOUNT: "/create-account",
  NEW_PASSWORD: "/new-password",
  PASSWORD_RECOVERY: "/password-recovery",
  MY_ACCOUNT: "/my-account",
  LOGIN: "/login",
  SEND_EMAIL: "/send-email",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  NOT_FOUND: "*",
});
