---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
page-type: css-media-feature
browser-compat: css.at-rules.media.aspect-ratio
---

{{CSSRef}}

The **`aspect-ratio`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test the {{glossary("aspect ratio")}} of the {{glossary("viewport")}}.

## Syntax

The `aspect-ratio` feature is specified as a {{cssxref("&lt;ratio&gt;")}} value representing the width-to-height aspect ratio of the viewport. It is a range feature, meaning you can also use the prefixed **`min-aspect-ratio`** and **`max-aspect-ratio`** variants to query minimum and maximum values, respectively.

## Examples

In the example below, a {{HTMLElement("div")}} element is contained in an {{HTMLElement("iframe")}}. The iframe creates its own viewport. Resize the `<iframe>` to see `aspect-ratio` in action.

Note that, when none of the media query conditions are true, the background will turn white because none of the below rules will be applied to the `<div>` inside the `<iframe>`. See if you can find which width and height values trigger this!

### HTML

```html
<iframe id="outer">
  <div id="inner">
    Watch this element as you resize iframe viewport's width and height.
  </div>
</iframe>
```

### CSS

```css
/* Minimum allowed aspect ratio */
/* Select aspect ratios 8/5 = 1.6 and above */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #99f; /* blue */
  }
}

/* Maximum allowed aspect ratio */
/* Select aspect ratios 3/2 = 1.5 and below */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9f9; /* green */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override */
@media (aspect-ratio: 1/1) {
  div {
    background: #f99; /* red */
  }
}
```

### Result

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />
<label id="ratio">aspect-ratio: 165/165 = 1</label>

<iframe
  id="outer"
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #99f; } } @media (max-aspect-ratio: 3/2) { div { background: #9f9; } } @media (aspect-ratio: 1/1) { div { background: #f99; } }</style><div id='inner'> Watch this element as you resize iframe viewport's width and height.</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
  border: 1px dashed black;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

const updateRatio = () => {
  ratio.textContent = `aspect-ratio: ${w.value}/${h.value} = ${(w.value / h.value).toFixed(2)}`;
};

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `width: ${w.value}`;
  updateRatio();
};

h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `height: ${h.value}`;
  updateRatio();
};
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

Note the `min-aspect-ratio: 8/5` sets the _lower_ bound to 1.6, so this media query selects elements with aspect ratios 1.6 and above. The `max-aspect-ratio: 3/2` sets the _upper_ bound, so this media query selects elements with aspect ratios 1.5 and below. The `aspect-ratio: 1/1` overrides the max aspect ratio rule because it has been declared after and selects elements with aspect ratios exactly `1`.

From the initial state, as you reduce height, the aspect ratio starts increasing from one. So the div's background color goes from red(1) < green(1.5) < white < blue(1.6).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Understanding `aspect-ratio`](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
