$(window).on('load', function(){
  $(".windowOpen").fadeOut(3000);
  $(".content").fadeIn(3500);
})
function showSemester(option) {
  if (option === 'firstYear') {
    document.getElementById('option1Radio').style.display = 'block';
    document.getElementById('option2Radio').style.display = 'none';
    document.getElementById('option3Radio').style.display = 'none';
    document.getElementById('option4Radio').style.display = 'none';
  } else if (option === 'secondYear') {
    document.getElementById('option1Radio').style.display = 'none';
    document.getElementById('option2Radio').style.display = 'block';
    document.getElementById('option3Radio').style.display = 'none';
    document.getElementById('option4Radio').style.display = 'none';
  }else if (option === 'thirdYear') {
    document.getElementById('option1Radio').style.display = 'none';
    document.getElementById('option2Radio').style.display = 'none';
    document.getElementById('option3Radio').style.display = 'block';
    document.getElementById('option4Radio').style.display = 'none';
  }else if (option === 'fourthYear') {
    document.getElementById('option1Radio').style.display = 'none';
    document.getElementById('option2Radio').style.display = 'none';
    document.getElementById('option3Radio').style.display = 'none';
    document.getElementById('option4Radio').style.display = 'block';
  }
}
function btnSubmit(){
     // Get the value of the selected radio button
     var selectedOption = document.querySelector('input[name="year"]:checked').id;

     // Check the value of the selected option using an if statement
     //First Year
     if (selectedOption == "first-fsem") {
       // Proceed to another file or perform some other action
       window.open("firstyear/firstSem.html"); 
     }else if (selectedOption == "first-ssem"){
       window.open("firstyear/secondSem.html");
     }
     
     //Second Year
     else if (selectedOption == "second-fsem"){
      window.open("secondyear/firstSem.html");
    }else if (selectedOption == "second-ssem"){
      window.open("secondyear/secondSem.html");
    }

    //Third Year
    else if (selectedOption == "third-fsem"){
      window.open("thirdyear/firstSem.html");
    }else if (selectedOption == "third-ssem"){
      window.open("thirdyear/secondSem.html");
    }

    //Fourth Year
    else if (selectedOption == "fourth-fsem"){
      window.open("fourthyear/firstSem.html");
    }else if (selectedOption == "fourth-ssem"){
      window.open("fourthyear/secondSem.html");
    }
     else{
      alert('Please Select to proceed..')
     }    
}

//Computing the average of Grades
const computeGrade = document.getElementById("computeGrade");
const grade = document.querySelectorAll(".grade");


computeGrade.addEventListener("click", () =>{
  let sum = 0;
  const fullName = document.getElementById("fullName").value;
  const loader = document.querySelector(".loader").style.display = "block";

  for(let i = 0; i < grade.length; i++){
    sum += parseInt(grade[i].value);
  }
  var average = sum / grade.length;

  setTimeout(function(){
    document.querySelector(".loader").style.display = "none";
    document.getElementById("totalAverage").innerHTML = "GPA" + "<br>" + average.toFixed(2);
  },2000);
  document.getElementById("name").innerHTML = "Hello " + fullName + " !" + "<br>" + "Your total average is";
})