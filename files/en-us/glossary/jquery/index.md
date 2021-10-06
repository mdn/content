---
title: jQuery
slug: Glossary/jQuery
tags:
  - Glossary
  - JQuery
  - JavaScript
---
**jQuery** is a {{Glossary("JavaScript")}} {{Glossary("Library")}} that focuses on simplifying {{Glossary("DOM")}} manipulation, {{Glossary("AJAX")}} calls, and {{Glossary("Event")}} handling.

jQuery uses a format, `$(selector).action()` to assign an element(s) to an event. To explain it in detail, `$(selector)` will call jQuery to select `selector` element(s), and assign it to an event {{Glossary("API")}} called `.action()`.

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

The above code carries out the same function as the following code:

```js
window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};
```

Or:

```js
window.addEventListener("load", () => {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});
```

## See also

- {{Interwiki("wikipedia", "jQuery")}} on Wikipedia
- [jQuery Official Website](https://jquery.com/)
- [Official API reference documentation](https://api.jquery.com/)[](https://api.jquery.com/)
