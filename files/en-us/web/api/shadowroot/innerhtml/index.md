---
title: "ShadowRoot: innerHTML property"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.innerHTML
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> This property parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always assigning `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`innerHTML`** property of the {{domxref("ShadowRoot")}} interface gets or sets the HTML markup to the DOM tree inside the `ShadowRoot`.

## Value

Getting the property returns a string containing the HTML serialization of the shadow root's descendants.

Setting the property accepts either a {{domxref("TrustedHTML")}} object or a string.
It parses this value as HTML and replaces all the element's descendants with the result.
When set to the `null` value, that `null` value is converted to the empty string (`""`), so `shadowRoot.innerHTML = null` is equivalent to `shadowRoot.innerHTML = ""`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value of `innerHTML` using a string which is not properly-formed HTML.
- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

`innerHTML` gets a serialization of the nested child DOM elements within the shadow root, or sets HTML or XML that should be parsed to replace the DOM tree within the shadow root.

Note that some browsers serialize the `<` and `>` characters as `&lt;` and `&gt;` when they appear in attribute values (see [Browser compatibility](#browser_compatibility)).
This is to prevent a potential security vulnerability ([mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) in which an attacker can craft input that bypasses a [sanitization function](/en-US/docs/Web/Security/Attacks/XSS#sanitization), enabling a cross-site scripting (XSS) attack.

### Security considerations

The `innerHTML` property is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.
While the property does prevent {{HTMLElement("script")}} elements from executing when they are injected, it is susceptible to many other ways that attackers can craft HTML to run malicious JavaScript.
For example, the following example would execute the code in the `error` event handler, because the {{htmlelement("img")}} `src` value is not a valid image URL:

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.

## Examples

### Reading the HTML contents of an element

Reading `innerHTML` causes the user agent to serialize the shadow root's descendants.

Given the following HTML:

```html
<div class="host">
  <template shadowrootmode="open">
    <p>My name is Joe</p>
  </template>
</div>
```

You can get and log the markup for the shadow root as shown:

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Setting the innerHTML of a Shadow root

In this example we'll replace an element's DOM by assigning HTML to the element's `innerHTML` property.
To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then assign that object to `innerHTML`.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} method for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly, implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input as shown below:

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

// Get the shadow root
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;

// Inject the TrustedHTML (which contains a trusted string)
shadowRoot.innerHTML = trustedHTML;
```

> [!WARNING]
> While you can directly assign a string to `innerHTML`, this is a [security risk](#security_considerations) if the string to be inserted might contain potentially malicious content.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
