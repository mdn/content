---
title: "Document: parseHTMLUnsafe() static method"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
page-type: web-api-static-method
browser-compat: api.Document.parseHTMLUnsafe_static
---

{{APIRef("DOM")}}

> [!WARNING]
> This method parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

> [!NOTE]
> {{domxref("Document/parseHTML_static", "Document.parseHTML()")}} should almost always be used instead of this method — on browsers where it is supported — as it always removes XSS-unsafe HTML entities.

The **`parseHTMLUnsafe()`** static method of the {{domxref("Document")}} object is used to parse HTML input, optionally filtering unwanted HTML elements and attributes, in order to create a new {{domxref("Document")}} instance.

## Syntax

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### Parameters

- `input`
  - : A {{domxref("TrustedHTML")}} or string instance defining HTML to be parsed.
- `options` {{optional_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed.
        This can also be a string with the value `"default"`, which applies a `Sanitizer` with the default (XSS-safe) configuration.
        If not specified, no sanitizer is used.

        Note that generally a `Sanitizer` is expected than the to be more efficient than a `SanitizerConfig` if the configuration is to reused.

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

The input HTML may include [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom).
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as {{htmlelement("template")}} elements within that shadow root.

`parseHTMLUnsafe()` doesn't perform any sanitization by default.
If no sanitizer is passed as a parameter, all HTML entities in the input will be injected.

### Security considerations

The suffix "Unsafe" in the method name indicates that it does not enforce removal of all XSS-unsafe HTML entities (unlike {{domxref("Document/parseHTML_static", "Document.parseHTML()")}}).
While it can do so if used with an appropriate sanitizer, it doesn't have to use an effective sanitizer, or any sanitizer at all!
The method is therefore a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.

You should mitigate this risk by always passing {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup (such as {{htmlelement("script")}} elements and event handler attributes), before it is injected.

Using `TrustedHTML` makes it possible to audit and check that sanitization code is effective in just a few places, rather than scattered across all your injection sinks.
You should not need to pass a sanitizer to the method when using `TrustedHTML`.

If for any reason you can't use `TrustedHTML` (or even better, `setHTML()`) then the next safest option is to use `setHTMLUnsafe()` with the XSS-safe default {{domxref("Sanitizer")}}.

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
