document.addEventListener("DOMContentLoaded", () => {
  console.log("Git Summary Page Loaded Successfully!");

  const card = document.querySelector(".card");

  card.addEventListener("click", () => {
    card.classList.add("glow");

    setTimeout(() => {
      card.classList.remove("glow");
    }, 400);
  });
});
