function timeWord(time) {
  let timeWord = [];
  const hours = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];
  const minutesTens = ["oh", null, "twenty", "thirty", "forty", "fifty"];
  const minutesOnes = [
    null,
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  const minutesTeens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const amPm = ["am", "pm"];
  //   checks if midnight or noon
  if (time == "00:00") return "midnight";
  if (time == "12:00") return "noon";

  //   check if mins are teens
  if (time[3] == "1") {
    // add teen mins in words to array
    timeWord.push(minutesTeens[Number(time[4])]);
  } else {
    // add mins tens in words to array
    timeWord.push(minutesTens[Number(time[3])]);
    // add mins ones in words to array
    timeWord.push(minutesOnes[Number(time[4])]);
  }
  //   add hour in words to array
  //   checks if am or pm and also makes sure right hour is added
  if (Number(time.slice(0, 2)) > 12) {
    timeWord.unshift(hours[Number(time.slice(0, 2)) - 12]);
    timeWord.push(amPm[1]);
  } else {
    timeWord.unshift(hours[Number(time.slice(0, 2))]);
    timeWord.push(amPm[0]);
  }
  return timeWord.join(" ");
}

module.exports = timeWord;
