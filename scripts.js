function createFields() {
    const numberOfSubjects = document.getElementById('subjects').value;
    const inputFieldsDiv = document.getElementById('inputFields');
    const errorContainer=document.getElementById('error');
    inputFieldsDiv.innerHTML = '';
    errorContainer.innerText='';
    for (let i = 0; i < numberOfSubjects; i++) {
      inputFieldsDiv.innerHTML += `
        <div>
          <h3>Subject ${i + 1}</h3>
          <label for="credits_${i}">Credits: </label>
          <input type="number" id="credits_${i}" placeholder="Enter Credits">
          
          <label for="grade_${i}">Grade Points: </label>
          <input type="number" id="grade_${i}" placeholder="Enter Grade Points">
        </div>
      `;
    }
  }
  
  function calculateSGPA() {
    const numberOfSubjects = document.getElementById('subjects').value;
    let totalCredits = 0;
    let totalPoints = 0;
    const errorContainer = document.getElementById('error');
    
    errorContainer.innerText = '';
  
    for (let i = 0; i < numberOfSubjects; i++) {
      const credits = parseFloat(document.getElementById(`credits_${i}`).value);
      const gradePoints = parseFloat(document.getElementById(`grade_${i}`).value);
      
      if (isNaN(credits) || isNaN(gradePoints) || credits <= 0 || gradePoints < 0 || gradePoints > 10) {
        errorContainer.innerText = 'Please fill all fields correctly with valid numbers.';
        return
      }
         
      totalCredits += credits;
      totalPoints += credits * gradePoints;
    }

    const sgpa =totalPoints / totalCredits;
 
    document.getElementById('result').innerText = `Your SGPA is: ${sgpa.toFixed(2)}`;
  }
  