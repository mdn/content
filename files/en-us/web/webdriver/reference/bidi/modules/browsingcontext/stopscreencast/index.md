---
title: "`browsingContext.stopScreencast` command"
short-title: stopScreencast
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/stopScreencast
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.stopScreencast
sidebar: webdriver
---

The `browsingContext.stopScreencast` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module stops the specified screencast recording and returns the path to the recording file.

## Syntax

```json-nolint
{
  "method": "browsingContext.stopScreencast",
  "params": {
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

### Parameters

The `params` field contains:

- `screencast`
  - : A string that contains the ID of the recording to stop.
    Recording IDs are returned by the [`browsingContext.startScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value) command.

### Return value

The `result` object in the response contains the following fields:

- `error` {{optional_inline}}
  - : A string that describes a failure to write the recording data to a file.
    The wording of the error message is browser-dependent.
    This field is included only when a write failure occurs.
- `path`
  - : A string that contains the file path where the browser saves the recording.
    This is the same path returned by [`browsingContext.startScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#return_value).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown if a required parameter is missing or has an invalid type.
- `no such screencast`
  - : Thrown if no recording with the specified [screencast ID](#screencast) is found.
    Using the ID of a recording previously stopped with this command throws this same error.

## Description

When the client sends `browsingContext.stopScreencast` for an active recording, the browser stops capturing and writes any remaining encoded data to the file identified by [`path`](#path) before sending the command response.
After `browsingContext.stopScreencast` succeeds, using the same recording ID again throws the [`no such screencast`](#no_such_screencast) error.

If the browser fails to write data to the file while the recording is in progress, it stops recording automatically.
When the client subsequently sends `browsingContext.stopScreencast`, the browser returns a success response containing both the file `path` and an `error` description in the [`result`](#return_value) object.

The browser does not delete the recording file.
The client is responsible for removing the file when it is no longer needed, provided it has the necessary filesystem access.

## Examples

### Stopping a recording

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you started a recording using the [`browsingContext.startScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#examples) command.
The browser returned a recording ID in the [`screencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast#screencast) field.
When you are ready to stop recording, send the following message using the returned recording ID:

```json
{
  "id": 6,
  "method": "browsingContext.stopScreencast",
  "params": {
    "screencast": "d746584f-4744-4cb5-aabd-f059ab65144d"
  }
}
```

The browser responds with the recording's file path as follows:

```json
{
  "id": 6,
  "type": "success",
  "result": {
    "path": "/home/example/Downloads/screencast-d746584f-4744-4cb5-aabd-f059ab65144d.webm"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.startScreencast`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/startScreencast) command
- [`browsingContext.captureScreenshot`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot) command
