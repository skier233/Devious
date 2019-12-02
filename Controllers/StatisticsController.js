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

function isStrokeInHistory(strokeName, historyLength, strokeHistory)
{
    if (strokeHistory == null)
        strokeHistory = sessionStatistics.getStrokes();
    strokeHistory = getLastXItemsInList(strokeHistory, historyLength);
    for(let i = 0; i < strokeHistory.size(); i++)
    {
        let strList = strokeHistory.get(i).getData("str", 1);
        if (strList != null && strList.size() != 0)
        {
            dm("1: " + strList.get(0).toLowerCase() + " 1:" + strokeName.toLowerCase());
        }

        if (strList != null && strList.size() != 0 && strList.get(0).toLowerCase().equals(strokeName.toLowerCase()))
        {
            return true;
        }
    }
    return false;
}

function isInHistory(edge, name, historyLength, history)
{
    if (edge)
    {
        return isEdgeInHistory(name, historyLength, history);
    }
    else
    {
        return isStrokeInHistory(name, historyLength, history);
    }
}





function getLastXItemsInList(list, numItems)
{
    if (list.size() > numItems)
    {
        list = list.subList(list.size() - numItems, list.size());
    }
    return list;
}
