---
title: "Element: prependHTMLUnsafe() method"
short-title: prependHTMLUnsafe()
slug: Web/API/Element/prependHTMLUnsafe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Element.prependHTMLUnsafe
---

{{APIRef("DOM")}}

> [!WARNING]
> This method parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

> [!NOTE]
> {{domxref("Element.prependHTML()")}} should almost always be used instead of this method — on browsers where it is supported — as it always removes XSS-unsafe HTML entities.

The **`prependHTMLUnsafe()`** method of the {{domxref("Element")}} interface is used to parse HTML input into a {{domxref("DocumentFragment")}}, optionally using the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) to filtering out unwanted elements and attributes, and then inserting it into the DOM as the first child of an element.

## Syntax

```js-nolint
prependHTMLUnsafe(input)
prependHTMLUnsafe(input, options)
```

### Parameters

- `input` {{experimental_inline}}
  - : A {{domxref("TrustedHTML")}} instance or string defining HTML to be parsed.
- `options` {{optional_inline}} {{experimental_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}} {{experimental_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object that defines what elements of the input will be allowed or removed.
        This can also be a string with the value `"default"`, which applies a `Sanitizer` with the (XSS-safe) [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        If not specified, no sanitizer is used.

        Note that if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.
    - `runScripts` {{optional_inline}} {{experimental_inline}}
      - : A boolean value indicating whether any scripts included in the newly inserted HTML should run after inserting. The default is `false`.

### Return value

None (`undefined`).

### Exceptions

- {{jsxref("TypeError")}} {{experimental_inline}}
  - : This is thrown if:
    - `input` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - {{domxref("SanitizerConfig")}} that isn't [valid](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).
        For example, a configuration that includes both "allowed" and "removed" configuration settings.
      - string that does not have the value `"default"`.
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.
    - `options.runScripts` is `true` or `options.sanitizer` is specified when Trusted Types are enforced and no default policy defines `createParserOptions` — even if input is a `TrustedHTML`. (Passing a `TrustedHTMLParserOptions` as options avoids this.)

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the element is an {{HTMLElement("html")}} element.

## Description

The **`prependHTMLUnsafe()`** method is used to parse an HTML input into a {{domxref("DocumentFragment")}}, optionally sanitizing it of unwanted elements and attributes, and discarding elements that the HTML specification doesn't allow in the target element ({{htmlelement("col")}} element outside of a {{htmlelement("table")}}).
The `DocumentFragment` is then used to insert it into the DOM as the first child of the given element, rather than replacing the whole child HTML of the given element.

For {{HTMLElement("template")}} elements, the HTML is inserted into the template contents (the template `DocumentFragment`), rather than as direct children.

Unlike with {{domxref("Element.innerHTML")}}, [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in the input will be parsed into the DOM.
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

`prependHTMLUnsafe()` doesn't perform any sanitization by default (though also does not run scripts by default). If no sanitizer is passed as a parameter, all HTML entities in the input will be injected.

### Security considerations

The suffix "Unsafe" in the method name indicates that it does not enforce removal of all XSS-unsafe HTML entities. This has extra security considerations as detailed in the sanitizer API ["Security considerations of the unsafe methods" section](/en-US/docs/Web/API/HTML_Sanitizer_API/#security_considerations_of_the_unsafe_methods) and ["When should the unsafe methods be used?" section](/en-US/docs/Web/API/HTML_Sanitizer_API#when_should_the_unsafe_methods_be_used).

## Examples

> [!NOTE]
> The [`setHTMLUnsafe()`](/docs/Web/API/Element/setHTMLUnsafe#examples) page includes additional examples, including a live example, which are similar to how `prependHTMLUnsafe()` can be used.

### prependHTMLUnsafe() with Trusted Types

To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then pass that object to `prependHTMLUnsafe()`.
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

Now that we have `trustedHTML`, the code below shows how you can use it with `prependHTMLUnsafe()`.
The input has been through the transformation function, so we don't pass a sanitizer to the method.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// prependHTMLUnsafe() with no sanitizer
target.prependHTMLUnsafe(trustedHTML);
```

### Using prependHTMLUnsafe() without Trusted Types

This example demonstrates the case where we aren't using trusted types, so we'll be passing sanitizer arguments.

The code creates an untrusted string and shows a number of ways a sanitizer can be passed to the method.

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the target Element with id "target"
const target = document.getElementById("target");

// Define custom Sanitizer and use in prependHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.prependHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within prependHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
target.prependHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### Using prependHTMLUnsafe() with `runScripts`

This example demonstrates the case when we allow scripts to run using the `runScripts` option.

```js
// The potentially malicious string
const untrustedString =
  "<script src='example.js'></script><p>Other content</p>";

// Get the target Element with id "target"
const target = document.getElementById("target");

// No sanitizer is passed, so the <script> element is kept and also executes it after insertion.
target.prependHTMLUnsafe(untrustedString, {
  runScripts: true,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.prependHTML()")}}
- {{domxref("ShadowRoot.prependHTML()")}} and {{domxref("ShadowRoot.prependHTMLUnsafe()")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")
  }}
