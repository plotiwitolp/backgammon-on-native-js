const testChecker = document.getElementById('testChecker');
const canvas = document.getElementById('canvas');

testChecker.onmousedown = (e) =>{
    testChecker.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(testChecker);

    testChecker.style.zIndex = 1000;

    function moveAt(e) {
        console.log(e.pageX - testChecker.offsetWidth / 2 + 'px', e.pageY - testChecker.offsetWidth / 2 + 'px')
        testChecker.style.left = e.pageX - testChecker.offsetWidth / 2 + 'px';
        testChecker.style.top = e.pageY - testChecker.offsetWidth / 2 + 'px';
    }
    canvas.onmousemove = function(e) {
        moveAt(e);
    }
    testChecker.onmouseup = function() {
        canvas.onmousemove = null;
        testChecker.onmouseup = null;
    }
    testChecker.ondragstart = function() {
        return false;
    };
    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
    shiftX = e.pageX - getCoords(testChecker).left;
    shiftY = e.pageY - getCoords(testChecker).top;

    testChecker.style.left = e.pageX - shiftX + 'px';
    testChecker.style.top = e.pageY - shiftY + 'px';

}
