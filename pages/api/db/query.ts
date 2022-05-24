// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BaseResponse } from '@modules/api/types/endpoint.type';
import { ExecuteSqlQueryPayload } from '@modules/api/types/payload.type';
import { initDB } from '@modules/db/utils/setup.util';
import { executeSQLQuery } from '@modules/db/utils/sql.util';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BaseResponse<any>>
) {
  try {
    // initilize the database
    await initDB();

    // execute they sql query
    const { query, queryOptions }: ExecuteSqlQueryPayload = JSON.parse(req.body);
    const [results, _] = await executeSQLQuery(query, queryOptions);

    res.status(200).json({ success: true, payload: results as any });
  } catch (err) {
    res.status(500).json({ success: false });
  }
}
