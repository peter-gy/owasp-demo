// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fillWithRandomUsers } from '@modules/db/utils/fill-user.util';
import { initDB } from '@modules/db/utils/setup.util';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // initilize the database
    await initDB();

    // fill the database
    Promise.all([fillWithRandomUsers(5)]);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}
