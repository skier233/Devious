
//Likely edges will go over or under the desired points requested. This variable stores the extra points
//that were not achieved or overachieved in the last edge_activity so that the next edge activity can account for it.
let leftOverEdgePoints = 0;

//This is the main function to start the Activity.
function edging_activity(points)
{
    getInput("Test in edge activity" + points);
    simpleEdgeUnique(points);
}

//This is a simple edging structure where unique edging methods will be chosen for each edge up until the history limit
//is reached. historyLength stores the number of unique edging methods to be used before repeating (ie if historyLength
// is 3, make sure an edging method is used that is not one of the previous 3 edging methods used)
function simpleEdgeUnique(points, historyLength = 3)
{
    let pointsSoFar = 0;
    points -= leftOverEdgePoints;
    leftOverEdgePoints = 0;
    while (pointsSoFar < points * 0.9)
    {
        pointsSoFar += edge(null, null, historyLength);
    }
}