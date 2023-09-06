---
title: appearance
slug: Web/CSS/appearance
page-type: css-property
browser-compat: css.properties.appearance
---

{{CSSRef}}

The **`appearance`** CSS property is used to display UI elements with platform-specific styling, based on the operating system's theme.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Before standardization, this property allowed elements to be shown as widgets, such as buttons or check boxes. It was considered a misfeature and authors are encouraged to use only standard keywords now.

> **Note:** If you wish to use this property on websites, you should test it very carefully. Although it is supported in most modern browsers, its implementation varies. In older browsers, even the keyword `none` does not have the same effect on all form elements across different browsers, and some do not support it at all. The differences are smaller in the newest browsers.

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* All <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;

/* Examples using the `-moz-` prefix in Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Examples using the `-webkit-` prefix in WebKit/Blink (as well as Gecko and Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
```

### Values

For the following keywords, the user agent selects the appropriate styling based on the element.
Some examples are provided, but the list is not exhaustive.

- `none`

  - : Hides certain features of widgets, such as arrow displayed in select element, indicating that list can be expanded.

- `auto`

  - : Acts as `none` on elements with no special styling.

- `<compat-special>`

  - : One of `menulist-button` or `textfield`.
    Both of these values are equivalent to `auto` on elements with no special styling.

- `<compat-auto>`

  - : Possible values are `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button`, and `textarea`.
    Keywords which are the equivalent of `auto` for maintaining compatibility with older browsers.

#### Non-standard values

The following values may be operational on historical browser versions using **`-moz-appearance`** or **`-webkit-appearance`** prefix, but not on the standard **`appearance`** property:

<details>
<summary>Non-standard values</summary>

| Value                                  | Safari | Firefox | Chrome | Edge |
| -------------------------------------- | ------ | ------- | ------ | ---- |
| `attachment`                           | Y      | Y       | Y      | Y    |
| `borderless-attachment`                | Y      | Y       | Y      | Y    |
| `button-bevel`                         | N      | Y       | Y      | Y    |
| `caps-lock-indicator`                  | Y      | N       | N      | Y    |
| `caret`                                | Y      | Y       | Y      | Y    |
| `checkbox-container`                   | N      | Y       | N      | N    |
| `checkbox-label`                       | N      | Y       | N      | N    |
| `checkmenuitem`                        | N      | Y       | N      | N    |
| `color-well`                           | Y      | N       | N      | N    |
| `continuous-capacity-level-indicator`  | Y      | N       | N      | N    |
| `default-button`                       | Y      | N       | N      | Y    |
| `discrete-capacity-level-indicator`    | Y      | N       | N      | N    |
| `inner-spin-button`                    | Y      | Y       | Y      | N    |
| `image-controls-button`                | Y      | N       | N      | N    |
| `list-button`                          | Y      | N       | N      | N    |
| `listitem`                             | Y      | Y       | Y      | Y    |
| `media-enter-fullscreen-button`        | N      | N       | Y      | N    |
| `media-exit-fullscreen-button`         | N      | N       | Y      | N    |
| `media-fullscreen-volume-slider`       | Y      | N       | N      | N    |
| `media-fullscreen-volume-slider-thumb` | Y      | N       | N      | N    |
| `media-mute-button`                    | N      | N       | Y      | Y    |
| `media-play-button`                    | N      | N       | Y      | Y    |
| `media-overlay-play-button`            | N      | N       | Y      | N    |
| `media-return-to-realtime-button`      | Y      | N       | N      | N    |
| `media-rewind-button`                  | Y      | N       | N      | N    |
| `media-seek-back-button`               | N      | N       | N      | Y    |
| `media-seek-forward-button`            | N      | N       | N      | Y    |
| `media-toggle-closed-captions-button`  | N      | N       | Y      | N    |
| `media-slider`                         | N      | N       | Y      | Y    |
| `media-sliderthumb`                    | N      | N       | Y      | Y    |
| `media-volume-slider-container`        | N      | N       | Y      | N    |
| `media-volume-slider-mute-button`      | Y      | N       | N      | N    |
| `media-volume-slider`                  | N      | N       | Y      | N    |
| `media-volume-sliderthumb`             | N      | N       | Y      | N    |
| `media-controls-background`            | N      | N       | Y      | N    |
| `media-controls-dark-bar-background`   | Y      | N       | N      | N    |
| `media-controls-fullscreen-background` | N      | N       | Y      | N    |
| `media-controls-light-bar-background`  | Y      | N       | N      | N    |
| `media-current-time-display`           | N      | N       | Y      | N    |
| `media-time-remaining-display`         | N      | N       | Y      | N    |
| `menulist-text`                        | Y      | Y       | Y      | Y    |
| `menulist-textfield`                   | Y      | Y       | Y      | Y    |
| `meterbar`                             | N      | Y       | N      | N    |
| `number-input`                         | N      | Y       | N      | N    |
| `progress-bar-value`                   | N      | N       | Y      | Y    |
| `progressbar`                          | N      | Y       | N      | N    |
| `progressbar-vertical`                 | N      | Y       | N      | N    |
| `range`                                | N      | Y       | N      | N    |
| `range-thumb`                          | N      | Y       | N      | N    |
| `rating-level-indicator`               | Y      | N       | N      | N    |
| `relevancy-level-indicator`            | Y      | N       | N      | N    |
| `scale-horizontal`                     | N      | Y       | N      | N    |
| `scalethumbend`                        | N      | Y       | N      | N    |
| `scalethumb-horizontal`                | N      | Y       | N      | N    |
| `scalethumbstart`                      | N      | Y       | N      | N    |
| `scalethumbtick`                       | N      | Y       | N      | N    |
| `scalethumb-vertical`                  | N      | Y       | N      | N    |
| `scale-vertical`                       | N      | Y       | N      | N    |
| `scrollbarthumb-horizontal`            | N      | Y       | N      | N    |
| `scrollbarthumb-vertical`              | N      | Y       | N      | N    |
| `scrollbartrack-horizontal`            | N      | Y       | N      | N    |
| `scrollbartrack-vertical`              | N      | Y       | N      | N    |
| `searchfield-decoration`               | Y      | N       | N      | Y    |
| `searchfield-results-decoration`       | Y      | N       | Y      | Y    |
| `searchfield-results-button`           | Y      | N       | N      | Y    |
| `searchfield-cancel-button`            | Y      | N       | Y      | Y    |
| `snapshotted-plugin-overlay`           | Y      | N       | N      | N    |
| `sheet`                                | N/A    | N/A     | N/A    | N/A  |
| `slider-vertical`                      | N      | N       | Y      | Y    |
| `sliderthumb-horizontal`               | N      | N       | Y      | Y    |
| `sliderthumb-vertical`                 | N      | N       | Y      | Y    |
| `textfield-multiline`                  | N      | Y       | N      | N    |
| `-apple-pay`                           | Y      | N       | N      | N    |

</details>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Apply custom styling

The following example shows how to remove the default styling from a checkbox and select element, and apply custom styling.
The appearance of the checkbox is changed to a circle, and the select element shows how to remove the arrow indicating that the list can be expanded.

#### HTML

```html
<input type="checkbox" />
<input type="checkbox" checked />

<select>
  <option>default</option>
  <option>option 2</option>
</select>
<select class="none">
  <option>appearance: none</option>
  <option>option 2</option>
</select>
```

#### CSS

```css
input {
  appearance: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked {
  border-radius: 50%;
  background: green;
}

select {
  border: 1px solid black;
  font-size: 1em;
}

select.none {
  appearance: none;
}
```

#### Result

{{EmbedLiveSample("Apply_custom_styling", 1050, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
