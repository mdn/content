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

Sandboxed pages are loaded with a unique, [opaque origin](/en-US/docs/Glossary/Origin#opaque_origin), instead of the extension's usual `moz-extension://` origin. As a result:

- Sandboxed pages can't access [WebExtension APIs](/en-US/docs/Mozilla/Add-ons/WebExtensions/API). The `browser` and `chrome` global objects are not available.
- Sandboxed pages can't access, and can't be accessed by, other pages in the extension. However, they can communicate through APIs such as {{DOMxRef("Window.postMessage()")}}.
- Web platform APIs bound to the origin are unavailable. For examples, see the [`allow-same-origin`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) value of the `Content-Security-Policy: sandbox` directive.

A sandboxed page can be given a more permissive [content security policy (CSP)](#content_security_policy_for_sandboxed_pages) than the rest of the extension. This includes a CSP that permits [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and similar constructs that are blocked by an extension's [default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy). Because a sandboxed page can't use WebExtension APIs or reach the rest of the extension directly, this can be done without weakening the security of the extension as a whole.

This makes the `sandbox` key useful for including a third-party library that relies on `eval()` or `new Function()`: load the library in a sandboxed page, and use `postMessage()` to send it data from, and return results to, the rest of the extension.

## Syntax

`sandbox` is an object with these properties:

<dl>
  <dt><code>pages</code></dt>
  <dd>
    Required. An array of strings. A list of paths, relative to manifest.json, to the extension's sandboxed pages.
  </dd>
  <dt><code>content_security_policy</code></dt>
  <dd>
    Optional. A string. <strong>Manifest V2 only.</strong> The content security policy applied to the sandboxed pages. For the Manifest V3 equivalent, see the <code>sandbox</code> property of the <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"><code>content_security_policy</code></a> key, described in <a href="#content_security_policy_for_sandboxed_pages">Content security policy for sandboxed pages</a>.
  </dd>
</dl>

```json
// Manifest V2
"sandbox": {
  "pages": ["sandbox.html"],
  "content_security_policy": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

```json
// Manifest V3
"sandbox": {
  "pages": ["sandbox.html"]
}
```

## Content security policy for sandboxed pages

In Manifest V3, the content security policy for sandboxed pages is set using the `sandbox` property of the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key. **This property is Manifest V3 only.** In Manifest V2, use the `content_security_policy` property of the `sandbox` key instead, as described in [Syntax](#syntax) above.

```json
"content_security_policy": {
  "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

If a policy is not supplied, sandboxed pages get this default content security policy:

```plain
sandbox allow-scripts; script-src 'self';
```

This isolates a sandboxed page from the rest of the extension, but doesn't allow `eval()` or similar constructs. To permit these, include `'unsafe-eval'` in the `script-src` directive of a custom policy.

Any custom policy supplied for sandboxed pages must meet these requirements:

- It must include the {{CSP("sandbox")}} directive.
- The {{CSP("sandbox")}} directive must not include the `allow-same-origin` keyword. Allowing this would give the page access to the rest of the extension's origin, defeating the purpose of sandboxing it.

## Best practices

When using a sandboxed page, consider these best practices:

- **Validate messages.** As a sandboxed page communicates with the rest of the extension using {{DOMxRef("Window.postMessage()")}}, it's exposed to the same risks as any other use of `postMessage()`. Check the origin and shape of every message before acting on it. See [security concerns](/en-US/docs/Web/API/Window/postMessage#security_concerns) in the `postMessage()` documentation.
- **Don't execute untrusted code.** Although a sandboxed page can't use WebExtension APIs, its `moz-extension://` URL identifies the extension. Therefore, untrusted code running in the sandbox could be used to fingerprint the extension or its user.
- **Don't relax the CSP only to enable WebAssembly.** If WebAssembly support is the only reason for using a sandboxed page, add `'wasm-unsafe-eval'` to the extension's [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) instead of relaxing the CSP of a sandboxed page.

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

`templating-library.js` stands in for a third-party library that compiles templates using `new Function()`, which is why it must run in a sandboxed page:

```js
const TemplatingLibrary = {
  compile: (template) => (context) =>
    new Function(...Object.keys(context), `return \`${template}\`;`)(
      ...Object.values(context),
    ),
};
```

`sandbox.js` listens for messages from the popup, renders a template using the sandboxed library, and posts the result back:

```js
window.addEventListener("message", (event) => {
  if (event.source !== window.parent) {
    // Ignore messages from any window other than the
    // extension page that embeds this sandboxed page.
    // The sandboxed page has an opaque origin, so
    // location.origin can't be used for this check.
    return;
  }
  const { template, context } = event.data;
  const render = TemplatingLibrary.compile(template);
  event.source.postMessage({ result: render(context) }, event.origin);
});
```

`popup.html` embeds the sandboxed page in a hidden iframe. The `defer` attribute on `popup.js` ensures it only runs after the iframe has been parsed:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script src="popup.js" defer></script>
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
    { template: "Hello, ${name}!", context: { name: "world" } },
    "*",
  );
});

window.addEventListener("message", (event) => {
  if (event.source !== sandbox.contentWindow) {
    // Ignore messages from any window other than the sandboxed page.
    return;
  }
  console.log(event.data.result);
});
```

## Browser compatibility

{{Compat}}
