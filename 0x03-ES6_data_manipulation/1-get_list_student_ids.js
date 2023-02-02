export default function getListStudentIds(array) {
  if (Array.isArray(array)) return array.map((y) => y.id);
  return [];
}
