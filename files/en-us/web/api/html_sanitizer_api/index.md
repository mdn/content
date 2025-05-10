---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
page-type: web-api-overview
browser-compat: api.Sanitizer
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

The **HTML Sanitizer API** allow developers to take untrusted strings of HTML and {{domxref('Document')}} or {{domxref('DocumentFragment')}} objects, and sanitize them for safe insertion into a document's DOM.

## Concepts and usage

Web applications often need to work with untrusted HTML on the client side, for example, as part of a client-side templating solution or for rendering user generated content, or when including data in a frame from another site.
The Sanitizer API allows for rendering of this potentially untrusted HTML in a safe manner.

To access the API you would use the {{domxref('Sanitizer.Sanitizer()','Sanitizer()')}} constructor to create and configure a {{domxref('Sanitizer')}} instance.
The configuration options parameter allows you to specify the allowed and dis-allowed elements and attributes, and to enable custom elements and comments.

The most common use-case - preventing XSS - is handled by the default configuration.
Creating a {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} with a custom configuration is necessary only to handle additional, application-specific use cases.

The API has two main methods for sanitizing data:

1. {{domxref('Element.setHTML()')}} parses and sanitizes a string of HTML and immediately inserts it into the DOM as a child of the current element.
   This is essentially a "safe" version of {{domxref('Element.innerHTML')}}, and should be used instead of `innerHTML` when inserting untrusted data.
2. {{domxref('Sanitizer.sanitize()')}} sanitizes data that is in a {{domxref('Document')}} or {{domxref('DocumentFragment')}}. It might be used, for example, to sanitize a {{domxref('Document')}} instance in a frame.

### Parsing and sanitizing strings

The result of parsing a string of HTML depends on the context/the element into which it is inserted.

For example, an HTML string containing {{HTMLElement("td")}} elements is valid if inserted under a {{HTMLElement("table")}} elements, but will be dropped if inserted in a {{HTMLElement("div")}} element.
Similarly, an {{HTMLElement("em")}} element is a valid node in a {{HTMLElement("div")}} but the tag will be escaped if used in a {{HTMLElement("textarea")}}:

```html
<!-- "<em>bla</em>" inserted into <div> -->
<div><em>bla</em></div>

<!-- "<em>bla</em>" inserted into <textarea> -->
<textarea>&lt;em&gt;bla</textarea>
```

The target element must therefore be known when the parser is run and the resulting subtree must be inserted into that same type of element in the DOM, or the result will be incorrect.
This consideration does not matter for {{domxref('Element.setHTML()')}} as it is called on a particular element and the context is therefore implicit.

The parser may also perform normalization operations on the input string.
As a result, even if the HTML is valid and the sanitizer method does nothing, the sanitized output may not precisely match the unsanitized input.
This applies to both methods.

<!--
    Note that this is an "XSS-unsafe" method: any entities allowed by the sanitizer will be inserted, or all entities if there is no sanitizer.
    Note that this is an "XSS-safe" method, and will only allow trusted entities to be inserted, irrespective of the provided sanitizer.
-->

## Interfaces

- {{domxref('Sanitizer')}}
  - : A reusable sanitizer configuration object that defines what elements and attributes should be allowed/removed when sanitizing untrusted strings of HTML.
    This is used in the methods that insert strings of HTML into the DOM or Document.
- {{domxref('SanitizerConfig')}}
  - : A dictionary that defines a sanitizer configuration.
    This can be used in the same places as {{domxref('Sanitizer')}} but is likely to be less efficient to use and reuse.

## Associated methods

- {{domxref('Element.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('Element.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.
- {{domxref('ShadowRoot.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.
- {{domxref('Document.parseHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then set as the root of the {{domxref("Document")}}.
- {{domxref('Document.parseHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then set as the root of the {{domxref("Document")}}.

## Examples

The following examples show how to use the sanitizer API using the _default_ sanitizer (at time of writing configuration operations are not yet supported).

### Sanitize a string immediately

The code below demonstrates how {{domxref('Element/setHTML','Element.setHTML()')}} is used to sanitize a string of HTML and insert it into the `Element` with an id of `target`.

The `script` element is disallowed by the default sanitizer so the alert is removed.

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def"; // Unsanitized string of HTML

const sanitizer = new Sanitizer(); // Default sanitizer;

// Get the Element with id "target" and set it with the sanitized string.
const target = document.getElementById("target");
target.setHTML(unsanitized_string, { sanitizer });

console.log(target.innerHTML);
// "abc  def"
```

### Sanitize a frame

To sanitize data from an {{HTMLElement("iframe")}} with id `userFrame`:

```js
const sanitizer = new Sanitizer(); // Default sanitizer;

// Get the frame and its Document object
const frame_element = document.getElementById("userFrame");
const unsanitized_frame_tree = frame_element.contentWindow.document;

// Sanitize the document tree and update the frame.
const sanitized_frame_tree = sanitizer.sanitize(unsanitized_frame_tree);
frame_element.replaceChildren(sanitized_frame_tree);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
