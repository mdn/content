---
title: Element.setHTML()
slug: Web/API/Element/setHTML
tags:
  - HTML Sanitizer API
  - Method
  - Element.setHTML
  - setHTML
  - Experimental
browser-compat: api.Element.setHTML
---
{{SeeCompatTable}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`setHTML()`** method of the {{domxref("Element")}} interface is used to parse a string of HTML, sanitize it of unsafe or otherwise unwanted elements, attributes or comments, and then insert it into the DOM as a subtree of the current element.

This method should be used instead of {{domxref("Element.innerHTML")}} for inserting user supplied (or otherwise untrusted) strings of HTML into an element.

The default `Sanitizer()` configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The sanitizer configuration may be customized using {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} constructor options.

> **Note:** This method is used to sanitize strings of HTML when the target element is available.
> {{domxref("Sanitizer.sanitizeFor()")}} should be used to sanitize strings for _later_ insertion into the DOM, and {{domxref("Sanitizer.sanitize()")}} is used to sanitize content from iframes (and in other cases where the content is a `Document` or `DocumentFragment`).


## Syntax

```js
setHTML(input, sanitizer)
```

### Parameters

- `input`
  - : A string defining HTML to be sanitized.
- `sanitizer`
  - : A {{domxref("Sanitizer")}} object, which defines what elements of the input will be sanitized.

### Return value

`undefined`

### Exceptions

None.

## Examples

The code below demonstrates how to sanitize a string of HTML and insert it into the `Element` with an id of `target`.

```js
const unsanitized_string = "...";  // Unsanitized string of HTML
const sanitizer = new Sanitizer();  // Default Sanitizer;

// Get the Element with id "target" and set it with the sanitized HTML.
document.getElementById("target").setHTML(unsanitized_string, sanitizer);
```

> **Note:** This example uses the default sanitizer.
> The {{domxref("Sanitizer/Sanitizer","Sanitizer")}} constructor is used to configure sanitizer options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
