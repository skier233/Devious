function StrokingMethod(name, startStrokingMethodScript, intensity, tease, torture, closeness, useLube)
{
    this.Name = name;
    this.StartStrokingMethodScript = fp("Controllers", "StrokingMethods", this.Name + ".js");
    this.Intensity = intensity;
    this.Tease = tease;
    this.Torture = torture;
    this.Closeness = closeness;
    if (useLube == null || useLube == undefined)
    {
        this.UseLube = false;
        return this;
    }
    this.UseLube = useLube;
}
StrokingMethod.prototype.constructor = StrokingMethod;
StrokingMethod.prototype.startStroking = function(bpm, message) {
    runScript(this.StartStrokingMethodScript);
    //executeFunctionByName(this.Name + "_stroke", this);
    var message = null;
    try
    {
        message = eval(this.Name + "_stroke()");
    } catch(e)
    {
        dm("function name error: " + this.Name + "_stroke  " + e)
    }
    stroke(bpm, message);
};

AllMethods = [];

initializeMethods();
function initializeMethods()
{
    AllMethods.push(new StrokingMethod("FIGUREEIGHT", 6, 0, 4, 7, true));
    AllMethods.push(new StrokingMethod("UNDERLEG", 4, 0, 1, 3));
    AllMethods.push(new StrokingMethod("UNDERLEGLUBE", 6, 0, 3, 6, true));
    AllMethods.push(new StrokingMethod("PALM", 9, 0, 9, 1, true));
    AllMethods.push(new StrokingMethod("CIRCULARPALM", 10, 0, 10, 2, true));
    AllMethods.push(new StrokingMethod("ONETOPONEBOTTOM", 5, 0, 2, 4, true));
    AllMethods.push(new StrokingMethod("ROLL", 3, 3, 0, 3));
    AllMethods.push(new StrokingMethod("STOMACHRUB", 4, 7, 0, 3, true));
    AllMethods.push(new StrokingMethod("PALMRUB", 5, 6, 0, 4, true));
    AllMethods.push(new StrokingMethod("NORMALSTROKE", 4, 0, 1, 3));
    AllMethods.push(new StrokingMethod("NORMALSTROKELUBE", 6, 0, 3, 5, true));
    AllMethods.push(new StrokingMethod("NORMALSTROKEBOTHLUBE", 7, 0, 2, 8, true));
    AllMethods.push(new StrokingMethod("STROKEHEAD", 6, 2, 4, 6, true));
    AllMethods.push(new StrokingMethod("STROKETIP", 8, 4, 7, 4, true));
    AllMethods.push(new StrokingMethod("HOLDSTROKE", 8, 0, 3, 9, true));
    AllMethods.push(new StrokingMethod("HOLDSTROKEHEAD", 7, 2, 5, 7, true));
    AllMethods.push(new StrokingMethod("HOLDSTROKETIP", 8, 4, 7, 4, true));
    AllMethods.push(new StrokingMethod("RUBSWEET", 3, 3, 0, 7, true));
    AllMethods.push(new StrokingMethod("TICKLESWEET", 1, 7, 0, 2, true));
    AllMethods.push(new StrokingMethod("TWIST", 7, 0, 2, 8, true));
    AllMethods.push(new StrokingMethod("TWISTHEAD", 6, 2, 4, 6, true));
    AllMethods.push(new StrokingMethod("TWISTTIP", 7, 4, 6, 3, true));
    AllMethods.push(new StrokingMethod("HOLDTWIST", 8, 0, 3, 9, true));
    AllMethods.push(new StrokingMethod("HOLDTWISTHEAD", 7, 2, 5, 7, true));
    AllMethods.push(new StrokingMethod("HOLDTWISTTIP", 8, 4, 7, 4, true));
    AllMethods.push(new StrokingMethod("ONLYDOWN", 8, 0, 5, 5, true));
    AllMethods.push(new StrokingMethod("ONLYUP", 8, 0, 5, 5, true));
    AllMethods.push(new StrokingMethod("ONLYDOWNCIRCLE", 5, 6, 3, 3, true));
    AllMethods.push(new StrokingMethod("ONLYUPCIRCLE", 5, 6, 3, 3, true));
    AllMethods.push(new StrokingMethod("TWISTCIRCLE", 3, 6, 3, 2, true));
    AllMethods.push(new StrokingMethod("FISTPEEK", 10, 5, 10, 1, true));
    AllMethods.push(new StrokingMethod("FINGERSTEASE", 9, 6, 9, 1, true));
    AllMethods.push(new StrokingMethod("ONEFINGER", 1, 9, 1, 0));
}

function getStrokingMethodByName(name)
{
    for (var i = 0; i < AllMethods.length; i++)
    {
        if (AllMethods[i].Name == name)
        {
            return AllMethods[i];
        }
    }
    return null;
}

function getRandomStrokingMethod()
{
    return AllMethods[randomInteger(0, AllMethods.length - 1)];
}