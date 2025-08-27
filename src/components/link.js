import { navigate } from "../routes";

export const mountLink = (label, route) => {
  const link = document.createElement("a");
  link.innerHTML = label;
  link.href = "javascript:void(0)";
  link.addEventListener("click", () => {
    console.log('hi')
    console.log(route)
    navigate(route);
  });
  return link;
};
