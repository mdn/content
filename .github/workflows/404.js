function getContentsAfterHost() {
  const full = location.href;
  const path = location.pathname;

  return full.substring(full.indexOf(path));
}

window.addEventListener("DOMContentLoaded", () => {
  if (location.hostname.endsWith("content.dev.mdn.mozit.cloud")) {
    const link = document.createElement("a");
    link.href = `https://developer.mozilla.org${getContentsAfterHost()}`;
    link.textContent = "View on MDN production server";
    document.body.appendChild(link);
  }
});
