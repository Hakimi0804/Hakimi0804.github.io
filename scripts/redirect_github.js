// window.location.href = "https://github.com/Hakimi0804";

function redirect(dest) {
    if (dest == "telegram") {
        console.log('beaming to telegram')
        window.location.href = "https://t.me/Hakimi0804";
    } else if (dest == "github") {
        console.log('beaming to github')
        window.location.href = "https://github.com/Hakimi0804";
    } else if (dest == "twitter") {
        console.log('beaming to twitter')
    } else if (dest == "discord") {
        console.log('beaming to discord html page');
        window.location.href = "../html/discord.html";
    } else if (dest == "back") {
        console.log('going to index.html')
        window.location.href = "../index.html"
    } else {
        console.log('something went wrong')
    }
}
