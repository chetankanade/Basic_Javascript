function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str1.toLowerCase();

  a = a.split("").sort().join("");
  b = a.split("").sort().join("");

  return a === b;
}

console.log(isAnagram("listen", "silent"));
