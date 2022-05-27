import { BaseResponse } from '@modules/api/types/endpoint.type';
import { NextApiRequest, NextApiResponse } from 'next';

// Protected API endpoint only same origin is allowed by default in Next.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<any>>
) {
  res.status(200).json({ success: true, payload: { data: '🛡' } as any });
}
