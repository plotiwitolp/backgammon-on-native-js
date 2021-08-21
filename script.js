const dragAndDrop = () => {
    const whiteCheckers = document.querySelectorAll(".whiteChecker");
    const blackCheckers = document.querySelectorAll(".blackChecker");
    const cellsTop = document.querySelectorAll('.cellTop')
    const cellsBottom = document.querySelectorAll('.cellBottom')
    let checker = null;
    const cellsTopArr = []
    const cellsBottomArr = []

    let arrs = [...document.querySelectorAll(".cellTop")].concat([...document.querySelectorAll(".cellBottom")])
    arrs.map(el=> {
        let div = document.createElement('div');
        div.className = "addedCell";
        return  el.append(div)
    })

    const oldCellsArr = document.querySelectorAll(".cell");
    const newCellsArr = [...oldCellsArr]
    const firstPart = [...newCellsArr.splice(6, 6).reverse()]
    const secondPart = [...newCellsArr.splice(12, 6).reverse()]
    const thirdPart = [...newCellsArr.splice(0, 12).reverse()]

    const cellsArr = firstPart.concat(secondPart, thirdPart)
    // console.log(cellsArr)
    

    cellsTop.forEach((cell) => {
        cellsTopArr.push(cell)
    })
    cellsBottom.forEach((cell) => {
        cellsBottomArr.push(cell)
    })
    const cells = cellsTopArr.concat(cellsBottomArr)
    const dragStart = function (ev) {
        setTimeout(() => {
            checker = ev.target;
            ev.target.classList.add('hide')

        }, 0)
    }
    const dragEnd = function (ev) {
        ev.target.classList.remove('hide')
    }
    const dragOver = function (ev) {
        ev.preventDefault()
        this.classList.add('hovered');

    }
    const dragEnter = function (ev) {
        ev.preventDefault()
        this.classList.add('hovered');
    }
    const dragLeave = function () {
        this.classList.remove('hovered');
    }
    const dragDrop = function () {
        const getType = (el, isCell) => {
            const elType = isCell ? el.childNodes[0] && el.childNodes[0].className : el.className;
            const elArr = elType && elType.split(' ')
            if (Array.isArray(elArr)) {
                return elArr.find((el) => {
                    if (el === 'blackChecker' || el === 'whiteChecker') return el;
                })
            } else return elType;
        }
        const cellClass = getType(this, true);
        const checkerClass = getType(checker)

        if (!cellClass || cellClass === checkerClass) {
            this.prepend(checker)
        }
        this.classList.remove('hovered');
    }
    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })
    blackCheckers.forEach((checker) => {
            checker.addEventListener('dragstart', dragStart);
            checker.addEventListener('dragend', dragEnd)
        }
    )
    whiteCheckers.forEach((checker) => {
            checker.addEventListener('dragstart', dragStart);
            checker.addEventListener('dragend', dragEnd)
        }
    )
    const start = () => {
        whiteCheckers.forEach((checker) => {
            cells[11].prepend(checker)
        });
        blackCheckers.forEach((checker) => {
            cells[17].prepend(checker)
        });
    }
    start()
}
dragAndDrop()

const dicesPlaceLeft = document.querySelector("#dicesPlaceLeft")
const dicesPlaceRight = document.querySelector("#dicesPlaceRight")
const changePlayerBtn = document.querySelector("#changePlayerBtn")
const changeText = document.querySelector(".changeText")

let dice1 = null;
let dice2 = null;

const dicesRoll = () => {
    const showRandomNum = () => {
        return Math.floor(Math.random() * 6 + 1)
    }
    dice1 = showRandomNum()
    dice2 = showRandomNum()

    return `<div><div class='dice'>${dice1}</div><div class='dice'>${dice2}</div></div>`
}

if (!changeText.innerHTML) {
    changeText.innerHTML = 'START GAME'
}

changePlayerBtn.addEventListener('click', (ev) => {
    if (!dicesPlaceLeft.innerHTML) {
        dicesPlaceLeft.innerHTML += dicesRoll()
        dicesPlaceRight.innerHTML = ''
    } else {
        dicesPlaceRight.innerHTML += dicesRoll()
        dicesPlaceLeft.innerHTML = ''
    }

    if (dicesPlaceLeft.innerHTML) {
        changeText.innerHTML = `change to white`

    } else {
        changeText.innerHTML = `change to black`
    }



})










