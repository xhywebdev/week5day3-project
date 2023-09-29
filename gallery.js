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
            <img class="photo" id="img${i}" src="images/gallery/pet${i}.jpg" alt="Angkor Wat">
            <span class="caption">Pet ${i}</span>
            <span class="description">Adorable animal</span>
            <div class="backdrop"></div>

            <div class="box">
                <div class="close">x</div>
            </div>
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

description[0].addEventListener("click", function () {
    // console.log('clicked');
    // console.log(infoBox);
    // infoBox.innerHTML = 'Hiiiiiii';
    infoBox.style.display = "block";

})

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


$(document).ready(function () {
    /* Open lightbox on button click */
    for (i = 1; i <= 12; i++) {
        $(`#img${i}`).click(function () {
            $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
            $('.box').fadeIn();

            //Check if lightbox has an image
            if ($('.box').contents('img')) {
                $('.box').contents().remove('img'); //If true, clear image
            }

            //Get text content in attribute
            var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

            if ($altvalue == "Angkor Wat") {
                // var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
                var img = $(`#img1`).clone(); //Duplicate DOM element
                $('.box').append(img); //Insert duplicated element in another element
            }
        });
    }


    /* Click to close lightbox */
    $('.close, .backdrop').click(function () {
        $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

