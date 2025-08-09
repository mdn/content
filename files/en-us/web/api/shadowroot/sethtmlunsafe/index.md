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
> It is better to use XSS-safe methods where possible, such as {{domxref("ShadowRoot.setHTML()")}}.
>
> On sites that [enforce Trusted Type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive you will need to pass {{domxref("TrustedHTML")}} objects into this method.
> This allows you to pass through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

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

The suffix "Unsafe" in the method name indicates that while the method does allow the input string to be filtered of unwanted HTML entities, it does not enforce the sanitization or removal of potentially unsafe XSS-relevant input, such as `<script>` elements, and script or event handler content attributes.
If no sanitizer configuration is specified in the `options.sanitizer` parameter, `setHTMLUnsafe()` is used without any sanitization.

The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

`setHTMLUnsafe()` should be instead of {{domxref("ShadowRoot.setHTML()")}} when parsing potentially unsafe strings of HTML that for whatever reason need to contain XSS-unsafe elements or attributes.
If strings to be injected don't need to contain unsafe HTML entities, then you should use {{domxref("ShadowRoot.setHTML()")}}.

Note that since this method does not necessarily sanitize input strings of XSS-unsafe entities, input strings should also be validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).
If the method is used with both a trusted types and a sanitizer, the input string will be passed through the trusted transformation function before it is sanitized.

## Examples

### Basic usage

This example shows some of the ways you can use `setHTMLUnsafe()` to sanitize and inject a string of HTML.

First we will create the {{domxref("ShadowRoot")}} we want to target.
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

The code below shows how we can call `setHTMLUnsafe()` with a string and different sanitizers in order to filter and inject the HTML into the shadow root.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";

// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(unsanitizedString);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: <div>, <p>, <span>, <script> (<script> is unsafe)
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// This removes only the script
shadow.setHTMLUnsafe(unsanitizedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` live example

This example provides a "live" demonstration of the method when called with different sanitizers.
The code defines buttons that you can click to sanitize and inject a string of HTML using a default and a custom sanitizer, respectively.
The original string and sanitized HTML are logged so you can inspect the results in each case.

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
