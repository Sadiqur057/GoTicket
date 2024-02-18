const seats = document.getElementsByClassName("seat");
let seatCounts = 0;
let seatLeft = 40;
let ticketPrice = 550;
let totalPrice = getElementTextValueById("total-price");
let couponText;
let discountedPrice;

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
      removeBackgroundColorById(elementId);
      const seatName = "seat-" + elementId;
      // remove existing taken seat
      removeElementBySeatName(seatName);
      seatCounts--;
      seatLeft++;
      totalPrice -= ticketPrice;

      // limiting user can purchase upto 4 ticket
    } else if (seatCounts < 4) {
      setBackgroundColorById(elementId);
      addElementById(elementId);
      seatCounts++;
      seatLeft--;
      totalPrice += ticketPrice;
    }

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
  if (couponText === "NEW15" || couponText === "COUPLE20") {
    disabledBtn.removeAttribute("disabled");
  } else {
    disabledBtn.setAttribute('disabled',true);
  }
});

// calculate discounted price on using coupon code

const couponApplyBtn = document.getElementById("coupon-apply-btn");

couponApplyBtn.addEventListener('click', function(){
  const price = getElementTextValueById('final-price')
  if (couponText === "NEW15"){
    discount = calculateDiscount(price,15);
  }else if(couponText === "COUPLE20"){
    discount = calculateDiscount(price,20);
  }
  const discountedPrice = price - discount;
  setElementValueById('discount',discount) 
  setElementValueById('final-price',(discountedPrice)); 
})
