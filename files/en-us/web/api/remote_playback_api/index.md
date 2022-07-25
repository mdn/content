---
title: Remote Playback API
slug: Web/API/Remote_Playback_API
page-type: web-api-overview
tags:
  - API
  - Overview
  - Reference
  - Remote Playback API
browser-compat: api.RemotePlayback
---
{{DefaultAPISidebar("Remote Playback API")}}

The Remote Playback API extends the {{domxref("HTMLMediaElement")}} to enable the control of remote playback of media from a webpage.

## Concepts and Usage

Remote playback devices are connected devices such as TVs, projectors, or speakers. The API takes into account wired devices connected via HDMI or DVI, and wireless devices, for example Chromecast or AirPlay.

The API enables a page, which has an media element such as a video or audio file, to initiate and control playback of that media on a connected remote device. For example, playing a video on a connected TV.

> **Note:** Safari for iOS has some APIs which enable remote playback on AirPlay. Details of these can be found in [the Safari 9.0 release notes](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_9_0.html#//apple_ref/doc/uid/TP40014305-CH9-SW16).
>
> Android versions of Firefox and Chrome also contain some remote playback features. These devices will show a Cast button if there is a Cast device available in the local network.

## Interfaces

- {{domxref("RemotePlayback")}}
  - : Allows the page to detect availability of remote playback devices, then connect to and control playing on these devices.

## Examples

The following example demonstrates a player with custom controls that supports remote playback. Initially the button used to select a device is hidden.

```html
<video id="videoElement" src="https://example.org/media.ext">
<button id="deviceBtn" style="display: none;">Pick device</button>
```

The {{domxref("RemotePlayback.watchAvailability()")}} method is watches for available remote playback devices. If a device is available, use the callback to show the button.

```js
const deviceBtn = document.getElementById("deviceBtn");
const videoElem = document.getElementById("videoElement");

function availabilityCallback(available) {
  // Show or hide the device picker button depending on device availability.
  deviceBtn.style.display = available ? "inline" : "none";
}

videoElem.remote.watchAvailability(availabilityCallback).catch(() => {
  /* If the device cannot continuously watch available,
  show the button to allow the user to try to prompt for a connection.*/
  deviceBtn.style.display = "inline";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
