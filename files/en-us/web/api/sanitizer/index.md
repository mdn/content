---
title: Sanitizer
slug: Web/API/Sanitizer
tags:
  - HTML Sanitizer API
  - Interface
  - sanitize
browser-compat: api.Sanitizer
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("HTML Sanitizer API")}}

The **`Sanitizer`** interface of the {{domxref('HTML Sanitizer API')}} allows developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM.

## Constructors

- {{domxref('Sanitizer.Sanitizer')}}
  - : Creates and returns a `Sanitizer` object.

## Methods

- {{domxref('Sanitizer.sanitize()')}}
  - : Returns a sanitized {{domxref('DocumentFragment')}} from an input, removing any offending elements or attributes.
- {{domxref('Sanitizer.getConfiguration()')}}
  - : Returns the current configuration settings for the sanitizer.


## Examples



## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
