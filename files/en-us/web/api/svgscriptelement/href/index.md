---
title: "SVGScriptElement: href property"
short-title: href
slug: Web/API/SVGScriptElement/href
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.href
---

{{APIRef("SVG")}}

> [!WARNING]
> The [`href.baseVal`](/en-US/docs/Web/API/SVGAnimatedString/baseVal) property represents the URL of an external script loaded into the SVG script element.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`href`** read-only property of the {{domxref("SVGScriptElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("script")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Description

The **`href`** property reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("script")}} element.
The attribute can be changed by setting [`href.baseVal`](/en-US/docs/Web/API/SVGAnimatedString/baseVal) (`href.animVal` is read-only, and mirrors the value of `baseVal`).

### Security considerations

The `href.baseVal` property is used to load and run external scripts.
If the SVG is declared inline, the fetched script is run in the context of the current page, and can hence do anything that your own website code can do (even if the URL is not same-origin with your site).
If the input is provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

It is extremely risky to accept and execute arbitrary URLs from untrusted origins.
A website should control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) directive (or a fallback defined in [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify the URL before the resource is fetched.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the href property
console.log(scriptElement.href.baseVal); // Output: "script.js"
```

### Setting the `href.baseVal` property

To mitigate the risk of XSS, we should always assign `TrustedScriptURL` instances to the `baseVal` property.
We also need to do this if we're enforcing trusted types for other reasons and we want to allow some script sources that have been permitted (by `CSP: script-src`).

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} method for transforming input strings into {{domxref("TrustedScriptURL")}} instances.

For the purpose of this example we'll assume that we want to allow a predefined set of URLs in the `scriptAllowList` array, and log any other scripts.

```js
const scriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in scriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Next we define a similar SVG and script element, as in the previous example, and get the element we're going to inject the URL into.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="aScriptElement" href="example.js"></script>
</svg>
```

```js
// Get the script element we're injecting the URL into
const scriptElement = document.getElementById("aScriptElement");
```

Then we use the `policy` object to create a `trustedScriptURL` object from the potentially unsafe input string, and assign the result to the element's `href.baseVal` property:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Inject the TrustedScriptURL (which contains a trusted URL)
scriptElement.href.baseVal = trustedScriptURL;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
