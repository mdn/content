---
title: Proximity Events
slug: Web/API/Proximity_Events
page-type: web-api-overview
tags:
  - API
  - Experimental
  - Proximity Events
  - Reference
  - Deprecated
---
{{DefaultAPISidebar("Proximity Events")}}{{Deprecated_Header}}

> **Warning:** The Proximity Events APIs are not supported by any current major browser, and should not be used. This page is provided for historical interest.

The **proximity events** are a handy way to know when a user is close to a device. These events make it possible to react to such a change, for example by shutting down the screen of a smartphone when the user is having a phone call with the device close to their ear.

There are two proximity events (see links for documentation.):

- {{domxref("UserProximityEvent")}}, handled by `window.onuserproximity`
- {{domxref("DeviceProximityEvent")}}, handled by `window.ondeviceproximity`

The difference between them is that {{domxref("UserProximityEvent")}} simply notifies `true` when the user is considered "close", while {{domxref("DeviceProximityEvent")}} provides an estimate of the actual distance to a nearby object.

> **Note:** Obviously, the API requires the device to have a proximity sensor, which are mostly available only on mobile devices. Devices without such a sensor may support those events but will never fire them.

## Specifications

This feature is no longer on track to become a standard. Its historical specification is still [available](https://w3c.github.io/proximity/).
