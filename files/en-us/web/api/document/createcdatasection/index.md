---
title: "Document: createCDATASection() method"
short-title: createCDATASection()
slug: Web/API/Document/createCDATASection
page-type: web-api-instance-method
browser-compat: api.Document.createCDATASection
---

{{APIRef("DOM")}}

**`createCDATASection()`** creates a new CDATA section node,
and returns it.

## Syntax

```js-nolint
createCDATASection(data)
```

### Parameters

- `data`
  - : A string containing the data to be added to the CDATA Section.

### Return value

A [CDATA Section](/en-US/docs/Web/API/CDATASection) node.

## Examples

```js
const doc = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const cdata = doc.createCDATASection("Some <CDATA> data & then some");
doc.querySelector("xml").appendChild(cdata);
console.log(new XMLSerializer().serializeToString(doc));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## Notes

- This will only work with XML, not HTML documents (as HTML documents do not support
  CDATA sections); attempting it on an HTML document will throw
  `NOT_SUPPORTED_ERR`.
- Will throw a `NS_ERROR_DOM_INVALID_CHARACTER_ERR` exception if one tries
  to submit the closing CDATA sequence (`]]>`) as part of the data, so
  unescaped user-provided data cannot be safely used without this method getting this
  exception ({{domxref("document.createTextNode","createTextNode()")}} can often be used
  in its place).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
