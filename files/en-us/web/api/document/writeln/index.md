---
title: "Document: writeln() method"
short-title: writeln()
slug: Web/API/Document/writeln
page-type: web-api-instance-method
browser-compat: api.Document.writeln
---

{{ ApiRef("DOM") }}

The **`writeln()`** method of the {{domxref("Document")}} interface writes text in one or more {{domxref("TrustedHTML")}} or string parameters to a document stream opened by {{domxref("document.open()")}}, followed by a newline character.

The method is essentially the same as {{domxref("document.write()")}} but adds a newline.
This newline will only be visible if it is injected inside an element where newlines are displayed.

## Syntax

```js-nolint
writeln(markup)
writeln(markup, markup2)
writeln(markup, markup2, /* …, */ markupN)
```

### Parameters

- `markup`, …, `markupN`
  - : {{domxref("TrustedHTML")}} or string objects containing the text to be written to the document.
    `TrustedHTML` is recommended for sanitizing any markup that may have been provided as user input.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was called on an XML document, or called when the parser is currently executing a custom element constructor.
- `TypeError`
  - : A string is passed as one of the parameters when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are enforced (using [CSP: require-trusted-types-for](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)), and no [default policy](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#the_default_policy) has been defined for creating {{domxref("TrustedHTML")}} objects.

## Examples

### Write strings

When the button is clicked, this example opens the current document, writes a number of strings, then closes the document.
This replaces the document in the example frame, including the original HTML for the button and the JavaScript that made the update!

Note that in this example trusted types are not used or enforced.
We're writing unsanitized strings, which may provide a path for [XSS attacks](/en-US/docs/Web/Security/Attacks/XSS).

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

The code below adds opens the document, writes four strings when the button is clicked, and then closes the document when the button is clicked.

```js
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.writeln("<h1>Out with");
  document.writeln("the old</h1>", "<pre>in with");
  document.writeln("the new!</pre>");
  document.close();
});
```

#### Results

Click the button.
Note that a newline is added after each call to `writeln()`, but this will only be visible inside the {{htmlelement("pre")}} element as its layout preserves whitespace by default.

{{EmbedLiveSample("Write strings")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
