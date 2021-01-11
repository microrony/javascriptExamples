function sortByLength(strs) {
    let sortArr = strs.sort((a, b) => a.length - b.length);
    return sortArr;
}
