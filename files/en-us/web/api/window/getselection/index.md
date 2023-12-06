---
title: "Window: getSelection() method"
short-title: getSelection()
slug: Web/API/Window/getSelection
page-type: web-api-instance-method
browser-compat: api.Window.getSelection
---

{{ ApiRef() }}

The **`Window.getSelection()`** method returns a
{{domxref("Selection")}} object representing the range of text selected by the user or
the current position of the caret.

## Syntax

```js-nolint
getSelection()
```

### Parameters

None.

### Return value

A {{domxref("Selection")}} object.

When cast to string, either by appending an empty string (`""`) or using
{{domxref("Selection.toString()")}}, this object returns the text selected.

When called on an {{htmlelement("iframe")}} that is not displayed (e.g., where
`display: none` is set) Firefox will return `null`, whereas other
browsers will return a {{domxref("Selection")}} object with
{{domxref("Selection.type")}} set to `None`.

## Examples

```js
function foo() {
  const selObj = window.getSelection();
  alert(selObj);
  const selRange = selObj.getRangeAt(0);
  // do stuff with the range
}
```

## Notes

### String representation of the Selection object

In JavaScript, when an object is passed to a function expecting a string (like {{
  Domxref("window.alert()") }} or {{ Domxref("document.write()") }}), the object's
{{jsxref("Object.toString", "toString()")}} method is called and the returned value is
passed to the function. This can make the object appear to be a string when used with
other functions when it is really an object with properties and methods.

In the above example, `selObj.toString()` is automatically called when it is
passed to {{domxref("window.alert()")}}. However, attempting to use a JavaScript [String](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) property
or method such as
[`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
or
[`substr`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
directly on a {{domxref("Selection")}} object will result in an error if it does not
have that property or method and may return unexpected results if it does. To use a
`Selection` object as a string, call its `toString()` method
directly:

```js
const selectedText = selObj.toString();
```

- `selObj` is a `Selection` object.
- `selectedText` is a string (Selected text).

### Related objects

You can call {{domxref("Document.getSelection()")}}, which works identically to
`Window.getSelection()`.

It is worth noting that currently `getSelection()` doesn't work on the
content of {{htmlelement("textarea")}} and {{htmlelement("input")}} elements in Firefox
and Edge (Legacy). {{domxref("HTMLInputElement.setSelectionRange()")}}
or the `selectionStart` and `selectionEnd` properties could be
used to work around this.

Notice also the difference between _selection_ and _focus_.
{{domxref("Document.activeElement")}} returns the focused element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Selection API](/en-US/docs/Web/API/Selection)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
