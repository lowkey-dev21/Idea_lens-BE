import { dev } from "$app/environment";
import { ALLOWED_ORIGINS_LIST, DEV_BASE_URL, DEV_FRONTEND_URL, PROD_BASE_URL, PROD_FRONTEND_URL } from "$env/static/private";

const BASE_URL = dev ? DEV_BASE_URL : PROD_BASE_URL;

const FRONTEND_URL = dev ? DEV_FRONTEND_URL : PROD_FRONTEND_URL;
const USER_PROFILE_URL = `${FRONTEND_URL}/account`;
const RESET_PASSWORD_URL = `${FRONTEND_URL}/reset-password`;

const ALLOWED_ORIGINS = (ALLOWED_ORIGINS_LIST || '').split(',')
.map(str => str.trim())
.filter(Boolean);

export { BASE_URL, FRONTEND_URL, ALLOWED_ORIGINS, USER_PROFILE_URL, RESET_PASSWORD_URL };