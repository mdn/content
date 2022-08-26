---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
tags:
  - WebExtensions
---
{{AddonSidebar}}

Extensions developed with WebExtension APIs have a Content Security Policy (CSP) applied to them by default. This restricts the sources from which they can load [\<script>](/en-US/docs/Web/HTML/Element/script) and [\<object>](/en-US/docs/Web/HTML/Element/object) resources, and disallows potentially unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). This article explains briefly what a CSP is, what the default policy is and what it means for an extension, and how an extension can change the default CSP.

[Content Security Policy](/en-US/docs/Web/HTTP/CSP) (CSP) is a mechanism to help prevent websites from inadvertently executing malicious content. A website specifies a CSP using an HTTP header sent from the server. The CSP is mostly concerned with specifying legitimate sources of various types of content, such as scripts or embedded plugins. For example, a website can use it to specify that the browser should only execute JavaScript served from the website itself, and not from any other sources. A CSP can also instruct the browser to disallow potentially unsafe practices, such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

Like websites, extensions can load content from different sources. For example, a browser action's popup is specified as an HTML document, and it can include JavaScript and CSS from different sources, just like a normal web page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
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
      crossorigin="anonymous">
    </script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>
</html>
```

Compared to a website, extensions have access to additional privileged APIs, so if they are compromised by malicious code, the risks are greater. For this reason:

- a fairly strict content security policy is applied to extensions by default. See [default content security policy](#default_content_security_policy).
- the extension's author can change the default policy using the `content_security_policy` manifest.json key, but there are restrictions on the policies that are allowed. See [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Default content security policy

The default content security policy for extensions is:

```
"script-src 'self'; object-src 'self';"
```

These policies are applied to any extension that has not explicitly set its own content security policy using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key. It has the following consequences:

- [You may only load \<script> and \<object> resources that are local to the extension.](#location_of_script_and_object_resources)
- [The extension is not allowed to evaluate strings as JavaScript.](#eval_and_friends)
- [Inline JavaScript is not executed.](#inline_javascript)
- [WebAssembly cannot be used by default.](#webassembly)

### Location of script and object resources

Under the default CSP you may only load [\<script>](/en-US/docs/Web/HTML/Element/script) and [\<object>](/en-US/docs/Web/HTML/Element/object) resources that are local to the extension. For example, consider a line like this in an extension's document:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

This doesn't load the requested resource: it fails silently, and any object that you expect to be present from the resource is not found. There are two main solutions to this:

- download the resource, package it in your extension, and refer to this version of the resource
- allow the remote origin you need using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key or, in Manifest V3, the `content_scripts` property.

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

Manifest V2 extensions in Firefox can use WebAssembly without `'wasm-unsafe-eval'` in their CSP for backward compatibility. However, this behavior isn't guaranteed, see {{bug(1770909)}}. Extensions using WebAssembly are therefore encouraged to declare `'wasm-unsafe-eval'` in their CSP.

For Chrome, extensions cannot use WebAssembly in version 101 or earlier. In 102, extensions can use WebAssembly (the same behavior as Firefox 101 and earlier). From version 103, extensions can use WebAssembly if they include `'wasm-unsafe-eval'` in the `content_security_policy` in the manifest key.
