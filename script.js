let turn= 1

for (let i = 0 ;i<9 ;i++){
    let newBtn = $(`<div class="btn" id="${i}"></div>`)
    $('.btn').addClass('open')
    $('#main').append(newBtn)
    
}


$('.btn').on('click', function(evt){
    if (evt.target.classList.contains('open')){
        if (turn == 1){
            evt.target.classList.remove('open')
            evt.target.classList.add('player-one')
            turn = turn * -1

    }
    else { 
            evt.target.classList.remove('open')
            evt.target.classList.add('player-two')
            turn = turn*-1
        }
    $('#state').text(turn)
}
else{return}

})

$('#reset').on('click', function(evt){
    $('.player-one').removeClass('player-one')
    $('.player-two').removeClass('player-two')
    $('.btn').addClass('open')
    turn = 1
    $('#state').text(turn)
})

$('#state').text(turn)