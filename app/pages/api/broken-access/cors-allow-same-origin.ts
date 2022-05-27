import { BaseResponse } from '@modules/api/types/endpoint.type';
import { NextApiRequest, NextApiResponse } from 'next';
import { querySubjects } from './service';

// Protected API endpoint only same origin is allowed by default in Next.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<any>>
) {
  try {
    const payload = await querySubjects();
    res.status(200).json({ success: true, payload });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went pretty wrong 🫣' });
  }
}
