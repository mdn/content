---
title: "Document: parseHTMLUnsafe() static method"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
page-type: web-api-static-method
browser-compat: api.Document.parseHTMLUnsafe_static
---

{{APIRef("DOM")}}

The **`parseHTMLUnsafe()`** static method of the {{domxref("Document")}} object is used to parse an HTML input, optionally filtering unwanted HTML elements and attributes, in order to create a new {{domxref("Document")}} instance.

Unlike with {{domxref("Document.parseHTML_static", "Document.parseHTML()")}}, XSS-unsafe HTML entities are not guaranteed to be removed.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameters

- `input`
  - : A string or {{domxref("TrustedHTML")}} instance defining HTML to be parsed.
- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `sanitizer` {{optional_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed.
        Note that generally a `"Sanitizer` is expected than the to be more efficient than a `SanitizerConfig` if the configuration is to reused.
        If not specified, no sanitizer is used.

### Return value

A {{domxref("Document")}}.

### Exceptions

- `TypeError`

  - : This is thrown if:

    - `html` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.
      - non-normalized {{domxref("SanitizerConfig")}} (one that includes both "allowed" and "removed" configuration settings).
      - string that does not have the value `"default"`.

## Description

The **`parseHTMLUnsafe()`** static method can be used to create a new {{domxref("Document")}} instance, optionally filter out unwanted elements and attributes.
The resulting `Document` will have a [content type](/en-US/docs/Web/API/Document/contentType) of "text/html", a [character set](/en-US/docs/Web/API/Document/characterSet) of UTF-8, and a URL of "about:blank".

The suffix "Unsafe" in the method name indicates that, while the method does allow the input string to be filtered of unwanted HTML entities, it does not enforce the sanitization or removal of potentially unsafe XSS-relevant input.
If no sanitizer configuration is specified in the `options.sanitizer` parameter, `parseHTMLUnsafe()` is used without any sanitization.
Note that {{htmlelement("script")}} elements are not evaluated during parsing.

The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as {{htmlelement("template")}} elements within that shadow root.

`parseHTMLUnsafe()` should be instead of {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} when parsing potentially unsafe strings of HTML that for whatever reason need to contain XSS-unsafe elements or attributes.
If the HTML to be parsed doesn't need to contain unsafe HTML entities, then you should use `Document.parseHTML()`.

Note that since this method does not necessarily sanitize input strings of XSS-unsafe entities, input strings should also be validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).
If the method is used with both a trusted types and a sanitizer, the HTML input will be passed through the trusted type transformation function before it is sanitized.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}}
- {{domxref("Element.setHTML()")}} and {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} and {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("DOMParser.parseFromString()")}} for parsing HTML or XML into a DOM tree
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)
