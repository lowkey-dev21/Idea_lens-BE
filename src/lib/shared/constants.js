import { dev } from "$app/environment";
import { DEV_BASE_URL, DEV_FRONTEND_URL, PROD_BASE_URL, PROD_FRONTEND_URL } from "$env/static/private";

const BASE_URL = dev ? DEV_BASE_URL : PROD_BASE_URL;

const FRONTEND_URL = dev ? DEV_FRONTEND_URL : PROD_FRONTEND_URL;

export { BASE_URL, FRONTEND_URL };