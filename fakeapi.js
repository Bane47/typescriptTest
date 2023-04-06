"use strict";
function fakeapi() {
    fetch('')
        .then(response => response.json)
        .then(json => console.log(json));
}
fakeapi();
