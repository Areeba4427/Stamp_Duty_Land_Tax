//function to add commas 
function addCommasToValue() {

    let inputField = event.target;
    let value = inputField.value.replace(/,/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add commas to the value
    inputField.value = value;
}

[document.getElementById('purchase_price')].forEach(function (element) {
    element.addEventListener("input", addCommasToValue);
});

function addCommasToValue_two(value) {
   
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}


//function to have only numbers
function num(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    // console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 44) {
            return true;
        }
        return false;
    }
    return true;
}


function calculate(val){

    var result, taxable_income ;
    if (val <= 150000) {
        result =   0;
        taxable_income = val;
        document.getElementById("taxable_sum_1").textContent = "£" +  addCommasToValue_two(taxable_income);
      }
    else if (val <= 250000) {
        result =  (val - 150000) * 0.02;
        taxable_income = val - (150000);

        document.getElementById('tax3').textContent = "£" + 0;
        document.getElementById('tax2').textContent = "£" + result;
        document.getElementById("taxable_sum_1").textContent = "£" + addCommasToValue_two(150000);
        document.getElementById("taxable_sum_2").textContent = "£" + addCommasToValue_two(taxable_income);
        document.getElementById("taxable_sum_3").textContent = "£" + (0);
        
      }
    else {
        result =  ((250000 - 150000) * 0.02 + (val - 250000) * 0.05);
        taxable_income = val - (150000+100000);


        document.getElementById('tax2').textContent = "£" + addCommasToValue_two(2000);
        document.getElementById('tax3').textContent = "£" + addCommasToValue_two(result);
        document.getElementById("taxable_sum_1").textContent = "£" + addCommasToValue_two(150000);
        document.getElementById("taxable_sum_2").textContent = "£" + addCommasToValue_two(100000);
        document.getElementById("taxable_sum_3").textContent = "£" + addCommasToValue_two(taxable_income);
        
        

      }
      var effectiveRate = result / val * 100;

      
    document.getElementById("effective_rate").textContent = (effectiveRate).toFixed(1) + "%";
    document.getElementById("stamp_duty").textContent = "£" + addCommasToValue_two(result.toFixed(2));
     
}
  

document.getElementById('purchase_price').addEventListener("input", function() {
    calculate(removecomma(this.value));
  });

  

function removecomma(value) {
    value = value.replace(/,/g, '');    //to remove .
    return parseInt(value);
};

