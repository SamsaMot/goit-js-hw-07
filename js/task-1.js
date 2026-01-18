const categoriesList = document.querySelector("#categories");

if (!categoriesList) {
  console.warn("Element with id 'categories' not found.");
} else {
  const categoryItems = categoriesList.querySelectorAll(".item");

  console.log(`Number of categories: ${categoryItems.length}`);

  categoryItems.forEach((item) => {
    const titleElement = item.querySelector("h2");
    const title = titleElement ? titleElement.textContent.trim() : "Unknown";
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
  });
}

