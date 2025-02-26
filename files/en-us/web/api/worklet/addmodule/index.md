---
title: "Worklet: addModule() method"
short-title: addModule()
slug: Web/API/Worklet/addModule
page-type: web-api-instance-method
browser-compat: api.Worklet.addModule
---

{{APIRef("Worklets")}}{{SecureContext_Header}}

The **`addModule()`** method of the
{{domxref("Worklet")}} interface loads the module in the given JavaScript file and
adds it to the current `Worklet`.

## Syntax

```js-nolint
addModule(moduleURL)
addModule(moduleURL, options)
```

### Parameters

- `moduleURL`
  - : A {{jsxref("String")}} containing the URL of a JavaScript file with the module to
    add.
- `options` {{optional_inline}}

  - : An object with any of the following options:

    - `credentials`
      - : A {{domxref("Request.credentials")}} value that
        indicates whether to send credentials (e.g. cookies and HTTP authentication)
        when loading the module. Can be one of `"omit"`,
        `"same-origin"`, or `"include"`. Defaults to
        `"same-origin"`. See also {{domxref("Request.credentials")}}.

### Return value

A {{jsxref("Promise")}} that resolves once the module from the given URL has been
added. The promise doesn't return any value.

### Exceptions

If `addModule()` fails, it rejects the promise, delivering one of the
following errors to the rejection handler.

- `AbortError` {{domxref("DOMException")}}
  - : The specified script is invalid or could not be loaded.
- `SyntaxError` {{domxref("DOMException")}}
  - : The specified `moduleURL` is invalid.

## Examples

### AudioWorklet example

```js
const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
audioWorklet.addModule("modules/bypassFilter.js", {
  credentials: "omit",
});
```

### PaintWorklet example

```js
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

Once the script has been added to the [paint worklet](/en-US/docs/Web/API/CSS/paintWorklet_static), the CSS {{cssxref("image/paint", "paint()")}} function
can be used to include the image created by the worklet:

```css
@supports (background-image: paint(id)) {
  h1 {
    background-image: paint(hollowHighlights, filled, 3px);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
