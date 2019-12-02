ignoreModule();

let transitionHandler = null;
let sessionPoints = 0;

//region Activity
function Activity(filepath, Name)
{
    this.FilePath = filepath;
    this.Name = Name;
    this.StartFunction = null;
}
let AllActivities = [];
let MainLoopActivities = [];

function loadAllActivities()
{
    let thisActivity = new Activity(fp("Activities", "Edging.js"), "Edging");
    runScript(thisActivity.FilePath);
    thisActivity.StartFunction = edging_activity;
    AllActivities.push(thisActivity);
    MainLoopActivities.push(thisActivity);

    thisActivity = new Activity(fp("Activities", "End.js"), "End");
    runScript(thisActivity.FilePath);
    thisActivity.StartFunction = end_activity;
    AllActivities.push(thisActivity);

    thisActivity = new Activity(fp("Activities", "Start.js"), "Start");
    runScript(thisActivity.FilePath);
    thisActivity.StartFunction = start_activity;
    AllActivities.push(thisActivity);

    thisActivity = new Activity(fp("Activities", "Stroking.js"), "Stroking");
    runScript(thisActivity.FilePath);
    thisActivity.StartFunction = stroking_activity;
    AllActivities.push(thisActivity);
    MainLoopActivities.push(thisActivity);
}
loadAllActivities();
//endregion


//region Activity Running

function chooseActivity()
{
    let thisActivity = MainLoopActivities[randomInteger(0, MainLoopActivities.length - 1)];
    if (transitionHandler != null)
    {
        transitionHandler(thisActivity.Name);
    }
    sessionPoints += thisActivity.StartFunction(50);
    //runScript(activitySelector());
}

//endregion

function continueSession()
{
    return sessionPoints < 200;
}

function normalSession()
{
    if (!isVar("firstSessionDone"))
    {
        runScript(fp("Activities", "FirstStart.js"))
        dm("5")
    }
    else
    {
        //run start
        start_activity(0);
    }
    while (continueSession())
    {
        //TODO: transition from previous module to next
        chooseActivity();
        dm("Session Points: " + sessionPoints);
    }
    sessionPoints += end_activity(30);
    //run end file
}

function customSession1()
{
    
}

