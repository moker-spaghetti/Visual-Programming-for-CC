Blockly.Lua['turtle_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_direction}()\n`;	//template literals
  return code;
};

Blockly.Lua['turtle_turn'] = function(block) {
  var dropdown_side = block.getFieldValue('side');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.turn${dropdown_side}()\n`;
  return code;
};