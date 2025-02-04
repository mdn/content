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
>
> As [the HTML spec itself warns](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > This method has very idiosyncratic behavior.
> > In some cases, this method can affect the state of the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) while the parser is running, resulting in a DOM that does not correspond to the source of the document (e.g. if the string written is the string "`<plaintext>`" or "`<!--`").
> > In other cases, the call can clear the current page first, as if {{domxref("document.open()")}} had been called.
> > In yet more cases, the method is simply ignored, or throws an exception. Users agents are [explicitly allowed to avoid executing `script` elements inserted via this method](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention).
> > And to make matters even worse, the exact behavior of this method can in some cases be dependent on network latency, which can lead to failures that are very hard to debug.
> > For all these reasons, use of this method is strongly discouraged.
> > Therefore, avoid using `document.write()` — and if possible, update any existing code that is still using it.

The **`document.write()`** method writes text in one or more {{domxref("TrustedHTML")}} or string parameters to a document stream opened by {{domxref("document.open()")}}.

> [!NOTE]
> Because `document.write()` writes to the document **stream**, calling `document.write()` on a closed (loaded) document automatically calls `document.open()`, [which will clear the document](/en-US/docs/Web/API/Document/open#description).

## Syntax

```js-nolint
write()
write(text1)
write(text1, text2)
write(text1, text2, /* …, */ textN)
```

### Parameters

- `text1`, …, `textN`
  - : {{domxref("TrustedHTML")}} and/or string objects containing the text to be written to the document.
    `TrustedHTML` is recommended for sanitizing any text that may have been provided as user input.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was called on an XML document, or called when the parser is currently executing a custom element constructor.
- `TypeError`
  - : A string is passed as one of the parameters when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are enforced (using [CSP: require-trusted-types-for](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)), and no [default policy](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#the_default_policy) has been defined for creating {{domxref("TrustedHTML")}} objects.

## Description

`document.write()` parses the text in the objects passed as parameters into the open document's object model (DOM), in the order that the parameters are specified.

The passed objects may be strings or {{domxref("TrustedHTML")}} objects (if supported by the browser), or both.

For example, this code fragment opens the current document, and then parses strings containing {{htmlelement("h1")}} and {{htmlelement("p")}} elements to a stream.
After writing it calls {{domxref("document.close()")}} to tell the browser to finish loading the page.

```js
document.open();
document.write("<h1>Out with the old</h1>", "<p>in with the new!</p>");
document.close();
```

Above we're hard-coding the strings, but if any of the text was provided as user input, it would potentially provide a path for executing unsafe code in the content of the current origin ([XSS attacks](/en-US/docs/Web/Security/Attacks/XSS)).
This can be mitigated by use the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API), which allows you to ensure that [injection_sinks](/en-US/docs/Web/API/Trusted_Types_API#injection_sinks) like `write()` may only be passed objects that have already been sanitized of unwanted elements and attributes.

For `write()`, this means that instead of passing a string you pass a {{domxref("TrustedHTML")}} object that contains a sanitized version any user input.

```js
// Create a policy for parsing text to be written to documents
const writeDocumentHTMLPolicy = trustedTypes.createPolicy("myDocumentPolicy", {
  createHTML: (string) =>
    string.replace(/* some kind of santization function */),
});

// Use policy to sanitize potentially unsafe text, returning a TrustedHTML object contains
const escapedDocumentHTML = writeDocumentHTMLPolicy.createHTML(
  "<h1>Out with the old</h1>",
);

// Pass the TrustedHTML to write()
document.open();
document.write(escapedDocumentHTML, "<p>in with the new!</p>");
document.close();
```

[The trusted types JavaScript API](/en-US/docs/Web/API/Trusted_Types_API#the_trusted_types_javascript_api) section of _Trusted Types API_ explains policy definition and enforcement in more detail.
We also provide an example below.

### Usage notes

Writing to a document that is already loaded without first calling {{domxref("document.open()")}} will automatically call `document.open()`.
This will replace the content of the loaded document.

The exception is that if the `document.write()` call is embedded within an inline HTML `<script>` tag, then it will not automatically call `document.open()`:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

`document.write()` and {{domxref("document.writeln")}} cannot be used with XML or XHTML, and attempting to do so will throw an `InvalidStateError` exception.

Using `document.write()` in [deferred](/en-US/docs/Web/HTML/Element/script#defer) or [asynchronous](/en-US/docs/Web/HTML/Element/script#async) scripts will be ignored and you'll get a message like "A call to `document.write()` from an asynchronously-loaded external script was ignored" in the error console.
Starting with version 55, Chrome will not execute `<script>` elements injected via `document.write()` when specific conditions are met. For more information, refer to [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Examples

### Write strings

This example opens the current document, writes two strings, then closes the document.
This replaces the document in the example frame, including the HTML for the button and the JavaScript that made the update!

Note that in this example trusted types are not used or enforced.
We're writing unsanitized strings, which may provide a path for [XSS attacks](/en-US/docs/Web/Security/Attacks/XSS).

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

```js
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write("<h1>Out with the old</h1>", "<p>in with the new!</p>");
  document.close();
});
```

{{EmbedLiveSample("Write strings")}}

### Writing TrustedHTML

This example is the same as the one before, except that the first parameter is sanitized.

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

```js
const replace = document.querySelector("#replace");

const writeDocumentHTMLPolicy = trustedTypes.createPolicy("myDocumentPolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escapedDocumentHTML = writeDocumentHTMLPolicy.createHTML(
  "<h1>Out with the old</h1>",
);

replace.addEventListener("click", () => {
  document.open();
  document.write(escapedDocumentHTML, "<p>in with the new!</p>");
  document.close();
});
```

Press the button and note that the "heading text" is rendered as plain text.

{{EmbedLiveSample("Writing TrustedHTML")}}

We use the {{domxref("Window.trustedTypes")}} to access the global {{domxref("TrustedTypePolicyFactory")}}, and call its {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} method to define the sanitize function used for creating {{domxref("TrustedHTML")}} objects from text.
For example, this code creates a policy named `"myDocumentPolicy"` that we use to sanitize some text, and then we can pass the returned `TrustedHTML` to `write()`.

Readers will note that the actual sanitization function we have used here replaces `<` symbols with `&lt`, turning HTML elements turned into plain text.
That isn't very useful for this text, where the string is supposed to be rendered as HTML, but it would be much safer if the string was coming from user input.
In any case, note that the policy is "named", so that we can decide a different policy for sanitizing HTML intended for different injection sinks.

If trusted types are enforced using [CSP: require-trusted-types-for](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for) then all text sent to `write()` _must_ be sanitized.
While you should create and use appropriate policies, it is possible to define a [default policy](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#the_default_policy) that will automatically be applied to strings used in this API.

For more information see [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

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
