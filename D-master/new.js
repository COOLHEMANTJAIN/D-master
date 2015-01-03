var folder1 = "PDF_downloads";
var folder2 = "DOCUMENTS_downloads";
var folder3 = "AUDIO_downloads";
var folder4 = "VIDEO_downloads";
chrome.downloads.onDeterminingFilename.addListener( 
  function (item, suggest) {
    if(isPDF(item)) suggest({filename: folder1 + "/" + item.filename});
    else if(isDOC(item)) suggest({filename: folder2 + "/" + item.filename});
    else if(isAUDIO(item)) suggest({filename: folder3 + "/" + item.filename});
     else if(isVIDEO(item)) suggest({filename: folder4 + "/" + item.filename});
    else suggest();
  }
);
function isDOC(item){
  if(item.mime === "application/doc") return true;
  else if (item.filename.match(/\.doc$/i)) return true;
  else if (item.filename.match(/\.docx$/i)) return true;
  else return false;
}
function isAUDIO(item){
  if(item.mime === "application/mp3") return true;
  else if (item.filename.match(/\.mp3$/i)) return true;
  else if (item.filename.match(/\.mpa$/i)) return true;
  else if (item.filename.match(/\.wma$/i)) return true;
  else if (item.filename.match(/\.wav$/i)) return true;
  else if (item.filename.match(/\.ra$/i)) return true;
  else if (item.filename.match(/\.mid$/i)) return true;
  else if (item.filename.match(/\.m4a$/i)) return true;
  else if (item.filename.match(/\.m3u$/i)) return true;
  else if (item.filename.match(/\.iff$/i)) return true;
  else if (item.filename.match(/\.aif$/i)) return true;
  else return false;
}
function isVIDEO(item){
  if(item.mime === "application/mp4") return true;
  else if (item.filename.match(/\.mp4$/i)) return true;
  else if (item.filename.match(/\.wmv$/i)) return true;
  else if (item.filename.match(/\.vob$/i)) return true;
  else if (item.filename.match(/\.swf$/i)) return true;
  else if (item.filename.match(/\.srt$/i)) return true;
  else if (item.filename.match(/\.rm$/i)) return true;
  else if (item.filename.match(/\.mpg$/i)) return true;
  else if (item.filename.match(/\.mov$/i)) return true;
  else if (item.filename.match(/\.m4v$/i)) return true;
  else if (item.filename.match(/\.flv$/i)) return true;
  else if (item.filename.match(/\.avi$/i)) return true; 
  else if (item.filename.match(/\.asx$/i)) return true;
  else if (item.filename.match(/\.asf$/i)) return true;
  else if (item.filename.match(/\.3gp$/i)) return true;
  else if (item.filename.match(/\.3g2$/i)) return true; 
  else return false;
}
function isPDF(item){
  if(item.mime === "application/pdf") return true;                                         
  else if (item.filename.match(/\.pdf$/i)) return true;
  else return false;
} 