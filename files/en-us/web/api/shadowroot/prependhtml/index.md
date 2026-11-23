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

The **`prependHTML()`** method of the {{domxref("ShadowRoot")}} interface provides an [XSS-safe method](/en-US/docs/Web/API/HTML_Sanitizer_API#xss-safe_baseline_configuration) to parse and sanitize a string of HTML using the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and insert it into the `ShadowRoot` before the first child of the `ShadowRoot`.

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
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines which items in the input will be removed, or the string `"default"` for the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

        If this option is omitted, the default sanitizer configuration is used.
        Note that if you're using the same configuration multiple times, it's likely to be more efficient to use a `Sanitizer` than a `SanitizerConfig`.

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

**`prependHTML()`** provides an [XSS-safe method](/en-US/docs/Web/API/HTML_Sanitizer_API#xss-safe_baseline_configuration) to parse and sanitize a string of HTML using the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and insert it into the `ShadowRoot` before the first child of the `ShadowRoot`.

Like all [similar HTML setters](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods), it removes all elements from the input string that are invalid in the context of the node's parent element (or the shadow host, if the parent is a shadow root), such as a {{htmlelement("col")}} element outside of a {{htmlelement("table")}}.

It also be used instead of {{domxref("ShadowRoot.prependHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

Note that since this method always sanitizes input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

Even after sanitizing HTML input with with this method, it is still not safe to serialize the HTML and re-parse it using methods like `innerHTML`. See the [Re-parsing and mutated XSS](/en-US/docs/Web/API/Element/setHTML#re-parsing_and_mutated_xss_mxss) section of {{domxref("Element.setHTML()")}}.

## Examples

> [!NOTE]
> The [`setHTML()`](/docs/Web/API/Element/setHTML#examples) page includes additional examples, including a live example, which are similar to how `prependHTML()` can be used.

These examples shows some of the ways you can use `prependHTML()` to sanitize and inject a string of HTML.

### Basic usage with default sanitizer

Using the default sanitizer:

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const target = document.getElementById("target");

target.prependHTML(unsanitizedString);
// Result is that the following is prepended to the current shadowroot:
// <p><i>abc</i> def</p>
```

### Using a custom sanitizer

Using a custom `Sanitizer`, that allows only the {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("button")}}, and {{htmlelement("script")}} elements. Note that {{htmlelement("script")}} is XSS-unsafe, so it will be removed anyway:

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const target = document.getElementById("target");

const mySanitizer = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.prependHTML(unsanitizedString, { sanitizer: mySanitizer });
// Result is that the following is prepended to the current shadowroot:
// <p> def</p>
```

### Using a custom sanitizer with `removeElements`

Using a custom `SanitizerConfig`, that removes only the {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("button")}}, and {{htmlelement("script")}} elements, as well as other XSS-unsafe elements and attributes that are always removed by this method.

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const target = document.getElementById("target");

target.prependHTML(unsanitizedString, {
  sanitizer: { removeElements: ["i", "script"] },
});
// Result is that the following is prepended to the current shadowroot:
// <p> def</p>
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
