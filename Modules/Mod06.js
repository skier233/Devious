main();
function main()
{
    if(getVar("GlitterIntroduced", false))
    {
        GlitterIntroduced();
        return;
    }
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    GlitterIntroduced();
}
function GlitterIntroduced()
{
    if(getVar("Mod06A", false))
    {
        Mod06A();
        return;
    }
    if(getVar("Mod06B", false))
    {
        Mod06B();
        return;
    }
    if(getVar("Mod06C", false))
    {
        Mod06C();
        return;
    }
    sm("%stopstroking%", 0);
    stopStroking();
    setVar("Mod06A", true);
    sm("I\'ve got to go for a minute %Name%");
    --Command:Glitter(mbGlitterMod06-06)
    sm("I can\'t leave you unsupervised of course");
    wait(10);
    sm("Luckily I have some friends who can help out");
    wait(5);
    let answer0 = getInput("I hope you don\'t mind being left at the mercy of one of my friends", 8);
    if (answer0.isTimeout())
    {
        themercy1();
        return;
    }
    if (answer0.isLike("no", "mind", "okay", "problem", "fine"))
    {
        sm("That\'s good %Smile%");
    }
    else if (answer0.isLike("want", "don't"))
    {
        sm("It\'s too bad you feel that way %PetName%");
    }
    else
    {
        sm("Not that it matters either way");
    }
    themercy1();
}
function themercy1()
{
    sm("Because that\'s how it\'s going to be");
    sm("Just because I\'m taking a break");
    sm("Doesn\'t mean you should get one too");
    addContact(2);
    sysM("Always a pleasure to deny a boy his pleasure %Laugh%", -1, 2);
    sysM("Oh, hi there %SubName% %Grin%", -1, 2);
    sysM("Just leave him up to me %ShortName%", -1, 2);
    sysM("He\'s still stroking right?", -1, 2);
    sm("Not at the moment, no... that\'ll be up to you to decide now");
    sysM("Oh okay %Laugh%", -1, 2);
    sm("Be back in a few minutes!");
    sysM("Don\'t hurry %Smile%", -1, 2);
    removeContact(1);
    sm("I\'m going to tease you so bad %SubName%");
    sm("I love that I can access your porn from here");
    sm("The stuff you keep says a lot about the kind of person you are");
    sm("Like this one for example");
    showTaggedImage(4, ["captions"]);
    lockImages();
    sm("Oh yes it tells me all I need to know %Laugh%");
    sm("You do have a thing for girls telling you what to do");
    showTaggedImage(4, ["captions"]);
    unlockImages();
    sm("Which is great cause I love telling guys what to do");
    sm("I want to see how good you are %SubName%");
    sm("Give me 50 strokes, but don\'t edge!");
    let answer0 = getInput("Tell me when you\'re done", 20);
    if (answer0.isTimeout())
    {
        hurry_up();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("Good boy");
        more_stroking();
        return;
    }
    hurry_up();
}
function hurry_up()
{
    let answer0 = getInput("Hurry up %SubName%", 15);
    if (answer0.isTimeout())
    {
        too_slow();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("Good boy, a little slow, but okay");
        more_stroking();
        return;
    }
    too_slow();
}
function too_slow()
{
    --Command:CockTorture
    sm("Too slow, you should be done by now");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    --Command:CockTorture
    sm("This isn\'t all that easy is it? %Grin%");
    more_stroking();
    return;
    sm("Too slow, you should be done by now");
    more_stroking();
}
function more_stroking()
{
    sm("Give me 100 strokes, but no edging!");
    let answer0 = getInput("Just tell me when you did 100 strokes", 25);
    if (answer0.isTimeout())
    {
        hurry_up2();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("Good boy");
        more_stroking2();
        return;
    }
    hurry_up2();
}
function hurry_up2()
{
    let answer0 = getInput("C\'mon stroke that cock faster %SubName%", 15);
    if (answer0.isTimeout())
    {
        too_slow2();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("You should go faster");
        more_stroking2();
        return;
    }
    too_slow2();
}
function too_slow2()
{
    --Command:CockTorture
    sm("Not good enough %SubName%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    --Command:CockTorture
    sm("This is not going to get any easier, %PetName%");
    more_stroking2();
    return;
    sm("Not good enough %SubName%");
    more_stroking2();
}
function more_stroking2()
{
    sm("Give me another 100 strokes, but really fast this time");
    sm("And of course, no edging...");
    sm("Stroke now, and don\'t lose count %Smile%");
    --Command:Timeout
    let answer0 = getInput("Tell me when you\'re done", 10);
    if (answer0.isTimeout())
    {
        hurry_up3();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("Good boy");
        more_stroking3();
        return;
    }
    hurry_up3();
}
function hurry_up3()
{
    let answer0 = getInput("Faster %SubName%", 15);
    if (answer0.isTimeout())
    {
        too_slow3();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did") || answer0.isLike("stop") || answer0.isLike("much") || answer0.isLike("enough")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("It\'s getting harder isn\'t it");
        more_stroking3();
        return;
    }
    else if (answer0.isLike("stop", "much", "enough"))
    {
        sm("Okay hands off");
        more_stroking3();
        return;
    }
    too_slow3();
}
function too_slow3()
{
    sm("%stopstroking%", 0);
    --Command:CockTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("That was no good %SubName%");
    sm("But I\'ll give you another chance");
    more_stroking3();
}
function more_stroking3()
{
    let answer0 = getInput("Do you think you could do another 100 without edging or coming?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sm("Let\'s put that to the test");
    }
    else if (answer0.isLike("no"))
    {
        sm("Okay hands off then");
        not_enough_stroking();
        return;
    }
    let answer1 = getInput("Go!", 20);
    if (answer1.isTimeout())
    {
        hurry_up4();
        return;
    }
    while (!(answer1.isLike("done") || answer1.isLike("ready") || answer1.isLike("did") || answer1.isLike("stop") || answer1.isLike("much") || answer1.isLike("enough")))
    {
        answer1 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer1.isLike("done", "ready", "did"))
    {
        sm("Wow, that was amazing!");
        no_more_stroking();
        return;
    }
    else if (answer1.isLike("stop", "much", "enough"))
    {
        sm("Okay hands off");
        not_enough_stroking();
        return;
    }
    hurry_up4();
}
function hurry_up4()
{
    let answer0 = getInput("I wonder if you\'re going to make it this time", 15);
    if (answer0.isTimeout())
    {
        did_not_make_it();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did") || answer0.isLike("stop") || answer0.isLike("much") || answer0.isLike("enough")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        sm("Good job!");
        no_more_stroking();
        return;
    }
    else if (answer0.isLike("stop", "much", "enough"))
    {
        sm("Okay hands off");
        not_enough_stroking();
        return;
    }
    did_not_make_it();
}
function did_not_make_it()
{
    sm("%stopstroking%", 0);
    not_enough_stroking();
}
function not_enough_stroking()
{
    sm("You need a little more stamina to meet my standards");
    sm("But that\'s okay, nobody\'s perfect %Smile%");
    addContact(1);
    sm("How are you guys doing?");
    sysM("Just testing your little subby here", -1, 2);
    sm("And how did he do?");
    sysM("Not too good, %ShortName%, not too good", -1, 2);
    sm("%Laugh%");
    sysM("It\'s okay though, I might have pushed him a little too far %Grin%", -1, 2);
    sm("I figured as much");
    sm("Maybe next time, after some more training...");
    looking_forward();
    return;
    no_more_stroking();
}
function no_more_stroking()
{
    sm("I\'m impressed %SubName%");
    addContact(1);
    sm("How are you guys doing?");
    sysM("Just testing your little subby here", -1, 2);
    sm("And how did he do?");
    sysM("Better than I expected actually", -1, 2);
    sm("Well jerking off is the one thing he\'s good at %Lol%");
    if(getVar("SubIsVirgin", false))
    {
        sysM("His stamina is pretty good for a virgin...", -1, 2);
    }
    sm("Don\'t say that %Contact1%, you\'re embarrassing him");
    sysM("Yeah? Maybe he ought to be embarrassed...", -1, 2);
    sm("Okay that\'s enough %Contact1% %Laugh%");
    sm("I\'ll try to keep him in shape for your next visit");
    looking_forward();
}
function looking_forward()
{
    sysM("Already looking forward to it!", -1, 2);
    sysM("For now I\'ll leave him to you", -1, 2);
    sm("Alright, thanks for filling in %Contact1% %Smile%");
    removeContact(2);
    return;
    Mod06A();
}
function Mod06A()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod06A");
    setVar("Mod06B", true);
    sm("I\'ve got to go for a minute %Name%");
    --Command:Glitter(mbGlitterMod06-03)
    sm("I can\'t leave you unsupervised of course");
    wait(10);
    sm("Luckily I have some friends who can help out");
    let answer0 = getInput("I hope you don\'t mind being left at the mercy of one of my friends", 10);
    if (answer0.isTimeout())
    {
        Do_You_Mind();
        return;
    }
    if (answer0.isLike("no", "mind", "okay", "problem", "fine"))
    {
        sm("That\'s good %Smile%");
    }
    else if (answer0.isLike("want", "don't"))
    {
        sm("It\'s too bad you feel that way %PetName%");
    }
    else
    {
        sm("Not that it matters either way");
    }
    Do_You_Mind();
}
function Do_You_Mind()
{
    sm("Because that\'s how it\'s going to be");
    sm("Just because I\'m taking a break");
    sm("Doesn\'t mean you should get one too");
    addContact(3);
    sysM("Hi %ShortName% and %SubName% what\'s up?", -1, 3);
    sm("Hey there %Contact2% thanks for helping out %Smile%");
    sysM("Sure, but what exactly am I supposed to do here?", -1, 3);
    sysM("I mean I\'m supposed to tease %SubName% right?", -1, 3);
    sm("Well it\'s up to you I suppose, but yeah that\'s the general idea");
    sysM("So is he like, jerking off right now?", -1, 3);
    sm("Nope, but he will if you tell him to %Smile%");
    sm("%stopstroking%", 0);
    sm("Basically, yes");
    sm("He\'ll do anything you say, unless it\'s dangerous or disgusting of course");
    sysM("Why would I want to do that?? I\'m not %Contact3%", -1, 3);
    sm("%Laugh% You\'ll do fine %Contact2%");
    sm("Okay have fun you two, I\'ll be right back");
    removeContact(1);
    --Command:Glitter(mbGlitterMod06-04)
    setAFK(true);
    wait(20);
    let answer0 = getInput("So, you\'re stroking now, right %SubName%?");
    setAFK(false);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sm("Oh good, I thought I dropped the ball already!");
        any_good();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("Oh right she said you\'re NOT stroking");
    }
    let answer1 = getInput("I\'m terrible at this %Laugh%", 8);
    if (answer1.isTimeout())
    {
        so_start_please();
        return;
    }
    if (answer1.isLike("no", "fine", "good", "alright", "okay", "not"))
    {
        sm("Thanks %SubName% %Smile%");
    }
    else if (answer1.isLike("yes", "are", "awful", "terrible"))
    {
        sm("Hmm");
    }
    else
    {
        sm("Oh well...");
    }
    so_start_please();
}
function so_start_please()
{
    sm("So, start stroking again please...?");
    any_good();
}
function any_good()
{
    wait(12);
    sm("Stroke you cock %SubName%");
    let answer0 = getInput("Am I doing okay so far?");
    if (answer0.isLike("yes", "sure", "okay", "fine", "good", "alright"))
    {
        sm("Few! %Smile%");
    }
    else if (answer0.isLike("great", "amazing", "super"))
    {
        sm("C\'mon %SubName% don\'t exaggerate");
    }
    else if (answer0.isLike("no", "bad", "good"))
    {
        sm("Sorry %SubName% I\'m not experienced like %DomName% is");
    }
    else if (answer0.isLike("terrible", "awful", "shit"))
    {
        sm("Oh shut up %SubName% it\'s not that bad");
    }
    else
    {
        sm("I\'m doing my best %SubName%");
    }
    sm("%DomName% told me about the porn stash on your computer");
    sm("It\'s pretty amazing");
    showTaggedImage(4, ["hardcore"]);
    lockImages();
    sm("That\'s fucking hot %Smile%");
    sm("I can\'t imagine masturbating to this stuff");
    showTaggedImage(4, ["hardcore"]);
    --UNINTERPRETED LINE:And <i>not</i> being allowed to cum
    sm("And I can\'t believe you let %DomName% do that to you");
    unlockImages();
    sm("%stopstroking%", 0);
    sm("%stopstroking%", 0);
    if (answer0.isLike("yes"))
    {
        sm("%Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Fine, keep stroking then");
        keep_stroking_then();
        return;
    }
    sm("I have to admit though...");
    sm("It\'s pretty hot to know you\'re all hard right now and not touching");
    sm("I\'m so wet right now :)");
    sm("Good thing I\'ve got those pictures of yours");
    showTaggedImage(4, ["lesbian"]);
    lockImages();
    sm("God that\'a hort");
    wait(12);
    --Command:ImageTag(SoloF,Masturbation)
    sm("Typng with on hands tricky");
    sm("Got my fingers so deep in my pussy");
    wait(13);
    sm("Mmm I love knowing you can\'t touch yourself");
    showTaggedImage(4, ["lesbian"]);
    wait(17);
    addContact(1);
    unlockImages();
    let answer1 = getInput("Hey I\'m back, how are you two doing?", 10);
    if (answer1.isTimeout())
    {
        still_there();
        return;
    }
    if (answer1.isLike("masturbating", "busy", "rubbing", "touching", "pussy"))
    {
        sm("Ah, %Contact2% got \'distracted\' didn\'t she %Smile%");
    }
    else
    {
        sm("%Contact2% got \'distracted\' didn\'t she %Smile%");
    }
    still_there();
}
function still_there()
{
    sm("%Contact2% are you still there?");
    sysM("Sorry I was err, busy... *blush*", -1, 3);
    sm("I guess %SubName% didn\'t get a whole lot to do then %Lol%");
    sysM("Not really...", -1, 3);
    sysM("Can I leave him to you now?", -1, 3);
    sm("Sure, I\'ll take it from here");
    removeContact(3);
    sm("She got a little carried away I guess...");
    return;
    keep_stroking_then();
}
function keep_stroking_then()
{
    sm("Stroke to this picture %SubName%");
    showTaggedImage(4, ["lesbian"]);
    lockImages();
    setAFK(true);
    sm("Let\'s just wait until %DomName% returns");
    wait(78);
    addContact(1);
    sm("Hey I\'m back, how are you two doing?");
    unlockImages();
    setAFK(false);
    sysM("%SubName% isn\'t exactly following orders", -1, 3);
    sm("%stopstroking%", 0);
    sm("%stopstroking%", 0);
    --Command:BallTorture
    sm("%Contact2% you should punish him when he does that");
    how_should_i_do_that();
    return;
    sm("You should listen to my friends %SubName%");
    sysM("Maybe you should punish him for it...?", -1, 3);
    sm("I think you starting to get the hang of this %Laugh%");
    sm("Alright, get to the edge %PetName% %SoundEdge%");
    --Command:Edge(ExtremeHold,HoldTaunts)
    sm("%LetTheEdgeFade%");
    sysM("Wow, that was intense... I bet it hurt, too", -1, 3);
    keep_your_boy_in_line();
    return;
    how_should_i_do_that();
}
function how_should_i_do_that()
{
    sysM("How?", -1, 3);
    sm("Like this...");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("That\'s enough for now %PetName%");
    sysM("%Laugh%, I\'ll... keep that in mind", -1, 3);
    sysM("But to be honest that\'s more like something %Contact3% would do", -1, 3);
    keep_your_boy_in_line();
}
function keep_your_boy_in_line()
{
    sm("Well, you have to keep your boy in line sometimes %Grin%");
    sm("Would you like to try it again sometime?");
    --UNINTERPRETED LINE:@Contact2 Sure, if I don't <i>have</i> to hurt him #Smile
    sm("Of course not, it\'s completely up to you");
    let answer0 = getInput("Alright I\'ll leave you to it then, Bye %SubName%!", 8);
    if (answer0.isTimeout())
    {
        not_say_bye();
        return;
    }
    if (answer0.isLike("bye", "goodbye", "you", "later"))
    {
        sysM(":)", -1, 3);
    }
    else if (answer0.isLike("thanks", "you"))
    {
        sysM("You\'re welcome!", -1, 3);
    }
    else
    {
    }
    removeContact(3);
    return;
    not_say_bye();
}
function not_say_bye()
{
    let answer0 = getInput("You\'re not going to say goodbye to %Contact2% %SubName%?", 10);
    if (answer0.isTimeout())
    {
        still_no_bye();
        return;
    }
    if (answer0.isLike("bye", "goodbye", "you", "later"))
    {
        sysM(":)", -1, 3);
    }
    else if (answer0.isLike("thanks", "you"))
    {
        sysM("You\'re welcome!", -1, 3);
    }
    else
    {
    }
    still_no_bye();
}
function still_no_bye()
{
    removeContact(3);
    sm("We\'ll have to work on your manners %PetName% %EmoteSad%");
    increaseAnger(3)
    return;
    Mod06B();
}
function Mod06B()
{
    sm("I know just what you need, %Name%");
    delVar("Mod06B");
    setVar("Mod06C", true);
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    let answer0 = getInput("Mmm yeah you needed that, didn\'t you?", 10);
    if (answer0.isTimeout())
    {
        Needed_That();
        return;
    }
    if (answer0.isLike("yes"))
    {
        sm("Of course you did");
        --UNINTERPRETED LINE:[no] That just proves that actually, you <i>really</i> needed that edge
    }
    Needed_That();
}
function Needed_That()
{
    sm("You see the thing is");
    --UNINTERPRETED LINE:When you <i>want</i> to edge, that just means you're in the right state of mind
    --UNINTERPRETED LINE:But when you do <i>not</i> want to edge...
    --UNINTERPRETED LINE:Well, that just means you're not in the right state of mind <i>yet</i>
    sm("And that\'s something a couple of edges can fix %Grin%");
    return;
    Mod06C();
}
function Mod06C()
{
    sm("%KeepStroking%");
    delVar("Mod06C");
    sm("Check out this picture I found...");
    getTeasePicture();
    sm("This one\'s pretty " + random("hot ", "sexy ") + "too");
    getTeasePicture();
    addContact(4);
    sm("Look who just came in %EmoteHappy%");
    sysM("Hi %Smile%", -1, 4);
    sm("Good to see you, %Contact3%");
    sysM("You too, and %SubName% of course", -1, 4);
    sysM("Always good to see him suffer some well deserved abuse %Grin%", -1, 4);
    sm("At the moment he\'s just doing some stroking");
    sysM("Always good for buildup... May I?", -1, 4);
    sm("Be my guest");
    sysM("Get to the edge, %SubName% %SoundEdge%", -1, 4);
    startEdging();
    holdEdge();
    sysM("That cock is feeling way too good right now", -1, 4);
    sysM("Hey %DomName% can I hurt that pathetic excuse for a cock?", -1, 4);
    --Command:CockTorture
    sm("Sure %Smile%");
    yes_you_can_hurt_it();
    return;
    sm("No, %SubName% still isn\'t into it, sorry %EmoteSad%");
    sysM("Hm... and I still don\'t think that should be up to him, but okay", -1, 4);
    no_you_cannot_hurt_it();
    return;
    yes_you_can_hurt_it();
}
function yes_you_can_hurt_it()
{
    sysM("Awesome %Grin%", -1, 4);
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCockC3.js");
    sysM("It\'s not feeling so good now, it it? %Grin%", -1, 4);
    no_you_cannot_hurt_it();
}
function no_you_cannot_hurt_it()
{
    sysM("So tell me, %SubName%...", -1, 4);
    let answer0 = getInput("Do you take it up the ass for %DomName%?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        sm("You\'re not thinking what I\'m thinking, are you %Contact3%?");
        i_do_take_it_up();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sysM("Well you should...", -1, 4);
    }
    sm("You\'re not thinking what I\'m thinking, are you %Contact3%?");
    i_do_take_it_up();
}
function i_do_take_it_up()
{
    sysM("What?", -1, 4);
    sm("You know, a certain incident with a certain guy...");
    sm("Involving a certain fairly sizable strapon dildo and a pair of handcuffs...");
    sysM("%Laugh% I wouldn\'t do that to %SubName%, you know that", -1, 4);
    sysM("Not unless you say it\'s okay, anyway %EmoteWink%", -1, 4);
    --UNINTERPRETED LINE:Just checking... I don't think #SubName is ready for <i>that</i>
    sysM("Don\'t worry about it, %ShortName% %Smile%", -1, 4);
    she_wants_you_to_kneel();
}
function she_wants_you_to_kneel()
{
    if(!getVar("Kneeling", false) && !getVar("KneelingNever", false))
    {
        sysM("Get on your knees, %SubName%", -1, 4);
        setTempVar("Kneeling", true);
        --UNINTERPRETED LINE:That <i>is</i> how it all started...
    }
    sysM("Hey, c\'mon, I don\'t even know where that strapon is...", -1, 4);
    sysM("And besides, I\'m not in the room with %SubName% now am I?", -1, 4);
    sm("Just kidding, %Contact3%");
    sysM("I\'m not as cruel a person as you girl seem to think", -1, 4);
    let answer0 = getInput("You don\'t think I\'m too cruel, do you %SubName%?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("do") || answer0.isLike("are") || answer0.isLike("no") || answer0.isLike("don't") || answer0.isLike("not")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "do", "are"))
    {
        sysM("Oh really...", -1, 4);
    }
    else if (answer0.isLike("no", "don't", "not"))
    {
        sysM("You see, %ShortName%?", -1, 4);
        he_is_just_scared_of_you();
        return;
    }
    sm("You shouldn\'t have said that, %PetName% %Grin%");
    sysM("Spread you legs, %SubName%", -1, 4);
    --UNINTERPRETED LINE:@Contact3 You know what I'd <i>love</i> to do right now?
    --Command:BallTorture
    sm("I know what you\'re thinking, go right ahead %EmoteHappy%");
    yes_you_can_hurt_them();
    return;
    sm("%stopstroking%", 0);
    sm("Those %Balls% are off limits, unfortunately...");
    sysM("Oh that\'s just ridiculous! You should be able to smack them around...", -1, 4);
    sm("Sorry, you\'ll have to think of something a bit less cruel");
    sm("Be nice to a boy for a change %EmoteWink%");
    show_you_how_nice();
    return;
    yes_you_can_hurt_them();
}
function yes_you_can_hurt_them()
{
    sysM("Spread your legs a little wider %SubName%", -1, 4);
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBallsC3.js");
    let answer0 = getInput("Do you still think I\'m cruel?", -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%", -1, 4);
    }
    if (answer0.isLike("yes"))
    {
        sysM("So you think you know me better than I know myself...", -1, 4);
    }
    else if (answer0.isLike("no"))
    {
        sysM("You see, %ShortName%?", -1, 4);
        he_is_just_scared_of_you();
        return;
    }
    sysM("Alright then", -1, 4);
    show_you_how_nice();
    return;
    he_is_just_scared_of_you();
}
function he_is_just_scared_of_you()
{
    sm("He\'s just scared of telling you the truth %EmoteWink%");
    show_you_how_nice();
}
function show_you_how_nice()
{
    sysM("I\'ll show you how nice I can be...", -1, 4);
    sysM("Get to the edge, %SubName% %SoundEdge%", -1, 4);
    startEdging();
    holdEdge();
    --UNINTERPRETED LINE:@Contact3 That was just a little taste of how <i>good</i> I can make you feel, #SubName #Smile
    sm("I think he gets the point %Lol%");
    sysM("I have to get going, talk to you later, %ShortName%", -1, 4);
    sm("You\'re always welcome to join in, %Contact3%!");
    sysM("Thanks!", -1, 4);
    removeContact(4);
    sm("Let me tell you, %SubName%");
    sm("Though she may act tough sometimes");
    sm("Once you get to know her, %Contact3% is actually the kindest person you\'ll ever meet");
    if(getVar("Kneeling", false))
    {
        sm("You can get off your knees now %Smile%");
        delVar("Kneeling");
    }
    return;
}