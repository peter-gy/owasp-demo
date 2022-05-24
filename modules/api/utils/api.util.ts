import { ApiEndpoint, BASE as BASE_URL, BaseResponse } from '../types/endpoint.type';

/**
 *
 * @param endpoint
 * @param options
 * @returns
 */
async function baseFetch<T extends BaseResponse<any>>(
  endpoint: ApiEndpoint,
  options?: RequestInit
) {
  if (options?.body && typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body);
  }
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  return (await res.json()) as T;
}

/**
 *
 * @returns
 */
export function fillDb() {
  return baseFetch<BaseResponse<undefined>>(ApiEndpoint.FillDb);
}
