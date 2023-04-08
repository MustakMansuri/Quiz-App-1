let questions = [
  {
    id: 1,
    question: "Which of the following are the ingredients of RWD?",
    answer: "All of the above",
    options: [
      "Media Queries",
      "Fluid Grids",
      "Flexible Visuals",
      "All of the above",
    ],
  },
  {
    id: 2,
    question:
      "______ is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.",
    answer: "Responsive Web Design",
    options: ["Animation", "Responsive Web Design", "Pagination", "Transition"],
  },

  {
    id: 3,
    question:
      "Which format is used in the safari browser to support a sticky Navigation bar?",
    answer: "Position: -webkit-sticky",
    options: [
      "Position: -sticky",
      "Position: -webkit-sticky",
      "Both a and b",
      "None of the above",
    ],
  },
  {
    id: 4,
    question:
      "Which property of position will make the element toggles between relative and fixed, depending on the scroll position?",
    answer: "position: sticky;",
    options: [
      "position: fixed;",
      "position: relative;",
      "position: static;",
      "position: sticky;",
    ],
  },
  {
    id: 5,
    question:
      "Which of the following is used to create a horizontal navigation bar?",
    answer: "Both A And B;",
    options: [
      "display: inline;",
      "float: left;",
      "Both A And B",
      "None Of The above",
    ],
  },
  {
    id: 6,
    question:
      "Which of the following will make the navigation bar fixed to a position?",
    answer: "position: fixed;",
    options: [
      "position: relative;",
      "position: fixed;",
      "position: static;",
      "position: absolute;",
    ],
  },
  {
    id: 7,
    question: "Which of the following is used to enable scroll?",
    answer: "overflow: auto;",
    options: [
      "overflow: hidden;",
      "overflow: visible;",
      "overflow: auto;",
      "overflow: scroll;",
    ],
  },
  {
    id: 8,
    question: "Which of the following removes the bullets in the list?",
    answer: "list-style-type: none;",
    options: [
      "list-style-type: circle;",
      "list-style-type: none;",
      "list-style-type: square;",
      "list-style-type: disk;",
    ],
  },
  {
    id: 9,
    question: "Which of the following helps in easy navigation on a website?",
    answer: "Navigation Bar",
    options: ["Navigation Bar", "Header", "Footer", "None"],
  },
  {
    id: 10,
    question: "Navigation bar comes under _______.",
    answer: "position: sticky;",
    options: [
      "Responsive website",
      "Static webpage",
      "Graphical User Interface",
      "None",
    ],
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
