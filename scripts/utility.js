function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  return elementText;
}

function getElementTextValueById(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setElementValueById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}


function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-c-seat");
  element.classList.add("bg-c-primary");
  element.classList.add("text-white");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-c-seat");
  element.classList.remove("bg-c-primary");
  element.classList.remove("text-white");
}


function addElementById(elementId) {
  const seatName = elementId;
  const innerHTML = `
  <tr id="seat-${seatName}">
    <td class="seat-no">${seatName}</td>
    <td>Economy</td>
    <td>550</td>
  </tr>`;
  const selectedTickets = document.getElementById('selected-tickets');
  selectedTickets.innerHTML += innerHTML;
}

function removeElementBySeatName(SeatName) {
  const seatNo = document.getElementById(SeatName);
    seatNo.remove()
}


function calculateDiscount(totalPrice,discountPercentage){
  const discount = totalPrice * discountPercentage/100;
  
  return discount;
}


function setAlertBytId(elementId,msg){
  document.getElementById(elementId).classList.remove('hidden');
  setElementValueById(elementId,msg);
  setTimeout(() => {
    document.getElementById(elementId).classList.add('hidden');
  }, 1500);
}

