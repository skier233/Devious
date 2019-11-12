ignoreModule();
//This class contains utilities for the chat (and some wrappers for TAJ methods in the event this personality might want to run extra code on a chat call)

//Custom/SendMessage wrapper. This is the main function you will use for any new modules that want to send a message!!
function m(message, delay, showTyping) {
    if (showTyping != null)
        sendMessage(message, delay, showTyping);
    else if (delay != null)
        sendMessage(message, delay);
    else
        sendMessage(message);
}
function sm()
{
    m.apply(null, arguments);
}
function cm()
{
    m.apply(null, arguments);
}
//End send message wrappers


//Debug message wrapper
function dm(message, delay)
{
    if (delay != null)
        DM(message,delay);
    else
        DM(message);
}

//Error message wrapper
function em(message, delay)
{
    if (delay != null)
        EM(message,delay);
    else
        EM(message);
}
//End debug message wrapper

//Personality setup/settings message
function sysMes(message) {
    sysm("<c=red b>[Devious]:<><b> " + message);
}

function getInput()
{
    let toReturn = null;
    if (arguments.length == 1)
    {
        toReturn = sendInput(arguments[0]);
    }
    else if (arguments.length == 2)
    {
        toReturn = sendInput(arguments[0], arguments[1]);
    }
    else if (arguments.length == 3)
    {
        toReturn = sendInput(arguments[0], arguments[1], arguments[2]);
    }
    return toReturn;
}

//Personality setup/settings message
function sysMesInput(message) {
    let answertype = Java.type("me.goddragon.teaseai.api.chat.Answer");
    let chatHandler = Java.type("me.goddragon.teaseai.api.chat.ChatHandler");
    let answer = new answertype(0);
    for (var i = 1; i < arguments.length; i++)
    {
        answer.addOption(arguments[i]);
    }

    sysMes(message);
    //sendMessage("flag 123", 0);
    chatHandler.getHandler().setCurrentCallback(answer);
    answer.setTimeout(false);
    answer.setAnswer(null);
    answer.setStartedAt(java.lang.System.currentTimeMillis());
    let teaseAi = Java.type("me.goddragon.teaseai.TeaseAI");
    teaseAi.application.waitPossibleScripThread(answer.getMillisTimeout());
    answer.checkTimeout();

    return answer;
}


