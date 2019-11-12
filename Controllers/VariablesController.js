ignoreModule();

function getStrokingMethodsEnabled()
{
    let tauntFrequency = getVar("STROKINGMETHODSENABLED", true);
    if (typeof tauntFrequency == "boolean") {
            return tauntFrequency;
    }
    //Returns true if the stroking method enabled has not been set or is invalid
    return true;
}

/**
 * getTauntFrequency getter method to get the personality variable "tauntFrequency". You probably won't want to call this
 * directly.
 **/
function getTauntFrequency() {
    let tauntFrequency = getVar("TAUNTFREQUENCY", 3);
    if (typeof tauntFrequency == "number") {
        if (tauntFrequency >= 0 && tauntFrequency <= 5) {
            return tauntFrequency;
        }
    }
    //Returns 3 if the taunt frequency has not been set or is invalid
    return 3;
}