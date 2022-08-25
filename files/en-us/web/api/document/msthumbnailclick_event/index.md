---
title: 'Document: msthumbnailclick event'
slug: Web/API/Document/msthumbnailclick_event
page-type: web-api-event
tags:
  - msthumbnailclick
  - Event
  - Non-standard
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

The **`msthumbnailclick`** event occurs when a user clicks a button or thumbnail icon in the taskbar.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
object.addEventListener("msthumbnailclick", handler, useCapture)
```

## General info

- Synchronous
  - : No
- Bubbles
  - : No
- Cancelable
  - : No

### Note

The onmsthumbnailclick event is available only to documents that are launched from a pinned site shortcut.

### Parameters

**pEvtObj** \[in]

Type: _IHTMLEventObj_

Pointer to an IHTMLEventObj interface for the current event.

## Example

```js
function thumbnailClickHandler(evt)
{
    alert(`Clicked button: ${evt.buttonID}`);
}
document.addEventListener('msthumbnailclick', thumbnailClickHandler);
```

## Example 2

```js
// Adds an overlay icon on your app pinned to the taskbar
window.external.msSiteModeSetIconOverlay(iconUri, toolTip);

// removes an overlay icon
window.external.msSiteModeClearIconOverlay();

// pinned icons on your taskbar can be instructed to trigger specific events on your site from the taskbar
// add an event
handlerdocument.addEventListener('msthumbnailclick', onButtonClicked, false);

// add the buttons
const btnPlay = window.external.msSiteModeAddThumbBarButton(iconUri, toolTip);

// refresh the taskbar
window.external.msSiteModeShowThumbBar();

// call a JavaScript function when the button is pressed
function onButtonClicked(e) {
   switch (e.buttonID) {
     case btnPlay: play();
     break;}
 }
```

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
