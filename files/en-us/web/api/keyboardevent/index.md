---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
page-type: web-api-interface
tags:
  - API
  - DOM
  - Event
  - Input
  - Interface
  - Key Events
  - Keyboard Events
  - KeyboardEvent
  - MakeBrowserAgnostic
  - Reference
  - UI Events
  - keyboard
  - user input
browser-compat: api.KeyboardEvent
---
{{APIRef("UI Events")}}

**`KeyboardEvent`** objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. The event type ({{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}}, or {{domxref("Element/keyup_event", "keyup")}}) identifies what kind of keyboard activity occurred.

> **Note:** `KeyboardEvent` events just indicate what interaction the user had with a key on the keyboard at a low level, providing no contextual meaning to that interaction. When you need to handle text input, use the {{domxref("HTMLElement/input_event", "input")}} event instead. Keyboard events may not be fired if the user is using an alternate means of entering text, such as a handwriting system on a tablet or graphics tablet.

{{InheritanceDiagram}}

## Constructor

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Creates a new `KeyboardEvent` object.

## Constants

The `KeyboardEvent` interface defines the following constants.

### Keyboard locations

The following constants identify which part of the keyboard the key event originates from. They are accessed as `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` and so forth.

<table class="standard-table">
  <caption>
    Keyboard location identifiers
  </caption>
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0x00</td>
      <td>
        <p>
          The key described by the event is not identified as being located in a
          particular area of the keyboard; it is not located on the numeric
          keypad (unless it's the NumLock key), and for keys that are duplicated
          on the left and right sides of the keyboard, the key is, for whatever
          reason, not to be associated with that location.
        </p>
        <p>
          Examples include alphanumeric keys on the standard PC 101 US keyboard,
          the NumLock key, and the space bar.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          The key is one which may exist in multiple locations on the keyboard
          and, in this instance, is on the left side of the keyboard.
        </p>
        <p>
          Examples include the left Control key, the left Command key on a
          Macintosh keyboard, or the left Shift key.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          The key is one which may exist in multiple positions on the keyboard
          and, in this case, is located on the right side of the keyboard.
        </p>
        <p>
          Examples include the right Shift key and the right Alt key (Option on
          a Mac keyboard).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          The key is located on the numeric keypad, or is a virtual key
          associated with the numeric keypad if there's more than one place the
          key could originate from. The NumLock key does not fall into this
          group and is always encoded with the location
          <code>DOM_KEY_LOCATION_STANDARD</code>.
        </p>
        <p>
          Examples include the digits on the numeric keypad, the keypad's Enter
          key, and the decimal point on the keypad.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the  <kbd>Alt</kbd> (<kbd>Option</kbd> or <kbd>⌥</kbd> on macOS) key was active when the key event was generated.

- {{domxref("KeyboardEvent.code")}} {{ReadOnlyInline}}

  - : Returns a string with the code value of the physical key represented by the event.

    > **Warning:** This ignores the user's keyboard layout, so that if the user presses the key at the "Y" position in a QWERTY keyboard layout (near the middle of the row above the home row), this will always return "KeyY", even if the user has a QWERTZ keyboard (which would mean the user expects a "Z" and all the other properties would indicate a "Z") or a Dvorak keyboard layout (where the user would expect an "F"). If you want to display the correct keystrokes to the user, you can use {{domxref("Keyboard.getLayoutMap()")}}.

- {{domxref("KeyboardEvent.ctrlKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Ctrl</kbd> key was active when the key event was generated.

- {{domxref("KeyboardEvent.isComposing")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{ReadOnlyInline}}
  - : Returns a string representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.locale")}} {{ReadOnlyInline}}

  - : Returns a string representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > **Note:** This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{ReadOnlyInline}}
  - : Returns a number representing the location of the key on the keyboard or other input device. A list of the constants identifying the locations is shown above in [Keyboard locations](#keyboard_locations).
- {{domxref("KeyboardEvent.metaKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Meta</kbd> key (on Mac keyboards, the <kbd>⌘ Command</kbd> key; on Windows keyboards, the Windows key (<kbd>⊞</kbd>)) was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{ReadOnlyInline}}

  - : Returns a boolean value that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.

## Methods

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Returns a boolean value indicating if a modifier key such as <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, or <kbd>Meta</kbd>, was pressed when the event was created.

## Obsolete methods

- {{domxref("KeyboardEvent.initKeyEvent()")}} {{deprecated_inline}}
  - : Initializes a `KeyboardEvent` object. This was implemented only by Firefox, and is no longer supported even there; instead, you should use the {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : Initializes a `KeyboardEvent` object. This is now deprecated. You should instead use the {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor.

## Obsolete properties

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}} {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Returns a string representing the character value of the key. If the key corresponds to a printable character, this value is a non-empty Unicode string containing that character. If the key doesn't have a printable representation, this is an empty string.

    > **Note:** If the key is used as a macro that inserts multiple characters, this property's value is the entire string, not just the first character.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}} {{ReadOnlyInline}}

  - : Returns a number representing the Unicode reference number of the key; this property is used only by the `keypress` event. For keys whose `char` property contains multiple characters, this is the Unicode value of the first character in that property. In Firefox 26 this returns codes for printable characters.

    > **Warning:** This property is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}} {{ReadOnlyInline}}

  - : Returns a number representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

    > **Warning:** This property is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : This property is non-standard and has been deprecated in favor of {{domxref("KeyboardEvent.key")}}. It was part of an old version of DOM Level 3 Events.
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : This is a non-standard deprecated alias for {{domxref("KeyboardEvent.location")}}. It was part of an old version of DOM Level 3 Events.
- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}} {{ReadOnlyInline}}

  - : Returns a number representing a system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > **Warning:** This property is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

## Events

The following events are based on the `KeyboardEvent` type. In the list below, each event links to the documentation for the `Element` handler for the event, which applies generally to all of the recipients, including {{domxref("Element")}}, {{domxref("Document")}}, and {{domxref("Window")}}.

- {{domxref("Element.keydown_event", "keydown")}}
  - : A key has been pressed.
- {{domxref("Element.keyup_event", "keyup")}}
  - : A key has been released.

### Obsolete events

- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : A key that normally produces a character value has been pressed. This event was highly device-dependent and is obsolete. You should not use it.

## Usage notes

There are three types of keyboard events: {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keypress_event", "keypress")}}, and {{domxref("Element/keyup_event", "keyup")}}. For most keys, Gecko dispatches a sequence of key events like this:

1. When the key is first pressed, the `keydown` event is sent.
2. If the key is not a modifier key, the `keypress` event is sent.
3. When the user releases the key, the `keyup` event is sent.

### Special cases

Some keys toggle the state of an indicator light; these include keys such as Caps Lock, Num Lock, and Scroll Lock. On Windows and Linux, these keys dispatch only the `keydown` and `keyup` events.

> **Note:** On Linux, Firefox 12 and earlier also dispatched the `keypress` event for these keys.

However, a limitation of the macOS event model causes Caps Lock to dispatch only the `keydown` event. Num Lock was supported on some older laptop models (2007 models and older), but since then, macOS hasn't supported Num Lock even on external keyboards. On older MacBooks with a Num Lock key, that key doesn't generate any key events. Gecko does support the Scroll Lock key if an external keyboard which has an F14 key is connected. In certain older versions of Firefox, this key generated a `keypress` event; this inconsistent behavior was {{bug(602812)}}.

### Auto-repeat handling

When a key is pressed and held down, it begins to auto-repeat. This results in a sequence of events similar to the following being dispatched:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<repeating until the user releases the key>>
6. `keyup`

This is what the DOM Level 3 specification says should happen. There are some caveats, however, as described below.

#### Auto-repeat on some GTK environments such as Ubuntu 9.4

In some GTK-based environments, auto-repeat dispatches a native key-up event automatically during auto-repeat, and there's no way for Gecko to know the difference between a repeated series of keypresses and an auto-repeat. On those platforms, then, an auto-repeat key will generate the following sequence of events:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<repeating until the user releases the key>>
8. `keyup`

In these environments, unfortunately, there's no way for web content to tell the difference between auto-repeating keys and keys that are just being pressed repeatedly.

## Example

```js
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);
```

## Specifications

{{Specifications}}

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser compatibility

{{Compat}}

### Compatibility notes

- As of Firefox 65, the `keypress` event is no longer fired for [non-printable keys](</en-US/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ({{bug(968056)}}), except for the

  <kbd>Enter</kbd>

  key, and the

  <kbd>Shift</kbd>

  \+

  <kbd>Enter</kbd>

  and

  <kbd>Ctrl</kbd>

  \+

  <kbd>Enter</kbd>

  key combinations (these were kept for cross-browser compatibility purposes).

## See also

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState()")}}
