export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((sum, student) => sum + student.id, 0);
}
