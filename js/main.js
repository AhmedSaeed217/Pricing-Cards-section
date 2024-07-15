let billIcon=document.querySelector('.bill-btn .circle')
let billBtn=document.querySelector('.bill-btn');
let darkModeIcon=document.querySelector('.dark-mode i');
let circlePosition="right";

 billIcon.addEventListener('click', function() {
    if(circlePosition==='right'){
    billIcon.style.right = '50%';
    billBtn.style.backgroundColor="white";
    billIcon.style.backgroundColor="#BC1E4A";
    circlePosition="left";
    }else{
        billIcon.style.right = '5px';
        billBtn.style.backgroundColor="#BC1E4A";
    billIcon.style.backgroundColor="white";

    circlePosition="right";
       
        
    }
  });


  darkModeIcon.addEventListener('click', function() {
    console.log("Clicked")
  });