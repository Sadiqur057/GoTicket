function getElementTextById(elementID) {
  const element = document.getElementById(elementID);
  const elementText = element.innerText;
  return elementText;
}

function setBackgroundColorById(elementID) {
  const element = document.getElementById(elementID);
  // console.log(element);
  element.classList.remove("bg-c-seat");
  element.classList.add("bg-c-primary");
  element.classList.add("text-white");
}

function removeBackgroundColorById(elementID) {
  const element = document.getElementById(elementID);
  // console.log(element);
  element.classList.add("bg-c-seat");
  element.classList.remove("bg-c-primary");
  element.classList.remove("text-white");
}


function addElementById(elementID) {
  const seatName = elementID;
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
    // console.log(seatNo)
}
