sysMes("Thanks for downloading Devious!");
sysMes("Before getting started, we need to set just a couple things up first.");
sysMes("First off, you need to decide the backstory on your domme.");
sysMes("This will determine the domme's personal and professional life");
//let dommeCareer = createInput();

//region Get Domme Career
var dommeCareer = sysMesInput("Is your domme in college, working at McDonalds, working as a graphic artist, or currently unemployed", "College", "Mcdonalds", "Graphic artist", "Unemployed");
while (!dommeCareer.isLike("college", "mcdonalds", "graphic", "artist", "unemployed"))
{
    dommeCareer = sysMesInput("Invalid Choice! Is your domme in college, working at McDonalds, working as a graphic artist, or currently unemployed?", "College", "Mcdonalds", "Graphic artist", "Unemployed");
}
if (dommeCareer.isLike("college"))
{
    setVar("DOMMEWORK", "COLLEGE");
}
else if (dommeCareer.isLike("mcdonalds")) {
    setVar("DOMMEWORK", "MCDONALDS");
}
else if (dommeCareer.isLike("graphic", "artist")) {
    setVar("DOMMEWORK", "GRAPHICARTIST");
}
else if (dommeCareer.isLike("unemployed")) {
    setVar("DOMMEWORK", "UNEMPLOYED");
}
dommeCareer.clearOptions();
//endregion

//region Get Domme Hobby
var dommeHobby =  sysMesInput("Does your domme like athletic activities, partying, hanging out with friends, or playing video games?", "Athletic Activities", "Partying", "Hanging Out With Friends", "Playing Video Games");

while (!dommeHobby.isLike("athletic", "activities", "party", "friends", "hanging", "games"))
{
    dommeHobby = sysMesInput("Invalid Choice! Does your domme like athletic activities, partying, hanging out with friends, or playing video games?", "College", "Mcdonalds", "Graphic artist", "Unemployed");
}

if (dommeHobby.isLike("athletic", "activit"))
{
    setVar("DOMMEHOBBYY", "ATHLETIC");
}
else if (dommeHobby.isLike("party")) {
    setVar("DOMMEHOBBYY", "PARTY");
}
else if (dommeHobby.isLike("friends", "hang")) {
    setVar("DOMMEHOBBYY", "FRIENDS");
}
else if (dommeHobby.isLike("games")) {
    setVar("DOMMEHOBBYY", "VIDEOGAMES");
}
dommeHobby.clearOptions();
//endregion

//region Get Domme-Sub Relationship
var dommeRelationship =  sysMesInput("How do you know your domme? (Options: Long Friends, High School Acquaintances, Meeting from dating site)", "Long Friends", "High School Acquaintances", "Meeting from dating site");

while (!dommeRelationship.isLike("friends", "school", "acquaintances", "site", "dating", "app"))
{
    dommeRelationship = sysMesInput("Invalid Choice! How do you know your domme? (Options: Long Friends, High School Acquaintances, Meeting from dating site)", "College", "Mcdonalds", "Graphic artist", "Unemployed");
}

if (dommeRelationship.isLike("friends"))
{
    setVar("DOMMEMEETING", "LONGFRIENDS");
}
else if (dommeRelationship.isLike("school", "acquaintances")) {
    setVar("DOMMEMEETING", "HIGHSCHOOL");
}
else if (dommeRelationship.isLike("site", "dating", "app")) {
    setVar("DOMMEMEETING", "DATINGSITE");
}
dommeRelationship.clearOptions();
//endregion

//region Run Config Script
var setUpNow =  sysMesInput("Do you want to do more setup now to have the personality tailored to you immediately or do you want to have the domme learn your fetishes and limits over time?", "Setup Now", "Learn Later");

while (!setUpNow.isLike("now", "later", "domme", "learn"))
{
    dommeRelationship = sysMesInput("Invalid Choice! Do you want to do more setup now to have the personality tailored to you immediately or do you want to have the domme learn your fetishes and limits over time?", "College", "Mcdonalds", "Graphic artist", "Unemployed");
}
setUpNow.clearOptions();
if (setUpNow.isLike("now"))
{
    //run config script
    var x = 1
    dm("1")
}
//endregion

run(fp("SubModules", "DommeFirstMeeting.js"));