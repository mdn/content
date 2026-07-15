---
title: Update Virtual Sensor Reading
short-title: Update Virtual Sensor Reading
slug: Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading
page-type: webdriver-command
browser-compat: webdriver.classic.UpdateVirtualSensorReading
sidebar: webdriver
---

The _Update Virtual Sensor Reading_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API sets a new reading for a virtual sensor previously created with the [Create Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) command. The new value is delivered to the page through the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs), letting tests drive sensor-dependent behavior with predetermined data.

## Syntax

| Method                                                | URI template                          |
| ----------------------------------------------------- | ------------------------------------- |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/sensor/{type}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `type`
  - : The virtual sensor type to update, for example `"ambient-light"`.

### Payload

The input is an object:

- `reading`
  - : An object representing the new sensor reading. The properties it must contain depend on the sensor `type`; for example, an `"ambient-light"` sensor expects an `illuminance` value.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `reading` is not an object, or it is not a valid reading for the given sensor `type`.

## Examples

### Updating a virtual sensor reading

With a WebDriver server running on `localhost:4444`, assume a virtual `"ambient-light"` sensor has been created for the active session. To set a new reading, send the `reading` object as the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"reading": {"illuminance": 42}}' \
  http://localhost:4444/session/ID/sensor/ambient-light
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
- [Get Virtual Sensor Information](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation) command
- [Delete Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor) command
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs)
