const button = document.getElementById('button');
const from_name = document.getElementById('name').value;
const email_id = document.getElementById('email_id').value;
const message = document.getElementById('description').value;

button.addEventListener("click",send_mail);



function send_mail() {
    
    var params = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('description').value,
    }
    emailjs.send("service_n8l6w2v", "template_2p6wp4o",params).then(function (res) {
        alert("Success" + res.status);
    })

    clear();
}

function clear() {
    from_name = '';
    email_id = '';
    message = '';
}