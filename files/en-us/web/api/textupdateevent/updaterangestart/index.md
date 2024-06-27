---
title: "TextUpdateEvent: updateRangeStart property"
short-title: updateRangeStart
slug: Web/API/TextUpdateEvent/updateRangeStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TextUpdateEvent.updateRangeStart
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`TextUpdateEvent.updateRangeStart`** read-only property indicates the start position of the text range that is being replaced in the {{domxref("EditContext")}} object.

## Value

A {{jsxref("Number")}}.

## Examples

### Using `textupdate` to display the inserted text and location

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  console.log(
    `The user inserted the text "${e.text}" between index ${e.updateRangeStart} and index ${e.updateRangeEnd}.`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
