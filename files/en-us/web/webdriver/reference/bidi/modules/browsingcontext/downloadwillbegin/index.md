---
title: "`browsingContext.downloadWillBegin` event"
short-title: downloadWillBegin
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.downloadWillBegin_event
sidebar: webdriver
---

The `browsingContext.downloadWillBegin` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when the browser is about to start a file download.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the context in which the download was triggered.
- `download`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this download.
    The same ID is included in the corresponding [`browsingContext.downloadEnd`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd) event, so you can correlate the two.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies the associated navigation, or `null` if the download is not associated with a navigation.
    If the navigation was started using the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) or [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command, this ID matches the `navigation` value in the command's response.
    The same ID is shared by other events that fire for this navigation, such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) and [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module events.
- `suggestedFilename`
  - : A string that contains the filename that the browser suggests for the download.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL of the download.

## Description

A download is initiated either by activating a link that has the [`download`](/en-US/docs/Web/HTML/Reference/Elements/a#download) attribute or by a response to a network request with a [`Content-Disposition`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Disposition) header that indicates the resource as an attachment.

After this event fires, the browser determines whether to allow the download and where to save it, based on the download behavior configured using [`browser.setDownloadBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior).

## Examples

### Receiving an event when a download starts

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.downloadWillBegin` active.

Suppose a link on the page points to `https://example.com/files/report.pdf`.
Before starting the download, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.downloadWillBegin",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "suggestedFilename": "report.pdf",
    "timestamp": 1737033600000,
    "url": "https://example.com/files/report.pdf"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.downloadEnd`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd) event
- [`browser.setDownloadBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
