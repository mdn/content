---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
page-type: http-csp-directive
status:
  - experimental
browser-compat: http.headers.Content-Security-Policy.require-trusted-types-for
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** {{experimental_inline}} directive instructs user agents to control the data passed to DOM XSS sink functions, like {{DOMxRef("Element.innerHTML")}} setter.

When used, those functions only accept non-spoofable, typed values created by Trusted Type policies, and reject strings. Together with **[`trusted-types`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)** directive, which guards creation of Trusted Type policies, this allows authors to define rules guarding writing values to the DOM and thus reducing the DOM XSS attack surface to small, isolated parts of the web application codebase, facilitating their monitoring and code review.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Disallows using strings with DOM XSS injection sink functions, and requires matching types created by Trusted Type policies.

## Examples

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Create a policy that can create TrustedHTML values
  // after sanitizing the input strings with DOMPurify library.
  const sanitizer = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = sanitizer.createHTML(attackerInput); // Puts the sanitized value into the DOM.
  el.innerHTML = attackerInput; // Rejects a string value; throws a TypeError.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/en-US/docs/Glossary/Cross-site_scripting)
- [DOM XSS injection sinks covered by Trusted Types](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill)
