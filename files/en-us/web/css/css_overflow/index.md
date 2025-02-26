---
title: CSS overflow
slug: Web/CSS/CSS_overflow
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-overflow/
  - https://drafts.csswg.org/css-overflow-4/
---

{{CSSRef}}

The **CSS overflow** module properties enable you to handle scrollable overflow in visual media.

Overflow happens when the content in an element box extends past one or more of the box's edges. **Scrollable overflow** is the content that appears outside the element box for which you might want to add a scrolling mechanism. CSS overflow properties let you control what happens when content overflows an element box.

Painting effects that overflow the content but do not participate in the CSS box model do not affect layout. This type of overflow is also known as {{Glossary("ink overflow")}}. Examples of ink overflows include box shadows, border images, text decoration, overhanging glyphs, and outlines. Ink overflows do not extend the scrollable overflow region.

## Overflow in action

Try the following example to see the effects of various `overflow` property values on the content overflow and scrollbars in the adjacent fixed-size box.

The example includes options to change the values for the `overflow-clip-margin` and `width` properties, as well as to programmatically scroll the content if the overflow property creates a {{Glossary("scroll container")}}. Select `overflow: clip` and see the effect of different `overflow-clip-margin` values. Select `overflow: hidden` or `overflow: scroll` to check out the various `ScrollLeft` and `ScrollTop` slider settings.

```html hidden live-sample___overflow
<article>
  <fieldset>
    <legend>Select options:</legend>
    <label
      ><code>overflow</code>:
      <select id="overflowValue">
        <option>hidden</option>
        <option>clip</option>
        <option>scroll</option>
        <option>auto</option>
        <option selected>visible</option>
        <option>overlay</option>
      </select>
    </label>
    <label>
      <code>overflow-clip-margin</code>:
      <input type="number" id="ocm" value="1" min="0" max="10" size="2" />
      <code>em</code>
    </label>
    <label
      ><input type="checkbox" id="wide" /> <code>width</code>:
      <code>20em</code> or <code>40em</code></label
    >
    <fieldset>
      <legend>Scroll programmatically:</legend>
      <label
        >ScrollLeft:
        <input type="range" min="0" max="100" value="0" id="scrollL"
      /></label>
      <label
        >ScrollTop:
        <input type="range" min="0" max="100" value="0" id="scrollT"
      /></label>
    </fieldset>
  </fieldset>
  <pre class="visible">&nbsp;
    Oh, Rubber Duckie, you're the one
    You make bath time lots of fun
    Rubber Duckie, I'm awfully fond of you

    Rubber Duckie, joy of joys
    When I squeeze you, you make noise
    Rubber Duckie, you're my very best friend, it's true

    Oh, every day when I make my way to the tubby
    I find a little fella who's cute and yellow and chubby
    Rub-a-dub-dubby

    <a href="#">Rubber Duckie</a>, you're so fine
    And I'm lucky that you're mine
    Rubber Duckie, I'm awfully fond of you
      </pre>
</article>

<script>
  const pre = document.querySelector("pre");
  const val = document.getElementById("overflowValue");
  const check = document.getElementById("wide");
  const ocm = document.getElementById("ocm");
  const scrollL = document.getElementById("scrollL");
  const scrollT = document.getElementById("scrollT");

  val.addEventListener("change", () => {
    if (pre.classList.contains("wide")) {
      pre.className = `wide ${val.value}`;
    } else {
      pre.className = `${val.value}`;
    }
    scrollExample();
    clipMargin();
  });

  wide.addEventListener("change", () => {
    pre.classList.toggle("wide");
    scrollExample();
  });

  ocm.addEventListener("change", () => {
    clipMargin();
  });

  scrollL.addEventListener("change", () => {
    scrollExample();
  });
  scrollT.addEventListener("change", () => {
    scrollExample();
  });

  function scrollExample() {
    pre.scrollTo({
      top: scrollT.value,
      left: scrollL.value * 2,
      behavior: "smooth",
    });
  }

  function clipMargin() {
    pre.style.overflowClipMargin = `${ocm.value}em`;
  }
</script>
```

```css hidden live-sample___overflow
article {
  display: flex;
  gap: 1em;
}

label {
  display: block;
  white-space: nowrap;
}

pre {
  border: 2px dashed crimson;
  height: 150px;
  width: 20em;
  margin-bottom: 3em;
  overflow-clip-margin: 1em;
  text-align: center;
}

.wide {
  width: 40em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  min-width: 50%;
  padding: 3px 5px;
  box-sizing: border-box;
}

.hidden {
  overflow: hidden hidden;
}
.hidden::before {
  content: "hidden: ";
}

.clip {
  overflow: clip clip;
}
.clip::before {
  content: "clip: ";
}

.scroll {
  overflow: scroll scroll;
}
.scroll::before {
  content: "scroll: ";
}

.auto {
  overflow: auto auto;
}
.auto::before {
  content: "auto: ";
}

.overlay {
  overflow: clip clip;
  overflow: overlay overlay;
}
.overlay::before {
  content: "overlay (or clip if not supported): ";
}

.visible {
  overflow: visible visible;
}
.visible::before {
  content: "visible: ";
}

article:not(:has(pre.clip)) > fieldset > label:nth-of-type(2),
article:not(:has(pre.hidden, pre.scroll, pre.auto, pre.overlay))
  fieldset
  fieldset {
  opacity: 20%;
  pointer-events: none;
}
```

{{EmbedLiveSample("overflow", "", "400px")}}

A link is included in the content box above to demonstrate the effects of keyboard focus on overflow and scroll behaviors. Try tabbing to the link or programmatically scrolling the content: the content will scroll only if the enumerated `<overflow>` value creates a scroll container.

## Reference

### Properties

- {{CSSxRef("line-clamp")}}
- {{CSSxRef("overflow")}} shorthand
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}

> [!NOTE]
> The CSS Overflow Module Level 4 introduces the `block-ellipsis`, `continue`, `max-lines`, `overflow-clip-margin-block`, `overflow-clip-margin-block-end`, `overflow-clip-margin-block-start`, `overflow-clip-margin-bottom`, `overflow-clip-margin-inline`, `overflow-clip-margin-inline-end`, `overflow-clip-margin-inline-start`, `overflow-clip-margin-left`, `overflow-clip-margin-right`, and `overflow-clip-margin-top` properties. These have not yet been implemented.

### Data types

- [`<overflow>`](/en-US/docs/Web/CSS/overflow_value) enumerated values

## Guides

- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Learn what overflow is and how to manage it.
- [Creating a named scroll progress timeline animation](/en-US/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.

## Related concepts

- {{CSSxRef("scrollbar-width")}} CSS property
- {{CSSxRef("scrollbar-color")}} CSS property
- {{CSSxRef("scrollbar-gutter")}} CSS property
- {{CSSxRef("scroll-behavior")}} CSS property
- {{cssxref("scroll-margin")}} CSS shorthand property
- {{cssxref("scroll-padding")}} CSS shorthand property
- {{cssxref("scroll-snap-align")}} CSS property
- {{cssxref("scroll-snap-stop")}} CSS property
- {{cssxref("scroll-snap-type")}} CSS property
- {{cssxref("text-overflow")}} CSS property
- {{CSSxRef("::-webkit-scrollbar")}} pseudo-element
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA role
- Element {{domxref("Element.scroll", "scroll()")}} method
- Element {{domxref("Element.scrollBy", "scrollBy()")}} method
- Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}} method
- Element {{domxref("Element.scrollTo", "scrollTo()")}} method
- Element {{domxref("Element.scrollTop", "scrollTop")}} property
- Element {{domxref("Element.scrollLeft", "scrollLeft")}} property
- Element {{domxref("Element.scrollWidth", "scrollWidth")}} property
- Element {{domxref("Element.scrollHeight", "scrollHeight")}} property
- Document {{domxref("Document.scroll_event", "scroll")}} event
- {{Glossary("Scroll container")}} glossary term
- {{Glossary("Ink overflow")}} glossary term

## Specifications

{{Specifications}}

## See also

- [CSS scrollbars styling](/en-US/docs/Web/CSS/CSS_scrollbars_styling) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
- [CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module
- How to [debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
