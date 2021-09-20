---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
tags:
  - HTML Sanitizer API
  - Landing
  - Web API
  - santitize
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The HTML Sanitizer API allow developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Sanitizer API Concepts and Usage

Web applications often need to work with strings of HTML on the client side, perhaps as part of a client-side templating solution, perhaps as part of rendering user generated content. It is difficult to do so in a safe way. The Sanitizer API allows for rendering HTML in a safe manner.

To access the API you would use the constructor, which creates a {{domxref('Sanitizer.Sanitizer')}} instance and allows for a configurable list of allowed or dis-allowed elements and attributes.

The most common use-case - preventing XSS - is handled by the built-in default lists, so that creating a {{domxref('Sanitizer.Sanitizer')}} with a custom config is necessary only to handle additional, application-specific use cases.

The API has two methods to sanitize strings. One returns a string and the other returns a document fragment. See the [examples section below](#examples) for more.

## Sanitizer API Interfaces

- {{domxref('Sanitizer')}}
  - : The **`Sanitizer`** interface of the {{domxref('HTML Sanitizer API')}} provides the functionality to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Examples

This example shows the result of sanitizing a string using the {{domxref('Sanitizer.sanitizeToString()')}} method. A {{jsxref('String')}} is returned with disallowed `script` and `blink` elements removed.

```js
// our input string to clean
const stringToClean = 'Some text <b><i>with</i></b> <blink>tags</blink>, including a rogue script <script>alert(1)</script> def.';

const result = new Sanitizer().sanitizeToString(stringToClean);
console.log(result);
// Logs: "Some text <b><i>with</i></b>, including a rogue script def."
```

The other method available is the {{domxref('Sanitizer.sanitize()')}} method. Which is very similar to above, however returns a {{domxref('DocumentFragment')}} with disallowed `script` and `blink` elements removed.

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
        {{SpecName('HTML Sanitizer API','#sanitizer-api','sanitizeToString')}}
      </td>
      <td>{{Spec2('HTML Sanitizer API')}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("api.Sanitizer")}}
