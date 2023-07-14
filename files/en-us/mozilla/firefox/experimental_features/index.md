---
title: Experimental features in Firefox
slug: Mozilla/Firefox/Experimental_features
---

{{FirefoxSidebar}}

This page lists Firefox's experimental and partially implemented features, including those for proposed or cutting-edge web platform standards, along with information on the builds in which they are present, whether or not they are activated "by default", and which _preference_ can be used to activate or deactivate them.
This allows you to test the features before they are released.

New features appear first in the [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) build, where they are often enabled by default.
They later propagate though to [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) and eventually to the release build.
After a feature is enabled by default in a release build, it is no longer considered experimental and should be removed from the topic.

Experimental features can be enabled or disabled using the [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (enter `about:config` in the Firefox address bar) by modifying the associated _preference_ listed below.

> **Note:** For editors - when adding features to these tables, please try to include a link to the relevant bug or bugs using `[Firefox bug <number>](https://bugzil.la/<number>)`.

## HTML

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
      <td colspan="2"><code>layout.forms.input-type-show-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

### Reflecting ARIA attributes

[ARIA](/en-US/docs/Web/Accessibility/ARIA) reflection is enabled for non-IDREF attributes which allows authors to get and set ARIA attributes on DOM elements directly via JavaScript APIs, rather than by using `setAttribute` and `getAttribute`, (see [Firefox bug 1824980](https://bugzil.la/1824980) for more details.)

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
      <td>Yes</td>
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
      <td colspan="2"><code>accessibility.ARIAReflection.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### Hex boxes to display stray control characters

This feature renders control characters (Unicode category Cc) other than _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`), and _carriage return_ (`U+000D`) as a hexbox when they are not expected. (See [Firefox bug 1099557](https://bugzil.la/1099557) for more details.)

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

### content-visibility: auto value

The [`content-visibility`](/en-US/docs/Web/CSS/content-visibility) CSS property value `auto` allows content to skip rendering if it is not [relevant to the user](/en-US/docs/Web/CSS/CSS_containment#relevant_to_the_user).
(See [Firefox bug 1798485](https://bugzil.la/1798485) for more details.)

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
      <td>109</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>109</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>109</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.content-visibility.enabled</code></td>
    </tr>
  </tbody>
</table>

Note that the related {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event and associated {{domxref("ContentVisibilityAutoStateChangeEvent")}} interface were added in version 110, and are gated by the same preference.
These can be used by application code to monitor visibility changes and stop processes related to rendering the element when the user agent is [skipping its contents](/en-US/docs/Web/CSS/CSS_containment#skips_its_contents).
(See [Firefox bug 1791759](https://bugzil.la/1791759) for more details.)

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

### Masonry grid layout

Adds support for a [masonry-style layout](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) based on grid layout where one axis has a masonry layout and the other has a normal grid layout. This allows developers to easily create gallery style layouts like on Pinterest. See [Firefox bug 1607954](https://bugzil.la/1607954) for more details.

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
      <td>77</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>layout.css.grid-template-masonry-value.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### math-style property

The {{cssxref("math-style")}} property indicates whether MathML equations should render with normal or compact height. (See [Firefox bug 1665975](https://bugzil.la/1665975) for more details.)

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
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.math-style.enabled</code></td>
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

### :has() pseudo-class

The [`:has()`](/en-US/docs/Web/CSS/:has) pseudo-class selects elements that contain the selectors passed as parameters.
(See [Firefox bug 1771896](https://bugzil.la/1771896) for more details.)

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
      <td>103</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>103</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>103</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>103</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.has-selector.enabled</code></td>
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

### round() math function

The CSS [`round()`](/en-US/docs/Web/CSS/round) function is a math function that rounds a number (or the result of an expression) based on a selected rounding strategy.
See [Firefox bug 1764850](https://bugzil.la/1764850) for more details.

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
      <td colspan="2"><code>layout.css.round.enabled</code></td>
    </tr>
  </tbody>
</table>

### font-variant-emoji

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

### page-orientation

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

### offset-position property

The CSS {{cssxref("offset-position")}} property defines the initial position of an element on a path. A new keyword called `normal` has been added to the syntax of the property. When using this keyword, the initial starting position of an element on an {{cssxref("offset-path")}} depends on the CSS function used – {{cssxref("path")}} or {{cssxref("ray")}} – to specify the value of the `offset-path` property. For more information, see {{cssxref("offset-position")}}. See ([Firefox bug 1559232](https://bugzil.la/1559232)) for more details.

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
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>115</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>115</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.motion-path-offset-position.enabled</code></td>
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

### Array grouping methods

The {{jsxref("Array.prototype.group()")}} and {{jsxref("Array.prototype.groupToMap()")}} methods are used to group the elements of an array using a string or value, respectively, returned by a test function.
The `groupBy` method should be used when strings can be used to represent element groups, while `groupByToMap()` should be used in cases where it makes sense to use a value as the key.
(See [Firefox bug 1739648](https://bugzil.la/1739648) for more details.)

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
      <td>Yes</td>
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
      <td colspan="2">None</td>
    </tr>
  </tbody>
</table>

### String isWellFormed() and toWellFormed() methods

Strings in JavaScript are represented by sequences of unsigned 16-bit integers, and it's possible to have valid string values that are not well-formed Unicode text.
The {{jsxref("String.prototype.isWellFormed()")}} and {{jsxref("String.prototype.toWellFormed()")}} methods are used to check if a string is well-formed Unicode text and to convert a string to well-formed Unicode text, respectively.
See [tc39/proposal-is-usv-string](https://github.com/tc39/proposal-is-usv-string) and [Firefox bug 1825005](https://bugzil.la/1825005) for more details.

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
      <td>115</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>javascript.options.experimental.well_formed_unicode_strings</code></td>
    </tr>
  </tbody>
</table>

## APIs

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

#### OpenFont COLRv1 fonts

This feature provides support for the [OpenFont COLRv1 font specification](https://docs.microsoft.com/en-us/typography/opentype/spec/).
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

#### CSS Properties and Values API

The [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API) allows developers to register custom CSS properties through JavaScript via [`registerProperty()`](/en-US/docs/Web/API/CSS/registerProperty_static) or in CSS using the [`@property`](/en-US/docs/Web/CSS/@property) at-rule.
Registering properties using these two methods allows for type checking, default values, and properties that do or do not inherit values from their parent elements.
See [Firefox bug 1840480](https://bugzil.la/1840480) for more details.

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
      <td>116</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>116</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>116</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>116</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.property-and-value-api.enabled</code></td>
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

#### Popover API

Firefox now supports the [Popover API](/en-US/docs/Web/API/Popover_API).

The following Web APIs are now implemented:

- [`HTMLButtonElement.popoverTargetElement`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetElement) and [`HTMLButtonElement.popoverTargetAction`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetAction).
- [`HTMLInputElement.popoverTargetElement`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetElement) and [`HTMLInputElement.popoverTargetAction`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetAction).
- [`HTMLElement.popover`](/en-US/docs/Web/API/HTMLElement/popover), [`HTMLElement.hidePopover()`](/en-US/docs/Web/API/HTMLElement/hidePopover), [`HTMLElement.showPopover()`](/en-US/docs/Web/API/HTMLElement/showPopover), and [`HTMLElement.togglePopover()`](/en-US/docs/Web/API/HTMLElement/togglePopover).
- `HTMLElement` [`beforetoggle` event](/en-US/docs/Web/API/HTMLElement/beforetoggle_event), `HTMLElement` [`toggle_event` event](/en-US/docs/Web/API/HTMLElement/toggle_event), and [`ToggleEvent`](/en-US/docs/Web/API/ToggleEvent).

CSS updates include:

- [`:popover-open`](/en-US/docs/Web/CSS/:popover-open)
- [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) has been extended to support popovers

The following HTML global attributes are supported:

- [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget)
- [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction)

See [Firefox bug 934425](https://bugzil.la/934425) for more details.

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
      <td colspan="2"><code>dom.element.popover.enabled</code></td>
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

#### ClipboardItem

The {{domxref('ClipboardItem')}} interface of the {{domxref('Clipboard API')}} is now supported and {{domxref('Clipboard.write()')}} accepts a sequence of {{domxref('ClipboardItem','clipboard items')}} instead of the previously implemented {{domxref('DataTransfer','dataTransfer object')}}. It is available behind the pref `dom.events.asyncClipboard.clipboardItem` which was previously `dom.events.asyncClipboard.dataTransfer`. See [Firefox bug 1619947](https://bugzil.la/1619947) for more details.

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
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.events.asyncClipboard.clipboardItem</code></td>
    </tr>
  </tbody>
</table>

#### ClipboardRead

The [Clipboard.read()](/en-US/docs/Web/API/Clipboard/read) method of the {{domxref('Clipboard')}} interface is also now available under the `dom.events.asyncClipboard.read` preference, when previously it was under `dom.events.asyncClipboard.clipboardItem`. (See [Firefox bug 1701512](https://bugzil.la/1701512) for more details.)

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
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.events.asyncClipboard.read</code></td>
    </tr>
  </tbody>
</table>

#### HTML Sanitizer API

The {{domxref('HTML Sanitizer API')}} allow developers to take untrusted strings of HTML and sanitize them for safe insertion into a document's DOM. Default elements within each configuration property (those to be sanitized) are still under consideration. Due to this the config parameter has not been implemented (see {{domxref('Sanitizer.sanitizer()', 'the constructor')}} for more information). See [Firefox bug 1673309](https://bugzil.la/1673309) for more details.

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
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.security.sanitizer.enabled</code></td>
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

#### ElementInternals: Form associated custom element methods and properties

New {{domxref("ElementInternals")}} properties and methods that allow custom elements to interact with a form:

- The {{domxref("ElementInternals.form","form")}} property gets the form associated with the element.
- The {{domxref("ElementInternals.labels","labels")}} property gets the list of labels associated with the element.
- The {{domxref("ElementInternals.willValidate", "willValidate")}} property checks if a custom form element will be validated.
- The {{domxref("ElementInternals.setFormValue()","setFormValue()")}} method sets the sanitized value and user-entered data, if needed.

See these bugs for details: [Firefox bug 1556362](https://bugzil.la/1556362), [Firefox bug 1556373](https://bugzil.la/1556373), [Firefox bug 1556365](https://bugzil.la/1556365), [Firefox bug 1556449](https://bugzil.la/1556449).

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
      <td>95</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webcomponents.formAssociatedCustomElement.enabled</code></td>
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
      <td>No.</td>
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

### Upgrading mixed display content

When enabled, this preference causes Firefox to automatically upgrade requests for media content from HTTP to HTTPS on secure pages. The intent is to prevent mixed-content conditions in which some content is loaded securely while other content is insecure. If the upgrade fails (because the media's host doesn't support HTTPS), the media is not loaded. (See [Firefox bug 1435733](https://bugzil.la/1435733) for more details.)

This also changes the console warning; if the upgrade succeeds, the message indicates that the request was upgraded, instead of showing a warning.

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
      <td>84</td>
      <td>Yes</td>
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
        <code>security.mixed_content.upgrade_display_content</code>
      </td>
    </tr>
  </tbody>
</table>

### Permissions Policy / Feature policy

[Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) allows web developers to selectively enable, disable, and modify the behavior of certain features and APIs in the browser. It is similar to CSP but controls features instead of security behavior.
Note that this is implemented in Firefox as **Feature Policy**, the name used in an earlier version of the specification.

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

### Clear-Site-Data "cache" directive

The [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Headers/Clear-Site-Data) HTTP response header `cache` directive clears the browser cache for the requesting website.

> **Note:** This was originally enabled by default, but put behind a preference in version 94 ([Firefox bug 1729291](https://bugzil.la/1729291)).

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

## HTTP

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

### HTTP Status 103

The [`103 Early Hints`](/en-US/docs/Web/HTTP/Status/103) HTTP [information response](/en-US/docs/Web/HTTP/Status#information_responses) status code may be sent by a server to allow a user agent to start preloading resources while the server is still preparing the full response.
For more details see [Firefox bug 1813035](https://bugzil.la/1813035).

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
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>111</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>102</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>network.early-hints.enabled</code> and <code>network.early-hints.preconnect.enabled</code></td>
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

### Mobile gesture support in Responsive Design Mode

Mouse gestures are used to simulate mobile gestures like swiping/scrolling, double-tap and pinch-zooming and long-press to select/open the context menu. (See [Firefox bug 1621781](https://bugzil.la/1621781), [Firefox bug 1245183](https://bugzil.la/1245183), and [Firefox bug 1401304](https://bugzil.la/1401304) for more details.)

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
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>76<sup>[1]</sup></td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">n/a</td>
    </tr>
  </tbody>
</table>

\[1] Support for zooming using the double-tap gesture was added in Firefox 76. The other gestures were added for Firefox 79.

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

## UI

### Desktop zooming

This feature lets you enable smooth pinch zooming on desktop computers without requiring layout reflows, just like mobile devices do. (See [Firefox bug 1245183](https://bugzil.la/1245183) and [Firefox bug 1620055](https://bugzil.la/1620055) for more details.)

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
      <td>42</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>apz.allow_zooming</code> and (on Windows)
        <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## See also

- [Firefox developer release notes](/en-US/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
