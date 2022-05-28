import { BaseResponse } from '@modules/api/types/endpoint.type';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { querySubjects } from './service';

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
  try {
    const payload = await querySubjects();
    res.status(200).json({ success: true, payload });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went pretty wrong 🫣' });
  }
}
