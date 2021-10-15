---
title: Sanitizer.sanitizeFor()
slug: Web/API/Sanitizer/sanitizeFor
tags:
  - HTML Sanitizer API
  - Method
  - sanitizeFor
browser-compat: api.Sanitizer.sanitizeFor
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`sanitizeFor()`** method of the {{domxref("Sanitizer")}} interface is used to parse and sanitize a string of HTML for insertion into the DOM at some later point.

The method takes as a parameter the tag name of the type of HTML element into which the input string is to be parsed, and returns an HTML object of that type containing the sanitized subtree as its child.
The returned object **must** be inserted into an object of the same type.

This context is required because the parsing of an HTML string into a subtree depends on the context into which it is inserted.
For example, {{HTMLElement("td")}} is a valid node for insertion into a {{HTMLElement("table")}}, but would be stripped if inserted into a {{HTMLElement("div")}}.
If the caller extracts the sanitized tree, for example by using `innerHTML` to get the subtree as a string, it is their responsibility to ensure the correct context is used when it is inserted.

The default `Sanitizer()` configuration strips out XSS-relevant input by default, including {{HTMLElement("script")}} tags, custom elements, and comments.
The sanitizer configuration may be customized using {{domxref("Sanitizer.Sanitizer","Sanitizer()")}} constructor options.

> **Note:** Use {{domxref("Element.setHTML()")}} instead of this method if the target element is available for immediate update, or {{domxref("Sanitizer.sanitize()")}} to sanitize a {{domxref("DocumentFragment")}}.

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
const unsanitized_string = "abc <script>alert(1)</script> def";  // Unsanitized string of HTML
const sanitizer = new Sanitizer();  // Default sanitizer;

// Sanitize the string
let sanitizedDiv = sanitizer.sanitizeFor("div", unsanitized_string);

//We can verify the returned element type and view sanitized HTML in string form:
console.log(typeof sanitizedDiv);
// HTMLDivElement
console.log(sanitizedDiv.innerHTML)
// "abc  def"

// At some point later ...

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