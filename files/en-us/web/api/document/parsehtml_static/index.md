---
title: "Document: parseHTML() static method"
short-title: parseHTML()
slug: Web/API/Document/parseHTML_static
page-type: web-api-static-method
browser-compat: api.Document.parseHTML_static
---

{{APIRef("DOM")}}

The **`parseHTML()`** static method of the {{domxref("Document")}} object provides an XSS-safe method to parse and sanitize a string of HTML in order to create a new {{domxref("Document")}} instance.
The resulting `Document` will have a [content type](/en-US/docs/Web/API/Document/contentType) of "text/html", a [character set](/en-US/docs/Web/API/Document/characterSet) of UTF-8, and a URL of "about:blank".

If no sanitizer configuration is specified in the `options.sanitizer` parameter, `parseHTML()` is used with the default {{domxref("Sanitizer")}} configuration.
This configuration allows all elements and attributes that are considered XSS-safe, thereby disallowing entities that are considered unsafe.
A custom sanitizer or sanitizer configuration can be specified to choose which elements, attributes, and comments are allowed or removed.
Note that even if unsafe options are allowed by the sanitizer configuration, they will still be removed when using this method (which implicitly calls {{domxref('Sanitizer.removeUnsafe()')}}).

The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as {{htmlelement("template")}} elements within that shadow root.

`parseHTML()` should be used instead of {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.
If the HTML to be parsed doesn't need to contain unsafe HTML entities, then you should use `Document.parseHTML()`.

Note that since this method always sanitizes input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

## Syntax

```js-nolint
Document.parseHTML(input)
Document.parseHTML(input, options)
```

### Parameters

- `input`
  - : A string defining HTML to be sanitized and injected into the shadow root.
- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `sanitizer`
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed, or the string `"default"` for the default sanitizer configuration.
        Note that generally a `"Sanitizer` is expected to be more efficient than a `SanitizerConfig` if the configuration is to reused.
        If not specified, the default sanitizer configuration is used.

### Return value

A {{domxref("Document")}}.

### Exceptions

- `TypeError`

  - : This is thrown if `options.sanitizer` is passed a:

    - non-normalized {{domxref("SanitizerConfig")}} (one that includes both "allowed" and "removed" configuration settings).
    - string that does not have the value `"default"`.
    - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- {{domxref("Element.setHTML()")}} and {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} and {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("DOMParser.parseFromString()")}} for parsing HTML or XML into a DOM tree
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
