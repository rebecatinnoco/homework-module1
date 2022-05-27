//partners
var photo = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>"

//loop
for (var i=0; i<6; i++) {
    fileNames.push ("partner"+(i+1));
    photo.push ("<img src='images-2/partners/"+fileNames[i]+".png'>")
    image = openList + photo[i] + closeList;
    imageList.push(image)
}

//Display the images
document.getElementById("partners").innerHTML = imageList;