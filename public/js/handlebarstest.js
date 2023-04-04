function fill_template() {
    var data = {
        list: [
            {Item: "Thing one"},
            {Item: "Thing one"},
            {Item: "Thing three"}
        ]
    };

var template = Handlebars.compile(document.querySelector("#template").innerHTML);
var filled = template(data)
document.querySelector("#output").innerHTML = filled;
}