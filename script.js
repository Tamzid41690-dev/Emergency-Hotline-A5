//funtionality 

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

