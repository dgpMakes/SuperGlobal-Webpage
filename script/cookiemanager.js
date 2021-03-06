function addCookie(cookie) {
    document.cookie = cookie.name + "=" + cookie.value + "; ";
}

function addCookies(cookies) {
    for (i in cookies) {
        cookie = cookies[i];
        document.cookie = cookie.name + "=" + cookie.value + "; ";
    }
}

function setCookie(cookieName, cookieValue) {
    addCookie({name: cookieName, value: cookieValue});
}

function getCookie(cookieName) {
    cookies = getAllCookies();
    for (i in cookies){
        if (cookies[i].name == cookieName){
            return cookies[i].value;
        }
    }
}

function getAllCookies() {
    rawCookies = document.cookie;
    arrayRawCookies = rawCookies.split("; ");
    cookies = [];

    for (i in arrayRawCookies) {

        cookie = {
            name: arrayRawCookies[i].split("=")[0],
            value: arrayRawCookies[i].split("=")[1]
        };
        cookies.push(cookie);

    }

    return cookies;

}
