---
title: Get Virtual Sensor Information
short-title: Get Virtual Sensor Information
slug: Web/WebDriver/Reference/Classic/Commands/GetVirtualSensorInformation
page-type: webdriver-command
browser-compat: webdriver.classic.GetVirtualSensorInformation
sidebar: webdriver
---

The _Get Virtual Sensor Information_ [command](/en-US/docs/Web/WebDriver/Reference/Classic/Commands) of the [WebDriver](/en-US/docs/Web/WebDriver) API returns information about a virtual sensor previously created with the [Create Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) command. It reports the sampling frequency currently requested by the page, which lets a test confirm that the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) are consuming readings at the expected rate.

## Syntax

| Method                                              | URI template                          |
| --------------------------------------------------- | ------------------------------------- |
| [`GET`](/en-US/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/sensor/{type}` |

### URL parameters

- `session id`
  - : Identifier of the session.
- `type`
  - : The virtual sensor type to query, for example `"ambient-light"`.

### Return value

An object with the following field:

- `requestedSamplingFrequency`
  - : A number giving the sampling frequency, in hertz, currently requested for the virtual sensor. This value is bounded by the minimum and maximum sampling frequencies that were set when the sensor was created.

### Errors

- [`invalid session id`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Session does not exist.
- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : No virtual sensor of the given `type` exists.

## Examples

### Getting virtual sensor information

With a WebDriver server running on `localhost:4444`, assume a virtual `"ambient-light"` sensor has been created for the active session. To read its information, append the sensor type to the endpoint, replacing `ID` with the `sessionId` from the [New Session](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) response:

```bash
curl -i http://localhost:4444/session/ID/sensor/ambient-light
```

The server responds with the currently requested sampling frequency:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"requestedSamplingFrequency":60}}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Create Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/CreateVirtualSensor) command
- [Update Virtual Sensor Reading](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/UpdateVirtualSensorReading) command
- [Delete Virtual Sensor](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/DeleteVirtualSensor) command
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs)
