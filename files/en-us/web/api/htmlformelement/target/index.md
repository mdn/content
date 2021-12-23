---
title: HTMLFormElement.target
slug: Web/API/HTMLFormElement/target
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLFormElement.target
---
{{APIRef("HTML DOM")}}

The **`target`** property of the {{domxref("HTMLFormElement")}}
interface represents the target of the form's action (i.e., the frame in which to render
its output).

## Syntax

```js
string = HTMLFormElement.target
HTMLFormElement.target = string
```

## Example

```js
myForm.target = document.frames[1].name;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
