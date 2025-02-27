---
title: "javascript: URLs"
short-title: "javascript:"
slug: Web/URI/Reference/Schemes/javascript
page-type: reference
spec-urls: https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-javascript:-url-special-case
sidebar: urlsidebar
---

> [!WARNING]
> Using `javascript:` URLs on the web is discouraged as it may lead to execution of arbitrary code, similar to the ramifications of using [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). It may also reduce {{glossary("accessibility")}} because it deviates from normal link behavior.

**JavaScript URLs**, URLs prefixed with the `javascript:` scheme, are used as fake navigation targets that execute JavaScript when the browser attempts to navigate. If the URL evaluates to a string, it is treated as HTML and rendered by the browser.

## Syntax

JavaScript URLs start with the `javascript:` scheme and are followed by JavaScript code. The code will be parsed as a script.

```url
javascript:<script>
```

## Description

`javascript:` URLs can be used anywhere a URL is a navigation target. This includes, but is not limited to:

- The [`href`](/en-US/docs/Web/HTML/Element/a#href) attribute of an `<a>` or `<area>` element.
- The [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute of a `<form>` element.
- The [`src`](/en-US/docs/Web/HTML/Element/iframe#src) attribute of an `<iframe>` element.
- The [`window.location`](/en-US/docs/Web/API/Window/location) JavaScript property.
- The browser address bar itself.

> [!NOTE]
> Some other contexts that use URLs, such as the [`href`](/en-US/docs/Web/HTML/Element/link#href) attribute of `<link>` elements, do not allow `javascript:` URLs, because they are resource locations, not navigation targets. For these cases, if you want to write JavaScript inline, use [`data:`](/en-US/docs/Web/URI/Reference/Schemes/data) URLs with the `text/javascript` MIME type.

When a browser attempts to navigate to such a location, it parses and executes the script body. The script may have a _completion value_ (not a return value), which is the same value if the script were executed with [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). If the last statement is an [expression](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement), the completion value is the value of that expression. If this completion value is a string, that string is treated as an HTML document and the browser navigates to a new document with that content, using the same URL as the current page. No history entry is created. If the completion value is not a string, the browser only executes the code and does not navigate. Therefore, it's often recommended that if the script ends with a function call like `javascript:foo()`, you should prefix it with {{jsxref("Operators/void", "void")}} to prevent accidental navigation if the function happens to return a string.

`javascript:` navigation may be blocked by [content security policy](/en-US/docs/Web/HTTP/CSP) settings, in particular {{CSP("script-src")}}.

## Examples

### Using `javascript:` URLs as href targets

In this example, the `href` attribute of an `<a>` element is set to a `javascript:` URL that alerts a message when clicked:

```html example-bad
<a href="javascript:alert('Hello, world!')">Click me</a>
```

Because {{domxref("Window/alert", "alert()")}} returns `undefined`, the browser does not navigate to a new page. This is a bad practice because the link is actually not a hyperlink. Consider making it a button instead:

```html example-good
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Hello, world!");
  });
</script>
```

In this example, the `href` attribute of an `<a>` element is set to a `javascript:` URL that navigates to a new page with the content "Hello, world!":

```html example-bad
<a href="javascript:pageContent">Click me</a>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Note that because `javascript:` URLs do not create history entries, there's no way to go back to the previous page without refreshing.

### Using `javascript:` URLs as form actions

In this example, the `action` attribute of a `<form>` element is set to a `javascript:` URL that alerts a message when submitted:

```html example-bad
<form action="javascript:alert(myInput.value)">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
```

Instead of doing this, consider listening for the form's `submit` event and handling it with JavaScript:

```html example-good
<form id="myForm">
  <input id="myInput" />
  <input type="submit" value="Submit" />
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(document.getElementById("myInput").value);
  });
</script>
```

### Using `javascript:` URLs as iframe sources

In this example, the `src` attribute of an `<iframe>` element is set to a `javascript:` URL that navigates to a new page with the content "Hello, world!":

```html example-bad
<iframe src="javascript:pageContent"></iframe>
<script>
  // Use a var so it becomes a global variable and can be read elsewhere
  var pageContent = "Hello, world!";
</script>
```

Instead of doing this, consider setting the `srcdoc` attribute instead:

```html example-good
<iframe id="myFrame"></iframe>
<script>
  document.getElementById("myFrame").srcdoc = "Hello, world!";
</script>
```

### Using `javascript:` URLs with window.location

In this example, the `window.location` property is set to a `javascript:` URL that navigates to a new page with the content "Hello, world!":

```js example-bad
window.location = "javascript:'Hello world!'";
```

Instead of doing this, consider using [DOM APIs](/en-US/docs/Web/API/HTML_DOM_API) to modify the page content. For example:

```js example-good
document.body.textContent = "Hello, world!";
```

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
