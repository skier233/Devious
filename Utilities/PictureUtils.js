/**
 * showTaggedImageExact method will show and return a random picture with
 * the tags provided as an array
 **/
function showTaggedImageExact(imageType, imageTags, delay) {
    if (rapidTesting)
    {
        delay = 0;
    }
    //TODO add functionality for what if there isnt an image with all of the tags but there is one with all but one...?
    let path = fp(false, "Images", "System", "\"Downloaded Images\"");
    let pictureHandler = Java.type("me.goddragon.teaseai.api.picture.PictureHandler");
    dm("path " + path);
    dm("imageTags " + imageTags);
    let matchingImages = pictureHandler.getHandler().getTaggedPicturesExact(new File(path), imageTags);
    dm("matchingImages " + matchingImages);

    if (matchingImages == null)
    {
        return null;
    }

    let randomImage = matchingImages.get(randomInteger(0, matchingImages.length - 1));

    let toReturn = showImage(randomImage.getFile().getPath());
    if (delay != null)
    {
        sleep(delay);
    }
    return toReturn;
}