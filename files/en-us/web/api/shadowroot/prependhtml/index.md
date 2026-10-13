---
title: "ShadowRoot: prependHTML() method"
short-title: prependHTML()
slug: Web/API/ShadowRoot/prependHTML
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ShadowRoot.prependHTML
---

{{APIRef("DOM")}}

The **`prependHTML()`** method of the {{domxref("ShadowRoot")}} interface provides an XSS-safe method to parse and sanitize a string of HTML and inserts it into the DOM as the first child of the shadow root.

The method removes any elements and attributes that are considered XSS-unsafe, even if allowed by a passed sanitizer.
Notably, the following elements are always removed: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, and event handler attributes.

This is similar to {{domxref("ShadowRoot.setHTML")}} but allows addition of new HTML as the first child of the shadow root, rather than setting the whole child HTML only.

## Syntax

```js-nolint
prependHTML(input)
prependHTML(input, options)
```

### Parameters

- `input` {{experimental_inline}}
  - : A string defining HTML to be sanitized and inserted.
- `options` {{optional_inline}} {{experimental_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}} {{experimental_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed, or the string `"default"` for the default configuration.
        The method will remove any XSS-unsafe elements and attributes, even if allowed by the sanitizer.
        If not specified, the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) is used.

        Note that if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.

### Return value

None (`undefined`).

### Exceptions

- {{jsxref("TypeError")}} {{experimental_inline}}
  - : This is thrown if `options.sanitizer` is passed a:
    - {{domxref("SanitizerConfig")}} that isn't [valid](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).
      For example, a configuration that includes both "allowed" and "removed" configuration settings.
    - string that does not have the value `"default"`.
    - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.

## Description

`prependHTML()` drops any elements in the HTML input string that are invalid in the context of the current shadow root, such as a {{htmlelement("col")}} element outside of a {{htmlelement("table")}}.

It then removes any HTML elements and attributes that aren't allowed by the sanitizer configuration, and further removes any XSS-unsafe elements or attributes — whether or not they are allowed by the sanitizer.

If no sanitizer is specified in the `options.sanitizer` parameter, `prependHTML()` is used with the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
This configuration is suitable for the majority of use cases as it prevents XSS attacks, as well as other attacks like clickjacking or spoofing.

A custom `Sanitizer` or `SanitizerConfig` can be specified to choose which elements, attributes, and comments are allowed or removed.
Note that even if unsafe options are allowed by the sanitizer, they will still be removed when using this method (it removes the same elements as a sanitizer on which {{domxref('Sanitizer.removeUnsafe()')}} has been called).

`prependHTML()` can be used instead of {{domxref("ShadowRoot.setHTML")}} when the HTML needs to insert it into the DOM as the first child of the given shadow root, rather than replacing the whole child HTML of the given shadow root.

It should also be used instead of {{domxref("ShadowRoot.prependHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

Note that since this method always sanitizes input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

### Related HTML setter APIs

This is part of a series of APIs to set HTML:

| Action                                             | API                                                  | Unsafe API                                                       |
| -------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| Set the HTML contents of the shadow root           | {{domxref("ShadowRoot.setHTML", "setHTML")}}         | {{domxref("ShadowRoot.setHTMLUnsafe", "setHTMLUnsafe")}}.        |
| Add the HTML as the first child of the shadow root | {{domxref("ShadowRoot.prependHTML", "prependHTML")}} | {{domxref("ShadowRoot.prependHTMLUnsafe", "prependHTMLUnsafe")}} |
| Add the HTML as the last child of the shadow root  | {{domxref("ShadowRoot.appendHTML", "appendHTML")}}   | {{domxref("ShadowRoot.appendHTMLUnsafe", "appendHTMLUnsafe")}}   |

Each API type takes the same arguments but allows for ease of inserting the required HTML in the appropriate place and with or without the default sanitizer applied. The unsafe variants allows scripts to be run using the `runScripts` options.

## Examples

> [!NOTE]
> The [`setHTML()`](/docs/Web/API/Element/setHTML#examples) page includes additional examples, including a live example, which are similar to how `prependHTML()` can be used.

### Basic usage

This example shows some of the ways you can use `prependHTML()` to sanitize and inject a string of HTML.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// Get the target Element with id "target"
const target = document.getElementById("target");

// prependHTML() with default sanitizer
target.prependHTML(unsanitizedString);

// Define custom Sanitizer and use in prependHTML()
// This allows only elements: div, p, button (script is unsafe and will be removed)
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.prependHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within prependHTML()
// This removes elements div, p, button, script, and any other unsafe elements/attributes
target.prependHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.prependHTMLUnsafe()")}}
- {{domxref("ShadowRoot.prependHTML()")}} and {{domxref("ShadowRoot.prependHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
