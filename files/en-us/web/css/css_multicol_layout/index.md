---
title: CSS multi-column layout
slug: Web/CSS/CSS_multicol_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-multicol/
---

{{CSSRef}}
The **CSS multi-column layout** module lets you divide content across multiple columns. By using the properties in this module, you can define the preferred number and width of columns, the gap size between columns, and the visual appearance of the optional column dividing lines (known as column rules). You can also define how content should flow from column to column and how to break content between columns.

## Multi-column layout in action

In this example, the 1967 speech from Canada's centennial, _A Lament for Confederation_, by Chief Dan George, is displayed across multiple columns, similar to the way articles are displayed in printed newspapers. If you have JavaScript enabled, controls enable changing the preferred column number and width, the width of the gap between columns, whether the title and a sample blockquote should be contained in a single column or made to span all columns, and whether breaking within the paragraphs should be avoided.

```html hidden live-sample___multicol
<article>
  <div class="title">
    <h1>A Lament for Confederation</h1>
    <p>&mdash;Chief Dan George, 1967</p>
  </div>
  <p>
    How long have I known you, Oh Canada? A hundred years? Yes, a hundred years.
    And many, many tides more. And today, when you celebrate your hundred years,
    Oh Canada, I am sad for all the Indian people throughout the land.
  </p>
  <p>
    For I have known you when your forests were mine; when they gave me my meat
    and my clothing. I have known you in your fruits and rivers where your fish
    flashed and danced in the sun, where the waters said ‘come and eat of my
    abundance.’ I have known you in the freedom of your winds. And my spirit,
    like your winds, once roamed this good lands.
  </p>
  <blockquote>
    <p>
      But in long the hundred years since the white man came, I have seen that
      freedom disappear just like the salmon going mysteriously out to sea.
    </p>
  </blockquote>
  <p>
    The white man’s strange customs I could not understand, pressed down upon me
    until I could no longer breathe.
  </p>
  <p>
    When I fought to protect my home and my land, I was called a savage. When I
    neither understood nor welcomed this new way of life, I was called lazy.
    When I tried to rule my people, I was stripped of my authority.
  </p>
  <p>
    My nation was ignored in your history textbooks – we were less important in
    the history of Canada than the buffalo that ranged the plains. I was
    ridiculed in your plays and motion pictures, and when I drank your
    fire-water, I got drunk – very, very drunk. And I forgot.
  </p>
  <p>
    Oh Canada, how can I celebrate with you this centenary, this hundred years?
    Shall I thank you for the reserves that are left me of my beautiful forests?
    Shall I thank you for the canned fish of my rivers? Shall I thank you for
    the loss of my pride and authority, even among my own people? For the lack
    of my will to fight back? No! I must forget what is past and gone.
  </p>
  <p>
    Oh God in heaven! Give me the courage of the olden chiefs. Let me wrestle
    with my surroundings. Let me once again, as in the days of old, dominate my
    environment. Let me humbly accept this new culture and through it rise up
    and go on.
  </p>
  <p>
    Oh god, like the thunderbird of old, I shall rise again out of the sea. I
    shall grab the instruments of the white man’s success – his education, his
    skills, and with these new tools I shall build my race into the proudest
    segment of your society. And, before I follow the great chiefs who have gone
    before us, I shall see these things come to pass.
  </p>
  <p>
    I shall see our young braves and our chiefs sitting in the house of law and
    government, ruling and being ruled by the knowledge and freedoms of our
    great land. So shall we shatter the barriers of our isolation. So shall the
    next hundred years be the greatest in the proud history of our tribes and
    nations.
  </p>
</article>
<fieldset id="options">
  <legend role="button" aria-expanded="true" aria-controls="controls">
    Column options
  </legend>
  <div id="controls">
    <p>
      <input type="range" min="0" max="5" value="5" id="colCount" />
      <label for="colCount">Max # of columns:</label>
    </p>
    <p>
      <input type="range" min="2" max="40" value="10" step="2" id="colWidth" />
      <label for="colWidth">Min width of columns:</label>
    </p>
    <p>
      <input type="range" min="0" max="10" value="1" step="0.5" id="gapSize" />
      <label for="gapSize">Gap size:</label>
    </p>
    <p>
      <input type="checkbox" checked id="colSpan" />
      <label for="colSpan">Byline spans all columns</label>
    </p>
    <p>
      <input type="checkbox" id="blockSpan" />
      <label for="blockSpan">Blockquote spans all columns</label>
    </p>
    <p>
      <input type="checkbox" id="colFill" />
      <label for="colFill">Balance columns</label>
    </p>
    <p>
      <input type="checkbox" id="break" />
      <label for="break">Don't break paragraphs</label>
    </p>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const title = document.querySelector(".title");
const options = document.querySelector("#options");
const legend = document.querySelector("#options > legend");
const blockquote = document.getElementsByTagName("blockquote")[0];

const colCount = document.getElementById("colCount");
const colWidth = document.getElementById("colWidth");
const gapSize = document.getElementById("gapSize");
const colSpan = document.getElementById("colSpan");
const blockSpan = document.getElementById("blockSpan");
const colFill = document.getElementById("colFill");
const breakP = document.getElementById("break");

// make options visible if js is enabled
options.style.display = "revert";

legend.addEventListener("click", () => {
  showAndHideMenu();
});

colCount.addEventListener("change", () => {
  page.style.columnCount = colCount.value;
});

colWidth.addEventListener("change", () => {
  page.style.columnWidth = `${colWidth.value}em`;
});

gapSize.addEventListener("change", () => {
  page.style.gap = `${gapSize.value}em`;
});

colSpan.addEventListener("change", () => {
  setColSpan(colSpan, title);
});

blockSpan.addEventListener("change", () => {
  setColSpan(blockSpan, blockquote);
});

colFill.addEventListener("change", () => {
  if (colFill.checked) {
    page.style.columnFill = "balance";
  } else {
    page.style.columnFill = "auto";
  }
});

breakP.addEventListener("change", () => {
  if (breakP.checked) {
    page.classList.add("breakInside");
  } else {
    page.classList.remove("breakInside");
  }
});

function showAndHideMenu() {
  if (legend.getAttribute("aria-expanded") === "true") {
    // close it
    legend.setAttribute("aria-expanded", "false");
  } else {
    // open it
    legend.setAttribute("aria-expanded", "true");
  }
}

function setColSpan(control, element) {
  if (control.checked) {
    element.style.columnSpan = "all";
  } else {
    element.style.columnSpan = "none";
  }
}
```

```css hidden live-sample___multicol
article {
  column-count: 5;
  column-width: 8em;
  widows: 3;
  orphans: 3;
  gap: 1em;
  column-rule: 2px dashed #666;
  height: 50em;
}
.title {
  column-span: all;
  display: flex;
  align-items: baseline;
  gap: 1em;
  flex-wrap: wrap;
}
p {
  margin: 0 0 1em 0;
  line-height: 1.4;
}
.breakInside * {
  break-inside: avoid;
}
#options {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: white;
  display: none;
}
fieldset p {
  margin-bottom: 0.25em;
}
[aria-expanded] {
  position: relative;
  top: 0;
  transition: 200ms;
}
[aria-expanded="false"] {
  top: 0.75em;
}
[aria-expanded="false"] + #controls {
  display: none;
}
legend {
  background-color: #dedede;
  padding: 0.5em;
}
[aria-expanded="false"] {
  margin: -1em;
  display: inline-block;
}
blockquote {
  border: 2px dashed red;
  margin: 0 0 0.25em 0;
}
blockquote p {
  margin-bottom: 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  font-size: 1.2em;
  vertical-align: baseline;
  color: red;
}
```

{{EmbedLiveSample("multicol", "", "800px")}}

> [!NOTE]
> Multiple-column layout is closely related to [paged media](/en-US/docs/Web/CSS/CSS_paged_media). Each column box is a fragment, much like each printed page is a fragment of a document. Using the properties defined in the [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module, you can control how content breaks between columns and pages.

## Reference

### Properties

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} shorthand
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} shorthand
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> Bear in mind that setting container height and line length can pose challenges for people with visual or cognitive disabilities. [WCAG Success Criterion 1.4.8](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) states that even when the text size is doubled, content should not need to be scrolled.

## Guides

- [Basic concepts of multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : An overview of the Multiple-column Layout specification
- [Using multi-column layouts](/en-US/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
  - : Guide to using multi-column properties to layout out text.
- [Styling columns](/en-US/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : How to use column rules and manage the spacing between columns.
- [Spanning and balancing](/en-US/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : How to make elements span across all columns and control the way columns are filled.
- [Handling overflow in multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Handling content breaks in multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Introduction to the Fragmentation specification and how to control where column content breaks.

## Related concepts

- {{cssxref("orphans")}} CSS property
- {{cssxref("widows")}} CSS property
- {{cssxref("overflow")}} CSS property
- {{cssxref("gap")}} CSS property
- {{cssxref("height")}}, {{cssxref("max-height")}}, and {{cssxref("block-size")}} CSS properties
- {{cssxref("width")}}, {{cssxref("max-width")}}, and {{cssxref("inline-size")}} CSS properties
- {{cssxref("line-style")}} enumerated data type
- [Block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) guide

## Specifications

{{Specifications}}

## See also

- [Learn: multiple-column layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media) module
