const students =[
    { name: "Alice", score :85},
    { name: "Bob", score :92},
    { name: "Charlie", score :78},
    { name: "David", score :88},
]

/* { Score "A": 90-100
      "B": 75-89
    "C": below 75 
    }
*/

// return an object like:
 
function categorizeStudents(students) {
    const categories ={ A: [], B: [], C: [] };
      for (const student of students) {
        if (student.score >= 90) {
            categories.A.push(student.name);
        } else if (student.score >= 75) {
            categories.B.push(student.name);
        } else {
            categories.C.push(student.name);
        }
    }
    return categories;    
}
console.log(categorizeStudents(students));