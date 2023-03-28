$(function(){
    console.log('made it here');
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "template.html",
            "text": "Template Page",
            "alt": "Template Link"
        },
        "3": {
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Simple and Complex Table Demonstration"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";
    /*need to change htmlstring and not links or link seperator*/

    for(var id in links){
        if(pathname === link[id]['url']) {
            htmlString += links[id]['text'];
            /*If pathname is the same as link url, then it will just be listed*/
        } else {
            htmlString += '<a href="' + link[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if (Number(id) < Object.keys(links).length) {
            /*if the current id is less than */
            htmlString += linkSeperator;
        }

    }

    $('#siteLinks').html(htmlString);
    /*use # to target id*/

});