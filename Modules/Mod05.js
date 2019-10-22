main();
function main()
{
    if(getVar("Mod05Again", false))
    {
        Mod05Again();
        return;
    }
    if(getVar("Mod05A", false))
    {
        Mod05A();
        return;
    }
    if(getVar("Mod05B", false))
    {
        Mod05B();
        return;
    }
    if(getVar("Mod05C", false))
    {
        Mod05C();
        return;
    }
    sm("%stopstroking%", 0);
    stopStroking();
    setVar("Mod05A", true);
    setTempVar("Mod05Again", true);
    let answer0 = getInput("Whose %Boobs% do you prefer, hers or mine?");
    lockImages();
    showTaggedImage(4, ["boobs"]);
    if (answer0.isTimeout())
    {
        noanswer();
        return;
    }
    while (!(answer0.isLike("your") || answer0.isLike("yours") || answer0.isLike("her") || answer0.isLike("hers")))
    {
        answer0 = getInput("Come on %PetName% hers or mine?");
    }
    if (answer0.isLike("your", "yours"))
    {
        sm("Thank you %SubName%");
        switch(random("yours1", "yours2", "yours3"))
        {
            case "yours1":
            yours1();
            return;
            break;
            case "yours2":
            yours2();
            return;
            break;
            case "yours3":
            yours3();
            return;
            break;
        }
    }
    else if (answer0.isLike("her", "hers"))
    {
        sm("Well, she does have a really nice pair...");
        switch(random("hers1", "hers2", "hers3"))
        {
            case "hers1":
            hers1();
            return;
            break;
            case "hers2":
            hers2();
            return;
            break;
            case "hers3":
            hers3();
            return;
            break;
        }
    }
    noanswer();
}
function noanswer()
{
    let answer0 = getInput("Are you wondering if it\'s a trick question?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("your") || answer0.isLike("yours") || answer0.isLike("her") || answer0.isLike("hers")))
    {
        answer0 = getInput("Come on %PetName% hers or mine?");
    }
    if (answer0.isLike("yes"))
    {
        sm("%Laugh% well only one way to find out, do you prefer hers or mine?");
        --Command:LoopAnswer
    }
    else if (answer0.isLike("no"))
    {
        sm("So what\'s your answer?");
        --Command:LoopAnswer
    }
    else if (answer0.isLike("your", "yours"))
    {
        sm("That\'s the right answer %SubName% %Smile%");
        switch(random("yours1", "yours2", "yours3"))
        {
            case "yours1":
            yours1();
            return;
            break;
            case "yours2":
            yours2();
            return;
            break;
            case "yours3":
            yours3();
            return;
            break;
        }
    }
    else if (answer0.isLike("her", "hers"))
    {
        sm("Well, she does have a really nice pair...");
        switch(random("hers1", "hers2", "hers3"))
        {
            case "hers1":
            hers1();
            return;
            break;
            case "hers2":
            hers2();
            return;
            break;
            case "hers3":
            hers3();
            return;
            break;
        }
    }
    yours1();
}
function yours1()
{
    sm("They\'re really nice though...");
    sm("Good enough to cover in chocolate sauce and lick clean %Laugh%");
    --Command:Glitter(mbGlitterMod05)
    unlockImages();
    wait(8);
    let answer0 = getInput("Have you ever had your %Cock% covered in chocolate %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("I wish I\'d been there");
    }
    else if (answer0.isLike("no"))
    {
        sm("Maybe you should try it");
    }
    sm("Maybe I\'d lick it clean for you");
    showTaggedImage(4, ["blowjob"]);
    --UNINTERPRETED LINE:I <i>do</i> love chocolate
    return;
    yours2();
}
function yours2()
{
    let answer0 = getInput("Although she does have an amazing pair don\'t you think?");
    if (answer0.isLike("yes"))
    {
        sm("Well that\'s why you saved that picture I guess");
    }
    else if (answer0.isLike("no"))
    {
        sm("Weird, since it\'s one of your own pictures");
    }
    else
    {
        sm("They make me feel a little bit jealous");
    }
    unlockImages();
    return;
    yours3();
}
function yours3()
{
    sm("It\'s nice to get compliments %Smile%");
    unlockImages();
    sm("Maybe it\'s just what you thought I wanted to hear");
    sm("But that\'s okay, you\'d be right %Smile%");
    return;
    hers1();
}
function hers1()
{
    sm("They\'re so nice I think you should edge for these %Boobs% right now %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("In fact, since you seem to like other girls\' %Boobs% so much");
    sm("Maybe you should edge to all of them");
    sm("Like these, edge to them %SubName%");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    sm("These are lovely as well");
    showTaggedImage(4, ["boobs"]);
    sm("Edge for her left breast %PetName% %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("Now edge for her right breast %SoundEdge%");
    startEdging();
    sm("And here\'s another great pair");
    showTaggedImage(4, ["boobs"]);
    sm("Edge for both of them %SoundEdge%");
    startEdging();
    holdEdge();
    let answer0 = getInput("Do you need to cool down a minute?", 5);
    if (answer0.isTimeout())
    {
        nocooldown();
        return;
    }
    if (answer0.isLike("yes"))
    {
        sm("You are such a pussy %Laugh%");
        cooldown();
        return;
    }
    else if (answer0.isLike("no"))
    {
        edgeagain();
        return;
    }
    else
    {
        sm("I guess you don\'t need a break the");
        edgeagain();
        return;
    }
    nocooldown();
}
function nocooldown()
{
    sm("I guess not");
    edgeagain();
}
function edgeagain()
{
    sm("Edge for these %Boobs%");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    let answer0 = getInput("Had enough yet?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("You are such a pussy %Laugh%");
        cooldown();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("Good");
    }
    sm("Then edge for these %Boobs% %PetName%");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    holdEdge();
    let answer1 = getInput("Can you take more?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        sm("That\'s why I like playing with you %Grin%");
    }
    else if (answer1.isLike("no"))
    {
        sm("You are such a pussy %Laugh%");
        cooldown();
        return;
    }
    sm("Edge again %PetName%");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    let answer2 = getInput("Do you want another one?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer2.isLike("yes"))
    {
    }
    else if (answer2.isLike("no"))
    {
        sm("You are such a pussy %Laugh%");
        cooldown();
        return;
    }
    sm("Ten edge again %PetName%");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    holdEdge();
    let answer3 = getInput("Would you like to do another edge %SubName%?");
    while (!(answer3.isLike("yes") || answer3.isLike("no")))
    {
        answer3 = getInput("%YesOrNo%");
    }
    if (answer3.isLike("yes"))
    {
        sm("Wow, you just keep going don\'t you...");
    }
    else if (answer3.isLike("no"))
    {
        sm("You are such a pussy %Laugh%");
        cooldown();
        return;
    }
    sm("Well edge for these then");
    showTaggedImage(4, ["boobs"]);
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    unlockImages();
    --Command:OrgasmRestricted
    Restricted_Today();
    return;
    sm("That\'s enough for now %Name%");
    --Command:GotoDommeOrgasm
    Never_Allows();
}
function Never_Allows()
{
    sm("It\'s a shame you don\'t get to cum %GeneralTime%");
    sm("You\'ve built up sooo much cum in those last couple of edges %Grin%");
    sm("I hope you learned your lesson");
    learning();
    return;
    Rarely_Allows();
}
function Rarely_Allows()
{
    sm("I know don\'t let you cum all that often");
    sm("But I almost feel like you\'ve earned it with those couple of edges");
    sm("I guess you\'ll have to wait and see...");
    sm("Just remember %Name%");
    learning();
    return;
    Sometimes_Allows();
}
function Sometimes_Allows()
{
    sm("I almost feel like you\'ve earned an orgasm with those couple of edges");
    sm("You\'ll have to wait and see, no promises!");
    sm("Just remember %Name%");
    learning();
    return;
    Often_Allows();
}
function Often_Allows()
{
    sm("I would say your chances are good %PetName%");
    sm("But don\'t quote me on that %Grin%");
    learning();
    return;
    Always_Allows();
}
function Always_Allows()
{
    sm("That orgasm you\'ll get later on will be awesome");
    sm("Thanks to that last couple of edges %Smile%");
    sm("Just remember %Name%");
    learning();
    return;
    Restricted_Today();
}
function Restricted_Today()
{
    sm("It\'s a shame you don\'t get to cum at the end");
    sm("You\'ve built up sooo much cum in those last couple of edges %Grin%");
    sm("I hope you learned your lesson");
    learning();
    return;
    cooldown();
}
function cooldown()
{
    --Command:BallTorture
    sm("I know just what you need to calm down");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("I hope you\'ll remember this %PetName%");
    learning();
    return;
    return;
    hers2();
}
function hers2()
{
    sm("But you know that\'s not what I wanted to hear");
    unlockImages();
    --Command:BallTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("Let\'s try that again");
    let answer0 = getInput("Her %Boobs% or mine %PetName%?");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    while (!(answer0.isLike("your") || answer0.isLike("yours") || answer0.isLike("her") || answer0.isLike("hers")))
    {
        answer0 = getInput("Come on %PetName% hers or mine?");
    }
    if (answer0.isLike("your", "yours"))
    {
        sm("You learn quickly %SubName%");
        learning();
        return;
    }
    else if (answer0.isLike("her", "hers"))
    {
        sm("I guess you just like punishments %PetName%");
    }
    sm("because that\'s what you\'re going to get");
    --Command:BallTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    learning_through_punishment();
    return;
    hers3();
}
function hers3()
{
    sm("I want you to do 50 slow worship strokes for those %Boobs%");
    let answer0 = getInput("No edging, let me know when you\'re done");
    while (!(answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("finished") || answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Let me know when you did 50 strokes");
    }
    if (answer0.isLike("done", "did", "finished"))
    {
        sm("Hands off then");
    }
    else if (answer0.isLike("yes"))
    {
        sm("Let me know when you did 50 strokes");
        --Command:LoopAnswer
    }
    else if (answer0.isLike("no"))
    {
        sm("Let me know when you did 50 strokes");
        --Command:LoopAnswer
    }
    let answer1 = getInput("Do you still think her %Boobs% are nicer than mine?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        sm("Well honesty counts for something I guess");
    }
    else if (answer1.isLike("no"))
    {
        sm("I guess you learned a little something then");
        learning();
        return;
    }
    let answer2 = getInput("Give them 100 fast strokes without edging");
    while (!(answer2.isLike("done") || answer2.isLike("did") || answer2.isLike("finished") || answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("Let me know when you did 100 strokes");
    }
    if (answer2.isLike("done", "did", "finished"))
    {
        sm("%stopstroking%", 0);
    }
    else if (answer2.isLike("yes"))
    {
        sm("Let me know when you did 100 strokes");
        --Command:LoopAnswer
    }
    else if (answer2.isLike("no"))
    {
        sm("Let me know when you did 100 strokes");
        --Command:LoopAnswer
    }
    let answer3 = getInput("Now, whose %Boobs% are nicer, hers or mine?");
    while (!(answer3.isLike("her") || answer3.isLike("hers") || answer3.isLike("your") || answer3.isLike("yours")))
    {
        answer3 = getInput("Hers or mine %PetName%");
    }
    if (answer3.isLike("her", "hers"))
    {
        sm("This is harder than I thought...");
    }
    else if (answer3.isLike("your", "yours"))
    {
        sm("See, that wasn\'t too hard now was it");
        learning();
        return;
    }
    sm("200 strokes for these %Boobs% %PetName%, go!");
    sm("But NO edging!");
    let answer4 = getInput("Let me know when you\'re done");
    while (!(answer4.isLike("done") || answer4.isLike("did") || answer4.isLike("finished") || answer4.isLike("yes") || answer4.isLike("no")))
    {
        answer4 = getInput("Let me know when you did 200 strokes");
    }
    if (answer4.isLike("done", "did", "finished"))
    {
        sm("Okay, hands off");
    }
    else if (answer4.isLike("yes"))
    {
        sm("Let me know when you did 200 strokes");
        --Command:LoopAnswer
    }
    else if (answer4.isLike("no"))
    {
        sm("Let me know when you did 200 strokes");
        --Command:LoopAnswer
    }
    let answer5 = getInput("So whose %Boobs% are nicer, hers or mine?");
    while (!(answer5.isLike("her") || answer5.isLike("hers") || answer5.isLike("your") || answer5.isLike("yours")))
    {
        answer5 = getInput("Hers or mine %PetName%");
    }
    if (answer5.isLike("her", "hers"))
    {
        sm("Fuck, it\'s easier to train a monkey %Laugh%");
    }
    else if (answer5.isLike("your", "yours"))
    {
        sm("See, that wasn\'t too hard now was it");
        learning();
        return;
    }
    --Command:CockTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("300 strokes now %PetName%");
    let answer6 = getInput("Remember: no edging!");
    while (!(answer6.isLike("done") || answer6.isLike("did") || answer6.isLike("finished") || answer6.isLike("yes") || answer6.isLike("no")))
    {
        answer6 = getInput("Let me know when you did 300 strokes");
    }
    if (answer6.isLike("done", "did", "finished"))
    {
        sm("Good, hands off your %Cock% then");
    }
    else if (answer6.isLike("yes"))
    {
        sm("Let me know when you did 300 strokes");
        --Command:LoopAnswer
    }
    else if (answer6.isLike("no"))
    {
        sm("Let me know when you did 300 strokes");
        --Command:LoopAnswer
    }
    sm("I\'ll ask you one more time %SubName%");
    let answer7 = getInput("Whose %Boobs% do you prefer, hers or mine?");
    while (!(answer7.isLike("her") || answer7.isLike("hers") || answer7.isLike("your") || answer7.isLike("yours")))
    {
        answer7 = getInput("Hers or mine %PetName%");
    }
    if (answer7.isLike("her", "hers"))
    {
        sm("Oh well...");
    }
    else if (answer7.isLike("your", "yours"))
    {
        sm("See, that wasn\'t too hard now was it");
        learning();
        return;
    }
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    let answer8 = getInput("I guess you do really like those %Boobs% then", 5);
    if (answer8.isTimeout())
    {
        reallylike();
        return;
    }
    if (answer8.isLike("yes", "do"))
    {
        sm("I know they\'re nice %SubName%");
    }
    else if (answer8.isLike("no", "don't"))
    {
        sm("You\'re a puzzle wrapped in a riddle %SubName% %Laugh%");
    }
    else
    {
        sm("It\'s not that they\'re not nice");
    }
    reallylike();
}
function reallylike()
{
    sm("A girl just likes getting compliments that\'s all");
    sm("I have to admit I kind of admire your tenacity %SubName%");
    --Command:BallTorture
    sm("But I still feel I should punish you for being a jerk %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTBalls.js");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    learning();
}
function learning()
{
    sm("My %Boobs% are always nicest");
    unlockImages();
    sm("Even when they are not... %Smile%");
    return;
    learning_through_punishment();
}
function learning_through_punishment()
{
    sm("My %Boobs% are always nicest %PetName%");
    unlockImages();
    sm("You should remember that");
    run("Interrupt/Punishment");
    return;
    Mod05Again();
}
function Mod05Again()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod05Again");
    sm("You might have gotten the impression earlier that I\'m somewhat fixated on breasts");
    --UNINTERPRETED LINE:That's because... I <i>am</i> somewhat fixated on boobs #Laugh
    sm("I mean, they are awesome...");
    showTaggedImage(4, ["boobs"]);
    sm("They are soft and round and pretty");
    showTaggedImage(4, ["boobs"]);
    sm("What\'s not to like? %Smile%");
    showTaggedImage(4, ["boobs"]);
    if(getVar("LikeBoobs", false))
    {
        sm("I know you love them too, %Name%");
    }
    if(getVar("LikeButts", false))
    {
        sm("I know you\'re more of an ass man, %Name%");
    }
    if(getVar("LikeButts", false))
    {
        sm("But still...");
        showTaggedImage(4, ["boobs"]);
    }
    sm("%stopstroking%", 0);
    showTaggedImage(4, ["boobs"]);
    sm("Mmm");
    showTaggedImage(4, ["boobs"]);
    sm("Damn I wish I could suck on some nipples right now! %Laugh%");
    return;
    Mod05A();
}
function Mod05A()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod05A");
    setVar("Mod05B", true);
    --Command:CockTorture
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("Just look at that hard cock bouncing around %Laugh%");
    sm("It\'s mine, %PetName%");
    sm("I fucking own that %Cock%");
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
    sm("This isn\'t ever going to get any easier, you know that don\'t you?");
    sm("It might be satisfying, even pleasurable at times");
    sm("But it\'s never going to be easy, I will make sure it isn\'t %Grin%");
    sm("%Edge%");
    startEdging();
    holdEdge();
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
    return;
    Mod05B();
}
function Mod05B()
{
    sm("%stopstroking%", 0);
    startEdging();
    sm("%LetTheEdgeFade%");
    delVar("Mod05B");
    setVar("Mod05C", true);
    sm(random("Great ", "Lovely ", "Good boy ") + "now start %JerkingOff% again %Smile%");
    sm("Because the thing with edges is... one is never enough...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("That\'s enough edging for the moment");
    sm("That %Cock% needs to recover, otherwise the ache will just become too much");
    --Command:CockTorture
    sm("In fact, let\'s try to smack that aching feeling out of it %Grin%");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    sm("You know, I read somewhere online that submission is or ought to be a gift");
    sm("Like, that the person submitting is offering something precious to the person he\'s submitting to");
    sm("I think we both know that\'s bullshit");
    sm("There\'s nothing precious or valuable about what you offer me");
    sm("Submission is simply a state of being");
    sm("Your brain is hard-wired to turn to mush at the though of a dominant woman");
    sm("If it\'s so natural, biological even, how can it ever be a precious gift?");
    sm("There\'s nothing valiant about what you\'re doing for me");
    sm("It\'s not good or bad, it\'s what you are");
    sm("I want to make sure that truth is");
    if(!getVar("Kneeling", false) && !getVar("KneelingNever", false))
    {
        sm("get down on your knees, %PetName%");
        setTempVar("Kneeling", true);
    }
    sm("%StartStroking%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "unauthorized edge")
    sm("As you stroke, I want you to repeat the following phases after me, out loud:");
    sm("\"This is what I am\"");
    sm("\"Submission is my natural state\"");
    sm("\"I am here to serve my %DomHonorific%\"");
    sm("\"This is what I am\"");
    sm("\"Submission is my natural state\"");
    sm("\"I am here to serve %DomHonorific% %DomName%\"");
    sm("One more time, %PetName%");
    sm("\"This is what I am\"");
    sm("\"Submission is my natural state\"");
    sm("\"I am here to serve %DomHonorific% %DomName%\"");
    setVar("edgingmode", "Normal");
    sm("Good, now edge for me %SoundEdge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    return;
    Mod05C();
}
function Mod05C()
{
    sm("%stopstroking%", 0);
    stopStroking();
    delVar("Mod05C");
    sm("Imagine how good it would feel to be inside of me right now");
    sm("I\'m sure you\'ve imagined what my pussy would feel like many times before");
    sm("Think about it now");
    sm("Think about how bad you want it");
    sm("But you will never get to feel my pussy, %PetName%");
    sm("How many times do I have to edge and ruin you before you finally accept it");
    sm("I wouldn\'t even go on a date with you, not even out of pity");
    sm("And even if we were dating, I wouldn\'t sleep with you");
    sm("No, I\'d cheat on you behind your back and laugh about it with my friends");
    sm("You\'d probably love that though, right? %Laugh%");
    sm("%StartStroking%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "unauthorized edge")
    sm("While you %JerkOff% I want you to say out loud what you\'d do to me if you could have me");
    sm("Don\'t type it, I don\'t need to know it");
    sm("All I want is it know that you are telling yourself what you\'d do to me");
    sm("The nasty, dirty things you\'d have me do to you...");
    sm("Say it out loud, %PetName%");
    sm("What if you were the one in control and I was there with you, on my knees");
    sm("I bet you could think of all kinds of things to do");
    sm("Maybe you have trouble imagining yourself in control, but give it a try %Smile%");
    sm("You could grab my hair and shove your cock down my throat");
    sm("Or push my pace to the floor and spank my ass until it\'s red");
    sm("Or maybe something a little more... dignified %Laugh%");
    sm("Now I want you to settle on 1 thing, think about both our positions in that scene");
    sm("That scene, %SubName%...");
    sm("It\'s never ever going to happen");
    if(!getVar("Kneeling", false) && !getVar("KneelingNever", false))
    {
        sm("get down on your knees, %PetName%");
        setTempVar("Kneeling", true);
    }
    sm("You are mine to play with and you will submit to me");
    --Command:CockTorture
    sm("And your pathetic %Cock% belongs to me, too");
    run("Custom" + java.io.File.separator + "Instructions" + java.io.File.separator + "CBTCock.js");
    setVar("edgingmode", "Normal");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("And let all those images of taking control fade away now");
    sm("It\'s nice to think about switching roles sometimes");
    sm("But in the end, this is where we always end up");
    if(getVar("Kneeling", false))
    {
        sm("You on your knees like a good submissive");
    }
    sm("And the truth is, you wouldn\'t want it any other way %Smile%");
    return;
    unauthorized_edge();
}
function unauthorized_edge()
{
    run("Custom/Modules/UnauthorizedEdge" + java.io.File.separator + "*.*");
    return;
    return;
}