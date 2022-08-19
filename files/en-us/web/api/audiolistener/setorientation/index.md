---
title: AudioListener.setOrientation()
slug: Web/API/AudioListener/setOrientation
page-type: web-api-instance-method
tags:
  - API
  - AudioListener
  - Method
  - Reference
  - Web Audio API
  - setOrientation
  - Deprecated
browser-compat: api.AudioListener.setOrientation
---
{{ APIRef("Web Audio API") }}{{deprecated_header}}

The `setOrientation()` method of the {{ domxref("AudioListener") }} interface defines the orientation of the listener.

It consists of two direction vectors:

- The _front vector_, defined by the three unitless parameters `x`, `y` and `z`, describes the direction of the face of the listener, that is the direction the nose of the person is pointing towards. The front vector's default value is `(0,` `0,` `-1)`.
- The _up vector_, defined by three unitless parameters `xUp`, `yUp` and `zUp`, describes the direction of the top of the listener's head. The up vector's default value is `(0,` `1,` `0)`.

The two vectors must be separated by an angle of 90° — in linear analysis terms, they must be perpendicular to each other.

## Syntax

```js
setOrientation(x, y, z, xUp, yUp, zUp)
```

### Parameters

- `x`
  - : The x value of the front vector of the listener.
- `y`
  - : The y value of the front vector of the listener.
- `z`
  - : The z value of the front vector of the listener.
- `xUp`
  - : The x value of the up vector of the listener.
- `yUp`
  - : The y value of the up vector of the listener.
- `zUp`
  - : The z value of the up vector of the listener.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
