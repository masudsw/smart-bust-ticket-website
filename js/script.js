const seats=document.getElementsByClassName('bus-seat');
for(let seat of seats)
 {
    seat.addEventListener('click',function(){
        if(seat.classList.contains('bg-green-500'))
        {
            alert('You have already selected the seat. Please select other seat..');
            return;
        }
        seat.classList.remove('bg-slate-200');
        seat.classList.add('bg-green-500');
        let seatSelected=document.getElementById('seat-selected');
        let totalSeat=parseInt(seatSelected.innerText)+1;
        seatSelected.innerText=totalSeat;

        const seatLeft=document.getElementById('seat-left');
        let remainingSeat=parseInt(seatLeft.innerText)-1;
        seatLeft.innerText=remainingSeat;

        let h1=seat.innerText;
        let h2='Economy';
        let h3=550;

        const seatInfo=document.getElementById('seat-info');
        let html=`
        <div  class="bg-slate-200 flex justify-between px-8 mx-4">
            <h2>${h1}</h2>
            <h2>${h2}</h2>
            <h2>${h3}</h2>
          </div>
        `;
        seatInfo.innerHTML+=html;



    })
 }