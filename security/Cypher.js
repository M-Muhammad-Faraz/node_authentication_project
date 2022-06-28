const encrypt = (data) => {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return data.replace(
    /[a-z]/gi,
    (letter) => cipher[originalAlpha.indexOf(letter)]
  );
};
const decrypt = (data) => {
  if (data) {
    const cipher = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalAlpha =
      "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return data.replace(
      /[a-z]/gi,
      (letter) => cipher[originalAlpha.indexOf(letter)]
    );
  }
  return "[{}]";
};
module.exports = {
  encrypt,
  decrypt,
};
