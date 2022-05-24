import { SubjectModel } from '../models/db.subject.model';

const subjects = [
  'Language Arts',
  'Mathematics',
  'Science',
  'Health',
  'Handwriting',
  'Physical Education (P.E.)',
  'Art',
  'Music',
  'Instrumental Music – specific instrument',
  'Movement or Eurythmy',
  'Handwork or handcrafts',
  'Life Lab or gardening',
  'Dramatics',
  'Dance',
  'Spanish or other foreign language',
  'Leadership',
  'Special Education Day Class',
  'Resource Program',
  'Speech',
  'Adaptive P.E.',
  'Occupational Therapy'
];

/**
 *
 * @returns
 */
export async function fillWithSubjects() {
  return Promise.all(
    subjects.map((subject, index) => SubjectModel.create({ name: subject, id: index + 1 }))
  );
}
