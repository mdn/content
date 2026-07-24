---
title: Create Virtual Pressure Source
short-title: Create Virtual Pressure Source
slug: Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource
page-type: webdriver-command
browser-compat: webdriver.classic.CreateVirtualPressureSource
sidebar: webdriver
---

The _Create Virtual Pressure Source_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API creates a virtual pressure source of a given type that overrides the platform pressure source of the same type. This lets tests exercise the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) with predetermined pressure states instead of relying on real hardware.

## Syntax

| Method                                                | URI template                           |
| ----------------------------------------------------- | -------------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/pressuresource` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is an object:

- `type`
  - : A string identifying the pressure source type to create. Currently the only widely supported value is `"cpu"`.
- `supported` {{optional_inline}}
  - : A boolean indicating whether the virtual pressure source is able to provide samples. Defaults to `true`.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `type` is not a supported pressure source type, or a virtual pressure source of that type already exists.

## Examples

### Creating a virtual pressure source

With a WebDriver server running on `localhost:4444`, assume an active session has been created. To create a virtual `"cpu"` pressure source, send its type as the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"type": "cpu"}' \
  http://localhost:4444/session/ID/pressuresource
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

- [Update Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource) command
- [Delete Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource) command
- [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API)
