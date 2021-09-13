---
title: Document.designMode
slug: Web/API/Document/designMode
tags:
  - API
  - Document
  - HTML DOM
  - NeedsContent
  - NeedsSpecTable
  - Property
  - Reference
  - editor
browser-compat: api.Document.designMode
---
{{ApiRef()}}

**`document.designMode`** controls whether the entire document
is editable. Valid values are `"on"` and `"off"`. According to the
specification, this property is meant to default to `"off"`. Firefox follows
this standard. The earlier versions of Chrome and IE default to `"inherit"`.
Starting in Chrome 43, the default is `"off"` and `"inherit"` is
no longer supported. In IE6-10, the value is capitalized.

## Syntax

```js
var mode = document.designMode;
document.designMode = value;
```

### Value

A string indicating whether `designMode` is (or should be) set to on or off.
Valid values are `on` and `off`.

## Example

Make an {{HTMLElement("iframe")}}'s document editable:

```js
iframeNode.contentDocument.designMode = "on";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Rich-Text Editing in Mozilla](/en-US/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
