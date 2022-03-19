/////////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTION
const getNum = element => {
    const num = element.value * 1
    if (Number.isNaN(num) || num <= 0) {
        alert('Vui lòng nhập số nguyên dương!')
        return
    }
    return num
}



/////////////////////////////////////////////////////////////////////////////////////
// BAI 1 
const e1 = document.querySelector('.e1')
const e1Btn = e1.querySelector('.e1Btn')
const e1TargetEl = e1.querySelector('.e1Target input')
const e1TargetShow = e1.querySelector('.e1TargetShow')
const e1Result = e1.querySelector('.e1Result')
const e1Find = num => {
    let sum = 0, i = 0
    while (sum < num) {
        i++
        sum += i
    }
    return i
}
e1Btn.addEventListener('click', e => {
    e.preventDefault()
    const e1Target = getNum(e1TargetEl)
    const result = e1Find(e1Target)
    e1TargetShow.textContent = e1Target.toLocaleString()
    e1Result.textContent = result.toLocaleString()

})

/////////////////////////////////////////////////////////////////////////////////////
// BAI 2 
const e2 = document.querySelector('.e2')
const e2Btn = e2.querySelector('.e2Btn')
const e2NumXEl = e2.querySelector('.e2NumX input')
const e2NumNEl = e2.querySelector('.e2NumN input')
const e2Result = e2.querySelector('.e2Result')
const e2Find = (numX, numN) => {
    const numNArr = Array.from({ length: numN }, (_, i) => i + 1)
    return numNArr.reduce((acc, el) => acc + numX**el,0)
}
e2Btn.addEventListener('click', e => {
    e.preventDefault()
    const e2NumX = getNum(e2NumXEl)
    const e2NumN = getNum(e2NumNEl)
    const result = e2Find(e2NumX, e2NumN)
    e2Result.textContent = result.toLocaleString()

})

/////////////////////////////////////////////////////////////////////////////////////
// BAI 3 
const e3 = document.querySelector('.e3')
const e3Btn = e3.querySelector('.e3Btn')
const e3TargetEl = e3.querySelector('.e3Target input')
const e3TargetShow = e3.querySelector('.e3TargetShow')
const e3Result = e3.querySelector('.e3Result')
const e3Find = num => {
    return Array.from({ length: num }, (_, i) => i + 1)
        .reduce((acc, el) => acc*el, 1)
}
e3Btn.addEventListener('click', e => {
    e.preventDefault()
    const e3Target = getNum(e3TargetEl)
    const result = e3Find(e3Target)
    e3TargetShow.textContent = e3Target.toLocaleString()
    e3Result.textContent = result.toLocaleString()
})

/////////////////////////////////////////////////////////////////////////////////////
// BAI 4 
const e4 = document.querySelector('.e4')
const e4Btn = e4.querySelector('.e4Btn')
const e4TargetEl = e4.querySelector('.e4Target input')
const e4Result = e4.querySelector('.e4Result')
const e4Find = num => {
    return Array.from({ length: num }, (_, i) => {
        return `<div class="w-8 h-8 rounded-sm bg-${(i + 1) % 2 === 0 ? 'red' : 'blue'}-500"></div>`
    })

}
e4Btn.addEventListener('click', e => {
    e.preventDefault()
    const e4Target = getNum(e4TargetEl)
    const result = e4Find(e4Target)
    e4Result.insertAdjacentHTML('afterbegin',result.join(''))
})

/////////////////////////////////////////////////////////////////////////////////////
// BAI 5 
const e5 = document.querySelector('.e5')
const e5Btn = e5.querySelector('.e5Btn')
const e5TargetEl = e5.querySelector('.e5Target input')
const e5TargetShow = e5.querySelector('.e5TargetShow')
const e5Result = e5.querySelector('.e5Result')
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const e5Find = num => {
    return Array.from({ length: num }, (_, i) => i + 1)
        .filter(el => isPrime(el))
}
e5Btn.addEventListener('click', e => {
    e.preventDefault()
    const e5Target = getNum(e5TargetEl)
    const result = e5Find(e5Target)
    e5TargetShow.textContent = e5Target.toLocaleString()
    e5Result.textContent = result.join(', ')
})


