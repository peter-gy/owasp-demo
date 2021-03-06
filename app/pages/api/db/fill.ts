// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BaseResponse } from '@modules/api/types/endpoint.type';
import { fillWithSubjects } from '@modules/db/utils/fill-subject.util';
import { fillWithRandomUsers } from '@modules/db/utils/fill-user.util';
import { initDB } from '@modules/db/utils/setup.util';
import type { NextApiRequest, NextApiResponse } from 'next';
import { queryDB } from '@modules/api/utils/api.util';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<undefined>>
) {
  try {
    // initialize the database
    await initDB();

    // Check if this has been called before
    const countResult = await queryDB({ query: 'SELECT COUNT(*) FROM users' });
    const count = countResult.payload[0].count;

    // fill the database if it is empty
    if (count === '0') {
      await Promise.all([fillWithRandomUsers(5), fillWithSubjects()]);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    // @ts-ignore
    const message = err.message || 'Something went wrong 🤷‍♂️';
    res.status(500).json({ success: false, message });
  }
}
