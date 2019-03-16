var slider_content = document.getElementById('box');
var image = ['slide1','slide2', 'slide3'];
var title = ['Itaque earum rerum hic tenetur','Nam libero tempore, cum soluta','Itaque earum rerum hic tenetur'];
var desc = ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium bolupatum deleniti atque corrupti','Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vestibulum in urna quis negue portt tor sagittis','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant um doloremque laudantum'];

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i= i+1;
    }else{
        i = 1;
    }
    slider_content.innerHTML = '<img src="img/'+image[i-1]+'.jpg" alt="slide-picture"><h3 class="img-carousel__title">'+title[i-1]+'</h3><p class="img-carousel__description">'+desc[i-1]+'</p>';
    console.log(text);
}

function prewImage(){
    if (i<image.length+1 && i>1) {
        i= i-1;
    }else{
        i = image.length;
    }
    slider_content.innerHTML = '<img src="img/'+image[i-1]+'.jpg" alt="slide-picture"><h3 class="img-carousel__title">'+title[i-1]+'</h3><p class="img-carousel__description">'+desc[i-1]+'</p>';
}