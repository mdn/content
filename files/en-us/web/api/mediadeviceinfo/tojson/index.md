---
title: "MediaDeviceInfo: toJSON() method"
short-title: toJSON()
slug: Web/API/MediaDeviceInfo/toJSON
page-type: web-api-instance-method
browser-compat: api.MediaDeviceInfo.toJSON
---

{{APIRef("WebRTC")}}

The **`toJSON()`** method of the {{domxref("MediaDeviceInfo")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("MediaDeviceInfo")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("MediaDeviceInfo")}} object.

### Examples

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        console.log(device.toJSON());
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

This might produce:

```bash
Object { deviceId: "HJtTemQTM64Bivxv3ZEyKjCi1VR8042lPNpmXKObKJE=", kind: "videoinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "EqDubLxPlPeW+5w/ereWTF/3EaAMVHh9QBBHkZHiP0k=", kind: "audioinput", label: "", groupId: "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0=" }
Object { deviceId: "CanWttL2RnHOiS7FzzYXMIvLqVFE5S06Lfy8H//nhEw=", kind: "audioinput", label: "", groupId: "nOdLNeXGIw9oL9f2wH69SssQpRVs7cmt9jqZrUWgQwI=" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
