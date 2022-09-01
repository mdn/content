---
title: Document.createCDATASection()
slug: Web/API/Document/createCDATASection
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createCDATASection
---

{{APIRef("DOM")}}

**`createCDATASection()`** creates a new CDATA section node,
and returns it.

## Syntax

```js
createCDATASection(data)
```

### Parameters

- `data`
  - : A string containing the data to be added to the CDATA Section.

### Return value

A [CDATA Section](/en-US/docs/Web/API/CDATASection) node.

## Examples

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = docu.createCDATASection("Some <CDATA> data & then some");
docu.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Notes

- This will only work with XML, not HTML documents (as HTML documents do not support
  CDATA sections); attempting it on an HTML document will throw
  `NOT_SUPPORTED_ERR`.
- Will throw a `NS_ERROR_DOM_INVALID_CHARACTER_ERR` exception if one tries
  to submit the closing CDATA sequence ("`]]>`") as part of the data, so
  unescaped user-provided data cannot be safely used without this method getting this
  exception ({{domxref("document.createTextNode","createTextNode()")}} can often be used
  in its place).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
