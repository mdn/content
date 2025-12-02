---
title: Using interest invokers
slug: Web/API/Popover_API/Interest_invokers
page-type: guide
---

{{DefaultAPISidebar("Popover API")}}

**Interest invokers** provide a mechanism for updating an interface or running custom code when a user "shows interest" or "loses interest" in an element (for example, by hovering or unhovering it). They are most commonly used to show and hide popovers. This guide explains the concepts behind interest invokers, what their use cases are, and how to use them.

## Concepts

The Popover API provides the functionality to display a popover when a related control element (the **invoker**) is activated, for example, when it is clicked. This feature is useful for displaying UI elements such as modals and information panels. You can [create popovers declaratively](/en-US/docs/Web/API/Popover_API/Using#creating_declarative_popovers) by using the [`popover`](/en-US/docs/Web/HTML/Reference/Elements/button#popover) attribute together with either [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) or [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor).

But what about displaying popovers when a control is hovered over or focused via the keyboard? This kind of interaction is also very common — most social and community sites have features whereby you can hover over a link to a person's bio page or a group page to get some information about them in a popover before deciding whether or not to commit to navigating to the page. Such popovers might also contain quick actions such as "Subscribe to group", allowing the user to subscribe without losing the current context of where they are.

Interest invokers allow this kind of functionality to be implemented in a consistent and accessible way, without requiring JavaScript. The browser decides when the user is showing interest in the invoker element and therefore when an action should be taken. "Showing interest" generally occurs when the user hovers, focuses, or long-presses the invoker (the exact nature of "interest" may vary across browsers) and "losing interest" generally happens when they stop interacting with it.

The browser also fires events when interest is gained or lost so custom code can be run in response, and has various CSS features available for styling interest invokers.

> [!NOTE]
> When interest is shown on devices with an <kbd>Esc</kbd> key available, it can be pressed to cancel the interest. This is useful as a general escape machanism in case the interest mechanism ever becomes annoying.

It is possible to use an interest invoker to run custom code in [non-popover cases](#a_non-popover_example), but we'll mostly look at the popover case, as it is the most common use case.

## Creating an interest invoker

Declaratively creating an interest invoker requires two things, at a basic level:

1. An **invoker** element to show interest in, which will trigger some kind of action — in this case showing/hiding a popover. This element is given an [`interestfor`](/en-US/docs/Web/HTML/Reference/Elements/a#interestfor) attribute that takes the `id` of the popover element to show as its value. The interest invoker element can be an HTML {{htmlelement("a")}}, {{htmlelement("button")}}, or {{htmlelement("area")}} element, or an SVG [`<a>`](/en-US/docs/Web/SVG/Reference/Element/a) element.
2. An element with a `id`, which will be the invoker element's **target** — it can be affected or controlled when interest is shown or lost. This can be just about any element type. We also set a `popover` attribute on it to turn it into a popover.

> [!NOTE]
> You can also set an invoker element's target element programmatically, by setting its `interestForElement` DOM property equal to a reference to the target element. See [The interest invoker JavaScript API](#the_interest_invoker_javascript_api) for more information.

Let's look at a simple example:

```css hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
.no-interest-invokers body::before {
  content: "Your browser doesn't support interest invokers.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

```js hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

```html live-sample___basic-interest-invoker
<p>
  Some basic text with <a href="#" interestfor="mypopover">a link</a> inside it.
</p>
<p id="mypopover" popover>A not-very-useful link</p>
```

Setting the `popover` attribute on the target element causes it to be hidden (via {{cssxref("display", "display: none")}}) and centered on the screen. Showing interest in the invoker causes the popover to be displayed.

This renders as follows:

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

Note how the popover appears when the link is hovered, focused, or long-pressed, and disappears again when interaction stops. If the link is activated (for example with a mouse click), it will function as normal, albeit in this case the link doesn't go anywhere. The value of the `popover` attribute doesn't really matter in isolated cases like this, although as you'll see in the next section, it does matter when you start to combine interest invoker popvers with regular popovers.

## Interest invoker interaction with other popovers

It is possible to combine interest invokers with regular popovers on the same control. In this example, we have a {{htmlelement("button")}} element that is set to be an interest invoker via the `interestfor` attribute, meaning it will show a tooltip when interest is shown in it. However, when it is clicked, it will show/hide a different popover, referenced inside the `commandfor` attribute. The [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) attribute is set to `toggle-popover` so that it can be pressed multiple times to toggle the popover between showing and hidden states.

```css hidden live-sample___interest-invoker-popover-interaction
#mytooltip {
  position-area: right;
}

#myinfobox {
  position-area: bottom;
}
```

```html live-sample___interest-invoker-popover-interaction
<p>
  Some basic text with
  <button
    interestfor="mytooltip"
    commandfor="myinfobox"
    command="toggle-popover">
    a button
  </button>
  inside it.
</p>
<p id="mytooltip" popover="hint">A hover toolip</p>
<p id="myinfobox" popover>
  An infobox that also contains some control buttons<br />
  <button>Button 1</button> <button>Button 2</button>
</p>
```

This renders as follows:

{{embedlivesample("interest-invoker-popover-interaction", "100%", "150")}}

In this case, you can show interest in the button to reveal the hover tooltip, and then press the button to reveal the infobox. Note that the `popover` values matter here — we've got the tooltip popover set with [`popover="hint"`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state), whereas the infobox is set to just `popover` (which is equivalent to `popover="auto"`). This allows the tooltip to be shown when the infobox is already shown, without hiding it. If both popovers were set to `auto`, you wouldn't be able to see both at the same time. In a UI, it is useful to be able to look at multiple tooltips without hiding parts of the UI that you've previously opened.

## Styling interest invokers

When targeting popovers with interest invokers, you can use the same styling techniques as with any other popovers (see [Styling popovers](/en-US/docs/Web/API/Popover_API/Using#styling_popovers)), including [using anchoring positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) to position popovers relative to invokers, and [animating popovers](/en-US/docs/Web/API/Popover_API/Using#animating_popovers).

That said, there are some interest invoker-specific CSS features that you should know about:

- The [`interest-delay`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay) shorthand property and its related [`interest-delay-start`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay-start) and [`interest-delay-end`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay-end) longhands, which can be set to add a delay between the user showing/losing interest and the interest change being acted on by the browser — for example, the popover being shown/hidden.
- The [`:interest-source`](/en-US/docs/Web/CSS/Reference/Selectors/:interest-source) and [`:interest-target`](/en-US/docs/Web/CSS/Reference/Selectors/:interest-target) pseudo-classes, which can be used to apply styles to the interest invoker and its associated target element, respectively, only when interest is being shown.

Let's look at a simple example that demonstrates their use.

We specify two buttons and a tooltip, which is shown/hidden when the user shows/loses interest in the `<button>`:

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="mytooltip">Button 1</button>
  <button interestfor="mytooltip">Button 2</button>
</p>
<p id="mytooltip" popover="hint">A hover toolip</p>
```

In the CSS, we set an `interest-delay` of `1s 2s` on the `<button>` — this creates a delay of 1 second between the user showing interest and the popover appearing, and a delay of 2 seconds between the user losing interest and the popover disappearing. We also use the `button:interest-source` selector to set an `orange` {{cssxref("background-color")}} on the `<button>` only when interest is being shown.

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

Next, we combine the `:interest-source` pseudo-class with the {{cssxref(":has()")}} pseudo-class to create a ruleset that applies `interest-delay-start: 0s` to all buttons inside the paragraph, only if the paragraph contains a button that interest has been shown on (that is, has been selected by `button:interest-source`). This is a useful technique — having the popover appear as soon as interest is shown on any button would create an annoying user experience, but after the user has shown interest in a button, it is convenient for them to be able to quickly move between different popovers.

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

Next, we give the popover a {{cssxref("position-area")}} of `bottom`; this causes the popover to be positioned below the `<button>`. This is possible because associating any kind of popover with its invoker creates an implicit anchor reference between the two (see [Popover anchor positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) for more details).

```css live-sample___interest-invoker-styling
#mytooltip {
  position-area: bottom;
}
```

Finally, we use the `#mytooltip:interest-target` selector to set a dashed border on the popover only when interest is being shown.

```css live-sample___interest-invoker-styling
#mytooltip:interest-target {
  border-style: dashed;
}
```

This renders as follows:

{{embedlivesample("interest-invoker-styling", "100%", "150")}}

Try showing interest in the button (for example by hovering or focusing it) to observe the behavior described earlier.

## The interest invoker JavaScript API

Interest invokers have an associated JavaScript API, which can be used to query which element is being targeted by an interest invoker and run custom code in response to interest being shown or lost. The features of the API are as follows:

- The {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} property, which is available on the {{domxref("HTMLButtonElement")}}, {{domxref("HTMLAnchorElement")}}, {{domxref("HTMLAreaElement")}}, and {{domxref("SVGAElement")}} interfaces, and returns a reference to the element being targeted by the interest invoker. This will be the element whose `id` is referenced in the equivalent HTML or SVG interest invoker element's `interestfor` attribute.
- The {{domxref("HTMLElement.interest_event", "interest")}} and {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} events, which are fired on an interest invoker's target element when interest is shown and lost, respectively, allowing custom code to be run in response.
- The {{domxref("InterestEvent")}} interface, which is the event object for the `interest` and `loseinterest` events. This includes a `source` property that contains a reference to the associated interest invoker element.

### Interest invoker feature detection

One use of the API is for feature detection. The simplest way to detect support for interest invokers is to use the {{jsxref("Object.hasOwnProperty()")}} method to see if the `interestForElement` property is available on one of the interface types that is supposed to support it.

For example:

```js
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
```

In all of the examples on this page, we use this exact technique to detect support. If the return value is `false`, indicating no support, we add a class to the {{htmlelement("html")}} element to indicate this:

```js
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

We then use that class in our CSS to display a "not supported" banner:

```css
.no-interest-invokers body::before {
  content: "Your browser doesn't support interest invokers.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

### API example

Now we'll look at a basic example that shows the API features in action. Here we've got three links and a paragraph set to be a popover.

```html live-sample___interest-invoker-api
<p>
  Here's some links:
  <a href="#">Link one</a>
  <a href="#">Link two</a>
  <a href="#"">Link three</a>
</p>
<p id="mytooltip" popover="hint">A hover toolip</p>
```

```css hidden live-sample___interest-invoker-api
html {
  font-family: sans-serif;
}

#mytooltip {
  position-area: bottom;
}
```

In our JavaScript, we grab references to our popover and the three links. We then loop through the links, setting the {{domxref("HTMLAnchorElement.interestForElement", "interestForElement")}} property of each one to equal the reference to our popover. This sets up the interest invoker/target relationship between the popover and each of the three links programmatically.

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("mytooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

We then attach `interest` and `loseinterest` event handlers to the popover. When interest is shown on one of the links, we update the popover's text content to include the text content of the link (retrieved via the event object's `source` property), so you can see which link caused the popover to appear. When interest is lost, we append an asterisk to the `source` element's text content, so you can see how many times each one has been used to show interest.

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `Interest gained via ${e.source.textContent}`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

This renders as follows:

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## A non-popover example

Let's look at a non-popover example, in which we create a style preview panel. You can activate various color scheme buttons to apply different schemes to the style panel, but we've progressively enhanced it using interest invokers. If you show interest in a button, its color scheme is applied to the panel so you can preview it before you select it. When interest is lost, the panel reverts to the previously-applied scheme.

### HTML

Our HTML contains five `<button>` elements and an {{htmlelement("article")}} element representing the style preview panel. Each link has the same `interestfor` value, referencing the `id` of the `<article>`, and a `class` that is used to apply each separate color scheme. Note that in this case we are not setting a `popover` attribute on the `<article>`; it isn't a requirement for using interest invokers.

```html live-sample___non-popover
<div>
  <button interestfor="style-panel" class="black-white">Black/White</button>
  <button interestfor="style-panel" class="bubblegum">Bubblegum</button>
  <button interestfor="style-panel" class="purple-haze">Purple haze</button>
  <button interestfor="style-panel" class="blaze">Blaze</button>
  <button interestfor="style-panel" class="mint-brown">Mint brown</button>
</div>
<article id="style-panel" class="black-white">
  <h2>Style preview panel</h2>
  <p>This is kinda fun, no?</p>
</article>
```

### CSS

In our CSS, we start off by defining the styles for each `class` applied to the `<button>` elements:

```css hidden live-sample___non-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  width: 640px;
  margin: 0 auto;
}

body > div {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}

button {
  flex: 1;
  padding: 5px;
  border-radius: 3px;
}

#style-panel {
  padding: 20px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 10px;
  corner-shape: scoop;
}

h2 {
  margin-top: 0;
  text-align: center;
  letter-spacing: 5px;
}

p {
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
}
```

```css live-sample___non-popover
.black-white {
  color: black;
  background-color: white;
  border: 2px solid black;
}

.bubblegum {
  color: #fff8f0;
  background-color: #ef476f;
  border: 2px solid #fff8f0;
  box-shadow: 0 0 2px #ef476f;
}

.purple-haze {
  color: #8a1c7c;
  background-color: #f0bcd4;
  border: 2px solid #8a1c7c;
}

.blaze {
  color: #f2e94e;
  background-color: #7e6b8f;
  border: 2px solid #f2e94e;
}

.mint-brown {
  color: #41463d;
  background-color: #1cfeba;
  border: 2px solid #41463d;
}
```

Next, we apply some styles to the buttons, only when interest is being shown, using the [`:interest-source`](/en-US/docs/Web/CSS/Reference/Selectors/:interest-source) pseudo-class. This allows users to easily see which button interest is being shown on at any point:

```css live-sample___non-popover
button:interest-source {
  background-color: black;
  color: white;
  border: 2px solid black;
}
```

Last of all, we apply a {{cssxref("transition")}} to the style panel so that `all` property values that change on the element will animate smoothly over a duration of `0.7s`. This means that all color scheme changes applied to the panel will animate.

```css live-sample___non-popover
#style-panel {
  transition: all 0.7s;
}
```

### JavaScript

In our script, we start by grabbing references to the style panel and all the buttons. We also set a variable called `prevStyle` to a value of `black-white`. This is the initial color scheme set on the style panel, and it will also be the color scheme initially reverted back to when the user loses interest in a style option.

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

Next, we set an `interest` and a `loseinterest` event listener on the style panel to run appropriate functions to preview and revert styles as interest is shown and lost on the various buttons (`sampleStyle()` and `revertStyle()`, respectively). We also loop through the `buttons` {{domxref("NodeList")}} and add a `click` event listener to each button so that when it is activated, the `setStyle()` function is run.

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

Finally, we define the functions mentioned previously:

- `sampleStyle()`: When interest is shown via a button, the `class` set on it is accessed via `e.source.className` (`InterestEvent.source` contains a reference to the interest invoker that interest was shown on) and applied to the style panel via `e.target.className`.
- `revertStyle()`: When interest is lost, the style panel is reverted back to its previous style by setting the class stored in `prevStyle` as its `className`.
- `setStyle()`: When a button is actually clicked, its `className` is set as the style panel's `className`. We also set `prevStyle` to equal the clicked button's `className` so that, next time a style is previewed, it will revert back to the _new_ previously-set style.

```js live-sample___non-popover
function sampleStyle(e) {
  e.target.className = e.source.className;
}

function revertStyle(e) {
  e.target.className = prevStyle;
}

function setStyle(e) {
  stylePanel.className = e.target.className;
  prevStyle = e.target.className;
}
```

### Result

This renders as follows:

{{embedlivesample("non-popover", "100%", "260")}}

Try hovering/focusing the buttons to preview the styles on the style panel, and activating them to apply styles permanently. Note that setting the styles will still work on non-supporting browsers, even though the "preview" functionality doesn't.

## Link preview popover example

As mentioned earlier, a very common use case for interest invokers is to progressively enhance links to show some preview information about the link target, such as the name, bio, and location of a user on a link to their profile page, or quick actions like subscribing to a group on a link to the group's homepage. Such popovers are convenient, as they often give the user what they need without forcing them to lose context by making an additional navigation.

Let's look at how to implement a preview popover using interest invokers.

### HTML

In the markup, we include a link to my GitHub profile inside a short paragraph, and a `<div>` containing a limited user profile with a fake "Follow" button. The link has `interestfor` set to the `id` of the user profile, and the user profile has a `popover` attribute set to turn it into a popover element (this hides it by default).

```html live-sample___link-preview-popover
<p>
  I think
  <a
    href="https://github.com/chrisdavidmills/"
    interestfor="user-info"
    target="_blank">
    @chrisdavidmills
  </a>
  should know about this.
</p>

<div id="user-info" popover="hint">
  <div class="wrapper">
    <img src="chris-mills.jpg" alt="chris mills" />
    <section>
      <p><strong>Chris Mills</strong></p>
      <p>
        Independent tech writer and web technology tinkerer, working on MDN on
        behalf of Google and Mozilla. A11y and open standards advocate. Heavy
        metal drummer. <button>Follow</button>
      </p>
      <p>🌍 Greenfield, UK</p>
    </section>
  </div>
</div>
```

### CSS

We begin our styles by setting an [`interest-delay-start`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay-start) value of `1s` on the link (the `a[interestfor]` selector is useful for selecting only links that are interest invokers). We are setting this to increase the delay between a user pausing over a link and the popover appearing. It could be annoying to have popovers appearing too quickly on a dense, link-heavy page.

```css hidden live-sample___link-preview-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
```

```css live-sample___link-preview-popover
a[interestfor] {
  interest-delay-start: 1s;
}
```

Our next CSS rule sets a `position-area` value of `bottom right` on our popover so that it appears at the bottom-right of the link when interest is gained. (We've hidden most of the popover styling for brevity.)

```css live-sample___link-preview-popover
#user-info {
  position-area: bottom right;
}
```

```css hidden live-sample___link-preview-popover
#user-info {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  background-color: white;
  font-size: 0.8rem;
}

#user-info .wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 480px;
  font-size: 0.8rem;
}

#user-info img {
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
}
```

In our last CSS block, we to animate the popover's {{cssxref("opacity")}} property smoothly as it appears (when interest is shown, as specified by the [`:interest-target`](/en-US/docs/Web/CSS/Reference/Selectors/:interest-target) pseudo-class). Because the popover is animating from being hidden (via `display: none`), there are a few extra features required to achieve this. We need to animate the {{cssxref("overlay")}} and {{cssxref("display")}} properties, setting [`allow-discrete`](/en-US/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) as we do so to allow discrete animations, and we need to use a {{cssxref("@starting-style")}} block to set the starting styles for the popover in the "interest target" state, as it has not previously been rendered visually.

```css hidden live-sample___link-preview-popover
[popover]:interest-target {
  opacity: 1;
}

[popover] {
  opacity: 0;
  transition:
    opacity 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
}

@starting-style {
  [popover]:interest-target {
    opacity: 0;
  }
}
```

### Result

This renders as follows:

{{embedlivesample("link-preview-popover", "100%", "260", , , , , "allow-popups")}}

Try hovering/focusing the link to show the preview popover. There is also progressive enhancement at play in this example — in non-supporting browsers, the link will still work as expected.

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
