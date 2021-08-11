const dragAndDrop = () => {
    const whiteCheckers = document.querySelectorAll(".whiteChecker");
    const blackCheckers = document.querySelectorAll(".blackChecker");
    const cellsTop = document.querySelectorAll('.cellTop')
    const cellsBottom = document.querySelectorAll('.cellBottom')
    let checker = null;
    const cellsTopArr = []
    const cellsBottomArr = []

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
            }
            else return elType;
        }


        const cellClass = getType(this, true);
        const checkerClass = getType(checker)

        if (!cellClass ||cellClass === checkerClass) {
            this.append(checker)
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
            cells[11].append(checker)
        });
        blackCheckers.forEach((checker) => {
            cells[17].append(checker)
        });
    }
    start()
}

dragAndDrop()