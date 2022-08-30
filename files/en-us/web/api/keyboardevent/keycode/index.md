---
title: KeyboardEvent.keyCode
slug: Web/API/KeyboardEvent/keyCode
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM Events
  - Deprecated
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
  - keyCode
browser-compat: api.KeyboardEvent.keyCode
---
{{APIRef("UI Events")}}{{Deprecated_Header}}

The deprecated **`KeyboardEvent.keyCode`** read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

This is usually the decimal ASCII ({{RFC(20)}}) or Windows 1252 code corresponding to the key. If the key can't be identified, this value is `0`.

You should avoid using this if possible; it's been deprecated for some time. Instead, you should use {{domxref("KeyboardEvent.code")}}, if it's implemented. Unfortunately, some browsers still don't have it, so you'll have to be careful to make sure you use one which is supported on all target browsers.

> **Note:** Web developers shouldn't use the `keyCode` attribute for printable characters when handling `keydown` and `keyup` events. As described above, the `keyCode` attribute is not useful for printable characters, especially those input with the <kbd>Shift</kbd> or <kbd>Alt</kbd> key pressed. When implementing a shortcut key handler, the {{domxref("Element/keypress_event", "keypress")}} event is usually better (at least when Gecko is the runtime in use).

## Examples

```js
window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }

  let handled = false;
  if (event.key !== undefined) {
    // Handle the event with KeyboardEvent.key
    handled = true;
  } else if (event.keyCode !== undefined) {
    // Handle the event with KeyboardEvent.keyCode
    handled = true;
  }

  if (handled) {
    // Suppress "double action" if event handled
    event.preventDefault();
  }
}, true);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Value of keyCode

### Printable keys in standard position

The value of key events which are caused by pressing or releasing printable keys in standard position is not compatible between browsers.

IE just exposes the native virtual keycode value as `KeyboardEvent.keyCode`.

Google Chrome, Chromium and Safari must decide the value from the input character. If the inputting character can be inputted with the US keyboard layout, they use the `keyCode` value on the US keyboard layout.

Firefox gets `keyCode` values from ASCII characters inputtable by the key — even with shift modifiers or an ASCII capable keyboard layout. See the following rules for details:

1. If the system is Windows and the native keycode of the pressed key indicates that the key is a-z or 0-9, use a keycode for it.
2. If the system is Mac and the native keycode of the pressed key indicates that the key is 0-9, use a keycode for it.
3. If the pressed key inputs an ASCII alphabetic or numeric character with no modifier key, use a keycode for it.
4. If the pressed key inputs an ASCII alphabetic or numeric character with a Shift key modifier, use a keycode for it.
5. If the pressed key inputs a different ASCII character with no modifier key, use a keycode for it.
6. If the pressed key inputs a different ASCII character with a Shift key modifier, use a keycode for it.
7. Otherwise, i.e., pressed key inputs a unicode character:

    1. If the keyboard layout is ASCII-capable (i.e., can input ASCII alphabets), use 0 or compute with [the following additional rules](#keycode_of_punctuation_keys_on_some_keyboard_layout).
    2. Otherwise, i.e., the keyboard layout isn't ASCII capable, use the ASCII capable keyboard layout installed on the environment with the highest priority:

        1. If the pressed key on the alternative keyboard layout inputs an ASCII alphabetic or numeric character, use a keycode for it.
        2. Otherwise, use 0 or compute with [the following additional rules](#keycode_of_punctuation_keys_on_some_keyboard_layout).

Gecko sets `keyCode` values of punctuation keys as far as possible (when points 7.1 or 7.2 in the above list are reached) with the following rules:

> **Warning:** The purpose of these new additional rules is for making users whose keyboard layouts map unicode characters to punctuation keys in a US keyboard layout can use web applications which support Firefox only with ASCII-capable keyboard layouts or just with a US keyboard layout. Otherwise, the newly mapped `keyCode` values may be conflict with other keys. For example, if the active keyboard layout is Russian, the `keyCode` value of **both** the `"Period"` key and `"Slash"` key are `190` (`KeyEvent.DOM_VK_PERIOD`). If you need to distinguish those keys but you don't want to support all keyboard layouts in the world by yourself, you should probably use {{domxref("KeyboardEvent.code")}}.

1. If running macOS or Linux:

    1. If the active keyboard layout is not ASCII-capable and an alternative ASCII-capable keyboard layout is available.

        1. If the alternative ASCII-capable keyboard layout produces an ASCII character via just the unmodified key, use a `keyCode` for the character.
        2. If the alternative ASCII-capable keyboard layout produces an ASCII character with a Shift key modifier, use a `keyCode` for the shifted character.
        3. Otherwise, use a `keyCode` for an ASCII character produced by the key when the US keyboard layout is active.

    2. Otherwise, use a `keyCode` for an ASCII character produced by the key when the US keyboard layout is active.

2. If running on Windows:

    1. Use a `keyCode` value for an ASCII character produced by a key which is mapped to the same virtual keycode of Windows when the US keyboard layout is active.

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by printable keys in
    standard position
  </caption>
  <thead>
    <tr>
      <th scope="row">{{domxref("KeyboardEvent.code")}}</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Digit1"</code></th>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
      <td colspan="3"><code>0x31 (49)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit2"</code></th>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
      <td colspan="3"><code>0x32 (50)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit3"</code></th>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
      <td colspan="3"><code>0x33 (51)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit4"</code></th>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
      <td colspan="3"><code>0x34 (52)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit5"</code></th>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
      <td colspan="3"><code>0x35 (53)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit6"</code></th>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
      <td colspan="3"><code>0x36 (54)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit7"</code></th>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
      <td colspan="3"><code>0x37 (55)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit8"</code></th>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
      <td colspan="3"><code>0x38 (56)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit9"</code></th>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
      <td colspan="3"><code>0x39 (57)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit0"</code></th>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
      <td colspan="3"><code>0x30 (48)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyA"</code></th>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
      <td colspan="3"><code>0x41 (65)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyB"</code></th>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
      <td colspan="3"><code>0x42 (66)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyC"</code></th>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
      <td colspan="3"><code>0x43 (67)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyD"</code></th>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
      <td colspan="3"><code>0x44 (68)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyE"</code></th>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
      <td colspan="3"><code>0x45 (69)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyF"</code></th>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
      <td colspan="3"><code>0x46 (70)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyG"</code></th>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
      <td colspan="3"><code>0x47 (71)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyH"</code></th>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
      <td colspan="3"><code>0x48 (72)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyI"</code></th>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
      <td colspan="3"><code>0x49 (73)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyJ"</code></th>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
      <td colspan="3"><code>0x4A (74)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyK"</code></th>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
      <td colspan="3"><code>0x4B (75)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyL"</code></th>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
      <td colspan="3"><code>0x4C (76)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyM"</code></th>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
      <td colspan="3"><code>0x4D (77)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyN"</code></th>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
      <td colspan="3"><code>0x4E (78)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyO"</code></th>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
      <td colspan="3"><code>0x4F (79)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyP"</code></th>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
      <td colspan="3"><code>0x50 (80)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyQ"</code></th>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xBA (186)⚠️</code></td>
      <td colspan="3"><code>0x51 (81)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyR"</code></th>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
      <td colspan="3"><code>0x52 (82)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyS"</code></th>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
      <td colspan="3"><code>0x53 (83)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyT"</code></th>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
      <td colspan="3"><code>0x54 (84)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyU"</code></th>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
      <td colspan="3"><code>0x55 (85)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyV"</code></th>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
      <td colspan="3"><code>0x56 (86)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyW"</code></th>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
      <td colspan="3"><code>0x57 (87)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyX"</code></th>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
      <td colspan="3"><code>0x58 (88)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyY"</code></th>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
      <td colspan="3"><code>0x59 (89)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyZ"</code></th>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
      <td colspan="3"><code>0x5A (90)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by printable keys in
    standard position (punctuations in US layout):
  </caption>
  <thead>
    <tr>
      <th scope="row">{{domxref("KeyboardEvent.code")}}</th>
      <th colspan="3" scope="col">IE 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows (10.9)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th></th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Comma"</code></th>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Comma"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code></th>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code></th>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBB (187)</code>⚠️</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [3]</td>
      <td rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> [1]</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [2]</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code> [1]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code> with <kbd>Shift</kbd></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code></th>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td><code>0xBA (186)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2"><code>0x3A (58)</code>⚠️</td>
      <td rowspan="2"><code>0xDE (222)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code> with Shift</th>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
      <td><code>0x38 (56)</code>⚠️</td>
      <td><code>0xDE (222)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code></th>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xC0(192)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0x32 (50)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td rowspan="2"><code>0xDB (219)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code> with <kbd>Shift</kbd></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code></th>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2"><code>0xDB (219)</code>⚠️</td>
      <td rowspan="2"><code>0xDD (221)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code></th>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xF4 (244)</code>⚠️</td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>❌ N/A</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xC0 (192)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code></th>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2"><code>0xDD (221)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code></th>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> [1]</td>
      <td><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code>[1]</td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code> with <kbd>Shift</kbd></th>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBD (189)</code></td>
      <td><code>0xBB (187)</code>⚠️ [1]</td>
      <td><code>0xBD (189)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code></th>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xDE (222)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code> [1]</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0x36 (54)</code>⚠️</td>
      <td rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xBB (187)</code>[1]</td>
      <td><code>0xBB (187)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️ [1]</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0xA0 (160)</code>⚠️</td>
      <td rowspan="2"><code>0x3D (61)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code> with <kbd>Shift</kbd></th>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xC0 (192)</code>⚠️</td>
      <td><code>0xBB (187)</code></td>
      <td><code>0xC0 (192)</code>⚠️ [1]</td>
      <td><code>0xBB (187)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code></th>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xE2 (226)</code>⚠️</td>
      <td rowspan="2"><code>0xC1 (193)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0xA7 (167)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code></th>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0xFF (255)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2">[4]</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xE5 (229)</code>⚠️ [5]</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC </code>(220)</td>
      <td rowspan="2"><code>0xDC </code>(220)</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td rowspan="2"><code>0xDC (220)</code>⚠️</td>
      <td rowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code> with <kbd>Shift</kbd></th>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xBD (189)</code>⚠️</td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Windows</th>
      <th colspan="3" scope="col">Mac (10.9)</th>
      <th colspan="3" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" scope="col">Internet Explorer 11</th>
      <th colspan="6" scope="col">Google Chrome 34</th>
      <th colspan="3" scope="col">Chromium 34</th>
      <th colspan="3" scope="col">Safari 7</th>
      <th colspan="9" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] The value is input from JIS keyboard. When you use ANSI keyboard, the keyCode value and inputted character are what you select from the US keyboard layout.

\[2] The key is a dead key. The value of `keyup` event is `0xBA (186)`.

\[3] The key is a dead key. The value of `keyup` event is `0x10 (16)`.

\[4] No key events are fired.

\[5] The key isn't available with Greek keyboard layout (does not input any character). The value of `keyup` event is `0x00 (0)`.

### Non-printable keys (function keys)

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by modifier keys:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"AltLeft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"AltRight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"AltRight"</code> when it's <code>"AltGraph"</code> key
      </th>
      <td>[1]</td>
      <td>[1]</td>
      <td>❌N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
      <td>❌ N/A</td>
      <td>[1]</td>
      <td>❌ N/A</td>
      <td><code>0xE1 (225)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlLeft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlRight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSLeft"</code></th>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSRight"</code></th>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5D (93)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
      <td><code>0xE0 (224)</code>⚠️</td>
      <td><code>0x5B (91)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftLeft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftRight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] On Windows, pressing the <kbd>AltGraph</kbd> key raises both the `"ControlLeft"` and the `"AltRight"` key events.

\[2] When the Japanese keyboard layout is active, pressing the <kbd>CapsLock</kbd> key without pressing <kbd>Shift</kbd> raises `0xF0 (240)`. The key works as the <kbd>Alphanumeric</kbd> key whose label is `"英数"`.

\[3] When the Japanese keyboard layout is active, pressing the <kbd>"CapsLock"</kbd> key without pressing <kbd>Shift</kbd> raises `0x00 (0)`. The key works as the <kbd>"Alphanumeric"</kbd> key whose label is `"英数"`.

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by non-printable keys:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"ContextMenu"</code></th>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Enter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Delete"</code></th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"End"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Help"</code></th>
      <td>❌ N/A</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x2F (47)</code><br />⚠️ [3]</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td>❌ N/A</td>
      <td><code>0x2D (45)</code><br />⚠️ [2]</td>
      <td><code>0x06 (6)</code><br />⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"Home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Insert"</code></th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageDown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageUp"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowDown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowLeft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowRight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowUp"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Escape"</code></th>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PrintScreen"</code></th>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2A (42)</code>⚠️</td>
      <td><code>0x7C (124)</code><br />⚠️ [5]</td>
      <td><code>0x2C (44)</code> [4]</td>
      <td><code>0x2C (44)</code></td>
      <td><code>0x2A (42)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7D (125)</code><br />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Pause"</code></th>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x7E (126)</code><br />⚠️ [5]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] A `keypress` event is fired and its `keyCode` and `charCode` are `0x10 (16)` but the text isn't actually entered into the editor.

\[2] On Mac, the <kbd>Help</kbd> key is mapped to the <kbd>Insert</kbd> key of PC keyboards. These `keyCode` values are the same as the <kbd>Insert</kbd> key's `keyCode` values.

\[3] Tested on Fedora 20.

\[4] Only a `keyup` event is fired.

\[5] PC's <kbd>PrintScreen</kbd>, <kbd>ScrollLock</kbd> and <kbd>Pause</kbd> are mapped to Mac's <kbd>F13</kbd>, <kbd>F14</kbd> and <kbd>F15</kbd>, respectively. Chrome and Safari map them to the same `keyCode` values as Mac's keys.

\[6] <kbd>Pause</kbd> key with <kbd>Control</kbd> generates `0x03 (3)`.

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by function keys:
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"F1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F11"</code></th>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F12"</code></th>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F13"</code></th>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code> [1]</td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x2C (44)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F14"</code></th>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code> [1]</td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x91 (145)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F15"</code></th>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code> [1]</td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x13 (19)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F16"</code></th>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code> [1]</td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> [1]</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> [1]</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0xE5 (229)</code>⚠️ [5]</td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x84 (132)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x85 (133)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x86 (134)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td>❌ <code>N/A</code> [6]</td>
    </tr>
    <tr>
      <th scope="row"><code>"F24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>N/A</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x87 (135)</code></td>
      <td>❌ <code>N/A</code> [8]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] Tested on Fedora 20.

\[2] On PCs, <kbd>PrintScreen</kbd>, <kbd>ScrollLock</kbd> and <kbd>Pause</kbd> are mapped to the Mac's <kbd>F13</kbd>, <kbd>F14</kbd> and <kbd>F15</kbd>, respectively. Firefox sets for them the same `keyCode` values as the PC's keys.

\[3] Tested on Fedora 20. The keys don't cause `GDK_Fxx` keysyms. If the keys cause proper keysyms, these values must be same as IE.

\[4] Tested on Fedora 20. The keys don't cause DOM key events on Chromium.

\[5] The `keyCode` value of a `keyUp` event is `0x83 (131)`.

\[6] Tested on Fedora 20. The keys don't cause DOM key events on Firefox.

\[7] Only the `keydown` event is fired.

\[8] No DOM key events are fired on Firefox.

### Numpad keys

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by keys in numpad in
    NumLock state
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0C (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadAdd"</code></th>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadComma"</code> inputting <code>","</code></th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xBC (188)</code>⚠️</td>
      <td>❌ <em>Always inputs </em><code>"."</code></td>
      <td><code>0xBC (188)</code>⚠️</td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td>❌ <em>Always inputs </em><code>"."</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadComma"</code> inputting <code>"."</code> or empty string
      </th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xBE (190)</code>⚠️</td>
      <td><code>0x6E (110)</code>⚠️</td>
      <td><code>0xBE (190)</code>⚠️</td>
      <td><code>0xC2 (194)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td><code>0x6E (110)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>"."</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>","</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6C (108)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDivide"</code></th>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEnter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEqual"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0xBB (187)</code>⚠️</td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x3D (61)</code>⚠️</td>
      <td><code>0x3D (61)</code>⚠️</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadMultiply"</code></th>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadSubtract"</code></th>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th colspan="2" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

\[1] `"NumLock"` key works as `"Clear"` key on Mac.

<table class="no-markdown">
  <caption>
    keyCode values of each browser's keydown event caused by keys in numpad
    without NumLock state
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">IE 11</th>
      <th scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Numpad0"</code> (<code>"Insert"</code>)</th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code> (<code>"End"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code> (<code>"ArrowDown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code> (<code>"PageDown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code> (<code>"ArrowLeft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code> (<code>"ArrowRight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code> (<code>"Home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code> (<code>"ArrowUp"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code> (<code>"PageUp"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDecimal"</code> (<code>"Delete"</code>)</th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">IE 11</th>
      <th scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
</table>

> **Note:** Recent Mac doesn't have a <kbd>NumLock</kbd> key, and therefore state. That's why the unlocked state is not available.

## Constants for keyCode value

Gecko defines a lot of `keyCode` values in `KeyboardEvent` for making the mapping table explicitly. These values are useful for add-on developers of Firefox, but not so useful in public web pages.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_VK_CANCEL</code></td>
      <td>0x03 (3)</td>
      <td>Cancel key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HELP</code></td>
      <td>0x06 (6)</td>
      <td>Help key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SPACE</code></td>
      <td>0x08 (8)</td>
      <td>Backspace key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TAB</code></td>
      <td>0x09 (9)</td>
      <td>Tab key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLEAR</code></td>
      <td>0x0C (12)</td>
      <td>
        "5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which
        is positioned at NumLock key.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_RETURN</code></td>
      <td>0x0D (13)</td>
      <td>Return/enter key on the main keyboard.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ENTER</code></td>
      <td>0x0E (14)</td>
      <td>
        Reserved, but not used. {{deprecated_inline}} (Dropped, see
        {{bug(969247)}}.)
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_SHIFT</code></td>
      <td>0x10 (16)</td>
      <td>Shift key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTROL</code></td>
      <td>0x11 (17)</td>
      <td>Control key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALT</code></td>
      <td>0x12 (18)</td>
      <td>Alt (Option on Mac) key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAUSE</code></td>
      <td>0x13 (19)</td>
      <td>Pause key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CAPS_LOCK</code></td>
      <td>0x14 (20)</td>
      <td>Caps lock.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANA</code></td>
      <td>0x15 (21)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANGUL</code></td>
      <td>0x15 (21)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EISU</code></td>
      <td>0x 16 (22)</td>
      <td>"英数" key on Japanese Mac keyboard.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_JUNJA</code></td>
      <td>0x17 (23)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_FINAL</code></td>
      <td>0x18 (24)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HANJA</code></td>
      <td>0x19 (25)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_KANJI</code></td>
      <td>0x19 (25)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ESCAPE</code></td>
      <td>0x1B (27)</td>
      <td>Escape key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONVERT</code></td>
      <td>0x1C (28)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NONCONVERT</code></td>
      <td>0x1D (29)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ACCEPT</code></td>
      <td>0x1E (30)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MODECHANGE</code></td>
      <td>0x1F (31)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SPACE</code></td>
      <td>0x20 (32)</td>
      <td>Space bar.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_UP</code></td>
      <td>0x21 (33)</td>
      <td>Page Up key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PAGE_DOWN</code></td>
      <td>0x22 (34)</td>
      <td>Page Down key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_END</code></td>
      <td>0x23 (35)</td>
      <td>End key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HOME</code></td>
      <td>0x24 (36)</td>
      <td>Home key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LEFT</code></td>
      <td>0x25 (37)</td>
      <td>Left arrow.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UP</code></td>
      <td>0x26 (38)</td>
      <td>Up arrow.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_RIGHT</code></td>
      <td>0x27 (39)</td>
      <td>Right arrow.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOWN</code></td>
      <td>0x28 (40)</td>
      <td>Down arrow.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SELECT</code></td>
      <td>0x29 (41)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINT</code></td>
      <td>0x2A (42)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXECUTE</code></td>
      <td>0x2B (43)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PRINTSCREEN</code></td>
      <td>0x2C (44)</td>
      <td>Print Screen key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_INSERT</code></td>
      <td>0x2D (45)</td>
      <td>Ins(ert) key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DELETE</code></td>
      <td>0x2E (46)</td>
      <td>Del(ete) key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_0</code></td>
      <td>0x30 (48)</td>
      <td>"0" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_1</code></td>
      <td>0x31 (49)</td>
      <td>"1" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_2</code></td>
      <td>0x32 (50)</td>
      <td>"2" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_3</code></td>
      <td>0x33 (51)</td>
      <td>"3" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_4</code></td>
      <td>0x34 (52)</td>
      <td>"4" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_5</code></td>
      <td>0x35 (53)</td>
      <td>"5" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_6</code></td>
      <td>0x36 (54)</td>
      <td>"6" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_7</code></td>
      <td>0x37 (55)</td>
      <td>"7" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_8</code></td>
      <td>0x38 (56)</td>
      <td>"8" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_9</code></td>
      <td>0x39 (57)</td>
      <td>"9" key in standard key location.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COLON</code></td>
      <td>0x3A (58)</td>
      <td>Colon (":") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEMICOLON</code></td>
      <td>0x3B (59)</td>
      <td>Semicolon (";") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_LESS_THAN</code></td>
      <td>0x3C (60)</td>
      <td>Less-than ("&#x3C;") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EQUALS</code></td>
      <td>0x3D (61)</td>
      <td>Equals ("=") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_GREATER_THAN</code></td>
      <td>0x3E (62)</td>
      <td>Greater-than (">") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUESTION_MARK</code></td>
      <td>0x3F (63)</td>
      <td>Question mark ("?") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AT</code></td>
      <td>0x40 (64)</td>
      <td>Atmark ("@") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_A</code></td>
      <td>0x41 (65)</td>
      <td>"A" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_B</code></td>
      <td>0x42 (66)</td>
      <td>"B" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_C</code></td>
      <td>0x43 (67)</td>
      <td>"C" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_D</code></td>
      <td>0x44 (68)</td>
      <td>"D" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_E</code></td>
      <td>0x45 (69)</td>
      <td>"E" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F</code></td>
      <td>0x46 (70)</td>
      <td>"F" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_G</code></td>
      <td>0x47 (71)</td>
      <td>"G" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_H</code></td>
      <td>0x48 (72)</td>
      <td>"H" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_I</code></td>
      <td>0x49 (73)</td>
      <td>"I" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_J</code></td>
      <td>0x4A (74)</td>
      <td>"J" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_K</code></td>
      <td>0x4B (75)</td>
      <td>"K" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_L</code></td>
      <td>0x4C (76)</td>
      <td>"L" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_M</code></td>
      <td>0x4D (77)</td>
      <td>"M" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_N</code></td>
      <td>0x4E (78)</td>
      <td>"N" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_O</code></td>
      <td>0x4F (79)</td>
      <td>"O" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_P</code></td>
      <td>0x50 (80)</td>
      <td>"P" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Q</code></td>
      <td>0x51 (81)</td>
      <td>"Q" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_R</code></td>
      <td>0x52 (82)</td>
      <td>"R" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_S</code></td>
      <td>0x53 (83)</td>
      <td>"S" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_T</code></td>
      <td>0x54 (84)</td>
      <td>"T" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_U</code></td>
      <td>0x55 (85)</td>
      <td>"U" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_V</code></td>
      <td>0x56 (86)</td>
      <td>"V" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_W</code></td>
      <td>0x57 (87)</td>
      <td>"W" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_X</code></td>
      <td>0x58 (88)</td>
      <td>"X" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Y</code></td>
      <td>0x59 (89)</td>
      <td>"Y" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_Z</code></td>
      <td>0x5A (90)</td>
      <td>"Z" key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN</code></td>
      <td>0x5B (91)</td>
      <td>Windows logo key on Windows. Or Super or Hyper key on Linux.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CONTEXT_MENU</code></td>
      <td>0x5D (93)</td>
      <td>Opening context menu key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLEEP</code></td>
      <td>0x5F (95)</td>
      <td>Linux support for this keycode was added in Gecko 4.0.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD0</code></td>
      <td>0x60 (96)</td>
      <td>"0" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD1</code></td>
      <td>0x61 (97)</td>
      <td>"1" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD2</code></td>
      <td>0x62 (98)</td>
      <td>"2" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD3</code></td>
      <td>0x63 (99)</td>
      <td>"3" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD4</code></td>
      <td>0x64 (100)</td>
      <td>"4" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD5</code></td>
      <td>0x65 (101)</td>
      <td>"5" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD6</code></td>
      <td>0x66 (102)</td>
      <td>"6" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD7</code></td>
      <td>0x67 (103)</td>
      <td>"7" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD8</code></td>
      <td>0x68 (104)</td>
      <td>"8" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUMPAD9</code></td>
      <td>0x69 (105)</td>
      <td>"9" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_MULTIPLY</code></td>
      <td>0x6A (106)</td>
      <td>"*" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ADD</code></td>
      <td>0x6B (107)</td>
      <td>"+" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SEPARATOR</code></td>
      <td>0x6C (108)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>DOM_VK_SUBTRACT</code></td>
      <td>0x6D (109)</td>
      <td>"-" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DECIMAL</code></td>
      <td>0x6E (110)</td>
      <td>Decimal point on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DIVIDE</code></td>
      <td>0x6F (111)</td>
      <td>"/" on the numeric keypad.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F1</code></td>
      <td>0x70 (112)</td>
      <td>F1 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F2</code></td>
      <td>0x71 (113)</td>
      <td>F2 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F3</code></td>
      <td>0x72 (114)</td>
      <td>F3 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F4</code></td>
      <td>0x73 (115)</td>
      <td>F4 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F5</code></td>
      <td>0x74 (116)</td>
      <td>F5 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F6</code></td>
      <td>0x75 (117)</td>
      <td>F6 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F7</code></td>
      <td>0x76 (118)</td>
      <td>F7 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F8</code></td>
      <td>0x77 (119)</td>
      <td>F8 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F9</code></td>
      <td>0x78 (120)</td>
      <td>F9 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F10</code></td>
      <td>0x79 (121)</td>
      <td>F10 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F11</code></td>
      <td>0x7A (122)</td>
      <td>F11 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F12</code></td>
      <td>0x7B (123)</td>
      <td>F12 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F13</code></td>
      <td>0x7C (124)</td>
      <td>F13 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F14</code></td>
      <td>0x7D (125)</td>
      <td>F14 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F15</code></td>
      <td>0x7E (126)</td>
      <td>F15 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F16</code></td>
      <td>0x7F (127)</td>
      <td>F16 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F17</code></td>
      <td>0x80 (128)</td>
      <td>F17 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F18</code></td>
      <td>0x81 (129)</td>
      <td>F18 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F19</code></td>
      <td>0x82 (130)</td>
      <td>F19 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F20</code></td>
      <td>0x83 (131)</td>
      <td>F20 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F21</code></td>
      <td>0x84 (132)</td>
      <td>F21 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F22</code></td>
      <td>0x85 (133)</td>
      <td>F22 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F23</code></td>
      <td>0x86 (134)</td>
      <td>F23 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_F24</code></td>
      <td>0x87 (135)</td>
      <td>F24 key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_NUM_LOCK</code></td>
      <td>0x90 (144)</td>
      <td>Num Lock key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SCROLL_LOCK</code></td>
      <td>0x91 (145)</td>
      <td>Scroll Lock key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_JISHO</code></td>
      <td>0x92 (146)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for "Dictionary" key on Fujitsu OASYS.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_MASSHOU</code></td>
      <td>0x93 (147)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for "Unregister word" key on Fujitsu OASYS.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_TOUROKU</code></td>
      <td>0x94 (148)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for "Register word" key on Fujitsu OASYS.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_LOYA</code></td>
      <td>0x95 (149)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for "Left OYAYUBI" key on Fujitsu OASYS.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FJ_ROYA</code></td>
      <td>0x96 (150)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for "Right OYAYUBI" key on Fujitsu OASYS.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_CIRCUMFLEX</code></td>
      <td>0xA0 (160)</td>
      <td>Circumflex ("^") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXCLAMATION</code></td>
      <td>0xA1 (161)</td>
      <td>Exclamation ("!") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOUBLE_QUOTE</code></td>
      <td>0xA3 (162)</td>
      <td>Double quote (""") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HASH</code></td>
      <td>0xA3 (163)</td>
      <td>Hash ("#") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_DOLLAR</code></td>
      <td>0xA4 (164)</td>
      <td>Dollar sign ("$") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERCENT</code></td>
      <td>0xA5 (165)</td>
      <td>Percent ("%") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_AMPERSAND</code></td>
      <td>0xA6 (166)</td>
      <td>Ampersand ("&#x26;") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_UNDERSCORE</code></td>
      <td>0xA7 (167)</td>
      <td>Underscore ("_") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_PAREN</code></td>
      <td>0xA8 (168)</td>
      <td>Open parenthesis ("(") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_PAREN</code></td>
      <td>0xA9 (169)</td>
      <td>Close parenthesis (")") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ASTERISK</code></td>
      <td>0xAA (170)</td>
      <td>Asterisk ("*") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLUS</code></td>
      <td>0xAB (171)</td>
      <td>Plus ("+") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PIPE</code></td>
      <td>0xAC (172)</td>
      <td>Pipe ("|") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_HYPHEN_MINUS</code></td>
      <td>0xAD (173)</td>
      <td>Hyphen-US/docs/Minus ("-") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_CURLY_BRACKET</code></td>
      <td>0xAE (174)</td>
      <td>Open curly bracket ("{") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_CURLY_BRACKET</code></td>
      <td>0xAF (175)</td>
      <td>Close curly bracket ("}") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_TILDE</code></td>
      <td>0xB0 (176)</td>
      <td>Tilde ("~") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_MUTE</code></td>
      <td>0xB5 (181)</td>
      <td>Audio mute key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_DOWN</code></td>
      <td>0xB6 (182)</td>
      <td>Audio volume down key</td>
    </tr>
    <tr>
      <td><code>DOM_VK_VOLUME_UP</code></td>
      <td>0xB7 (183)</td>
      <td>Audio volume up key</td>
    </tr>
    <tr>
      <td><code>DOM_VK_COMMA</code></td>
      <td>0xBC (188)</td>
      <td>Comma (",") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PERIOD</code></td>
      <td>0xBE (190)</td>
      <td>Period (".") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_SLASH</code></td>
      <td>0xBF (191)</td>
      <td>Slash ("/") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_QUOTE</code></td>
      <td>0xC0 (192)</td>
      <td>Back tick ("`") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_OPEN_BRACKET</code></td>
      <td>0xDB (219)</td>
      <td>Open square bracket ("[") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_BACK_SLASH</code></td>
      <td>0xDC (220)</td>
      <td>Back slash ("\") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CLOSE_BRACKET</code></td>
      <td>0xDD (221)</td>
      <td>Close square bracket ("]") key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_QUOTE</code></td>
      <td>0xDE (222)</td>
      <td>Quote (''') key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_META</code></td>
      <td>0xE0 (224)</td>
      <td>Meta key on Linux, Command key on Mac.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ALTGR</code></td>
      <td>0xE1 (225)</td>
      <td>AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_HELP</code></td>
      <td>0xE3 (227)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This is (was?) used for Olivetti ICO keyboard.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_00</code></td>
      <td>0xE4 (228)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This is (was?) used for Olivetti ICO keyboard.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_ICO_CLEAR</code></td>
      <td>0xE6 (230)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This is (was?) used for Olivetti ICO keyboard.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_RESET</code></td>
      <td>0xE9 (233)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_JUMP</code></td>
      <td>0xEA (234)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA1</code></td>
      <td>0xEB (235)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA2</code></td>
      <td>0xEC (236)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_PA3</code></td>
      <td>0xED (237)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_WSCTRL</code></td>
      <td>0xEE (238)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CUSEL</code></td>
      <td>0xEF (239)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ATTN</code></td>
      <td>0xF0 (240)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_FINISH</code></td>
      <td>0xF1 (241)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_COPY</code></td>
      <td>0xF2 (242)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_AUTO</code></td>
      <td>0xF3 (243)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_ENLW</code></td>
      <td>0xF4 (244)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_BACKTAB</code></td>
      <td>0xF5 (245)</td>
      <td>
        An
        <a href="#oem_specific_keys_on_windows">OEM specific key on Windows</a>.
        This was used for Nokia/Ericsson's device.
      </td>
    </tr>
    <tr>
      <td><code>DOM_VK_ATTN</code></td>
      <td>0xF6 (246)</td>
      <td>Attn (Attention) key of IBM midrange computers, e.g., AS/400.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_CRSEL</code></td>
      <td>0xF7 (247)</td>
      <td>CrSel (Cursor Selection) key of IBM 3270 keyboard layout.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EXSEL</code></td>
      <td>0xF8 (248)</td>
      <td>ExSel (Extend Selection) key of IBM 3270 keyboard layout.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_EREOF</code></td>
      <td>0xF9 (249)</td>
      <td>Erase EOF key of IBM 3270 keyboard layout.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PLAY</code></td>
      <td>0xFA (250)</td>
      <td>Play key of IBM 3270 keyboard layout.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_ZOOM</code></td>
      <td>0xFB (251)</td>
      <td>Zoom key.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_PA1</code></td>
      <td>0xFD (253)</td>
      <td>PA1 key of IBM 3270 keyboard layout.</td>
    </tr>
    <tr>
      <td><code>DOM_VK_WIN_OEM_CLEAR</code></td>
      <td>0xFE (254)</td>
      <td>
        Clear key, but we're not sure the meaning difference from
        <code>DOM_VK_CLEAR</code>.
      </td>
    </tr>
  </tbody>
</table>

### OEM specific keys on Windows

On Windows, some values of virtual keycode are defined (reserved) for OEM specific key. They are available for special keys on non-standard keyboard. In other words, some values are used for different meaning by two or more vendors (or hardware).

Starting Gecko 21 (and older than 15), OEM specific key values are available on the keyCode attribute only on Windows. So they are not useful for usual web applications. They are useful only for intranet applications or in similar situations.

See "[Manufacturer-specific Virtual-Key Codes (Windows CE 5.0)](https://docs.microsoft.com/en-us/previous-versions/windows/embedded/aa452679(v=msdn.10))" in MSDN for the detail.
