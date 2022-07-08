---
title: Selection.toString()
slug: Web/API/Selection/toString
page-type: web-api-instance-method
tags:
  - API
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.toString
---
{{ ApiRef("DOM") }}

The **`Selection.toString()`** method returns a string
currently being represented by the selection object, i.e. the currently selected text.

## Syntax

```js
toString()
```

### Parameters

None.

### Return value

A string representing the selection.

## Description

This method returns the currently selected text.

In [JavaScript](/en-US/docs/Web/JavaScript), this method is called automatically when
a function the selection object is passed to requires a string:

```js
alert(window.getSelection()) // What is called
alert(window.getSelection().toString())  // What is actually being effectively called.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
