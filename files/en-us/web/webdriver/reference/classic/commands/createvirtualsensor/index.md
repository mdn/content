---
title: Create Virtual Sensor
short-title: Create Virtual Sensor
slug: Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor
page-type: webdriver-command
browser-compat: webdriver.classic.CreateVirtualSensor
sidebar: webdriver
---

The _Create Virtual Sensor_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API creates a virtual sensor of a given type that overrides the platform sensor of the same type. This lets tests exercise the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) with predetermined readings instead of relying on real hardware. While the virtual sensor exists, it replaces any real sensor of the same type for the [top-level browsing context](/en-US/docs/Glossary/Browsing_context).

## Syntax

| Method                                                | URI template                   |
| ----------------------------------------------------- | ------------------------------ |
| [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST) | `/session/{session id}/sensor` |

### URL parameters

- `session id`
  - : Identifier of the session.

### Payload

The input is an object:

- `type`
  - : A string identifying the virtual sensor type to create, for example `"ambient-light"`, `"accelerometer"`, or `"gyroscope"`. Only one virtual sensor of a given type can exist at a time in the top-level browsing context.
- `connected` {{optional_inline}}
  - : A boolean indicating whether the sensor is able to provide readings. Defaults to `true`.
- `maxSamplingFrequency` {{optional_inline}}
  - : A number specifying the upper bound, in hertz, of the sampling frequency the virtual sensor supports.
- `minSamplingFrequency` {{optional_inline}}
  - : A number specifying the lower bound, in hertz, of the sampling frequency the virtual sensor supports.

### Return value

`null` if successful.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `type` is not a string or is not a supported virtual sensor type, a virtual sensor of that type already exists, or the supplied frequency values are invalid (for example, not a number or `minSamplingFrequency` is greater than `maxSamplingFrequency`).

## Examples

### Creating a virtual sensor

With a WebDriver server running on `localhost:4444`, assume an active session has been created. To create a virtual [`AmbientLightSensor`](/en-US/docs/Web/API/AmbientLightSensor), send its type as the request payload, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i -H "Content-Type: application/json" \
  -d '{"type": "ambient-light"}' \
  http://localhost:4444/session/ID/sensor
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

- [Update Virtual Sensor Reading](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) command
- [Get Virtual Sensor Information](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation) command
- [Delete Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor) command
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs)
