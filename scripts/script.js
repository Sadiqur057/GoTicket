const seats = document.getElementsByClassName('seat');

for(const seat of seats){
  seat.addEventListener('click',function(e){
    // console.log(e.target.innerText);
    const elementId = e.target.innerText;
    
    // checking existing ticket
    let existingSeatArr = [];
    const selectedSeats = document.getElementsByClassName('seat-no');
    for(const seat of selectedSeats){
      const seatNo= seat.innerText;
      if(seatNo !== elementId);
        existingSeatArr.push(seatNo);
    }
    console.log(elementId);
    console.log(existingSeatArr.includes('C2'))

    // handle Existing seats
    if(existingSeatArr.includes(elementId)){
      removeBackgroundColorById(elementId);
      const seatName = "seat-"+elementId
      removeElementBySeatName(seatName);
      
    }else{
      setBackgroundColorById(elementId);
      addElementById(elementId);
    }


    // console.log(elementId);
   
  })
}

