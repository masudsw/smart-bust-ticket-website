const seats=document.getElementsByClassName('bus-seat');
let flag=true;
let count=0;
for(let seat of seats)
 {
    
    seat.addEventListener('click',function(){
        if(flag===false){
            alert('Please proceed to payment...');
            return;
        }
        count++;
        if(seat.classList.contains('bg-green-500'))
        {
            alert('You have already selected the seat. Please select other seat..');
            return;
        }
        if(count>4){
            alert('Sorry , you can not buy more than 4 seats at a time!!');
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

        let totalPrice=document.getElementById('total-price');
        convertedTotalPrice=parseInt(totalPrice.innerText);
        totalPrice.innerText=convertedTotalPrice+550;
        document.getElementById('grand-total').innerText=totalPrice.innerText;

    })
 }


 document.getElementById('btn-apply').addEventListener('click',function(){
      const inputCoupon=document.getElementById('input-coupon');
      let totalPrice=parseInt(document.getElementById('total-price').innerText);
      if(inputCoupon.value==='NEW15'){
        if(totalPrice===0){
         alert('You did not buy any ticket. Please buy ticket and then use your coupon');
         return;
        }
        totalPrice=totalPrice-totalPrice*0.15;
        document.getElementById('grand-total').innerText=totalPrice;
        const parent=inputCoupon.parentNode.parentNode.parentNode;
        parent.classList.add('invisible');
        flag=false;
        return;
      }
      else if(inputCoupon.value==='Couple 20'){
        if(totalPrice===0){
            alert('You did not buy any ticket. Please buy ticket and then use your coupon');
            return;
           }
           totalPrice=totalPrice-totalPrice*0.2;
           document.getElementById('grand-total').innerText=totalPrice;
           const parent=inputCoupon.parentNode.parentNode.parentNode;
           parent.classList.add('invisible');
           flag=false;
           return;
      }
      else{
        alert('Wrong coupon info');
      }

 })



 document.getElementById('btn-next').addEventListener('click',function(){
    if(parseInt(document.getElementById('total-price').innerText)===0){
        alert('Buy ticket please !!');
        return;
    }
     alert('congratulations!!')
 })