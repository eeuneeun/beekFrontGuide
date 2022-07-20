function includeHtml() {
  return new Promise((resolve, reject) => {
    const includeTarget = document.querySelectorAll(".include_html");
    includeTarget.forEach(function (el, idx) {
      const targetFile = el.dataset.includeHtml;

      if (targetFile) {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState === XMLHttpRequest.DONE) {
            this.status === 200 ? (el.innerHTML = this.responseText) : null;
            this.status === 404 ? (el.innerHTML = "include not found.") : null;
          }
        };
        xhttp.open("GET", targetFile, true);
        xhttp.send();
        resolve("complete");
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  includeHtml()
    .then((value) => {
      value == "complete" && console.log("complete");
    })
    .catch((errMsg) => {
      console.error(errMsg);
    });
});
