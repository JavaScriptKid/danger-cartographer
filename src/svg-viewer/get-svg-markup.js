export default function() {
    var $markup = $('#map-svg').clone();
    $markup.attr("xmlns", "http://www.w3.org/2000/svg");
    $markup.attr("xml:space", "preserve");
    $markup.prepend("<style>svg {overflow:visible}</style>");

    var html = String($markup[0].outerHTML.replace(/reactid/g, "oldreactid"));

    return html;
}