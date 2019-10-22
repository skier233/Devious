//Categories = medium
main();
function main()
{
    Mod01xA();
}
function Mod01xA()
{
    edge(0);
    sm("I love it when you do what I say");
    sm("Makes me wonder what else I could make you do");
    var answer0 = getInput("Would you do <i>anything<> I say?");
    if (answer0.isLike("yes", "course", "absolutely", "always"))
    {
        sm("Oh really now %Grin%");
        will_do_anything();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sm("That\'s good, you still have a mind of your own %Smile%");
        mind_of_your_own();
        return;
    }
    else if (answer0.isLike("maybe", "know", "sure", "depends"))
    {
        sm("I\'m sure we\'ll hit your limit at some point");
    }
    sm("We\'ll see it when we get there I suppose %Smile%");
    return;
}
function mind_of_your_own()
{
    sm("That means there is still a mind for me to destroy %Grin%");
    sm("That sliver of willpower you think you still have will slowly melt away");
    sm("Until one day you might find that you don\'t want to tell me \"no\" anymore");
    sm("Whatever I tell you to do, no matter how depraved or humiliating...");
    sm("You will do it happily for me");
    sm("I guess we\'re not there yet, %PetName%");
    sm("But I\'m a patient woman %Smile%");
    return;
    will_do_anything();
}
function will_do_anything()
{
    sm("Okay, let me think...");
    sm("If I told you to run outside naked");
    sm("And kiss the ass of the first woman you see");
    let answer0 = getInput("Would you do it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        sm("Don\'t be ridiculous %PetName% %Lol%");
    }
    else if (answer0.isLike("no"))
    {
        sm("And thank god for that %Lol%");
    }
    sm("No woman wants some random naked guy kiss her ass");
    return;
}