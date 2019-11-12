ignoreModule();
let separator = java.io.File.separator;
let File = Java.type("java.io.File");
let BufferedReader = Java.type("java.io.BufferedReader");
let FileReader = Java.type("java.io.FileReader");
let TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
let PersonalityPath = TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath().replace("\\", separator);
let TeasePath = Java.type("me.goddragon.teaseai.utils.FileUtils").getTAJPath().replace("\\", separator);

//region File Path formatting
//Concatenates the arguments into one path accounting for different operating systems.
//If the first argument is a bool and is true, then the personality path will be added at the beginning. If it is false,
//The TeasePath will be used
function formatPath() {
    let outputPath = "";
    let startVar = 0;
    if (arguments.length != 0 && arguments[0] == true)
    {
        outputPath = PersonalityPath + separator;
        startVar = 1;
    }
    else if (arguments.length != 0 && arguments[0] == false)
    {
        outputPath = TeasePath + separator;
        startVar = 1;
    }
    for (let i = startVar; i < arguments.length; i++)
    {
        if (i != startVar)
        {
            outputPath += separator;
        }
        outputPath += arguments[i].toString();
    }
    return outputPath.toString();
}

function fp()
{
    return formatPath.apply(null, arguments);
}


//endregion

//region Getting Files from directory
function getScriptsInDirectories(directoryPath)
{
    scripts = [];
    dm(directoryPath);
    getScriptsInDirectoriesHelper(directoryPath, scripts);
    return scripts;
}

function getScriptsInDirectoriesHelper(directoryPath, scripts)
{
    let directory = new File(directoryPath);

    let fList = directory.listFiles();
    if (fList != null)
    {
        for (let i = 0; i < fList.length; i++)
        {
            if (fList[i].isFile() && fList[i].getName().contains(".js"))
            {
                scripts.push(fList[i]);
            }
            else if (fList[i].isDirectory())
            {
                getScriptsInDirectoriesHelper(fList[i].getAbsolutePath(), scripts);
            }
        }
    }
}

//endregion

//region File io

function readCategories(file)
{
    if (file == null)
    {
        wm("File to read category from was null!")
        return null;
    }
    try {
        let reader = new BufferedReader(new FileReader(file));
        let line = reader.readLine();
        if (!line.toLowerCase().contains("categories")) {
            WM("File " + file.getName() + " does not have any categories defined and thus will not be used. \nPlease define some categories in the first line of the file. (see other files)");
            return null;
        }
        line = line.split("=")[1];
        categories = line.split(",")
        for (let i = 0; i < categories.length; i++)
        {
            categories[i] = categories[i].trim().toUpperCase();
        }
        return categories;
    }
    catch(error)
    {
        em("Failed reading file " + file.getName())
    }
}

//endregion