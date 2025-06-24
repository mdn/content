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

> [!WARNING]
> This API parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> For this reason it's much safer to pass only {{domxref("TrustedHTML")}} objects into this method, and to [enforce](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) this using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
> This means you can be sure that the input has been passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

The **`write()`** method of the {{domxref("Document")}} interface writes text in one or more {{domxref("TrustedHTML")}} or string parameters to a document stream opened by {{domxref("document.open()")}}.

## Syntax

```js-nolint
write(markup)
write(markup, markup2)
write(markup, markup2, /* …, */ markupN)
```

### Parameters

- `markup`, …, `markupN`
  - : {{domxref("TrustedHTML")}} objects or strings containing the markup to be written to the document.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The method was called on an XML document, or called when the parser is currently executing a custom element constructor.
- `TypeError`
  - : A string is passed as one of the parameters when [Trusted Types are enforced](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and [no default policy has been defined](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#creating_a_default_policy) for creating {{domxref("TrustedHTML")}} objects.

## Description

`document.write()` parses the markup text in the objects passed as parameters into the open document's object model (DOM), in the order that the parameters are specified.

The passed objects may be {{domxref("TrustedHTML")}} instances or strings.
It is much safer to pass only {{domxref("TrustedHTML")}} objects into this method, and to [enforce](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) this using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
The guarantees that the input has been passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

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

### Writing TrustedHTML

This example uses the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) to sanitize HTML strings of {{htmlelement("script")}} elements before they are written to a document.

The example initially displays some default text and a button.
When the button is clicked, the current document is opened, three strings of HTML are converted to {{domxref("TrustedHTML")}} instances and written into the document, and the document is then closed.
This replaces the document in the example frame, including the original HTML for the button and the JavaScript that made the update!

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

First we use the {{domxref("Window.trustedTypes")}} property to access the global {{domxref("TrustedTypePolicyFactory")}}, and use its {{domxref("TrustedTypePolicyFactory/createPolicy","createPolicy()")}} method to define a policy called `"docPolicy"`.

The new policy defines a transformation function `createHTML()` for creating the {{domxref("TrustedHTML")}} objects that we will pass to the `write()` method.
This method can do anything it likes with the input string: the trusted types API just requires that you pass the input through a policy transformation function, not that the transformation function does anything in particular.

You'd use the method to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input by removing potentially unsafe features such as {{htmlelement("script")}} tags or event handler attributes.
Sanitization is hard to get right, so this process typically uses a reputable third-party library such as [DOMPurify](https://github.com/cure53/DOMPurify).

For the purposes of demonstration, here we implement a rudimentary "sanitizer" that replaces `<` symbols in script opening and closing tags with the `&lt;` character.

```js
const policy = trustedTypes.createPolicy("docPolicy", {
  createHTML(string) {
    return string
      .replace("<script", "&lt;script")
      .replace("</script", "&lt;/script");
  },
});
```

We can then use the {{domxref("TrustedTypePolicy.createHTML()")}} method on the returned policy to create {{domxref("TrustedHTML")}} objects from our original input strings.
These are then passed to the `write()` function when the user clicks the button.

```js
const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('evil afoot')<" + "/script>";
const replace = document.querySelector("#replace");

replace.addEventListener("click", () => {
  document.open();
  document.write(
    policy.createHTML(oneInput),
    policy.createHTML(twoInput),
    policy.createHTML(threeInput),
  );
  document.close();
});
```

#### Results

Press the button and note that the HTML elements that we trust (in this example) are injected, but the untrusted {{htmlelement("script")}} element is now rendered as plain text.

{{EmbedLiveSample("Writing TrustedHTML")}}

### Writing strings

This is the same as the preceding example, except that trusted types are not used or enforced.
We're writing unsanitized strings, which may provide a path for [XSS attacks](/en-US/docs/Web/Security/Attacks/XSS).

The example initially displays some default text and a button.
When the button is clicked, the current document is opened, three strings of HTML are written into the document, and the document is then closed.
This replaces the document in the example frame, including the original HTML for the button and the JavaScript that made the update.

#### HTML

```html
<p>Some original document content.</p>
<button id="replace" type="button">Replace document content</button>
```

#### JavaScript

```js
const replace = document.querySelector("#replace");

const oneInput = "<h1>Out with the old</h1>";
const twoInput = "<p>in with the new!</p>";
const threeInput = "<script>alert('evil afoot')<" + "/script>";

replace.addEventListener("click", () => {
  document.open();
  document.write(oneInput, twoInput, threeInput);
  document.close();
});
```

#### Results

Press the button and note that all the HTML elements are injected.
This includes the {{htmlelement("script")}} element, which in a real application might have executed harmful code.

{{EmbedLiveSample("Writing strings")}}

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
