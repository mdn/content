---
title: "BackgroundFetchUpdateUIEvent: updateUI() method"
short-title: updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchUpdateUIEvent.updateUI
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`updateUI()`** method of the {{domxref("BackgroundFetchUpdateUIEvent")}} interface updates the title and icon in the user interface to show the status of a background fetch.

This method may only be run once, to notify the user on a failed or a successful fetch.

## Syntax

```js-nolint
updateUI(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing any of the following:

    - `icons` {{optional_inline}}

      - : A list of one or more image resources, containing icons for use in the user interface. An image resource is an object containing:

        - `src`
          - : A string which is a URL of an image.
        - `sizes` {{optional_inline}}
          - : A string which is equivalent to a {{htmlelement("link")}} `sizes` attribute.
        - `type` {{optional_inline}}
          - : A string containing an image MIME type.
        - `label` {{optional_inline}}
          - : A string providing a name for the associated image.

    - `title` {{optional_inline}}
      - : A string containing the new title of the user interface.

### Return value

A {{jsxref("Promise")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if any of the following are true:
    - The {{domxref("Event.isTrusted","isTrusted")}} property is `false`.
    - The {{domxref("BackgroundFetchUpdateUIEvent")}} UI updated flag is already set, indicating that the `updateUI()` method has already been called.
    - The {{domxref("BackgroundFetchUpdateUIEvent")}} is not active.

## Examples

The following example demonstrates updating the UI with a title and image icon on a successful fetch.

```js
addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "Episode 5 ready to listen!",
    icon: {
      src: "path/to/success.ico",
      sizes: "16x16 32x32 64x64",
    },
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
