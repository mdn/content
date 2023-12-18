---
title: EditContext
slug: Web/API/EditContext
page-type: web-api-interface
browser-compat: api.EditContext
---

{{securecontext_header}}{{APIRef("EditContext API")}}

The **`EditContext`** interface represents an instance of an EditContext ...

## Constructor

- {{domxref("EditContext.EditContext", "EditContext()")}}
  - : Returns a new `EditContext` instance.

## Instance properties

- {{domxref("EditContext.text")}}
  - : ...
- {{domxref("EditContext.selectionStart")}}
  - : ...
- {{domxref("EditContext.selectionEnd")}}
  - : ...
- {{domxref("EditContext.characterBoundsRangeStart")}}
  - : ...

## Instance methods

_`EditContext` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("EditContext.attachedElements()")}}
  - : ...
- {{domxref("EditContext.characterBounds()")}}
  - : ...
- {{domxref("EditContext.updateText()")}}
  - : ...
- {{domxref("EditContext.updateSelection()")}}
  - : ...
- {{domxref("EditContext.updateControlBounds()")}}
  - : ...
- {{domxref("EditContext.updateSelectionBounds()")}}
  - : ...
- {{domxref("EditContext.updateCharacterBounds()")}}
  - : ...

## Events

- {{domxref("EditContext.textupdate_event", "textupdate")}}
  - : Fired when ...
- {{domxref("EditContext.textformatupdate_event", "textformatupdate")}}
  - : Fired when ...
- {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}}
  - : Fired when ...
- {{domxref("EditContext.compositionstart_event", "compositionstart")}}
  - : Fired when ...
- {{domxref("EditContext.compositionend_event", "compositionend")}}
  - : Fired when ...

## Examples

### Example 1 title

This example shows how ...

#### HTML

```html
<to-do></to-do>
```

#### JavaScript

```js
function todo() {}
```

#### Result

{{EmbedLiveSample("Example 1 title")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
