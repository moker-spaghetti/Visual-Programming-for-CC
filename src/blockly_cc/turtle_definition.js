Blockly.Blocks['turtle_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move to")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["back","back"], ["up","up"], ["down","down"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("move turtle");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn to")
        .appendField(new Blockly.FieldDropdown([["right","Right"], ["left","Left"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select slot")
        .appendField(new Blockly.FieldNumber(1, 1, 16, 1), "slotNum");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_equip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("equip tool on")
        .appendField(new Blockly.FieldDropdown([["right","Right"], ["left","Left"]]), "side");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_attack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attack on")
        .appendField(new Blockly.FieldDropdown([["forward","attack"], ["up","attackUp"], ["down","attackDown"]]), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_dig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dig on")
        .appendField(new Blockly.FieldDropdown([["forward","dig"], ["up","digUp"], ["down","digDown"]]), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("place block at")
        .appendField(new Blockly.FieldDropdown([["forward","place"], ["up","placeUp"], ["down","placeDown"]]), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_drop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("drop")
        .appendField(new Blockly.FieldNumber(64, 1, 64, 1), "itemCount")
        .appendField("Items at")
        .appendField(new Blockly.FieldDropdown([["forward","drop"], ["up","dropUp"], ["down","dropDown"]]), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_suck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("suck")
        .appendField(new Blockly.FieldNumber(64, 1, 64, 1), "itemCount")
        .appendField("Items at")
        .appendField(new Blockly.FieldDropdown([["forward","suck"], ["up","suckUp"], ["down","suckDown"]]), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_refuel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("refuel using")
        .appendField(new Blockly.FieldNumber(64, 1, 64, 1), "itemCount")
        .appendField("items");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_transferto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("transfer")
        .appendField(new Blockly.FieldNumber(64, 1, 64, 1), "itemCount")
        .appendField("Items to slot")
        .appendField(new Blockly.FieldNumber(0, 1, 16, 1), "slotNum");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_craft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("craft")
        .appendField(new Blockly.FieldNumber(64, 1, 64, 1), "itemCount")
        .appendField("Items");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getselectedslot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Currently selected slot num");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemcount'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("item number of slot")
        .appendField(new Blockly.FieldNumber(1, 1, 16, 1), "slotNum");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemspace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("item space of slot")
        .appendField(new Blockly.FieldNumber(1, 1, 16, 1), "slotNum");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_getitemdetail'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("item detail of slot")
        .appendField(new Blockly.FieldNumber(1, 1, 16, 1), "slotNum");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("whether block exists in")
        .appendField(new Blockly.FieldDropdown([["forward","detect"], ["up","detectUp"], ["down","detectDown"]]), "func");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_inspect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("inspect the block at")
        .appendField(new Blockly.FieldDropdown([["forward","inspect"], ["up","inspectUp"], ["down","inspectDown"]]), "func");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_func'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.")
        .appendField(new Blockly.FieldTextInput("forward()"), "func");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turtle.")
        .appendField(new Blockly.FieldTextInput("forward()"), "func");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};