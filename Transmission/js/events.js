function changeDeleteButton(b, a) {
    if (b.which === 17) {
        $('[name="torrent_remove"]').attr("class", "torrent_button " + a)
    }
}
$(document).keydown(function () {
    changeDeleteButton(event, "remove_data")
});
$(document).keyup(function (a) {
    changeDeleteButton(a, "remove")
});
function applyFilter() {
    $.map(torrents, function (b, a) {
        b.filter()
    });
    setStatusVisibility()
}
$("#filter_type").change(function () {
    localStorage.torrentType = this.value;
    applyFilter()
});
$("#filter_input").bind("input", function () {
    localStorage.torrentFilter = this.value;
    applyFilter()
});
$("#filter_clear").click(function () {
    $(this).hide();
    $("#filter_input").val("");
    localStorage.torrentFilter = "";
    applyFilter()
});
$("#filter_input").keyup(function () {
    $("#filter_clear").css("display", (this.value === "") ? "none" : "block")
});
$("#menu_button").click(function (b) {
    var a = $(this).attr("class") !== "on";
    $("#menu").toggle(a);
    $(this).toggleClass("on", a);
    b.stopPropagation()
});
$("#turtle_button").click(function () {
    clearTimeout(refresh);
    port.postMessage({args: '"alt-speed-enabled": ' + !($(this).attr("class") === "on"), method: "session-set"});
    refreshPopup()
});
$("#list_wrapper").scroll(function (a) {
    clearTimeout(refresh);
    if (this.offsetHeight + this.scrollTop === this.scrollHeight) {
        refresh = setTimeout(refreshPopup, 3000)
    }
});