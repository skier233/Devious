ignoreModule();

let ModuleArgs = [];

//Used as an alternative to run() to call scripts. This should be used instead
//because it allows a way of passing arguments to scripts.
function runScript(path)
{
    if (path == null)
    {
        em("runScript called with no arguments!!");
        return;
    }
    if (arguments.length == 1)
    {
        ModuleArgs = [];
    }
    else
    {
        ModuleArgs = arguments.slice(1, arguments.length - 1);
    }
    run(path);
}

//TODO: possibly all of this category logic needs to be removed
//region Possible Categories
const ImplementedCategories = {
    SHORT: 'short',
    MEDIUM: 'medium',
    LONG: 'long',
    VERYLONG: 'verylong',
    STROKING: 'stroking',
    EDGING: 'edging',
    ANAL: 'anal',
    CEI: 'cei',
    CBT: 'cbt',
    COOLDOWN: 'cooldown'
}

const RatingMapings = [-16, -12, -7, -3, -1, 0, 1, 3, 7, 12, 16];

setVar("SHORTRATING", 5);
setVar("MEDIUMRATING", 5);
setVar("LONGRATING", 5);
setVar("VERYLONGRATING", 5);

//endregion

//region Activity
function Activity(filepath, Name)
{
    this.FilePath = filepath;
    this.Name = Name;
    this.StartFunction = null;
}
let AllActivities = [];

function loadAllActivities()
{
    let thisActivity = new Activity(fp("Activities", "Edging.js"), "Edging");
    runScript(thisActivity.FilePath);
    thisActivity.StartFunction = edging_activity;
    AllActivities.push(thisActivity);
}
loadAllActivities();
//endregion

//region Module implementation
function Module(filepath, categories)
{
    this.FilePath = filepath;
    this.Categories = categories;
}

Module.prototype.toString = function(){
    return "Path: " + this.FilePath + " Categories: " + this.Categories;
}

let AllModules = [];

//region Setup
loadAvailableModules();
//endregion

function loadAvailableModules()
{
    AllModules = [];
    let moduleScripts = getScriptsInDirectories(fp(true, "Modules"));
    for (let i = 0; i < moduleScripts.length; i++)
    {
        let categories = readCategories(moduleScripts[i]);
        if (categories != null) {
            let moduleCategories = [];
            for (let j = 0; j < categories.length; j++) {

                let keys = Object.keys(ImplementedCategories);
                for (let k = 0; k < keys.length; k++) {
                    //dm(keys[k].toLowerCase() + ": " + categories[j]);
                    if (keys[k] == categories[j]) {
                        moduleCategories.push(categories[j].toUpperCase());
                        break;
                    }
                }
            }
            AllModules.push(new Module(moduleScripts[i].getPath().replace("\\", separator).replace(PersonalityPath, ""), moduleCategories));
        }
    }
}
//endregion

//region Module Running

function chooseModule()
{
    let thisActivity = AllActivities[randomInteger(0, AllActivities.length)];
    thisActivity.StartFunction(50);
    //runScript(activitySelector());
}

//TODO: This needs work as this should be the guts of how modules are chosen for the personality
function moduleSelector()
{
    let ratings = [];
    let highest = -1000;
    let highestIndex = -1;
    let secondhighest = -1000;
    let secondhighestIndex = -1;
    let thirdhighest = -1000;
    let thirdhighestIndex = -1;
    for(let i = 0; i < AllModules.length; i++)
    {
        let module = AllModules[i];
        let moduleRating = 0;
        for (let j = 0; j < module.Categories.length; j++)
        {
            let thisCategory = module.Categories[j];
            if (!getVar(thisCategory + "DISABLED", false))
            {
                if (getVar(thisCategory + "RATING", false))
                {
                    moduleRating += RatingMapings[getVar(thisCategory + "RATING")];
                }
            }
        }
        moduleRating += randomInteger(-3, 3);
        dm("rating " + moduleRating);
        if (moduleRating > highest)
        {
            thirdhighest = secondhighest;
            secondhighest = highest;
            highest = moduleRating;

            thirdhighestIndex = secondhighestIndex;
            secondhighestIndex = highestIndex;
            highestIndex = i;
        }
        ratings.push(moduleRating);
    }
    if (highestIndex == -1)
    {
        em("No Module files with categories defined were found!!");
        return null;
    }
    return AllModules[highestIndex].FilePath;
}

//This is the replacement to moduleSelector that uses activities instead of modules
function activitySelector()
{

}

//endregion