const seats=document.getElementsByClassName('bus-seat');
for(let seat of seats)
 {
    seat.addEventListener('click',function(){
        seat.classList.remove('bg-slate-200');
        seat.classList.add('bg-green-500');
        let seatSelected=document.getElementById('seat-selected');
        let totalSeat=parseInt(seatSelected.innerText)+1;
        seatSelected.innerText=totalSeat;

        const seatLeft=document.getElementById('seat-left');
        let remainingSeat=parseInt(seatLeft.innerText)-1;
        seatLeft.innerText=remainingSeat;


    })
 }