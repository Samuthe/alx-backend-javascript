export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prevStudent, curStudent) => prevStudent || prevStudent + curStudent, 0);
  }
  return 0;
}
