---
title: KeyboardEvent.location
slug: Web/API/KeyboardEvent/location
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.location
---
{{APIRef("UI Events")}}

The **`KeyboardEvent.location`** read-only property returns an
`unsigned long` representing the location of the key on the keyboard or other
input device.

Possible values are:

<table class="standard-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0</td>
      <td>
        The key has only one version, or can't be distinguished between the left
        and right versions of the key, and was not pressed on the numeric keypad
        or a key that is considered to be part of the keypad.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>1</td>
      <td>
        The key was the left-hand version of the key; for example, the left-hand
        <kbd>Control</kbd> key was pressed on a standard 101 key US keyboard.
        This value is only used for keys that have more than one possible
        location on the keyboard.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>2</td>
      <td>
        The key was the right-hand version of the key; for example, the
        right-hand <kbd>Control</kbd> key is pressed on a standard 101 key US
        keyboard. This value is only used for keys that have more than one
        possible location on the keyboard.
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>3</td>
      <td>
        <p>
          The key was on the numeric keypad, or has a virtual key code that
          corresponds to the numeric keypad.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> When <kbd>NumLock</kbd> is locked, Firefox
            always returns <code>DOM_KEY_LOCATION_NUMPAD</code> for the keys on
            the numeric pad. Otherwise, when <kbd>NumLock</kbd> is unlocked and
            the keyboard actually has a numeric keypad, Firefox always returns
            <code>DOM_KEY_LOCATION_NUMPAD</code> too. On the other hand, if the
            keyboard doesn't have a keypad, such as on a notebook computer, some
            keys become Numpad only when NumLock is locked. When such keys fires
            key events, the location attribute value depends on the key. That
            is, it must not be <code>DOM_KEY_LOCATION_NUMPAD</code>.
          </p>
        </div>
        <div class="note">
          <p>
            <strong>Note:</strong> <kbd>NumLock</kbd> key's key events indicate
            <code>DOM_KEY_LOCATION_STANDARD</code> both on Firefox and Internet
            Explorer.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_MOBILE</code>
        {{Non-standard_inline()}} {{deprecated_inline}}
      </td>
      <td>4</td>
      <td>
        <p>
          The key was on a mobile device; this can be on either a physical
          keypad or a virtual keyboard.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>DOM_KEY_LOCATION_JOYSTICK</code> {{Non-standard_inline()}}
        {{deprecated_inline}}
      </td>
      <td>5</td>
      <td>
        <p>
          The key was a button on a game controller or a joystick on a mobile
          device.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Value

A number.

## Examples

```js
function keyEvent(event) {
  console.log(`Location of key pressed: ${event.location}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}
