import { ApiEndpoint, BaseResponse } from '../types/endpoint.type';
import { ExecuteSqlQueryPayload, FindUserByIdPayload } from '../types/payload.type';
import { API_CONFIG } from '@modules/config/config';

const { API_BASE_URL: BASE_URL } = API_CONFIG;

function constructFetchUrl(baseUrl: string, params: Record<string, string>): string {
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return `${baseUrl}?${queryString}`;
}

/**
 * Utility function to fetch a specific endpoint.
 * @param endpoint The endpoint to fetch.
 * @param options The options to pass to the fetch call.
 * @param params Query parameters to pass to the endpoint.
 * @returns The response from the fetch call.
 */
async function baseFetch<T extends BaseResponse<any>>(
  endpoint: ApiEndpoint,
  options?: RequestInit,
  params: Record<string, string> = {}
) {
  if (options?.body && typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body);
  }
  const res = await fetch(constructFetchUrl(`${BASE_URL}${endpoint}`, params), options);
  return (await res.json()) as T;
}

/**
 * Utility function to populate the database with random data.
 * @returns A `BaseResponse` object, containing the result of the operation.
 */
export function fillDb() {
  return baseFetch<BaseResponse<undefined>>(ApiEndpoint.FillDb, {
    method: 'GET'
  });
}

/**
 * Utility function to execute a raw SQL query.
 * @param payload The payload specifying the query to be executed.
 * @returns A `BaseResponse` object, containing the result of the operation.
 */
export function queryDB(payload: ExecuteSqlQueryPayload) {
  return baseFetch<BaseResponse<any>>(ApiEndpoint.ExecuteSqlQuery, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

/**
 * Utility function to find a user by id.
 * @param payload The payload specifying the user id.
 */
export function findUserById(payload: FindUserByIdPayload) {
  return baseFetch<BaseResponse<any>>(
    ApiEndpoint.FindUserById,
    {
      method: 'GET'
    },
    { id: `${payload.id}` }
  );
}
