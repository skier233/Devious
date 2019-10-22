main();
function main()
{
    if(getVar("Mod03BJEdges", false))
    {
        Mod03BJEdges();
        return;
    }
    if(getVar("Mod03X", false))
    {
        Mod03X();
        return;
    }
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    setVar("Mod03X", true);
    let answer0 = getInput("Do you " + random("enjoy ", "like ") + random("edging ", "it when I make you edge ", "getting to the edge ", "edging your brains out for me ", "edging for me ") + "%PetName%?");
    if (answer0.isLike("yes"))
    {
        sm(random("Excellent ", "Good ", "Awesome ", "Great ") + "%Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Good, I " + random("love ", "like ", "do enjoy ") + random("putting you through ", "making you do ", "it when you have to endure ") + random("stuff ", "things ") + "you don\'t " + random("like ", "want to ", "actually enjoy ") + "%Grin%");
    }
    else
    {
        sm("I " + random("love ", "like ", "do enjoy ") + "making you edge");
    }
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    if(getVar("Mod03A", false))
    {
        Mod03A();
        return;
    }
    sm("I\'m going to show you some pictures, %Name%");
    setVar("Mod03A", true);
    sm("You\'re going to give me 10 full strokes for each picture");
    sm("And no more than 10 stokes");
    sm("Except when it\'s a pic of a blowjob...");
    sm("A blowjob means you have to edge %Smile%");
    let answer1 = getInput("Is that clear?");
    while (!(answer1.isLike("yes") || answer1.isLike("no") || answer1.isLike("explain") || answer1.isLike("understand") || answer1.isLike("unclear")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        sm("Good");
        canstart();
        return;
    }
    else if (answer1.isLike("no", "explain", "understand", "unclear"))
    {
        sm("It\'s perfectly simple %PetName%");
    }
    sm("Every new picture means you stroke your %Cock% 10 times");
    sm("But when I show you a picture of a blowjob you have to edge as fast as you can");
    let answer2 = getInput("Okay?");
    if (answer2.isLike("yes", "okay", "understood", "clear"))
    {
        sm("It\'s not exactly rocket science is it");
        canstart();
        return;
    }
    else if (answer2.isLike("no"))
    {
        sm("Now you\'re just yanking my chain %Name%");
    }
    else
    {
        sm("Now you\'re just yanking my chain %Name%");
    }
    sm("When really, I should be yanking yours");
    canstart();
}
function canstart()
{
    sm("So let\'s begin!");
    sm("This is a nice one to start off with");
    showTaggedImage(4, ["softcore"]);
    lockImages();
    sm("You don\'t have to tell me every time you did your 10 strokes");
    sm("Just make sure you do them all");
    sm("Like right now");
    showTaggedImage(4, ["boobs"]);
    sm("You can do the math %PetName%");
    sm("If I showed you each and every one of the pics in your collection");
    sm("How many strokes would that be...");
    showTaggedImage(4, ["hardcore"]);
    sm("A lot %Laugh%");
    sm("Ooh BJ alert! You know what that means");
    showTaggedImage(4, ["blowjob"]);
    startEdging();
    sm("You have quite a few blowjob pictures too");
    sm("What if I made you edge to all of them %GeneralTime%");
    sm("That would really mess you up");
    showTaggedImage(4, ["softcore"]);
    sm("I don\'t think you could handle it");
    sm("10 strokes for this %Ass% %Name%");
    showTaggedImage(4, ["ass"]);
    wait(12);
    showTaggedImage(4, ["blowjob"]);
    sm("%SoundEdge%");
    startEdging();
    sm("I don\'t even have to tell you anything anymore");
    sm("I can let the pictures do the talking");
    showTaggedImage(4, ["femdom"]);
    setVar("Mod03edges", 0);
    BackUp();
}
function BackUp()
{
    if (getVar("Mod03edges", 0) > 2)
    {
        end();
        return;
    }
    choose_image();
}
function choose_image()
{
    switch(random("FDimage", "LDimage", "Butt", "Boob", "LesImage", "HCimage", "BJimage", "BJimage", "BJimage"))
    {
        case "FDimage":
        FDimage();
        return;
        break;
        case "LDimage":
        LDimage();
        return;
        break;
        case "Butt":
        Butt();
        return;
        break;
        case "Boob":
        Boob();
        return;
        break;
        case "LesImage":
        LesImage();
        return;
        break;
        case "HCimage":
        HCimage();
        return;
        break;
        case "BJimage":
        BJimage();
        return;
        break;
        case "BJimage":
        BJimage();
        return;
        break;
        case "BJimage":
        BJimage();
        return;
        break;
    }
    FDimage();
}
function FDimage()
{
    showTaggedImage(4, ["femdom"]);
    BackUp();
    return;
    LDimage();
}
function LDimage()
{
    --Command:ShowLezdomImage
    BackUp();
    return;
    Butt();
}
function Butt()
{
    showTaggedImage(4, ["ass"]);
    BackUp();
    return;
    Boob();
}
function Boob()
{
    showTaggedImage(4, ["boobs"]);
    BackUp();
    return;
    LesImage();
}
function LesImage()
{
    showTaggedImage(4, ["lesbian"]);
    BackUp();
    return;
    HCimage();
}
function HCimage()
{
    showTaggedImage(4, ["hardcore"]);
    BackUp();
    return;
    BJimage();
}
function BJimage()
{
    showTaggedImage(4, ["blowjob"]);
    sm("%SoundEdge%");
    startEdging();
    sm("%Mod03Taunt%");
    setVar("Mod03edges", getVar("Mod03edges", 0) + 1);
    BackUp();
    return;
    end();
}
function end()
{
    if (randomInteger(1, 100) <= 50)
    {
        choose_image();
        return;
    }
    sm("Last one, %PetName%");
    showTaggedImage(4, ["blowjob"]);
    startEdging();
    sm("%LetTheEdgeFade%");
    unlockImages();
    setTempVar("Mod03BJEdges", true);
    sm("We could go on like this forever");
    sm("But there are so many other ways I can torment you %Grin%");
    return;
    Mod03BJEdges();
}
function Mod03BJEdges()
{
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("Can you still feel those edges I made you do to blowjob pics earlier?");
    sm("Let\'s do one more...");
    showTaggedImage(4, ["blowjob"]);
    lockImages();
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    unlockImages();
    sm("Mmm you definitely felt that one, didn\'t you %Giggles%");
    return;
    Mod03A();
}
function Mod03A()
{
    sm("There is something I like more than making you edge");
    sm("And that\'s making you edge twice in a row %Grin%");
    sm("Get to the edge, %PetName% %SoundEdge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    sm("And if you can do 2 in a row... you know what I\'m going to say, right?");
    sm("The thing with edging is, more is always better");
    sm("It might not feel that way for you, but most of the time I feel like I don\'t do it enough");
    sm("Making you edge, I mean");
    sm("%Edge%");
    startEdging();
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
    sm("So that was three in a row...");
    sm("You\'re probably starting to worry a little now, aren\'t you?");
    sm("You\'re thinking: is she going to tell me to do 4 in a row next?");
    if(getVar("Mod03B", false))
    {
        Mod03B();
        return;
    }
    sm("And then 5? Then 6?");
    setVar("Mod03B", true);
    sm("How far is this going to go?");
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 4;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    let answer0 = getInput("Have you had enough yet, %Name%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Oh... you know that\'s not the right answer, right? %Laugh%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Good %Smile%");
    }
    sm("Because I\'m not done yet");
    sm("You already know how many this is going to be...");
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 5;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    if(getVar("Mod03C", false))
    {
        Mod03C();
        return;
    }
    --UNINTERPRETED LINE:1+2+3+4+5=15 edges... I hadn't realised how quickly this adds up, #Name @SetFlag(Mod03C)
    sm("I should probably let you regain your strength for a minute");
    if (randomInteger(1, 100) <= 50)
    {
        Why_Risk_It();
        return;
    }
    sm("%stopstroking%", 0);
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    Why_Risk_It();
}
function Why_Risk_It()
{
    sm("I mean why risk spilling all that built up cum");
    sm("Those %Balls% need to stay full and keep aching for me");
    return;
    Mod03C();
}
function Mod03C()
{
    sm("This is what I like to call an edge ladder, %Name%");
    delVar("Mod03C");
    delVar("Mod03B");
    delVar("Mod03A");
    sm("You\'ve climbed 5 rungs so far");
    sm("So now I\'m going to give you a choice");
    sm("Option 1: you complete your ladder, in other words: climb down from 4 back to 1");
    sm("That means another 10 edges %Grin%");
    sm("Option 2: only 1 edge, but you have to hold it");
    sm("AND 5 ball smacks for each of the edges you skipped, so that\'s 45 smacks");
    let answer0 = getInput("Which one do you choose, option 1 or option 2?");
    while (!(answer0.isLike("1") || answer0.isLike("one") || answer0.isLike("2") || answer0.isLike("two")))
    {
        answer0 = getInput("1 or 2?");
    }
    if (answer0.isLike("1", "one"))
    {
        sm("Excellent choice, I hate to leave an edge ladder unfinished %EmoteHappy%");
        finish_the_ladder();
        return;
    }
    else if (answer0.isLike("2", "two"))
    {
        sm("I was hoping you\'d say that %Grin%");
    }
    if(getVar("BallsTied", false))
    {
        balls_are_tied();
        return;
    }
    if(getVar("Shoelace", false))
    {
        sm("I think this will work best if those %Balls% are tied up");
        run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "BallsTied.js");
    }
    balls_are_tied();
}
function balls_are_tied()
{
    if(getVar("WoodenSpoon", false))
    {
        sm("Get the wooden spoon, you\'re going to use is to do the smacking");
    }
    sm("25 ball smacks, get to it");
    sm("And don\'t hold back, %Name% - you know I wouldn\'t");
    wait(20);
    let answer0 = getInput("Done?");
    while (!(answer0.isLike("yes") || answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("no")))
    {
        answer0 = getInput("Let me know when you\'re done");
    }
    if (answer0.isLike("yes", "done", "ready", "finished"))
    {
        sm("Good %PetName% %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Let me know when you\'re done");
        --Command:LoopAnswer
    }
    sm("And then there\'s that one edge that you still owe me...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("Maybe next time you\'ll opt for finishing the ladder %Smile%");
    return;
    finish_the_ladder();
}
function finish_the_ladder()
{
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 4;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("That was rung 4, just relax for a moment");
    sm("Going down the ladder is much easier, isn\'t it?");
    sm("The next one is only 3 edges, so no sweat!");
    sm("Well, maybe a little sweat, and some precum %Laugh%");
    sm("%Edge%");
    startEdging();
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
    sm("Almost there, %Name%");
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("Let that poor %Cock% throb now... get ready for the last one");
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("Good job on getting down the ladder, %Name%");
    sm("Maybe next time we\'ll climb one a bit taller %Smile%");
    return;
    Mod03B();
}
function Mod03B()
{
    sm("I\'m not going to do that this time, %Name%");
    delVar("Mod03B");
    sm("Instead, I\'m going to jump straight to 6! %Grin%");
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 6;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    return;
    Mod03X();
}
function Mod03X()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod03X");
    if(getVar("Mod03Y", false))
    {
        Mod03Y();
        return;
    }
    if(getVar("Mod03Z", false))
    {
        Mod03Z();
        return;
    }
    sm("You really need this, don\'t you? %Giggles%");
    setVar("Mod03Y", true);
    sm("Like air or water of food, you need to jerk your %Cock%");
    sm("What is it, are you going to die if you don\'t do it?");
    sm("I shouldn\'t be saying anything though, I masturbate all the time myself %Laugh%");
    sm("I do also have sex a lot, which I guess is not something that can be said of you");
    sm("You wouldn\'t need me otherwise");
    sm("But yeah, I do masturbate a lot");
    sm("I have number of toys, dildos and such... but you know...");
    sm("You are my favorite sex toy, %PetName% %Smile%");
    sm("Knowing that you are sitting there, aching for me, doing whatever I tell you to do");
    sm("It turns me on so much %Smile%");
    sm("%EmoteMoan% it makes my orgasms so much more powerful");
    sm("Especially when I deny your orgasms...");
    sm("It\'s a funny thing, like I\'m soaking up the orgasmic energy that I\'m denying you");
    sm("And use it to make my own orgasms stronger");
    sm("I suppose this is a zero sum game, %PetName%");
    sm("There\'s a finite amount of orgasmic pleasure to go between us");
    sm("So the more I cum, the more I\'m going to have to deny you %EmoteWink%");
    return;
    Mod03Y();
}
function Mod03Y()
{
    sm("Hmmm...");
    sm("I don\'t think you\'re aching enough, %Name%");
    delVar("Mod03Y");
    setVar("Mod03Z", true);
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 5;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    sm("That\'s better...");
    --UNINTERPRETED LINE:You <i>do</i>feel a lot better after a couple of edges, don't you?
    if (answer-1.isLike("yes"))
    {
        sm("I thought so %Smile%");
    }
    else if (answer-1.isLike("no"))
    {
        sm("Oh come on, that\'s not true and you know it");
    }
    --UNINTERPRETED LINE:And I <i>do</i> want to make you feel good
    sm("So get to the edge for me again, %Name% %SoundEdge%");
    startEdging();
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
    sm("You must be feeling pretty good now...");
    return;
    Mod03Z();
}
function Mod03Z()
{
    sm("You\'ve got so many lovely porn videos on your hard drive");
    delVar("Mod03Z");
    sm("Hmmm...");
    playVideo("Videos" + java.io.File.separator + "randomInt(10, 20)");
    --Command:JumpVideo
    sm("That was just a tease, %Name%");
    sm("You didn\'t think I was going to let you watch the whole thing, did you?");
    sm("%StartStroking%");
    playVideo("Videos" + java.io.File.separator + "randomInt(5, 10)");
    --Command:JumpVideo
    sm("%stopstroking%", 0);
    sm("Tickle the underside of your %Balls% a little bit, %Name%");
    sm("Now look at this... %Smile%");
    playVideo("Videos" + java.io.File.separator + "randomInt(6, 12)");
    --Command:JumpVideo
    sm("That\'s all you get, just a little peek");
    sm("%StartStroking%");
    playVideo("Videos" + java.io.File.separator + "randomInt(20, 28)");
    --Command:JumpVideo
    sm("%stopstroking%", 0);
    --Command:CockTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("Now just watch and ache, %Name%");
    playVideo("Videos" + java.io.File.separator + "randomInt(30, 100)");
    --Command:JumpVideo
    let answer0 = getInput("Frustrating isn\'t it? %Laugh%");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        frustratedResponse("Frustrated");
    }
    sm("That\'s probably the thing I enjoy most about teasing you");
    sm("Giving you something good and then snatching it away again");
    return;
}