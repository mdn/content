---
title: "ShadowRoot: setHTMLUnsafe() method"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
page-type: web-api-instance-method
browser-compat: api.ShadowRoot.setHTMLUnsafe
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> This method parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`setHTMLUnsafe()`** method of the {{domxref("ShadowRoot")}} interface can be used to parse HTML input into a {{domxref("DocumentFragment")}}, optionally filtering out unwanted elements and attributes, and then use it to replace the existing tree in the Shadow DOM.

Unlike with {{domxref("ShadowRoot.setHTML()")}}, XSS-unsafe HTML entities are not guaranteed to be removed.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameters

- `input`
  - : A {{domxref("TrustedHTML")}} or string instance defining HTML to be parsed.
- `options` {{optional_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed.
        Note that generally a `"Sanitizer` is expected to be more efficient than a `SanitizerConfig` if the configuration is to reused.
        If not specified, no sanitizer is used.

### Return value

None (`undefined`).

### Exceptions

- `TypeError`
  - : This is thrown if:
    - `input` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.
      - non-normalized {{domxref("SanitizerConfig")}} (one that includes both "allowed" and "removed" configuration settings).
      - string that does not have the value `"default"`.

## Description

The **`setHTMLUnsafe()`** method can be used to parse a string of HTML, optionally filtering out unwanted elements and attributes, and use it to replace the existing Shadow DOM.

Unlike {{domxref("ShadowRoot.innerHTML")}}, the input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

### Security considerations

The suffix "Unsafe" in the method name indicates that while the method allows the input string to be filtered of unwanted and XSS-unsafe HTML entities, unlike {{domxref("ShadowRoot.setHTML()")}} it does not enforce this sanitization.
In fact, by default no sanitizer is used!
The method is therefore a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.

You should mitigate this risk by always passing {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup (such as {{htmlelement("script")}} elements and event handler attributes), before it is injected.

Note that this may lead to "double-sanitization" of the input — once in the transformation function, and again in the `setHTMLUnsafe()` method.
The recommendation is to use trusted types to sanitize according to your website policies, because trusted types allow auditing of potential injection sinks.
If you wish to sanitize the input again by passing a sanitizer to this method, that's up to you!

## Examples

### Basic usage

This example shows some of the ways you can use `setHTMLUnsafe()` to inject HTML markup into the shadow root.

#### Set up trusted types

To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then pass that object to `setHTMLUnsafe()`.
Since trusted types are not yet supported on all browsers, we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
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

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

#### Using the method

Now that we have `trustedHTML`, the code below shows how you can use it with `setHTMLUnsafe()`, both with and without a sanitizer.

> [!NOTE]
> The input may already sanitized by the trusted type policy at this point.

First we create the {{domxref("ShadowRoot")}} we want to target.
This could be created programmatically using {{domxref("Element.attachShadow()")}} but for this example we'll create the root declaratively.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

We can get a handle to the shadow root from the `#host` element like this:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

The following code shows how we can use `setHTMLUnsafe()`, both with and without a sanitizer.

```js
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: <div>, <p>, <span>, <script> (<script> is unsafe)
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTMLUnsafe(trustedHTML, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// This removes only the script
shadow.setHTMLUnsafe(trustedHTML, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` live example

This example provides a "live" demonstration of the method when called with different sanitizers.
The code defines buttons that you can click to sanitize and inject a string of HTML using a default and a custom sanitizer, respectively.
The original string and sanitized HTML are logged so you can inspect the results in each case.

> [!NOTE]
> To simplify the example, the following code injects a string rather than a trusted type.
> You should not do this in production code.

#### HTML

The HTML defines two {{htmlelement("button")}} elements for injecting the HTML with no sanitizer and with a custom sanitizer (respectively), another button to reset the example, and a {{htmlelement("div")}} that contains the declarative shadow root.

```html
<button id="buttonNoSanitizer" type="button">None</button>
<button id="buttonAllowScript" type="button">allowScript</button>
<button id="reload" type="button">Reload</button>

<div id="host">
  <template shadowrootmode="open">
    <span>I am in the shadow DOM </span>
  </template>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 250px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

First we define the handler for the reload button.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Then we define the input string to inject into the shadow root, which will be the same for all cases.
This contains the {{htmlelement("script")}} element and the `onclick` handler, both of which are considered XSS-unsafe.
We also get variable `shadow`, which is our handle to the shadow root.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Next we define the click handler for the button that sets the shadow root using `setHTMLUnsafe()` without passing a sanitizer.
As there is no sanitizer, we expect the injected HTML to match the input string.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set the content of the element with no sanitizer
  shadow.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent = "No sanitizer\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

The next click handler sets the target HTML using a custom sanitizer that allows only {{htmlelement("div")}}, {{htmlelement("p")}}, and {{htmlelement("script")}} elements.

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  shadow.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent = "Sanitizer: {elements: ['div', 'p', 'script']}\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

Click the "None" and "allowScript" buttons to see the effects of no sanitizer and a custom sanitizer, respectively.

When you click the "None" button, you should see that the input and output match, as no sanitizer is applied.
When you click the "allowScript" button the `<script>` element is still present, but the `<button>` element is removed.
With this approach you can create safe HTML, but you aren't forced to.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","350px")}}

<!--

### `setHTMLUnsafe()` with trusted types

If trusted types are enforced using Xxxx you will need to define a policy.

```js
const parsePolicy = trustedTypes.createPolicy('parseHTMLPolicy', {
  createHTML(input) {
    // Developer must pass input through here manually
    return input;
  }
});

const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
const trusted = parsePolicy.createHTML(rawInput);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: <div>, <p>, <span>, <script> (<script> is unsafe)
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTMLUnsafe(trusted, { sanitizer: sanitizer });
```

-->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.setHTML()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Element.setHTML()")}} and {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
