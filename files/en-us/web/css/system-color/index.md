---
title: <system-color>
slug: Web/CSS/system-color
page-type: css-type
browser-compat: css.types.color.system-color
---

{{CSSRef}}

The **`<system-color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) usually reflects the default color choices used for the different parts of a web page.

However, user agents can provide an accessibility feature called _forced colors mode_, in which colors are restricted into a user- and user agent-defined palette, overriding the author's choice of colors in certain properties. In forced colors mode, `<system-color>` exposes the chosen colors, so that the rest of the page can integrate with them. An example of forced colors mode is [high contrast mode on Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

In forced colors mode, authors should use colors from the `<system-color>` type for all properties that are _not_ in the set of properties whose colors are overridden. This ensures that the page consistently uses the same color palette across all properties.

Authors can detect forced colors mode using the [`forced-colors`](/en-US/docs/Web/CSS/@media/forced-colors) media feature.

A `<system-color>` value can be used anywhere a [`<color>`](/en-US/docs/Web/CSS/color_value) can be used.

## Syntax

Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

Depending on your settings, the sample colors displayed in the table may change. You can also view this page with different browsers, operating systems, and system settings, to check the differences.

<table>
  <thead>
    <tr>
      <th>Keyword</th>
      <th>Description</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AccentColor</code></td>
      <td>Background of accented user interface controls.</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>Text of accented user interface controls.</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>Text of active links.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Base border color of controls.</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>Background color of controls.</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>Text color of controls.</td>
      <td style="background-color: ButtonText;"></td>
    </tr>
    <tr>
      <td><code>Canvas</code></td>
      <td>Background of application content or documents.</td>
      <td style="background-color: Canvas;"></td>
    </tr>
    <tr>
      <td><code>CanvasText</code></td>
      <td>Text color in application content or documents.</td>
      <td style="background-color: CanvasText;"></td>
    </tr>
    <tr>
      <td><code>Field</code></td>
      <td>Background of input fields.</td>
      <td style="background-color: Field;"></td>
    </tr>
    <tr>
      <td><code>FieldText</code></td>
      <td>Text in input fields.</td>
      <td style="background-color: FieldText;"></td>
    </tr>
    <tr>
      <td><code>GrayText</code></td>
      <td>Text color for disabled items (for example, a disabled control).</td>
      <td style="background-color: GrayText;"></td>
    </tr>
    <tr>
      <td><code>Highlight</code></td>
      <td>Background of selected items.</td>
      <td style="background-color: Highlight;"></td>
    </tr>
    <tr>
      <td><code>HighlightText</code></td>
      <td>Text color of selected items.</td>
      <td style="background-color: HighlightText;"></td>
    </tr>
    <tr>
      <td><code>LinkText</code></td>
      <td>Text of non-active, non-visited links.</td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><code>Mark</code></td>
      <td>Background of text that has been specially marked (such as by the HTML <code>mark</code> element).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Text that has been specially marked (such as by the HTML <code>mark</code> element).</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>Background of selected items, for example, a selected checkbox.</td>
      <td style="background-color: SelectedItem;"></td>
    </tr>
    <tr>
      <td><code>SelectedItemText</code></td>
      <td>Text of selected items.</td>
      <td style="background-color: SelectedItemText;"></td>
    </tr>
    <tr>
      <td><code>VisitedText</code></td>
      <td>Text of visited links.</td>
      <td style="background-color: VisitedText;"></td>
    </tr>
  </tbody>
</table>

### Deprecated system color keywords

The following keywords were defined in earlier versions of the CSS Color Module. They are now deprecated for use on public web pages.

<table>
  <thead>
    <tr>
      <th>Keyword</th>
      <th>Description</th>
      <th>Replacement</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ActiveBorder</code></td>
      <td>Active window border</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>Active window caption. Should be used with <code>CaptionText</code> as foreground color.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Background color of multiple document interface.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><code>Background</code></td>
      <td>Desktop background.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><code>ButtonHighlight</code></td>
      <td>The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Text in caption, size box, and scrollbar arrow box. Should be used with the <code>ActiveCaption</code> background color.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><code>InactiveBorder</code></td>
      <td>Inactive window border.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaption</code></td>
      <td>Inactive window caption. Should be used with the <code>InactiveCaptionText</code> foreground color.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Color of text in an inactive caption. Should be used with the <code>InactiveCaption</code> background color.</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>Background color for tooltip controls. Should be used with the <code>InfoText</code> foreground color.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>Text color for tooltip controls. Should be used with the <code>InfoBackground</code> background color.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>Menu background. Should be used with the <code>MenuText</code> or <code>-moz-MenuBarText</code> foreground color.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>Text in menus. Should be used with the <code>Menu</code> background color.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>Background color of scroll bars.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the <code>ButtonText</code> foreground color.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Window background. Should be used with the <code>WindowText</code> foreground color.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Window;"></td>
    </tr>
    <tr>
      <td><code>WindowFrame</code></td>
      <td>Window frame.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: WindowFrame;"></td>
    </tr>
    <tr>
      <td><code>WindowText</code></td>
      <td>Text in windows. Should be used with the <code>Window</code> background color.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Examples

### Using system colors

In this example we have a button that normally gets its contrast using the {{cssxref("box-shadow")}} property. In forced colors mode, `box-shadow` is forced to `none`, so the example uses the `forced-colors` media feature to ensure there is a border of the appropriate color (`ButtonBorder` in this case).

#### HTML

```html
<button class="button">Press me!</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow
    is forced to 'none' in forced-colors mode */
    border: 2px ButtonBorder solid;
  }
}
```

#### Result

{{EmbedLiveSample("Using system colors")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value): the data type these keywords belong to
