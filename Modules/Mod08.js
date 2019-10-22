main();
function main()
{
    sm("%stopstroking%", 0);
    stopStroking();
    if(getVar("Mod08A", false))
    {
        Mod08A();
        return;
    }
    if(getVar("Mod08B", false))
    {
        Mod08B();
        return;
    }
    if(getVar("Mod08C", false))
    {
        Mod08C();
        return;
    }
    if(getVar("Mod08D", false))
    {
        Mod08D();
        return;
    }
    sm("Too bad, no more touching for you %Smile%");
    sm("Sit on your hands");
    sm("Just let that %CockAdjective% %Cock% sit there unattended for a while");
    --Command:OrgasmRestricted
    sm("It\'s a shame you don\'t get to cum %GeneralTime%");
    --Command:OrgasmRestricted
    sm("I bet that it would be an orgasm for the ages");
    sm("It\'s just not fair is it");
    sm("That you only get to cum when I say so...");
    sm("While I get to cum whenever I want");
    sm("Well spoiler alert: life isn\'t fair, %PetName%");
    sm("Some people get all the fun, while others...");
    sm("Others get frustration and denial");
    sm("People like you! %Grin%");
    sm("%StartStroking%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "unauthorized edge")
    sm("I don\'t feel sorry for you though");
    sm("You still get to %JerkOff%");
    sm("You even get to look at my hot body while you do so");
    sm("And that has to count for a lot, right?");
    --Command:OrgasmRestricted
    sm("Even if you there\'s denial at the end of all that teasing");
    sm("%StrokeSlower%");
    sm("I don\'t want you to get too worked up right now");
    sm("Do you know what else you get?");
    sm("You get to watch porn while you %JerkOff%");
    --Command:PlayVideoNoWait(Blowjob)
    --Command:JumpVideo(40)
    sm("You don\'t get to choose what to watch");
    sm("But porn is porn, right? It\'s all good %Laugh%");
    sm("Just watch her go... she sure looks like she knows what she\'s doing");
    sm("Another thing...");
    sm("You also don\'t get to choose how long you watch porn");
    --Command:StopVideo
    sm("Aww too bad");
    sm("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    sm("Like I said, life isn\'t fair %Laugh%");
    return;
    Mod08A();
}
function Mod08A()
{
    delVar("Mod08A");
    setVar("Mod08B", true);
    --Command:CockTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("Look at that poor %Cock%");
    sm("Aching for more attention");
    sm("Always wanting more");
    sm("%StartStroking%");
    sm("%StrokeFaster%");
    sm("%Edge%");
    startEdging();
    let answer0 = getInput("Is that that what that %CockAdjective% %Cock% wanted?", 9);
    if (answer0.isTimeout())
    {
        What_It_Wanted();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Oh really now... %Giggles%");
    }
    else if (answer0.isLike("no"))
    {
        sm("No? Weird...");
    }
    What_It_Wanted();
}
function What_It_Wanted()
{
    sm("Let\'s see...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("Oh yes that\'s definitely what it wanted!");
    sm("I mean, look at how happy that throbbing %Cock% looks right now %Laugh%");
    return;
    Mod08B();
}
function Mod08B()
{
    delVar("Mod08B");
    setVar("Mod08C", true);
    --Command:ShowLocalImage
    --Command:ShowLocalImage
    --Command:ShowLocalImage
    sm("Isn\'t it nice to browse your porn collection sometimes? %Smile%");
    --Command:ShowLocalImage
    --Command:ShowLocalImage
    --Command:ShowLocalImage
    sm("%StartStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "MissBlue" + java.io.File.separator + "black.jpg");
    lockImages();
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "unauthorized edge")
    sm("Oh you wanted to %JerkOff% to those porn pics? Tough luck, %PetName% %Laugh%");
    sm("%StrokeSlower%");
    sm("You still have your imagination, right?");
    sm("Just fantasize something hot");
    sm("I know, %JerkingOff% to my instructions is all you need %Smile%");
    sm("Porn is just, like, a bonus");
    sm("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    --Command:ShowLocalImage
    sm("Still, it\'s nice to get a bonus from time to time");
    --Command:ShowLocalImage
    sm("Sorry... no stroking, %PetName%");
    --Command:ShowLocalImage
    sm("I know you want to...");
    --Command:ShowLocalImage
    sm("Alright then");
    --Command:ShowLocalImage
    sm("%StartStroking%");
    getLocalTeasePicture("Images" + java.io.File.separator + "MissBlue" + java.io.File.separator + "black.jpg");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "unauthorized edge")
    sm("%StrokeFaster%");
    sm("Make sure you don\'t edge, it\'s not time for that yet");
    sm("You can slow down a little if you need to");
    sm("Or loosen your grip");
    sm("But maybe with so little stimulation it\'s not too difficult to control yourself");
    sm("%stopstroking%", 0);
    unlockImages();
    setVar("edgingmode", "Normal");
    --Command:PlayVideoNoWait(Lesbian)
    --Command:JumpVideo(30)
    sm("This is so fucking hot %EmoteHappy%");
    --UNINTERPRETED LINE:I <i>almost</i> want to let you #JerkOff to this
    sm("But I\'m not going to let you, %PetName%");
    sm("I know that you absolutely would if I gave you the chance");
    sm("But see, that\'s why you need to be controlled");
    sm("It\'s much better this way");
    --Command:StopVideo
    return;
    unauthorized_edge();
}
function unauthorized_edge()
{
    unlockImages();
    run("Custom/Modules/UnauthorizedEdge" + java.io.File.separator + "*.*");
    return;
    return;
    Mod08C();
}
function Mod08C()
{
    delVar("Mod08C");
    setVar("Mod08D", true);
    let answer0 = getInput("Do you think you can take a couple of edges for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("many") || answer0.isLike("much")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Good %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Oh come on %EmoteSad%");
        No_Edges();
        return;
    }
    else if (answer0.isLike("many", "much"))
    {
        sm("I\'m not going to tell you. Do you think you can take it?");
        --Command:LoopAnswer
    }
    run("Custom" + java.io.File.separator + "Link" + java.io.File.separator + "mbAV_EdgeAV.js");
    wait(20);
    sm("%Edge%");
    startEdging();
    if (randomInteger(1, 100) <= 50)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    wait(15);
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 50)
    {
        var amountEdges = 3;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    return;
    No_Edges();
}
function No_Edges()
{
    sm("Fair enough, I shouldn\'t have asked in the fist place %Laugh%");
    return;
    Mod08D();
}
function Mod08D()
{
    delVar("Mod08D");
    sm("Maybe someday we should do a role reversal");
    sm("I\'d kneel down before you, completely naked");
    sm("Looking up at you with big, pleading eyes");
    sm("Ready to do whatever you wanted...");
    let answer0 = getInput("Would you like that, %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Who knows, one day... %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        sm("Really? But I guess you would like it if I told you to like it... %EmoteWink%");
    }
    sm("In any case, I\'m the one in charge and that\'s not going to change anytime soon");
    return;
    unauthorized_edge();
}
function unauthorized_edge()
{
    run("Custom/Modules/UnauthorizedEdge" + java.io.File.separator + "*.*");
    return;
    return;
}