import { logoutUser } from '$lib/server/auth/auth-service';
import { endpointResponse } from '$lib/utils/server/response-handler';

export const POST = async ({ locals }) => {
  try {
  
    if (!locals?.sessionToken) {
      return endpointResponse(false, 401, 'Unauthorized: Missing session token');
    }

    const result = await logoutUser(locals?.sessionToken);
    
    // Wrap the result in endpointResponse if logoutUser doesn't already return a Response
    return result;
  } catch (error) {
    console.error('Logout error:', error);
    return endpointResponse(false, 500, 'Server error during logout');
  }
};