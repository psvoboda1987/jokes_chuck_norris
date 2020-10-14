window.onload = () => {

    let getJoke = document.getElementById('get-joke');

    getJoke.addEventListener('click', (event) => {

        event.preventDefault();

        initJoke();

    });

}

function initJoke() {

    getAjax(
        'ajax/get_joke.php',

        (reply) => {

            if (! reply) return;

            displayJoke(reply);

        }
    );

}

function displayJoke(reply) {

    let joke = document.getElementById('joke');
    joke.classList.remove('hide');
    joke.innerHTML = reply;

}

function getAjax(url, success) {
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
            success(xhr.responseText);
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}