let sessionStatistics = getThisSession();

function isEdgeInHistory(edgeName, historyLength, edgeHistory)
{
    if (edgeHistory == null)
        edgeHistory = sessionStatistics.getEdges();
    edgeHistory = getLastXItemsInList(edgeHistory, historyLength);
    for(let i = 0; i < edgeHistory.size(); i++)
    {
        let strList = edgeHistory.get(i).getData("str", 1);
        if (strList != null && strList.size() != 0)
        {
            dm("1: " + strList.get(0).toLowerCase() + " 1:" + edgeName.toLowerCase());
        }

        if (strList != null && strList.size() != 0 && strList.get(0).toLowerCase().equals(edgeName.toLowerCase()))
        {
            return true;
        }
    }
    return false;
}







function getLastXItemsInList(list, numItems)
{
    if (list.size() > numItems)
    {
        list = list.subList(list.size() - numItems, list.size());
    }
    return list;
}
