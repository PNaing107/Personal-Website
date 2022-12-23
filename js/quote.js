const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const button = document.querySelector('button');
const quotes = [
    {
        "quote": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
        "author": "Roy T. Bennett",
        "length": "92"
    },
    {
        "quote": "Life is and will ever remain an equation incapable of solution, but it contains certain known factors. ",
        "author": "Nikola Tesla",
        "length": "103"
    },
    {
        "quote": "If everyone is moving forward together, then success takes care of itself.",
        "author": "Henry Ford",
        "length": "74"
    },
    {
        "quote": "The man who moved the mountain was the one who began carrying away the smallest stones.",
        "author": "Zen Proverb",
        "length": "87"
    },
    {
        "quote": "Great leaders are almost always great simplifiers, who can cut through argument, debate and doubt, to offer a solution everybody can understand.",
        "author": "Colin Powell",
        "length": "144"
    },
    {
        "quote": "You must welcome change as the rule but not as your ruler. ",
        "author": "Denis Waitley",
        "length": "59"
    },
    {
        "quote": "If you want to see things just as they are, then you yourself must practice just as you are.",
        "author": "Dogen",
        "length": "92"
    },
    {
        "quote": "A diamond is a piece of charcoal that handled stress exceptionally well.",
        "author": "Unknown",
        "length": "72"
    },
    {
        "quote": "By words the mind is winged.",
        "author": "Aristophanes",
        "length": "28"
    },
    {
        "quote": "Cherish forever what makes you unique, cuz you're really a yawn if it goes.",
        "author": "Bette Midler",
        "length": "75"
    },
    {
        "quote": "Care about what other people think and you will always be their prisoner.",
        "author": "Lao Tzu",
        "length": "73"
    },
    {
        "quote": "Keep your face to the sunshine and you cannot see the shadows.",
        "author": "Helen Keller",
        "length": "62"
    },
    {
        "quote": "If you have only one smile in you give it to the people you love.",
        "author": "Maya Angelou",
        "length": "65"
    },
    {
        "quote": "There are only encounters in history. There are no accidents.",
        "author": "Pablo Picasso",
        "length": "61"
    },
    {
        "quote": "Everyone faces challenges in life. It's a matter of how you learn to overcome them and using them to your advantage.",
        "author": "Celestine Chua",
        "length": "116"
    },
    {
        "quote": "He who laughs at himself never runs out of things to laugh at.",
        "author": "Epictetus",
        "length": "62"
    },
    {
        "quote": "Peace of mind is that mental condition in which you have accepted the worst.",
        "author": "Lin Yutang",
        "length": "76"
    },
    {
        "quote": "The most difficult times for many of us are the ones we give ourselves.",
        "author": "Pema Chodron",
        "length": "71"
    },
    {
        "quote": "Never argue with stupid people, they will drag you down to their level and then beat you with experience.",
        "author": "Mark Twain",
        "length": "105"
    },
    {
        "quote": "Confuse them with your silence and amaze them with your actions.",
        "author": "Unknown",
        "length": "64"
    },
    {
        "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King, Jr.",
        "length": "110"
    },
    {
        "quote": "You can live a whole life time never being awake.",
        "author": "Dan Millman",
        "length": "49"
    },
    {
        "quote": "Victims recite problems, leaders provide solutions.",
        "author": "Robin Sharma",
        "length": "51"
    },
    {
        "quote": "It is not as important how we start, but how we finish.",
        "author": "Joyce Meyer",
        "length": "55"
    },
    {
        "quote": "Attitude drives actions. Actions drive results. Results drive lifestyles.",
        "author": "Jim Rohn",
        "length": "73"
    },
    {
        "quote": "The fastest way to change is to laugh at your own folly.",
        "author": "Spencer Johnson",
        "length": "56"
    },
    {
        "quote": "Nature loves to hide.",
        "author": "Heraclitus",
        "length": "21"
    },
    {
        "quote": "Observe things as they are and don't pay attention to other people.",
        "author": "Huang Po",
        "length": "67"
    },
    {
        "quote": "There is nothing more truly artistic than to love people.",
        "author": "Vincent van Gogh",
        "length": "57"
    },
    {
        "quote": "When you get up in the morning, you have two choices - either to be happy or to be unhappy. Just choose to be happy.",
        "author": "Norman Vincent Peale",
        "length": "116"
    },
    {
        "quote": "If you want peace, you won't get it with violence.",
        "author": "John Lennon",
        "length": "50"
    },
    {
        "quote": "Common sense is not so common. ",
        "author": "Voltaire",
        "length": "31"
    },
    {
        "quote": "To improve is to change, so to be perfect is to change often.",
        "author": "Winston Churchill",
        "length": "61"
    },
    {
        "quote": "Receive without pride, let go without attachment.",
        "author": "Marcus Aurelius",
        "length": "49"
    },
    {
        "quote": "You use a glass mirror to see your face; you use works of art to see your soul.",
        "author": "George Bernard Shaw",
        "length": "79"
    },
    {
        "quote": "I was wise enough to never grow up while fooling most people into believing I had. ",
        "author": "Margaret Mead",
        "length": "83"
    },
    {
        "quote": "Investing in yourself is the best investment you will ever make.",
        "author": "Robin Sharma",
        "length": "64"
    },
    {
        "quote": "Light a candle instead of cursing the darkness.",
        "author": "Eleanor Roosevelt",
        "length": "47"
    },
    {
        "quote": "Think and wonder, wonder and think.",
        "author": "Dr. Seuss",
        "length": "35"
    },
    {
        "quote": "A thing must be loved before it is lovable.",
        "author": "Gilbert Chesterton",
        "length": "43"
    },
    {
        "quote": "Surrender to what is. Let go of what was. Have faith in what will be.",
        "author": "Sonia Ricotti",
        "length": "69"
    },
    {
        "quote": "Receive without complaint, Work with fate.",
        "author": "Ming-Dao Deng",
        "length": "42"
    },
    {
        "quote": "We must be free not because we claim freedom, but because we practice it.",
        "author": "William Faulkner",
        "length": "73"
    },
    {
        "quote": "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "Maya Angelou",
        "length": "119"
    },
    {
        "quote": "Against the assault of laughter nothing can stand.",
        "author": "Mark Twain",
        "length": "50"
    },
    {
        "quote": "You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.",
        "author": "Robin Williams",
        "length": "103"
    },
    {
        "quote": "Anger, ego, jealousy are the biggest diseases,Keep yourself aloof from these three diseases.",
        "author": "Sathya Sai Baba",
        "length": "92"
    },
    {
        "quote": "Anything becomes interesting if you look at it long enough..",
        "author": "Gustave Flaubert",
        "length": "60"
    },
    {
        "quote": "If you can see it in your mind, you can hold it in your mind.",
        "author": "Steve Harvey",
        "length": "61"
    },
    {
        "quote": "You can have the mind or you can have the moment.",
        "author": "Naval Ravikant",
        "length": "49"
    }
];

const getNewQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);
    blockquote.innerText = '"' + quotes[index]['quote'] + '"';
    figcaption.innerText = quotes[index]['author'];
}

button.addEventListener('click', getNewQuote);



