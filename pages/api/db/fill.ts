// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fillWithSubjects } from '@modules/db/utils/fill-subject.util';
import { fillWithRandomUsers } from '@modules/db/utils/fill-user.util';
import { initDB } from '@modules/db/utils/setup.util';
import { executeSQLQuery } from '@modules/db/utils/sql.util';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // initilize the database
    await initDB();

    // fill the database
    Promise.all([fillWithRandomUsers(5), fillWithSubjects()]);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
