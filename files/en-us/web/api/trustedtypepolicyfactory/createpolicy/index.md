---
title: "TrustedTypePolicyFactory: createPolicy() method"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
page-type: web-api-instance-method
browser-compat: api.TrustedTypePolicyFactory.createPolicy
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`createPolicy()`** method of the {{domxref("TrustedTypePolicyFactory")}} interface creates a {{domxref("TrustedTypePolicy")}} object that implements the rules passed as `policyOptions`.

### The default policy

In Chrome a policy with a name of "default" creates a special policy that will be used if a string (rather than a Trusted Type object) is passed to an injection sink. This can be used in a transitional phase while moving from an application that inserted strings into injection sinks.

> [!NOTE]
> The above behavior is not yet settled in the specification and may change in future.

> [!WARNING]
> A lax default policy could defeat the purpose of using Trusted Types, and therefore should be defined with strict rules to ensure it cannot be used to run dangerous code.

## Syntax

```js-nolint
createPolicy(policyName, policyOptions)
```

### Parameters

- `policyName`
  - : A string with the name of the policy.
- `policyOptions` {{optional_inline}}

  - : User-defined functions for converting strings into trusted values.

    - `createHTML(input[,args])`
      - : A callback function in the form of a string that contains code to run when creating a {{domxref("TrustedHTML")}} object.
    - `createScript(input[,args])`
      - : A callback function in the form of a string that contains code to run when creating a {{domxref("TrustedScript")}} object.
    - `createScriptURL(input[,args])`
      - : A callback function in the form of a string that contains code to run when creating a {{domxref("TrustedScriptURL")}} object.

### Return value

A {{domxref("TrustedTypePolicy")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if policy names are restricted by the [Content Security Policy `trusted-types` directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) and this name is not on the allowlist.
- {{jsxref("TypeError")}}
  - : Thrown if the name is a duplicate and the [Content Security Policy trusted-types directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) is not using `allow-duplicates`.

## Examples

The below code creates a policy with the name `"myEscapePolicy"` with a function defined for `createHTML()` which sanitizes HTML.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Creating a default policy

On a site where Trusted Types are enforced via a Content Security Policy with the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for) directive set to `script`, any injection script that accepts a script expects a Trusted Type object. In the case that a string is inserted instead, the following default policy will be used.

The policy logs a message to the console to remind the developer to refactor this part of the application to use a Trusted Type object. It also appends details of the use of the default policy, type, and injection sink to the returned value.

```js
trustedTypes.createPolicy("default", {
  createScriptURL: (s, type, sink) => {
    console.log("Please refactor.");
    return `${s}?default-policy-used&type=${encodeURIComponent(
      type,
    )}&sink=${encodeURIComponent(sink)}`;
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
