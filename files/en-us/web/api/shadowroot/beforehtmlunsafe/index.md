---
title: "ShadowRoot: beforeHTMLUnsafe() method"
short-title: beforeHTMLUnsafe()
slug: Web/API/ShadowRoot/beforeHTMLUnsafe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ShadowRoot.beforeHTMLUnsafe
---

{{APIRef("DOM")}}

> [!WARNING]
> This method parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

> [!NOTE]
> {{domxref("ShadowRoot.beforeHTML()")}} should almost always be used instead of this method — on browsers where it is supported — as it always removes XSS-unsafe HTML entities.

The **`beforeHTMLUnsafe()`** method of the {{domxref("Element")}} interface is used to parse HTML input into a {{domxref("DocumentFragment")}}, optionally filtering out unwanted elements and attributes, and those that don't belong in the context, and then using it to replace the element in the DOM.

This is similar to {{domxref("ShadowRoot.setHTMLUnsafe")}} but allows replacement of the entire element, rather than setting child elements only.

Note that the safe variants of these methods (for example, {{domxref("ShadowRoot.beforeHTML")}}) always use the XSS-safe sanitizer, as well as any provided sanitizer parameter. The provided sanitizer is applied in addition to the default XSS-safe sanitizer, whereas with `Unsafe` methods any provided sanitizer is the only sanitizer used.

## Syntax

```js-nolint
beforeHTMLUnsafe(input)
beforeHTMLUnsafe(input, options)
```

### Parameters

- `input` {{experimental_inline}}
  - : A {{domxref("TrustedHTML")}} instance or string defining HTML to be parsed.
- `options` {{optional_inline}} {{experimental_inline}}
  - : An options object with the following optional parameters:
    - `sanitizer` {{optional_inline}} {{experimental_inline}}
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object that defines what elements of the input will be allowed or removed.
        This can also be a string with the value `"default"`, which applies a `Sanitizer` with the (XSS-safe) [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        If not specified, no sanitizer is used.

        Note that if you're using the same configuration multiple times, it's expected to be more efficient to use a `Sanitizer` and modify it when you need to.
    - `runScripts` {{optional_inline}} {{experimental_inline}}
      - : A boolean value indicating whether any scripts included in the newly inserted HTML should run before inserting. The default is `false`.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{experimental_inline}}
  - : This is thrown if:
    - `input` is passed a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    - `options.sanitizer` is passed a:
      - {{domxref("SanitizerConfig")}} that isn't [valid](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).
        For example, a configuration that includes both "allowed" and "removed" configuration settings.
      - string that does not have the value `"default"`.
      - value that is not a {{domxref("Sanitizer")}}, {{domxref("SanitizerConfig")}}, or string.

## Description

The **`beforeHTMLUnsafe()`** method is used to parse an HTML input into a {{domxref("DocumentFragment")}}, optionally sanitizing it of unwanted elements and attributes, and discarding elements that the HTML specification doesn't allow in the target element (such as {{htmlelement("li")}} inside a {{htmlelement("div")}}).
The `DocumentFragment` is then used to replace the element in the DOM.

Unlike with {{domxref("ShadowRoot.innerHTML")}}, [declarative shadow roots](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in the input will be parsed into the DOM.
If the string of HTML defines more than one [declarative shadow root](/en-US/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in a particular shadow host then only the first {{domxref("ShadowRoot")}} is created — subsequent declarations are parsed as `<template>` elements within that shadow root.

`beforeHTMLUnsafe()` doesn't perform any sanitization by default, though also does not run scripts by default. If no sanitizer is passed as a parameter, all HTML entities in the input will be injected. It is therefore potentially even less safe that {{domxref("ShadowRoot.innerHTML")}}, which does not allow {{htmlelement("script")}} execution when parsing.

### Related HTML setter APIs

This is part of a series of APIs to set HTML:

| Action                                         | API                                                          | Unsafe API                                                               |
| ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Set the HTML contents of the element           | {{domxref("ShadowRoot.setHTML", "setHTML")}}                 | {{domxref("ShadowRoot.setHTMLUnsafe", "setHTMLUnsafe")}}.                |
| Replace the entire element with this HTML      | {{domxref("ShadowRoot.replaceWithHTML", "replaceWithHTML")}} | {{domxref("ShadowRoot.replaceWithHTMLUnsafe", "replaceWithHTMLUnsafe")}} |
| Add the HTML before the element                | {{domxref("ShadowRoot.beforeHTML", "beforeHTML")}}           | {{domxref("ShadowRoot.beforeHTMLUnsafe", "beforeHTMLUnsafe")}}           |
| Add the HTML as the first child of the element | {{domxref("ShadowRoot.prependHTML", "prependHTML")}}         | {{domxref("ShadowRoot.prependHTMLUnsafe", "prependHTMLUnsafe")}}         |
| Add the HTML as the last child of the element  | {{domxref("ShadowRoot.appendHTML", "appendHTML")}}           | {{domxref("ShadowRoot.appendHTMLUnsafe", "appendHTMLUnsafe")}}           |
| Add the HTML after the element                 | {{domxref("ShadowRoot.afterHTML", "afterHTML")}}             | {{domxref("ShadowRoot.afterHTMLUnsafe", "afterHTMLUnsafe")}}             |

Each API type takes the same arguments but allows for ease of inserting the required HTML in the appropriate place and with or without the default sanitizer applied. The unsafe variants allow allow scripts to be run using the `runScripts` options.

### Security considerations

The suffix "Unsafe" in the method name indicates that it does not enforce removal of all XSS-unsafe HTML entities (unlike {{domxref("ShadowRoot.beforeHTML()")}}).
While it can do so if used with an appropriate sanitizer, it doesn't have to use an effective sanitizer, or any sanitizer at all!
The method is therefore a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.

You should mitigate this risk by always passing {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup (such as {{htmlelement("script")}} elements and event handler attributes), before it is injected.

Using `TrustedHTML` makes it possible to audit and check that sanitization code is effective in just a few places, rather than scattered across all your injection sinks.
You should not have to pass a sanitizer to the method when using `TrustedHTML`.

If for any reason you can't use `TrustedHTML` (or even better, `beforeHTML()`) then the next safest option is to use `beforeHTMLUnsafe()` with the [default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### When should `beforeHTMLUnsafe()` be used?

`beforeHTMLUnsafe()` should almost never be used if {{domxref("ShadowRoot.beforeHTML()")}} is available, because there are very few (if any) cases where user-provided HTML input should need to include XSS-unsafe elements.
Not only is `beforeHTML()` safe, but it avoids having to consider trusted types.

Using `beforeHTMLUnsafe()` might be appropriate if:

- You can't use `beforeHTML()` or trusted types (for whatever reason) and you want to have the safest possible filtering.
  In this case you might use `beforeHTMLUnsafe()` with the default {{domxref("Sanitizer")}} to filter all XSS-unsafe elements.
- You can't use `beforeHTML()` and the input might contain declarative shadow roots, so you can't use {{domxref("ShadowRoot.innerHTML")}}.
- You have an edge case where you have to allow HTML input that includes a known set of unsafe HTML entities.

  You can't use `beforeHTML()` in this case, because it strips all unsafe entities.
  You could use `beforeHTMLUnsafe()` without a sanitizer or `innerHTML`, but that would allow all unsafe entities.

  A better option here is to call `beforeHTMLUnsafe()` with a sanitizer that allows just those dangerous elements and attributes we actually need.
  While this is still unsafe, it is safer than allowing all of them.

For the last point, consider a situation where your code relies on being able to use unsafe `onclick` handlers.
The following code shows the effect of the different methods and sanitizers for this case.

```js
const target = document.querySelector("#target");

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Safe - removes all XSS-unsafe entities.
target.beforeHTML(input);

// Removes no event handler attributes
target.beforeHTMLUnsafe(input);

// Safe - removes all XSS-unsafe entities.
const configSafe = new Sanitizer();
target.beforeHTMLUnsafe(input, { sanitizer: configSafe });

// Removes all XSS-unsafe entities except `onclick`
const configLessSafe = new Sanitizer();
config.allowAttribute("onclick");
target.beforeHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## Examples

> [!NOTE]
> The [`setHTMLUnsafe()`](/docs/Web/API/Element/setHTMLUnsafe#examples) page includes additional examples, including a live example, which are similar to how `beforeHTMLUnsafe()` can be used.

### beforeHTMLUnsafe() with Trusted Types

To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then pass that object to `beforeHTMLUnsafe()`.
Since trusted types are not yet supported on all browsers, we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input as shown below:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Now that we have `trustedHTML`, the code below shows how you can use it with `beforeHTMLUnsafe()`.
The input has been through the transformation function, so we don't pass a sanitizer to the method.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// beforeHTMLUnsafe() with no sanitizer
target.beforeHTMLUnsafe(trustedHTML);
```

### Using beforeHTMLUnsafe() without Trusted Types

This example demonstrates the case where we aren't using trusted types, so we'll be passing sanitizer arguments.

The code creates an untrusted string and shows a number of ways a sanitizer can be passed to the method.

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the target Element with id "target"
const target = document.getElementById("target");

// Define custom Sanitizer and use in beforeHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.beforeHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within beforeHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
target.beforeHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### Using beforeHTMLUnsafe() without `runScripts`

This example demonstrates the case where we aren't using trusted types, so we'll be passing sanitizer arguments.

The code first creates an untrusted string and shows a number of ways a sanitizer can be passed to the method.

```js
// The potentially malicious string
const untrustedString = "<script src="example.js"></script><p>Other content</p>";

// Get the target Element with id "target"
const target = document.getElementById("target");

// Define custom SanitizerConfig within setHTMLUnsafe()
// Allows the <script> element and also executes it before insertion.
target.beforeHTMLUnsafe(untrustedString, {
  sanitizer: {},
  runScript: true
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.beforeHTML()")}}
- {{domxref("ShadowRoot.beforeHTML()")}} and {{domxref("CharacterData.beforeHTMLUnsafe()")}}
- {{domxref("CharacterData.beforeHTML()")}} and {{domxref("CharacterData.beforeHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
