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
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations of the unsafe methods](#/en-US/docs/Web/API/HTML_Sanitizer_API#security_considerations_of_the_unsafe_methods) for more information.

> [!NOTE]
> {{domxref("ShadowRoot.setHTML()")}} should almost always be used (where supported) instead of this method as it always [XSS-safe](/en-US/docs/Web/API/HTML_Sanitizer_API#safe_methods).

The **`setHTMLUnsafe()`** method of the {{domxref("ShadowRoot")}} interface can be used to parse HTML input into a {{domxref("DocumentFragment")}}, optionally filtering out unwanted elements and attributes, and then use it to replace the existing tree in the Shadow DOM.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameters

- `input`
  - : A {{domxref("TrustedHTML")}} instance or a string defining HTML to be parsed.
- `options` {{optional_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object that defines which elements of the input will be allowed or removed.
        This can also be a string with the value `"default"`, which applies a `Sanitizer` with the (XSS-safe) [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        If not specified, no sanitizer is used.

        Note that if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.
    - `runScripts` {{optional_inline}} {{experimental_inline}}
      - : A boolean value indicating whether any scripts included in the newly inserted HTML should run after inserting. The default is `false`.

### Return value

None (`undefined`).

### Exceptions

- {{jsxref("TypeError")}}
  - : This is thrown if:
    - `input` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - {{domxref("SanitizerConfig")}} that isn't [valid](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).
        For example, a configuration that includes both "allowed" and "removed" configuration settings.
      - string that does not have the value `"default"`.
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.
    - `options.runScripts` is `true` or `options.sanitizer` is specified when Trusted Types are enforced and no default policy defines `createParserOptions` — even if input is a `TrustedHTML`. (Passing a `TrustedHTMLParserOptions` as options avoids this.)

## Description

The **`setHTMLUnsafe()`** method can be used to parse a string of HTML, optionally filtering out unwanted elements and attributes, and use it to replace the existing Shadow DOM.

Unlike with {{domxref("ShadowRoot.innerHTML")}}, [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in the input will be parsed into the DOM.
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

### Security considerations

The suffix "Unsafe" in the method name indicates that it does not enforce removal of all XSS-unsafe HTML entities. This has extra security considerations as detailed in the sanitizer API ["Security considerations of the unsafe methods" section](/en-US/docs/Web/API/HTML_Sanitizer_API#security_considerations_of_the_unsafe_methods) and ["When should the unsafe methods be used?" section](/en-US/docs/Web/API/HTML_Sanitizer_API#when_should_the_unsafe_methods_be_used).

## Examples

### setHTMLUnsafe() with Trusted Types

To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then pass that object to `setHTMLUnsafe()`.
Since trusted types are not yet supported on all browsers, we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

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

Now that we have `trustedHTML`, the code below shows how you can use it with `setHTMLUnsafe()`.
First we create the {{domxref("ShadowRoot")}} we want to target.
This could be created programmatically using {{domxref("Element.attachShadow()")}} but for this example we'll create the root declaratively.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

We then get a handle to the shadow root from the `#host` element and call `setHTMLUnsafe()`.
The input has been through the transformation function, so we don't pass a sanitizer to the method.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Using setHTMLUnsafe() without Trusted Types

This example demonstrates the case where we aren't using trusted types, so we'll be passing sanitizer arguments.

The code first creates an untrusted string and shows a number of ways a sanitizer can be passed to the method.

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the shadow root element
const shadow = document.querySelector("#host").shadowRoot;

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
shadow.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
shadow.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` live example

This example provides a "live" demonstration of the method when called with different sanitizers.
The code defines buttons that you can click to inject a string of HTML.
One button injects the HTML without sanitizing it at all, and the second uses a custom sanitizer that allows `<script>` elements but not other unsafe items.
The original string and injected HTML are logged so you can inspect the results in each case.

> [!NOTE]
> Because we want to show how the sanitizer argument is used, the following code injects a string rather than a trusted type.
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
  height: 320px;
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
    <p>Paragraph to inject into shadow DOM.
      <button onclick="alert('You clicked the button!')">Click me</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Para with <code>data-</code> attribute</p>
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
  log(`\n\nsanitized: ${shadow.innerHTML}`);
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
  log(`\n\nunsanitized: ${unsanitizedString}`);
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

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

### Using setHTMLUnsafe() with `runScripts`

This example demonstrates the case when we allow scripts to run using the `runScripts` option.

```js
// The potentially malicious string
const untrustedString =
  "<script src='example.js'></script><p>Other content</p>";

// Get the shadow root element
const shadow = document.querySelector("#host").shadowRoot;

// No sanitizer is passed, so the <script> element is kept
// and also executes the script after insertion.
shadow.setHTMLUnsafe(untrustedString, {
  runScripts: true,
});
```

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
