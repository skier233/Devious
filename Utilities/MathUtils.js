ignoreModule();
//lowest inclusive to highest inclusive
function randomInteger(lowest, highest) {
    return Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
}

function randomPercent()
{
    return randomInteger(0, 100);
}

function rt()
{
    return random.apply(null, arguments);
}

function random()
{
    numargs = arguments.length;
    return arguments[randomInteger(0, numargs-1)];
}

/**
 * simple helper method to calculate the time passed since the beginning of the session
 **/
function getMillisPassed() {
    let startedAt = getVariable("startDate").getTimeInMillis();
    let n = new Date().getTime();
    return n - startedAt;
}
function Sleep(timeToWait)
{
    sleep(timeToWait);
}