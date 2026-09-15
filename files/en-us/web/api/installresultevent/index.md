---
title: InstallResultEvent
slug: Web/API/InstallResultEvent
page-type: web-api-interface
browser-compat: api.InstallResultEvent
---

{{APIRef("HTML DOM")}}

The **`InstallResultEvent`** interface represents events that fire when a browser's attempt to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) — initiated by the user pressing an {{htmlelement("install")}} button — has finished.

{{InheritanceDiagram}}

## Constructor

- {{domxref("InstallResultEvent.InstallResultEvent", "InstallResultEvent()")}}
  - : Creates a new `InstallResultEvent` object instance.

## Instance properties

_This interface also inherits the properties of its parent, {{domxref("Event")}}._

- {{domxref("InstallResultEvent.result")}} {{ReadOnlyInline}}
  - : An enumerated value representing the status of the PWA installation.

## Examples

### Using `installresult` to report installation status

If a PWA landing page has an {{htmlelement("install")}} element included on it:

```html
<install></install>
```

We can track whether the installation was successful when the install button is pressed using an {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event listener, querying the event object's {{domxref("InstallResultEvent.result", "result")}} property:

```js
const installElem = document.querySelector("install");

installElem.addEventListener("installresult", (e) => {
  console.log(`Install result: ${e.result}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- {{htmlelement("install")}}
- {{domxref("HTMLInstallElement")}}
- {{domxref("HTMLInstallElement.installresult_event", "HTMLInstallElement.installresult")}} event
