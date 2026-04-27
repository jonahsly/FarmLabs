const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

// Keep client-side validation simple and predictable across auth forms.
export const isValidEmail = (value) => EMAIL_REGEX.test(value.trim());

export const isValidPassword = (value) =>
  value.trim().length >= MIN_PASSWORD_LENGTH;

export { MIN_PASSWORD_LENGTH };
