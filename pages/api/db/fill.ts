// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BaseResponse } from '@modules/api/types/endpoint.type';
import { fillWithSubjects } from '@modules/db/utils/fill-subject.util';
import { fillWithRandomUsers } from '@modules/db/utils/fill-user.util';
import { initDB } from '@modules/db/utils/setup.util';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<undefined>>
) {
  try {
    // initialize the database
    await initDB();

    // fill the database
    await Promise.all([fillWithRandomUsers(5), fillWithSubjects()]);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    // @ts-ignore
    const message = err.message || 'Something went wrong 🤷‍♂️';
    res.status(500).json({ success: false, message });
  }
}
