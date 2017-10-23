Blockly.Blocks['turtle_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move to")
        .appendField(new Blockly.FieldDropdown([["forward","forward"], ["back","back"], ["up","up"], ["down","down"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turtle_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn to")
        .appendField(new Blockly.FieldDropdown([["Right","Right"], ["Left","Left"]]), "side");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};