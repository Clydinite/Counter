function increment(n, idPostfix){
    const number = document.getElementById(`number-${idPostfix}`)
    var value = parseInt(number.innerHTML)
    number.innerHTML = value + n
}