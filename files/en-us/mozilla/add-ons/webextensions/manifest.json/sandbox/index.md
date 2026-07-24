---
title: sandbox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sandbox
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.sandbox
sidebar: addonsidebar
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"sandbox": {
 "pages": ["sandbox.html"]
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Use the `sandbox` key to designate one or more of an extension's pages as **sandboxed pages**.

Sandboxed pages are loaded with a unique, opaque origin, instead of the extension's usual `moz-extension://` origin. As a result:

- Sandboxed pages can't access [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API). The `browser` and `chrome` global objects are not available.
- Sandboxed pages can't access, and can't be accessed by, other pages in the extension, except by using {{DOMxRef("Window.postMessage()")}}.

A sandboxed page can be given a more permissive [content security policy (CSP)](#content_security_policy_for_sandboxed_pages) than the rest of the extension. This includes a CSP that permits [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and similar constructs that are blocked by an extension's [default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy). Because a sandboxed page can't use WebExtension APIs or reach the rest of the extension directly, this can be done without weakening the security of the extension as a whole.

This makes the `sandbox` key useful for including a third-party library that relies on `eval()` or `new Function()`, such as some templating engines: load the library in a sandboxed page, and use `postMessage()` to send it data from, and return results to, the rest of the extension.

## Manifest V2 syntax

In Manifest V2, `sandbox` is an object with these properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>pages</code></td>
      <td><code>Array</code> of <code>String</code></td>
      <td>
 Required. A list of paths, relative to manifest.json, to the extension's sandboxed pages.
      </td>
    </tr>
    <tr>
      <td><code>content_security_policy</code></td>
      <td><code>String</code></td>
      <td>
 Optional. The content security policy applied to the sandboxed pages. See <a href="#content_security_policy_for_sandboxed_pages">Content security policy for sandboxed pages</a>.
      </td>
    </tr>
  </tbody>
</table>

```json
"sandbox": {
  "pages": ["sandbox.html"],
  "content_security_policy": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

## Manifest V3 syntax

In Manifest V3, `sandbox` only supports the `pages` property:

```json
"sandbox": {
  "pages": ["sandbox.html"]
}
```

The content security policy for sandboxed pages is instead set using the `sandbox` property of the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key:

```json
"content_security_policy": {
  "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

## Content security policy for sandboxed pages

If a policy is not supplied, sandboxed pages get this default content security policy:

```plain
sandbox allow-scripts; script-src 'self';
```

This isolates a sandboxed page from the rest of the extension, but doesn't allow `eval()` or similar constructs. To permit these, include `'unsafe-eval'` (or `'wasm-unsafe-eval'` for [WebAssembly](/en-US/docs/WebAssembly)) in the `script-src` directive of a custom policy.

> [!NOTE]
> Chrome has a more permissive default sandboxed pages CSP: `sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';`.

Any custom policy supplied for sandboxed pages must meet these requirements:

- It must include the {{CSP("sandbox")}} directive.
- The {{CSP("sandbox")}} directive must not include the `allow-same-origin` keyword. Allowing this would give the page access to the rest of the extension's origin, defeating the purpose of sandboxing it.

## Example

This example loads a third-party templating library that uses `eval()`-like constructs into a sandboxed page, and uses it from a popup.

`manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Sandbox example",
  "version": "1.0",
  "action": {
    "default_popup": "popup.html"
  },
  "sandbox": {
    "pages": ["sandbox.html"]
  },
  "content_security_policy": {
    "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
  }
}
```

`sandbox.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="templating-library.js"></script>
    <script src="sandbox.js"></script>
  </head>
  <body></body>
</html>
```

`sandbox.js` listens for messages from the popup, renders a template using the sandboxed library, and posts the result back:

```js
window.addEventListener("message", (event) => {
  const { template, context } = event.data;
  const render = TemplatingLibrary.compile(template);
  event.source.postMessage({ result: render(context) }, event.origin);
});
```

`popup.html` embeds the sandboxed page in a hidden iframe:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="popup.js"></script>
  </head>
  <body>
    <iframe id="sandbox" src="sandbox.html" hidden></iframe>
  </body>
</html>
```

`popup.js` sends data to the sandboxed page and handles the result:

```js
const sandbox = document.getElementById("sandbox");

sandbox.addEventListener("load", () => {
  sandbox.contentWindow.postMessage(
    { template: "Hello, {{name}}!", context: { name: "world" } },
    "*",
  );
});

window.addEventListener("message", (event) => {
  console.log(event.data.result);
});
```

## Browser compatibility

{{Compat}}
