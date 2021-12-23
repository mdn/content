---
title: HTMLElement.focus()
slug: Web/API/HTMLElement/focus
tags:
  - API
  - Focus
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
  - Scroll
  - View
  - activate
browser-compat: api.HTMLElement.focus
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.focus()`** method
sets focus on the specified element, if it can be focused. The focused element is
the element which will receive keyboard and similar events by default.

## Syntax

```js
element.focus(options);
```

### Parameters

- `options` {{optional_inline}}

  - : An optional object providing options to control aspects of the focusing process.
    This object may contain the following property:

    - `preventScroll` {{optional_inline}}
      - : A Boolean value indicating whether or not the browser should scroll the
        document to bring the newly-focused element into view. A value of
        `false` for `preventScroll` (the default) means that
        the browser will scroll the element into view after focusing it. If
        `preventScroll` is set to `true`, no scrolling will
        occur.

## Examples

### Focus on a text field

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
}
```

#### HTML

```html
<input type="text" id="myTextField" value="Text field.">
<p></p>
<button type="button" onclick="focusMethod()">Click me to focus on the text field!</button>
```

#### Result

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Focus on a button

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myButton").focus();
}
```

#### HTML

```html
<button type="button" id="myButton">Click Me!</button>
<p></p>
<button type="button" onclick="focusMethod()">Click me to focus on the button!</button>
```

#### Result

{{ EmbedLiveSample('Focus_on_a_button') }}

### Focus with focusOption

#### JavaScript

```js
focusScrollMethod = function getFocus() {
  document.getElementById("myButton").focus({preventScroll:false});
}
focusNoScrollMethod = function getFocusWithoutScrolling() {
  document.getElementById("myButton").focus({preventScroll:true});
}
```

#### HTML

```html
<button type="button" onclick="focusScrollMethod()">Click me to focus on the button!</button>
<button type="button" onclick="focusNoScrollMethod()">Click me to focus on the button without scrolling!</button>

<div id="container" style="height: 1000px; width: 1000px;">
<button type="button" id="myButton" style="margin-top: 500px;">Click Me!</button>
</div>
```

#### Result

{{ EmbedLiveSample('Focus_with_focusOption') }}

## Specifications

{{Specifications}}

## Notes

- If you call `HTMLElement.focus()` from a mousedown event handler, you
  must call `event.preventDefault()` to keep the focus from leaving the
  `HTMLElement`
- Behavior of the focus in relation to different HTML features like
  {{HTMLAttrxRef("tabindex")}} or {{Glossary("shadow tree","shadow dom", 1)}},
  which previously remained under-specified, were recently updated (as October
  of 2019). Checkout [WHATWG
  blog](https://blog.whatwg.org/focusing-on-focus) for more info.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.blur")}} to remove the focus from an element.
- {{domxref("document.activeElement")}} to know which is the currently focused element.
- {{domxref("Element/focusin_event", "focusin")}} event: fired when an element is about to gain focus.
- {{domxref("Element/focusout_event", "focusout")}} event: fired when an element is about to lose focus.
