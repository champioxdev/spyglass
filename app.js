function setImageURL(id) {
    document.getElementById("preview").src = 'https://www.mobil-potsdam.de/fileadmin/templates_webcams/get_image2.php?type=2&pic=' + id + '&re=57c42a04fbe2e90a798e223cb6d231a7&dummy=' + parseInt(Math.floor(Math.random() * 2147483648));
}
function getID() {
    if (localStorage.getItem("lastCamera") == undefined) {
        localStorage.setItem("lastCamera", "62");
        changeImageURL("62");
        return 62;
    } else if (Number.parseInt(localStorage.getItem("lastCamera")) < 41) {
        localStorage.setItem("lastCamera", "90");
        changeImageURL("90");
        return 90;
    } else if (Number.parseInt(localStorage.getItem("lastCamera")) > 90) {
        localStorage.setItem("lastCamera", "41");
        changeImageURL("41");
        return 41;
    }
    return Number.parseInt(localStorage.getItem("lastCamera"));
}
function buttonEvent(change) {
    setImageURL(change + getID());
    localStorage.setItem("lastCamera", change + getID());
}
function downloadCurrent() {
    const link = document.getElementById("preview").src;
    const downloadHandler = document.createElement("a");
    downloadHandler.download = link;
    downloadHandler.click();
    document.removeChild(downloadHandler);
}