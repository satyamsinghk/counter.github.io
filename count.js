{/* <button class="btn_first">Decrease</button>
<button class="btn_second">Reset</button>
<button class="btn_third">Increase</button> */}

const btnfirst = document.querySelector('.btn_first')
const btnsecond = document.querySelector('.btn_second')
const btnthird = document.querySelector('.btn_third')
const count = document.querySelector('.count')
const btncontainer = document.querySelector('.btn_container')

let a = 0;




btnfirst.addEventListener('click', () => {
    a--;
    count.textContent = `${a}`

    colorp()
})
btnthird.addEventListener('click', () => {
    a++;
    count.textContent = `${a}`
    colorp()

})
btnsecond.addEventListener('click', () => {
    a = 0
    count.textContent = `${a}`
    colorp()
})


const colorp = () => {
    if (a > 0) {
        count.style.color = 'blue'
    }
    else if (a < 0) {
        count.style.color = 'red'
    }
    else {
        count.style.color = 'green'
    }
}



