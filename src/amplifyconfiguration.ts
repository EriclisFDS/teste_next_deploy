export const config = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint:
    process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.NEXT_PUBLIC_AWS_APPSYNC_AUTHENTICATION_TYPE,
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY,

  aws_cognito_identity_pool_id:
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,

  oauth: {
    domain: process.env.NEXT_PUBLIC_OAUTH_DOMAIN,
    scope: [process.env.NEXT_PUBLIC_OAUTH_SCOPE],
    redirectSignIn: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGN_IN,
    redirectSignOut: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_SIGN_OUT,
    responseType: process.env.NEXT_PUBLIC_OAUTH_RESPONSE_TYPE,
  },

  federationTarget: process.env.NEXT_PUBLIC_FEDERATION_TARGET,

  aws_cognito_username_attributes: [
    process.env.NEXT_PUBLIC_COGNITO_USERNAME_ATTRIBUTES,
  ],
  aws_cognito_social_providers: [
    process.env.NEXT_PUBLIC_COGNITO_SOCIAL_PROVIDERS,
  ],
  aws_cognito_signup_attributes: [
    process.env.NEXT_PUBLIC_COGNITO_SIGNUP_ATTRIBUTES,
  ],
  aws_cognito_mfa_configuration:
    process.env.NEXT_PUBLIC_COGNITO_MFA_CONFIGURATION,
  aws_cognito_mfa_types: [process.env.NEXT_PUBLIC_COGNITO_MFA_TYPES],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: Number(
      process.env.NEXT_PUBLIC_COGNITO_PASSWORD_POLICY_MIN_LENGTH
    ),
    passwordPolicyCharacters: [
      process.env.NEXT_PUBLIC_COGNITO_PASSWORD_POLICY_CHARACTERS,
    ],
  },
  aws_cognito_verification_mechanisms: [
    process.env.NEXT_PUBLIC_COGNITO_VERIFICATION_MECHANISMS,
  ],

  aws_user_files_s3_bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region:
    process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION,

  aws_content_delivery_bucket:
    process.env.NEXT_PUBLIC_AWS_CONTENT_DELIVERY_BUCKET,
  aws_content_delivery_bucket_region:
    process.env.NEXT_PUBLIC_AWS_CONTENT_DELIVERY_BUCKET_REGION,
  aws_content_delivery_url: process.env.NEXT_PUBLIC_AWS_CONTENT_DELIVERY_URL,
};
