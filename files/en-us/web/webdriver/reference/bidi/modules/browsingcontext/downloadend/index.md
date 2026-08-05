---
title: "`browsingContext.downloadEnd` event"
short-title: downloadEnd
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.downloadEnd_event
sidebar: webdriver
---

The `browsingContext.downloadEnd` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a file download finishes, either because it completed or because it was canceled.

## Event data

The `params` field in the event notification is an object that includes a `status` field.
The value of `status` determines which additional fields are present.

- `context`
  - : A string that contains the ID of the context in which the download occurred.
- `download`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies this download.
    The same ID is included in the corresponding [`browsingContext.downloadWillBegin`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin) event, so you can correlate the two.
- `filepath` {{optional_inline}}
  - : A string that contains the path where the browser saved the downloaded file, or `null` if the path is not available.
    This field is included only when the [`status`](#status) field value is `"complete"`.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies the associated navigation, or `null` if the download is not associated with a navigation.
    If the navigation was started using the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) or [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command, this ID matches the `navigation` value in the command's response.
    The same ID is shared by other events that fire for this navigation, such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) and [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module events.
- `status`
  - : A string that indicates the result of the download.
    It has one of the following values:
    - `"canceled"`: The download was canceled before it completed.
    - `"complete"`: The download completed successfully.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : A string that contains the URL of the download.

## Examples

### Receiving an event when a download completes

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.downloadEnd` active.

Suppose a download finishes saving to disk.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.downloadEnd",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "status": "complete",
    "timestamp": 1737033601500,
    "url": "https://example.com/files/report.pdf",
    "filepath": "/home/user/Downloads/report.pdf"
  }
}
```

### Receiving an event when a download is canceled

Consider the same connection, session, and subscription as in the previous example.

However, suppose the `type` field in the [`browser.setDownloadBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior) configuration is set to `"denied"`, causing the browser to reject the download rather than save it.
In this case, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.downloadEnd",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "status": "canceled",
    "timestamp": 1737033601500,
    "url": "https://example.com/files/report.pdf"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.downloadWillBegin`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin) event
- [`browser.setDownloadBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
