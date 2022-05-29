---
title: KeyboardEvent.initKeyEvent()
slug: Web/API/KeyboardEvent/initKeyEvent
tags:
  - API
  - DOM
  - Deprecated
  - KeyboardEvent
  - Method
  - Reference
  - Non Standard
---
{{APIRef("UI Events")}}

> **Warning:** Do NOT use this method; Use the {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor instead!
>
> The method has been removed from the DOM specification and is not supported by any current browser.
> Firefox hides this method behind the preference (`dom.keyboardevent.init_key_event.enabled`) from version 93 and plans to remove it shortly afterwards.

{{deprecated_header}}

The **`KeyboardEvent.initKeyEvent()`** method is used to
initialize the value of an event created using
{{domxref("document.createEvent")}}`("KeyboardEvent")`. Events initialized in
this way must have been created with the
{{domxref("document.createEvent")}}`("KeyboardEvent")` method.
`initKeyEvent()` must be called to set the event before it is [dispatched](/en-US/docs/Web/API/EventTarget/dispatchEvent).

## Syntax

```js
initKeyEvent (type, bubbles, cancelable, view,
                    ctrlKey, altKey, shiftKey, metaKey,
                    keyCode, charCode)
```

### Parameters

- `type`
  - : A string representing the type of event.
- `bubbles`
  - : A boolean value indicating whether the event should bubble up through the
    event chain or not (see [bubbles](/en-US/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : A boolean value indicating whether the event can be canceled (see [cancelable](/en-US/docs/Web/API/Event/cancelable)).
- `view`
  - : Specifies the {{domxref("UIEvent.view")}}; this value may be `null`.
- `ctrlKey`
  - : A boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the <kbd>Ctrl</kbd> key.
- `altKey`
  - : A boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the <kbd>Alt</kbd> key.
- `shiftKey`
  - : A boolean value that is `true` if the virtual key to be generated
    is a combination of keys containing the <kbd>Shift</kbd>key.
- `metaKey`
  - : A boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the <kbd>Meta</kbd> key.
- `keyCode`
  - : An `unsigned long` representing the virtual key code value of the key
    which was pressed, otherwise `0`. See {{ domxref("KeyboardEvent.keyCode")
    }} for the list of key codes.
- `charCode`
  - : An `unsigned long` representing the Unicode character associated with
    the pressed key otherwise `0`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
var event = document.createEvent('KeyboardEvent'); // create a key event
// define the event
event.initKeyEvent("keypress",       // typeArg,
                   true,             // canBubbleArg,
                   true,             // cancelableArg,
                   null,             // viewArg,  Specifies UIEvent.view. This value may be null.
                   false,            // ctrlKeyArg,
                   false,            // altKeyArg,
                   false,            // shiftKeyArg,
                   false,            // metaKeyArg,
                    9,               // keyCodeArg,
                    0);              // charCodeArg);

document.getElementById('blah').dispatchEvent(event);
```

## Specifications

This implementation of keyboard events is based on the key events spec in the [early versions
of DOM 2 Events](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html), later removed from that spec.

The `initKeyEvent` is the current Gecko equivalent of the DOM Level 3 Events
(initially drafted and also deprecated in favor of
{{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
{{domxref("Keyboard.initKeyboardEvent()")}} method with the following arguments:

```
typeArg of type DOMString
canBubbleArg of type boolean
cancelableArg of type boolean
viewArg of type views::AbstractView
keyIdentifierArg of type DOMString
keyLocationArg of type unsigned long
modifiersList of type DOMString);
```
