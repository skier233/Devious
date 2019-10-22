main();
function main()
{
    if(getVar("Mod10C", false))
    {
        Mod10C();
        return;
    }
    if(getVar("Mod10B", false))
    {
        Mod10B();
        return;
    }
    if(getVar("Mod10A", false))
    {
        Mod10A();
        return;
    }
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    sm("%KeepStroking%");
    but_i_want_you();
}
function but_i_want_you()
{
    sm("But I want you to use only 2 fingers now");
    setVar("Mod10A", true);
    if (randomInteger(1, 100) <= 35)
    {
        index_and_middle_finger();
        return;
    }
    sm("Just your thumb and index finger");
    if (randomInteger(1, 100) <= 50)
    {
        just_your_thumb();
        return;
    }
    sm("It\'s going to be hard to cum like this isn\'t it?");
    sm("Just use your index finger now");
    wait(12);
    let answer0 = getInput("That\'s frustrating isn\'t it?", 8);
    if (answer0.isTimeout())
    {
        two_fingers();
        return;
    }
    if (answer0.isLike("yes"))
    {
        sm("At least I\'m letting you touch it, I could put you in chastity %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Oh good");
    }
    else
    {
    }
    two_fingers();
}
function two_fingers()
{
    sm("Back to stroking with 2 fingers now");
    wait(16);
    sm("Now 3 fingers...");
    wait(19);
    sm("%stopstroking%", 0);
    stopStroking();
    sm("Sorry, %Name% %Grin%");
    if (randomInteger(1, 100) <= 50)
    {
        know_how_frustrating();
        return;
    }
    return;
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    sm("Hm... your %Cock% really doesn\'t like not being touched, does it... %EmoteWink%");
    sm("It\'s just sort of... bouncing around aimlessly in the air...");
    sm("Start stroking again, %Name%");
    but_i_want_you();
    return;
    return;
    just_your_thumb();
}
function just_your_thumb()
{
    sm("Put some lube on that %Cock%");
    sm("Make it very slippery, but use only two fingers");
    sm("Think about how good it would feel to wrap your hand around it again");
    sm("Now take away your index finger");
    sm("I want you to stroke with your thumb and only your thumb");
    sm("%stopstroking%", 0);
    stopStroking();
    sm("It\'s good to have some restraint sometimes %Smile%");
    return;
    index_and_middle_finger();
}
function index_and_middle_finger()
{
    sm("Just your index finger and your middle finger %Smile%");
    wait(8);
    sm("Now rub only the tip of your %Cock% with those two fingers");
    sm("Imagine it\'s my clit you\'re rubbing, %SubName%");
    sm("I\'m sure you\'ve given a girl an orgasm like this, right?");
    sm("Keep going, I\'m just going to slide my hand into my panties... %Smile%");
    --Command:ImageTag(SoloF,Masturbation)
    lockImages();
    wait(15);
    sm("%EmoteMoan%");
    wait(10);
    sm("%stopstroking%", 0);
    stopStroking();
    unlockImages();
    sm("If only you were here with me");
    sm("So many juices for you to lap up %Grin%");
    sm("I think I need a little break");
    sm("So I\'m going to leave you with one of your videos");
    sm("But keep your hands off, %Name%");
    sm("I\'ll be right back %Smile%");
    setAFK(true);
    playVideo("Videos" + java.io.File.separator + "135");
    wait(13);
    sm("I\'m back %Smile%");
    setAFK(false);
    return;
    know_how_frustrating();
}
function know_how_frustrating()
{
    sm("I can only imagine how frustrating it must be when you want so badly to %JerkOff%");
    sm("And then you can\'t because you don\'t have permission");
    sm("I\'m glad I\'m never going to have to deal with that %Smile%");
    sm("You on the other hand...");
    sm("I love teasing and denying you %Grin%");
    if (randomInteger(1, 100) <= 50)
    {
        watch_a_slideshow();
        return;
    }
    return;
    watch_a_slideshow();
}
function watch_a_slideshow()
{
    sm("How about I set you up a slideshow %Smile%");
    sm("I\'ll make it one with assignments, too");
    sm("It\'s going to be a mix of different kinds of pictures...");
    sm("When you see a lesbian picture, you will do 5 strokes");
    sm("If it\'s a hardcore with vaginal penetration, squeeze you %Balls% until the image changes");
    --UNINTERPRETED LINE:If it's hardcore with <i>anal</i> penetration, squeeze your <i>cock</i> until the image changes
    --Command:CockTorture
    sm("For a blowjob image, give the head of your %Cock% one hard slap");
    one_hard_slap();
    return;
    sm("For a blowjob image, you will do 10 lightning fast strokes");
    one_hard_slap();
}
function one_hard_slap()
{
    sm("And finally if it\'s anything else, you will put your hands behind your back %Smile%");
    let answer0 = getInput("Can you remember all that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Good, you\'re a real smart boy %EmoteWink%");
        remember_all();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("Alright, one more time...");
    }
    sm("Lesbian - 5 strokes");
    sm("Hardcore vaginal penetration - squeeze balls");
    sm("Anal penetration - squeeze cock");
    --Command:CockTorture
    sm("Blowjob - one hard cock slap");
    cock_slap_again();
    return;
    sm("Blowjob - 10 fast strokes");
    cock_slap_again();
}
function cock_slap_again()
{
    sm("And anything else - hand behind your back");
    remember_all();
}
function remember_all()
{
    sm("Here we go, %PetName%");
    //Command:Slideshow(Hardcore,Softcore,Lesbian,Blowjob,Femdom,Lezdom,General,Boobs,Butts,Slow)
    setAFK(true);
    //TODO: Turn Slideshow on
    wait(randomInt(60, 150));
    setAFK(false);
    //TODO: Turn Slideshow off
    let answer0 = getInput("So, did you like this little game?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("%EmoteHappy%");
        liked_the_little_game();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("Aww that\'s just too bad, %PetName%");
    }
    sm("I know just the thing to cheer you up %Smile%");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    return;
    liked_the_little_game();
}
function liked_the_little_game()
{
    sm("I hope you didn\'t have to sit with your hands behind you back and do nothing too much");
    return;
    Mod10A();
}
function Mod10A()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod10A");
    setVar("Mod10B", true);
    --Command:BadMood(no rest)
    sm("You should rest a little bit, %PetName%");
    sm("I know that " + random("all you want is ", "you love nothing more than ") + "to " + random("ache ", "suffer ") + "for me");
    sm("But " + random("every now and then ", "on occasion ", "sometimes ", "every once in a while ") + "it\'s good to " + random("breathe easy ", "step back ") + "and " + random("relax", "slow down"));
    sm("I\'m going to count from three down to zero");
    sm("And when I get to zero I want you to close your eyes, take a deep breath...");
    sm("Then breathe out very slowly and open your eyes again");
    sm("3");
    sm("2");
    sm("1");
    sm("Zero, close your eyes...");
    wait(15);
    sm("Breathe easy now");
    sm("Let\'s do that one more time");
    sm("3");
    sm("2");
    sm("1");
    sm("Zero, eyes closed...");
    wait(15);
    sm("Good boy %Smile%");
    return;
    no_rest();
}
function no_rest()
{
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    return;
    Mod10B();
}
function Mod10B()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod10B");
    setVar("Mod10C", true);
    sm("%JerkingOff% feel so much better when it\'s being controlled by a girl, doesn\'t it?");
    sm("You don\'t have to make any decisions about whether you cum or not");
    sm("You just wait and see what happens");
    sm("%StartStroking%");
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    --Command:CockTorture
    sm("The downside is of course that it\'s not all going to be pleasurable %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("If only everything in life could be this simple, right?");
    sm("All you have to do is shut your brain down and do as I say");
    --Command:BallTorture
    sm("No matter how painful it is...");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("It\'s like playing with a dog, I throw a stick and you fetch it");
    sm("Although I would never be cruel to a dog, whereas with you... I don\'t mind cruelty as much %Grin%");
    sm("%StartStroking%");
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("I like dogs, but I guess I\'m more of a cat person to be honest");
    sm("The thing with cats is, they don\'t give a shit and I can relate to that %Laugh%");
    sm("I hope you\'re enjoying these edges, because I\'m going to make you do some more");
    sm("After all, I do need those %Balls% to be as full as they can get");
    --UNINTERPRETED LINE:I want them to be positively <i>aching</i> for me
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 3;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    --UNINTERPRETED LINE:You know, I do love the word <i>aching</i>
    --UNINTERPRETED LINE:<i>Yearning</i>, too #Smile
    --UNINTERPRETED LINE:The bottom line is, it feels good that you are <i>aching</i> for me
    --UNINTERPRETED LINE:And that you are <i>yearning</i> for my commands
    sm("%EmoteMoan% it makes me so wet thinking about that...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("I\'ll be honest with you, %SubName%");
    sm("I probably need you just as much as you need me");
    sm("You might say that I\'m aching for you to ache for me %Laugh%");
    return;
    Mod10C();
}
function Mod10C()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod10C");
    sm("Hold it tight, squeeze it");
    sm("I want you to feel how hard that %Cock% is, how much it is throbbing");
    sm("Maybe you can even feel your heartbeat pulsing when you squeeze it hard enough");
    sm("Hold it down at the base, where that hard shaft meets those full aching %Balls%");
    sm("I\'m going to count and for each number you\'ll do 1 full stroke up and down");
    sm("But no more than 1 stroke, you\'ll have to wait for the next one");
    sm("Here we go...");
    sm("1");
    sm("2");
    sm("3");
    wait(5);
    sm("4");
    wait(6);
    sm("5");
    wait(7);
    sm("6");
    wait(7);
    sm("7");
    wait(8);
    sm("8");
    wait(9);
    sm("9");
    wait(10);
    sm("10");
    wait(11);
    sm("11");
    wait(12);
    sm("12");
    wait(11);
    sm("13");
    wait(10);
    sm("14");
    wait(9);
    sm("15");
    wait(8);
    sm("16");
    wait(7);
    sm("17");
    wait(6);
    sm("18");
    sm("19");
    sm("20");
    sm("Keep holding that %Cock% tightly at the base %Smile%");
    let answer0 = getInput("Was that frustrating?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Good, let\'s do it again then %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Good, let\'s do it again then %Smile%");
    }
    sm("Get ready!");
    sm("1");
    sm("2");
    sm("3");
    wait(5);
    sm("4");
    wait(6);
    sm("5");
    wait(7);
    sm("6");
    wait(7);
    sm("7");
    wait(8);
    sm("8");
    wait(9);
    sm("9");
    wait(10);
    sm("10");
    wait(11);
    sm("11");
    wait(12);
    sm("12");
    wait(11);
    sm("13");
    wait(10);
    sm("14");
    wait(9);
    sm("15");
    wait(8);
    sm("16");
    wait(7);
    sm("17");
    wait(6);
    sm("18");
    sm("19");
    sm("20... one last stroke and then take your hand off");
    sm("It\'s good to practice restraint from time to time");
    sm("In fact, let\'s do that one more time %EmoteHappy%");
    sm("This time, I\'m going to show you some pictures from your collection alongside the numbers");
    sm("It\'s going to be pretty hard not to start %JerkingOff% fast %EmoteWink%");
    sm("Remember, 1 stroke for each number!");
    sm("Grab the base of that %Cock% and get ready...");
    sm("1");
    --Command:ShowLocalImage
    sm("2");
    --Command:ShowLocalImage
    --Command:ShowLocalImage
    sm("3");
    --Command:ShowLocalImage
    wait(5);
    sm("4");
    --Command:ShowLocalImage
    wait(6);
    sm("5");
    --Command:ShowLocalImage
    wait(7);
    sm("6");
    --Command:ShowLocalImage
    wait(7);
    sm("7");
    --Command:ShowLocalImage
    wait(8);
    sm("8");
    --Command:ShowLocalImage
    wait(9);
    sm("9");
    --Command:ShowLocalImage
    wait(10);
    sm("10");
    --Command:ShowLocalImage
    wait(11);
    sm("11");
    --Command:ShowLocalImage
    wait(12);
    sm("12");
    --Command:ShowLocalImage
    wait(11);
    sm("13");
    --Command:ShowLocalImage
    wait(10);
    sm("14");
    --Command:ShowLocalImage
    wait(9);
    sm("15");
    --Command:ShowLocalImage
    wait(8);
    sm("16");
    --Command:ShowLocalImage
    wait(7);
    sm("17");
    --Command:ShowLocalImage
    wait(6);
    sm("18");
    --Command:ShowLocalImage
    sm("19");
    --Command:ShowLocalImage
    sm("20");
    --Command:ShowLocalImage
    sm("21 %Grin%");
    --Command:ShowLocalImage
    wait(10);
    sm("22");
    --Command:ShowLocalImage
    wait(11);
    sm("23");
    --Command:ShowLocalImage
    wait(12);
    sm("24");
    --Command:ShowLocalImage
    wait(10);
    sm("25");
    --Command:ShowLocalImage
    sm("%stopstroking%", 0);
    unlockImages();
    sm("That\'s enough restraint for now, I\'m getting a little bored here %Laugh%");
    return;
}