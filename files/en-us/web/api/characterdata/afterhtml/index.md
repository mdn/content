---
title: "CharacterData: afterHTML() method"
short-title: afterHTML()
slug: Web/API/CharacterData/afterHTML
page-type: web-api-instance-method
browser-compat: api.CharacterData.afterHTML
---

{{APIRef("DOM")}}

The **`afterHTML()`** method of the {{domxref("CharacterData")}} interface provides an XSS-safe method to parse and sanitize a string of HTML and insert it into the DOM after the existing character data.

The method removes any elements and attributes that are considered XSS-unsafe, even if allowed by a passed sanitizer.
Notably, the following elements are always removed: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, and event handler attributes.

This is similar to {{domxref("Element.setHTML")}} but allows addition to the entire character data, rather than setting child elements of an element.

## Syntax

```js-nolint
afterHTML(input)
afterHTML(input, options)
```

### Parameters

- `input` {{experimental_inline}}
  - : A string defining HTML to be sanitized and replace the element.
- `options` {{optional_inline}} {{experimental_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{experimental_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed, or the string `"default"` for the default configuration.
        The method will remove any XSS-unsafe elements and attributes, even if allowed by the sanitizer.
        If not specified, the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) is used.

        Note that if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{experimental_inline}}
  - : This is thrown if `options.sanitizer` is passed a:
    - {{domxref("SanitizerConfig")}} that isn't [valid](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).
      For example, a configuration that includes both "allowed" and "removed" configuration settings.
    - string that does not have the value `"default"`.
    - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.

## Description

`afterHTML()` drops any elements in the HTML input string that are invalid in the context of the current element, such as a {{htmlelement("col")}} element outside of a {{htmlelement("table")}}.

It then removes any HTML entities that aren't allowed by the sanitizer configuration, and further removes any XSS-unsafe elements or attributes — whether or not they are allowed by the sanitizer.

If no sanitizer is specified in the `options.sanitizer` parameter, `afterHTML()` is used with the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
This configuration is suitable for the majority of use cases as it prevents XSS attacks, as well as other attacks like clickjacking or spoofing.

A custom `Sanitizer` or `SanitizerConfig` can be specified to choose which elements, attributes, and comments are allowed or removed.
Note that even if unsafe options are allowed by the sanitizer, they will still be removed when using this method (it removes the same elements as a sanitizer on which {{domxref('Sanitizer.removeUnsafe()')}} has been called).

`afterHTML()` can be used instead of {{domxref("Element.setHTML")}} when additional character data needs to be added.

It should also be used instead of {{domxref("CharacterData.afterHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

Note that since this method always sanitizes input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

### Related HTML setter APIs

This is part of a series of APIs to set HTML:

| Action                                    | API                                                             | Unsafe API                                                                  |
| ----------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Replace the entire element with this HTML | {{domxref("CharacterData.replaceWithHTML", "replaceWithHTML")}} | {{domxref("CharacterData.replaceWithHTMLUnsafe", "replaceWithHTMLUnsafe")}} |
| Add the HTML before the element           | {{domxref("CharacterData.beforeHTML", "beforeHTML")}}           | {{domxref("CharacterData.beforeHTMLUnsafe", "beforeHTMLUnsafe")}}           |
| Add the HTML after the element            | {{domxref("CharacterData.afterHTML", "afterHTML")}}             | {{domxref("CharacterData.afterHTMLUnsafe", "afterHTMLUnsafe")}}             |

Each API type takes the same arguments but allows for ease of inserting the required HTML in the appropriate place and with or without the default sanitizer applied. The unsafe variants allow allow scripts to be run using the `runScripts` options.

Similar elements, and more, exist on Element (for example {{domxref("Element.afterHTML")}})

## Examples

> [!NOTE]
> The [`setHTML()`](/docs/Web/API/Element/setHTML#examples) page includes additional examples, including a live example, which are similar to how `afterHTMLUnsafe()` can be used.

### Basic usage

This example shows some of the ways you can use `afterHTML()` to sanitize and inject a string of HTML.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// Get the myText Element with id "myText"
const myText = document.getElementById("myText").firstChild;

// afterHTML() with default sanitizer
myText.afterHTML(unsanitizedString);

// Define custom Sanitizer and use in afterHTML()
// This allows only elements: div, p, button (script is unsafe and will be removed)
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
myText.afterHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within afterHTML()
// This removes elements div, p, button, script, and any other unsafe elements/attributes
myText.afterHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.afterHTMLUnsafe()")}}
- {{domxref("Element.afterHTML()")}} and {{domxref("Element.afterHTMLUnsafe()")}}
- {{domxref("ShadowRoot.afterHTML()")}} and {{domxref("ShadowRoot.afterHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
