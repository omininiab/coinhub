// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

quotes = [
    "The general who wins the battle makes many calculations in his temple before the battle is fought. The general who loses makes but few calculations beforehand.",
    "A leader leads by example not by force.",
    "The control of a large force is the same principle as the control of a few men: it is merely a question of dividing up their numbers.",
    "The ultimate in disposing one's troops is to be without ascertainable shape. Then the most penetrating spies cannot pry in nor can the wise lay plans against you.",
    "If words of command are not clear and distinct, if orders are not thoroughly understood, the general is to blame. But if his orders ARE clear, and the soldiers nevertheless disobey, then it is the fault of their officers.",
    "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    "All warfare is based on deception.",
    "If fighting is sure to result in victory, then you must fight.",
    "One defends when his strength is inadaquate, he attacks when it is abundant.",
    "The quality of decision is like the well-timed swoop of a falcon which enables it to strike and destroy its victim.",
    "When the enemy is at ease, be able to weary him; when well fed, to starve him; when at rest, to make him move. Appear at places to which he must hasten; move swiftly where he does not expect you.",
    "If you know your enemy and you know yourself you need not fear the results of a hundred battles. If you know yourself but not the enemy for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself you will succumb in every battle.",
    "The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom.",
    "For to win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill.",
    "What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.",
    "To a surrounded enemy, you must leave a way of escape.",
    "To know your Enemy, you must become your Enemy.",
    "Thus, what is of supreme importance in war is to attack the enemy's strategy.",
    "A leader leads by example, not force.",
    "Too frequent rewards indicate that the general is at the end of his resources; too frequent punishments that he is in acute distress.",
    "Pretend inferiority and encourage his arrogance.",
    "All men can see these tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.",
    "If we do not wish to fight, we can prevent the enemy from engaging us even though the lines of our encampment be merely traced out on the ground. All we need to do is to throw something odd and unaccountable in his way.",
    "A military operation involves deception. Even though you are competent, appear to be incompetent. Though effective, appear to be ineffective.",
    "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    "The best victory is when the opponent surrenders of its own accord before there are any actual hostilities... It is best to win without fighting.",
    "Opportunities multiply as they are seized.",
    "Speed is the essence of war. Take advantage of the enemy's unpreparedness; travel by unexpected routes and strike him where he has taken no precautions.",
    "If your opponent is of choleric temperament, seek to irritate him.",
    "Management of many is the same as management of few. It is a matter of organization.",
    "The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.",
    "Build your opponent a golden bridge to retreat across.",
    "Swift as the wind. Quiet as the forest. Conquer like the fire. Steady as the mountain.",
    "It is essential to seek out enemy agents who have come to conduct espionage against you and to bribe them to serve you. Give them instructions and care for them. Thus doubled agents are recruited and used.",
    "Now the reason the enlightened prince and the wise general conquer the enemy whenever they move and their achievements surpass those of ordinary men is foreknowledge.",
    "And therefore those skilled in war bring the enemy to the field of battle and are not brought there by him.",
    "There is no instance of a nation benefitting from prolonged warfare.",
    "When able to attack, we must seem unable; when using our forces, we must seem inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.",
    "When torrential water tosses boulders, it is because of its momentum. When the strike of a hawk breaks the body of its prey, it is because of timing.",
    "Secret operations are essential in war; upon them the army relies to make its every move.",
    "It is said that if you know your enemies and know yourself, you will not be imperilled in a hundred battles; if you do not know your enemies but do know yourself, you will win one and lose one; if you do not know your enemies nor yourself, you will be imperilled in every single battle.",
    "He who knows when he can fight and when he cannot will be victorious.",
    "Subtle and insubstantial, the expert leaves no trace; divinely mysterious, he is inaudible. Thus he is master of his enemy's fate.",
    "A skilled commander seeks victory from the situation and does not demand it of his subordinates."
]
quote = quotes[Math.floor(Math.random() * quotes.length)]

const randomQuote = document.querySelector("#randomQuote")
randomQuote.textContent = quote

const quoteAuthor = document.querySelector("#quoteAuthor")
quoteAuthor.innerHTML = "Sun Tzu in <cite id=\"sourceTitle\" title=\"Source Title\">The Art of War</cite>"