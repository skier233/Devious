run("Utilities" + java.io.File.separator + "FileUtils.js");
run(fp("Utilities", "MathUtils.js"));
run(fp("Utilities", "ChatUtils.js"));
runScript(fp("Controllers", "MoodController.js"));
runScript(fp("Controllers", "StrokingController.js"));
runScript(fp("Controllers", "SessionController.js"));
runScript(fp("Controllers", "VariablesController.js"));
runScript(fp("Controllers", "StatisticsController.js"));
print();
normalSession();
sendInput("test");
