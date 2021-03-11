const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function (sentence) {
//   const words = sentence.split(' ');
//   const lowerCasedWords = words.map( word => word.toLowerCase())
//   const capitalizedWords =
//     lowerCasedWords.map( word => word[0].toUpperCase() + word.slice(1));
//   const titleCasedSentence = capitalizedWords.join(' ');
//   return titleCasedSentence;
// })

const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}
