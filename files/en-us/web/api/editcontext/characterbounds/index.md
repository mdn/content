---
title: "EditContext: characterBounds() method"
short-title: characterBounds()
slug: Web/API/EditContext/characterBounds
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.characterBounds
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`characterBounds()`** method of the {{domxref("EditContext")}} interface returns an {{jsxref("Array")}} containing the list of bounding rectangles for the characters in the `EditContext` object.

The position and size of the characters in an `EditContext` object is used by the operating system to correctly position platform-specific editing-related UI surfaces such as an {{glossary("Input Method Editor")}} (IME) window when needed. This is especially important in situations where the operating system can't automatically detect the position and size of the characters, such as when rendering text in a `<canvas>` element.

Web developers will most likely be interested in using the {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} event together with the {{domxref("EditContext.updateCharacterBounds()")}} method to update the character bounds when the operating system indicates that it requires information about the position and size of the characters.

The `characterBounds()` method returns the list of character bounds that were last updated with `updateCharacterBounds()`. The list doesn't contain an item for every character in the `EditContext` object, only for the characters that were updated with `updateCharacterBounds()`. To know where the characters are located in the `EditContext` object, use the {{domxref("EditContext.characterBoundsRangeStart")}} property.

## Syntax

```js-nolint
characterBounds()
```

### Return value

An {{jsxref("Array")}} containing {{domxref("DOMRect")}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.
