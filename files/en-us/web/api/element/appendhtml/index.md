---
title: "Element: appendHTML() method"
short-title: appendHTML()
slug: Web/API/Element/appendHTML
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Element.appendHTML
---

{{APIRef("DOM")}}

The **`appendHTML()`** method of the {{domxref("Element")}} interface provides an XSS-safe method to parse and sanitize a string of HTML and insert it into the `Element` after the last child of the `Element`.

The method removes any elements and attributes that are considered XSS-unsafe, even if the caller passes a [sanitizer](#sanitizer) option which allows them. For more information see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API).
Notably, the following elements are always removed: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{HTMLElement("base")}}, {{SVGElement("use")}}, as well event handler content attributes (for example, `onclick`, `onload`, `onerror` and so forth). See [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) for more information.

## Syntax

```js-nolint
appendHTML(input)
appendHTML(input, options)
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

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the element is an {{HTMLElement("html")}} element.

## Description

`appendHTML()` drops any elements in the HTML input string that are invalid in the context of the current element, such as a {{htmlelement("col")}} element outside of a {{htmlelement("table")}}.

It then removes any HTML elements and attributes that aren't allowed by the sanitizer configuration, and further removes any XSS-unsafe elements or attributes — whether or not they are allowed by the sanitizer. For more information see the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API).

If no sanitizer is specified in the `options.sanitizer` parameter, `appendHTML()` is used with the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
This configuration is suitable for the majority of use cases as it prevents XSS attacks, as well as other attacks like clickjacking or spoofing.

A custom {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} can be specified to choose which elements, attributes, and comments are allowed or removed.
Note that even if unsafe options are allowed by the sanitizer, they will still be removed when using this method (it removes the same elements as a sanitizer on which {{domxref('Sanitizer.removeUnsafe()')}} has been called).

The method does nothing if the element is a {{HTMLElement("script")}} element (and similar for SVG {{SVGElement("script")}} elements).

For {{HTMLElement("template")}} elements, the HTML is inserted into the template contents (the template `DocumentFragment`), rather than as direct children.

`appendHTML()` can be used instead of {{domxref("Element.setHTML")}} when the HTML needs to insert it into the DOM as the last child of the given element, rather than replacing the whole child HTML of the given element.

It should also be used instead of {{domxref("Element.appendHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

Note that since this method always sanitizes input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

### Related HTML setter APIs

This is part of a series of APIs to set HTML in {{domxref("Element")}}:

| Action                                         | API                                                       | Unsafe API                                                            |
| ---------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| Set the HTML contents of the element           | {{domxref("Element.setHTML", "setHTML")}}                 | {{domxref("Element.setHTMLUnsafe", "setHTMLUnsafe")}}                 |
| Replace the entire element with this HTML      | {{domxref("Element.replaceWithHTML", "replaceWithHTML")}} | {{domxref("Element.replaceWithHTMLUnsafe", "replaceWithHTMLUnsafe")}} |
| Add the HTML before the element                | {{domxref("Element.beforeHTML", "beforeHTML")}}           | {{domxref("Element.beforeHTMLUnsafe", "beforeHTMLUnsafe")}}           |
| Add the HTML as the first child of the element | {{domxref("Element.prependHTML", "prependHTML")}}         | {{domxref("Element.prependHTMLUnsafe", "prependHTMLUnsafe")}}         |
| Add the HTML as the last child of the element  | {{domxref("Element.appendHTML", "appendHTML")}}           | {{domxref("Element.appendHTMLUnsafe", "appendHTMLUnsafe")}}           |
| Add the HTML after the element                 | {{domxref("Element.afterHTML", "afterHTML")}}             | {{domxref("Element.afterHTMLUnsafe", "afterHTMLUnsafe")}}             |

Each API type takes the same arguments but allows for ease of inserting the required HTML in the appropriate place and with or without the default sanitizer applied. The unsafe variants allows scripts to be run using the `runScripts` options.

## Examples

> [!NOTE]
> The [`setHTML()`](/docs/Web/API/Element/setHTML#examples) page includes additional examples, including a live example, which are similar to how `appendHTML()` can be used.

These examples shows some of the ways you can use `appendHTML()` to sanitize and inject a string of HTML.

### Basic usage with default sanitizer

Using the default sanitizer:

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const target = document.getElementById("target");

target.appendHTML(unsanitizedString);
// Result is that the following is appended to the end of the current element:
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
target.appendHTML(unsanitizedString, { sanitizer: mySanitizer });
// Result is that the following is appended to the end of the current element:
// <p> def</p>
```

### Using a custom sanitizer with `removeElements`

Using a custom `SanitizerConfig`, that removes only the {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("button")}}, and {{htmlelement("script")}} elements, as well as other XSS-unsafe elements and attributes that are always removed by this method.

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const target = document.getElementById("target");

target.appendHTML(unsanitizedString, {
  sanitizer: { removeElements: ["i", "script"] },
});
// Result is that the following is appended to the end of the current element:
// <p> def</p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.appendHTMLUnsafe()")}}
- {{domxref("ShadowRoot.appendHTML()")}} and {{domxref("ShadowRoot.appendHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
