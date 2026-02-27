---
title: "Range: createContextualFragment() method"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
page-type: web-api-instance-method
browser-compat: api.Range.createContextualFragment
---

{{ApiRef("DOM")}}

> [!WARNING]
> This method parses its input as HTML or XML, writing the result into a {{domxref("DocumentFragment")}} that might subsequently be injected into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can reduce the risk by assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
> This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

The **`Range.createContextualFragment()`** method of the {{domxref("Range")}} interface returns a {{domxref("DocumentFragment")}} representing the parsed input HTML or XML.

## Syntax

```js-nolint
createContextualFragment(input)
```

### Parameters

- `input`
  - : A {{domxref("TrustedHTML")}} instance or string that represents the text and tags to be converted to a document fragment.

### Return value

A {{domxref("DocumentFragment")}} object.

### Exceptions

- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`Range.createContextualFragment()`** method returns a {{domxref("DocumentFragment")}} by invoking the HTML fragment parsing algorithm or the XML fragment parsing algorithm with the start of the range (the _parent_ of the selected node) as the context node.

The HTML fragment parsing algorithm is used if the range belongs to a `Document` whose HTMLness bit is set.
In the HTML case, if the context node would be `html`, for historical reasons the fragment parsing algorithm is invoked with `body` as the context instead.

### Security considerations

The method does not perform any sanitization of the input to remove XSS-unsafe elements such as {{htmlelement("script")}}, or event handler content attributes.
If the input is provided by a user, and the returned {{domxref("DocumentFragment")}} is subsequently injected into the DOM, this method can be therefore become a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

For example, the following code would inject the potentially dangerous user-provided string into the DOM.

```js example-bad
const untrustedCode = "<script>alert('Potentially evil code!');</script>";

const range = document.createRange();
// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(untrustedCode);
document.body.appendChild(documentFragment);
```

When inserting HTML into a page using `createContextualFragment()`, you should pass {{domxref("TrustedHTML")}} objects instead of strings, and [enforce trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.

## Examples

### Using `createContextualFragment()` with `TrustedHTML`

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we define a policy named `my-policy` to create {{domxref("TrustedHTML")}} objects from the input (we should also enforce the `my-policy` using CSP).
The code implements a no-op policy in order to allow this example to work without a third-party dependency.
Your own application code should use a third-party library such as the "[DOMPurify](https://github.com/cure53/DOMPurify)" library to return sanitized content from the untrusted input.

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML(input) {
    return input; // Do not do this in your own code!
    // Instead do something like:
    // return DOMPurify.sanitize(input, { RETURN_TRUSTED_TYPE: false });
  },
});

const unsafeText = "<script>alert('Potentially evil code!');</script>";
const trustedHTML = policy.createHTML(unsafeText);
```

We can then create a `DocumentFragment` using our trusted version of the original text, and safely append it to the document:

```js
const range = document.createRange();

// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(trustedHTML);
document.body.appendChild(documentFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
