// The Breakdown 😏😉😉
// code using generator function
//
export default function createIteratorObject(report) {
  function* iterator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return iterator();
}
