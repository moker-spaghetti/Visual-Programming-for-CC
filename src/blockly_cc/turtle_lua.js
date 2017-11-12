Blockly.Lua['turtle_move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_direction}()\n`;
  return code;
};

Blockly.Lua['turtle_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.turn${dropdown_direction}()\n`;
  return code;
};

Blockly.Lua['turtle_select'] = function(block) {
  var number_slotnum = block.getFieldValue('slotNum');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.select(${number_slotnum})\n`;
  return code;
};

Blockly.Lua['turtle_attack'] = function(block) {
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}()\n`;
  return code;
};

Blockly.Lua['turtle_dig'] = function(block) {
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}()\n`;
  return code;
};

Blockly.Lua['turtle_place'] = function(block) {
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}()\n`;
  return code;
};

Blockly.Lua['turtle_drop'] = function(block) {
  var number_itemcount = block.getFieldValue('itemCount');
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}(${number_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_suck'] = function(block) {
  var number_itemcount = block.getFieldValue('itemCount');
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}(${number_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_refuel'] = function(block) {
  var number_itemcount = block.getFieldValue('itemCount');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.refuel(${number_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_transferto'] = function(block) {
  var number_itemcount = block.getFieldValue('itemCount');
  var number_slotnum = block.getFieldValue('slotNum');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.transferTo(${number_slotnum},${number_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_getitemcount'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.getItemCount()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getitemspace'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.getItemSpace()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getitemdetail'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.getItemDetail()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_inspect'] = function(block) {
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_func'] = function(block) {
  var text_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${text_func}\n`;
  return code;
};

Blockly.Lua['turtle_var'] = function(block) {
  var text_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${text_func}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_getfuellevel'] = function(block) {
  // TODO: Assemble Lua into code variable.
  var code = 'turtle.getFuelLevel()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turtle_ad_select'] = function(block) {
  var value_slotnum = Blockly.Lua.valueToCode(block, 'slotNum', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = `turtle.select(${value_slotnum})\n`;
  return code;
};

Blockly.Lua['turtle_ad_drop'] = function(block) {
  var value_itemcount = Blockly.Lua.valueToCode(block, 'itemCount', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}(${value_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_ad_suck'] = function(block) {
  var value_itemcount = Blockly.Lua.valueToCode(block, 'itemCount', Blockly.Lua.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('func');
  // TODO: Assemble Lua into code variable.
  var code = `turtle.${dropdown_func}(${value_itemcount})\n`;
  return code;
};

Blockly.Lua['turtle_ad_transferto'] = function(block) {
  var value_itemcount = Blockly.Lua.valueToCode(block, 'itemCount', Blockly.Lua.ORDER_ATOMIC);
  var value_slotnum = Blockly.Lua.valueToCode(block, 'slotNum', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = `turtle.transferTo(${value_slotnum},${value_itemcount})\n`;
  return code;
};