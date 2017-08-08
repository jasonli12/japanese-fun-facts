'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.b61a317c-6188-47bd-9293-0579d1019082";

var SKILL_NAME = "Japanese Fun Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me something about Japan, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
  "As of 2016, Japan has the 3rd longest life expectancy in the world at about 85 years old.",
  "Japan has over 6,800 islands but only about 400 are inhabited.",
  "Every spring, Japan holds a festival called Kanamara Matsuri that is also known as the Festival of the Steel Phallus or Penis.",
  "The Japanese eat over 154 pounds of fish annually which equates to about half a pound every day.",
  "Japan’s popular manga series, One Piece, has sold over 400 million copies as of 2017.",
  "Momofuku Ando invented the world’s first instant noodles, 'Chicken Ramen,' in 1958.",
  "Omakase means 'I will leave it to you' in Japanese and it is a Japanese tradition of letting the chef decide what dish to make for you to give you the best dining experience.",
  "The phrase 'read the air' in Japanese means to be conscious of your social surroundings, reading people’s body languages and using your common sense.",
  "Japanese has the highest per capita rate of vending machines in the world and they have just about anything you can think of.",
  "The world’s shortest escalator is in Kawasaki, Japan with only 5 steps.",
  "Yaeba, or crooked teeth, are considered cute in Japan that some girls would go to the dentist to have their teeth fixed.",
  "Anime, or Japanese animated films and shows account for 60% of the world’s animation-based entertainment.",
  "Nearly all mobile phones sold in Japan are waterproof because many are so attached to their phones that they take them into showers.",
  "In Japan, it is acceptable to take a nap on the job because it shows that employees are exhausted from their commitment to hard work.",
  "During meetings, Japanese traditionally bow because it is a highly-regarded greeting to show respect.",
  "In Japan, black cats are considered good luck and bring fortune and prosperity.",
  "Many Japanese hot springs will not allow visitors with tattoos, because tattoos in Japan are associated with members of the Japanese mafia.",
  "Japan has an island called Okunoshima that is full of rabbits. These rabbits were brought there during World War II to test the effectiveness of chemical weapons.",
  "Raw horse meat is a specialty dish in Japan.",
  "Slurping noodles in Japan is a sign that the dish is delicious and is acceptable in Japan.",
  "Golden Week is a week where Japanese workers get about a week off from the end of April to the beginning of May.",
  "Banzai, originally a term used to wish the emperor a long life, is now used as a catchphrase for cheering.",
  "The number four is avoided in Japan because it pronounced the same way as the word death.",
  "On the midnight of New Year’s Eve, the Buddhist temples in Japan ring the bells 108 times to drive away the 108 evil desires that humans suffer from.",
  "Most schools in Japan have annual cultural festivals, also known as bunkasai, where students display their artistic achievements.",
  "Square watermelons were invented by Japanese graphic designer Tomoyuki Ono.",
  "In 1997, 685 kids were rushed to the hospital after watching Pokemon episode, Electric Soldier Porygon, due to the animation technique used in the show.",
  "Ronald McDonald is pronounced Donald McDonald due to the lack of a clear 'R' sound in Japanese.",
  "Cat cafes are very popular in Japan.",
  "Over 24 billion pairs of wooden chopsticks are used in Japan each year.",
  "More paper is used for comics than toilet paper each year in Japan.",
  "Ethnic Japanese make up over 98% of Japan’s population.",
  "The world’s most expensive fish sold was a 222 kilogram bluefin tuna sold at Tokyo’s Tsukiji market for $1.8 million.",
  "It is considered rude to blow your nose in public in Japan.",
  "Japan imports about 85% of Jamaica’s coffee exports.",
  "The Japanese who survived the Titanic was called a coward for not dying with the other passengers.",
  "In Japan, there is a building called Gate Tower with a highway running through it.",
  "If one commits suicide in Japan by jumping in front of a train, the family of the deceased will be charged a disruption fee.",
  "As of 2016, there are over 65,000 in Japan over 100 years old.",
  "Kentucky Fried Chicken is a typical feast for Christmas Eve in Japan."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
