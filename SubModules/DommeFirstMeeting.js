ignoreModule();
dm("2");
selectMeeting();

function selectMeeting()
{
    lockImages();
    let dommeMeeting = getVar("DOMMEMEETING", null);
    if (dommeMeeting == null)
    {
        EM("Domme meeting was accessed in DommeFirstMeeting.cs but was never set!!!!");
        return;
    }
    if (dommeMeeting == "LONGFRIENDS")
    {
        longFriendsMeeting();
        unlockImages();
        return;
    }
    else if (dommeMeeting == "HIGHSCHOOL")
    {
        highSchoolMeeting();
        unlockImages();
        return;
    }
    else if (dommeMeeting == "DATINGSITE")
    {
        datingSiteMeeting();
        unlockImages();
        return;
    }
    EM("DOMMEMEETING was set to a variable that DommeFirstMeeting.cs is not aware of!!");
}

function highSchoolMeeting()
{
    sm("Did you mean to message me? I don't think I know you.");
    getInput("What's your name?");
    sleep(2);
    sm("Oh... I remember sitting near you in history class in high school!");
    sm("That's been a while...");
    getInput("How have you been?");
    sm("I've been pretty good myself.");
    wait(3);
    meanToSend();
    getStarted();
}

function longFriendsMeeting()
{

}

function datingSiteMeeting()
{

}

function getStarted()
{
    sm("This is going to be so much fun!");
    sm("For me anyway, lol");
    sm("I think it's time to get started *wicked grin*");
}

function meanToSend()
{
    //TODO: figure out where to go from here based on a variable from setup
    //TODO: Show Self Image
    let meantToSend = getInput("WOAH! Did you mean to send me that?", "Yes", "No");
    while (!meantToSend.isLike("yes", "yea", "no", "nah", "nope"))
    {
        meantToSend = getInput("Yes or No?!");
    }
    meantToSend.clearOptions();
    if (meantToSend.isLike("yes", "yea"))
    {
        //TODO: make domme a bit angrier
        let answer2 = getInput("WTF Do you think I'm just some %slut% who can be seduced?", "Yes", "No");
        while (!answer2.isLike("yes", "yea", "no", "nah", "nope"))
        {
            answer2 = getInput("Yes or No?!");
        }
        answer2.clearOptions();
        if (answer2.isLike("yes", "yea"))
        {
            //TODO: Make domme significantly angrier
            sm("Interesting...");
            somethingToAdmit();
            sm("And now that you sent me this, I don't think you have much of a choice lol");
            sm("If you don't please me I'll just tell all your friends and family that you sent me this.");
            sm("Oh and since you think I'm a %slut%, we'll see who the real slut is soon enough...");
            //TODO: do something with this later
            setVar("CALLEDSLUT", true);
        }
        else
        {
            sm("Good because I deserve to be respected.");
            sm("But I think you sent that picture for a reason...");
            wait(2);
            somethingToAdmit();
            sm("And since you were so eager to show me this...");
            sm("I might be eager to show your friends and family if you don't please me");
        }
    }
    else
    {
        sm("Well that's a bit embarrasing lol");
        let random = randomInteger(0, 1);
        sm("I'm actually kind of glad you sent that");
        sm("It reminded me of something...");
        somethingToAdmit();
        if (random == 1)
        {
            sm("And now that you sent me this, I don't think you have much of a choice lol");
            sm("If you don't I'll just tell all your friends and family that you sent me this.");
        }
    }
}

function somethingToAdmit()
{
    sm("I have something to admit");
    sm("I like teasing and denying %guys%");
    sm("I've done it to a few in the past but they were never up to my standards");
    sm("And I'd like you to be my next victim");
    sm("Hopefully you won't as %dissapointing%.")
}