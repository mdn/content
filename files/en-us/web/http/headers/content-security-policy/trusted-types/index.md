---
title: "CSP: trusted-types"
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
page-type: http-csp-directive
status:
  - experimental
browser-compat: http.headers.Content-Security-Policy.trusted-types
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} directive instructs user agents to restrict the creation of Trusted Types policies - functions that build non-spoofable, typed values intended to be passed to DOM XSS sinks in place of strings.

Together with **[`require-trusted-types-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)** directive, this allows authors to define rules guarding writing values to the DOM and thus reducing the DOM XSS attack surface to small, isolated parts of the web application codebase, facilitating their monitoring and code review. This directive declares an allowlist of trusted type policy names created with `trustedTypes.createPolicy` from Trusted Types API.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : A valid policy name consists only of alphanumeric characters, or one of "`-#=_/@.%`". A star (`*`) as a policy name instructs the user agent to allow any unique policy name ('`allow-duplicates`' may relax that further).
- `'none'`
  - : Disallows creating any Trusted Type policy (same as not specifying any _\<policyName>_).
- `'allow-duplicates'`
  - : Allows for creating policies with a name that was already used.

## Examples

```js
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== "undefined") {
  const policyFoo = trustedTypes.createPolicy("foo", {});
  const policyFoo2 = trustedTypes.createPolicy("foo", {});
  const policyBaz = trustedTypes.createPolicy("baz", {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/en-US/docs/Glossary/Cross-site_scripting)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill)
