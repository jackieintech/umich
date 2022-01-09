/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  var nameShippingRepeat = document.getElementById("shippingName");
  var zipShippingRepeat = document.getElementById("shippingZip");
  var nameBillingRepeat = document.getElementById("billingName");
  var zipBillingRepeat = document.getElementById("billingZip");
  if (document.getElementById("same").checked) {
    nameBillingRepeat.value = nameShippingRepeat.value;
    zipBillingRepeat.value = zipShippingRepeat.value;
  } else {
    nameBillingRepeat ="";
    zipBillingRepeat ="";
  }
}