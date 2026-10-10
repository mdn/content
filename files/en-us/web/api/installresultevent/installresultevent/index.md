---
title: "InstallResultEvent: InstallResultEvent() constructor"
short-title: InstallResultEvent()
slug: Web/API/InstallResultEvent/InstallResultEvent
page-type: web-api-constructor
browser-compat: api.InstallResultEvent.InstallResultEvent
---

{{APIRef("HTML DOM")}}

The **`InstallResultEvent()`** constructor creates a new {{domxref("InstallResultEvent")}} object instance.

> [!NOTE]
> A web developer doesn't typically need to call this constructor; the browser creates these objects itself when firing {{domxref("HTMLInstallElement.installresult_event", "installresult")}} events.

## Syntax

```js-nolint
new InstallResultEvent(type, init)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `installresult`.
- `init` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `result` {{optional_inline}}
      - : An enumerated value representing the status of the [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) installation.

### Return value

A new {{domxref("InstallResultEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}}
- {{domxref("HTMLInstallElement")}}
- {{domxref("HTMLInstallElement.installresult_event", "HTMLInstallElement.installresult")}} event
