export const oktaConfig = {
  clientId: "0oadipk03ktpOkqyh5d7",
  issuer: "https://dev-83322989.okta.com/oauth2/default",
  redirectUri: "https://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
