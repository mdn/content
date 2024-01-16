---
title: "TextUpdateEvent: updateRangeEnd property"
short-title: updateRangeEnd
slug: Web/API/TextUpdateEvent/updateRangeEnd
page-type: web-api-instance-property
browser-compat: api.TextUpdateEvent.updateRangeEnd
---

{{APIRef("EditContext API")}}

The **`TextUpdateEvent.updateRangeEnd`** read-only property indicates the end position of the text range that is being replaced in the {{domxref("EditContext")}} object.

## Value

A {{jsxref("Number")}}.

## Examples

### Using `textupdate` to display the inserted text and location

```js
const editContext = new EditContext();
editorElement.editContext = editContext;

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
