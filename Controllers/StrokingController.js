ignoreModule();
let TimeLeftStroking = 0;
runScript(fp("Controllers", "StrokingMethodsController.js"));

function stroke(strokingCategory, strokingMethod, duration)
{
    let strokingMethodToStart = null;
    if (strokingMethod != null)
    {
        strokingMethodToStart = getStrokingMethodByName(strokingMethod)
    }
    else if (strokingCategory != null)
    {
        strokingMethodToStart = getStrokingMethodByCategory(false, strokingCategory);
    }
    else
    {
        if (getStrokingMethodsEnabled())
        {
            strokingMethodToStart = getStrokingMethodByCategory(false);
        }
        else {
            strokingMethodToStart = getStrokingMethodByName("NORMALSTROKE");
        }
    }
    return strokingMethodToStart.startStroking(null, null, duration);
}

function edge(strokingCategory, strokingMethod)
{
    dm("edge: begin")
    let strokingMethodToStart = null;
    if (strokingMethod != null)
    {
        strokingMethodToStart = getStrokingMethodByName(strokingMethod)
    }
    else if (strokingCategory != null)
    {
        strokingMethodToStart = getStrokingMethodByCategory(true, strokingCategory);
    }
    else
    {
        if (getStrokingMethodsEnabled())
        {
            strokingMethodToStart = getStrokingMethodByCategory(true);
        }
        else {
            strokingMethodToStart = getStrokingMethodByName("NORMALSTROKE");
        }
    }
    dm("edge: end");
    return strokingMethodToStart.edge()
}

let _teasePointsRollOver = 0;

function Tease(teasePoints, edgeOnly, strokeOnly, uniqueOnly)
{
    dm("Tease: begin");
    //TODO: potentially add a way so the mood doesn't change right near the end
    // (ie. Want to avoid "I'm done doing x. Lets start doing y." and then does 1 edge with y and this method ends and goes to something else)
    teasePoints = teasePoints - _teasePointsRollOver;
    _teasePointsRollOver = 0;
    let pointsSoFar = 0;
    let edgingPercent = 50;
    let stimulationType = "BOTH";
    if (edgeOnly)
    {
        stimulationType = "EDGE";
        edgingPercent = 100;
    }
    else if (strokeOnly)
    {
        stimulationType = "STROKE";
        edgingPercent = 0;
    }
    while (pointsSoFar < teasePoints)
    {
        dm("Points so far: " + pointsSoFar + " out of " + teasePoints);
        if (stimulationType == "BOTH")
        {
            if (getStrokingMood() == "NEUTRAL")
            {
                edgingPercent = 65;
            }
            else if (getStrokingMood() == "TORTURE")
            {
                edgingPercent = 7;
            }
            else if (getStrokingMood() == "TEASE")
            {
                edgingPercent = 7;
            }
            else if (getStrokingMood() == "INTENSE")
            {
                edgingPercent = 70;
            }
            else if (getStrokingMood() == "RAPIDFIRE")
            {
                edgingPercent = 90;
            }
            //TODO: have a better way to determine whether to stroke or edge
        }
        if (edgingPercent == 0)
        {
            pointsSoFar += stroke();
        }
        else if (edgingPercent == 100)
        {
            pointsSoFar += edge();
        }
        else
        {
            dm(randomPercent() + " " + edgingPercent);
            if (randomPercent() <= edgingPercent)
            {
                pointsSoFar += edge()
            }
            else
            {
                pointsSoFar += stroke();
            }
        }
    }
    _teasePointsRollOver = pointsSoFar - teasePoints;
    dm("Tease: end");
}

function startEdgingBPM(bpm, message) {
    setEdgeHold(false);
    dm("bpm: " + bpm, 0);
    if (message != undefined && message != null)
    {
        sm(message, 0);
    }
    startEdge(Math.floor(bpm))
    let timeSoFar = 0;
    let tauntFreq = getTauntFrequency();
    let tauntIncrement = getTauntTime(tauntFreq);

    let tauntTime = tauntIncrement;
    while (isEdging()) {
        sleep(.5);
        timeSoFar += .5;
        if (tauntTime == timeSoFar) {
            runScript(fp("StrokeTaunts", "*.js"));
            tauntIncrement = getTauntTime(tauntFreq);
            tauntTime += tauntIncrement;
        }
    }
}

function strokeInternal(duration, bpm, message)
{
    if (message != undefined && message != null)
    {
        sm(message, 0);
    }
    bpm = Math.round(bpm);
    startStroking(bpm);
    let tauntFrequency = getTauntFrequency();
    let tauntIncrement = getTauntTime(tauntFrequency);
    let currentTime = getMillisPassed() / 1000;
    let tauntTime = tauntIncrement + currentTime;
    TimeLeftStroking = duration;
    let secThreshold = currentTime + duration;

    while (currentTime < secThreshold && TimeLeftStroking != -1) {
        sleep(.5);
        currentTime = getMillisPassed() / 1000;
        TimeLeftStroking = secThreshold - currentTime;
        if (TimeLeftStroking == -1)
        {
            stopStroking();
            break;
        }
        if (currentTime > (tauntTime - .2) && currentTime < (tauntTime + .2)) {
            //TODO: need to implement using categories but for now just randomly choose a taunt file
            runScript(fp("StrokeTaunts", "*.js"));
            tauntTime = currentTime + getTauntTime(tauntFrequency);
        }
    }
    stopStroking();
    TimeLeftStroking = 0;
}

function getTauntTime(tauntFreq)
{
    let tauntIncrement = 0;
    switch (tauntFreq) {
        case 5:
            tauntIncrement = randomInteger(2, 4);
            break;
        case 4:
            tauntIncrement = randomInteger(3, 6);
            break;
        case 3:
            tauntIncrement = randomInteger(5, 11);
            break;
        case 2:
            tauntIncrement = randomInteger(8, 16);
            break;
        case 1:
            tauntIncrement = randomInteger(11, 31);
            break;
        default:
            tauntIncrement = 0;
    }
    return tauntIncrement;
}
