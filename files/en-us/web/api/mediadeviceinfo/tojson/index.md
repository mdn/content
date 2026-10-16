---
title: "MediaDeviceInfo: toJSON() method"
short-title: toJSON()
slug: Web/API/MediaDeviceInfo/toJSON
page-type: web-api-instance-method
browser-compat: api.MediaDeviceInfo.toJSON
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

The **`toJSON()`** method of the {{domxref("MediaDeviceInfo")}} interface returns a JSON-serializable plain object representing the `MediaDeviceInfo` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `MediaDeviceInfo` object is stringified. This method is generally intended to, by default, usefully serialize `MediaDeviceInfo` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("MediaDeviceInfo/deviceId", "deviceId")}}
- {{domxref("MediaDeviceInfo/kind", "kind")}}
- {{domxref("MediaDeviceInfo/label", "label")}}
- {{domxref("MediaDeviceInfo/groupId", "groupId")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `MediaDeviceInfo` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
} else {
  // List cameras and microphones.
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      devices.forEach((device) => {
        const json = device.toJSON();
        console.log(json); // A plain object
        console.log(typeof json); // "object"
        console.log(json.deviceId); // Same value as device.deviceId
      });
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
}
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(device));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "deviceId": "HJtTemQTM64Bivxv3ZEyKjCi1VR8042lPNpmXKObKJE=",
  "kind": "videoinput",
  "label": "",
  "groupId": "Okm2l1YZTrwy8awTxE8QSLNFoVMdIXx++wLh68tbmv0="
}
```

Each additional device is logged as a separate JSON string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
