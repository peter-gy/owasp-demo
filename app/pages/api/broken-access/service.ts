import { queryDB } from '@modules/api/utils/api.util';

export async function querySubjects() {
  return queryDB({ query: 'SELECT * FROM subjects' });
}
