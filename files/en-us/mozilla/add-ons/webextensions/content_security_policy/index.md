---
title: Content Security Policy
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
tags:
  - WebExtensions
---
{{AddonSidebar}}

Extensions developed with WebExtension APIs have a Content Security Policy (CSP) applied to them by default. This restricts the sources from which they can load**[ ](/en-US/docs/Web/HTML/Element/script)**[\<script>](/en-US/docs/Web/HTML/Element/script) and [\<object>](/en-US/docs/Web/HTML/Element/object) resources, and disallows potentially unsafe practices such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).This article explains briefly what a CSP is, what the default policy is and what it means for an extension, and how an extension can change the default CSP.

[Content Security Policy](/en-US/docs/Web/HTTP/CSP) (CSP) is a mechanism to help prevent websites from inadvertently executing malicious content. A website specifies a CSP using an HTTP header sent from the server. The CSP is mostly concerned with specifying legitimate sources of various types of content, such as scripts or embedded plugins. For example, a website can use it to specify that the browser should only execute JavaScript served from the website itself, and not from any other sources. A CSP can also instruct the browser to disallow potentially unsafe practices, such as the use of [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

Like websites, extensions can load content from different sources. For example, a browser action's popup is specified as an HTML document, and it can include JavaScript and CSS from different sources, just like a normal web page:

```html
<!DOCTYPE html>

<html>
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

- a fairly strict content security policy is applied to extensions by default. See [default content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy).
- the extension's author can change the default policy using the `content_security_policy` manifest.json key, but there are restrictions on the policies that are allowed. See [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Default content security policy

The default content security policy for extensions is:

    "script-src 'self'; object-src 'self';"

This will be applied to any extension that has not explicitly set its own content security policy using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key. It has the following consequences:

- [You may only load \<script> and \<object> resources that are local to the extension.](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#location_of_script_and_object_resources)
- [The extension is not allowed to evaluate strings as JavaScript.](</en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval()_and_friends>)
- [Inline JavaScript is not executed.](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#inline_javascript)

### Location of script and object resources

Under the default CSP you may only load [\<script>](/en-US/docs/Web/HTML/Element/script) and [\<object>](/en-US/docs/Web/HTML/Element/object) resources that are local to the extension. For example, consider a line like this in an extension's document:

```html
 <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

This will no longer load the requested resource: it will fail silently, and any object which you expected to be present from the resource will not be found. There are two main solutions to this:

- download the resource, package it in your extension, and refer to this version of the resource
- use the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) key to allow the remote origin you need.

### eval() and friends

Under the default CSP extensions are not allowed to evaluate strings as JavaScript. This means that the following are not permitted:

```js
eval("console.log('some output');");
```

```js
window.setTimeout("alert('Hello World!');", 500);
```

```js
var f = new Function("console.log('foo');");
```

### Inline JavaScript

Under the default CSP inline JavaScript is not executed. This disallows both JavaScript placed directly in `<script>` tags and inline event handlers, meaning that the following are not permitted:

```html
<script>console.log("foo");</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

If you are currently using code like `<body onload="main()">` to run your script when the page has loaded, listen for [DOMContentLoaded](/en-US/docs/Web/API/Window/DOMContentLoaded_event) or [load](/en-US/docs/Web/API/Window/load_event) instead.
