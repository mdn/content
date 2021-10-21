---
title: EyeDropper
slug: Web/API/EyeDropper
tags:
  - API
  - DOM
  - EyeDropper
  - Interface
  - Reference
---
{{APIRef("EyeDropper API")}}

The **`EyeDropper`** interface represents an instance of an eyedropper tool that can be opened and used by the user to select colors from the screen.

## Examples

### Opening the eyedropper tool and sampling a color

This example shows how to open an eyedropper tool and wait for the user to either select a pixel from the screen, or press `ESC` to cancel the eyedropper mode.

#### HTML

```html
<button id="start-button">Open the eyedropper</button>
<span id="result"></span>
```

#### JavaScript

```js
document.getElementById('start-button').addEventListener('click', () => {
  const resultElement = document.getElementById('result');

  if (!window.EyeDropper) {
    resultElement.textContent = 'Your browser does not support the EyeDropper API';
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper.open().then(result => {
    resultElement.textContent = result.sRGBHex;
    resultElement.style.backgroundColor = result.sRGBHex;
  }).catch(e => {
    resultElement.textContent = e;
  });
});
```

#### Result

{{EmbedLiveSample("Opening the eyedropper tool and sampling a color")}}

### Aborting the eyedropper mode

This example shows that the eyedropper mode can also be aborted before the user has selected a color or pressed `ESC`.

#### HTML

```html
<button id="start-button">Open the eyedropper</button>
<span id="result"></span>
```

#### JavaScript

```js
document.getElementById('start-button').addEventListener('click', () => {
  const resultElement = document.getElementById('result');

  if (!window.EyeDropper) {
    resultElement.textContent = 'Your browser does not support the EyeDropper API';
    return;
  }

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper.open({ signal: abortController.signal }).then(result => {
    resultElement.textContent = result.sRGBHex;
    resultElement.style.backgroundColor = result.sRGBHex;
  }).catch(e => {
    resultElement.textContent = e;
  });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
});
```

#### Result

{{EmbedLiveSample("Aborting the eyedropper mode")}}

## Constructor

- {{DOMxRef("EyeDropper.EyeDropper", "EyeDropper()")}}
  - : Returns a newly constructed `EyeDropper`.

## Methods

_The `EyeDropper` interface doesn't inherit any method_.

- {{DOMxRef("EyeDropper.prototype.open()")}}
  - : Returns a promise that resolves to a result object with one {{DOMxRef("DOMString")}} property containing the selected color.
