function show(res) {
    $('#table').html(res)
}

function check(arr) {
    let x = randomInteger(1,9);
    var button = document.getElementById(x).innerHTML;
    if (arr.includes(x) || button != "") {
        if (arr.length < 4) {
            check(arr);
        } else {
            return false;
        }
    } else {
        arr.push(x);
        document.getElementById(x).innerHTML = "O";
    }
}
let cells = document.getElementsByClassName('check');
game(cells);

function game(cells) {
    let i = 0;
    let arr = [];
    for (let cell of cells) {
        cell.addEventListener('click', function () {
            if (this.innerHTML == "") {
                this.innerHTML = 'X';
                check(arr);
            }
            if (isWin(cells)) {
                location.reload();
            } else if (i == 4) {
                alert('Ничья');
                location.reload();
            }
            i++;
        })
    }
}

function isWin(cells) {
    let arrs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let arr of arrs) {
        if (
            cells[arr[0]].innerHTML == cells[arr[1]].innerHTML &&
            cells[arr[1]].innerHTML == cells[arr[2]].innerHTML &&
            cells[arr[0]].innerHTML != ''
        ) {
            if (cells[arr[0]].innerHTML == 'X') {
                up();
                alert('Вы победили');
            } else {
                down();
                alert('Победили нолики');
            }
            return true;
        }
    }

    return false;
}


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function up() {
    var name;
    name = document.getElementById('name').innerHTML;
    $.ajax({
        url: '/main/index',
        type: 'GET',
        data: {name: name},
        success: function (res) {
            show(res);
        },
        error: function () {
            alert('error');
        }
    });
}

function down() {
    var username;
    username = document.getElementById('name').innerHTML;
    $.ajax({
        url: '/main/index',
        type: 'GET',
        data: {username: username},
        success: function (res) {
            show(res);
        },
        error: function () {
            alert('error');
        }
    });
}


