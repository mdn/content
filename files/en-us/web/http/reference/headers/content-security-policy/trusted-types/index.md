---
title: "Content-Security-Policy: trusted-types directive"
short-title: trusted-types
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.trusted-types
sidebar: http
---

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** directive is used to specify an allowlist of [Trusted Type policy names](/en-US/docs/Web/API/Trusted_Types_API) that a website can create using [`trustedTypes.createPolicy()`](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy).

This prevents website code from creating unexpected policies, making it easier to audit trusted type code (`createPolicy()` will throw an exception if it is passed a name which was not listed in `trusted-types`).

> [!NOTE]
> The [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) directive must be set to enable enforcement of trusted types, and the [`trusted-types-eval` keyword](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) is used to relax restrictions on [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) when trusted types are enabled.
>
> See [Trusted Type API](/en-US/docs/Web/API/Trusted_Types_API) for more information.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : A valid policy name consists only of alphanumeric characters, or one of `-#=_/@.%`. A star (`*`) as a policy name instructs the user agent to allow any unique policy name (`allow-duplicates` may relax that further).
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
  - [`require-trusted-types-for` directive](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)
  - [`trusted-types-eval` keyword](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
- [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API)
  - [Injection sink interfaces](/en-US/docs/Web/API/Trusted_Types_API#injection_sink_interfaces)
- [Cross-Site Scripting (XSS)](/en-US/docs/Glossary/Cross-site_scripting)
