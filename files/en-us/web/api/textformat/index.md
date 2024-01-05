---
title: TextFormat
slug: Web/API/TextFormat
page-type: web-api-interface
browser-compat: api.TextFormat
---

{{APIRef("EditContext API")}}

The **`TextFormat`** interface represents specific formatting that should be applied to a range of text in an editable text region that's attached to an {{domxref("EditContext")}} instance. The text formatting is requested by the {{glossary("IME")}} (Input Method Editor) window that the user is composing text with.

When using one of the default editable regions of the web, such as a [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) element, IME composition is handled by the browser and operating system for you. For example, when using Japanese IME in a textarea, on Windows, the following text formats can be applied:

- When text is being composed with the keyboard, the typed characters have a thin wavy underline:

  ![A textarea in Microsoft Edge on Windows with some Japanese text being composed from the IME window](./ime-squiggle-underline.png)

- When the user selects a suggestion from the list of candidates in the IME window, the text is replaced and is underlined with a thick solid line:

  ![A textarea in Microsoft Edge on Windows with some Japanese text being selected from the IME window](./ime-solid-underline.png)

When creating your own custom editable region by using the {{domxref("EditContext API", "", "", "nocode")}}, you need to handle IME composition yourself. You should listen for the {{domxref("EditContext/textformatupdate_event", "textformatupdate")}} event, which gives you the list of text formats that the IME window wants to apply to the text being composed. You should then update the formatting of the text displayed in your editable region accordingly.

## Constructor

- {{DOMxRef("TextFormat.TextFormat", "TextFormat()")}}
  - : Returns a new `TextFormat` instance.

## Instance properties

- {{domxref("TextFormat.rangeStart")}} {{readonlyinline}}
  - : ...
- {{domxref("TextFormat.rangeEnd")}} {{readonlyinline}}
  - : ...
- {{domxref("TextFormat.underlineStyle")}} {{readonlyinline}}
  - : ...
- {{domxref("TextFormat.underlineThickness")}} {{readonlyinline}}
  - : ...

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
