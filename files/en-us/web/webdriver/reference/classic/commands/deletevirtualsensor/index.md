---
title: Delete Virtual Sensor
short-title: Delete Virtual Sensor
slug: Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor
page-type: webdriver-command
browser-compat: webdriver.classic.DeleteVirtualSensor
sidebar: webdriver
---

The _Delete Virtual Sensor_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API removes a virtual sensor previously created with the [Create Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) command. After the virtual sensor is deleted, the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) once again use the real platform sensor of that type, if one is available.

## Syntax

| Method                                                    | URI template                          |
| --------------------------------------------------------- | ------------------------------------- |
| [`DELETE`](/en-US/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/sensor/{type}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `type`
  - : The virtual sensor type to delete, for example `"ambient-light"`.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : No virtual sensor of the given `type` exists.

## Examples

### Deleting a virtual sensor

With a WebDriver server running on `localhost:4444`, assume a virtual `"ambient-light"` sensor has been created for the active session. To remove it, send a `DELETE` request with the sensor type appended to the endpoint, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -X DELETE http://localhost:4444/session/ID/sensor/ambient-light
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

- [Create Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) command
- [Update Virtual Sensor Reading](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) command
- [Get Virtual Sensor Information](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation) command
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs)
