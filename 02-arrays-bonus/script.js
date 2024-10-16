const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// # Using Integreted Array Metod
// const reversedTeachers = teachers.reverse();

// # Using for Loop
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--)
  reversedTeachers.push(teachers[i]);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// # Using Integreted Array Metod
// const longNames = [];
// teachers.forEach((item) => (item.length >= 5 ? longNames.push(item) : null));

// # Using for Loop
const longNames = [];
for (let i = 0; i < teachers.length; i++)
  teachers[i].length >= 5 ? longNames.push(teachers[i]) : null;

// 3. Rimuovi 'Ed' dall'array teachers

// # Using Integreted Array Metod
// teachers.forEach((item, i) => (item === "Ed" ? teachers.splice(i, 1) : null));

// # Using for Loop
for (let i = 0; i < teachers.length; i++)
  teachers[i] === "Ed" ? teachers.splice(i, 1) : null;
