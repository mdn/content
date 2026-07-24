---
title: "HTMLVideoElement: disablePictureInPicture property"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.disablePictureInPicture
---

{{APIRef("Picture-in-Picture API")}}

The **`disablePictureInPicture`** property of the {{domxref("HTMLVideoElement")}} interface reflects the HTML attribute indicating whether the picture-in-picture feature is disabled for the current element.

This value only represents a request from the website to the user agent.
User configuration may change the eventual behavior—for example, Firefox users can change the `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` setting to ignore the request to disable PiP.

## Value

A boolean value that is `true` if the picture-in-picture feature is disabled for this element.

When `true`, the user agent will not suggest picture-in-picture to users, or request it automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
