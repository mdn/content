---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
tags:
  - HTML Sanitizer API
  - Landing
  - Web API
  - santitize
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **HTML Sanitizer API** allow developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Concepts and usage

Web applications often need to work with strings of HTML on the client side, perhaps as part of a client-side templating solution, perhaps as part of rendering user generated content.
It is difficult to do so in a safe way.
The Sanitizer API allows for rendering HTML in a safe manner.

To access the API you would use the constructor, which creates a {{domxref('Sanitizer.Sanitizer')}} instance and allows for a configurable list of allowed or dis-allowed elements and attributes.

The most common use-case - preventing XSS - is handled by the built-in default lists, so that creating a {{domxref('Sanitizer.Sanitizer')}} with a custom config is necessary only to handle additional, application-specific use cases.

The API has two methods to sanitize strings.
One returns a document fragment.
The other applies a string using a Sanitzer directly to an existing element node.

## Interfaces

- {{domxref('Sanitizer')}}
  - : Provides the functionality to define a sanitizer configuration, and to sanitize untrusted strings of HTML, {{domxref('Document')}} and {{domxref('DocumentFragment')}} objects.
- {{domxref('Element/setHTML','Element.setHTML()')}}
  - : Sanitizes a string of HTML using a `Sanitizer` and sets it onto an existing element node.


## Examples

The example below shows a sanitization operation using the {{domxref("Sanitizer.sanitizeFor()")}} method.
This method takes as inputs a string of HTML to sanitize and the context (tag) in which it is sanitized, and returns a sanitized node object for the specified tag.
To simplify the presentation the result that is shown is actually the _innerHTML_ of the returned object.

> **Note:** The API _only_ sanitizes HTML in strings in the context of a particular element/tag.
> For more information see {{domxref('HTML Sanitizer API')}} (and {{domxref("Sanitizer.sanitizeFor()")}}).

This example shows the result of sanitizing a string with disallowed `script` element using the default sanitizer (in a `div` context). 

```js
let unsanitized = "abc <script>alert(1)</script> def"
const sanitized =  new Sanitizer().sanitizeFor("div", unsanitized);
// Result (innerHTML of 'sanitized'): script will be removed: "abc alert(1) def"
```

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML Sanitizer API','#sanitizer-api')}}
      </td>
      <td>{{Spec2('HTML Sanitizer API')}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("api.Sanitizer")}}
