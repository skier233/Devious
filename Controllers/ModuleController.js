ignoreModule();
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

function chooseModule()
{
    runScript(moduleSelector());
}

function moduleSelector()
{
    let ratings = [];
    let highest = -1000;
    let secondhighest = -1000;
    let thirdhighest = -1000;
    for(let i = 0; i < AllModules.length; i++)
    {
        let module = AllModules[i];
        let moduleRating = 0;
        for (let j = 0; j < module.Categories.length; j++)
        {
            let thisCategory = module.Categories[j];
            if (!getVar(thisCategory + "DISABLED", false))
            {
                dm("returned value: " + getVar(thisCategory + "RATING", false));
                if (getVar(thisCategory + "RATING", false))
                {
                    dm("found rating value:" + getVar(thisCategory + "RATING"));
                    dm("adjusted rating:" + RatingMapings[getVar(thisCategory + "RATING")]);
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
        }
        ratings.push(moduleRating);
    }

    for(let i = 0; i < AllModules.length; i++)
    {
        if (ratings[i] == highest)
        {
            return AllModules[i].FilePath;
        }
    }
    em("No Module files with categories defined were found!!");
    return null;
}

//endregion