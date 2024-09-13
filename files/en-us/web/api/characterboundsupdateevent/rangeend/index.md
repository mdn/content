---
title: "CharacterBoundsUpdateEvent: rangeEnd property"
short-title: rangeEnd
slug: Web/API/CharacterBoundsUpdateEvent/rangeEnd
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CharacterBoundsUpdateEvent.rangeEnd
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`CharacterBoundsUpdateEvent.rangeEnd`** read-only property represents the offset of the last character within the editable text region for which the operating system needs the bounds.

## Value

A {{jsxref("Number")}}.

## Examples

### Reading the `rangeEnd` value

This example shows how to use the `characterboundsupdate` event and read the value of the `rangeStart` and `rangeEnd` properties.

```js
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("characterboundsupdate", (e) => {
  console.log(
    `The OS needs the bounds of the chars at ${e.rangeStart} - ${e.rangeEnd}.`,
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
