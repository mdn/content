---
title: "Document: write() method"
short-title: write()
slug: Web/API/Document/write
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Document.write
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Use of the `document.write()` method is strongly discouraged.
> Avoid using it, and where possible replace it in existing code.
>
> As [the HTML spec itself warns](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > This method has very idiosyncratic behavior.
> > In some cases, this method can affect the state of the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) while the parser is running, resulting in a DOM that does not correspond to the source of the document (e.g., if the string written is the string "`<plaintext>`" or "`<!--`").
> > In other cases, the call can clear the current page first, as if {{domxref("document.open()")}} had been called.
> > In yet more cases, the method is simply ignored, or throws an exception. Users agents are [explicitly allowed to avoid executing `script` elements inserted via this method](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > And to make matters even worse, the exact behavior of this method can in some cases be dependent on network latency, which can lead to failures that are very hard to debug.
> > For all these reasons, use of this method is strongly discouraged.

The **write()`** method of the {{domxref("Document")}} interface writes text in one or more {{domxref("TrustedHTML")}} or string parameters to a document stream opened by {{domxref("document.open()")}}.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
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

## Description

`document.write()` parses the markup text in the objects passed as parameters into the open document's object model (DOM), in the order that the parameters are specified.

The passed objects may be strings or {{domxref("TrustedHTML")}} instances.
Using the `TrustedHTML` [trusted type](/en-US/docs/Web/API/Trusted_Types_API) is recommended, as this allows the strings to be passed through a transformation function (and potentially sanitized) before they are parsed into the document.
[The trusted types JavaScript API](/en-US/docs/Web/API/Trusted_Types_API#the_trusted_types_javascript_api) section of _Trusted Types API_ explains policy definition and enforcement in more detail.

Because `document.write()` writes to the document **stream**, calling `document.write()` on a closed (loaded) document (without first calling {{domxref("document.open()")}}) automatically calls {{domxref("document.open()")}}, which will [clear the document](/en-US/docs/Web/API/Document/open#description).

The exception is that if the `document.write()` call is embedded within an inline HTML `<script>` tag, then it will not automatically call `document.open()`:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` (and {{domxref("document.writeln")}}) cannot be used with XML or XHTML, and attempting to do so will throw an `InvalidStateError` exception.
This is the case if opening a local file with a .xhtml file extension or for any document served with an `application/xhtml+xml` MIME type.
More information is available in the [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

Using `document.write()` in [deferred](/en-US/docs/Web/HTML/Reference/Elements/script#defer) or [asynchronous](/en-US/docs/Web/HTML/Reference/Elements/script#async) scripts will be ignored and you'll get a message like "A call to `document.write()` from an asynchronously-loaded external script was ignored" in the error console.

In Edge only, calling `document.write()` more than once in an {{HTMLElement("iframe")}} causes the error "SCRIPT70: Permission denied".

Starting with version 55, Chrome will not execute `<script>` elements injected via `document.write()` when specific conditions are met.
For more information, refer to [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Examples

### Write strings

When the button is clicked, this example opens the current document, writes two strings, then closes the document.
This replaces the document in the example frame, including the original HTML for the button and the JavaScript that made the update!

Note that in this example trusted types are not used or enforced.
We're writing unsanitized strings, which may provide a path for [XSS attacks](/en-US/docs/Web/Security/Attacks/XSS).

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

```js
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write("<h1>Out with the old</h1>", "<p>in with the new!</p>");
  document.close();
});
```

#### Results

{{EmbedLiveSample("Write strings")}}

### Writing TrustedHTML

This example is the same as the previous one, except that we use the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) to create {{domxref("TrustedHTML")}} instances, and pass those to the `write()` method instead of strings.

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

First we use the {{domxref("Window.trustedTypes")}} property to access the global {{domxref("TrustedTypePolicyFactory")}}, and use its {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} method to define a policy called `"docPolicy"`.

The new policy defines a transformation function `createHTML()` for creating the {{domxref("TrustedHTML")}} objects that we will pass to the `write()` method.
This method can do anything it likes with the input string: the trusted types API just requires that you pass the input through a policy transformation function, not that the trusted type does anything in particular.

Commonly you'd use the method to sanitize the input of XSS-unsafe elements and attributes, perhaps using a third party library such as [DOMPurify](https://github.com/cure53/DOMPurify).
In this case we implement rudimentary "sanitizer" that just replaces `<` symbols with the `&lt;` characters.

```js
const writeDocumentHTMLPolicy = trustedTypes.createPolicy("docPolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

We can then use the {{domxref("TrustedTypePolicy.createHTML()")}} method on the returned policy to create {{domxref("TrustedHTML")}} objects from our original input strings.
These are then passed to the `write()` function when the user clicks the button.

```js
const oneInput = writeDocumentHTMLPolicy.createHTML(
  "<h1>Out with the old</h1>",
);
const twoInput = writeDocumentHTMLPolicy.createHTML("<p>in with the new!</p>");

const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write(oneInput, twoInput);
  document.close();
});
```

#### Results

Press the button and note that the HTML is now rendered as plain text.
In a real application we'd filter just the unsafe HTML elements and inject the desired ones

{{EmbedLiveSample("Writing TrustedHTML")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.writeln()")}}
- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
- [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API)
- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
