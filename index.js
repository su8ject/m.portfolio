const month = new Date().getMonth();

const giveClass = (className) => {
    document.querySelector("html").classList.add(className);
};

console.log(1 < 1);

if (1 < month && month < 5) {
    giveClass("spring");
} else if (4 < month && month < 8) {
    giveClass("summer");
} else if (7 < month && month < 11) {
    giveClass("autumn");
} else {
    giveClass("winter");
}