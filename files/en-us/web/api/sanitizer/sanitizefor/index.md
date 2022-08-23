---
title: Sanitizer.sanitizeFor()
slug: Web/API/Sanitizer/sanitizeFor
page-type: web-api-instance-method
tags:
  - HTML Sanitizer API
  - Method
  - sanitizeFor
  - Experimental
browser-compat: api.Sanitizer.sanitizeFor
---
{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`sanitizeFor()`** method of the {{domxref("Sanitizer")}} interface is used to parse and sanitize a string of HTML for insertion into the DOM at some later point.

The method accepts the tag name of the eventual destination HTML element as a parameter, and returns an HTML element object (of that type) that contains the sanitized subtree as its child.
This context is needed because the result of parsing an HTML string depends on where it is used.
For example, {{HTMLElement("td")}} elements are valid nodes when inserted into a {{HTMLElement("table")}} but will be skipped/ignored when parsed into a {{HTMLElement("div")}}.

The subtree **must** be inserted into an element of the same type as the returned object (and the original `element` parameter).
If the caller extracts the sanitized subtree from the object, for example by using `innerHTML`, it is their responsibility to ensure the correct context is used when it is inserted in the DOM.

The default `Sanitizer()` configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The sanitizer configuration may be customized using {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} constructor options.

> **Note:** Use {{domxref("Element.setHTML()")}} instead of this method if the target element is available for immediate update.

## Syntax

```js
sanitizeFor(element, input)
```

### Parameters

- `element`
  - : A string indicating the HTML tag of the element into which the `input` is to be inserted.
    For example `"div"`, `"table"`, `"p"`, and so on.
- `input`
  - : A string of HTML to be sanitized.

### Return value

An HTML element corresponding to the tag specified in the `element` parameter, containing the parsed and sanitized `input` string as a DOM subtree.

For example, if the `input` was `"div"` then the return value would be a {{domxref("HTMLDivElement")}}.

### Exceptions

None.

## Examples

The code below demonstrates how to sanitize a string of HTML into a `div` element.

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def";  // Unsanitized string of HTML
const sanitizer = new Sanitizer();  // Default sanitizer;

// Sanitize the string
const sanitizedDiv = sanitizer.sanitizeFor("div", unsanitized_string);

//We can verify the returned element type, and view sanitized HTML in string form:
console.log(sanitizedDiv instanceof HTMLDivElement);
// true
console.log(sanitizedDiv.innerHTML)
// "abc  def"

// At some point later…

// Get the element to update. This must be a div to match our sanitizeFor() context.
// Set its content to be the children of our sanitized element.
document.querySelector("div#target").replaceChildren(sanitizedDiv.children);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.setHTML()")}}
- {{domxref('HTML Sanitizer API')}}
