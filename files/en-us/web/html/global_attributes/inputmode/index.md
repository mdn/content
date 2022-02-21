---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
tags:
  - Attribute
  - Editing
  - Forms
  - Global attributes
  - HTML
  - Input
  - Reference
  - Text
  - Web
  - contenteditable
  - global
  - inputmode
  - text input
browser-compat: html.global_attributes.inputmode
---

{{HTMLSidebar("Global_attributes")}}

The **`inputmode`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute that hints at the type of data that might be entered by the user while editing the element or its contents.
This allows a browser to display an appropriate virtual keyboard.

It is used primarily on {{HTMLElement("input")}} elements, but is usable on any element in {{HTMLAttrxRef("contenteditable")}} mode.

It's important to understand that the `inputmode` attribute doesn't cause any validity requirements to be enforced on input. To require that input conforms to a particular data type, choose an appropriate [`<input> element type`](/en-US/docs/Web/HTML/Element/input#input_types). For specific guidance on choosing {{HTMLElement("input")}} types, see the [Values](#values) section.

## Values

The attribute can have any of the following values:

- `none`
  - : No virtual keyboard.
    For when the page implements its own keyboard input control.
- `text` (default value)
  - : Standard input keyboard for the user's current locale.
- `decimal`
  - : Fractional numeric input keyboard containing the digits and decimal separator for the user's locale (typically <kbd>.</kbd> or <kbd>,</kbd>).
    Devices may or may not show a minus key (<kbd>-</kbd>).
- `numeric`
  - : Numeric input keyboard, but only requires the digits 0–9.
    Devices may or may not show a minus key.
- `tel`
  - : A telephone keypad input, including the digits 0–9, the asterisk (<kbd>*</kbd>), and the pound (<kbd>#</kbd>) key.
    Inputs that *require\* a telephone number should typically use `{{HTMLElement("input/tel", '&lt;input type="tel"&gt;')}}` instead.
- `search`
  - : A virtual keyboard optimized for search input.
    For instance, the [return/submit key](https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute) may be labeled "Search", along with possible other optimizations.
    Inputs that _require_ a search query should typically use `{{HTMLElement("input/search", '&lt;input type="search"&gt;')}}` instead.
- `email`
  - : A virtual keyboard optimized for entering email addresses.
    Typically includes the <kbd>@</kbd>character as well as other optimizations.
    Inputs that _require_ email addresses should typically use `{{HTMLElement("input/email", '&lt;input type="email"&gt;')}}` instead.
- `url`
  - : A keypad optimized for entering URLs.
    This may have the <kbd>/</kbd> key more prominent, for example.
    Enhanced features could include history access and so on.
    Inputs that _require_ a URL should typically use `{{HTMLElement("input/url", '&lt;input type="url"&gt;')}}` instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) global attribute
