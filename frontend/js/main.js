/*EFECTO MENÚ LATERAL*/

$('.btn-sidebar').on('click', function() {
    $('.wrapper').toggleClass('collapse-active');
});


$('.btn-sidebar-sm').on('click', function() {
    $('.wrapper').toggleClass('collapse-active');
});


/*PREVISUALIZAR IMAGEN*/

document.getElementById("customFile").onchange = function(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function() {
        let preview = document.getElementById('preview'),
            image = document.createElement('img');
        image.src = reader.result;
        preview.innerHTML = '';
        preview.append(image);
    };
}


document.getElementById("customFileMultiple").onchange = function(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function() {
        let preview = document.getElementById('previewMultiple'),
            image = document.createElement('img');
        image.src = reader.result;
        preview.innerHTML = '';
        preview.append(image);
    };
}

/*BUTON ABOVER*/

$(document).ready(function() {

    $('.btn-above').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
});