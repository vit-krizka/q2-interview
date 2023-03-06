const nxtButton = $('.nxt-button');
const nxtButtonText = $('.nxt-button-text');

nxtButton.hover(function () {
    $(this).animate({
        opacity: 1
    }, 350);
    nxtButtonText.animate({
        opacity: 1
    }, 350);
}, function () {
    $(this).animate({
        opacity: 0.79
    }, 350);
    nxtButtonText.animate({
        opacity: 0.79
    }, 350);
});

nxtButtonText.hover(function () {
    $(this).animate({
        opacity: 1
    }, 350);
    nxtButton.animate({
        opacity: 1
    }, 350);
}, function () {
    $(this).animate({
        opacity: 0.79
    }, 350);
    nxtButton.animate({
        opacity: 0.79
    }, 350);
});

nxtButton.click(() => {
    const pictures = $('.gallery-container').children();
    pictures.first().appendTo('.gallery-container');
});

nxtButtonText.click(() => {
    const pictures = $('.gallery-container').children();
    pictures.first().appendTo('.gallery-container');
});

const facebookButton = $('.facebook-button');
const twitterButton = $('.twitter-button');
const sitesButton = $('.sites-button');

facebookButton.hover(function () {
    $(this).children().attr("src", "/assets/facebook-white.svg");
    $(this).animate({
        width: '200px',
        backgroundColor: '#789376'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #789376',
        'backgroundColor': '#789376'
    });
    $(this).append('<p>&nbsp;&nbsp;&nbsp;Facebook</p>').css({ 'font-size': '26px', 'color': 'white' })
}, function () {
    $(this).children().attr("src", "/assets/facebook-black.svg");
    $(this).animate({
        width: '60px'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #0D9206',
        'backgroundColor': 'white'
    });
    $(this).children()[1].remove();
});

twitterButton.hover(function () {
    $(this).children().attr("src", "/assets/twitter-white.svg");
    $(this).animate({
        width: '200px',
        backgroundColor: '#789376'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #789376',
        'backgroundColor': '#789376'
    });
    $(this).append('<p>&nbsp;&nbsp;&nbsp;Twitter</p>').css({ 'font-size': '26px', 'color': 'white' })
}, function () {
    $(this).children().attr("src", "/assets/twitter-black.svg");
    $(this).animate({
        width: '60px'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #0D9206',
        'backgroundColor': 'white'
    });
    $(this).children()[1].remove();
});

sitesButton.hover(function () {
    $(this).children().attr("src", "/assets/sites-white.svg");
    $(this).animate({
        width: '200px',
        backgroundColor: '#789376'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #789376',
        'backgroundColor': '#789376'
    });
    $(this).append('<p>&nbsp;&nbsp;&nbsp;Share</p>').css({ 'font-size': '26px', 'color': 'white' })
}, function () {
    $(this).children().attr("src", "/assets/sites-black.svg");
    $(this).animate({
        width: '60px'
    }, 350);
    $(this).css({
        'border-radius': '30px / 30px',
        'display': 'flex',
        'border': '1px solid #0D9206',
        'backgroundColor': 'white'
    });
    $(this).children()[1].remove();
});