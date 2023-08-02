---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
page-type: guide
---

{{AddonSidebar}}

Extensions developed with WebExtension APIs have a Content Security Policy (CSP) applied to them by default. This restricts the sources from which they can load code such as [\<script>](/en-US/docs/Web/HTML/Element/script) and disallows potentially unsafe practices such as using [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). This article briefly explains what a CSP is, what the default policy is and what it means for an extension, and how an extension can change the default CSP.

[Content Security Policy](/en-US/docs/Web/HTTP/CSP) (CSP) is a mechanism to help prevent websites from inadvertently executing malicious content. A website specifies a CSP using an HTTP header sent from the server. The CSP is mostly concerned with specifying legitimate sources of various types of content, such as scripts or embedded plugins. For example, a website can use it to specify that the browser should only execute JavaScript served from the website itself, and not from any other sources. A CSP can also instruct the browser to disallow potentially unsafe practices, such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

Like websites, extensions can load content from different sources. For example, a browser action's popup is specified as an HTML document, and it can include JavaScript and CSS from different sources, just like a normal web page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <!--Some HTML content here-->
    <!--
      Include a third-party script.
      See also https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity.
    -->
    <script
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous"></script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>
</html>
```

Compared to a website, extensions have access to additional privileged APIs, so if they are compromised by malicious code, the risks are greater. For this reason:

- a fairly strict content security policy is applied to extensions by default. See [default content security policy](#default_content_security_policy).
- the extension's author can change the default policy using the `content_security_policy` manifest.json key, but there are restrictions on the policies that are allowed. See [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Default content security policy

The default content security policy for extensions using Manifest V2 is:

```plain
"script-src 'self'; object-src 'self';"
```

While for extensions using Manifest V3, the default content security policy is:

```plain
"script-src 'self'; upgrade-insecure-requests;"
```

These policies are applied to any extension that has not explicitly set its own content security policy using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key. It has the following consequences:

- [You may only load \<script> and \<object> resources that are local to the extension.](#location_of_script_and_object_resources)
- [The extension is not allowed to evaluate strings as JavaScript.](#eval_and_friends)
- [Inline JavaScript is not executed.](#inline_javascript)
- [WebAssembly cannot be used by default.](#webassembly)
- [Insecure network requests are upgraded in Manifest V3.](#upgrade_insecure_network_requests_in_manifest_v3)

### Location of script and object resources

Under the default CSP, you can only load code that is local to the extension. The CSP limits {{CSP("script-src")}} to secure sources only, which covers [\<script>](/en-US/docs/Web/HTML/Element/script) resources, [ES6 modules](/en-US/docs/Web/JavaScript/Guide/Modules) and [web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). In browsers that support obsolete [plugins](/en-US/docs/Glossary/Plugin), the {{CSP("object-src")}} directive is also restricted. For more information on object-src in extensions, see the WECG issue [Remove object-src from the CSP (at least in MV3)](https://github.com/w3c/webextensions/issues/204)).

For example, consider a line like this in an extension's document:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

This doesn't load the requested resource: it fails silently, and any object that you expect to be present from the resource is not found. There are two main solutions to this:

- download the resource, package it in your extension, and refer to this version of the resource.
- allow the remote origin you need using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key or, in Manifest V3, the `content_scripts` property.

> **Note:** If your modified CSP allows remote script injection, your extension will get rejected from addons.mozilla.org (AMO) during the review. For more information, see details about [security best practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/).

### eval() and friends

Under the default CSP, extensions cannot evaluate strings as JavaScript. This means that the following are not permitted:

```js
eval("console.log('some output');");
```

```js
setTimeout("alert('Hello World!');", 500);
```

```js
const f = new Function("console.log('foo');");
```

### Inline JavaScript

Under the default CSP, inline JavaScript is not executed. This disallows both JavaScript placed directly in `<script>` tags and inline event handlers, meaning that the following are not permitted:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

If you are currently using code like `<body onload="main()">` to run your script when the page has loaded, listen for [DOMContentLoaded](/en-US/docs/Web/API/Window/DOMContentLoaded_event) or [load](/en-US/docs/Web/API/Window/load_event) instead.

### WebAssembly

Extensions wishing to use [WebAssembly](/en-US/docs/WebAssembly) require `'wasm-unsafe-eval'` to be specified in the `script-src` directive.

From Firefox 102 and Chrome 103, `'wasm-unsafe-eval'` can be included in the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key to enable the use of WebAssembly in extensions.

Manifest V2 extensions in Firefox can use WebAssembly without `'wasm-unsafe-eval'` in their CSP for backward compatibility. However, this behavior isn't guaranteed, see [Firefox bug 1770909](https://bugzil.la/1770909). Extensions using WebAssembly are therefore encouraged to declare `'wasm-unsafe-eval'` in their CSP.

For Chrome, extensions cannot use WebAssembly in version 101 or earlier. In 102, extensions can use WebAssembly (the same behavior as Firefox 101 and earlier). From version 103, extensions can use WebAssembly if they include `'wasm-unsafe-eval'` in the `content_security_policy` in the manifest key.

### Upgrade insecure network requests in Manifest V3

Extensions should use `https:` and `wss:` when communicating with external servers. To encourage this as the standard behavior, the default Manifest V3 CSP includes the {{CSP("upgrade-insecure-requests")}} directive. This directive automatically upgrades network requests to `http:` to use `https:`.

While requests are automatically updated, it is still recommended to use `https:`-URLs in the extension's source code where possible. In particular, entries in the [`host_permissions` section of manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) should start with `https://` or `*://` instead of only `http://`.

Manifest V3 Extensions that need to make `http:` or `ws:` requests can opt out of this behavior by overriding the default CSP using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key with a policy that excludes the `upgrade-insecure-requests` directive. However, to comply with the [security requirements](https://extensionworkshop.com/documentation/publish/add-on-policies/#security-compliance-and-blocking) of the Add-on Policies, all user data must be transmitted securely.

## CSP for content scripts

In Manifest V2, content scripts have no CSP.
As of Manifest V3, content scripts share the default CSP as extensions. It is currently not possible to specify a separate CSP for content scripts ([source](https://bugzil.la/1581611#c10)).

The extent to which the CSP controls loads from content scripts varies by browser.
In Firefox, JavaScript features such as eval are restricted by the extension CSP. Generally, most DOM-based APIs are subjected to the CSP of the web page.
In Chrome, many DOM APIs are covered by the extension CSP instead of the web page's CSP ([crbug 896041](https://crbug.com/896041)).
