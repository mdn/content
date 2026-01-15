---
title: "<geolocation>: The geolocation element"
slug: Web/HTML/Reference/Elements/geolocation
page-type: html-element
browser-compat: html.elements.geolocation
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`<geolocation>`** [HTML](/en-US/docs/Web/HTML) element creates an interactive control for the user to share their location data with the page.

It provides:

- An intuitive browser-defined UI.
- A process for handling the necessary permissions for the `geolocation` feature.
- API features for accessing location data and responding to received location data and permission changes.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : A boolean attribute that, when set to `true`, specifies that the browser should immediately retrieve location data when the `<geolocation>` element is rendered, provided permission was previously granted. If set to `false`, location data is not retrieved until the user activates the control. Defaults to `false`.

    If permission was not previously granted, this attribute has no effect.

- `watch` {{experimental_inline}}
  - : A boolean attribute that, when set to `true`, specifies that the browser should retrieve location data whenever the position of the user's device changes. If set to `false`, location data is only retrieved once. Defaults to `false`.

## Description

The [Geolocation API](/en-US/docs/Web/API/Geolocation_API) has some shortcomings, most notably:

- The UI and underlying logic for requesting the data needs to be implemented from scratch each time, and is therefore inconsistent across apps.
- The handling of permissions can be unintuitive. Users often don't understand browser permission prompts, or why they are being asked to do something, and certain situations can be hard to recover from. For example, if the user has previously denied access to the `geolocation` feature, reenabling it can involve navigating complex settings menus or even having to wait for a certain period of time if the user has dismissed the prompt a certain number of times. Chrome blocks usage for a week if the user dismisses the prompt three times.

The `<geolocation>` element aims to fix these problems by:

- Providing a declarative browser-defined control for sharing location data. In Chrome, the button features a "map pin" icon and intuitive text ("Use location" in English content).
- Reinventing the permissions process to be more intuitive. For example, in Chrome, if the user previously denied permission to access location data, or dismissed the permission dialog without making a choice, they are free to press the button again to update their choice. In cases where they previously denied permission, subsequent dialogs will inform them that they previously didn't allow location data to be shared, and ask them whether they want to continue not allowing it, or to allow it.
- More obviously reflecting the user's conscious choice, and blocking possible usage that might trick the user into providing their location data unwittingly (see [`<geolocation> blocking`](#geolocation_blocking) for more information).

The element's DOM API interface, {{domxref("HTMLGeolocationElement")}}, provides features to access returned position data, current permission status, and errors if the data retrieval was unsuccessful, reducing the amount of JavaScript logic that needs to be written. It also has events available to run code in response to location data being received, changes in permission status, and user interactions with the permission dialog.

The `<geolocation>` element uses features of the Geolocation API in the background. By default, the browser requests location data once, as if the {{domxref("Geolocation.getCurrentPosition()")}} method was called. However, if the `watch` attribute is set to `true`, the browser constantly requests the data, as if {{domxref("Geolocation.watchPosition()")}} was called.

If data is successfully retrieved, it is available in the {{domxref("HTMLGeolocationElement.position")}} property, which contains a {{domxref("GeolocationPosition")}} object. If data retrieval is unsuccessful, error information is available in the {{domxref("HTMLGeolocationElement.error")}} property, which contains a {{domxref("GeolocationPositionError")}} object.

> [!NOTE]
> For performance reasons, a maximum of three `<geolocation>` elements are allowed on any one page. If this quota is exceeded, the element functionality is disabled.

### Setting the button language

The global [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute is observed by the `<geolocation>` element to select a language for its rendered text. This means that you can set a `lang` attribute directly on the `<geolocation>` element or on one of its ancestors to tell the browser what language to use for the button label.

If no suitable `lang` attribute is set, the browser's preferred language setting is used.

### Including fallback content

You can include fallback content between the `<geolocation>` element's opening and closing tags that will be displayed if it isn't supported. For example, you might include a "Not supported" message:

```html
<geolocation>
  <p>Your browser doesn't support the Geolocation element.</p>
</geolocation>
```

However, a better real-world solution might be to include a regular {{htmlelement("button")}} element that uses the Geolocation API to retrieve location data:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

### `<geolocation>` blocking

One key idea behind the design of the `<geolocation>` element is that it should reflect a user's conscious choice, and prevent bad actors from tricking users into activating it, for example via [clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking). Because of this, the browser keeps a record of so-called **blocker reasons** for each rendered element.

When a blocker is active on a `<geolocation>` element, it is prevented from functioning (blocked), either temporarily or permanently, depending on the reason. When a `<geolocation>` element is blocked, it is said to be invalid. You can check whether it is invalid by querying the {{domxref("HTMLGeolocationElement.isValid")}} property. You can also return the reason why it is invalid via the {{domxref("HTMLGeolocationElement.invalidReason")}} property — see that page for a full list of possible reasons.

### Styling restrictions

The `<geolocation>` element has several constraints on the CSS styles that can be applied to it. Some of these constraints are designed to enforce fundamental accessibility, and will result in the button being deactivated if they are not adhered to. Some enforce certain values or value ranges for various properties.

Any properties that are not listed in the following sub-sections, or logically equivalent to a physical property listed in the following sub-sections, are ignored when set on the `<geolocation>` element.

#### Accessibility restrictions

The rendered `<geolocation>` button is deactivated (meaning that pressing it will have no effect) if the following constaints are not adhered to:

- The [color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) ratio between {{cssxref("color")}} and {{cssxref("background-color")}} must be at least 3:1.
- The {{cssxref("font-size")}} must not be smaller than the `small` value (in the case of keyword values), or its computed value (in the case of other value types).

#### Value constraints

The following CSS property value constaints are applied to the `<geolocation>` element. If an attempt is made to set these properties to values outside the listed constraints on the `<geolocation>` element, the value is adjusted to equal the constraint (in the case of an exact value constraint) or to equal to nearest computed value upper or lower bound (in the case of a range constraint).

- {{cssxref("opacity")}}
  - : `1.0`
- {{cssxref("line-height")}}
  - : `normal`
- {{cssxref("white-space")}}
  - : `nowrap`
- {{cssxref("user-select")}}
  - : `none`
- {{cssxref("appearance")}}
  - : `auto`
- {{cssxref("box-sizing")}}
  - : `content-box`
- {{cssxref("vertical-align")}}
  - : `middle`
- {{cssxref("text-emphasis")}}
  - : `initial`
- {{cssxref("text-shadow")}}
  - : `initial`
- {{cssxref("outline-offset")}}
  - : `0` or greater.
- {{cssxref("font-weight")}}
  - : `200` or greater.
- {{cssxref("word-spacing")}}
  - : Between `0` and `0.5em`, inclusive.
- {{cssxref("letter-spacing")}}
  - : Between `-0.05em` and `0.2em`, inclusive.
- {{cssxref("letter-spacing")}}
  - : Between `-0.05em` and `0.2em`, inclusive.
- {{cssxref("min-height")}}
  - : `1em` or greater.
- {{cssxref("max-height")}}
  - : `3em` or less. `none` is an accepted value.
- {{cssxref("min-width")}}
  - : The computed value of `fit-content` or less.
- {{cssxref("border-width")}}
  - : `1em` or less.

#### Complex constraints

The following constraints are more complex than simple value constraints:

- Block direction padding
  - : If the {{cssxref("block-size")}} is set to `auto`, the {{cssxref("padding-block-start")}} and {{cssxref("padding-block-end")}} (and equivalent physical properties for the current [writing mode](/en-US/docs/Web/CSS/Reference/Properties/writing-mode)) are constrained to a maximum of `1em` and must be equal.
- Inline direction padding
  - : If the {{cssxref("inline-size")}} is set to `auto`, the {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}} (and equivalent physical properties for the current [writing mode](/en-US/docs/Web/CSS/Reference/Properties/writing-mode)) are constrained to a maximum of `5em` and must be equal.

#### Properties that can be set normally

The following CSS properties can be used normally:

- {{cssxref("font-kerning")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("text-rendering")}}
- {{cssxref("align-self")}}
- {{cssxref("anchor-name")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, and {{cssxref("border-left")}}
- {{cssxref("clear")}}
- {{cssxref("color-scheme")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, and {{cssxref("counter-set")}}
- {{cssxref("flex")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, and {{cssxref("flex-basis")}}
- {{cssxref("float")}}
- {{cssxref("height")}}
- {{cssxref("isolation")}}
- {{cssxref("justify-self")}}
- {{cssxref("left")}}
- {{cssxref("order")}}
- {{cssxref("orphans")}}
- {{cssxref("outline")}}, {{cssxref("outline-color")}}, and {{cssxref("outline-style")}}
- {{cssxref("overflow-anchor")}}
- {{cssxref("overscroll-behavior")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-x")}}, and {{cssxref("overscroll-behavior-y")}}
- {{cssxref("page")}}
- {{cssxref("position")}}
- {{cssxref("position-anchor")}}
- {{cssxref("right")}}
- {{cssxref("scroll-margin")}}, {{cssxref("scroll-margin-top")}}, {{cssxref("scroll-margin-right")}}, {{cssxref("scroll-margin-bottom")}}, and {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-padding")}}, {{cssxref("scroll-padding-top")}}, {{cssxref("scroll-padding-right")}}, {{cssxref("scroll-padding-bottom")}}, {{cssxref("scroll-padding-left")}}, {{cssxref("scroll-padding-inline-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-inline-end")}}, and {{cssxref("scroll-padding-block-end")}}
- {{cssxref("text-spacing-trim")}}
- {{cssxref("text-transform")}}
- {{cssxref("top")}}
- {{cssxref("visibility")}}
- {{cssxref("x")}}
- {{cssxref("y")}}
- {{cssxref("ruby-position")}}
- {{cssxref("user-select")}}
- {{cssxref("width")}}
- {{cssxref("will-change")}}
- {{cssxref("z-index")}}

## Accessibility

The `<geolocation>` element has an accessible name written in the [language it is set to](#setting_the_button_language). It also has a [`role`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of [`button`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) so that it is recognized as a button by screen readers.

In addition, the `<geolocation>` element has a default [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0`, so it behaves like a real `<button>` with respect to keyboard focus.

Finally, refer back to the [Accessibility restrictions](#accessibility_restrictions) section for information on styling constaints applied to the `<geolocation>` element to enforce fundamental accessibility requirements.

## Examples

### Basic usage example

This example uses the `<geolocation>` element to retrieve your current location, which is printed out below the button in a {{htmlelement("p")}} element. The example also uses a regular `<button>` fallback to retrive the location data in non-supporting browsers.

#### HTML

We include a `<geolocation>` element with a `<button>` fallback nested inside it, which will be rendered in browsers that do not support `<geolocation>`. We also include a `<p>` to output location data and errors into.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p></p>
```

#### JavaScript

In our script, we start off by grabbing a reference to the output `<p>` element. We then detect whether the `<geolocation>` element is supported by testing `typeof HTMLGeolocationElement === "function"`:

- If it is supported, we grab a reference to the `<geolocation>` element then add a {{domxref("HTMLGeolocationElement.location_event", "location")}} event listener so that, when the button is pressed and the data is retrieved, we print the (lat, long) coordinates to the output `<p>` (retrieved via the {{domxref("HTMLGeolocationElement.position", "position")}} property), or an error message if the data retrieval was unsuccessful (retrieved via the {{domxref("HTMLGeolocationElement.error", "error")}} property).
- If it isn't supported, we grab a reference to the fallback `<button>` element and retrieve and print the same data, except that this time we are using a `click` event listener on the button, and a {{domxref("Geolocation.getCurrentPosition()")}} call to retrieve the data.

```js
const outputElem = document.querySelector("p");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("button");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### Result

See this code [running live](#) (also see the full [source code](#)). You can also find a version of this example that includes the `watch` attribute on the `<geolocation>` element and therefore fetches location data each time the user's device position changes (see it [running live](#)).

Try viewing the demos in a supported browser and an unsupported browser if possible, and note the difference in permissions dialog flow when you choose to allow or deny permission to use `geolocation`.

For a walkthrough of a more complete example that uses location data to create a map of your local area, see the {{domxref("HTMLGeolocationElement")}} reference page.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Any suitable transparent fallback content.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts phrasing content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLGeolocationElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLGeolocationElement")}}
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Introducing the `<geolocation>` HTML element](https://developer.chrome.com/blog/geolocation-html-element) on developer.chrome.com (2026)
