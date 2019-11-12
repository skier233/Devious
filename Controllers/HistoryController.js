ignoreModule();
let Histories = {};

//region History implementation
function History(historyName, size=10)
{
    this.Size = size;
    this.HistoryName = historyName;
    this.queue = [];
}
function addItem(item)
{
    if (this.queue.length >= this.Size)
    {
        this.queue.shift();
        this.queue.push(item);
    }
    else
    {
        this.queue.push(item);
    }
}

function clear()
{
    this.queue = [];
}

function getPosition(item)
{
    let toReturn = this.queue.indexOf(item);
    if (toReturn == -1)
    {
        return -1;
    }
    else
    {
        return (this.queue.length - 1) - toReturn;
    }
}
History.prototype.addItem = addItem;
History.prototype.clear = clear;
History.prototype.getPosition = getPosition;
//endregion

function getHistory(historyName)
{
    if (historyName in Histories)
    {
        return Histories[historyName];
    }

}

function AddHistory(historyName, size)
{
    if (!(historyName in Histories))
    {
        var newHistory = new History(historyName, size)
        Histories.push(newHistory);
        return newHistory;
    }
    else
    {
        return Histories[historyName];
    }
}

function getModuleHistory(moduleName)
{
    var moduleVal = getVar(moduleName, null);
    if (moduleVal == null)
    {
        setVar(moduleName, 0);
        return 0;
    }
    return moduleVal;
}

function resetModuleHistory(moduleName)
{
    setVar(moduleName, 0);
}

function incrementModuleHistory(moduleName)
{
    var moduleVal = getVar(moduleName, null);
    if (moduleVal == null)
    {
        setVar(moduleName, 1);
    }
    else
    {
        setVar(moduleName, moduleVal + 1);
    }
}