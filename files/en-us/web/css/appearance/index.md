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

/* <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;
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

The following values may be operational on historical browser versions using **`-moz-appearance`** or **`-webkit-appearance`** prefix, but not on the standard **`appearance`** property.

<details>
<summary>Non-standard values</summary>

- Chrome, Edge and Safari entries below indicate release version support for values used with the `-webkit-appearance` vendor-prefix property.
- Firefox entries indicate support using `-moz-appearance`.
- Values with an asterisk (\*) have clear intents for removal.

| Value                                  | Safari | Firefox | Chrome   | Edge  |
| -------------------------------------- | ------ | ------- | -------- | ----- |
| `attachment`                           | <=13.1 |         |          |       |
| `borderless-attachment`                | <=13.1 |         |          |       |
| `button-bevel`                         | <=13.1 | <75     |          | <80   |
| `caps-lock-indicator`                  | <=13.1 |         |          | <80   |
| `caret`                                | <=13.1 | <75     | <=73     | <80   |
| `checkbox-container`                   |        | <75     |          |       |
| `checkbox-label`                       |        | <75     |          |       |
| `checkmenuitem`                        |        | <75     |          |       |
| `color-well`                           | <=13.1 |         |          |       |
| `continuous-capacity-level-indicator`  | <=13.1 |         |          |       |
| `default-button`                       | <=13.1 |         |          | <80   |
| `discrete-capacity-level-indicator`    | <=13.1 |         |          |       |
| `inner-spin-button`                    | <=13.1 | <75     | <=118 \* | <=119 |
| `image-controls-button`                | <=13.1 |         |          |       |
| `list-button`                          | <=13.1 |         |          |       |
| `listitem`                             | <=13.1 | <75     | <=73     | <80   |
| `media-enter-fullscreen-button`        | <=13.1 |         | <=73     |       |
| `media-exit-fullscreen-button`         | <=13.1 |         | <=73     |       |
| `media-fullscreen-volume-slider`       | <=13.1 |         |          |       |
| `media-fullscreen-volume-slider-thumb` | <=13.1 |         |          |       |
| `media-mute-button`                    | <=13.1 |         |          | <80   |
| `media-play-button`                    | <=13.1 |         |          | <80   |
| `media-overlay-play-button`            | <=13.1 |         | <=73     |       |
| `media-return-to-realtime-button`      | <=13.1 |         |          |       |
| `media-rewind-button`                  | <=13.1 |         |          |       |
| `media-seek-back-button`               | <=13.1 |         | <73      |       |
| `media-seek-forward-button`            | <=13.1 |         | <73      |       |
| `media-toggle-closed-captions-button`  | <=13.1 |         | <=73     |       |
| `media-slider`                         | <=13.1 |         | <=117    | <=80  |
| `media-sliderthumb`                    | <=13.1 |         | <=117    | <=80  |
| `media-volume-slider-container`        | <=13.1 |         | <=73     |       |
| `media-volume-slider-mute-button`      | <=13.1 |         |          |       |
| `media-volume-slider`                  | <=13.1 |         | <=117    | <=80  |
| `media-volume-sliderthumb`             | <=13.1 |         | <=117    | <=80  |
| `media-controls-background`            | <=13.1 |         | <=73     |       |
| `media-controls-dark-bar-background`   | <=13.1 |         |          |       |
| `media-controls-fullscreen-background` | <=13.1 |         | <=73     |       |
| `media-controls-light-bar-background`  | <=13.1 |         |          |       |
| `media-current-time-display`           |        |         | <=73     |       |
| `media-time-remaining-display`         | <=13.1 |         | <=73     |       |
| `menulist-text`                        | <=13.1 | <75     | <=73     | <80   |
| `menulist-textfield`                   | <=13.1 | <75     | <=73     | <80   |
| `meterbar`                             |        | <=100   |          |       |
| `number-input`                         |        | <=75    |          |       |
| `progress-bar-value`                   | <=13.1 |         | <=73     |       |
| `progressbar`                          |        | <=100   |          |       |
| `progressbar-vertical`                 |        | <=75    |          |       |
| `range`                                |        | <=75    |          |       |
| `range-thumb`                          |        | <=75    |          |       |
| `rating-level-indicator`               | <=13.1 |         |          |       |
| `relevancy-level-indicator`            | <=13.1 |         |          |       |
| `scale-horizontal`                     |        | <=75    |          |       |
| `scalethumbend`                        |        | <=75    |          |       |
| `scalethumb-horizontal`                |        | <=75    |          |       |
| `scalethumbstart`                      |        | <=75    |          |       |
| `scalethumbtick`                       |        | <=75    |          |       |
| `scalethumb-vertical`                  |        | <=75    |          |       |
| `scale-vertical`                       |        | <=75    |          |       |
| `scrollbarthumb-horizontal`            |        | <=75    |          |       |
| `scrollbarthumb-vertical`              |        | <=75    |          |       |
| `scrollbartrack-horizontal`            |        | <=75    |          |       |
| `scrollbartrack-vertical`              |        | <=75    |          |       |
| `searchfield-decoration`               | <=13.1 |         |          | <80   |
| `searchfield-results-decoration`       | <=13.1 | <75     | <73      | <80   |
| `searchfield-results-button`           | <=13.1 |         |          | <80   |
| `searchfield-cancel-button`            | <=13.1 | <75     | <=118 \* | <=119 |
| `snapshotted-plugin-overlay`           | <=13.1 |         |          |       |
| `sheet`                                |        |         |          |       |
| `slider-vertical`                      |        |         | <=118 \* | <=119 |
| `sliderthumb-horizontal`               |        |         | <=117    | <=80  |
| `sliderthumb-vertical`                 |        |         | <=117    | <=80  |
| `textfield-multiline`                  |        | <=100   |          |       |
| `-apple-pay-button`                    | <=13.1 |         |          |       |

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
