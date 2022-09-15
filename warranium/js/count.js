var counter = setInterval(projectDone, 10)

let count1 = 1;

function projectDone () {
  count1++;
  document.querySelector(".data-count").innerHTML = count1;

  if (count1 == 500) {
    clearInterval(project);
  }
}




const workSection = document.querySelector('.counter-section');
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  console.log(entry);


  if (entry.isIntersecting == false) return;

  const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    
    const initialNum = parseInt(curElem.innerText);
   


    const incrementNumber = Math.trunc(targetNumber/ speed);

    if(initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout (updateNumber, 10);
    }

  };

  updateNumber();
});

observer.unobserve(workSection);

}, 
{
  root: null,
  threshold: 0,
});


workObserver.observe(workSection);