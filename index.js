const questions = [
    {
      image: "https://www.telugu360.com/wp-content/uploads/2018/08/Geetha-Govindam-audio-revie.jpg",
      options: ["Vijay Govind", "Vijay Kumar", "Arjun Reddy", "Geetha Govindam"],
      answers: ["Vijay Govind", "Geetha Govindam"]
    },
    {
      image: "https://static.toiimg.com/photo/89725857.cms?resizemode=4",
      options: ["Bala Ganagdhar", "Guntur Talkies", "Siddu Jonnalagadda", "DJ Tillu"],
      answers: ["Bala Ganagdhar", "DJ Tillu"]
    },
    {
    image: "https://pbs.twimg.com/media/Eq50106VgAcWmaE.jpg",
      options: ["Ramu", "Nandamuri Taraka Rama Rao", "justice chowdary", "Rechukka Pagatichukka"],
      answers: ["Ramu", "justice chowdary"]
    },
    {
    image: "https://www.thetelugufilmnagar.com/wp-content/uploads/2020/05/GODA.jpg",
      options: ["Sumanth", "Sriram", "Godavari", "Ravinder"],
      answers: ["Sriram", "Godavari"]
    },
    {
    image: "https://images.firstpost.com/wp-content/uploads/2018/03/Rangasthaalam1200.jpg",
     options: ["Ram Charan", "Rangasthalam", "RRR", "Chitti Babu"],
     answers: ["Rangasthalam", "Chitti Babu"]
    },
    {
    image: "https://igmedia.blob.core.windows.net/igmedia/telugu/previews/oopiri-preview.jpg",
     options: ["Oopiri", "Akkineni Nagarjuna", "Vikramaditya", "Nagurjuna"],
     answers: ["Oopiri", "Vikramaditya"]
    },
    {
    image: "https://www.telugu360.com/wp-content/uploads/2017/01/Shatamanam-Bhavati-1.jpg",
     options: ["Shatamanam Bhavati", "Viveak", "Raju", "Sharwanand"],
     answers: ["Shatamanam Bhavati", "Raju"]
    },
    {
    image: "https://filmciti.com/wp-content/uploads/2022/04/18-Pages-Movie-News.jpg",
     options: ["siddhu", "Anupama Parameswaran", "Nikhil Siddhartha", "18 Pages"],
     answers: ["siddhu", "18 Pages"]
    },
    {
    image: "https://m.media-amazon.com/images/M/MV5BYTk1NjhlNjQtNDM1OS00YTM4LTlmMGItOTQ0MjRjZTE0MGQ5XkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_.jpg",
     options: ["Tella Abhiram", "Ram Pothineni", "Vunnadhi Okate Zindagi", "Anupama Parameswaran"],
     answers: ["Tella Abhiram", "Vunnadhi Okate Zindagi"]
    },
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zyV0rrFy3xxb4GryOykYb9YDncxWK2Kyz_Oa9b4KN0sS7C6OvoA3mRApdxi-80DlwMM&usqp=CAU",
     options: ["Bommarillu", "Genelia D'Souza", "Siddu", "Siddharth"],
     answers: ["Bommarillu", "Siddu"]
    },
    {
     image: "https://m.behindwoods.com/tamil-movies/fidaa/images/fidaa-box-office-jul-23.jpg",
     options: ["Fidaa", "Sai Pallavi", "sumati", "Bhanumati"],
     answers: ["Fidaa", "Bhanumati"]
    },
    {
     image: "https://1847884116.rsc.cdn77.org/telugu/gallery/movies/athadu/main.jpg",
     options: ["Mahesh Babu", "Athadu", "Nanda Gopal", "TRISHA KRISHNAN"],
     answers: ["Athadu", "Nanda Gopal"]
    },
    {
     image: "https://static.toiimg.com/photo/msid-62832830/62832830.jpg",
     options: ["Tholi Prema", "Rashi Khanna", "Aditya Sekhar", "TRISHA KRISHNAN"],
     answers: ["Aditya Sekhar", "Tholi Prema"]
    },
   {
     image: "https://m.media-amazon.com/images/M/MV5BYjkxMDQzNjctYmQ3Mi00MjQxLTg1M2YtZmMyMWE3MjFlNGViXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
     options: ["Manmadhudu", "Nagarjuna", "Anshu Ambani", "Samba Siva Roa"],
     answers: ["Samba Siva Roa", "Manmadhudu"]
    },
    {
     image: "https://static.toiimg.com/thumb/msid-27955710,imgsize-17493,width-400,resizemode-4/27955710.jpg",
     options: ["Amy Jackson", "Yevadu", "Ram Charan", "charan"],
     answers: ["charan", "Yevadu"]
    },
    {
     image: "https://m.media-amazon.com/images/M/MV5BYWM3OGIzZGYtZmQxNS00MDY3LWEyMTEtYWY2OTdhYzIyYzA4XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
     options: ["Adivi Sesh", "Major", "Sandeep", "Isha"],
     answers: ["Sandeep", "Major"]
    },
    {
     image: "https://cdn.gulte.com/wp-content/uploads/2023/02/sir-review.jpg",
     options: ["Sir(Vaathi)", "Dhanush", "Balamurugan", "Meenakshi"],
     answers: ["Sir(Vaathi)", "Balamurugan"]
    },
    {
     image: "https://static.toiimg.com/photo/80236670.cms",
     options: ["Abhiram", "Nannaku Prematho", "Aditaya", "Rakul Preet Singh"],
     answers: ["Abhiram", "Nannaku Prematho"]
    },
    {
     image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/07/bahubali-creates-history-with-50-crore-business-on-day-1-box-office-collections.jpg",
     options: ["Baahubali", "Amerendra Baahubali", "Mahendra Baahubali", "Shriya Saran"],
     answers: ["Amerendra Baahubali", "Baahubali"]
    },
     {
     image: "https://pbs.twimg.com/media/EXivpt6UcAIh-aW.jpg",
     options: ["Karthik", "Bhanu", "Santosham", "Gracy Singh"],
     answers: ["Santosham", "Karthik"]
    },

    // Add more logo objects here
  ];
  

  const MAX_SELECTED_ANSWERS = 2; // Maximum number of checkboxes that can be selected

  // Array to store the user's selected answers
  const userAnswers = [];
  
  let currentQuestion = 0;
  let score = 0;
  const quizTimeInSeconds = 180; // Set the quiz time to 180 seconds
  let timeRemaining = quizTimeInSeconds;
  let timerInterval;
  
  function startQuiz() {
    const nameInput = document.getElementById("name");
    const userName = nameInput.value.trim();
    if (userName !== "") {
      document.getElementById("user-input").style.display = "none";
      shuffleQuestions();
      loadQuestion();
      startTimer();
      document.getElementById("submit-button").style.display = "block"; // Show the submit button
    }
  }
  
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
  
    const question = questions[currentQuestion];
  
    const image = document.createElement("img");
    image.src = question.image;
    image.alt = "Car Logo";
    image.style.maxWidth = "300px"; // Set the maximum width for the image
  
    quizContainer.appendChild(image);
  
    const options = document.createElement("div");
    options.classList.add("options");
  
    question.options.forEach(function (option) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "answer";
      checkbox.value = option;
      checkbox.addEventListener("change", toggleAnswer);
  
      const label = document.createElement("label");
      label.textContent = option;
      label.appendChild(checkbox);
  
      options.appendChild(label);
    });
  
    quizContainer.appendChild(options);
  }
  
  function toggleAnswer(e) {
    const selectedOption = e.target.value;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      userAnswers.push(selectedOption);
    } else {
      const index = userAnswers.indexOf(selectedOption);
      if (index !== -1) {
        userAnswers.splice(index, 1);
      }
    }
  
    if (userAnswers.length === MAX_SELECTED_ANSWERS) {
      setTimeout(() => {
        checkAnswer();
      }, 500); // Wait for 500 milliseconds before checking the answer
    }
  }
  
  function checkAnswer() {
    const question = questions[currentQuestion];
    const correctAnswers = question.answers;
    const userSelectedAnswers = userAnswers;
  
    let isCorrect = true;
  
    // Check if all correct answers are selected
    correctAnswers.forEach((answer) => {
      if (!userSelectedAnswers.includes(answer)) {
        isCorrect = false;
      }
    });
  
    // Check if no incorrect answers are selected
    userSelectedAnswers.forEach((answer) => {
      if (!correctAnswers.includes(answer)) {
        isCorrect = false;
      }
    });
  
    if (isCorrect) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      userAnswers.length = 0; // Clear user's selected answers for the next question
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function startTimer() {
    const timerElement = document.getElementById("timer");
  
    timerInterval = setInterval(() => {
      timeRemaining--;
      timerElement.textContent = `Time Remaining: ${timeRemaining}s`;
  
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    showResult();
  }
  
  function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
  
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
  
    const analysisElement = document.getElementById("analysis");
    const percentage = Math.floor((score / questions.length) * 100);
    analysisElement.textContent = `You scored ${percentage}% in the quiz.`;
  
    saveResult(userName, score, percentage); // Save the result
  
    setTimeout(() => {
      window.location.href = "results.html"; // Redirect to results page after a delay
    }, 2000); // Delay in milliseconds (2 seconds in this example)
  }
  
  function saveResult(userName, score, percentage) {
    // Implement logic to save the result (e.g., using local storage, a server, or a database)
    // Here, we'll use local storage as an example
    const results = JSON.parse(localStorage.getItem("quizResults")) || [];
    const result = {
      userName,
      score,
      percentage,
      date: new Date().toLocaleDateString(),
    };
    results.push(result);
    localStorage.setItem("quizResults", JSON.stringify(results));
  }

