---
title: Document.createTouchList()
slug: Web/API/Document/createTouchList
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - Method
  - Mobile
  - createTouchList
  - touch
browser-compat: api.Document.createTouchList
---
{{APIRef("DOM")}}{{Deprecated_Header}}

The **`Document.createTouchList()`** method creates and returns a new {{DOMxRef("TouchList")}} object.

## Syntax

```js
var list = document.createTouchList([touch1 [, touch2 [, ...]]]);
```

### Parameters

- `touches`
  - : Zero or more {{DOMxRef("Touch")}} objects. **Note:** Firefox also
    accepts an [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of
    {{DOMxRef("Touch")}} objects.

### Return value

- `list`
  - : A {{DOMxRef("TouchList")}} object containing the {{DOMxRef("Touch")}} objects
    specified by the `touches` parameter.

## Example

This example illustrates using the {{DOMxRef("Document.createTouchList()")}} method to
create {{DOMxRef("TouchList")}} objects.

In following code snippet, some {{DOMxRef("Touch")}} objects are created for the
`target` element and those touch points are then used to create some
{{DOMxRef("TouchList")}} objects.

```js
var target = document.getElementById("target");

// Create some touch points
var touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
var touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Create an empty TouchList objects
var list0 = document.createTouchList();

// Create a TouchList with only one Touch object
var list1 = document.createTouchList(touch1);

// Create a list with two Touch objects
var list2 = document.createTouchList(touch1, touch2);
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{DOMxRef("Touch")}}
- {{DOMxRef("TouchEvent")}}
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Document.createTouch()")}}
