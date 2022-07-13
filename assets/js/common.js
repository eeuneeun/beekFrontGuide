function codeWrapToggle() {
  const codeToggleBtn = document.querySelectorAll(".code_toggle_btn");

  codeToggleBtn &&
    codeToggleBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        item.innerHTML == "열기"
          ? (item.innerHTML = "닫기")
          : (item.innerHTML = "열기");

        e.target.parentElement.classList.toggle("active");
      });
    });
}

function contentsToggle() {
  const contentsToggleBtn = document.querySelectorAll(
    ".contents .list > li h4"
  );

  contentsToggleBtn &&
    contentsToggleBtn.forEach((item) => {
      item.addEventListener("click", (e) => {
        item.classList.toggle("active");
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  contentsToggle();
  codeWrapToggle();
  hljs.highlightAll();
});
