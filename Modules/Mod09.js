main();
function main()
{
    if(getVar("Mod09C", false))
    {
        Mod09C();
        return;
    }
    if(getVar("Mod09B", false))
    {
        Mod09B();
        return;
    }
    if(getVar("Mod09A", false))
    {
        Mod09A();
        return;
    }
    sm("%stopstroking%", 0);
    stopStroking();
    setVar("Mod09A", true);
    if(getVar("mbMod09NoInstructions", false))
    {
        mbMod09NoInstructions();
        return;
    }
    sm("Let\'s do a little training exercise %PetName%");
    explain_again();
}
function explain_again()
{
    sm("This exercise is not about how fast you can go");
    --UNINTERPRETED LINE:But how <i>slow</i>
    sm("In a moment you\'re going to hear a bell");
    sm("This bell");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    sm("When you do, I want you to start stroking at a very slow pace");
    sm("1 full stroke up and down every 5 seconds");
    sm("You will count your strokes: up and down counts as one stroke");
    sm("I will keep time, and at the end we\'ll see how well you\'ve kept pace %Smile%");
    setVar("mbMod09NoInstructions", true);
    sm("%stopstroking%", 0);
    if (answer-1.isLike("yes"))
    {
        sm("Good");
        and_no_cheating();
        return;
    }
    else if (answer-1.isLike("no"))
    {
        sm("It\'s not that hard %PetName%");
    }
    else if (answer-1.isLike("long", "time"))
    {
        sm("You\'ll know when the bell rings again %Smile%");
        and_no_cheating();
        return;
    }
    sm("When you hear the bell, start stroking at 1 stroke per 5 seconds");
    sm("Count your strokes");
    sm("%stopstroking%", 0);
    sm("Then I will ask you how many strokes you did");
    and_no_cheating();
}
function and_no_cheating()
{
    sm("And no cheating by looking at the clock %SubName%!");
    switch(random("eighty", "ninety", "hundred"))
    {
        case "eighty":
        eighty();
        return;
        break;
        case "ninety":
        ninety();
        return;
        break;
        case "hundred":
        hundred();
        return;
        break;
    }
    mbMod09NoInstructions();
}
function mbMod09NoInstructions()
{
    sm("Let\'s do another slow-stroking exercise");
    let answer0 = getInput("You remember the rules, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Alright, then let\'s play %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Then let me explain, again... *sigh*");
        explain_again();
        return;
    }
    switch(random("eighty", "ninety", "hundred"))
    {
        case "eighty":
        eighty();
        return;
        break;
        case "ninety":
        ninety();
        return;
        break;
        case "hundred":
        hundred();
        return;
        break;
    }
    ninety();
}
function ninety()
{
    sm("Get ready...");
    setRapidText(true);
    setAFK(true);
    sm("Go!");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    wait(90);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    setRapidText(false);
    setAFK(false);
    sm("%stopstroking%", 0);
    if(getVar("Mod09ninetydone", false))
    {
        Mod09ninetydone();
        return;
    }
    let answer0 = getInput("How many strokes did you do?");
    setTempVar("Mod09ninetydone", true);
    if (answer0.isLike("count", "know"))
    {
        sm("Better start over then, %PetName%");
        ninety();
        return;
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        sm("That\'s exactly the right amount!");
        ninety_right();
        return;
    }
    else if (answer0.isLike("16", "sixteen"))
    {
        sm("You\'re a little bit off target, %SubName%");
        ninety_almost_right();
        return;
    }
    else if (answer0.isLike("17", "seventeen"))
    {
        sm("Oooh so close...!");
        ninety_almost_right();
        return;
    }
    else if (answer0.isLike("19", "nineteen"))
    {
        sm("Close, but no");
        ninety_almost_right();
        return;
    }
    else if (answer0.isLike("20", "twenty"))
    {
        sm("A few too many, you got greedy %SubName%");
        ninety_almost_right();
        return;
    }
    else
    {
        sm(random("Oh no ", "Nope ", "Oh dear ") + "that\'s " + random("not even close ", "way off the mark ") + "%Laugh%");
    }
    sm("I guess we\'ll have to start over, %Name%");
    ninety();
    return;
    ninety_right();
}
function ninety_right()
{
    sm("As a reward you can edge for me now %Smile% %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    ninety_almost_right();
}
function ninety_almost_right()
{
    sm("But because you were close, I won\'t let you start over");
    --Command:BallTorture
    sm("You\'re going to have to endure some pain though %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("Maybe next time you\'ll do better %Smile%");
    return;
    Mod09ninetydone();
}
function Mod09ninetydone()
{
    sm("This is boring, let\'s do something else");
    delVar("Mod09ninetydone");
    sm("I\'m sure you got your strokes right this time %Laugh%");
    return;
    hundred();
}
function hundred()
{
    sm("Get ready...");
    setRapidText(true);
    setAFK(true);
    sm("Go!");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    wait(100);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    setRapidText(false);
    setAFK(false);
    sm("%stopstroking%", 0);
    if(getVar("Mod09hundreddone", false))
    {
        Mod09hundreddone();
        return;
    }
    let answer0 = getInput("How many strokes did you do?");
    setTempVar("Mod09hundreddone", true);
    if (answer0.isLike("count", "know"))
    {
        sm("Better start over then, %PetName%");
        hundred();
        return;
    }
    else if (answer0.isLike("20", "twenty"))
    {
        sm("That\'s exactly the right amount!");
        hundred_right();
        return;
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        sm("You\'ll a little off target there %SubName%");
        hundred_almost_right();
        return;
    }
    else if (answer0.isLike("19", "nineteen"))
    {
        sm("Oooh so close...!");
        hundred_almost_right();
        return;
    }
    else if (answer0.isLike("21", "twenty-one", "twentyone"))
    {
        sm("Close, but no");
        hundred_almost_right();
        return;
    }
    else if (answer0.isLike("22", "twenty-two", "twentytwo"))
    {
        sm("A few too many, you got greedy %SubName%");
        hundred_almost_right();
        return;
    }
    else
    {
        sm(random("Oh no ", "Nope ", "Oh dear ") + "that\'s " + random("not even close ", "way off the mark ") + "%Laugh%");
    }
    sm("I guess we\'ll have to start over, %Name%");
    hundred();
    return;
    hundred_right();
}
function hundred_right()
{
    sm("As a reward you can edge for me now %Smile% %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    hundred_almost_right();
}
function hundred_almost_right()
{
    sm("But because you were close, I won\'t let you start over");
    --Command:CockTorture
    sm("You\'re going to have to endure some pain though %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("Maybe next time you\'ll do better %Smile%");
    return;
    Mod09hundreddone();
}
function Mod09hundreddone()
{
    sm("That took a long time... %EmoteRandom%");
    delVar("Mod09hundreddone");
    let answer0 = getInput("Do you think you got it right this time?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Oh good %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Then you\'re in luck");
    }
    sm("Because I\'ve had about enough of this game");
    sm("It\'s as boring for me as it is frustrating for you %Lol%");
    return;
    eighty();
}
function eighty()
{
    sm("Get ready...");
    setRapidText(true);
    setAFK(true);
    sm("Go!");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    wait(80);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "bell.mp3");
    setRapidText(false);
    setAFK(false);
    sm("%stopstroking%", 0);
    if(getVar("Mod09eightydone", false))
    {
        Mod09eightydone();
        return;
    }
    let answer0 = getInput("How many strokes did you do?");
    setVar("Mod09eightydone", true);
    if (answer0.isLike("count", "know"))
    {
        sm("Better start over then, %PetName%");
        eighty();
        return;
    }
    else if (answer0.isLike("16", "sixteen"))
    {
        sm("That\'s exactly the right amount!");
        eighty_right();
        return;
    }
    else if (answer0.isLike("14", "fourteen"))
    {
        sm("You\'ll a little off target there %SubName%");
        eighty_almost_right();
        return;
    }
    else if (answer0.isLike("15", "fifteen"))
    {
        sm("Oooh so close...!");
        eighty_almost_right();
        return;
    }
    else if (answer0.isLike("17", "seventeen"))
    {
        sm("Close, but no");
        eighty_almost_right();
        return;
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        sm("A few too many, you got greedy %SubName%");
        eighty_almost_right();
        return;
    }
    else
    {
        sm(random("Oh no ", "Nope ", "Oh dear ") + "that\'s " + random("not even close ", "way off the mark ") + "%Laugh%");
    }
    sm("I guess we\'ll have to start over, %Name%");
    eighty();
    return;
    eighty_right();
}
function eighty_right()
{
    sm("As a reward you can edge for me now %Smile% %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    eighty_almost_right();
}
function eighty_almost_right()
{
    sm("But because you were close, I won\'t let you start over");
    --Command:BallTorture
    sm("You\'re going to have to endure some pain though %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("Maybe next time you\'ll do better %Smile%");
    return;
    Mod09eightydone();
}
function Mod09eightydone()
{
    sm("Hold on a second, I gotta take a call...");
    delVar("Mod09eightydone");
    setAFK(true);
    wait(45);
    sm("Sorry about that %Smile%");
    setAFK(false);
    sm("Now where were we... the slow strokes, right?");
    sm("Yeah, that\'s kind of boring isn\'t it %Laugh%");
    sm("Let\'s move on, %Name%");
    return;
    Mod09A();
}
function Mod09A()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod09A");
    setVar("Mod09B", true);
    sm("%stopstroking%", 0);
    sm("Nope, I was going to make you edge %Grin%");
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("%stopstroking%", 0);
    sm("See, I was going through your porn stack and there were some pictures that caught my eye");
    sm("Like this one");
    showTaggedImage(4, ["lesbian"]);
    lockImages();
    sm("And this one");
    showTaggedImage(4, ["lesbian"]);
    sm("So you can understand how I got a little sidetracked there");
    let answer0 = getInput("Do you like this picture?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("We agree on that then %EmoteHappy%");
        looks_good();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("Well we don\'t have to agree on everything");
    }
    sm("Although I\'d like to try to chance your mind about that...");
    sm("So I want you to edge to this picture right now %SoundEdge%");
    startEdging();
    holdEdge();
    sm("Let the edge fade now as you keep staring at the picture");
    let answer1 = getInput("Looks pretty good now, right? %Laugh%");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        sm("That\'s what I though");
    }
    else if (answer1.isLike("no"))
    {
        sm("Oh well at least I got you to edge to it");
    }
    sm("It doesn\'t really matter either way");
    unlockImages();
    sm("As long as I can make you %JerkOff% and edge and make your %Balls% ache %Smile%");
    sm("I don\'t even need your porn stack for that, although it comes in handy sometimes");
    return;
    looks_good();
}
function looks_good()
{
    sm("You know what, go ahead and edge to this picture right now %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    let answer0 = getInput("Looks even better now, doesn\'t it? %Laugh%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("That\'s what I though");
    }
    else if (answer0.isLike("no"))
    {
        sm("Oh I guess it couldn\'t even get any better");
    }
    sm("Anyways... it\'s good to have this collection of yours at my disposal");
    unlockImages();
    return;
    Mod09B();
}
function Mod09B()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod09B");
    setVar("Mod09C", true);
    showTaggedImage(4, ["boobs"]);
    lockImages();
    sm("Too bad you can\'t %JerkOff% anymore huh? %Laugh%");
    showTaggedImage(4, ["boobs"]);
    sm("I know your hand starts itching and your %Cock% starts twitching when you see a pair of %Boobs% like these");
    sm("But you\'re not allowed to %JerkOff% right now");
    showTaggedImage(4, ["boobs"]);
    sm("This must be so hard for a jerk addict like you...");
    sm("You\'re wired to immediately think about %JerkingOff% when you see something like this");
    showTaggedImage(4, ["boobs"]);
    sm("Or this");
    showTaggedImage(4, ["ass"]);
    sm("Anything that involves a girl showing a little skin, really");
    showTaggedImage(4, ["boobs"]);
    sm("Your mind turns it into a little fantasy");
    --Command:ImageTag(SoloF)
    sm("About how that girl would totally do all kinds of dirty things for you");
    --Command:ImageTag(SoloF)
    sm("When you see a picture of two hot girls doing it, you don\'t even feel left out");
    showTaggedImage(4, ["lesbian"]);
    sm("You have no part in this, %SubName%");
    sm("Those girl don\'t need you for anything, all they need is each other");
    sm("But your dirty mind makes it into a little story about a threesome whether you like it or not");
    sm("And you can\'t help but reach for that erect %Cock% sitting there in your lap");
    sm("Don\'t do it, don\'t you fucking dare touch your %Cock% right now, %PetName%");
    showTaggedImage(4, ["lesbian"]);
    --UNINTERPRETED LINE:I want you to <i>think</i> about #JerkingOff now though... 
    sm("Imagine grabbing your %Cock% tightly and pumping it hard and fast");
    sm("Think about how good it feels to %JerkOff% while looking at two girl making out");
    --Command:ImageTag(Lesbian,Kissing)
    sm("Imagine how good you %Cock% feel in your hand...");
    sm("But %PetName%...");
    unlockImages();
    --UNINTERPRETED LINE:It's not <i>your</i> #Cock - it's mine, I own it
    sm("That\'s why you are sitting there not doing anything except staring at your screen");
    sm("I own that %Cock% and I decide what you do to it");
    sm("So if I want you to %JerkOff% you will do it");
    sm("And if I want you so it there all limp like a broken puppet...");
    sm("Then you will sit there all limp like a broken puppet");
    sm("You\'re just a weak little boy who needs to be controlled, that\'s all");
    return;
    Mod09C();
}
function Mod09C()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod09C");
    sm("I\'m going to find some pictures in your collection now");
    sm("Because I want you to edge and hold it to every part of the female body now");
    sm("You need to worship the female body, %PetName%");
    sm("And the best way to do that is to stroke and edge to it");
    sm("So let\'s start with...");
    sm("%Boobs%");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("I know you like %Boobs% - every straight guy does %Smile%");
    sm("But let\'s continue with... *drum roll*");
    sm("A nice %Ass%");
    showTaggedImage(4, ["ass"]);
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("If only you could get down on your knees and kiss that %Ass% right now, hm?");
    --UNINTERPRETED LINE:<i>That</i> would be the right way to worship it, actually...
    sm("But we\'ll have to use pictures instead...");
    if(!getVar("Kneeling", false) && !getVar("KneelingNever", false))
    {
        sm("But nevertheless, you should get down on your knees now");
    }
    if(getVar("Kneeling", false))
    {
        sm("Now that you\'re on your knees as you should be when worshipping, let\'s move on");
    }
    sm("And now you will worship...");
    sm("Feet!");
    --Command:ImageTag(BodyFeet)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("Maybe feet aren\'t really your thing, but that doesn\'t matter");
    sm("You should worship each and every part of the female body");
    sm("So let\'s move up a little bit, so you can worship...");
    sm("Legs %Smile%");
    --Command:ImageTag(BodyLegs)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("%stopstroking%", 0);
    sm("We\'re going to move up a little more, I think you know what you\'ll be worshipping next...");
    sm("Pussy");
    --Command:ImageTag(BodyPussy)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("I bet you thought that was the ultimate part to worship, but no...");
    sm("Pussy rules your world, sure");
    sm("Pussy is the thing that\'s on your mind and makes you weak and submissive");
    sm("But there\'s something else I want you to edge to...");
    sm("A pretty face %Smile%");
    --Command:ImageTag(BodyFace)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("A woman\'s personality is in her face, %PetName%");
    sm("Not it her %Boobs% or %Ass% or pussy");
    --Command:ImageTag(BodyFace)
    sm("%Edge%");
    startEdging();
    holdEdge();
    --Command:ImageTag(BodyFace)
    sm("%Edge%");
    startEdging();
    holdEdge();
    --Command:ImageTag(BodyFace)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    unlockImages();
    sm("I think that\'s enough worship for now");
    if (randomInteger(1, 100) <= 50)
    {
        although();
        return;
    }
    return;
    although();
}
function although()
{
    sm("Although... maybe I should let you worship pussy one more time too...");
    --Command:ImageTag(BodyPussy)
    lockImages();
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("One more, just to be sure you get the message %Grin%");
    --Command:ImageTag(BodyPussy)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    unlockImages();
    sm("Never forget, women deserve your worship, %PetName%");
    return;
}