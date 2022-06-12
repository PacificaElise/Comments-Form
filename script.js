"use strict"

//интерфейс для анонимных комментариев со спамфильтром
document.addEventListener('DOMContentLoaded', function checkStorage (event) {
    let avatar = localStorage.getItem('avatar');
    let name = localStorage.getItem('name');
    if (name!=null) {
        document.getElementById("author").value = name;
    }
    if (avatar!=null) {
        document.getElementById("photo").src = avatar;
        document.getElementById('divImg').innerHTML = `<img src="${localStorage.getItem('avatar')}" alt="photo" id="photo" />`
    } else {document.getElementById('divImg').innerHTML = `<img src="${localStorage.getItem('avatar')}" alt="photo" id="photo" />`
    document.getElementById('divImg').innerHTML = `<img src=" https://catherineasquithgallery.com/uploads/posts/2021-02/1612447191_70-p-chelovechek-na-serom-fone-82.jpg" alt="photo" id="photo" />`;
    } 
}) 

function sendMessage(author, comment) {
    document.querySelector(".comments").innerHTML += `<img/>  <span class = "name">${author}:</span><span class = "comment">${comment}</span></br>`;

}

function checkMessage() {
let author = document.getElementById("author").value;
let comment = document.getElementById("comment").value;
photo.classList.add ('small');
document.querySelector('.comments').insertAdjacentElement("afterbegin", photo);

if (localStorage.getItem('avatar')==null) {
    localStorage.setItem('avatar', photo.src);
}

if (localStorage.getItem('name')==null) {
    localStorage.setItem('name', author);
}
sendMessage(author, comment);
}


document.querySelector('.btn1').addEventListener ('click', function() {
    if (document.getElementById('author').value == "") {
        document.getElementById("errorMessage").innerHTML = "Необходимо ввести имя!<br>";
      }  else {
    document.getElementById("errorMessage").innerHTML = "";
    checkMessage();
    document.getElementById('comment').value = "";}
});

document.querySelector('.btn2').addEventListener ('click', function() {
    document.getElementById('comment').value = "";
});

document.querySelector('.btn3').addEventListener ('click', function() {
document.querySelector(".comments").innerHTML = "";
if (localStorage.getItem('avatar') == null) {
    document.getElementById('divImg').innerHTML = `<img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612447191_70-p-chelovechek-na-serom-fone-82.jpg" alt="photo" id="photo" />`;
} else {
document.getElementById('divImg').innerHTML = `<img src="${localStorage.getItem('avatar')}" alt="photo" id="photo" />`};
});


document.getElementById('avatars').addEventListener ('change', function() {
    document.getElementById('photo').src = this.options[this.selectedIndex].value;
    if ((this.options[this.selectedIndex].value) == 0) {
        document.getElementById('photo').src = "https://catherineasquithgallery.com/uploads/posts/2021-02/1612447191_70-p-chelovechek-na-serom-fone-82.jpg";
    }

});

document.getElementById("clear").addEventListener('click', function() {
    localStorage.clear();});
    

  
