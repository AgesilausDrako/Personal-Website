// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("What is the name of the Viking who was the first ruler of Russia?");
if ( answer1.toUpperCase() === 'RURIK' ) {
  correct += 1;
}
var answer2 = prompt("Who started Russia down the path of Westernization?");
if ( answer2.toUpperCase() === 'PETER THE GREAT' ) {
  correct += 1;
}
var answer3 = prompt("Who was the French Emperor who invaded Russia in 1812?");
if ( answer3.toUpperCase() === 'NAPOLEON' ) {
  correct += 1;
}
var answer4 = prompt("Who was the monk who treated Tsarevich Alexei's hemophilia?");
if ( answer4.toUpperCase () === 'RASPUTIN' ) {
  correct += 1;
}
var answer5 = prompt("Who was the leader of the Bolsheviks?");
if ( answer5.toUpperCase() === 'LENIN' ) {
  correct += 1;
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
  document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if ( correct >= 1 ) {
  document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
