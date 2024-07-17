function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}
const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1));

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2));

// ตอบคำถามตรงนี้จ้า
//ในการคำนวณ time complexity ของ big o เราต้งอคำนวน worst case ซึ่งในที่นี่จะไล่เรียง linear search ซึ่งจะเป็น O(n)

// function findStudentIndex(students, searchStudent) {
//   let left = 0;
//   let right = students.length - 1;

//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     const middleStudent = students[middle];

//     if (middleStudent === searchStudent) {
//       return middle;
//     } else if (middleStudent < searchStudent) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }

//   return -1;
// }

// // Example usage:
// const students1 = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"];
// const searchStudent1 = "John";
// console.log(findStudentIndex(students1, searchStudent1)); // Output: 7

// const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
// const searchStudent2 = "Andrew";
// console.log(findStudentIndex(students2, searchStudent2)); // Output: -1

//กรณีนี้ big o จะเป็น O(log n)
