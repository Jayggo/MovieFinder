document.querySelector('.open-button').addEventListener('click', ()=>{

     document.querySelector('.nav-left').classList.toggle('show'); 
     document.querySelector('.open-container').classList.toggle('hide');

});

document.querySelector('.close-button').addEventListener('click', ()=>{

    document.querySelector('.nav-left').classList.remove('show'); 
    document.querySelector('.open-container').classList.remove('hide');

});


/*-----------------SWITCHER-----------------*/

var plot = document.querySelector('.item-plot');
var cast = document.querySelector('.item-cast');
var rates = document.querySelector('.item-rates');
var pictures = document.querySelector('.item-pictures');
var trailer = document.querySelector('.item-trailer');

var contentPlot = document.querySelector('.content-plot');
var contentCast = document.querySelector('.content-cast');
var contentRates = document.querySelector('.content-rates');
var contentPictures = document.querySelector('.content-pictures');
var contentTrailer = document.querySelector('.content-trailer');

plot.addEventListener('click', ()=>{

    contentPlot.classList.add('show');
    contentCast.classList.remove("show");
    contentRates.classList.remove("show");
    contentPictures.classList.remove("show");
    contentTrailer.classList.remove("show");
});

cast.addEventListener('click', ()=>{

    contentCast.classList.add('show');
    contentPlot.classList.add("hide");
    contentPlot.classList.remove("show");
    contentRates.classList.remove("show");
    contentPictures.classList.remove("show");
    contentTrailer.classList.remove("show");
});

rates.addEventListener('click', ()=>{

    contentRates.classList.add('show');
    contentPlot.classList.add("hide");
    contentPlot.classList.remove("show");
    contentCast.classList.remove("show");
    contentPictures.classList.remove("show");
    contentTrailer.classList.remove("show");
});

pictures.addEventListener('click', ()=>{

    contentPictures.classList.add('show');
    contentPlot.classList.add("hide");
    contentPlot.classList.remove("show");
    contentCast.classList.remove("show");
    contentRates.classList.remove("show");
    contentTrailer.classList.remove("show");
});

trailer.addEventListener('click', ()=>{

    contentTrailer.classList.add('show');
    contentPlot.classList.add("hide");
    contentPlot.classList.remove("show");
    contentCast.classList.remove("show");
    contentRates.classList.remove("show");
    contentPictures.classList.remove("show");
});