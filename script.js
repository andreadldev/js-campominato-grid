const grid = document.getElementById("grid");
const btn = document.getElementById("btn");

function createSquare() {
    const div = document.createElement('div');
    div.classList.add("square");
    return div;
}

btn.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        let element = createSquare();
        element.addEventListener('click', function () {
            this.classList.toggle('active');
        })
        element.innerHTML = i;
        grid.append(element);
    }
}, {once: true});

