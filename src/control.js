//introduce blockly into div
var toolbox;
var xhr = new XMLHttpRequest();
xhr.open('GET','src/blockly_base/toolbox.xml',false);
xhr.addEventListener('loadend',function(){
	if (xhr.status === 200 || xhr.status === 0){
		toolbox = xhr.responseText;
	} else {
		console.error("Failed to get toolbox.xml");
	}
})
xhr.send(null);

var options = { 
	toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true, 
	grid : {
		spacing : 20, 
		length : 1, 
		colour : '#888', 
		snap : false
	}, 
	zoom : {
		controls : true, 
		wheel : true, 
		startScale : 1, 
		maxScale : 3, 
		minScale : 0.3, 
		scaleSpeed : 1.2
	}
};
var workspace = Blockly.inject('blocklyContents', options);


var luaTextArea = document.getElementById('luaTextArea');


//realtime
function onWorkspaceUpdate(event){
	//lua transating
	var luaText = Blockly.Lua.workspaceToCode(workspace);
	luaTextArea.value = luaText;

	//saveXmlLink
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xmlText = Blockly.Xml.domToText(xml);
	var xmlBlob = new Blob([xmlText],{type:"application/xml"});
	var saveXmlLink = document.getElementById('saveXmlLink');
	saveXmlLink.href = window.URL.createObjectURL(xmlBlob);

	//saveLuaLink
	var luaBlob = new Blob([luaText],{type:"application/x-lua"});
	var saveLuaLink = document.getElementById("saveLuaLink");
	saveLuaLink.href = window.URL.createObjectURL(luaBlob);
}
workspace.addChangeListener(onWorkspaceUpdate);

//open workspace
var openXmlButton = document.getElementById('openXmlButton');
openXmlButton.addEventListener('change',function(event){
	var file = event.target.files[0];
	var reader = new FileReader();
	reader.readAsText(file);

	reader.onload = function(){
		var xml = Blockly.Xml.textToDom(reader.result);
		Blockly.Xml.domToWorkspace(xml, workspace);
	}
},false);

//copy lua
var copyLuaButton = document.getElementById('copyLuaButton');
copyLuaButton.onclick = function(){
	luaTextArea.selectionStart = 0;
	luaTextArea.selectionEnd = luaTextArea.value.length;
	luaTextArea.focus();
	document.execCommand('copy');
	luaTextArea.blur();
}