ignoreModule();

let transitionHandler = null;
let sessionPoints = 0;

//region SessionPlans
let sessionPlans = [];
let currentSessionPlan = null;
function SessionPlan(name, foreplayPercent, stimPercent, endPercent, fetishPercent)
{
    this.Name = name;
    this.ForeplayPercent = foreplayPercent;
    this.StimulationPercent = stimPercent;
    this.EndPercent = endPercent;
    this.FetishPercent = fetishPercent;
}

function loadAllSessionPlans()
{
    sessionPlans.push(new SessionPlan("Common", 10, 70, 20, "SOME"));

}
loadAllSessionPlans();
//endregion

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
    AllActivities = [];
    MainLoopActivities = [];
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
    dm("test");
    let thisActivity = MainLoopActivities[randomInteger(0, MainLoopActivities.length - 1)];
    if (transitionHandler != null)
    {
        dm("test2");
        dm(thisActivity);
        transitionHandler(thisActivity.Name);
    }
    sessionPoints += thisActivity.StartFunction(50);
}

//endregion

let session_length = 0;

function continueSession()
{
    return sessionPoints < session_length;
}


function StartSession()
{
    session_length = 200;
    normalSession();
}

function normalSession()
{
    if (!isVar("firstSessionDone"))
    {
        runScript(fp("Activities", "FirstStart.js"));
        dm("5")
    }
    else
    {
        //run start
        start_activity(0);
    }
    //TODO: later actually pick a session plan in a more intelligent manner
    currentSessionPlan = sessionPlans[0];

    //TODO: consider factoring in mood and other factors to determine length of foreplay rather than just a percent
    start_foreplay((currentSessionPlan.ForeplayPercent / 100) * session_length);
    dm(getVocab("cock"));
    while (continueSession())
    {
        chooseActivity();
        dm("Session Points: " + sessionPoints);
    }
    sessionPoints += end_activity(30);
    //run end file
}

function customSession1()
{
    
}

