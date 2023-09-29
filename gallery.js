var photoList;
var listElementHTML;
var description;
var infobox;
var closeBtn;
var title;

photoList = document.getElementById('photoList');

function addPhoto() {
    for (i = 1; i <= 12; i++) {
        listElementHTML = `
        <li>
            <img class="photo" src="images/gallery/pet${i}.jpg">
            <span class="caption">Pet ${i}</span>
            <span class="description">Adorable animal</span>
        </li>`;
        photoList.innerHTML += listElementHTML
    }
}
addPhoto();



description = document.getElementsByClassName('description');
infoBox = document.getElementById('infoBox');
closeBtn = document.getElementById('closeBtn');
title = document.getElementById('title');

for (j = 0; j < 12; j++) {
    description[j].addEventListener("click", function () {
        // console.log('clicked');
        // console.log(infoBox);
        // infoBox.innerHTML = 'Hiiiiiii';
        infoBox.style.display = "block";

    })
}


closeBtn.addEventListener("click", function () {
    infoBox.style.display = "none";
})


// for (p of photo) {
//     p.addEventListener("mouseover", function () {
//         console.log('Mouse over')
//     })
//     p.addEventListener("mouseleave", function(){
//         console.log('Mouse leave')
//     })
// }

