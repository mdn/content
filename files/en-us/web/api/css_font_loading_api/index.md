---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
page-type: web-api-overview
browser-compat: api.FontFace
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

The **CSS Font Loading API** provides events and interfaces for dynamically loading font resources.

## Concepts and usage

CSS stylesheets allow authors to use custom fonts; specifying fonts to download using the [`@font-face`](/en-US/docs/Web/CSS/@font-face) rule, and applying them to elements with the [`font-family`](/en-US/docs/Web/CSS/font-family) property.
The point at which a font is downloaded is controlled by the user agent.
Most agents only fetch and load fonts when they are first needed, which can result in a perceptible delay.

The CSS Font Loading API overcomes this problem by letting authors control and track when a font face is fetched and loaded, and when it is added to the font face set owned by the document or worker.
Adding a font face to the document or worker font face set allows the user agent to fetch and load the associated font resource automatically if needed.
A font face can be loaded either before or after it is added to a font face set, but it _must_ be added to the set before it can be used for drawing.

Font faces are defined in {{domxref('FontFace')}} objects, which specify a binary or URL font source and other properties of font in much the same way as the CSS [`@font-face`](/en-US/docs/Web/CSS/@font-face) rule.
`FontFace` objects are added to the document or worker {{domxref('FontFaceSet')}} using {{domxref("Document.fonts")}} and {{domxref("WorkerGlobalScope.fonts")}}, respectively.
Authors can trigger download of fonts using either `FontFace` or `FontFaceSet`, and monitor loading completion.
`FontFaceSet` can additionally be used to determine when all fonts required by a page have loaded and the document layout is complete.

The {{domxref('FontFace.status')}} property indicates the font face loading status: `unloaded`, `loading`, `loaded` or `failed`.
This status is initially `unloaded`.
It is set to `loading` when the file is being downloaded or the font data is being processed, and to `failed` if the font definition is invalid or the font data cannot be loaded.
The status is set to `loaded` when the font face data has been successfully fetched (if needed) and loaded.

### Defining a font face

Font faces are created using the [`FontFace` constructor](/en-US/docs/Web/API/FontFace/FontFace), which takes as parameters: the font family, the font source, and optional descriptors.
The format and grammar of these arguments is the same as the equivalent [`@font-face`](/en-US/docs/Web/CSS/@font-face) definition.

The font source can either be binary data in an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or a font resource at a URL.
A typical font face definition using a URL source might be as shown below.
Note that the `url()` function is required for URL font sources.

```js
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> As with `@font-face`, some descriptors represent the expected data in the font data and are used for font matching, while others actually set/define properties of the generated font face.
> For example, setting the `style` to "italic" indicates that the file contains italic fonts; it is up to the author to specify a file for which this is true.

Font faces with a _binary source_ are automatically loaded if the font definition is valid and the font data can be loaded — {{domxref('FontFace.status')}} is set to `loaded` on success and `failed` otherwise.
Font faces with a URL source are validated but not automatically loaded — {{domxref('FontFace.status')}} is set `unloaded` if the font face definition is valid and `failed` otherwise.

### Adding a font to a document or worker

Font faces are usually added to the document or worker {{domxref('FontFaceSet')}} to allow the user agent to automatically load the font when needed, and _must_ be added in order for the font to be used for rendering text.

The code below shows a font face being added to the document.

```js
// Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);
```

### Loading a font

A font face can be loaded manually by calling {{domxref('FontFace.load()')}}, or by calling {{domxref('FontFaceSet.load()')}} if the font face has been added to the `FontFaceSet`.
Note that attempting to load an already-loaded font has no effect.

The code below shows how to define a font face, add it to the document fonts, and then initiate a font load.

```js
// Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)");

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);

// Load the font
font.load();

// Wait until the fonts are all loaded
document.fonts.ready.then(() => {
  // Use the font to render text (for example, in a canvas)
});
```

Note that the `font.load()` returns a promise, so we could have handled the completion of font loading by chaining `then` afterwards.
Using [`document.fonts.ready`](/en-US/docs/Web/API/FontFaceSet/ready) can be better in some circumstances, as it is only called when all fonts in the document have been resolved and layout is complete.

## Interfaces

- {{domxref('FontFace')}}
  - : Represents a single usable font face.
- {{domxref('FontFaceSet')}}
  - : An interface loading font faces and checking their download statuses.
- {{domxref('FontFaceSetLoadEvent')}}
  - : Fired whenever a {{domxref("FontFaceSet")}} loads.

## Examples

### Basic font loading

This is a very simple example that shows a font being loaded from Google Fonts and used to draw text to a canvas.
The example also logs the `status` immediately after creation and after loading.

#### HTML

This code defines a canvas for drawing to and a textarea for logging.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

First we get the element to which we will log, and the canvas that will be used to render text in the downloaded font.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Next we define a `FontFace` that has a URL source that is a Google Font and add it to `document.fonts`.
We then log the font status, which should be `unloaded`.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Then we call the {{domxref('FontFace.load()')}} method to load the font face, and wait on the returned promise.
Once the promise resolves we log the loaded status (which should be `loaded`) and draw text in the loaded font to the canvas.

```js
bitterFontFace.load().then(
  () => {
    log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: loaded

    const ctx = canvas.getContext("2d");
    ctx.font = '36px "FontFamily Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

Note that we could also have waited on the promise returned by the {{domxref('FontFace.loaded')}} property, or on {{domxref('FontFaceSet.ready')}}.

#### Result

The result is shown below.
It should show the name of the font drawn on the canvas in the downloaded font, and a log showing the load status before and after loading.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Font loading with events

This example is similar to the previous one, except that it uses {{domxref('FontFaceSet.load()')}} to load the font.
It also demonstrates how to listen for font loading events.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

The code below defines a canvas context for drawing text, defines a font face, and adds it to the document font face set.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  "url(https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

Next we use `load()` on the font face set to load the font, specifying which of the fonts to load.
The method returns a {{jsxref("Promise")}}.
If the promise is resolved we use the font to draw some text.
If it is rejected the error is logged.

```js
document.fonts.load("36px FontFamily Oxygen").then(
  (fonts) => {
    log.textContent += `Bitter font: ${fonts}\n`; // > Oxygen font: loaded
    log.textContent += `Bitter font: ${oxygenFontFace.status}\n`; // > Oxygen font: loaded
    ctx.font = '36px "FontFamily Oxygen"';
    ctx.fillText("Oxygen font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

Instead of waiting on a promise we might instead use events to track the font loading operation.
The code below listens for the `loading` and `loadingerror` events and logs the number of font faces for each case.
In the `loadingdone` event listener we additionally iterate through the font faces and log the family names.

```js
document.fonts.addEventListener("loading", (event) => {
  log.textContent += `loading_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingerror", (event) => {
  log.textContent += `loadingerror_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingdone", (event) => {
  log.textContent += `loadingdone_event: ${event.fontfaces.length}\n`;
  event.fontfaces.forEach((value) => {
    log.textContent += `  fontface: ${value.family}\n`;
  });
});
```

The last bit of code demonstrates how you can monitor the completion of font loading using the promise returned by {{domxref('FontFaceSet.ready')}}.
Unlike the other mechanisms this returns when all fonts defined in the document have been downloaded and layout is complete.

When the promise resolves we iterate the values in the document's font faces.

```js
document.fonts.ready.then(function () {
  log.textContent += `\nFontFaces in document: ${document.fonts.size}.\n`;

  for (const fontFace of document.fonts.values()) {
    log.textContent += "FontFace:\n";
    for (const property in fontFace) {
      log.textContent += `  ${property}: ${fontFace[property]}\n`;
    }
  }
});
```

#### Result

The output below shows the text drawn in "Oxygen" font.
This also shows logging from the events and when the promise returned by `document.fonts.ready` resolves.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
