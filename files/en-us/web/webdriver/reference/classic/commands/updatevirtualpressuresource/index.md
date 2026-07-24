---
title: Update Virtual Pressure Source
short-title: Update Virtual Pressure Source
slug: Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource
page-type: webdriver-command
browser-compat: webdriver.classic.UpdateVirtualPressureSource
sidebar: webdriver
---

The _Update Virtual Pressure Source_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API sets a new sample for a virtual pressure source previously created with the [Create Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) command. The new sample is delivered to the page through the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API), letting tests drive pressure-dependent behavior with predetermined data.

## Syntax

| Method                                                | URI template                                  |
| ----------------------------------------------------- | --------------------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/pressuresource/{type}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `type`
  - : The pressure source type to update, for example `"cpu"`.

### Payload

The input is an object:

- `sample`
  - : A string giving the pressure state to report. One of `"nominal"`, `"fair"`, `"serious"`, or `"critical"`.
- `ownContributionEstimate` {{optional_inline}}
  - : A number between `0` and `1` estimating the fraction of the reported pressure that is caused by the page itself.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `sample` is not a valid pressure state, or `ownContributionEstimate` is not a valid number.
- `unsupported operation`
  - : No virtual pressure source of the given `type` has been created.

## Examples

### Updating a virtual pressure source

With a WebDriver server running on `localhost:4444`, assume a virtual `"cpu"` pressure source has been created for the active session. To report a new pressure state, send the `sample` value as the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"sample": "critical"}' \
  http://localhost:4444/session/ID/pressuresource/cpu
```

The server responds with a null value to indicate success:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":null}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Create Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) command
- [Delete Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource) command
- [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API)
