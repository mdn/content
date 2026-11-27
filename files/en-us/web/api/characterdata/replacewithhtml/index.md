---
title: "CharacterData: replaceWithHTML() method"
short-title: replaceWithHTML()
slug: Web/API/CharacterData/replaceWithHTML
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CharacterData.replaceWithHTML
---

{{APIRef("DOM")}}

The **`replaceWithHTML()`** method of the {{domxref("CharacterData")}} interface is an [XSS-safe method](/en-US/docs/Web/API/HTML_Sanitizer_API#safe_methods) to parse and sanitize a string of HTML using the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and use it to replace the existing `CharacterData`.

## Syntax

```js-nolint
replaceWithHTML(input)
replaceWithHTML(input, options)
```

### Parameters

- `input` {{experimental_inline}}
  - : A string defining HTML to be sanitized and replace the element.
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

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the parent element is a {{domxref("Document")}}, an {{HTMLElement("html")}} element, a {{HTMLElement("template")}} element, or a hostless {{domxref("DocumentFragment")}}.

## Description

**`replaceWithHTML()`** is an [XSS-safe method](/en-US/docs/Web/API/HTML_Sanitizer_API#safe_methods) to parse and sanitize a string of HTML using the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) and use it to replace the existing `CharacterData`.

It implements the same sanitization logic as all the other [XSS-safe HTML setters](/en-US/docs/Web/API/HTML_Sanitizer_API#safe_methods).

Nothing happens if the node has no parent or the parent is a {{HTMLElement("script")}} element (and similar for SVG {{SVGElement("script")}} elements).

It should be used instead of {{domxref("CharacterData.replaceWithHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

## Examples

> [!NOTE]
> The [`setHTML()`](/docs/Web/API/Element/setHTML#examples) page includes additional examples, including a live example, which are similar to how `replaceWithHTML()` can be used.

These examples shows some of the ways you can use `replaceWithHTML()` to sanitize and inject a string of HTML.

### Basic usage with default sanitizer

Using the default sanitizer:

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const myText = document.getElementById("myText").firstChild;

myText.replaceWithHTML(unsanitizedString);
// Result is that the following replaces the current text:
// <p><i>abc</i> def</p>
```

### Using a custom sanitizer

Using a custom `Sanitizer`, that allows only the {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("button")}}, and {{htmlelement("script")}} elements. Note that {{htmlelement("script")}} is XSS-unsafe, so it will be removed anyway:

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const myText = document.getElementById("myText").firstChild;

const mySanitizer = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
myText.replaceWithHTML(unsanitizedString, { sanitizer: mySanitizer });
// Result is that the following replaces the current text:
// <p> def</p>
```

### Using a custom sanitizer with `removeElements`

Using a custom `SanitizerConfig`, that removes only the {{htmlelement("i")}}, as well as other XSS-unsafe elements and attributes that are always removed by this method.

```js
const unsanitizedString = "<p><i>abc</i><script>alert(1)<" + "/script> def</p>";
const myText = document.getElementById("myText").firstChild;

myText.replaceWithHTML(unsanitizedString, {
  sanitizer: { removeElements: ["i"] },
});
// Result is that the following replaces the current text:
// <p> def</p>
// Since the <i> is removed, and the <script> is removed by default.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.replaceWithHTMLUnsafe()")}}
- {{domxref("Element.replaceWithHTML()")}} and {{domxref("Element.replaceWithHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
