document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;

    const gradeItem = document.createElement('li');
    gradeItem.textContent = `Estudiante: ${studentName} | Asignatura: ${subject} | Calificación: ${grade}`;

    document.getElementById('gradesList').appendChild(gradeItem);

    document.getElementById('gradeForm').reset();
});
