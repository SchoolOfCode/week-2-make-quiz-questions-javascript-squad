/* MVP 
Question 1 What is the command you use in terminal to bring a github repository onto your own system? 
Answer 1 git add, git clone, git pull, git smash

Question 2 What does MVP stand for?
Answer 2 Most Voted Player, Missing Variable Please, Most Viable Product, Minimum Viable Product

Question 3 What does GAN stand for?
Answer 3 Generative Adversarial Network, Good At Networking, Glad And Naked, Good At Numbers

Question 4 Select two elements of computational thinking
Answer 4 Growth mindset, Understand the problem, Panicking, Write an algorithm

Question 5 What does the H stand for in C.H.R.I.S?
Answer 5 Hairy, Humour, Hangry, Hunger

Question 6 What does M stand for in M.E.A.H?
Answer 6 Meaning, Master, Maestro, Multiplier

Question 7 What is 'Rubber Ducking'?
Answer 7 Screaming at your laptop, Screaming at co-worker, Articulating your problem out loud, Throwing rubber ducks at the wall

Question 8 Which of these are steps in branching in git?
Answer 8 git branch, git push, git checkout, git add

Question 9 What is a benefit of pair programming? 
Answer 9 Someone can make you a cup of tea, Being able to blame someone, A shoulder to cry on, Live feedback

Question 10 An elevator pitch is...
Answer 10 A 60 second intro about yourself, A short introduction about lifts, Cornering a hiring manager in an elevator, Changing the audio pitch in an elevator

Use an array with these question
Use the following properties in each question: question_text, question_type (multiple_choice), options (each answer), correct_option, correct_explanation
*/

// questions.js

const questions = [ 
  {
    question_text: "What is the command you use in terminal to bring a github repository onto your own system?",
    question_type: multiple_choice,
    options: ["git add", "git clone", "git pull", "git smash"],
    correct_option: [1],
    correct_explanation: "Once the URL from github has been copied, git clone is typed into the terminal followed by the copied URL. This allows you to create and store your own local repository"
  }

  

  // Add your questions here
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;
