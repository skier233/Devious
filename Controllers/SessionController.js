ignoreModule();
function continueSession()
{
    return true;
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
        chooseModule();
    }
    //run end file
}

function customSession1()
{
    
}