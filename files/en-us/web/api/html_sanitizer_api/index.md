---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
tags:
  - HTML Sanitizer API
  - Landing
  - Web API
  - santitize
---
{{draft}}{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **HTML Sanitizer API** allow developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Concepts and usage

Web applications often need to work with strings of HTML on the client side, perhaps as part of a client-side templating solution, perhaps as part of rendering user generated content.
It is difficult to do so in a safe way.
The Sanitizer API allows for rendering HTML in a safe manner.

To access the API you would use the constructor, which creates a {{domxref('Sanitizer.Sanitizer')}} instance and allows for a configurable list of allowed or dis-allowed elements and attributes.

The most common use-case - preventing XSS - is handled by the built-in default lists, so that creating a {{domxref('Sanitizer.Sanitizer')}} with a custom config is necessary only to handle additional, application-specific use cases.

The API has two methods to sanitize strings.
One returns a document fragment. The other applies a string using a Sanitzer directly to an existing element node.

partial interface Element {
  undefined setHTML(DOMString input, Sanitizer sanitizer);
};

## Interfaces

- {{domxref('Sanitizer')}}
  - : The **`Sanitizer`** interface provides the functionality to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.
- {{domxref('Element/setHTML','Element.setHTML()')}}
  - : The method applies a string using a `Sanitizer` directly to an existing element node.

  {{domxref('Element')}}

## Examples

This example shows the use of the {{domxref('Sanitizer.sanitize()')}} method.
This returns a {{domxref('DocumentFragment')}} with disallowed `script` and `blink` elements removed.

```js
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitize(stringToClean);
// Result: A DocumentFragment containing text nodes and a <b> element, with a <i> child element
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
