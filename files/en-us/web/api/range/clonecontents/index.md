---
title: Range.cloneContents()
slug: Web/API/Range/cloneContents
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.cloneContents
---
{{ APIRef("DOM") }}

The **`Range.cloneContents()`** returns a {{
  domxref("DocumentFragment") }} copying the objects of type {{ domxref("Node") }}
included in the {{ domxref("Range") }}.

Event listeners added using {{domxref("EventTarget.addEventListener()", "addEventListener()")}}
are not copied during cloning. HTML attribute events are duplicated as they are
for the {{ domxref("Node.cloneNode()") }} method. HTML `id` attributes
are also cloned, which can lead to an invalid document through cloning.

Partially selected nodes include the parent tags necessary to make the document
fragment valid.

## Syntax

```js
documentFragment = range.cloneContents();
```

## Example

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
