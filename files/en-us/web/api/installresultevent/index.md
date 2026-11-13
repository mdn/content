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
  - : An enumerated value representing the result of the PWA installation.

## Examples

### Querying installation

Given an {{htmlelement("install")}} element, we can check its installation result by adding an {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event listener. Inside the event hander, we use a [`switch`](/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement to query the {{domxref("InstallResultEvent.result", "result")}} property and log a human-readable description.

```js
const installElem = document.querySelector("install");

installElem.addEventListener("installresult", (e) => {
  switch (e.result) {
    case "success":
      console.log("Installation was successful.");
      break;
    case "aborted":
      console.log("Installation was aborted by the user or the user agent.");
      break;
    case "invalid_data":
      console.log(
        "Installation failed because of a data issue, such as a badly-formed manifest or a missing manifest URL or manifestId."
      );
      break;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}}
- {{domxref("HTMLInstallElement")}}
- {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event
