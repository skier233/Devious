addResponseIndicator("at the edge", "im close", "im there", "on the edge");

function imCloseResponse(message) {
    dm("ImClose: BeginningResponse");
    if (isEdging())
    {
        stopEdging();
    }
    else if (isStroking())
    {
        /*let apmIndex = getApathyMoodIndex();
        let random = randomInteger(1, 5);
        let percentStroking = getStrokingPercent();
        let decision = 1.054196 + (0.004457 * apmIndex * random) + (0.470061 * percentStroking * Math.pow(random, 2)) - (0.105613 * random) - (1.553526 * percentStroking * random)
        if (decision < 0) {
            decision = 0;
        }
        dm("random " + random + " apm " + apmIndex + " percentstroke " + percentStroking, 0);
        dm(decision, 0);
        switch (Math.round(decision))
        {
            case 0:
                sm("This is really hard for you %petname%.");
                sm("Strangely though, I'm feeling generous...")
                endStroking();
                break;
            case 1:
                sm("I can't have you edging so easily %petname%.");
                sm("%strokeslower%");
                slowStroking(2);
                break;
            case 2:
                sm("Oh, you are on the edge?");
                sm("It's funny that you think that I care...");
                sm("Keep stroking %petname%");
                break;
            case 3:
                sm("I bet you want to cum so badly %grin%.");
                sm("Too bad you can't");
                sm("Keep stroking %petname%");
                sm("Oh...", 2);
                sm("And to make it harder for you...");
                sm("Stare at this while you keep stroking %grin%.");
                getTeasePicture(4);
                break;
            case 4:
                sm("The fact that you are on the edge right now means that I haven't been hard enough on you");
                sm("I'm very sorry about that %petname%. I'll make sure to go harder on you %grin%.");
                sm("Why don't you keep stroking while you stare at this");
                getTeasePicture(4);
                sm("Oh and also...", 2);
                sm("%strokefaster%");
                speedUpStroking(3);
                break;
        }*/
    }
    else
    {
        sm("You shouldnt even be stroking %petname%");
    }
    dm("ImClose: EndResponse");
    return true;
}