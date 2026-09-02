---
title: "HTMLInstallElement: installresult event"
short-title: installresult
slug: Web/API/HTMLInstallElement/installresult_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLInstallElement.installresult_event
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`installresult`** event of the {{domxref("HTMLInstallElement")}} interface is fired when a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) installation attempt completes; it can be used to report whether the installation attempt was successful.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("installresult", (event) => { })

oninstallresult = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using `installresult` to report installation status

If a PWA landing page has an `<install>` element included on it:

```html
<install></install>
```

We can track whether the installation was successful when the install button is pressed using an {{domxref("HTMLInstallElement.installresult_event", "installresult")}} event listener, querying the event object's {{domxref("InstallResultEvent.result", "result")}} property:

```js
installElem.addEventListener("installresult", (e) => {
  console.log(`Install result: ${e.result}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("install")}} element
