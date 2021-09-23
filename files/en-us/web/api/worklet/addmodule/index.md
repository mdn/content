---
title: Worklet.addModule()
slug: Web/API/Worklet/addModule
tags:
  - API
  - Background
  - Experimental
  - Houdini
  - Method
  - Multiprocessor
  - Processes
  - Reference
  - Tasks
  - Worklets
  - addModule
browser-compat: api.Worklet.addModule
---
{{APIRef("Worklets")}}{{SeeCompatTable}}

The **`addModule()`** method of the
{{domxref("Worklet")}} interface loads the module in the given JavaScript file and
adds it to the current `Worklet`.

## Syntax

```js
addPromise = worklet.addModule(moduleURL);
addPromise = worklet.addModule(moduleURL, options);
```

### Parameters

- `moduleURL`
  - : A {{jsxref("String")}} containing the URL of a JavaScript file with the module to
    add.
- `options` {{optional_inline}}

  - : An object with any of the following options:

    - `credentials`: A {{domxref("RequestCredentials")}} value that
      indicates whether to send credentials (e.g. cookies and HTTP authentification)
      when loading the module. Can be one of `"omit"`,
      `"same-origin"`, or `"include"`. Defaults to
      `"same-origin"`. See also {{domxref("Request.credentials")}}.

### Return value

A {{jsxref("Promise")}} that resolves once the module from the given URL has been
added. The promise doesn't return any value.

### Exceptions

If `addModule()` fails, it rejects the promise, delivering one of the
following errors to the rejection handler.

- `AbortError`
  - : The specified script is invalid or could not be loaded.
- `SyntaxError`
  - : The specified `moduleURL` is invalid.

## Examples

### AudioWorklet example

```js
const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
await audioWorklet.addModule('modules/bypassFilter.js', {
  credentials: 'omit',
});
```

### PaintWorklet example

```js
CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js');
```

Once a {{domxref('paintWorklet')}} is included, the CSS {{cssxref('paint()')}} function
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
