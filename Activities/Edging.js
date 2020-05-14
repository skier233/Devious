
//Likely edges will go over or under the desired points requested. This variable stores the extra points
//that were not achieved or overachieved in the last edge_activity so that the next edge activity can account for it.
let leftOverEdgePoints = 0;

//This is the main function to start the Activity.
function edging_activity(points)
{
    transitionHandler = edge_transition;
    getInput("Test in edge activity" + points);
    return simpleEdgeUnique(points);
}

//This is a simple edging structure where unique edging methods will be chosen for each edge up until the history limit
//is reached. historyLength stores the number of unique edging methods to be used before repeating (ie if historyLength
// is 3, make sure an edging method is used that is not one of the previous 3 edging methods used)
function simpleEdgeUnique(points, historyLength = 3)
{
    let pointsSoFar = 0;
    points -= leftOverEdgePoints;
    leftOverEdgePoints = 0;
    let first = true;
    while (pointsSoFar < points * 0.9)
    {
        if (first)
        {
            first = false;
        }
        else
        {
            edge_inner_transition();
        }
        pointsSoFar += edge(null, null, historyLength);
        end_edge();
    }
    leftOverEdgePoints = pointsSoFar - points;
    return pointsSoFar;
}

function end_edge()
{
    end_edge_1();
}

//A simple edge end that just tells the sub to stop stroking
function end_edge_1()
{
    sm("^StopStrokingEdge^");
}

function edge_inner_transition(){
    sleep(5);
}

function edge_transition(nextFetish)
{
    if (nextFetish === "Edging")
    {
        sm("I don't think that's enough edging yet %grin%");
    }
    else if (nextFetish === "Stroking")
    {
        sm("I think I've let you get too close to the orgasm you crave. It's time to go back to stroking.");
    }
}


function edge(strokingCategory, strokingMethod, historyLength)
{
    let strokingMethodToStart = null;
    if (strokingMethod != null)
    {
        strokingMethodToStart = getStrokingMethodByName(strokingMethod)
    }
    else if (strokingCategory != null)
    {
        strokingMethodToStart = getStrokingMethodByCategory(true, strokingCategory, historyLength);
    }
    else
    {
        if (getStrokingMethodsEnabled())
        {
            strokingMethodToStart = getStrokingMethodByCategory(true, null, historyLength);
        }
        else {
            strokingMethodToStart = getStrokingMethodByName("NORMALSTROKE");
        }
    }
    return strokingMethodToStart.edge()
}