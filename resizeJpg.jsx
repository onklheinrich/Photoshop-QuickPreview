

doc = app.activeDocument;


var new_name = doc.name + 'new';

var old_width = doc.width;
var old_height = doc.height;

var new_width = prompt('Width','0','');

var new_height = (old_height/old_width) * new_width;
new_name = new_name + new_width.toString();
doc.resizeImage(UnitValue(new_width,"px"),UnitValue(new_height,"px"),null,ResampleMethod.BICUBIC);


function saveJPEG( doc, saveFile, qty ) {
	
     var saveOptions = new JPEGSaveOptions( );  
     saveOptions.embedColorProfile = true;  
     saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
     saveOptions.matte = MatteType.NONE;  
     saveOptions.quality = qty;   
     doc.saveAs( saveFile, saveOptions, true );  
}  
saveJPEG( app.activeDocument, new File('~/Desktop/' + new_name +'.jpg'), 10 );  

doc.activeHistoryState = doc.historyStates[doc.historyStates.length-2];

