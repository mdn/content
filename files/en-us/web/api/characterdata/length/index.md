---
title: CharacterData.length
slug: Web/API/CharacterData/length
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.CharacterData.length
---

{{APIRef("DOM")}}

The read-only **`CharacterData.length`** property
returns the number of characters in the contained data, as a positive integer.

## Value

A positive integer with the length of the {{domxref("CharacterData.data")}} string.

## Example

> **Note:** {{domxref("CharacterData")}} is an abstract interface.
> The examples below use {{domxref("Text")}}, a concrete interface implementing it.

```html
Length of the string in the <code>Text</code> node: <output></output>
```

```js
const output = document.querySelector("output");
const textnode = new Text("This text has been set using 'textnode.data'.");

output.value = textnode.length;
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
