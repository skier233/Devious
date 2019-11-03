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
intensityBpms = [40, 50, 60, 70, 80, 90, 100, 120, 140, 160];
teaseBpms = [100, 90, 80, 75, 60, 50, 40, 30, 20, 10];
tortureBpms = [75, 80, 85, 90, 95, 100, 55, 120, 45, 150];
rapidFireBpms = [75, 80, 85, 100, 130, 140, 170, 200, 220, 240];

StrokingMethod.prototype.constructor = StrokingMethod;

//Stroke Category is an optional parameter as a stroking method can belong to multiple categories
StrokingMethod.prototype.startStroking = function(strokeModifier, strokeCategory, specifiedBpm, duration) {
    runScript(this.StartStrokingMethodScript);
    let message = null;
    let bpm = 0;
    if (strokeModifier == null)
    {
        strokeModifier = 5;
    }
    try
    {
        message = eval(this.Name + "_stroke()");
    } catch(e)
    {
        dm("function name error: " + this.Name + "_stroke  " + e)
    }
    if (specifiedBpm != null)
    {
        bpm = specifiedBpm;
    }
    else if (strokeCategory != null)
    {
        if (strokeCategory == "INTENSE")
        {
            bpm = intensityBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "TEASE")
        {
            bpm = teaseBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "TORTURE")
        {
            bpm = tortureBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "RAPIDFIRE")
        {
            bpm = rapidFireBpms[strokeModifier - 1];
        }
    }
    else
    {
        if (this.Torture >= this.Tease && this.Torture >= this.Intensity && this.Torture >= this.Closeness)
        {
            bpm = tortureBpms[strokeModifier - 1];
        }
        else if (this.Tease >= this.Torture && this.Tease >= this.Intensity && this.Tease >= this.Closeness)
        {
            bpm = teaseBpms[strokeModifier - 1];
        }
        else if (this.Closeness >= (this.Torture + 2) && this.Closeness >= (this.Intensity + 2) && this.Closeness >= (this.Tease + 2))
        {
            bpm = rapidFireBpms[strokeModifier - 1];
        }
        else
        {
            bpm = intensityBpms[strokeModifier - 1];
        }
    }
    var tenPercent = bpm*0.1;
    bpm = bpm + randomInteger(0 - tenPercent, tenPercent);
    if (duration == null)
        duration = strokeModifier*10;
    //TODO: use better method of getting stroke length
    strokeInternal(duration, bpm, message);
};

StrokingMethod.prototype.edge = function(strokeModifier, strokeCategory, specifiedBpm) {
    runScript(this.StartStrokingMethodScript);
    let message = null;
    let bpm = 0;
    if (strokeModifier == null)
    {
        strokeModifier = 5;
    }
    try
    {
        message = eval(this.Name + "_stroke()");
    } catch(e)
    {
        dm("function name error: " + this.Name + "_stroke  " + e)
    }
    if (specifiedBpm != null)
    {
        bpm = specifiedBpm;
    }
    else if (strokeCategory != null)
    {
        if (strokeCategory == "INTENSE")
        {
            bpm = intensityBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "TEASE")
        {
            bpm = teaseBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "TORTURE")
        {
            bpm = tortureBpms[strokeModifier - 1];
        }
        else if (strokeCategory == "RAPIDFIRE")
        {
            bpm = rapidFireBpms[strokeModifier - 1];
        }
    }
    else
    {
        if (this.Torture >= this.Tease && this.Torture >= this.Intensity && this.Torture >= this.Closeness)
        {
            bpm = tortureBpms[strokeModifier - 1];
        }
        else if (this.Tease >= this.Torture && this.Tease >= this.Intensity && this.Tease >= this.Closeness)
        {
            bpm = teaseBpms[strokeModifier - 1];
        }
        else if (this.Closeness >= (this.Torture + 2) && this.Closeness >= (this.Intensity + 2) && this.Closeness >= (this.Tease + 2))
        {
            bpm = rapidFireBpms[strokeModifier - 1];
        }
        else
        {
            bpm = intensityBpms[strokeModifier - 1];
        }
    }
    var tenPercent = bpm*0.1;
    bpm = bpm + randomInteger(0 - tenPercent, tenPercent);
    //TODO: use better method of getting stroke length
    strokeInternal(strokeModifier*10, bpm, message);
};

//For more information about where these values come from, see StrokePointsCalculations.xlsx
StrokingMethod.prototype.getStrokePoints = function() {
    let intensityModifier = 1;
    let teaseModfiier = 0.5;
    let tortureModifier = 3;
    let closeModifier = 1.5;
    return this.Intensity*intensityModifier + this.Tease*teaseModfiier + this.Torture*tortureModifier + this.Closeness*closeModifier;
}

//For more information about where these values come from, see StrokePointsCalculations.xlsx
StrokingMethod.prototype.getEdgePoints = function() {
    let intensityModifier = 4;
    let teaseModfiier = 1;
    let tortureModifier = 1;
    let closeModifier = 0.5;
    let useInverseClose = false;

    if (this.Closeness <= 3)
    {
        useInverseClose = true;
        intensityModifier = 2;
        teaseModfiier = 1;
        tortureModifier = 3;
        closeModifier = 2.5;
    }
    return this.Intensity*intensityModifier + this.Tease*teaseModfiier + this.Torture*tortureModifier + useInverseClose ? this.Closeness*closeModifier: (10 - this.Closeness)*closeModifier;
}

AllMethods = [];
teaseMethods = [];
tortureMethods = [];
intenseMethods = [];
rapidFireMethods = [];

initializeMethods();
function initializeMethods()
{
    AllMethods.push(new StrokingMethod("FIGUREEIGHT", 6, 0, 2, 7, true));
    intenseMethods.push(AllMethods[0]);
    rapidFireMethods.push(AllMethods[0]);
    AllMethods.push(new StrokingMethod("UNDERLEG", 4, 0, 1, 3));
    rapidFireMethods.push(AllMethods[1]);
    AllMethods.push(new StrokingMethod("UNDERLEGLUBE", 6, 0, 2, 6, true));
    intenseMethods.push(AllMethods[2]);
    rapidFireMethods.push(AllMethods[2]);
    AllMethods.push(new StrokingMethod("PALM", 9, 0, 9, 1, true));
    tortureMethods.push(AllMethods[3]);
    AllMethods.push(new StrokingMethod("CIRCULARPALM", 10, 0, 10, 2, true));
    tortureMethods.push(AllMethods[4]);
    AllMethods.push(new StrokingMethod("ONETOPONEBOTTOM", 5, 0, 2, 4, true));
    intenseMethods.push(AllMethods[5]);
    AllMethods.push(new StrokingMethod("ROLL", 3, 3, 0, 3));
    teaseMethods.push(AllMethods[6]);
    AllMethods.push(new StrokingMethod("STOMACHRUB", 4, 7, 0, 3, true));
    teaseMethods.push(AllMethods[7]);
    AllMethods.push(new StrokingMethod("PALMRUB", 5, 6, 0, 4, true));
    teaseMethods.push(AllMethods[8]);
    AllMethods.push(new StrokingMethod("NORMALSTROKE", 4, 0, 1, 4));
    rapidFireMethods.push(AllMethods[9]);
    AllMethods.push(new StrokingMethod("NORMALSTROKELUBE", 6, 0, 3, 5, true));
    intenseMethods.push(AllMethods[10]);
    rapidFireMethods.push(AllMethods[10]);
    AllMethods.push(new StrokingMethod("NORMALSTROKEBOTHLUBE", 8, 0, 2, 9, true));
    intenseMethods.push(AllMethods[11]);
    rapidFireMethods.push(AllMethods[11]);
    AllMethods.push(new StrokingMethod("STROKEHEAD", 6, 2, 4, 6, true));
    intenseMethods.push(AllMethods[12]);
    rapidFireMethods.push(AllMethods[12]);
    tortureMethods.push(AllMethods[12]);
    AllMethods.push(new StrokingMethod("STROKETIP", 8, 4, 7, 4, true));
    tortureMethods.push(AllMethods[13]);
    AllMethods.push(new StrokingMethod("HOLDSTROKE", 8, 0, 3, 9, true));
    intenseMethods.push(AllMethods[14]);
    rapidFireMethods.push(AllMethods[14]);
    AllMethods.push(new StrokingMethod("HOLDSTROKEHEAD", 7, 2, 5, 7, true));
    intenseMethods.push(AllMethods[15]);
    rapidFireMethods.push(AllMethods[15]);
    AllMethods.push(new StrokingMethod("HOLDSTROKETIP", 8, 4, 7, 4, true));
    tortureMethods.push(AllMethods[16]);
    AllMethods.push(new StrokingMethod("RUBSWEET", 2, 3, 0, 7, true))
    rapidFireMethods.push(AllMethods[17]);
    AllMethods.push(new StrokingMethod("TICKLESWEET", 1, 7, 0, 2, true));
    teaseMethods.push(AllMethods[18]);
    AllMethods.push(new StrokingMethod("TWIST", 7, 0, 2, 8, true));
    intenseMethods.push(AllMethods[19]);
    rapidFireMethods.push(AllMethods[19]);
    AllMethods.push(new StrokingMethod("TWISTHEAD", 6, 2, 4, 6, true));
    intenseMethods.push(AllMethods[20]);
    rapidFireMethods.push(AllMethods[20]);
    AllMethods.push(new StrokingMethod("TWISTTIP", 7, 4, 6, 3, true));
    tortureMethods.push(AllMethods[20]);
    AllMethods.push(new StrokingMethod("HOLDTWIST", 8, 0, 3, 9, true));
    intenseMethods.push(AllMethods[21]);
    rapidFireMethods.push(AllMethods[21]);
    AllMethods.push(new StrokingMethod("HOLDTWISTHEAD", 7, 2, 5, 7, true));
    intenseMethods.push(AllMethods[22]);
    rapidFireMethods.push(AllMethods[22]);
    AllMethods.push(new StrokingMethod("HOLDTWISTTIP", 8, 4, 7, 4, true));
    tortureMethods.push(AllMethods[23]);
    AllMethods.push(new StrokingMethod("ONLYDOWN", 8, 0, 4, 5, true));
    intenseMethods.push(AllMethods[24]);
    AllMethods.push(new StrokingMethod("ONLYUP", 8, 0, 4, 5, true));
    intenseMethods.push(AllMethods[25]);
    AllMethods.push(new StrokingMethod("ONLYDOWNCIRCLE", 5, 6, 3, 3, true));
    teaseMethods.push(AllMethods[26]);
    AllMethods.push(new StrokingMethod("ONLYUPCIRCLE", 5, 6, 3, 3, true));
    teaseMethods.push(AllMethods[27]);
    AllMethods.push(new StrokingMethod("TWISTCIRCLE", 3, 6, 3, 2, true));
    teaseMethods.push(AllMethods[28]);
    AllMethods.push(new StrokingMethod("FISTPEEK", 10, 5, 10, 1, true));
    tortureMethods.push(AllMethods[29]);
    AllMethods.push(new StrokingMethod("FINGERSTEASE", 9, 6, 9, 1, true));
    tortureMethods.push(AllMethods[30]);
    AllMethods.push(new StrokingMethod("ONEFINGER", 1, 9, 1, 0));
    teaseMethods.push(AllMethods[31]);
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

function getStrokingMethodByCategory(strokingCategory, edgeModifier)
{

}

function getRandomStrokingMethod()
{
    return AllMethods[randomInteger(0, AllMethods.length - 1)];
}