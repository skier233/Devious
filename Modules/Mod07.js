main();
function main()
{
    if(getVar("Mod07A", false))
    {
        Mod07A();
        return;
    }
    if(getVar("Mod07B", false))
    {
        Mod07B();
        return;
    }
    if(getVar("Mod07C", false))
    {
        Mod07C();
        return;
    }
    sm("%stopstroking%", 0);
    stopStroking();
    setVar("Mod07A", true);
    sm("While you were %JerkingOff% I\'ve been scrolling through some sexy blogs");
    sm("I want to show some of the stuff I found");
    sm("You can never have " + random("enough ", "too much porn ") + "right? %Lol%");
    sm("Let\'s see...");
    lockImages();
    let answer0 = getInput("Do you think this is hot?");
    getTeasePicture();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Cool, me too %Smile%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer0.isLike("no"))
    {
        sm("It\'s not the greatest pic ever I guess");
        sortPicture(getImagePath(), 1);
    }
    let answer1 = getInput("How about this one, hot or not?");
    getTeasePicture();
    while (!(answer1.isLike("hot") || answer1.isLike("yes") || answer1.isLike("not") || answer1.isLike("no")))
    {
        answer1 = getInput("Hot or not, %Name%?");
    }
    if (answer1.isLike("hot", "yes"))
    {
        sm("One of my favourites too %EmoteMoan%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer1.isLike("not", "no"))
    {
        sm("Really? I\'m surprised...");
        sortPicture(getImagePath(), 1);
    }
    let answer2 = getInput("Like or dislike?");
    getTeasePicture();
    while (!(answer2.isLike("like") || answer2.isLike("yes") || answer2.isLike("hot") || answer2.isLike("dislike") || answer2.isLike("no") || answer2.isLike("not")))
    {
        answer2 = getInput("Like or dislike, %Name%?");
    }
    if (answer2.isLike("like", "yes", "hot"))
    {
        sm("Me too %EmoteMoan%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer2.isLike("dislike", "no", "not"))
    {
        sm("Okay");
        sortPicture(getImagePath(), 1);
    }
    let answer3 = getInput("How about this one?");
    getTeasePicture();
    while (!(answer3.isLike("like") || answer3.isLike("love") || answer3.isLike("yes") || answer3.isLike("hot") || answer3.isLike("dislike") || answer3.isLike("no") || answer3.isLike("not")))
    {
        answer3 = getInput("Hot or not, %Name%?");
    }
    if (answer3.isLike("like", "love", "yes", "hot"))
    {
        sm("Me too %EmoteMoan%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer3.isLike("dislike", "no", "not"))
    {
        sm("Okay");
        sortPicture(getImagePath(), 1);
    }
    sm("Alright, that\'s enough for now");
    unlockImages();
    return;
    Mod07A();
}
function Mod07A()
{
    showTaggedImage(4, ["blowjob"]);
    sm("%stopstroking%", 0);
    stopStroking();
    sm("Maybe you should have edged to that blowjob picture...");
    delVar("Mod07A");
    setVar("Mod07B", true);
    sm("Here\'s another one");
    showTaggedImage(4, ["blowjob"]);
    lockImages();
    sm("%Edge%");
    startEdging();
    sm("%LetTheEdgeFade%");
    sm("That probably felt even better, right? %Laugh%");
    sm("I know you were thinking about shooting your load into her open mouth");
    --UNINTERPRETED LINE:Or maybe you were thinking about <i>my</i> open mouth, so close to your #Cock
    sm("Mmm... I\'d stick out my tongue and lick the tip, edging you");
    sm("Drop by drop of precum leaking into my mouth");
    sm("But you know I would never actually cum into my mouth, %SubName%");
    unlockImages();
    sm("%stopstroking%", 0);
    sm("You have such a dirty mind %Laugh%");
    return;
    Mod07B();
}
function Mod07B()
{
    delVar("Mod07B");
    setVar("Mod07C", true);
    sm("Mmm this looks good, doesn\'t it?");
    --Command:ImageTag(TagBodyPussy)
    lockImages();
    sm("If only you could crawl up to that pussy right now and lick it, right?");
    --UNINTERPRETED LINE:If only you could do that to <i>my</i> pussy #EmoteMoan
    sm("You can lean over to the screen and give it a little kiss if you want to %Giggles%");
    sm("I know you want so bad to taste it");
    sm("But you can\'t, so what should we do instead... Oh I know! %Grin%");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("Mmm yeah that\'s almost as good as licking that pussy %Laugh%");
    sm("There are so many pussies out there that you could be licking, %PetName%");
    --Command:ImageTag(TagBodyPussy)
    sm("You should be licking them to orgasm every chance you get");
    --Command:ImageTag(TagBodyPussy)
    sm("%Edge%");
    startEdging();
    sm("I\'m sure you don\'t get too many chances to eat out a girl");
    --Command:ImageTag(TagBodyPussy)
    sm("But when you do, make sure to do your very best to give her the most amazing orgasm possible");
    sm("Whatever your deficiencies, if you can do that they won\'t matter as much");
    --Command:ImageTag(TagBodyPussy)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("But %PetName%, and this is important...");
    --UNINTERPRETED LINE:Never, and I do mean <i>never</i>, expect anything back in return...
    sm("You know what I\'m talking about %Giggles%");
    showTaggedImage(4, ["blowjob"]);
    sm("Your job is to make that pussy happy, period");
    --Command:ImageTag(TagBodyPussy)
    --UNINTERPRETED LINE:If you are <i>really</i> lucky, then <i>maybe</i> you'll get your reward @ShowBlowjobImage
    sm("But never ever think you deserve anything in return for your hard work");
    --Command:ImageTag(TagBodyPussy)
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    unlockImages();
    sm("Actually, I\'d like to now, %PetName%...");
    let answer0 = getInput("Have you ever licked a girl to orgasm?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Good for you");
    }
    else if (answer0.isLike("no"))
    {
        sm("Wow... just make sure you\'re ready for it when the time comes");
    }
    --UNINTERPRETED LINE:Maybe someday you can come over and lick <i>me</i> to orgasm #EmoteWink
    return;
    Mod07C();
}
function Mod07C()
{
    sm("%Edge%");
    startEdging();
    sm("How many more edges can you do before I totally break your %Cock% hmm?");
    setDate("WillMakeYouEdge");
    sm("Sometimes it seems like I could go on forever, edging you over and over again");
    delVar("Mod07C");
    sm("But then again, maybe every edge just brings you closer to your breaking point");
    sm("You won\'t even know when it comes");
    sm("Maybe it\'s this next one...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("%LetTheEdgeFade%");
    sm("I don\'t think that was all that bad... you certainly don\'t seem to be breaking...");
    sm("You can probably do another one of those");
    sm("%Edge%");
    startEdging();
    holdEdge();
    sm("You\'re doing fine, %PetName%");
    sm("The truth is, you could probably edge all night and you\'d still be fine");
    sm("Sooo.... I\'m going to make you edge some more... let\'s make it really bad %Grin%");
    setDate("WillMakeYouEdge");
    sm("Maybe you\'re starting to feel a little bit nervous now");
    --UNINTERPRETED LINE:I mean, when I say really bad it's probably going to be <i>really</i> bad, right?
    sm("Let\'s find out what that means shall we...");
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
    sm("That wasn\'t all, %PetName%");
    sm("It\'s going to get a lot worse...");
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
    sm("Take a deep breath in...");
    sm("And breath out slowly...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 10;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    sm("%stopstroking%", 0);
    sm("But that can still happen %Grin%");
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 12;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("Better not touch that %Cock% - it looks like it might explode %Laugh%");
    sm("I\'m still sort of expecting you to say I can\'t take it anymore or something like that");
    sm("But as long as you don\'t, I suppose you\'re doing fine");
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 15;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    sm("Alright then, you\'re holding up really good so far");
    sm("So...");
    sm("If you\'re still game...");
    sm("I\'m going to make you do a series of 25 edges and then make you hold the last one");
    setDate("WillMakeYouEdge");
    sm("It\'s going to be pretty intense, but if you make it you\'ll make me very happy");
    sm("Anything you want to say before we get started? %Smile%");
    sm("Here we go then...");
    sm("%Edge%");
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 25;
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }
    sm("%LetTheEdgeFade%");
    sm("Wow %EmoteHappy%");
    --Command:MoodBest
    sm("What can I say... well done %PetName%");
    sm("Now, I do hope you can manage to get through the rest of the session %Lol%");
    return;
    do_not_want();
}
function do_not_want()
{
    sm("Oh alright, maybe I was pushing you a little too hard there %Laugh%");
    return;
}