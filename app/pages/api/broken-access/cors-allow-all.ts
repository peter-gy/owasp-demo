import { BaseResponse } from '@modules/api/types/endpoint.type';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

// Unprotected API endpoint, all origins are allowed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<any>>
) {
  // Run the cors middleware
  await NextCors(req, res, {
    // Options
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  res.status(200).json({ success: true, payload: { data: '👀' } as any });
}
