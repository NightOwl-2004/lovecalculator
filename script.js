let result = document.getElementById("result");
let loveValue = document.getElementById('lovevalue');

function checkloveper() {

    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;

    if (name == "") {
        alert(`Please enter your name`);
    }else if (name.length <=2){
        alert(`Minimum length is 3`);
    }else if (!isNaN(name)){
        alert(`Numbers are not allowed`);
    }

    else if (lname == "") {
        alert(`Please enter his/her name;`)
    }else if (lname.length <=2){
        alert(`Minimum length is 3`);
    }else if (!isNaN(lname)){
        alert(`Numbers are not aloud`);
    }

    else{
    let lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);
    loveValue.value = lovedata + "%";
 
    if (lovedata >= 80) {
        result.innerHTML = `Stay away from candles - your relationship is hot enough already!👩🏻‍❤️‍💋‍👨🏻`;
    }else if(lovedata >= 50 && lovedata < 80){
        result.innerHTML = `God Bless Your Relationship👩🏻‍❤️‍👨🏻`;
    }else if (lovedata >=25 && lovedata < 50) {
        result.innerHTML = `You need to spend some quality time with your partner👩🏻‍🤝‍👨🏻`;
    }else if (lovedata < 25){
        result.innerHTML = `Your love is like new bloomed flower which needs careful attention.`;
    }
    }

}