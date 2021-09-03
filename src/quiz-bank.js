const QUIZ_DATA = [
  {
    question:
      "Whose repair shop does Jerry tell his parents he took the watch to?",
    answers: ["Doug Colt", "Mickey Abbot", "Jimmy Sherman", "Bob Cobb"],
    correct_answer: "Jimmy Sherman",
    imageUrl: "",
  },
  {
    question:
      "What is the name of Elaine's coworker to whom Jerry makes the panty remark in 'The Cheever Letters?",
    answers: ["Lisa", "Sandra", "Wendy", "Linda"],
    correct_answer: "Sandra",
    imageUrl: "",
  },
  {
    question: "Who dated the high-talker?",
    answers: ["Renee", "Noreen", "Eva", "Sidra"],
    correct_answer: "Noreen",
    imageUrl: "",
  },
  {
    question:
      "Mr. Steinbrenner trades George to what company in 'The Muffin Tops?'",
    answers: [
      "Cluck Cluck Plantation",
      "Brian's Birds",
      "Tyler Chicken",
      "Hickory Hens",
    ],
    correct_answer: "Tyler Chicken",
    imageUrl: "",
  },
  {
    question: "What topping does Kramer put on the pizza that bothers Poppie",
    answers: ["Pineapple", "Cucumber", "Olives", "Broth"],
    correct_answer: "Cucumber",
    imageUrl: "",
  },
  {
    question:
      "Elaine gets the attention of George's boss in 'The Revenge' by telling him she's going where?",
    answers: [
      "A real-estate convention",
      "Europe",
      "Downtown",
      "A nudist colony",
    ],
    correct_answer: "A nudist colony",
    imageUrl: "",
  },
  {
    question:
      "What reason do Newman and Kramer give for reversing their peepholes?",
    answers: [
      "To cultivate neighbourliness",
      "To prevent an ambush",
      "They have nothing to hide",
      "So people can see if they're home",
    ],
    correct_answer: "To prevent an ambush",
    imageUrl: "",
  },
  {
    question: "Marla proposes redesigning Jerry's closet using what?",
    answers: ["Hangars", "Hooks", "Hampers", "Levels"],
    correct_answer: "Hooks",
    imageUrl: "",
  },
  {
    question:
      "What kind of car was George originally going to buy before deciding to buy Jon Voight's LeBaron?",
    answers: ["Honda", "Volvo", "Saab", "Nissan"],
    correct_answer: "Volvo",
    imageUrl: "",
  },
  {
    question:
      "What is the name of Jerry's college friend who manages Kenny Rogers Roasters?",
    answers: ["Drake", "Jack", "Seth", "Dugan"],
    correct_answer: "Seth",
    imageUrl: "",
  },
  {
    question:
      "What does Jerry say he would rather do than have dinner with Bania?",
    answers: [
      "Drink bleach",
      "Make his own suit",
      "Kiss George",
      "Sit in soup",
    ],
    correct_answer: "Make his own suit",
    imageUrl: "",
  },
  {
    question: "The catalogs of what store prompts Kramer to stop his mail?",
    answers: ["Ikea", "JCPenney", "Pottery Barn", "Sears"],
    correct_answer: "Pottery Barn",
    imageUrl: "",
  },
  {
    question:
      "According to George in 'The Beard,' nobody asks a barber for what kind of haircut?",
    answers: [
      "The Drew Boggs",
      "The Larry Fine",
      "The Wayne Wurth",
      "The Bob Costas",
    ],
    correct_answer: "The Larry Fine",
    imageUrl: "",
  },
  {
    question:
      "What score does Elaine earn on the second IQ test she takes in place of George?",
    answers: ["128", "130", "115", "151"],
    correct_answer: "151",
    imageUrl: "",
  },
  {
    question: "What is the the sniffing accountant allergic to?",
    answers: ["Velvet", "Wool", "Mohair", "Cotton"],
    correct_answer: "Mohair",
    imageUrl: "",
  },
  {
    question:
      "According to Newman, the air in Hawaii is so dewy-sweet that you don't even have to do what?",
    answers: ["Shower", "Drink water", "Wear a shirt", "Lick stamps"],
    correct_answer: "Lick stamps",
    imageUrl: "",
  },
  {
    question: "What is Mulva's real name",
    answers: ["Celeste", "Dolores", "Bovary", "Gipple"],
    correct_answer: "Dolores",
    imageUrl: "",
  },
  {
    question: "How much does Bania pay for Kramer's suit",
    answers: ["$300", "$100", "$500", "$250"],
    correct_answer: "$300",
    imageUrl: "",
  },
  {
    question: "Who does Jerry steal the marble rye from?",
    answers: ["June Cheever", "Mabel Choate", "Marla Costner", "Mary Sloan"],
    correct_answer: "Mabel Choate",
    imageUrl: "",
  },
  {
    question: "Who owns the fruit store that Jerry and Kramer get banned from?",
    answers: ["Joe", "Jim", "Bob", "Rudy"],
    correct_answer: "Joe",
    imageUrl: "",
  },
  {
    question: "What is Slippery Pete's name for an electrical outlet?",
    answers: ["Holster", "Rings", "Plugs", "Holes"],
    correct_answer: "Holes",
    imageUrl: "",
  },
  {
    question: "Who lives across the hall from 'Bizarro Jerry?'",
    answers: ["Kessler", "Gene", "Feldman", "Kevin"],
    correct_answer: "Feldman",
    imageUrl: "",
  },
  {
    question: "What food does Elaine feed to her 66-year old boyfriend, Owen?",
    answers: ["Yankee beans", "Sardines", "Egg salad", "Asparagus"],
    correct_answer: "Yankee beans",
    imageUrl: "",
  },
  {
    question: "What is the name of the serial killer in 'The Frogger?'",
    answers: [
      "The Riffer",
      "The Smog Strangler",
      "The Lopper",
      "The Velvet Fist",
    ],
    correct_answer: "The Lopper",
    imageUrl: "",
  },
  {
    question: "How much blood does Kramer donate to Jerry?",
    answers: ["1 pint", "3 pints", "5 pints", "7 pints"],
    correct_answer: "3 pints",
    imageUrl: "",
  },
  {
    question:
      "How much did Kramer get for being greeted with 'Hey' instead of 'Hello?'",
    answers: ["$100", "$50", "$10", "$20"],
    correct_answer: "$20",
    imageUrl: "",
  },
  {
    question:
      "What does George spot from across Jerry's apartment while squinting?",
    answers: ["A squirrel", "A dime", "A spider", "A twix bar"],
    correct_answer: "A dime",
    imageUrl: "",
  },
  {
    question:
      "What song is Mr. Steinbrenner singing in George's office while George hides under the desk?",
    answers: ["Alfie", "Emotion", "Midnight Lady", "Heartbreaker"],
    correct_answer: "Heartbreaker",
    imageUrl: "",
  },
  {
    question: "What is George's secret ATM code?",
    answers: ["Hershey's", "Bosco", "Nesquik", "U-bet"],
    correct_answer: "Bosco",
    imageUrl: "",
  },
  {
    question:
      "How does the doctor on duty when Susan died describe George's reaction upon hearing the news of her death?",
    answers: [
      "Mild relief",
      "Restrained jubilation",
      "Moderate euphoria",
      "Hampered glee",
    ],
    correct_answer: "Restrained jubilation",
    imageUrl: "",
  },
  {
    question:
      "What is the name of the pizza joint where George gets the Frogger?",
    answers: ["Mario's", "Paisano's", "Papi's", "Aldo's"],
    correct_answer: "Mario's",
    imageUrl: "",
  },
  {
    question:
      "Who is the baseball player that actually spit on Kramer and Newman?",
    answers: ["McDowell", "Hundley", "Olerud", "Gilkey"],
    correct_answer: "McDowell",
    imageUrl: "",
  },
  {
    question:
      "Where do the tiny surgical instruments for the squirrel operation come from?",
    answers: ["Guadalupe", "El Dorado", "De Soto", "El Paso"],
    correct_answer: "El Paso",
    imageUrl: "",
  },
  {
    question: "Who brings Mona back from lesbianism?",
    answers: ["George", "Jerry", "Kramer", "Newman"],
    correct_answer: "Kramer",
    imageUrl: "",
  },
  {
    question: '"It\'s like those hip musicians with their ____"',
    answers: [
      "Fancy hats",
      "Complicated shoes",
      "Beautiful girlfriends",
      "Long hair",
    ],
    correct_answer: "Complicated shoes",
    imageUrl: "",
  },
  {
    question: "Who won't let George be successful?",
    answers: ["Jerry", "His mom", "God", "Steinbrenner"],
    correct_answer: "God",
    imageUrl: "",
  },
  {
    question:
      "Which state do Kramer and Newman plan to drive to so they can cash in the empty bottles?",
    answers: ["Ohio", "Pennsylvania", "Maine", "Michigan"],
    correct_answer: "Michigan",
    imageUrl: "",
  },
  {
    question:
      "Jerry gives Elaine $182 in cash for her birthday. What does George give her?",
    answers: ["A bench", "$183", "Theater tickets", "$91"],
    correct_answer: "$91",
    imageUrl: "",
  },
  {
    question: "Who put Nana in a nursing home?",
    answers: ["Uncle Leo", "Helen Seinfeld", "Causin Jeffrey", "Jerry"],
    correct_answer: "Uncle Leo",
    imageUrl: "",
  },
  {
    question:
      "What part of Kramer's body do the Calvin Klein executives describe as 'sublime'?",
    answers: ["His buttocks", "His torso", "His face", "His calfs"],
    correct_answer: "His buttocks",
    imageUrl: "",
  },
  {
    question:
      "Kramer is forced to fire this actress from 'Scarsdale Surprise' in order to keep his stolen Tony Award.",
    answers: [
      "Marisa Tomei",
      "Bette Midler",
      "Barbara Hershey",
      "Raquel Welch",
    ],
    correct_answer: "Raquel Welch",
    imageUrl: "",
  },
  {
    question:
      "This animal expert brings a hawk to the Merv Griffin Show set in Kramer's apartment.",
    answers: ["Jim Fowler", "Brad Clover", "Bob Flowers", "John Colver"],
    correct_answer: "Jim Fowler",
    imageUrl: "",
  },
  {
    question:
      "Kramer tries to give this actor a script after seeing him in a cafe in Los Angeles.",
    answers: [
      "George Wendt",
      "Candice Bergen",
      "Corbin Bernsen",
      "Fred Savage",
    ],
    correct_answer: "Fred Savage",
    imageUrl: "",
  },
  {
    question: "What disease does Mickey get that he is very excited about?",
    answers: ["Chlamydia", "Jaundice", "Gonorrhea", "Cirrhosis"],
    correct_answer: "Cirrhosis",
    imageUrl: "",
  },
  {
    question:
      "Which singer can't walk down the street in South America because of his cult following?",
    answers: [
      "Andy Russell",
      "Lucho Gatica",
      "Sergio Mendes",
      "Julio Iglesias",
    ],
    correct_answer: "Sergio Mendes",
    imageUrl: "",
  },
  {
    question:
      "What is the name of the electrician who helps George take the Frogger machine?",
    answers: ["Schlomo", "The fixer", "Snoopy", "Slippery Pete"],
    correct_answer: "Slippery Pete",
    imageUrl: "",
  },
  {
    question: "What was George's Frogger high score",
    answers: ["860,630", "896,980", "970,440", "1,029,990"],
    correct_answer: "860,630",
    imageUrl: "",
  },
  {
    question: "What is Causin Jeffrey's favorite animal?",
    answers: ["The leopard", "The giraffe", "The tiger", "The turtle"],
    correct_answer: "The leopard",
    imageUrl: "",
  },
  {
    question: "What is the name of the restaurant George gets the calzones at?",
    answers: ["Mario's", "Calzones-R-Us", "Number 1 Pie", "Paisanos"],
    correct_answer: "Paisanos",
    imageUrl: "",
  },
  {
    question:
      "What is the name of Kramer's girlfriend with the long nails who scratches his back?",
    answers: ["Olive", "Cheryl", "Wendy", "Gail"],
    correct_answer: "Olive",
    imageUrl: "",
  },
  {
    question: "What is the name of Frank's long lost cousin in Tuscany?",
    answers: ["Marco", "Giuseppe", "Luca", "Carlo"],
    correct_answer: "Carlo",
    imageUrl: "",
  },
  {
    question: "What song does Mel Torme sing to Kramer?",
    answers: [
      "When You're Smiling",
      "Stardust",
      "I'll be seeing you",
      "Heart and soul",
    ],
    correct_answer: "When You're Smiling",
    imageUrl: "",
  },
  {
    question: "What is the name of the bakery that sells the marble rye?",
    answers: [
      "Harvest Bakery",
      "Schnitzer's Bakery",
      "Moishe's Bake Shop",
      "Breads Bakery",
    ],
    correct_answer: "Schnitzer's Bakery",
    imageUrl: "",
  },
  {
    question:
      '"I find _____ to be the most sensual of all the salted cured meats"',
    answers: ["Pastrami", "Salami", "Corned beef", "Ham"],
    correct_answer: "Pastrami",
    imageUrl: "",
  },
  {
    question:
      "Kramer gets a job on the TV show 'Murphy Brown' as her secretary. What is his name on the show?",
    answers: ["Brian Green", "Frank Gilmore", "Steven Snell", "Pat Cohen"],
    correct_answer: "Steven Snell",
    imageUrl: "",
  },
  {
    question: "What does Peggy call Elaine that makes her mad?",
    answers: ["Suze", "Suzie", "Suzanne", "Sue"],
    correct_answer: "Suze",
    imageUrl: "",
  },
  {
    question:
      "What are the first names Jerry and George make up for Murphy and O'Brien?",
    answers: [
      "Frank and Dylan",
      "Virgil and John",
      "Ted and Sean",
      "Dylan and Colin",
    ],
    correct_answer: "Dylan and Colin",
    imageUrl: "",
  },
  {
    question: "Who accuses Morty of embezzling funds?",
    answers: [
      "Frank Costanza",
      "Jack Klompus",
      "Barney Martin",
      "Mabel Choate",
    ],
    correct_answer: "Jack Klompus",
    imageUrl: "",
  },
  {
    question: "Where does Ned get blacklisted from?",
    answers: [
      "Supreme Flounder",
      "China Panda",
      "Hop Sing's",
      "The Dixieland Deli",
    ],
    correct_answer: "Hop Sing's",
    imageUrl: "",
  },
  {
    question: "What kind of drug does George have a guy for?",
    answers: ["Quaaludes", "Mickeys", "Pepto-Bismol", "Heroin"],
    correct_answer: "Mickeys",
    imageUrl: "",
  },
  {
    question:
      "What does Ping say his cousin Cheryl Fong's nickname is in court",
    answers: [
      "The Terminator",
      "Briefs Bandit",
      "Ping the merciless",
      "Beast from the far east",
    ],
    correct_answer: "The Terminator",
    imageUrl: "",
  },
  {
    question:
      "Who does Kramer promise will hit 2 home runs to a little sick boy?",
    answers: ["Derek Jeter", "Wade Boggs", "Brad Clontz", "Paul O'Neill"],
    correct_answer: "Paul O'Neill",
    imageUrl: "",
  },
  {
    question: "What is the Maestro's real name?",
    answers: [
      "Bob Cobb",
      "Franklin Delano Romanowski",
      "Tony Abado",
      "Artie Levine",
    ],
    correct_answer: "Bob Cobb",
    imageUrl: "",
  },
  {
    question: "Where does Jerry take Bania for their meal?",
    answers: ["Pomodoros", "Isabella's", "Bouchard's", "Mendy's"],
    correct_answer: "Mendy's",
    imageUrl: "",
  },
  {
    question:
      "What does Kramer feed his horse while he's driving a horse drawn carriage?",
    answers: ["Baked beans", "SpaghettiOs", "Chili", "Beef-A-Reeno"],
    correct_answer: "Beef-A-Reeno",
    imageUrl: "",
  },
  {
    question: "What is the name of Babu's restaurant?",
    answers: [
      "Taste of Pakistan",
      "Flavor of the world",
      "The Dream Cafe",
      "Babu's hut",
    ],
    correct_answer: "The Dream Cafe",
    imageUrl: "",
  },
  {
    question: "What is the name of the crepe shop run by the Mandelbaums?",
    answers: [
      "The Crepe Escape",
      "Crepe Station",
      "Magic Pan",
      "The Crepe Cafe",
    ],
    correct_answer: "Magic Pan",
    imageUrl: "",
  },
  {
    question: "What is the name of the cafe the gang regularly frequents?",
    answers: ["Café Nervosa", "Tom's", "The Dream Cafe", "Monk's"],
    correct_answer: "Monk's",
    imageUrl: "",
  },
  {
    question:
      "Which of the following is not a euphemism for 'abstinence from masturbation?'",
    answers: [
      "Queen of the castle",
      "Master of my domain",
      "Lord of the manor",
      "King of the fort",
    ],
    correct_answer: "King of the fort",
    imageUrl: "",
  },
  {
    question:
      "George describes his bachelor paradise as eating a block of cheese the size of what?",
    answers: ["A spin wheel", "A car battery", "A brick", "A football"],
    correct_answer: "A car battery",
    imageUrl: "",
  },
  {
    question: "What is J. Peterman's first name?",
    answers: ["John", "Jerome", "Jacopo", "Julio"],
    correct_answer: "Jacopo",
    imageUrl: "",
  },
  {
    question: "Which actor plays George on the show within the show?",
    answers: ["Jeremy Piven", "Jon Favreau", "Peter Berg", "Chris Young"],
    correct_answer: "Jeremy Piven",
    imageUrl: "",
  },
  {
    question:
      "Who claims to have invented the 'it's not you it's me' breakup speech?",
    answers: ["George", "Jerry", "Elaine", "Kramer"],
    correct_answer: "George",
    imageUrl: "",
  },
  {
    question: "What is the name of Jerry's favorite shirt?",
    answers: ["Silly silver", "Baby blue", "Red lightning", "Golden boy"],
    correct_answer: "Golden boy",
    imageUrl: "",
  },
  {
    question:
      "When Mr. Wilhelm joins the carpet cleaning cult, what does he change his name to?",
    answers: ["Tania", "Sunshine", "Lucian", "Jon"],
    correct_answer: "Tania",
    imageUrl: "",
  },
  {
    question:
      "What is the name of the horse that pulls Kramer's horse drawn carriage?",
    answers: ["Scout", "Pie-O-My", "Rusty", "Pokey"],
    correct_answer: "Rusty",
    imageUrl: "",
  },
  {
    question: "Which sitcom does Elaine write a spec script for?",
    answers: ["Cheers", "Golden Girls", "Family Ties", "Murphy Brown"],
    correct_answer: "Murphy Brown",
    imageUrl: "",
  },
  {
    question: "What does Kramer want on his tombstone when he dies?",
    answers: [
      "Giddy-up!",
      "Man's best friend",
      "Carpe diem",
      "I loved every minute of it",
    ],
    correct_answer: "Man's best friend",
    imageUrl: "",
  },
  {
    question: "What is Puddy's favorite restaurant?",
    answers: ["Arby's", "Denny's", "Cracker Barrel", "Chili's"],
    correct_answer: "Arby's",
    imageUrl: "",
  },
  {
    question:
      "When George thinks he is having a heart attack, what is actually happening?",
    answers: [
      "He's having a panic attack",
      "He swallowed a whole grape",
      "He needs a tonsillectomy",
      "An allergic reaction",
    ],
    correct_answer: "He needs a tonsillectomy",
    imageUrl: "",
  },
  {
    question:
      "How many times did Jerry say 'Hello, Newman' throughout the entire series?",
    answers: ["23", "7", "15", "34"],
    correct_answer: "15",
    imageUrl: "",
  },
  {
    question:
      "What is the name of Elaine's boyfriend who Jerry deems a 'Mimbo?'",
    answers: ["Brett", "Joey", "Tony", "Chad"],
    correct_answer: "Tony",
    imageUrl: "",
  },
  {
    question: "Which is not one of the components of George's 'trifecta?'",
    answers: ["TV", "Shower", "Food", "Sex"],
    correct_answer: "Shower",
    imageUrl: "",
  },
  {
    question: "What was Kramer's original name in the pilot?",
    answers: ["Cooper", "Feldman", "Kenny", "Kessler"],
    correct_answer: "Kessler",
    imageUrl: "",
  },
  {
    question:
      "What does George's zookeeper girlfriend say after he first tells her he loves her?",
    answers: ["Thank you", "I'm hungry", "That's nice", "Whose bra is this?"],
    correct_answer: "I'm hungry",
    imageUrl: "",
  },
  {
    question: "What is Jerry's patented move as an umbrella salesman?",
    answers: ["The shimmmy", "The twirl", "The tap", "The swirl"],
    correct_answer: "The twirl",
    imageUrl: "",
  },
  {
    question: "What is the name of Kramer's cologne?",
    answers: ["The ocean", "The coast", "The beach", "The shore"],
    correct_answer: "The beach",
    imageUrl: "",
  },
  {
    question: "What is the name of 'Bizarro George?'",
    answers: ["Liam", "Gene", "Sean", "Brian"],
    correct_answer: "Gene",
    imageUrl: "",
  },
  {
    question:
      "What is the obnoxious pet name Jerry uses for his girlfriend in 'The Soup Nazi?'",
    answers: ["Snookie", "Schmoops", "Schmoopie", "Schnuckums"],
    correct_answer: "Schmoopie",
    imageUrl: "",
  },
  {
    question: "What are the names of the 'street tuffs' who harass Kramer?",
    answers: [
      "Cedric and Bob",
      "Albert and Bruce",
      "Seth and John",
      "Jose and Carl",
    ],
    correct_answer: "Cedric and Bob",
    imageUrl: "",
  },
  {
    question: "What is the name of 'Bizarro Jerry?'",
    answers: ["Kevin", "Eric", "Seth", "Duncan"],
    correct_answer: "Kevin",
    imageUrl: "",
  },
  {
    question:
      "Which of the following is not a reason why Jerry breaks up with a girlfriend?",
    answers: [
      "Eating peas one at a time",
      "Masculine hands",
      "Gonorrhea",
      "Bad breath",
    ],
    correct_answer: "Bad breath",
    imageUrl: "",
  },
  {
    question: "What does Elaine's fake phone number go to?",
    answers: [
      "A bakery",
      "A hardware store",
      "A massage parlor",
      "A betting parlor",
    ],
    correct_answer: "A betting parlor",
    imageUrl: "",
  },
  {
    question: "What is the name of Jerry's high school sweetheart?",
    answers: [
      "Veronica Sanderson",
      "Sherry Becker",
      "Sheena Lowenstein",
      "Alice Carpenter",
    ],
    correct_answer: "Sherry Becker",
    imageUrl: "",
  },
  {
    question: "What is the name of 'Bizarro Newman?'",
    answers: ["Kerlon", "Farb", "Vargas", "Todd"],
    correct_answer: "Vargas",
    imageUrl: "",
  },
  {
    question:
      "What is the made-up disease Jerry says makes him unable to hold his pee?",
    answers: ["Uriasis", "Uromycitisis", "Hyperplasia", "Hematuria"],
    correct_answer: "Uromycitisis",
    imageUrl: "",
  },
  {
    question: "What is the name of the dog Jerry gets stuck dog-sitting?",
    answers: ["Cooper", "Snowy", "Farfel", "Zeus"],
    correct_answer: "Farfel",
    imageUrl: "",
  },
  {
    question:
      "How much do the John F. Kennedy golf clubs start at in the auction?",
    answers: ["$2,000", "$4,000", "$10,000", "$20,000"],
    correct_answer: "$4,000",
    imageUrl: "",
  },
  {
    question: "What type of soup does Elaine mock in 'The Soup Nazi'?",
    answers: ["Lima bean", "Jambalaya", "Mulligatawny", "Mushroom Barley"],
    correct_answer: "Lima bean",
    imageUrl: "",
  },
  {
    question: "What is the name of the hand model agent that discovers George?",
    answers: [
      "Susan Walters",
      "Elsa Carlisle",
      "Liz Sheridan",
      "Heidi Swedberg",
    ],
    correct_answer: "Elsa Carlisle",
    imageUrl: "",
  },
  {
    question: "What was the name of the clown in the episode 'The Fire'?",
    answers: ["Bozo", "Tim", "Carl", "Eric "],
    correct_answer: "Eric ",
    imageUrl: "",
  },
  {
    question: "What flavor of ice cream does Bette Midler ask Kramer to get?",
    answers: ["Cherry", "Lemon", "Tutti-Frutti", "Pineapple"],
    correct_answer: "Pineapple",
    imageUrl: "",
  },
  {
    question:
      "Who moves cars from one side of the street to the other, so that people don't get parking tickets?",
    answers: ["Sid", "Gus", "Bob", "Joe"],
    correct_answer: "Sid",
    imageUrl: "",
  },
  {
    question:
      "What name does Joel Rifkin think is associated with a guy who buys irregular underwear?",
    answers: ["Remy", "Ned", "Silas", "Ellis"],
    correct_answer: "Ned",
    imageUrl: "",
  },
  {
    question:
      "What is Newman's moniker when he is hired to eat the muffin stumps?",
    answers: ["The Cleaner", "The Solver", "The Fixer", "The Glutton"],
    correct_answer: "The Cleaner",
    imageUrl: "",
  },
  {
    question:
      "What move does David Puddy supposedly steal from George in 'The Fusilli Jerry'?",
    answers: [
      "The knuckle",
      "The swirl",
      "The counter-clockwise swirl",
      "Stopping short",
    ],
    correct_answer: "The knuckle",
    imageUrl: "",
  },
  {
    question:
      "What country is Mr. Pitt visiting while Elaine is watching over his apartment?",
    answers: ["Ireland", "England", "Scotland", "Wales"],
    correct_answer: "Scotland",
    imageUrl: "",
  },
  {
    question:
      "What are the names of George's horses at his fictitious home in the Hamptons?",
    answers: [
      "Snoopy and Rusty",
      "Schlomo and Slippery Pete",
      "Beefo and Rusty",
      "Snoopy and Prickly Pete",
    ],
    correct_answer: "Snoopy and Prickly Pete",
    imageUrl: "",
  },
  {
    question:
      'In the episode "The Race", what is the name of Jerry\'s old high school nemesis?',
    answers: ["Seth Fletcher", "Duncan Meyer", "Gerald Brown", "Tim Gack"],
    correct_answer: "Duncan Meyer",
    imageUrl: "",
  },
  {
    question: "Who is the guy who found the dating loop-hole?",
    answers: ["Tim Gack", "David Puddy", "Lloyd Braun", "Tim Whatley"],
    correct_answer: "Tim Gack",
    imageUrl: "",
  },
  {
    question:
      "How much money does Kramer say Elaine should put in to enter into 'The Contest'?",
    answers: ["$100", "$500", "$1,000", "$10,000"],
    correct_answer: "$1,000",
    imageUrl: "",
  },
  {
    question:
      "Jerry dated a Miss America contestant. Which state was she from?",
    answers: ["Vermont", "Delaware", "New Hampshire", "Rhode Island"],
    correct_answer: "Rhode Island",
    imageUrl: "",
  },
  {
    question: "Who was the re-gifter?",
    answers: ["Joe Mayo", "The Drake", "Tim Whatley", "David Puddy"],
    correct_answer: "Tim Whatley",
    imageUrl: "",
  },
  {
    question:
      "What was the name of the bookstore where Jerry caught his Uncle Leo shoplifting?",
    answers: ["Brentano's", "Borders", "The Strand", "Reader's Warehouse"],
    correct_answer: "Brentano's",
    imageUrl: "",
  },
  {
    question: "Who has a high pitched voice from a failed hernia operation?",
    answers: ["Lomez", "Bob Sacamano", "Mike Moffitt", "Tor Eckman"],
    correct_answer: "Bob Sacamano",
    imageUrl: "",
  },
  {
    question:
      "What brand of tip calculators did Kramer and Morty give out to residents of Del Boca Vista in return for their votes?",
    answers: ["Computron", "Willard", "Wizard", "Electro-tip"],
    correct_answer: "Willard",
    imageUrl: "",
  },
  {
    question:
      "In the episode 'The Old Man', Kramer and Newman attempt to sell used records at what establishment?",
    answers: [
      "Putumayo",
      "Rudy's Antique Boutique",
      "Bleecker Bob's Records",
      "Dusty Records",
    ],
    correct_answer: "Bleecker Bob's Records",
    imageUrl: "",
  },
  {
    question:
      "Kramer ruined a washing machine by filling it with concrete mix. How much did Kramer estimate the damage to be?",
    answers: ["$800", "$1,000", "$1,200", "$1,500"],
    correct_answer: "$1,200",
    imageUrl: "",
  },
  {
    question:
      "Elaine's rock climbing boyfriend Tony dislikes which kind of sandwiches?",
    answers: ["Peanut butter", "Egg salad", "Tuna salad", "Chicken"],
    correct_answer: "Peanut butter",
    imageUrl: "",
  },
  {
    question:
      "What score did Elaine originally get on the IQ Test she took for George?",
    answers: ["75", "81", "85", "97"],
    correct_answer: "85",
    imageUrl: "",
  },
];

export default QUIZ_DATA;
