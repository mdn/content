---
title: HTMLFormElement.acceptCharset
slug: Web/API/HTMLFormElement/acceptCharset
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLFormElement.acceptCharset
---
{{APIRef("HTML DOM")}}

The **`HTMLFormElement.acceptCharset`** property represents a
list of the supported [character
encodings](/en-US/docs/Glossary/character_encoding) for the given {{htmlelement("form")}} element. This list can be
comma-separated or space-separated.

## Syntax

```js
var string = form.acceptCharset;
form.acceptCharset = string;
```

## Example

```js
let inputs = document.forms['myform'].acceptCharset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
