---
title: "MediaDeviceInfo: groupId property"
short-title: groupId
slug: Web/API/MediaDeviceInfo/groupId
page-type: web-api-instance-property
browser-compat: api.MediaDeviceInfo.groupId
---

{{APIRef("Media Capture")}}

The **`groupId`** readonly property of
the {{domxref("MediaDeviceInfo")}} interface returns a string that
is a group identifier.

Two devices have the same group identifier if they
belong to the same physical device; for example, a monitor with both a built-in camera
and microphone.

## Value

A string which uniquely identifies the group of related devices to
which this device belongs.

## Specifications

{{Specifications}}

## Examples

In this example, we assemble a list of the devices which are part of the same group as
a given device. This might be used to produce a user interface that gathers associated
devices together for presentation purposes, or to make it easy for the user to choose to
use the built-in camera and microphone on the same display at the same time.

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (device.groupId === mainDevInfo.groupId) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

The `getDeviceGroup()` function takes as input the
`MediaDeviceInfo` object describing the device for which a group list is to
be built. The function starts by initializing the result array, `devList`, to
be an empty array.

Then {{domxref("MediaDevices.enumerateDevices",
  "navigator.mediaDevices.enumerateDevices()")}} is called to get the list of all media
devices. Once the promise resolves, we walk the list using {{jsxref("Array.forEach",
  "forEach()")}}. For each device, if its {{domxref("MediaDeviceInfo.groupId",
  "groupId")}} matches the main device's `groupId`, we push the
{{domxref("MediaDeviceInfo")}} object onto the list.

Finally, the list, which now contains a `MediaDeviceInfo` object for each
device in the same group, is returned to the caller.

This could be altered easily to either leave out the passed-in device from the returned
list, or to place it at the top of the list, by comparing the two objects'
{{domxref("MediaDeviceInfo.deviceId", "deviceId")}} values, only pushing the device onto
the result list if it doesn't match.

This version of the example puts the passed-in device at the top of the result list,
then adds any other members of the group that are found:

```js
const getDeviceGroup = (mainDevInfo) => {
  let devList = [mainDevInfo];

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (
        device.groupId === mainDevInfo.groupId &&
        device.deviceId !== mainDevInfo.deviceId
      ) {
        devList.push(device);
      }
    });
  });

  return devList;
};
```

## Browser compatibility

{{Compat}}
