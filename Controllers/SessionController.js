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
    return sessionPoints < 50;
}

function normalSession()
{
    if (!isVar("firstSessionDone"))
    {
        runScript(fp("Start", "FirstStart.js"))
        dm("5")
    }
    else
    {
        //run start
    }
    while (continueSession())
    {
        //TODO: transition from previous module to next
        chooseActivity();
    }
    sessionPoints += end_activity(30);
    //run end file
}

function customSession1()
{
    
}

