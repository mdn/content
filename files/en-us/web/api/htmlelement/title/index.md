---
title: HTMLElement.title
slug: Web/API/HTMLElement/title
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
browser-compat: api.HTMLElement.title
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.title`** property
represents the title of the element: the text usually displayed in a 'tooltip' popup
when the mouse is over the node.

## Value

A string.

## Examples

```js
const link = document.createElement('a');
link.innerText = 'grapes';
link.href = 'https://en.wikipedia.org/wiki/Grape';
link.title = 'Wikipedia page on grapes';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML [**title**](/en-US/docs/Web/HTML/Global_attributes/title)
  global attribute.
