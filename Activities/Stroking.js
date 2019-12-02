
//This is the main function to start the Activity.
function stroking_activity(points)
{
    transitionHandler = stroking_transition;
    getInput("Test in stroke activity" + points);
    return oneStroke(points);
}

function oneStroke(points)
{
    let thisStrokingMethod = getStrokingMethodByCategory(false, null, 3);
    let strokePoints = thisStrokingMethod.getStrokePoints();
    return thisStrokingMethod.startStroking(null, null, (points / strokePoints)*60);
}

function stroking_transition(nextFetish)
{
    if (nextFetish === "Edging")
    {
        sm("Thats enough stroking %subname%. I think I want you to do some edging. %grin%");
    }
    else if (nextFetish === "Stroking")
    {
        sm("That hasn't been near enough stroking %subname%");
    }
}