---
title: "KeyboardEvent: getModifierState() method"
short-title: getModifierState()
slug: Web/API/KeyboardEvent/getModifierState
page-type: web-api-instance-method
browser-compat: api.KeyboardEvent.getModifierState
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.getModifierState()`** method returns the
current state of the specified modifier key: `true` if the modifier is active
(that is the modifier key is pressed or locked), otherwise, `false`.

## Syntax

```js-nolint
getModifierState(key)
```

### Parameters

- `key`
  - : A modifier key value. The value must be one of the {{domxref("KeyboardEvent.key")}}
    values which represent modifier keys, or the string `"Accel"`
    {{deprecated_inline}}. This is case-sensitive.

### Return value

A boolean.

## Modifier keys on Gecko

When `getModifierState()` returns true on Gecko?

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (GTK)</th>
      <th scope="col">Mac</th>
      <th scope="col">Android 2.3</th>
      <th scope="col">Android 3.0 or latter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"Alt"</code></th>
      <td>Either <kbd>Alt</kbd> key or <kbd>AltGr</kbd> key pressed</td>
      <td><kbd>Alt</kbd> key pressed</td>
      <td><kbd>⌥ Option</kbd> key pressed</td>
      <td colspan="2"><kbd>Alt</kbd> key or <kbd>option</kbd> key pressed</td>
    </tr>
    <tr>
      <th scope="row"><code>"AltGraph"</code></th>
      <td>
        <p>
          Both <kbd>Alt</kbd> and <kbd>Ctrl</kbd> keys are pressed, or
          <kbd>AltGr</kbd> key is pressed
        </p>
      </td>
      <td>
        <kbd>Level 3 Shift</kbd> key (or <kbd>Level 5 Shift</kbd> key) pressed
      </td>
      <td><kbd>⌥ Option</kbd> key pressed</td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td colspan="3">During LED for <kbd>⇪ Caps Lock</kbd> turned on</td>
      <td>❌ <em>Not supported</em></td>
      <td>While <kbd>CapsLock</kbd> is locked</td>
    </tr>
    <tr>
      <th scope="row"><code>"Control"</code></th>
      <td>Either <kbd>Ctrl</kbd> key or <kbd>AltGr</kbd> key pressed</td>
      <td><kbd>Ctrl</kbd> key pressed</td>
      <td><kbd>control</kbd> key pressed</td>
      <td><kbd>menu</kbd> key pressed.</td>
      <td>
        <kbd>Ctrl</kbd> key, <kbd>control</kbd> key or <kbd>menu</kbd> key
        pressed.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Fn"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>
        <kbd>Function</kbd> key is pressed, but we're not sure what key makes
        the modifier state active. <kbd>Fn</kbd> key on Mac keyboard doesn't
        cause this active.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"FnLock"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Hyper"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Meta"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td><kbd>Meta</kbd> key pressed</td>
      <td><kbd>⌘ Command</kbd> key pressed</td>
      <td>❌ <em>Not supported</em></td>
      <td><kbd>⊞ Windows Logo</kbd> key or <kbd>command</kbd> key pressed</td>
    </tr>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td colspan="2">During LED for <kbd>Num Lock</kbd> turned on</td>
      <td>A key on numpad pressed</td>
      <td>❌ <em>Not supported</em></td>
      <td>While <kbd>NumLock</kbd> is locked</td>
    </tr>
    <tr>
      <th scope="row"><code>"OS"</code></th>
      <td><kbd>⊞ Windows Logo</kbd> key pressed</td>
      <td>
        <kbd>Super</kbd> key or <kbd>Hyper</kbd> key pressed (typically, mapped
        to <kbd>⊞ Windows Logo</kbd> key)
      </td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td>During LED for <kbd>Scroll Lock</kbd> turned on</td>
      <td>
        During LED for <kbd>Scroll Lock</kbd> turned on, but typically this
        isn't supported by platform
      </td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>While <kbd>ScrollLock</kbd> is locked</td>
    </tr>
    <tr>
      <th scope="row"><code>"Shift"</code></th>
      <td colspan="5"><kbd>⇧ Shift</kbd> key pressed</td>
    </tr>
    <tr>
      <th scope="row"><code>"Super"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"Symbol"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
    <tr>
      <th scope="row"><code>"SymbolLock"</code></th>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
      <td>❌ <em>Not supported</em></td>
    </tr>
  </tbody>
</table>

- On the other platforms, "Alt", "Control" and "Shift" may be supported.
- All modifiers (except `"FnLock"`, `"Hyper"`,
  `"Super"` and `"Symbol"` which are defined after Gecko
  implements this) are always supported for untrusted events on Gecko. This doesn't
  depend on the platform.

## `"Accel"` virtual modifier

> **Note:** The `"Accel"` virtual modifier has
> been effectively **deprecated** in current drafts of the DOM3 Events
> specification.

`getModifierState()` also accepts a deprecated virtual modifier named
`"Accel"`. `event.getModifierState("Accel")` returns
`true` when at least one of {{domxref("KeyboardEvent.ctrlKey")}} or
{{domxref("KeyboardEvent.metaKey")}} is `true`.

In old implementations and outdated specifications, it returned `true` when
a modifier which is the typical modifier key for the shortcut key is pressed. For
example, on Windows, pressing <kbd>Ctrl</kbd> key may make it return `true`.
However, on Mac, pressing <kbd>⌘ Command</kbd> key may make it return `true`.
Note that which modifier key makes it return true depends on platforms, browsers, and
user settings. For example, Firefox users can customize this with a pref,
`"ui.key.accelKey"`.

## Examples

```js
function handleKeyboardEvent(event) {
  // Ignore if following modifier is active.
  if (
    event.getModifierState("Fn") ||
    event.getModifierState("Hyper") ||
    event.getModifierState("OS") ||
    event.getModifierState("Super") ||
    event.getModifierState("Win") /* hack for IE */
  ) {
    return;
  }

  // Also ignore if two or more modifiers except Shift are active.
  if (
    event.getModifierState("Control") +
      event.getModifierState("Alt") +
      event.getModifierState("Meta") >
    1
  ) {
    return;
  }

  // Handle shortcut key with standard modifier
  if (event.getModifierState("Accel")) {
    switch (event.key.toLowerCase()) {
      case "c":
        if (event.getModifierState("Shift")) {
          // Handle Accel + Shift + C
          event.preventDefault(); // consume the key event
        }
        break;
      case "k":
        if (!event.getModifierState("Shift")) {
          // Handle Accel + K
          event.preventDefault(); // consume the key event
        }
        break;
    }
    return;
  }

  // Do something different for arrow keys if ScrollLock is locked.
  if (
    (event.getModifierState("ScrollLock") ||
      event.getModifierState("Scroll")) /* hack for IE */ &&
    !event.getModifierState("Control") &&
    !event.getModifierState("Alt") &&
    !event.getModifierState("Meta")
  ) {
    switch (event.key) {
      case "ArrowDown":
      case "Down": // hack for IE and old Gecko
        event.preventDefault(); // consume the key event
        break;
      case "ArrowLeft":
      case "Left": // hack for IE and old Gecko
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
      case "ArrowRight":
      case "Right": // hack for IE and old Gecko
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
      case "ArrowUp":
      case "Up": // hack for IE and old Gecko
        // Do something different if ScrollLock is locked.
        event.preventDefault(); // consume the key event
        break;
    }
  }
}
```

> **Note:** Although this example uses `.getModifierState()` with `"Alt"`,
> `"Control"`, `"Meta"` and `"Shift"`, using
> `event.altKey`, `event.ctrlKey`, `event.metaKey` and
> `event.shiftKey` may be more preferable.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("KeyboardEvent")}} this method belongs to.
- {{domxref("MouseEvent.getModifierState")}}
