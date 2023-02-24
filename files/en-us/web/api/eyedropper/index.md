---
title: EyeDropper
slug: Web/API/EyeDropper
page-type: web-api-interface
status:
  - experimental
browser-compat: api.EyeDropper
---

{{securecontext_header}}{{APIRef("EyeDropper API")}}{{SeeCompatTable}}

The **`EyeDropper`** interface represents an instance of an eyedropper tool that can be opened and used by the user to select colors from the screen.

## Constructor

- {{DOMxRef("EyeDropper.EyeDropper", "EyeDropper()")}} {{Experimental_Inline}}
  - : Returns a new `EyeDropper` instance.

## Instance methods

_The `EyeDropper` interface doesn't inherit any methods_.

- {{DOMxRef("EyeDropper.open()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves to an object that gives access to the selected color.

## Examples

### Opening the eyedropper tool and sampling a color

This example shows how to open an eyedropper tool and wait for the user to either select a pixel from the screen, or press <kbd>Escape</kbd> to cancel the eyedropper mode.

#### HTML

```html
<button id="start-button">Open the eyedropper</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});
```

#### Result

{{EmbedLiveSample("Opening the eyedropper tool and sampling a color")}}

### Aborting the eyedropper mode

This example shows that the eyedropper mode can also be aborted before the user has selected a color or pressed <kbd>Escape</kbd>.

#### HTML

```html
<button id="start-button">Open the eyedropper</button> <span id="result"></span>
```

#### JavaScript

```js
document.getElementById("start-button").addEventListener("click", () => {
  const resultElement = document.getElementById("result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      resultElement.textContent = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});
```

#### Result

{{EmbedLiveSample("Aborting the eyedropper mode")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
