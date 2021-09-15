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
{{ ApiRef("DOM Events") }}

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
event.initKeyEvent (type, bubbles, cancelable, viewArg,
                    ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
                    keyCodeArg, charCodeArg)
```

### Parameters

- _`type`_
  - : Is a {{domxref("DOMString")}} representing the type of event.
- _`bubbles`_
  - : Is a boolean value indicating whether the event should bubble up through the
    event chain or not (see [bubbles](/en-US/docs/Web/API/Event/bubbles)).
- _`cancelable`_
  - : Is a boolean value indicating whether the event can be canceled (see [cancelable](/en-US/docs/Web/API/Event/cancelable)).
- _`viewArg`_
  - : Specifies the {{domxref("UIEvent.view")}}; this value may be `null`.
- _`ctrlKeyArg`_

  - : Is a boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the

    <kbd>Ctrl</kbd>

    key.

- _`altKeyArg`_

  - : Is a boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the

    <kbd>Alt</kbd>

    key.

- _`shiftKeyArg`_

  - : A boolean value that is `true` if the virtual key to be generated
    is a combination of keys containing the

    <kbd>Shift</kbd>

    key.

- _`metaKeyArg`_

  - : Is a boolean value that is `true` if the virtual key to be
    generated is a combination of keys containing the

    <kbd>Meta</kbd>

    key.

- _`keyCodeArg`_
  - : Is a `unsigned long` representing the virtual key code value of the key
    which was depressed, otherwise `0`. See {{ domxref("KeyboardEvent.keyCode")
    }} for the list of key codes.
- _`charCodeArg`_
  - : Is a `unsigned long` representingthe Unicode character associated with
    the depressed key otherwise `0`.

## Example

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

    typeArg of type DOMString
    canBubbleArg of type boolean
    cancelableArg of type boolean
    viewArg of type views::AbstractView
    keyIdentifierArg of type DOMString
    keyLocationArg of type unsigned long
    modifiersList of type DOMString);
