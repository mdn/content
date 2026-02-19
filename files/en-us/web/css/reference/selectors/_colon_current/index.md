---
title: :current
slug: Web/CSS/Reference/Selectors/:current
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.current
sidebar: cssref
---

{{SeeCompatTable}}

The **`:current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selector represents an element or the ancestor of an element that is currently being displayed or highlighted.

## Syntax

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## Description

The `:current` pseudo-class is used to represent the "currently displayed" element out of a series of elements.

This can mean "current" in terms of time: `:current` can be used to target the currently displayed captions or subtitles (represented using [WebVTT](/en-US/docs/Web/API/WebVTT_API)) that are associated with a playing video.

It can also refer to the currently highlighted element in a series. For example, `:current` can be combined with the `::search-text` [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) to provide specific styles to the currently-focused search result from the browser's "Find in page" text search feature.

For example:

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
}
```

## Examples

### Custom styles for text search results

This example shows how to use `::search-text` and `:current` to create custom styles for your browser's "Find in page" search results.

#### HTML

The HTML consists of a basic paragraph of text. We won't show the HTML source, both for brevity, and so that it is easier to navigate the search results in the rendered example.

```html hidden live-sample___custom-search-results
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus est
  eget eros congue pellentesque. Etiam a augue accumsan, scelerisque nisl sit
  amet, lobortis nulla. Aliquam condimentum eu orci eu elementum. Donec
  porttitor quam et posuere commodo. Mauris rhoncus diam a scelerisque molestie.
  Integer sollicitudin risus dui, ut sagittis lorem laoreet eget. Duis eget
  pretium enim. Morbi tristique, diam sit amet gravida finibus, metus ex
  tincidunt nibh, ac volutpat urna purus et arcu. Donec risus risus, semper vel
  purus sit amet, gravida vestibulum est. Sed et tristique urna. Nam vel mi eget
  nisi consectetur elementum. Aenean faucibus aliquam cursus. Morbi posuere
  tincidunt velit, et sagittis quam sagittis in. Nam eget ante ultrices, auctor
  dui vel, euismod lacus. Vivamus tincidunt, sem ac sodales aliquet, tortor
  tortor consequat diam, nec tempor mi dui vel eros. Aliquam ac erat et metus
  egestas scelerisque.
</p>
```

#### CSS

In our CSS, we start by styling the `::search-text` pseudo-element. We give it custom {{cssxref("background-color")}}, {{cssxref("color")}}, and {{cssxref("text-shadow")}} styles.

```css hidden live-sample___custom-search-results
html {
  font-family: "Helvetica", "Arial";
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
}

@layer no-support {
  body::before {
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em 0;
  }
  @supports not selector(::search-text) {
    body::before {
      content: "Your browser doesn't support the ::search-text pseudo-element.";
    }
  }
  @supports not selector(:current) {
    body::before {
      content: "Your browser doesn't support the :current pseudo-class.";
    }
  }
}
```

```css live-sample___custom-search-results
::search-text {
  background-color: purple;
  color: white;
  text-shadow: 1px 1px 1px black;
}
```

Finally, we style the currently-focused search result via `::search-text:current`, providing it with a different `background-color` and some {{cssxref("text-decoration")}} styles so that it is distinguishable from the rest of the results.

```css live-sample___custom-search-results
::search-text:current {
  background-color: crimson;
  text-decoration-line: underline;
  text-decoration-color: yellow;
  text-decoration-thickness: 3px;
}
```

#### Result

The example renders as follows:

{{EmbedLiveSample("live-sample___custom-search-results", "100%", 300)}}

Try using the browser's find in page interface to find a word that appears multiple times in the example text, such as "aliquam", "amet", or "tortor". Move between the previous and next results to check out the `:current` styling.

### Styling currently-shown WebVTT subtitles

#### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

#### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="subtitles.vtt"
    default />
</video>
```

#### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
This is the first caption

2
00:00:06.000 --> 00:00:09.000
This is the second caption

3
00:00:11.000 --> 00:00:19.000
This is the third caption
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
