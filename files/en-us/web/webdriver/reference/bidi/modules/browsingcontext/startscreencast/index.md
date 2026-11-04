---
title: "`browsingContext.startScreencast` command"
short-title: startScreencast
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.startScreencast
sidebar: webdriver
---

The `browsingContext.startScreencast` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module starts recording the viewport of the specified [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to a file.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d",
    "destinationFolder": "/home/example/recordings",
    "mimeType": "video/webm",
    "video": {
      "frameRate": 15,
      "height": 720,
      "width": 1280
    }
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the top-level context to record.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `destinationFolder` {{optional_inline}}
  - : A string that contains the path to the directory in which to save the recording.
    The directory must already exist, and the path is resolved from the root of the browser's filesystem.
    If omitted, the file location is browser-dependent.
- `mimeType` {{optional_inline}}
  - : A string that specifies the {{Glossary("MIME type")}} of the recording format.
    If omitted, the browser chooses the format.
- `video` {{optional_inline}}
  - : An object that specifies the video recording settings.
    The browser attempts to match these values as closely as possible, subject to hardware limits and other constraints.
    It can contain the following fields:
    - `frameRate` {{optional_inline}}
      - : A non-negative integer that specifies the recording frame rate in frames per second.
    - `height` {{optional_inline}}
      - : A non-negative integer that specifies the video height in pixels.
    - `width` {{optional_inline}}
      - : A non-negative integer that specifies the video width in pixels.

### Return value

The `result` object in the response contains the following fields:

- `path`
  - : A string that contains the file path where the browser saves the recording.
- `screencast`
  - : A string that contains the ID of the recording.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - A video constraint is outside its permitted integer range.
    - The path specified by [`destinationFolder`](#destinationfolder) cannot be found.
    - The specified [`context`](#context) is not a top-level context.
- `no such frame`
  - : Thrown if no context with the specified [context ID](#context) is found.
- `unknown error`
  - : Thrown if the browser cannot create the recording stream.
- `unsupported operation`
  - : Thrown if the browser cannot record the viewport of the specified context.

## Description

The `browsingContext.startScreencast` command records the viewport of the top-level context over time.
Recording continues after the browser sends the response, and the browser writes the recording to the file as it progresses.
The response supplies a recording ID and a file path.
Use this ID with [`browsingContext.stopScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast) to stop the recording.

The browser creates and writes to the file but does not delete it.
The client is responsible for removing the file when it is no longer needed, provided the client has the necessary filesystem access.

If the browser fails to write data to the file while the recording is in progress, it stops recording automatically.
When the client subsequently sends `browsingContext.stopScreencast`, the browser returns a success response containing both the file [`path`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast#path) and an [`error`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast#error) description in the `result` object.

## Examples

### Starting a viewport recording

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you created a tab with [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) and navigated it to a page.
The browser returned a context ID in the [`context`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create#context) field.
Send the following message to start recording the tab's viewport:

```json
{
  "id": 4,
  "method": "browsingContext.startScreencast",
  "params": {
    "context": "0b594fd2-e8de-4fd1-bad5-9b3d791bdb3d"
  }
}
```

The browser starts recording and responds with the file path and recording ID as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "path": "/home/example/Downloads/screencast-d746584f-4744-4cb5-aabd-f059ab65144d.webm",
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.stopScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast) command
- [`browsingContext.captureScreenshot`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
