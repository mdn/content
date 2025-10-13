---
title: "DOMParser: parseFromString() method"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
page-type: web-api-instance-method
browser-compat: api.DOMParser.parseFromString
---

{{APIRef("DOMParser")}}

> [!WARNING]
> This method parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always passing `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`parseFromString()`** method of the {{domxref("DOMParser")}} interface parses an input containing either HTML or XML, returning a {{domxref("Document")}} with the type given in the {{domxref("Document/contentType","contentType")}} property.

> [!NOTE]
> The [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) static method provides an ergonomic alternative for parsing HTML markup into a {{domxref("Document")}}.

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameters

- `input`
  - : A {{domxref("TrustedHTML")}} or string instance defining HTML to be parsed.
    The markup must contain either an {{Glossary("HTML")}}, {{Glossary("xml")}}, {{Glossary("XHTML")}}, or {{Glossary("svg")}} document.
- `mimeType`

  - : A string that specifies whether the XML parser or the HTML parser is used to parse the string.

    Allowed values are:

    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Return value

A {{domxref("Document")}} with {{domxref("Document/contentType","contentType")}} matching the given `mimeType`.

> ![NOTE]
> The browser may actually return an {{domxref("HTMLDocument")}} or {{domxref("XMLDocument")}} object.
> These derive from {{domxref("Document")}} and add no attributes: they are essentially equivalent.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : This is thrown when:
    - `mimeType` is passed a value that is not one of the [allowed value](#mimetype).
    - `input` is passed a string value when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`parseFromString()`** method parses an input containing either HTML or XML, returning a {{domxref("Document")}} with the {{domxref("Document/contentType","contentType")}} matching the `mimeType`.
This `Document` contains a complete in-memory DOM that is separate from the main document in the associated page.

If the `mimeType` is `text/html` the input is parsed as HTML and {{htmlelement("script")}} elements are marked as non-executable, events are not fired, and event handlers aren't called to run inline scripts.
While the document can download resources specified in {{htmlelement("iframe")}} and {{htmlelement("img")}} elements, it is essentially inert.
This is ueful because you can parse HTML inputs that include {{glossary("Shadow tree","declarative shadow roots")}}, and perform operations on the document without affecting the visible page.
For example, you can use this to sanitize the input tree, and inject parts of the input into the visible DOM when needed.

For the other allowed values (`text/xml`, `application/xml`, `application/xhtml+xml`, and `image/svg+xml`) the input is parsed as XML.
This is useful if you want to import XML files, validate their structure, and extract data.
If the input doesn't represent well-formed XML, the returned document will contain a `<parsererror>` node describing the nature of the parsing error.

Disallowed `mimeType` values cause a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown.

### Security considerations

This method parses its input into a separate in-memory DOM, disabling any {{htmlelement("script")}} elements and stopping event handlers from running.
While the returned document is effectively inert, event handlers and scripts in its DOM will be able. run if they are inserted into the visible DOM.
The method is therefore a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe input is first parsed into a `Document` without being santizied, and then injected into the visible/active DOM were code is able to run.

You should mitigate this risk by always passing {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup (such as {{htmlelement("script")}} elements and event handler attributes), before it is injected.

Using `TrustedHTML` makes it possible to audit and check that sanitization code is effective in just a few places, rather than scattered across all your injection sinks.
You should not need to pass a sanitizer to the method when using `TrustedHTML`.

Note that even if you sanitize the input of elements and attributes that can execute code, you still need to be careful when taking any user input.
For example, you page might use data in an XML to fetch files that it then executes.

## Examples

### Parsing an input using Trusted Types

In this example we'll safely parse a potentially harmful HTML input and then inject it into the DOM of the visible page.

To mitigate the risk of XSS, we'll create a `TrustedHTML` object from the string containing the HTML.
Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

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

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string and parse it into a `Document`.
Note that the resulting `Document` will represent a complete HTML document with a root `<html>`, `<head>` and `<body>`, even though the input does not have these elements:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

The `safeDocument` now contains a DOM that is sanitized of harmful elements according to our policy.
Below we use {{domxref("Element.replaceWith()")}} to replace the `body` of the visible DOM with the body of our document: scripts in the new body will run, as will code when event handlers are triggered.

```js
document.body.replaceWith(safeDocument.body);
```

### Parsing XML, SVG, and HTML

The code below shows how you use the method to parse each of the content types.
While you should use trusted types in real code, here they are omitted for brevity.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
console.log(doc1.contentType); // "application/xml"

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
console.log(doc2.contentType); // "image/svg+xml"

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
console.log(doc\32.contentType); // "text/html"

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

Note that `application/xml` and `image/svg+xml` MIME types above are functionally identical — the latter does not include any SVG-specific parsing rules.

### Error handling

When using the XML parser with a string that doesn't represent well-formed XML, the {{domxref("XMLDocument")}} returned by `parseFromString` will contain a `<parsererror>` node describing the nature of the parsing error.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  // parsing failed
} else {
  // parsing succeeded
}
```

Additionally, the parsing error may be reported to the browser's JavaScript console.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
