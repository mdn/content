---
title: "Element: outerHTML property"
short-title: outerHTML
slug: Web/API/Element/outerHTML
page-type: web-api-instance-property
browser-compat: api.Element.outerHTML
---

{{APIRef("DOM")}}

> [!WARNING]
> This property parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always assigning `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`outerHTML`** attribute of the {{domxref("Element")}} interface gets or sets the HTML or XML markup of the element and its descendants, omitting any {{glossary("shadow tree", "shadow roots")}} in both cases.

To get or set the contents of an element, use the {{domxref("Element.innerHTML", "innerHTML")}} property instead.

## Value

Getting the property returns a string containing an HTML serialization of the `element` and its descendants.

Setting the property accepts either a {{domxref("TrustedHTML")}} object or a string.
The input is parsed as HTML and replaces the element and all its descendants with the result.
When set to the `null` value, that `null` value is converted to the empty string (`""`), so `element.outerHTML = null` is equivalent to `element.outerHTML = ""`.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set `outerHTML` on an element which is a direct child of a {{domxref("Document")}}, such as {{domxref("Document.documentElement")}}.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set `outerHTML` using an XML input which is not well-formed.
- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

`outerHTML` gets a serialization of the element, or sets HTML or XML that should be parsed to replace it within the element's parent.

If the element has no parent node, setting its `outerHTML` property will not change it or its descendants.
For example:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Also, while the element will be replaced in the document, the variable whose `outerHTML` property was set will still hold a reference to the original element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

### Escaped attribute values

The returned value will escape some values in HTML attributes.
Here we see that the `&` character is escaped:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Some browsers also serialize the `<` and `>` characters as `&lt;` and `&gt;` when they appear in attribute values (see [Browser compatibility](#browser_compatibility)).
This is to prevent a potential security vulnerability ([mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) in which an attacker can craft input that bypasses a [sanitization function](/en-US/docs/Web/Security/Attacks/XSS#sanitization), enabling a cross-site scripting (XSS) attack.

### Shadow DOM considerations

The serialization of the DOM tree read from the property does not include {{glossary("shadow tree", "shadow roots")}}.
If you want to get an HTML serialization of an element that includes shadow roots, you must instead use the {{domxref("Element.getHTML()")}} method.
Note that this gets the _contents_ of the element.

Similarly, when setting element content using `outerHTML`, the HTML input is parsed into DOM elements that do not contain shadow roots.
So for example [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) is parsed into as {{domxref("HTMLTemplateElement")}}, whether or not the [`shadowrootmode`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootmode) attribute is specified.
If you want to set an element's _contents_ from an HTML input that includes declarative shadow roots, you must instead use {{domxref("Element.setHTMLUnsafe()")}} or {{domxref("ShadowRoot.setHTMLUnsafe()")}}.

### Security considerations

The `outerHTML` property is possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, as it can be used to inject potentially unsafe strings provided by a user into the DOM.
While the property does prevent {{HTMLElement("script")}} elements from executing when they are injected, it is susceptible to many other ways that attackers can craft HTML to run malicious JavaScript.
For example, the following example would execute the code in the `error` event handler, because the {{htmlelement("img")}} `src` value is not a valid image URL:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.

## Examples

### Getting the serialization of an element

Reading `outerHTML` causes the user agent to serialize the element.

Given the following HTML:

```html
<div id="example">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

You can get and log the markup for the {{htmlelement("div")}} as shown:

```js
const myElement = document.querySelector("#example");
const contents = myElement.outerHTML;
console.log(contents);
// '<div id="example">\n  <p>Content</p>\n  <p>Further Elaborated</p>\n</div>'
```

### Replacing the element

In this example we'll replace an element in the DOM by assigning HTML to the element's `outerHTML` property.
To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then assign that object to `outerHTML`.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input as shown below:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const element = document.querySelector("#container");
element.outerHTML = trustedHTML; // Replaces the element with id "container"

// Note that the  #container div is no longer part of the document tree,
```

> [!WARNING]
> While you can directly assign a string to `outerHTML` this is a [security risk](#security_considerations) if the string to be inserted might contain potentially malicious content.
> You should use `TrustedHTML` to ensure that the content is sanitized before it is inserted, and you should set a CSP header to [enforce trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Serializing DOM trees into XML strings: {{domxref("XMLSerializer")}}
- Parsing XML or HTML into DOM trees: {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
