function getListStudentIds(arg) {
  if (!Array(arg)) return [];
  return arg.map((x) => x.id);
}
console.log(getListStudentIds('hello'));
