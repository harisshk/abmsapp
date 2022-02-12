
function send() {
    var link = "mailto:abmsapp@gmail.com"
        + "?cc="
        + "&subject=" + encodeURIComponent("New Assignment")
        + "&body=" + encodeURIComponent("Name:") + encodeURIComponent(document.getElementById('FullName').value) + "<br>"
        + encodeURIComponent("Mobile no. : ") + encodeURIComponent(document.getElementById('MobileNumber').value) + "<br>"
        + encodeURIComponent("email: ") + encodeURIComponent(document.getElementById('E-Mail').value)
        ;

    window.location.href = link;

}