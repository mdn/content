---
title: Using interest invokers
slug: Web/API/Popover_API/Using_interest_invokers
page-type: guide
---

{{DefaultAPISidebar("Popover API")}}

**Interest invokers** provide a mechanism for updating an interface or running custom code when a user "shows interest" or "loses interest" in an element (for example, by hovering or unhovering it). They are most commonly used to show and hide popovers. This guide explains the concepts behind interest invokers, what their use cases are, and how to use them.

## Concepts

The Popover API provides the functionality to display a popover when a related control element (the **invoker**) is activated, for example, when it is clicked. This feature is useful for displaying UI elements such as modals and information panels. You can [create popovers declaratively](/en-US/docs/Web/API/Popover_API/Using#creating_declarative_popovers) by using the [`popover`](/en-US/docs/Web/HTML/Reference/Elements/button#popover) attribute together with either [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) or [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor).

In addition to these activation-based popovers, there is a common need to display a popover when a control element is hovered or focused – interactions that indicate user interest. For example, many social and community sites let users hover over a link to a person's or group's profile page to show a popover with more information. This quick preview helps users decide whether they want to visit the full page. Such popovers may also contain quick actions, such as "Follow" or "Subscribe to group", allowing users to take an action without losing their current context.

Interest invokers enable the browser to provide interest-based popover behavior in a consistent and accessible way, without requiring JavaScript. The browser determines when a user is showing interest in an element, and therefore, when an action should be taken. "Showing interest" generally occurs when a user hovers, focuses, or long-presses the element (the exact nature of "interest" may vary across browsers), and "losing interest" generally happens when the user stops interacting with the element.

The browser also fires events when interest is gained or lost, so you can run custom code in response. In addition, this feature includes CSS properties and selectors for styling elements based on interest.

> [!NOTE]
> On devices with an <kbd>Esc</kbd> key available, pressing it cancels all interest. This provides a general escape mechanism if the interaction becomes distracting or unwanted.

You can also use interest invokers to run custom code in [non-popover cases](#a_non-popover_example). However, this guide focuses mainly on popovers, since they are the most common use of interest invokers.

## Creating an interest invoker

Creating an interest invoker declaratively has the following two requirements:

- An **invoker element**: This is the element that the user interacts with to indicate interest and trigger an action, such as showing or hiding a popover. The invoker element must have an [`interestfor`](/en-US/docs/Web/HTML/Reference/Elements/a#interestfor) attribute whose value is the `id` of the target element. The invoker element can be an HTML {{htmlelement("a")}}, {{htmlelement("button")}}, or {{htmlelement("area")}} element, or an SVG [`<a>`](/en-US/docs/Web/SVG/Reference/Element/a) element.

- A **target element**: This is the element that is affected or controlled when interest is gained or lost. The target element must have an `id`, and it can be just about any element type. Giving this element a `popover` attribute turns it into a popover.

  > [!NOTE]
  > You can also set the target element programmatically by setting the invoker element's `interestForElement` DOM property to a reference to the target element. For more information, see [The interest invoker JavaScript API](#the_interest_invoker_javascript_api) section later in this guide.

Let's look at a simple example. Here, the **invoker element** is a link, and the **target element** is a paragraph with the `popover` attribute.

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
<p>Some text with a <a href="#" interestfor="mypopover">link</a>.</p>
<p id="mypopover" popover>A short preview with some quick info</p>
```

Setting the `popover` attribute on the target element causes it to be hidden (via {{cssxref("display", "display: none")}}) and centered on the screen. Showing interest in the invoker element (the link) causes the popover to appear.

This renders as follows. Try interacting with the link:

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

Note how the popover appears when the link is hovered, focused, or long-pressed, and disappears when the interaction stops. In contrast, if the link is activated instead, such as with a mouse click, it behaves like a normal link – except that in this example it doesn't go anywhere.

The value of the `popover` attribute doesn't affect the popover's behavior in this example. However, it becomes important when you combine interest invoker popovers with regular popovers, as shown in the next section.

## Combining interest invokers with activation-based popovers

You can combine interest invokers with regular popovers on the same control element. In the following example, a {{htmlelement("button")}} element is set up as an interest invoker using the `interestfor` attribute, meaning it will show a tooltip when the user shows interest in it. If the button is clicked, it will show or hide a different popover referenced by the `commandfor` attribute. The [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) attribute is set to `toggle-popover`, allowing the button to be pressed multiple times to toggle the popover between its shown and hidden states.

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
  Some content including a
  <button
    interestfor="mytooltip"
    commandfor="myinfobox"
    command="toggle-popover">
    button
  </button>
</p>
<p id="mytooltip" popover="hint">A hover tooltip</p>
<p id="myinfobox" popover>
  An infobox that also contains some control buttons<br />
  <button>Button 1</button> <button>Button 2</button>
</p>
```

This renders as follows:

{{embedlivesample("interest-invoker-popover-interaction", "100%", "150")}}

You can show interest in the button to display the tooltip, and click the button to reveal the infobox. Note that the `popover` values matter here — the tooltip popover is set to [`popover="hint"`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state), whereas the infobox is set to just `popover` (equivalent to `popover="auto"`). This allows the tooltip to stay visible even when the infobox is shown. If both popovers were set to `auto`, you wouldn't be able to see both the tooltip and the infobox at the same time. In a UI, it is useful to be able to view multiple tooltips without hiding parts of the UI that you've already opened.

## Styling interest invokers

When styling popovers used with interest invokers, you can use the same styling techniques as with any other popover (see [Styling popovers](/en-US/docs/Web/API/Popover_API/Using#styling_popovers)), including [using anchoring positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) to position popovers relative to invokers and [animating popovers](/en-US/docs/Web/API/Popover_API/Using#animating_popovers).

That said, there are some CSS features specific to interest invokers:

- The {{cssxref("interest-delay")}} shorthand property and its related {{cssxref("interest-delay-start")}} and {{cssxref("interest-delay-end")}} longhands: These can be used to add a delay between the user gaining or losing interest and the browser acting on that change — for example, showing or hiding a popover.
- The {{cssxref(":interest-source")}} and {{cssxref(":interest-target")}} pseudo-classes: These can be used to apply styles to the interest invoker and its associated target element, respectively, only when interest is indicated.

Let's look at a simple example that demonstrates how these features work.

We've defined two buttons and a tooltip. The tooltip is shown or hidden when the user shows or loses interest in either button.

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="mytooltip">Button 1</button>
  <button interestfor="mytooltip">Button 2</button>
</p>
<p id="mytooltip" popover="hint">A hover tooltip</p>
```

In the CSS, we've set an `interest-delay` of `1s 2s` on the `<button>` — this creates a delay of 1 second before the tooltip appears when the user shows interest, and a delay of 2 seconds before it disappears when the user loses interest. We've also used the `button:interest-source` selector to change the {{cssxref("background-color")}} of the buttons to `orange` when interest is shown.

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

Next, we've combined the `:interest-source` pseudo-class with the {{cssxref(":has()")}} pseudo-class to apply `interest-delay-start: 0s` to all buttons inside the paragraph, but only when the paragraph contains a button that interest is shown on (that is, a button matching `button:interest-source`). This is a useful technique — having the popover appear as soon as interest is shown on any button would create an annoying user experience, but after the user has shown interest in a button, it is convenient for them to be able to quickly move between different popovers.

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

We've also set a {{cssxref("position-area")}} of `bottom` on the tooltip so that it appears below the button. This is possible because associating any popover with its interest invoker creates an implicit anchor reference between them (see [Popover anchor positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) for more details).

```css live-sample___interest-invoker-styling
#mytooltip {
  position-area: bottom;
}
```

Finally, we've used the `#mytooltip:interest-target` selector to set a dashed border on the popover when interest is shown.

```css live-sample___interest-invoker-styling
#mytooltip:interest-target {
  border-style: dashed;
}
```

This renders as follows:

{{embedlivesample("interest-invoker-styling", "100%", "150")}}

Try showing interest in the button (for example by hovering or focusing it) to observe the behavior described earlier.

## JavaScript API for interest invokers

Interest invokers have an associated JavaScript API that lets you query the element being targeted by an interest invoker and run custom code when interest is shown or lost. The features of this API are:

- The {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} property, which is available on the {{domxref("HTMLButtonElement")}}, {{domxref("HTMLAnchorElement")}}, {{domxref("HTMLAreaElement")}}, and {{domxref("SVGAElement")}} interfaces. It returns a reference to the target element for the interest invoker. This is the element whose `id` is referenced in the equivalent HTML or SVG interest invoker's `interestfor` attribute.
- The {{domxref("HTMLElement.interest_event", "interest")}} and {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} events, which are fired on an interest invoker's target element when interest is shown and lost, respectively. You can listen for these events to run custom code in response.
- The {{domxref("InterestEvent")}} interface, which is the event object for the `interest` and `loseinterest` events. This includes a `source` property that contains a reference to the associated interest invoker element.

### Detecting support for interest invokers

One of the uses of the API is feature detection. The simplest way to check whether interest invokers are supported is to use the {{jsxref("Object.hasOwnProperty()")}} method on one of the interface types to see if the `interestForElement` property is available.

For example:

```js
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
```

All the examples in this guide use this technique to detect support. If the return value is `false`, indicating that the feature is not supported, we add a class to the {{htmlelement("html")}} element:

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

### Interest invoker API in action

Let's look at a basic example that shows the API features in action. This example has three links and a paragraph set up as a popover:

```html live-sample___interest-invoker-api
<p>
  Here's some links:
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#"">Link 3</a>
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

In the JavaScript, we get references to the popover and the three links. We then loop through the links and set each link's {{domxref("HTMLAnchorElement.interestForElement", "interestForElement")}} property to reference the popover element. This programmatically sets up the interest invoker-target relationship between the popover and each link.

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("mytooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

Next, we attach `interest` and `loseinterest` event handlers to the popover. When interest is shown on one of the links, we update the popover's text content so it includes the text content of the link that caused the popover to appear (retrieved via the event object's `source` property). When interest is lost, we append an asterisk to the `source` element's text content, so you can see the number of times interest has been shown on it.

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `Interest shown on ${e.source.textContent}`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

This renders as follows:

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## A non-popover example

Let's look at an example that uses interest invokers without popovers. In this example, we create a style preview panel. You can activate various color scheme buttons to apply different styles to the panel. We've progressively enhanced the interaction using interest invokers so you can preview the style before selecting it. When interest is shown on a button, its color scheme is applied to the panel, and when interest is lost, the panel reverts to the previously-applied style.

### HTML

The HTML contains five `<button>` elements and an {{htmlelement("article")}} element representing the style preview panel. Each button has the same `interestfor` value, referencing the `id` of the `<article>`, and each has a `class` that represents a different color scheme. Note that the `<article>` does not have a `popover` attribute set (popovers are not a requirement for using interest invokers).

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
  <p>This is fun, right?</p>
</article>
```

### CSS

First, we define the styles for each `class` that's applied to a `<button>` element:

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

Next, we apply styles to any button on which interest is shown, using the {{cssxref(":interest-source")}} pseudo-class. This allows users to easily see which button is currently drawing interest.

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

We begin our styles by setting an {{cssxref("interest-delay-start")}} value of `1s` on the link (the `a[interestfor]` selector is useful for selecting only links that are interest invokers). We are setting this to increase the delay between a user pausing over a link and the popover appearing. It could be annoying to have popovers appearing too quickly on a dense, link-heavy page.

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

In our last CSS block, we to animate the popover's {{cssxref("opacity")}} property smoothly as it appears (when interest is shown, as specified by the {{cssxref(":interest-target")}} pseudo-class). Because the popover is animating from being hidden (via `display: none`), there are a few extra features required to achieve this. We need to animate the {{cssxref("overlay")}} and {{cssxref("display")}} properties, setting [`allow-discrete`](/en-US/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) as we do so to allow discrete animations, and we need to use a {{cssxref("@starting-style")}} block to set the starting styles for the popover in the "interest target" state, as it has not previously been rendered visually.

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

- [Interest invoker examples landing page](https://mdn.github.io/dom-examples/interest-invokers/)
- [Popover API](/en-US/docs/Web/API/Popover_API)
