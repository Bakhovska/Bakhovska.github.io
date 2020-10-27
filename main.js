// 1045745283:AAHATS16qbbo2LKQiHpA46uuTMANrsZhoLs
// https://api.telegram.org/bot
// -402141665


let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');

show.onclick = function(){
    formSection.style.display = 'block';
    show.style.display = 'none';
}

send.onclick = function(){
    let name = document.getElementById('name').value;
    let phoneNumb = document.getElementById('phoneNumb').value;
    let message = document.getElementById('message').value;
    // console.log(name);
    // console.log(phoneNumb);
    // console.log(message);


    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1045745283:AAHATS16qbbo2LKQiHpA46uuTMANrsZhoLs/sendMessage?text= Name: ${name}, Phone number: ${phoneNumb}, Message: ${message}&chat_id=-402141665`,false);
    postInfo.send();
}