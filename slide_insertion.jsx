main();

function main() {

var project = app.project;
var projectItem = project.rootItem; 


var slideshowSequence = project.createNewSequence("slide", "id");  // EDIT THE FIRST ARGUEMENT TO CHANGE THE NAME OF THE SEQEUNCE

var s=[0,14,22,46,110,122,124];                                                     // EDIT THE TIMESTAMPS HERE


var x = s.length - 1;
for (var i = 0; i <=x+1; i++){ 
    s[i]=(Math.floor(s[i]/100)*60)+(s[i]%100);
}

var importedImages = getImageProjectItems(projectItem);
 
var videoTracks = slideshowSequence.videoTracks; 

var videoTrackOne = videoTracks[0];

var startTime = 0; 

//var thisTime = new Time();
//thisTime.seconds = parseInt(seconds); 
 for(var e = 1; e<=x; e++) {
     videoTrackOne.insertClip(importedImages[e-1], startTime);   
     startTime=parseInt(s[e]);
     try{videoTrackOne.clips[e-1].end = parseInt(s[e]); }catch(e){}
    }

} 

function getImageProjectItems(projectItem) {
        var projectImages = [];
        var thisName;
for(var i = 0; i < projectItem.children.numItems; i++) {
    thisName = projectItem.children[i].name;
    if(thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "jpg" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "jpeg" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "png") {
        projectImages.push(projectItem.children[i]);
        }
    }

return projectImages;
    }
