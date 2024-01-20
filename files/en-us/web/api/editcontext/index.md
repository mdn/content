---
title: EditContext
slug: Web/API/EditContext
page-type: web-api-interface
status:
  - experimental
browser-compat: api.EditContext
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`EditContext`** interface represents the text edit context of an element that was made editable by using the {{domxref("EditContext API", "", "", "nocode")}}.

The {{domxref("EditContext API", "", "", "nocode")}} can be used to build rich text editors on the web that support advanced text input experiences, such as {{glossary("Input Method Editor")}} (IME) composition, emoji picker, or any other platform-specific editing-related UI surfaces.

## Constructor

- {{domxref("EditContext.EditContext", "EditContext()")}}
  - : Returns a new `EditContext` instance.

## Instance properties

- {{domxref("EditContext.text")}} {{ReadOnlyInline}}
  - : The editable content of the element.
- {{domxref("EditContext.selectionStart")}} {{ReadOnlyInline}}
  - : The offset, within the editable text content, of the start of the current selection.
- {{domxref("EditContext.selectionEnd")}} {{ReadOnlyInline}}
  - : The offset, within the editable text content, of the end of the current selection.
- {{domxref("EditContext.characterBoundsRangeStart")}} {{ReadOnlyInline}}
  - : The offset, within the editable text content, where the last IME composition started.

## Instance methods

_`EditContext` is based on the {{domxref("EventTarget")}} interface, and includes its methods._

- {{domxref("EditContext.attachedElements()")}}
  - : An {{jsxref("Array")}} containing one {{domxref("HTMLElement")}} object which is the element that's associated with the `EditContext` object.
- {{domxref("EditContext.characterBounds()")}}
  - : The list of bounding rectangles for the characters in the `EditContext` object.
- {{domxref("EditContext.updateText()")}}
  - : Updates the internal text content of the `EditContext` object.
- {{domxref("EditContext.updateSelection()")}}
  - : Updates the internal state of the selection within the editable text context.
- {{domxref("EditContext.updateControlBounds()")}}
  - : Informs the operating system about the position and size of the editable text region.
- {{domxref("EditContext.updateSelectionBounds()")}}
  - : Informs the operating system about the position and size of the selection within the editable text region.
- {{domxref("EditContext.updateCharacterBounds()")}}
  - : Informs the operating system about the position and size of the characters in the `EditContext` object.

## Events

- {{domxref("EditContext.textupdate_event", "textupdate")}}
  - : Fired when the user has made changes to the text or selection.
- {{domxref("EditContext.textformatupdate_event", "textformatupdate")}}
  - : Fired when composition using an {{glossary("Input Method Editor")}} (IME) window is happening and the IME decides that certain parts of the text being composed should be formatted differently to indicate the composition state.
- {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}}
  - : Fired when the operating system needs to know the size and position of certain characters within the editable text region of the `EditContext` object, in order to display an IME window.
- {{domxref("EditContext.compositionstart_event", "compositionstart")}}
  - : Fired when composition using an IME window is starting.
- {{domxref("EditContext.compositionend_event", "compositionend")}}
  - : Fired when composition using an IME window is ending.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
