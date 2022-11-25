let turn= 1

for (let i = 0 ;i<9 ;i++){
    let newBtn = $(`<div class="btn" id="${i}"></div>`)
    $('#main').append(newBtn)
    
}


$('.btn').on('click', function(evt){
    if (!evt.target.classList.contains('player')){
    evt.target.classList.add('player')}
    turn = turn * -1
    
    $('#state').text(turn)}
)

$('#reset').on('click', function(evt){
    $('.player').removeClass('player')
})

$('#state').text(turn)