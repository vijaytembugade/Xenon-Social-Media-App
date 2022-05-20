export const checkImgUrl = (str) => {
  function isImage(str) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(str);
  }
  let a = document.createElement("a");
  a.href = str;
  return a.host && a.host != window.location.host && isImage(str);
};
