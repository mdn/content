---
title: Presentation.receiver
slug: Web/API/Presentation/receiver
page-type: web-api-instance-property
tags:
  - API
  - Presentation
  - Presentation API
  - Property
  - Read-only
  - Reference
  - receiver
  - Experimental
browser-compat: api.Presentation.receiver
---
{{APIRef("Presentation")}}{{SeeCompatTable}}

The **read-only** {{domxref("Presentation")}} attribute
`receiver`, which is only available in browser contexts which are
**receiving** a presentation, returns the
{{domxref("PresentationReceiver")}} object which can be used to access and communicate
with the browser context which controls the presentation. This property is always
`null` when accessed from outside a browser context which is receiving a
presentation.

## Value

If the code is running in a context which is receiving a presentation, the returned
value is a {{domxref("PresentationReceiver")}} which can then be used to communicate
with the context which is the source of the presentation.

If the current context is not receiving a presentation, `receiver` is
`null`.

## Examples

### Determining whether or not the context is receiving a presentation

You can easily determine whether or not the context is the receiver for a presentation
by checking the value of `navigator.receiver`. If it's a non-null value, then
the context is indeed receiving a presentation. If it's `null`, there's no
incoming presentation.

```js
footer.textContent = navigator.receiver ? "Receiving presentation" : "(idle)";
```

### Accessing the connection list

This example uses `receiver` to access the list of incoming connections and
to build and display a list of those connections' ID strings.

```js
let listElem = document.getElementById("connectionview");

navigator.presentation.receiver.connectionList.then((connections) => {
  connections.forEach((aConnection) => {
    listElem.innerHTML += `<li>${aConnection.id}</li>`;
  });
});
```

After getting access to the output list element in the variable
`connectionView`, {{domxref("navigator.receiver")}} is used to get a
reference to the {{domxref("PresentationReceiver")}} object for this context, and its
{{domxref("PresentationReceiver.connectionList", "connectionList")}} is used to get a
{{jsxref("Promise")}} which will be called when the list is available.

The promise handler receives as its input parameter an array of the incoming
connections. We iterate over these using {{jsxref("Array.forEach", "forEach()")}},
appending a new item to the `connectionView` list element for each
connection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Presentation API
- {{domxref("Presentation")}}
- {{domxref("PresentationReceiver")}}
