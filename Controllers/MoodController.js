ignoreModule();
let _strokingMoods = ["NEUTRAL", "INTENSE", "TEASE", "TORTURE", "RAPIDFIRE"];

let _strokingMood = "INTENSE";
let _angerLevel = 50;
let _strokingLevel = 50;

let _sessionStrokePoints = 0;
let _currentStrokePoints = 0;
let _currentStrokeThreshold = 100;

function getStrokingMood()
{
    return _strokingMood;
}

function setStrokingMood(toSet)
{
    _strokingMood = toSet;
}

function changeStrokingMood(moodToChange, moodThreshold)
{
    if (moodToChange != null)
    {
        let index = _strokingMoods.indexOf(moodToChange.toUpperCase());
        if (index == -1)
        {
            em("Mood: " + moodToChange + " is not a valid mood and was not recognized");
            return;
        }
        //TODO: run a submodule that is a transition from the previous mood to the next mood. If the previous mood was short or stopped early (the currentStrokePoints is below a threshold),
        // then maybe don't do a transition or do a shorter one
        dm("New mood: " + _strokingMoods[index] + " Old Mood: " + _strokingMood);
        _strokingMood = _strokingMoods[index];
        _currentStrokePoints = 0;
        if (moodThreshold != null)
        {
            _currentStrokeThreshold = moodThreshold;
        }
    }
    else
    {
        //TODO: add more complex logic for selecting mood
        _strokingMood = _strokingMoods[randomInteger(0, _strokingMoods.length - 1)];
        _currentStrokePoints = 0;
    }
}

function increaseAnger(Value)
{
    if (Value > 5 || Value < -5)
    {
        em("Invalid increaseAnger Value. Values must be between -5 to 5");
        return;
    }
    _angerLevel += 6 * Value;
    _strokingLevel += 6 * Value;
}

function getAngerLevel()
{
    return _angerLevel;
}

function getStrokingLevel()
{
    return _strokingLevel;
}

function registerStrokePoints(points)
{
    _sessionStrokePoints += points;
    if (getStrokingMethodsEnabled()) {
        _currentStrokePoints += points;
        if (_currentStrokePoints >= _currentStrokeThreshold) {
            changeStrokingMood();
        }
    }
}