/************* VENDA.HTML SCRIPTS *************/
let maxValue = 70; //mil
$('#filterBar').on("change mousemove input", function() {
  //console.log($(this).val());
  currentValue = Math.round( (maxValue * $(this).val()) / 100);
  $('#filterValue').html('R$ ' +  currentValue + '.000,00');
});