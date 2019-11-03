let TimeLeftStroking = 0;
runScript(fp("Controllers", "StrokingMethodsController.js"));

function stroke(strokeModifier)
{
    strokeInternal(30, 80);
}

function stroke(strokeModifier, strokingCategory, strokingMethod)
{
    let strokingMethodToStart = null;
    if (strokingMethod != null)
    {
        strokingMethodToStart = getStrokingMethodByName(strokingMethod)
    }
    else if (strokingCategory != null)
    {
        strokingMethodToStart = getStrokingMethodByCategory(strokingCategory, edgeModifier);
    }
    else
    {
        strokingMethodToStart = getStrokingMethodByName("NORMALSTROKE")
        startEdgingBPM(70, "test edge");
    }
    strokingMethodToStart.startStroking(strokeModifier)
}

function edge(edgeModifier, strokingCategory, strokingMethod)
{
    let strokingMethodToStart = null;
    if (strokingMethod != null)
    {
        strokingMethodToStart = getStrokingMethodByName(strokingMethod)
    }
    else if (strokingCategory != null)
    {
        strokingMethodToStart = getStrokingMethodByCategory(strokingCategory, edgeModifier);
    }
    else
    {
        strokingMethodToStart = getStrokingMethodByName("NORMALSTROKE")
        startEdgingBPM(70, "test edge");
    }
    strokingMethodToStart.edge(edgeModifier)
}

function Tease(teaseLength, edgeOnly, strokeOnly)
{
    if (edgeOnly)
    {

    }
    else if (strokeOnly)
    {

    }
    else
    {

    }
}

function startEdging()
{
    startEdgingBPM(3, 80);
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
    startStroking(bpm);
    let tauntFrequency = getTauntFrequency();
    let tauntIncrement = getTauntTime(tauntFrequency);
    currentTime = getMillisPassed() / 1000;
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

//region Variable getters
/**
 * getTauntFrequency getter method to get the personality variable "tauntFrequency". You probably won't want to call this
 * directly.
 **/
function getTauntFrequency() {
    let tauntFrequency = getVar("tauntFrequency", 3);
    if (typeof tauntFrequency == "number") {
        if (tauntFrequency >= 0 && tauntFrequency <= 5) {
            return tauntFrequency;
        }
    }
    //Returns 3 if the taunt frequency has not been set or is invalid
    return 3;
}
//endregion