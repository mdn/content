---
title: "TextUpdateEvent: text property"
short-title: text
slug: Web/API/TextUpdateEvent/text
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TextUpdateEvent.text
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`TextUpdateEvent.text`** read-only property contains the text that was inserted within the updated range of a {{domxref("EditContext")}}'s `textupdate` event.

## Value

A {{jsxref("String")}} that contains the text that replaces the text contained between the {{domxref("TextUpdateEvent/updateRangeStart", "updateRangeStart")}} and {{domxref("TextUpdateEvent/updateRangeEnd", "updateRangeEnd")}} indexes.

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
    `The user inserted the text "${e.text}" at index ${e.updateRangeStart}.`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
