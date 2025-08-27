import { renderDetailsPage } from "../pages/detail";
import { renderHomePage } from "../pages/home";

export const navigate = (route) => {
  const viewDiv = document.getElementById("view");
  viewDiv.innerHTML = "";
  if (["", "home"].includes(route)) {
    renderHomePage();
  }
  if (route === "details") {
    renderDetailsPage()
  }
};
