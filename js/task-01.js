const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories:`, categories.length);

const categoryList = categories.forEach(function (category) {
    console.log(`Category:`, category.firstElementChild.textContent);
    console.log(`Elements:`, category.lastElementChild.childElementCount);
});