---
title: HTMLMediaElement.msPlayToSource
slug: Web/API/HTMLMediaElement/msPlayToSource
page-type: web-api-instance-property
tags:
  - msPlayToSource
  - Non-standard
  - Property
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

**`msPlayToSource`** is a read-only property which gets the
source associated with the media element for use by the [`PlayToManager`](https://docs.microsoft.com/en-us/uwp/api/windows.media.playto.playtomanager?view=winrt-22000).

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Value

_PlayTo_ enables an app can connect local playback/display for
audio, video, and img elements to a remote device. For more information, see the [Windows.Media.PlayTo](https://docs.microsoft.com/en-us/uwp/api/windows.media.playto?view=winrt-22000)
APIs.

**`msPlayToSource`** is used in the
`sourceRequested` handler — get the `PlayToSource` object from an
audio, video, or img element using the `msPlayToSource` property and pass it
to `e.setSource`, then set the `PlayToSource.next` property to the
`msPlayToSource` of another element for continual playing.

The property value for `msPlayToSource` is the source associated with the
media element.

## Example

```html
<video id="videoplayer" src="video.mp4" controls autoplay />
```

```js
// Step 1: Obtain PlayToManager object for app's current view.
const ptm = windows.media.playTo.playToManager.getForCurrentView();

// Step 2: Register for the sourcerequested event (user swipes Devices charm).
ptm.addEventListener("sourcerequested", (event) => {

  // Step 3: Specify the media to be streamed (to filter devices).
  event.sourceRequest.setSource(document.getElementById("videoplayer").msPlayToSource);

  // The media will then be streamed to the device chosen by the user in the UI.

});
```
