---
title: "Document: writeln() method"
short-title: writeln()
slug: Web/API/Document/writeln
page-type: web-api-instance-method
browser-compat: api.Document.writeln
---

{{ ApiRef("DOM") }}

> [!WARNING]
> This API parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> For this reason it's much safer to pass only {{domxref("TrustedHTML")}} objects into this method, and to [enforce](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) this using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
> This means you can be sure that the input has been passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

The **`writeln()`** method of the {{domxref("Document")}} interface writes text in one or more {{domxref("TrustedHTML")}} or string parameters to a document stream opened by {{domxref("document.open()")}}, followed by a newline character.

The method is essentially the same as {{domxref("document.write()")}} but adds a newline (information in the linked topic also applies to this method).
This newline will only be visible if it is injected inside an element where newlines are displayed.
The additional information in {{domxref("document.write()")}} also applies to this method.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameters

- `markup`, …, `markupN`
  - : {{domxref("TrustedHTML")}} or string objects containing the text to be written to the document.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was called on an XML document, or called when the parser is currently executing a custom element constructor.
- `TypeError`
  - : A string is passed as one of the parameters when [Trusted Types are enforced](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and [no default policy has been defined](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) for creating {{domxref("TrustedHTML")}} objects.

## Examples

### Writing TrustedHTML

This example uses the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) to sanitize HTML strings before they are written to a document.
You should always use trusted types for passing untrusted strings to unsafe APIs.

The example initially displays some default text and a button.
When the button is clicked, the current document is opened, some strings of HTML are converted to {{domxref("TrustedHTML")}} instances and written into the document, and the document is then closed.
This replaces the document in the example frame, including the original HTML for the button and the JavaScript that made the update!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

First we use the {{domxref("Window.trustedTypes")}} property to access the global {{domxref("TrustedTypePolicyFactory")}}, and use its {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} method to define a policy called `"docPolicy"`.

The new policy defines a transformation function `createHTML()` for creating the {{domxref("TrustedHTML")}} objects that we will pass to the `writeln()` method.
This method can do anything it likes with the input string: the trusted types API just requires that you pass the input through a policy transformation function, not that the transformation function does anything in particular.

You'd use the method to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input by removing potentially unsafe features such as {{htmlelement("script")}} tags or event handler attributes.
Sanitization is hard to get right, so this process typically uses a reputable third-party library such as [DOMPurify](https://github.com/cure53/DOMPurify).

Here we implement a rudimentary "sanitizer" that replaces `<` symbols in script opening and closing tags with the `&lt;` character.
The injected strings in this example don't actually contain any harmful elements, so this is purely for demonstration.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML: (string) => {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

We can then use the {{domxref("TrustedTypePolicy.createHTML()")}} method on the returned policy to create {{domxref("TrustedHTML")}} objects from our original input strings.
These are then passed to the `writeln()` function when the user clicks the button.

```js
const replace = document.querySelector("#replace");
const oneInput = "<h1>Out with";
const twoInput = "the old</h1>";
const threeInput = "<pre>in with";
const fourInput = "the new!</pre>";

replace.addEventListener("click", () => {
  document.open();
  document.writeln(policy.createHTML(oneInput));
  document.writeln(policy.createHTML(twoInput), policy.createHTML(threeInput));
  document.writeln(policy.createHTML(fourInput));
  document.close();
});
```

#### Results

Click the button.
Note that a newline is added after each call to `writeln()`, but this will only be visible inside the {{htmlelement("pre")}} element because its layout preserves whitespace by default.

{{EmbedLiveSample("Writing TrustedHTML")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
