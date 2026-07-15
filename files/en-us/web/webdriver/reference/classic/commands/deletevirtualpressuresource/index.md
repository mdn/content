---
title: Delete Virtual Pressure Source
short-title: Delete Virtual Pressure Source
slug: Web/WebDriver/Reference/Classic/Commands/DeleteVirtualPressureSource
page-type: webdriver-command
browser-compat: webdriver.classic.DeleteVirtualPressureSource
sidebar: webdriver
---

The _Delete Virtual Pressure Source_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API removes a virtual pressure source previously created with the [Create Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualPressureSource) command. After the virtual pressure source is deleted, the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) once again uses the real platform pressure source of that type, if one is available.

## Syntax

| Method                                                    | URI template                                  |
| --------------------------------------------------------- | --------------------------------------------- |
| [`DELETE`](/en-US/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/pressuresource/{type}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `type`
  - : The pressure source type to delete, for example `"cpu"`.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `type` is not a supported pressure source type.

## Examples

### Deleting a virtual pressure source

With a WebDriver server running on `localhost:4444`, assume a virtual `"cpu"` pressure source has been created for the active session. To remove it, send a `DELETE` request with the pressure source type appended to the endpoint, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/pressuresource/cpu
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
- [Update Virtual Pressure Source](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualPressureSource) command
- [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API)
