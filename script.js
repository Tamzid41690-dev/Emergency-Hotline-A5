//shared Function//

function callbtncost(id , alertmsg){
    const callbtn = document.getElementById(id);
    callbtn.addEventListener('click', function() {
        const coin = parseInt(document.getElementById('coin').innerText);
        if(coin >= 20){
            alert(alertmsg);
            document.getElementById('coin').innerText = coin - 20;
        }
        else{
            alert('Insufficient coins to make a call.');
            return;
        }
    });
};

function callhistory(id,id2,id3){
    const callhistorybtn = document.getElementById(id);
    callhistorybtn.addEventListener('click', function() {
        const callhistory = document.getElementById('call-history');
        const div = document.createElement('div');
        const serviceName = document.getElementById(id2).innerText;
        const serviceNumber = document.getElementById(id3).innerText;
        div.innerHTML = `
        <div class="flex justify-between gap-4 items-center m-2 bg-gray-50 p-3 rounded-2xl">
                <div>
                    <h1 class="font-bold">${serviceName}</h1>
                    <p class="text-[#5c5c5c]">${serviceNumber}</p>
                </div>
                <p>${new Date().toLocaleDateString()}</p>
        `;
        callhistory.appendChild(div);

    });
};

//Shared Function ends here //
// call history functionality //

callhistory('call-b1','service-name-1','service-num-1');
callhistory('call-b2','service-name-2','service-num-2');
callhistory('call-b3','service-name-3','service-num-3');
callhistory('call-b4','service-name-4','service-num-4');
callhistory('call-b5','service-name-5','service-num-5');
callhistory('call-b6','service-name-6','service-num-6');
callhistory('call-b7','service-name-7','service-num-7');
callhistory('call-b8','service-name-8','service-num-8');
callhistory('call-b9','service-name-9','service-num-9');
// call history functionality ends here //

//heart icon and heart count //

document.getElementById('hi1').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi2').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi3').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi4').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi5').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi6').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi7').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi8').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
document.getElementById('hi9').addEventListener('click', function() {
   const countElement = document.getElementById('heart-count').innerText;
   const count = parseInt(countElement);
    document.getElementById('heart-count').innerText = count + 1;
});
//heart icon and heart count ends here //

// call button functionality //

callbtncost('call-b1','Calling National emergency service 999....');
callbtncost('call-b2','Calling Police Helpline 999....');
callbtncost('call-b3','Calling Fire service 999....');
callbtncost('call-b4','Calling Ambulance service 1994-999999....');
callbtncost('call-b5','Calling Women and child Helpline 109....');
callbtncost('call-b6','Calling Anti Curroption Helpline 106....');
callbtncost('call-b7','Calling Electrcity Helpline 16216....');
callbtncost('call-b8','Calling BRAC Helpline 16445....');
callbtncost('call-b9','Calling Bangladesh Railway Helpline 999....');

//clear button functionality //
document.getElementById('clear-btn').addEventListener('click', function() {
    const callhistory = document.getElementById('call-history');
    callhistory.innerHTML = '';
});

