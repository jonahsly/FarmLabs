// Shared UI labels keep wording consistent across views.
export const UI_TEXT = Object.freeze({
  header: {
    categories: ["Flowers", "Oils", "Concentrates", "Edibles", "Seeds", "Vapes"],
  },
  menu: {
    orders: "My Orders",
    myAccount: "My Account",
    signOut: "Sign out",
  },
  myOrder: {
    title: "My Order",
    total: "Total",
    checkout: "Checkout",
    empty: "Your cart is empty. Add products to continue.",
  },
  checkout: {
    title: "My Order",
    currentOrder: "Current Order",
    itemsSuffix: "items",
    empty: "Your cart is empty.",
  },
  orders: {
    title: "My Orders",
    empty: "No orders yet.",
  },
  catalog: {
    loading: "Loading products...",
    empty: "No products available right now.",
    retry: "Retry",
    loadError: "We couldn't load products right now. Please try again.",
  },
  auth: {
    forgotPassword: "Forgot my password",
    login: "Log in",
    signUp: "Sign up",
    passwordRecoveryTitle: "Password recovery",
    passwordRecoverySubtitle: "Enter the email address used to create your account",
    emailAddressLabel: "Email address",
    confirm: "Confirm",
  },
  sendEmail: {
    title: "Email Sent",
    subtitle: "Please check your inbox for instructions on how to reset the password",
    resendPrompt: "Didn't receive the email?",
    resend: "Resend",
  },
});
