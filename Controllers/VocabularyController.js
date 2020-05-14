ignoreModule();

let vocabDictionary = {};

function GV(vocabName)
{
    return getVocab(vocabName);
}

function parseVocabs(stringToParse)
{
    let parts = stringToParse.split("^");
    let toReturn = "";
    for (let i = 0; i < parts.length; i++)
    {
        if (i % 2 === 1)
        {
            toReturn += getVocab(parts[i]);
        }
        else
        {
            toReturn += parts[i];
        }
    }
    return toReturn;
}
function getVocab(vocabName)
{
    if (vocabDictionary[vocabName] == null)
    {
        let path = fp(true, "Vocabularies", vocabName + ".txt");
        let exists = fileExists(path);
        if (exists) {
            let scanner = new java.util.Scanner(new java.io.File(path));
            let lines = [];
            while (scanner.hasNextLine())
            {
                lines.push(scanner.nextLine());
            }
            if (lines.length == 0)
            {
                wm("Vocab file " + vocabName + " is empty!");
                return vocabName;
            }
            vocabDictionary[vocabName] = [];
            vocabDictionary[vocabName].linesInFile = lines;
            let lineNumbers = [];
            for(let i = 0; i < lines.length;i++)
            {
                lineNumbers.push(i);
            }
            vocabDictionary[vocabName].lineAvailable = lineNumbers;
            vocabDictionary[vocabName].lineHistory = new Queue();
        }
        else if (fileExists(fp(true, "Vocabularies", vocabName + ".js")))
        {
            return "%" + vocabName + "%";
        }
        else {
            wm(path + " does not exist!");
            return vocabName;
        }
    }
    let currentItem = vocabDictionary[vocabName];
    let randomIndex = randomInteger(0, currentItem.lineAvailable.length - 1);
    let lineIndexToUse = currentItem.lineAvailable[randomIndex];
    currentItem.lineAvailable.splice(randomIndex, 1);
    currentItem.lineHistory.enqueue(lineIndexToUse);
    if (currentItem.lineHistory.getLength() >= Math.round(currentItem.linesInFile.length * 0.8))
    {
        currentItem.lineAvailable.push(currentItem.lineHistory.dequeue());
    }
    //recursively check if the vocab line itself has any vocabs in it
    return parseVocabs(currentItem.linesInFile[lineIndexToUse]);
}