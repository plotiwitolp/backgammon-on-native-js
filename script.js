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
    console.log(cells)

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

    }
    const dragEnter = function (ev) {
        ev.preventDefault()
        this.classList.add('hovered');
    }
    const dragLeave = function () {
        this.classList.remove('hovered');
    }
    const dragDrop = function () {
        this.append(checker)
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


    const start=()=>{
        whiteCheckers.forEach((checker)=>{
            cells[11].append(checker)
        });
        blackCheckers.forEach((checker)=>{
            cells[17].append(checker)
        });
    }
    start()
}



dragAndDrop()