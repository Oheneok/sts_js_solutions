// Count the number of times 'love' appears in the sentence
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = loveSentence.match(/love/gi).length;
console.log(loveCount); 

// Count the number of times 'because' appears in the sentence
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = becauseSentence.match(/because/g).length;
console.log(becauseCount); 

// Clean the text and find the most frequent word
const rawSentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; 
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. 
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. 
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;

// Remove special characters
let cleanedText = rawSentence.replace(/[^a-zA-Z0-9\s]/g, '');

// Convert to an array of words
let wordsArray = cleanedText.split(/\s+/);

// Count word frequencies
let wordFrequency = {};
wordsArray.forEach(word => {
    word = word.toLowerCase();
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// Find the most frequent word
let mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b);
console.log(`Most frequent word: ${mostFrequentWord}`); 

// Extract numbers from the income text and calculate total annual income
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g).map(Number);

// Calculate total annual income
let totalAnnualIncome = (incomeNumbers[0] * 12) + incomeNumbers[1] + (incomeNumbers[2] * 12);
console.log(`Total annual income: ${totalAnnualIncome} euros`);
