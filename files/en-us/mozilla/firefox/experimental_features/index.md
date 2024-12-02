---
title: Experimental features in Firefox
slug: Mozilla/Firefox/Experimental_features
page-type: guide
---

{{FirefoxSidebar}}

This page lists Firefox's experimental and partially implemented features, including those for proposed or cutting-edge web platform standards, along with information on the builds in which they are present, whether or not they are activated "by default", and which _preference_ can be used to activate or deactivate them.
This allows you to test the features before they are released.

New features appear first in the [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) build, where they are often enabled by default.
They later propagate though to [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) and eventually to the release build.
After a feature is enabled by default in a release build, it is no longer considered experimental and should be removed from the topic.

Experimental features can be enabled or disabled using the [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (enter `about:config` in the Firefox address bar) by modifying the associated _preference_ listed below.

> [!NOTE]
> For editors - when adding features to these tables, please try to include a link to the relevant bug or bugs using `[Firefox bug <number>](https://bugzil.la/<number>)`.

## HTML

### Autocorrection of editable text elements

The HTML [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) attribute (and corresponding {{domxref("HTMLElement.autocorrect")}} property) allow autocompletion in editable text elements including: most kinds of text {{htmlelement("input")}} elements, {{htmlelement("textarea")}} elements, and elements that have the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set ([Firefox bug 1725806](https://bugzil.la/1725806)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>134</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>134</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>134</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>134</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.forms.autocorrect</code></td>
    </tr>
  </tbody>
</table>

### Layout for input type="search"

Layout for `input type="search"` has been updated. This causes a search field to have a clear icon once someone starts typing in it, to match other browser implementations. (See [Firefox bug 558594](https://bugzil.la/558594) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### Toggle password display

HTML password input elements ([`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password)) include an "eye" icon that can be toggled to display or obscure the password text ([Firefox bug 502258](https://bugzil.la/502258)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.forms.reveal-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### Plaintext-only contenteditable mode

The `plaintext-only` value of the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) global attribute indicates that the element is editable; rich text formatting is disabled and any formatting in pasted text is automatically stripped. (See [Firefox bug 1922723](https://bugzil.la/1922723) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.element.contenteditable.plaintext-only.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex boxes to display stray control characters

This feature renders control characters (Unicode category Cc) other than _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`), and _carriage return_ (`U+000D`) as a hex box when they are not expected. (See [Firefox bug 1099557](https://bugzil.la/1099557) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>43</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> or
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter property

The {{cssxref("initial-letter")}} CSS property is part of the [CSS Inline Layout](https://drafts.csswg.org/css-inline/) specification and allows you to specify how dropped, raised, and sunken initial letters are displayed. (See [Firefox bug 1223880](https://bugzil.la/1223880) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### `from` keyword for relative colors

The `from` keyword is now parsed as valid CSS syntax when the `layout.css.relative-color-syntax.enabled` preference is set to `true`.
Although this keyword currently has no effect, it will not produce syntax errors when used in valid places in CSS color functions, thereby supporting the ongoing work on [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors).
See [Firefox bug 1889133](https://bugzil.la/1889133) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### Single numbers as aspect ratio in media queries

Support for using a single {{cssxref("number")}} as a {{cssxref("ratio")}} when specifying the aspect ratio for a [media query](/en-US/docs/Web/CSS/CSS_media_queries). (See [Firefox bug 1565562](https://bugzil.la/1565562) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></td>
    </tr>
  </tbody>
</table>

### backdrop-filter property

The {{cssxref("backdrop-filter")}} property applies filter effects to the area behind an element. (See [Firefox bug 1178765](https://bugzil.la/1178765) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.backdrop-filter.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() function

The {{cssxref("fit-content_function", "fit-content()")}} function as it applies to {{cssxref("width")}} and other sizing properties. This function is already well-supported for CSS Grid Layout track sizing. (See [Firefox bug 1312588](https://bugzil.la/1312588) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### Scroll-driven animations

Earlier called "scroll-linked animations", a scroll-driven animation depends on the scroll position of a scrollbar instead of time or some other dimension.
The {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties (and the {{cssxref('scroll-timeline')}} shorthand property) allow you to specify that a particular scrollbar in a particular named container can be used as the source for a scroll-driven animation.
The scroll timeline can then be associated with an [animation](/en-US/docs/Web/CSS/CSS_animations) by setting the {{cssxref('animation-timeline')}} property to the name value defined using `scroll-timeline-name`.

When using the {{cssxref('scroll-timeline')}} shorthand property, the order of the property values must be {{cssxref('scroll-timeline-name')}} followed by {{cssxref('scroll-timeline-axis')}}. The longhand and shorthand properties are both available behind the preference.

You can alternatively use the [`scroll()`](/en-US/docs/Web/CSS/animation-timeline/scroll) functional notation with {{cssxref('animation-timeline')}} to indicate that a scrollbar axis in an ancestor element will be used for the timeline.

For more information, see [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), and [Firefox bug 1737918](https://bugzil.la/1737918).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>110</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>110</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>110</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>110</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### @scope at-rule

The [@scope](/en-US/docs/Web/CSS/@scope) [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) allows you to select specific child elements without having to overly increase the specificity of CSS selectors ([Firefox bug 1886441](https://bugzil.la/1886441)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.at-scope.enabled</code></td>
    </tr>
  </tbody>
</table>

### @font-face src feature checking

The `@font-face` [`src` descriptor](/en-US/docs/Web/CSS/@font-face/src) now supports the `tech()` function, allowing fallback of whether a font resource is downloaded based on whether the user-agent supports a particular font feature or technology.
See [Firefox bug 1715546](https://bugzil.la/1715546) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>105</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.font-tech.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji property

The CSS [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji) property allows you to set a default presentation style for displaying emojis.
See ([Firefox bug 1461589](https://bugzil.la/1461589)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>108</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>108</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>108</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>108</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.font-variant-emoji.enabled</code></td>
    </tr>
  </tbody>
</table>

### page-orientation descriptor

The **`page-orientation`** [CSS](/en-US/docs/Web/CSS) descriptor for the {{cssxref("@page")}} at-rule controls the rotation of a printed page. It handles the flow of content across pages when the orientation of a page is changed. This behavior differs from the [`size`](/en-US/docs/Web/CSS/@page/size) descriptor in that a user can define the direction in which to rotate the page.
See ([Firefox bug 1673987](https://bugzil.la/1673987)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>111</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>111</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>111</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.page-orientation.enabled</code></td>
    </tr>
  </tbody>
</table>

### prefers-reduced-transparency media feature

The CSS [`prefers-reduced-transparency`](/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) media feature lets you detect if a user has enabled the setting to minimize the amount of transparent or translucent layer effects on their device.
See ([Firefox bug 1736914](https://bugzil.la/1736914)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>113</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>113</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>113</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.prefers-reduced-transparency.enabled</code></td>
    </tr>
  </tbody>
</table>

### inverted-colors media feature

The CSS [`inverted-colors`](/en-US/docs/Web/CSS/@media/inverted-colors) media feature lets you detect if a user agent or the underlying operating system is inverting colors.
See ([Firefox bug 1794628](https://bugzil.la/1794628)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.inverted-colors.enabled</code></td>
    </tr>
  </tbody>
</table>

### Named view progress timelines property

The CSS [`view-timeline-name`](/en-US/docs/Web/CSS/view-timeline-name) property lets you give a name to particular element, identifying that its ancestor scroller element is the source of a view progress timeline.
The name can then be assigned to the `animation-timeline`, which then animates the associated element as it moves through the visible area of its ancestor scroller.
See ([Firefox bug 1737920](https://bugzil.la/1737920)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### Anonymous view progress timelines function

The CSS [`view()`](/en-US/docs/Web/CSS/animation-timeline/view) function lets you specify that the `animation-timeline` for an element is a view progress timeline, which will animate the element as it moves through the visible area of its ancestor scroller.
The function defines the axis of the parent element that supplies the timeline, along with the inset within the visible area at which the animation starts and begins.
See ([Firefox bug 1808410](https://bugzil.la/1808410)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>114</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.scroll-driven-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### zoom property

The non-standard CSS {{cssxref("zoom")}} property is enabled in the Nightly release and lets you magnify an element similar to the {{cssxref("transform")}} property, but it affects the layout size of the element.
See ([Firefox bug 1855763](https://bugzil.la/1855763) and [Firefox bug 390936](https://bugzil.la/390936)) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
      <code>layout.css.zoom.enabled</code>
    </td>
    </tr>
  </tbody>
</table>

To ensure compatibility with these changes, the [Vendor-prefixed transform properties](#vendor-prefixed_transform_properties) and the [Vendor-prefixed transition properties](#vendor-prefixed_transition_properties) are disabled in the Nightly release.
These changes are described in the following sections.

### text-wrap: balance & stable values

The [`text-wrap`](/en-US/docs/Web/CSS/text-wrap) CSS property values `balance` and `stable` allow the layout of short content to be wrapped in a balanced manner and for editable content to not reflow while the user is editing it, respectively.
(See [Firefox bug 1731541](https://bugzil.la/1731541) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.text-wrap-balance.enabled, layout.css.text-wrap-balance.limit, layout.css.text-wrap-balance-after-clamp.enabled</code></td>
    </tr>
  </tbody>
</table>

### Vendor-prefixed transform properties

The `-moz-` prefixed [CSS transform](/en-US/docs/Web/CSS/CSS_transforms) properties have been disabled in the Nightly release via the `layout.css.prefixes.transforms` preference being set to `false`. ([Firefox bug 1855763](https://bugzil.la/1855763)).
Specifically, the disabled properties are:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
      <code>layout.css.prefixes.transforms</code>
    </td>
    </tr>
  </tbody>
</table>

### Vendor-prefixed transition properties

The `-moz-` prefixed [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) properties have been disabled in the Nightly release via the `layout.css.prefixes.transitions` preference being set to `false`. ([Firefox bug 1855763](https://bugzil.la/1855763)).
Specifically, the disabled properties are:

- `-moz-transition`
- `-moz-transition-delay`
- `-moz-transition-duration`
- `-moz-transition-property`
- `-moz-transition-timing-function`

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>120</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>120</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
      <code>layout.css.prefixes.transitions</code>
    </td>
    </tr>
  </tbody>
</table>

### UA styles for `<h1>` nested in sectioning elements

The `<h1>` heading doesn't decrease in font size now when nested within [sectioning elements](/en-US/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, and `<section>`. The UA styles for `<h1>` nested within sectioning elements are no longer relevant since the outline algorithm [has been removed](https://github.com/whatwg/html/pull/7829) from the HTML specification. ([Firefox bug 1883896](https://bugzil.la/1883896)).

> [!NOTE]
> The preference for this feature works in reverse: it's set to `false` in the Nightly build, which removes the UA styling for headings nested in sectioning elements. It's set to `true` in all other channels, which retains the existing UA styling for the nested headings.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>125</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>125</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>125</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>125</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>layout.css.h1-in-section-ua-styles.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### `shape()` function

The CSS [`shape()`](/en-US/docs/Web/CSS/basic-shape/shape) function is a [`<basic-shape>`](/en-US/docs/Web/CSS/basic-shape) data type that enables you to define a shape in the {{cssxref("clip-path")}} and {{cssxref("offset-path")}} properties using one or more "shape commands". These commands are very similar to the [SVG path commands](/en-US/docs/Web/SVG/Attribute/d#path_commands). The `shape()` function is similar in some respects to the `{{cssxref("basic-shape/path","path()")}}` function, but unlike `path()`, which uses the [SVG path](/en-US/docs/Web/SVG/Element/path) syntax, `shape()` uses standard CSS syntax. This enables you to easily create and edit shapes and also allows the use of CSS math functions.
For more details, see [Firefox bug 1823463](https://bugzil.la/1823463) for the `shape()` function support in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) for the function's support in `offset-path`, and [Firefox bug 1884425](https://bugzil.la/1884425) for its interpolation support.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>126</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.basic-shape-shape.enabled</code></td>
    </tr>
  </tbody>
</table>

### `@starting-style` at-rule

The CSS [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule allows you to set the starting styles of an element for a CSS transition, when the element has no default initial style. This is particularly useful for elements that are hidden from view on the first paint such as [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) or ['dialog'](/en-US/docs/Web/HTML/Element/dialog). Does not yet support animating from `display: none`. For more details, see [Firefox bug 1834876](https://bugzil.la/1834876) and [Firefox bug 1834877](https://bugzil.la/1834877).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>127</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.starting-style-at-rules.enabled</code></td>
    </tr>
  </tbody>
</table>

### Symmetrical `letter-spacing`

The CSS {{cssxref("letter-spacing")}} property now splits the specified letter spacing evenly on both sides of each character. This is unlike the current behavior where spacing is added primarily to one side. This approach can improve text spacing, especially in mixed-directional text [Firefox bug 1891446](https://bugzil.la/1891446).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.letter-spacing.model</code></td>
    </tr>
  </tbody>
</table>

### `calc()` color channel support in relative colors

The CSS [`calc()`](/en-US/docs/Web/CSS/calc) function can now parse color channels in [relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions), allowing you to correctly calculate changes to colors in different color spaces or while using different functional notations [Firefox bug 1889561](https://bugzil.la/1889561).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>127</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>127</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.relative-color-syntax.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Anchor Positioning

The [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module defines a number of features that allow elements to be defined as anchor elements, and for other elements to be positioned relative to anchor elements.
This allows, for example, tooltips to be displayed alongside associated content as it scrolls through the viewport, moving as needed when it would overflow the viewport, and disappearing when the anchor moves offscreen.
The set of features are being progressively rolled out behind a preference ([Firefox bug 1838746](https://bugzil.la/1838746)).

The parts that have been implemented include:

- [`CSSPositionTryRule`](/en-US/docs/Web/API/CSSPositionTryRule) and [`CSSPositionTryDescriptors`](/en-US/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>131</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>131</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>131</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>131</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.anchor-positioning.enabled</code></td>
    </tr>
  </tbody>
</table>

### :has-slotted pseudo-class

The {{CSSXRef(":has-slotted")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is used to style elements in {{HTMLElement("template")}} that have content added to a {{HTMLElement("slot")}} element when rendering a [web component](/en-US/docs/Web/API/Web_components) ([Firefox bug 1921747](https://bugzil.la/1921747)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.has-slotted-selector.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

The SVGPathSeg APIs are being unshipped, and have been placed behind a preference.
This includes: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/en-US/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
(See [Firefox bug 1388931](https://bugzil.la/1388931) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version removed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.svg.pathSeg.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### JSON.parse with source

The [`JSON.parse` source text access proposal](https://github.com/tc39/proposal-json-parse-with-source) extends [`JSON.parse`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) behavior to provide features to mitigate issues around loss of precision when converting values such as large floats and date values between JavaScript values and JSON text. ([Firefox bug 1913085](https://bugzil.la/1913085), [Firefox bug 1925334](https://bugzil.la/1925334)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>javascript.options.experimental.json_parse_with_source</code></td>
    </tr>
  </tbody>
</table>

## APIs

### Cookie Store API

The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is a modern, {{jsxref("Promise")}}-based method of managing cookies that does not block the event loop and does not rely on {{domxref("Document")}} (it can therefore be made available to [service workers](/en-US/docs/Web/API/Service_Worker_API)). A subset of the Cookie Store API has been implemented ([Firefox bug 1800882](https://bugzil.la/1800882)). This includes:

- The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, but `partitioned` is not included in return values.
- The [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent) interface, excluding `partitioned` properties.
- The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) property.
- The [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) property.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.cookieStore.enabled</code></td>
    </tr>
  </tbody>
</table>

### CloseWatcher Interface

Built-in web components with "open" and "close" semantics, such as modal dialogs and popovers, can be closed using device-native mechanisms.
For example, on Android you can close a dialog using the back button.
The {{domxref("CloseWatcher")}} interface allows developers to implement UI components, such as custom sidebars, that can similarly be closed using native mechanisms.
([Firefox bug 1888729](https://bugzil.la/1888729)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>132</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>132</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>132</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.closewatcher.enabled</code></td>
    </tr>
  </tbody>
</table>

### Trusted Types API

The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) provides mechanisms to ensure that functions that can potentially be used as vectors for XSS attacks are only able to be called with data that has been validated or sanitized.

> [!NOTE]
> At the time of writing not enough of the API has been implemented for it to be effectively testable.
> This note will be removed once it is ready.

This subset of the API has been implemented:

- {{domxref("TrustedTypePolicyFactory")}}:
  - {{domxref("TrustedTypePolicyFactory/getAttributeType", "getAttributeType()")}} and {{domxref("TrustedTypePolicyFactory/getPropertyType", "getPropertyType()")}} ([Firefox bug 1917783](https://bugzil.la/1917783), [Firefox bug 1917784](https://bugzil.la/1917784)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>133</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.security.trusted_types.enabled</code></td>
    </tr>
  </tbody>
</table>

### Graphics: Canvas, WebGL, and WebGPU

#### Hit regions

Whether the mouse coordinates are within a particular area on the canvas is a common problem to solve. The hit region API allows you to define an area of your canvas and provides another possibility to expose interactive content on a canvas to accessibility tools.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL: Draft extensions

When this preference is enabled, any WebGL extensions currently in "draft" status which are being tested are enabled for use. Currently, there are no WebGL extensions being tested by Firefox.

#### WebGPU API

The [WebGPU API](/en-US/docs/Web/API/WebGPU_API) provides low-level support for performing computation and graphics rendering using the [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) of the user's device or computer. See [Firefox bug 1602129](https://bugzil.la/1602129) for our progress on this API.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>113</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### Reporting API support for CSP Violations

The [Reporting API](/en-US/docs/Web/API/Reporting_API) now has support for reporting [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violations.

{{domxref('Report')}} instances returned by the {{domxref('ReportingObserver')}} interface can now have a `type` value of `"csp-violation"` and a `body` property that contains an instance of the {{domxref('CSPViolationReportBody')}} interface.
This allows CSP violations to be reported within a web page.

CSP violation reports can also be sent to remote endpoints that are specified by name in the CSP {{CSP("report-to")}} directive — endpoints names and corresponding URLs must first be defined in the {{httpheader('Reporting-Endpoints')}} or {{httpheader('Report-To')}} HTTP response headers.
The report is a serialization of the {{domxref('Report')}} object described above, with a `body` property that is a serialization of an {{domxref('CSPViolationReportBody')}} instance.

This violation report replaces a similar CSP-specific mechanism for sending violation reports, which uses the CSP {{CSP("report-uri")}} directive to set the URL of the reporting endpoint, and has a [CSP-specific JSON violation report format](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
([Firefox bug 1391243](https://bugzil.la/1391243)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>130</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>130</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>130</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>130</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.reporting.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC and media

The following experimental features include those found in the [WebRTC API](/en-US/docs/Web/API/WebRTC_API), the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), the [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API), the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API), and the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API).

#### Asynchronous SourceBuffer add and remove

This adds the promise-based methods {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} and {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} for adding and removing media source buffers to the {{domxref("SourceBuffer")}} interface. See [Firefox bug 1280613](https://bugzil.la/1280613) and [Firefox bug 778617](https://bugzil.la/778617) for more information.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF compliance strictness

The `image.avif.compliance_strictness` preference can be used to control the _strictness_ applied when processing [AVIF](/en-US/docs/Web/Media/Formats/Image_types#avif_image) images.
This allows Firefox users to display images that render on some other browsers, even if they are not strictly compliant.

Permitted values are:

- `0`: Accept images with specification violations in both recommendations ("should" language) and requirements ("shall" language), provided they can be safely or unambiguously interpreted.
- `1` (default): Reject violations of requirements, but allow violations of recommendations.
- `2`: Strict. Reject any violations in requirements or recommendations.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### JPEG XL support

Firefox supports [JPEG XL](https://jpeg.org/jpegxl/) images if this feature is enabled.
See [Firefox bug 1539075](https://bugzil.la/1539075) for more details.

Note that, as shown below, the feature is only available on Nightly builds (irrespective of whether the preference is set).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

### OpenFont COLRv1 fonts

This feature provides support for the [OpenFont COLRv1 font specification](https://learn.microsoft.com/en-us/typography/opentype/spec/).
This enables compression-friendly color vector fonts with gradients, compositing and blending to be loaded using the CSS [`@font-face`](/en-US/docs/Web/CSS/@font-face) rule, or the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API).
See [Firefox bug 1740530](https://bugzil.la/1740530) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>105</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>gfx.font_rendering.colr_v1.enabled</code></td>
    </tr>
  </tbody>
</table>

### CSS Custom Highlight API

The [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) provides a mechanism for styling arbitrary text ranges in a document (generalizing the behavior of other highlight pseudo-elements such as {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, and {{cssxref('::target-text')}}).
The ranges are defined in JavaScript using [`Range`](/en-US/docs/Web/API/Range) instances grouped in a [`Highlight`](/en-US/docs/Web/API/Highlight), and then registered with a name using [`HighlightRegistry`](/en-US/docs/Web/API/HighlightRegistry).
The CSS [`::highlight`](/en-US/docs/Web/CSS/::highlight) pseudo-element is used to apply styles to a registered highlight.
See [Firefox bug 1703961](https://bugzil.la/1703961) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>117</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>117</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.customHighlightAPI.enabled</code></td>
    </tr>
  </tbody>
</table>

### Service Workers

#### Preloading of service worker resources on navigation

The {{domxref("NavigationPreloadManager")}} interface can be used to enable preloading of resources when navigating to a page.
Preloading occurs in parallel with worker bootup, reducing the total time from start of navigation until resources are fetched.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>99</td>
      <td>yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API (Disabled)

The deprecated [WebVR API](/en-US/docs/Web/API/WebVR_API) is on the path for removal.
It is disabled by default on all builds [Firefox bug 1750902](https://bugzil.la/1750902).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version removed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### Selections crossing shadow DOM boundary

The {{domxref("Selection.getComposedRanges()")}} method can be used to get an array of {{domxref("StaticRange")}} objects representing the current selected range or ranges.
Unlike {{domxref("Selection.getRangeAt()")}}, this method can return ranges with anchor or focus nodes inside a shadow DOM, but only if it is passed the {{domxref("ShadowRoot")}} objects that contain those nodes.
Otherwise, it will return a range that has been re-scoped to include the host node of the shadow root that contains the node.
The `Selection` methods {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, and {{domxref("Selection.extend()","extend()")}} have also been modified to accept nodes inside a shadow root.

User selection via mouse, keyboard, and so on, can start and end anywhere in the document, including inside any open or closed shadow trees.
([Firefox bug 1867058](https://bugzil.la/1867058)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>126</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>126</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.shadowdom.selection_across_boundary.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement method: setSinkId()

{{domxref("HTMLMediaElement.setSinkId()")}} allows you to set the sink ID of an audio output device on an {{domxref("HTMLMediaElement")}}, thereby changing where the audio is being output. See [Firefox bug 934425](https://bugzil.la/934425) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement properties: audioTracks and videoTracks

Enabling this feature adds the {{domxref("HTMLMediaElement.audioTracks")}} and {{domxref("HTMLMediaElement.videoTracks")}} properties to all HTML media elements. However, because Firefox doesn't currently support multiple audio and video tracks, the most common use cases for these properties don't work, so they're both disabled by default. See [Firefox bug 1057233](https://bugzil.la/1057233) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils methods: convertPointFromNode(), convertRectFromNode(), and convertQuadFromNode()

The `GeometryUtils` methods `convertPointFromNode()`, `convertRectFromNode()`, and `convertQuadFromNode()` map the given point, rectangle, or quadruple from the {{domxref("Node")}} on which they're called to another node. (See [Firefox bug 918189](https://bugzil.la/918189) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils method: getBoxQuads()

The `GeometryUtils` method `getBoxQuads()` returns the CSS boxes for a {{domxref("Node")}} relative to any other node or viewport. (See [Firefox bug 917755](https://bugzil.la/917755) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

### Payment Request API

#### Primary payment handling

The [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) provides support for handling web-based payments within web content or apps. Due to a bug that came up during testing of the user interface, we have decided to postpone shipping this API while discussions over potential changes to the API are held. Work is ongoing. (See [Firefox bug 1318984](https://bugzil.la/1318984) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> and<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

The [Web Share API](/en-US/docs/Web/API/Web_Share_API) allows sharing of files, URLs and other data from a site.
This feature is enabled on Android in all builds, but behind a preference on Desktop (unless specified below).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version changed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>71</td>
      <td>No (default). Yes (Windows from version 92)</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>71</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>71</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>71</td>
      <td>No (Desktop). Yes (Android).</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### Screen Orientation API

#### ScreenOrientation.lock()

The {{domxref("ScreenOrientation.lock()")}} method allows a device to be locked to a particular orientation, if supported by the device and allowed by browser pre-lock requirements.
Typically locking the orientation is only allowed on mobile devices when the document is being displayed full screen.
See [Firefox bug 1697647](https://bugzil.la/1697647) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version changed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>111</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

### Prioritized Task Scheduling API

The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they defined in a website developer's code, or in third party libraries and frameworks.

This is enabled on Firefox Nightly (only) from Firefox 101.
No preference is provided to allow it to be enabled in other releases.

### Notifications API

Notifications have the [`requireInteraction`](/en-US/docs/Web/API/Notification/requireInteraction) property set to true by default on Windows systems and in the Nightly release ([Firefox bug 1794475](https://bugzil.la/1794475)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version changed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>117</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>117</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>117</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>117</td>
      <td>Windows only</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webnotifications.requireinteraction.enabled</code></td>
    </tr>
  </tbody>
</table>

## Security and privacy

### Block plain text requests from Flash on encrypted pages

In order to help mitigate man-in-the-middle (MitM) attacks caused by Flash content on encrypted pages, a preference has been added to treat `OBJECT_SUBREQUEST`s as active content. See [Firefox bug 1190623](https://bugzil.la/1190623) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### Insecure page labeling

These two preferences add a "Not secure" text label in the address bar next to the traditional lock icon when a page is loaded insecurely (that is, using {{Glossary("HTTP")}} rather than {{Glossary("HTTPS")}}). See [Firefox bug 1335970](https://bugzil.la/1335970) for more details.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>security.insecure_connection_text.enabled</code> for normal
        browsing mode;
        <code>security.insecure_connection_text.pbmode.enabled</code> for
        private browsing mode
      </td>
    </tr>
  </tbody>
</table>

### Permissions Policy / Feature policy

[Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) allows web developers to selectively enable, disable, and modify the behavior of certain features and APIs in the browser. It is similar to CSP but controls features instead of security behavior.
This is implemented in Firefox as **Feature Policy**, the name used in an earlier version of the specification.

Note that supported policies can be set through the [`allow`](/en-US/docs/Web/HTML/Element/iframe#allow) attribute on `<iframe>` elements even if the user preference is not set.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Permissions API support for microphone and camera

The [Permissions API](/en-US/docs/Web/API/Permissions_API) permissions `microphone` and `camera` are supported, allowing a web page to {{domxref("Permissions.query()", "query","", "nocode")}} whether access to the corresponding hardware has been granted, denied, or still requires user approval ([Firefox bug 1609427](https://bugzil.la/1609427), [Firefox bug 1915222](https://bugzil.la/1915222)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>131</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>131</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>131</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>131</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>permissions.media.query.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data "cache" directive

The [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Headers/Clear-Site-Data) HTTP response header `cache` directive clears the browser cache for the requesting website.

> [!NOTE]
> This was originally enabled by default, but put behind a preference in version 94 ([Firefox bug 1729291](https://bugzil.la/1729291)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) provides an alternative to user tracking for ad attribution using the new `navigator.privateAttribution` object with `saveImpression()` and `measureConversion()` methods. Read more about PPA [in the explainer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). This experiment can be enabled for websites via [origin trial](https://wiki.mozilla.org/Origin_Trials) or in the browser by setting the preference to `1`. ([Firefox bug 1900929](https://bugzil.la/1900929)).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>dom.origin-trials.private-attribution.state</code>
      </td>
    </tr>
  </tbody>
</table>

## HTTP

### Accept header with MIME type image/jxl

The HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header in [default requests and image requests](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) can be configured via a preference to indicate support for the `image/jxl` MIME type.

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>128</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>image.jxl.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### SameSite=Lax by default

[`SameSite` cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) have a default value of `Lax`.
With this setting, cookies are only sent when a user is navigating to the origin site, not for cross-site subrequests to load images or frames into a third party site and so on.
For more details see [Firefox bug 1617609](https://bugzil.la/1617609).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>69</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>69</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>69</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>69</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>network.cookie.sameSite.laxByDefault</code></td>
    </tr>
  </tbody>
</table>

### Access-Control-Allow-Headers wildcard does not cover Authorization

The [`Access-Control-Allow-Headers`](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) is a response header to a [CORS preflight request](/en-US/docs/Glossary/Preflight_request), that indicates which request headers may be included in the final request.
The response directive can contain a wildcard (`*`), which indicates that the final request may include all headers except the `Authorization` header.

By default, Firefox includes the `Authorization` header in the final request after receiving a response with `Access-Control-Allow-Headers: *`.
Set the preference to `false` to ensure Firefox does not include the `Authorization` header.
For more details see [Firefox bug 1687364](https://bugzil.la/1687364).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>115</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>115</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>115</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>115</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>network.cors_preflight.authorization_covered_by_wildcard</code></td>
    </tr>
  </tbody>
</table>

## Developer tools

Mozilla's developer tools are constantly evolving. We experiment with new ideas, add new features, and test them on the Nightly and Developer Edition channels before letting them go through to beta and release. The features below are the current crop of experimental developer tool features.

### Execution context selector

This feature displays a button on the console's command line that lets you change the context in which the expression you enter will be executed. (See [Firefox bug 1605154](https://bugzil.la/1605154) and [Firefox bug 1605153](https://bugzil.la/1605153) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### Server-sent events in Network Monitor

The Network Monitor displays information for [server-sent](/en-US/docs/Web/API/Server-sent_events) events. (See [Firefox bug 1405706](https://bugzil.la/1405706) for more details.)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>80</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>80</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>80</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>80</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS browser compatibility tooltips

The CSS Rules View can display browser compatibility tooltips next to any CSS properties that have known issues. For more information see: [Examine and edit HTML > Browser Compat Warnings](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings).

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </td>
    </tr>
  </tbody>
</table>

## See also

- [Firefox developer release notes](/en-US/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
