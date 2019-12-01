
//Likely edges will go over or under the desired points requested. This variable stores the extra points
//that were not achieved or overachieved in the last edge_activity so that the next edge activity can account for it.
let leftOverEdgePoints = 0;

//This is the history of edges used that is checked. (ie if historyLength is 3, make sure an edging method is used that
//is not one of the previous 3 edging methods used)
let historyLength = 3;

//This is the main function to start the Activity.
function edging_activity(points)
{
    getInput("Test in edge activity" + points);
    simpleEdge1(points);
}

function simpleEdge1(points)
{
    let pointsSoFar = 0;
    points -= leftOverEdgePoints;
    leftOverEdgePoints = 0;
    while (pointsSoFar < points)
    {
        pointsSoFar += edge(null, null, historyLength);
    }
}