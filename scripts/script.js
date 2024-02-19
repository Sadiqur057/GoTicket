const seats = document.getElementsByClassName("seat");
let seatCounts = 0;
let seatLeft = 40;
let ticketPrice = 550;
let totalPrice = getElementTextValueById("total-price");
let couponText;
let discountedPrice;
const couponForm = document.getElementById('coupon-form');

// handling onclick of seats
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const elementId = e.target.innerText;

    // checking existing ticket
    let existingSeatArr = [];
    const selectedSeats = document.getElementsByClassName("seat-no");
    for (const seat of selectedSeats) {
      const seatNo = seat.innerText;
      if (seatNo !== elementId);
      existingSeatArr.push(seatNo);
    }

    // handle Existing seats
    if (existingSeatArr.includes(elementId)) {
      setAlertBytId('warning-msg','Warning! Seat removed');
      removeBackgroundColorById(elementId);
      const seatName = "seat-" + elementId;
      // remove existing taken seat
      removeElementBySeatName(seatName);
      seatCounts--;
      seatLeft++;
      totalPrice -= ticketPrice;

      // limiting user can purchase upto 4 ticket
    } else if (seatCounts < 4) {
      setAlertBytId('success-msg','Success! Seat added');
      setBackgroundColorById(elementId);
      addElementById(elementId);
      seatCounts++;
      seatLeft--;
      totalPrice += ticketPrice;
    }else{
      setAlertBytId('error-msg',"Error! You can't select more than 4 seat");
    }

    // enable couple code input field on changes to selected seat and reset discount;
    couponForm.classList.remove('hidden');
    setElementValueById("discount", 0);
    setElementValueById("seat-taken", seatCounts);
    setElementValueById("seat-left", seatLeft);
    setElementValueById("total-price", totalPrice);
    setElementValueById("final-price", totalPrice);

  });
}

// handling enable/disable coupon code submit button
const couponCodeInputField = document.getElementById("coupon-code");
couponCodeInputField.addEventListener("keyup", function (e) {
  const text = e.target.value;
  couponText = text.split(" ").join("").toUpperCase();
  let disabledBtn = document.getElementById("coupon-apply-btn");

  // if user has selected four seat, then he can apply coupon code
  if(seatCounts===4){
    if (couponText === "NEW15" || couponText === "COUPLE20") {
      disabledBtn.removeAttribute("disabled");
    } else {
      disabledBtn.setAttribute('disabled',true);
    }
  }
});

// calculate discounted price on using coupon code
const couponApplyBtn = document.getElementById("coupon-apply-btn");

couponApplyBtn.addEventListener('click', function(){
  const price = getElementTextValueById('final-price');
  if(seatCounts===4){
    if (couponText === "NEW15"){
      discount = calculateDiscount(price,15);
      couponForm.classList.add('hidden');
      setAlertBytId('success-msg','Success! Coupon applied');
    }else if(couponText === "COUPLE20"){
      discount = calculateDiscount(price,20);
      couponForm.classList.add('hidden');
      setAlertBytId('success-msg','Success! Coupon applied')
    }else{
      setAlertBytId('error-msg',"Error! Not a valid coupon");
      discount = 0;
    }

    discount = Math.floor(discount);
    const discountedPrice = price - discount;
    setElementValueById('discount',discount) 
    setElementValueById('final-price',(discountedPrice)); 
  }else{
    setAlertBytId('error-msg','Error! You must select at least 4 seat');
  }
})


// handling enable/disable proceed button
const phoneNumberInputField = document.getElementById("phone");
phoneNumberInputField.addEventListener("keyup", function (e) {
  const text = e.target.value;
  let disabledBtn = document.getElementById("proceed-btn");

  // if user has selected at least one seat, and entered phone number then he can proceed
  if(seatCounts>0 && text.length>0){
    disabledBtn.removeAttribute("disabled");
  } else {
    disabledBtn.setAttribute('disabled',true);
  }
  
});