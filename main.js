run("Utilities" + java.io.File.separator + "FileUtils.js");
run(fp("Utilities", "MathUtils.js"));
run(fp("Utilities", "ChatUtils.js"));
run(fp("Controllers", "ModuleController.js"));
runScript(fp("Controllers", "StrokingController.js"));
runScript(fp("Controllers", "SessionController.js"));

normalSession();
sendInput("test");
