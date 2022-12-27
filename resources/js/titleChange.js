const docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Alex Chen's Website";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
