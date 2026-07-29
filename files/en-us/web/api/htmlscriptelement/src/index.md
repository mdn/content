---
title: "HTMLScriptElement: src property"
short-title: src
slug: Web/API/HTMLScriptElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.src
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> This property represents the URI of an external script loaded into the script element, which may be executable depending on the script {{domxref("HTMLScriptElement/type","type")}}.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`src`** property of the {{domxref("HTMLScriptElement")}} interface is a string representing the URL of an external script; this can be used as an alternative to embedding a script directly within a document.

It reflects the [`src`](/en-US/docs/Web/HTML/Reference/Elements/script#src) attribute of the {{HTMLElement("script")}} element.

## Value

Getting the property returns a string containing the element's script URI.

Setting the property accepts either a {{domxref("TrustedScriptURL")}} object or a string.

### Exceptions

- `TypeError`
  - : Thrown if the property is set with a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    This is also thrown if the fetched URL cannot be successfully parsed as its indicated type, such as a module or importmap.

## Description

The **`src`** property represents the URL of an external script.
If set, scripts provided via the text properties {{domxref("HTMLScriptElement.text","text")}}, {{domxref("HTMLScriptElement.textContent","textContent")}}, or {{domxref("HTMLScriptElement.textContent","innerText")}}, are ignored.

### Security considerations

The `src` property is used to load and run external scripts.
The fetched script is run in the context of the current page, and can hence do anything that your own website code can do (even if the URL is not same-origin with your site).
If the input is provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

It is extremely risky to accept and execute arbitrary URLs from untrusted origins.
A website should control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) directive (or a fallback defined in [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify the URL before it is injected.

Even if the resource is trusted by your website, it may still be compromised in a [supply chain attack](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks).
To mitigate against this kind of attack you should use the [subresource integrity](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity) feature.

## Examples

### Using TrustedScriptURL

To mitigate the risk of XSS, we should always assign `TrustedScriptURL` instances to the `src` property.
We also need to do this if we're enforcing trusted types for other reasons and we want to allow some script sources that have been permitted (by `CSP: script-src`).

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} method for transforming input strings into {{domxref("TrustedScriptURL")}} instances.

For the purpose of this example we'll assume that we want to allow a predefined set of URLs in the `scriptAllowList` array and log any other scripts.

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

Next we'll create the script element to which we will assign the value and get a handle to the element.

```html
<script id="el"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Then we use the `policy` object to create a `trustedScriptURL` instance from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
// We won't be including untrustedScriptURL in our scriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Inject the TrustedScriptURL (which contains a trusted URL)
el.src = trustedScriptURL;
```

### Reading the `src` property

This example shows how you can read the `src` property for the two script elements below, assuming page URL is `https://example.com`.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

The code reads each of the script elements and logs the output of the `src` property.

```js
const scriptWithSrc = document.getElementById("script-with-src");
console.log(scriptWithSrc.src); // Output: "https://example.com/main.js"
const scriptWithoutSrc = document.getElementById("script-without-src");
console.log(scriptWithoutSrc.src); // Output: ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
