export const REDIRECT = "REDIRECT";

export const RESET_REDIRECT = "RESET_REDIRECT";

export const redirect = () => ({ type: REDIRECT });

export const resetRedirect = () => ({ type: RESET_REDIRECT });
