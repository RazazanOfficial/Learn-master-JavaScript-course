// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a.getAttribute("href"));

const aTow = document.querySelector(".a-tow");
console.log(aTow.setAttribute("href", "https://varzesh3.com"));
