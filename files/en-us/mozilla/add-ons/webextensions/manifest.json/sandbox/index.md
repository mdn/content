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
- Sandboxed pages can't access or be accessed by other pages in the extension. However, they can communicate indirectly through APIs such as {{DOMxRef("Window.postMessage()")}}.
- Web platform APIs bound to the origin are unavailable. For examples, see the [`allow-same-origin`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) value of the `Content-Security-Policy: sandbox` directive.

A sandboxed page can be given a more permissive [content security policy (CSP)](#content_security_policy_for_sandboxed_pages) than the rest of the extension. This includes a CSP that permits [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and similar constructs that are blocked by an extension's [default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy). Because a sandboxed page can't use WebExtension APIs or reach the rest of the extension directly, this can be done without weakening the security of the extension as a whole.

This makes the `sandbox` key useful for code that needs `eval()` or similar constructs. Load the code in a sandboxed page, and use `postMessage()` to send data to, and return results from, the rest of the extension.

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

## Content security policy for sandboxed pages

In Manifest V3, the content security policy for sandboxed pages is set using the `sandbox` property of the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key. **This property is Manifest V3 only.** In Manifest V2, use the `content_security_policy` property of the `sandbox` key instead.

If a policy isn't supplied, sandboxed pages get this default content security policy:

```plain
sandbox allow-scripts; script-src 'self';
```

This isolates a sandboxed page from the rest of the extension and doesn't allow `eval()` or similar constructs.

For example, to customize the CSP to enable `eval()` in sandbox.html, add `'unsafe-eval'` like this:

```json
// Manifest V3
"sandbox": {
  "pages": ["sandbox.html"]
},
"content_security_policy": {
  "sandbox": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

```json
// Manifest V2
"sandbox": {
  "pages": ["sandbox.html"],
  "content_security_policy": "sandbox allow-scripts; script-src 'self' 'unsafe-eval';"
}
```

Any custom policy supplied for sandboxed pages must meet these requirements:

- It must include the {{CSP("sandbox")}} directive.
- The {{CSP("sandbox")}} directive must not include the `allow-same-origin` keyword. Allowing this would give the page access to the rest of the extension's origin, defeating the purpose of sandboxing it.

## Best practices

When using a sandboxed page, consider these best practices:

- **Validate messages.** If a sandboxed page communicates with the rest of the extension using {{DOMxRef("Window.postMessage()")}}, it's exposed to the same risks as any other use of `postMessage()`. Check the origin and shape of every message before acting on it. See [security concerns](/en-US/docs/Web/API/Window/postMessage#security_concerns) in the `postMessage()` documentation.

  A sandboxed page's `location.origin` reflects the extension's `moz-extension://` origin. Therefore, a sandboxed page can validate an incoming message by checking that `event.origin` matches `location.origin`.

  Messages sent _from_ a sandboxed page report the serialization of opaque origin (`"null"`), which is indistinguishable from other opaque origins. Therefore, the extension page receiving the messages can't validate by origin; instead, compare `event.source` to the sandboxed frame's `contentWindow`.

  This means that when posting a message _to_ a sandboxed page, there's no specific origin to target, as its opaque origin can't be expressed as a target origin string. The usual `postMessage()` best practice of targeting a specific origin can't be followed here; use `"*"` instead. There's no alternative until [this spec issue](https://github.com/whatwg/html/issues/3585) is resolved.

- **Don't execute untrusted code.** Although a sandboxed page can't use WebExtension APIs, its `moz-extension://` URL identifies the extension. Therefore, untrusted code running in the sandbox could be used to fingerprint the extension or its user.
- **Don't relax the CSP only to enable WebAssembly.** If WebAssembly support is the only reason for using a sandboxed page, add `'wasm-unsafe-eval'` to the extension's [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) instead of relaxing the CSP of a sandboxed page.

## Example

This example evaluates a math expression in a sandboxed page and returns the result to the extension's popup.

`manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Sandbox calculator example",
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
    <script src="sandbox.js"></script>
  </head>
  <body></body>
</html>
```

`sandbox.js` listens for messages from the popup, evaluates the expression, and posts the result back. It validates the message by comparing `event.origin` to its `location.origin`, which reflects the extension's origin:

```js
window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) {
    // Reject messages not coming from the extension.
    return;
  }
  event.source.postMessage(eval(event.data), event.origin);
});
```

`popup.html` doesn't embed the sandboxed page directly; the iframe is created by `popup.js`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <input id="expression" value="1 + 2" />
    <button id="calculate">Calculate</button>
    <div id="result"></div>
    <script src="popup.js"></script>
  </body>
</html>
```

`popup.js` creates the sandboxed iframe and attaches a message listener before appending it to the document, so that no reply is missed:

```js
async function runCalculation(expression) {
  const iframe = document.createElement("iframe");
  iframe.src = "sandbox.html";
  iframe.hidden = true;

  await new Promise((resolve) => {
    iframe.addEventListener("load", resolve, { once: true });
    document.body.append(iframe);
  });

  const reply = new Promise((resolve) => {
    const handleMessage = (event) => {
      if (event.source !== iframe.contentWindow) {
        return;
      }
      window.removeEventListener("message", handleMessage);
      resolve(event.data);
    };
    window.addEventListener("message", handleMessage);
  });

  // Best practice is to target a specific origin instead of "*",
  // but a sandboxed page has an opaque origin ("null"), so there's
  // no specific origin to target.
  iframe.contentWindow.postMessage(expression, "*");
  const result = await reply;

  iframe.remove();
  return result;
}

document.getElementById("calculate").addEventListener("click", async () => {
  const expression = document.getElementById("expression").value;
  document.getElementById("result").textContent =
    await runCalculation(expression);
});
```

## Browser compatibility

{{Compat}}
