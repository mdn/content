---
title: The MDN Content Kitchensink
slug: MDN/Kitchensink
tags:
  - Kitchensink
  - MDN Meta
---
{{MDNSidebar}}

> **Warning:** Don't delete this page. It's used by [mdn/yari](https://github.com/mdn/yari) for its automation.

## About this page

The **kitchensink** is a page that _attempts_ to incorporate every possible content element and Yari macro.

This page attempts to be the complete intersection of every other page. Not in terms of the text but in terms of the styles and macros.
Let's start with some notes…

Text that uses the `<kbd>` tag: <kbd>Shift</kbd>

> **Note:** Here's a block indicator note.

> **Warning:** Here's a block indicator warning.

## Prev/Next buttons

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

### Another one…

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

## Code snippets

### Plain text

```
  ___________________________
< I'm an expert in my field. >
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
```

### HTML

```html
<pre>
```

### JavaScript

```js
const f = () => {
  return Math.random();
}
```

### CSS

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### WebAssembly

<pre class="brush: wasm">(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)</pre>

### Rust

<pre class="brush: rust">#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}</pre>

### Python

```python
class BookListView(generic.ListView):
    model = Book
    # your own name for the list as a template variable
    context_object_name = 'my_book_list'
    queryset = Book.objects.filter(title__icontains='war')[:5]
    template_name = 'books/my_arbitrary_template_name_list.html'
```

### Formal syntax

_The formal syntax must be taken from the spec and added to the [MDN data repository](https://github.com/mdn/data). It is an important tool to get precise syntax information for advanced users._

{{CSSSyntax("font-stretch")}}

## Interactive Examples

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}} {{EmbedInteractiveExample("pages/css/order.html")}} {{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Tables

### Markdown table

| Constant name                | Value  | Description |
| ---------------------------- | ------ | ----------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | The number of bits used to hold the query result for the given target. |
| `CURRENT_QUERY_EXT`          | 0x8865 | The currently active query. |
| `QUERY_RESULT_EXT`           | 0x8866 | The query result. |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | A Boolean indicating whether a query result is available. |
| `TIME_ELAPSED_EXT`           | 0x88BF | Elapsed time (in nanoseconds). |
| `TIMESTAMP_EXT`              | 0x8E28 | The current time. |
| `GPU_DISJOINT_EXT`           | 0x8FBB | A Boolean indicating whether the GPU performed any disjoint operation. |

### HTML table

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">Phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

<table class="fullwidth-table">
  <caption>
    Values for the content of <code>&#x3C;meta name="viewport"></code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Possible subvalues</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td>A positive integer number, or the text <code>device-width</code></td>
      <td>
        Defines the pixel width of the viewport that you want the website to be
        rendered at.
      </td>
    </tr>
    <tr>
      <td><code>user-scalable</code> {{ReadOnlyInline}}</td>
      <td><code>yes</code> or <code>no</code></td>
      <td>
        If set to <code>no</code>, the user is not able to zoom in the webpage.
        The default is <code>yes</code>. Browser settings can ignore this rule,
        and iOS10+ ignores it by default.
      </td>
    </tr>
    <tr>
      <td><code>viewport-fit</code></td>
      <td><code>auto</code>, <code>contain</code> or <code>cover</code></td>
      <td>
        <p>
          The <code>auto</code> value doesn't affect the initial layout viewport, and the whole web page is viewable.
        </p>
        <p>
          The <code>contain</code> value means that the viewport is scaled to
          fit the largest rectangle inscribed within the display.
        </p>
        <p>
          The <code>cover</code> value means that the viewport is scaled to fill the device display.
          It is highly recommended to make use of the <a href="/en-US/docs/Web/CSS/env()">safe area inset</a> variables to
          ensure that important content doesn't end up outside the display.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Every macro under the sun

**Well, almost every macro. Hopefully only the ones that are in active use.**

An {{Glossary("HTTP")}} error code meaning "Bad Gateway".

A {{Glossary("Server", "server")}} can act as a gateway or proxy (go-between) between a client (like your Web browser) and another, upstream server.
When you request to access a {{Glossary("URL")}}, the gateway server can relay your request to the upstream server.
"502" means that the upstream server has returned an invalid response.

- JavaScript {{jsxref("Array")}} on MDN

Listening for mouse movement is even easier than listening for key presses: all we need is the listener for the {{domxref("Element/mousemove_event", "mousemove")}} event.

## Browser compatibility

{{Compat("html.elements.video")}}

## Axis-Aligned Bounding Box

One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation.
The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles.
Any gap means a collision does not exist.

```js
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}
```

<div class="hidden"><h5 id="Rect_code">Rect code</h5><pre class="brush: html">&#x3C;div id="cr-stage">&#x3C;/div>
&#x3C;p>Move the rectangle with arrow keys. Green means collision, blue means no collision.&#x3C;/p>
&#x3C;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js">&#x3C;/script>
</pre><pre class="brush: js">Crafty.init(200, 200);

var dim1 = {x: 5, y: 5, w: 50, h: 50}
var dim2 = {x: 20, y: 10, w: 60, h: 40}

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");

rect2.bind("EnterFrame", function () {
if (rect1.x &#x3C; rect2.x + rect2.w &#x26;&#x26;
rect1.x + rect1.w > rect2.x &#x26;&#x26;
rect1.y &#x3C; rect2.y + rect2.h &#x26;&#x26;
rect1.h + rect1.y > rect2.y) {
// collision detected!
this.color("green");
} else {
// no collision
this.color("blue");
}
});

</pre></div>

{{ EmbedLiveSample('Rect_code', '700', '300') }}

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

{{WebExtAPIRef("tabs.mutedInfo")}}

### Obsolete CSSOM interfaces {{deprecated_inline}}

{{InheritanceDiagram}}

{{EmbedGHLiveSample("web-tech-games/index.html", '100%', 820)}}

- [Accessibility resources at MDN](/en-US/docs/Web/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) on Wikipedia

The [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) macro inserts a localized note box indicating that a feature is available in a [Web worker](/en-US/docs/Web/API/Web_Workers_API) context.

{{AvailableInWorkers}}

- {{ARIARole("button")}}
- {{ARIARole("checkbox")}}
- {{ARIARole("menuitem")}}
- {{ARIARole("menuitemcheckbox")}}
- {{ARIARole("menuitemradio")}}
- {{ARIARole("option")}}
- {{ARIARole("radio")}}
- {{ARIARole("switch")}}
- {{ARIARole("tab")}}
- {{ARIARole("treeitem")}}

<!---->

- Create a {{htmlelement("canvas")}} element and set its `width` and `height` attributes to the original, smaller resolution.
- Set its CSS {{cssxref("width")}} and {{cssxref("height")}} properties to be 2x or 4x the value of the HTML `width` and `height`.
  If the canvas was created with a 128 pixel width, for example, we would set the CSS `width` to `512px` if we wanted a 4x scale.
- Set the {{htmlelement("canvas")}} element's `image-rendering` CSS property to some value that does not make the image blurry.
  Either `crisp-edges` or `pixelated` will work. Check out the {{cssxref("image-rendering")}} article for more information on the differences between these values, and which prefixes to use depending on the browser.

<!---->

- [MDN Web Docs Glossary](/en-US/docs/Glossary):

  - {{Glossary("XHR_(XMLHttpRequest)","XMLHttpRequest")}}

- [AJAX](https://en.wikipedia.org/wiki/AJAX) on Wikipedia
- [Ajax](/en-US/docs/Web/Guide/AJAX)
- [Ajax - Getting started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
- {{DOMxRef("XMLHttpRequest")}}
- {{DOMxRef("Fetch API")}}
- [Using Fetch API](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Synchronous vs. Asynchronous Communications](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

<!---->

- {{SVGElement("feGaussianBlur")}}
- {{SVGAttr("keySplines")}} SVG attribute
- {{htmlattrxref("dir")}}
- {{htmlattrxref("lang")}}
- {{cssxref(":dir")}}
- {{cssxref("direction")}}

## Types

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Information about a particular alarm.

{{Non-standard_Header}}
{{Deprecated_Header}}
[![Iceberg pic](iceberg.jpg)](iceberg.jpg)
