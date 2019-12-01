
function end_activity(points)
{
    return end_1();
}

function end_1()
{
    edge("INTENSE", null, null);
    stopEdging();
    let answer = getInput("%cumforme%");
    if (answer.isLike("came", "finished", "did")) {
        sm("Good %Grin%");
    }
    else {
        sm("You're welcome %PetName% %Grin%");
        sm("Hehe just calm down now");
        sm("I hope you enjoyed that orgasm %SubName%");
        sm("Who knows how many you're actually going to get?");
    }
    return 20;
}