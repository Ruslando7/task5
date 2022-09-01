function show(res) {
    $('#table').html(res)
}
var clicks = 0;
$('.check').on('click', function () {
    var id = $(this).data('id');
    var button;
    button = document.getElementById(id).innerHTML;
    if (button == "") {
        sign = "X";
        document.getElementById(id).innerHTML = sign;
        clicks = ++clicks;
        if (clicks > 4) {
            win();
            $.ajax({
                success: function () {
                    alert('Ничья');
                },
                error: function () {
                    alert('Error');
                }
            });
            // alert('Ничья');
            location.reload();
            return false;
        }
        setO();
    }
    win();
});

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function setO() {
    var button;
    let i = randomInteger(1,9);
    button = document.getElementById(i).innerHTML;
    if (button == '') {

        /*Если бот должен отвечать именно через аякс*/
        $.ajax({
            success: function () {
                document.getElementById(i).innerHTML = "O";
            },
            error: function () {
                alert('error');
            }
        });

        /*Если же нет, то можно сделать проще: */
        /*document.getElementById(i).innerHTML = "O";*/
        /*В таком случае условия в функции win(), можно вытащить из аякса*/

    } else {
        setO();
    }
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


function win() {
    check = document.getElementsByClassName('check');
    $.ajax({
        success: function () {
            if (check[0].innerHTML == 'X' && check[1].innerHTML == 'X' && check[2].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[3].innerHTML == 'X' && check[4].innerHTML == 'X' && check[5].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[6].innerHTML == 'X' && check[7].innerHTML == 'X' && check[8].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[0].innerHTML == 'X' && check[3].innerHTML == 'X' && check[6].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[1].innerHTML == 'X' && check[4].innerHTML == 'X' && check[7].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[2].innerHTML == 'X' && check[5].innerHTML == 'X' && check[8].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[0].innerHTML == 'X' && check[4].innerHTML == 'X' && check[8].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }
            if (check[2].innerHTML == 'X' && check[4].innerHTML == 'X' && check[6].innerHTML == 'X') {
                up();
                alert('Победили крестики');
                location.reload();
            }


            if (check[0].innerHTML == 'O' && check[1].innerHTML == 'O' && check[2].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[3].innerHTML == 'O' && check[4].innerHTML == 'O' && check[5].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[6].innerHTML == 'O' && check[7].innerHTML == 'O' && check[8].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[0].innerHTML == 'O' && check[3].innerHTML == 'O' && check[6].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[1].innerHTML == 'O' && check[4].innerHTML == 'O' && check[7].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[2].innerHTML == 'O' && check[5].innerHTML == 'O' && check[8].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[0].innerHTML == 'O' && check[4].innerHTML == 'O' && check[8].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
            if (check[2].innerHTML == 'O' && check[4].innerHTML == 'O' && check[6].innerHTML == 'O') {
                    alert('Победили нолики');
                    down();
                    location.reload();
            }
        },
        error: function () {
            alert('Error');
        }

    });

}
