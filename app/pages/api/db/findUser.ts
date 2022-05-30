// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BaseResponse } from '@modules/api/types/endpoint.type';
import { FindUserByIdPayload } from '@modules/api/types/payload.type';
import { initDB } from '@modules/db/utils/setup.util';
import { findUserById } from '@modules/db/utils/sql.util';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<any>>
) {
  try {
    // initialize the database
    await initDB();

    if (!req.query['id']) {
      res.status(500).json({ success: false, message: 'The request needs a user ID query param' });
    }

    // execute they sql query
    const result = await findUserById(req.query['id'] as unknown as number);

    res.status(200).json({ success: true, payload: { result } as any });
  } catch (err) {
    console.error(err);
    // @ts-ignore
    const message = err.message || 'Something went wrong 🤷‍♂️';
    res.status(500).json({ success: false, message });
  }
}
