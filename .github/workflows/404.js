window.addEventListener("DOMContentLoaded", () => {
  if (document.location.hostname.endsWith("content.dev.mdn.mozit.cloud")) {
    const link = document.createElement("a");
    link.href = `https://developer.mozilla.org${location.pathname}`;
    link.textContent = "View on MDN production server";
    document.body.appendChild(link);
  }
});
