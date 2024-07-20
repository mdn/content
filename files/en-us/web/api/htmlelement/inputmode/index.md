---
title: "HTMLElement: inputMode property"
short-title: inputMode
slug: Web/API/HTMLElement/inputMode
page-type: web-api-instance-property
browser-compat: api.HTMLElement.inputMode
---

{{ APIRef("HTML DOM") }}

The {{domxref("HTMLElement")}} property **`inputMode`** reflects the value of the element's [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) attribute.

It provides a hint about the type of data that might be entered by the user while editing the element or its contents. This allows the browser to display an appropriate virtual keyboard.

It is used primarily on {{HTMLElement("input")}} elements, but is usable on any element in [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) mode.

## Value

This attribute may have one of the following values:

- `decimal`
  - : Fractional numeric input keyboard that contains the digits and decimal separator for the user's locale (typically <kbd>.</kbd> or <kbd>,</kbd>).
- `email`
  - : A virtual keyboard optimized for entering email addresses.
    Typically includes the <kbd>@</kbd>character as well as other optimizations.
- `none`
  - : No virtual keyboard. This is used when the page implements its own keyboard input control.
- `numeric`
  - : Numeric input keyboard that only requires the digits 0–9.
    Devices may or may not show a minus key.
- `search`
  - : A virtual keyboard optimized for search input.
    For instance, the [return/submit key](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute) may be labeled "Search".
- `tel`
  - : A telephone keypad input that includes the digits 0–9, the asterisk (<kbd>\*</kbd>), and the pound (<kbd>#</kbd>) key.
- `text`
  - : Standard input keyboard for the user's current locale.
- `url`
  - : A keypad optimized for entering URLs.
    This may have the <kbd>/</kbd> key more prominent, for example.

For details on the usage of this attribute, see the page for the [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) HTML attribute that this property reflects.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [inputmode](/en-US/docs/Web/HTML/Global_attributes#inputmode) attribute
