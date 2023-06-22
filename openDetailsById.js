function openDetailsById(id) {
  const detailsElement = document.getElementById(id);
  if (detailsElement) {
    detailsElement.open = true;
    detailsElement.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}
