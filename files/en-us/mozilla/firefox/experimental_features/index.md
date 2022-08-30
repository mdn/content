---
title: Experimental features in Firefox
slug: Mozilla/Firefox/Experimental_features
tags:
  - Experimental
  - Firefox
  - Preferences
  - features
---
{{FirefoxSidebar}}

This page lists Firefox's experimental and partially implemented features, including those for proposed or cutting-edge web platform standards, along with information on the builds in which they are present, whether or not they are activated "by default", and which _preference_ can be used to activate or deactivate them.
This allows you to test the features before they are released.

New features appear first in the [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) build, where they are often enabled by default.
They later propagate though to [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) and eventually to the release build.
After a feature is enabled by default in a release build, it is no longer considered experimental and should be removed from the topic.

Experimental features can be enabled or disabled using the [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (enter `about:config` in the Firefox address bar) by modifying the associated _preference_ listed below.

> **Note:** For editors - when adding features to these tables, please try to include a link to the relevant bug or bugs using the [`bug`](https://github.com/mdn/yari/blob/main/kumascript/macros/bug.ejs) macro: `\{{bug(<em>bug-number</em>)}}`.

## HTML

### inert attribute

The {{domxref("HTMLElement")}} property {{DOMxRef("HTMLElement.inert")}} is a {{jsxref("Boolean")}}. When present, it may make the browser "ignore" the element from assistive technologies, page search, and text selection. For more details on the status of this feature, see {{bug(1655722)}}.

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
      <td colspan="2"><code>html5.inert.enabled</code></td>
    </tr>
  </tbody>
</table>

### Layout for input type="search"

Layout for `input type="search"` has been updated. This causes a search field to have a clear icon once someone starts typing in it, to match other browser implementations. (See {{bug(558594)}} for more details.)

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

HTML password input elements ([`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password)) include an "eye" icon that can be toggled to display or obscure the password text ({{bug(502258)}}).

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

## CSS

### Hex boxes to display stray control characters

This feature renders control characters (Unicode category Cc) other than _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`), and _carriage return_ (`U+000D`) as a hexbox when they are not expected. (See {{bug(1099557)}} for more details.)

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

The {{cssxref("initial-letter")}} CSS property is part of the [CSS Inline Layout](https://drafts.csswg.org/css-inline/) specification and allows you to specify how dropped, raised, and sunken initial letters are displayed. (See {{bug(1223880)}} for more details.)

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

### Single numbers as aspect ratio in media queries

Support for using a single {{cssxref("number")}} as a {{cssxref("ratio")}} when specifying the aspect ratio for a [media query](/en-US/docs/Web/CSS/Media_Queries). (See {{bug(1565562)}} for more details.)

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

The {{cssxref("backdrop-filter")}} property applies filter effects to the area behind an element. (See {{bug(1178765)}} for more details.)

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

Adds support for a [masonry-style layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) based on grid layout where one axis has a masonry layout and the other has a normal grid layout. This allows developers to easily create gallery style layouts like on Pinterest. See {{bug(1607954)}} for more details.

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

The {{cssxref("math-style")}} property indicates whether MathML equations should render with normal or compact height. (See {{bug(1665975)}} for more details.)

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

The {{cssxref("fit-content_function", "fit-content()")}} function as it applies to {{cssxref("width")}} and other sizing properties. This function is already well-supported for CSS Grid Layout track sizing. (See {{bug(1312588)}} for more details.)

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

### Scroll-linked animations

The {{cssxref('@scroll-timeline')}} at-rule and {{cssxref('animation-timeline')}} property allow you to define animations that are linked to container scroll progress (rather than time).
Once specified, a scroll timeline is associated with a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) by using the `animation-timeline` property.
For more information, see {{bug(1676791)}} and {{bug(1676782)}}.

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
      <td colspan="2"><code>layout.css.scroll-linked-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

### :has() pseudo-class

The [`:has()`](/en-US/docs/Web/CSS/:has) pseudo-class selects elements that contain the selectors passed as parameters.
(See {{bug(1771896)}} for more details.)

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

### linear() easing function

The `linear()` [easing function](/en-US/docs/Web/CSS/easing-function) defines a piecewise linear function, allowing you to approximate more complex animations.
(See {{bug(1764126)}} for more details.)

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
      <td>104</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.linear-easing-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### animation-composition property

The [`animation-composition`](/en-US/docs/Web/CSS/animation-composition) property specifies the composite operation to perform when multiple animations affect the same property simultaneously.
(See {{bug(1293490)}} for more details.)

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
      <td>104</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>104</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.animation-composition.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg APIs

The SVGPathSeg APIs are being unshipped, and have been placed behind a preference.
This includes: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/en-US/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
(See {{bug(1388931)}} for more details.)

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
(See {{bug(1739648)}} for more details.)

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

## APIs

### Graphics: Canvas, WebGL, and WebGPU

#### Interface: OffscreenCanvas

The {{domxref("OffscreenCanvas")}} interface provides a canvas that can be rendered offscreen. It is available in both the window and [worker](/en-US/docs/Web/API/Web_Workers_API) contexts. (See {{bug(1390089)}} for more details.)

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
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>gfx.offscreencanvas.enabled</code></td>
    </tr>
  </tbody>
</table>

#### Hit regions

Whether the mouse coordinates are within a particular area on the canvas is a common problem to solve. The hit region API allows you define an area of your canvas and provides another possibility to expose interactive content on a canvas to accessibility tools.

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

This new API provides low-level support for performing computation and graphics rendering using the [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) of the user's device or computer. The [specification](https://gpuweb.github.io/gpuweb/) is still a work-in-progress. See {{bug(1602129)}} for our progress on this API.

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
      <td>73</td>
      <td>No</td>
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

### Audio Output API

#### MediaDevices.selectAudioOutput()

{{domxref("MediaDevices.selectAudioOutput()")}} displays a prompt from which users can select their desired audio output. See {{bug(1699026)}}.

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
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC and media

The following experimental features include those found in the [WebRTC API](/en-US/docs/Web/API/WebRTC_API), the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), the [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API), the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API), and the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API).

#### Asynchronous SourceBuffer add and remove

This adds the promise-based methods {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} and {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} for adding and removing media source buffers to the {{domxref("SourceBuffer")}} interface. See {{bug(1280613)}} and {{bug(778617)}} for more information.

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

#### AV1 support for Firefox on Android

This feature allows Firefox on Android to use [AV1 format media](/en-US/docs/Web/Media/Formats/Video_codecs#av1). This feature is available in nightly builds effective in Firefox for Android 81 or later. It is enabled by default.

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
      <td>Yes</td>
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
      <td colspan="2">—</td>
    </tr>
  </tbody>
</table>

#### JPEG XL support

With this feature enabled, Firefox supports [JPEG XL](https://jpeg.org/jpegxl/) images, see {{bug(1539075)}} for more details.

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
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
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
It is disabled by default on all builds {{bug(1750902)}}.

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

#### HTMLMediaElement method: setSinkId()

{{domxref("HTMLMediaElement.setSinkId()")}} allows you to set the sink ID of an audio output device on an {{domxref("HTMLMediaElement")}}, thereby changing where the audio is being output. See {{bug(934425)}} for more details.

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

Enabling this feature adds the {{domxref("HTMLMediaElement.audioTracks")}} and {{domxref("HTMLMediaElement.videoTracks")}} properties to all HTML media elements. However, because Firefox doesn't currently support multiple audio and video tracks, the most common use cases for these properties don't work, so they're both disabled by default. See {{bug(1057233)}} for more details.

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

The {{domxref('ClipboardItem')}} interface of the {{domxref('Clipboard API')}} is now supported and {{domxref('Clipboard.write()')}} accepts a sequence of {{domxref('ClipboardItem','clipboard items')}} instead of the previously implemented {{domxref('DataTransfer','dataTransfer object')}}. It is available behind the pref `dom.events.asyncClipboard.clipboardItem` which was previously `dom.events.asyncClipboard.dataTransfer`. See {{bug('1619947')}} for more details.

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

The [Clipboard.read()](/en-US/docs/Web/API/Clipboard/read) method of the {{domxref('Clipboard')}} interface is also now available under the `dom.events.asyncClipboard.read` preference, when previously it was under `dom.events.asyncClipboard.clipboardItem`. (See {{bug(1701512)}} for more details.)

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

The {{domxref('HTML Sanitizer API')}} allow developers to take untrusted strings of HTML and sanitize them for safe insertion into a document's DOM. Default elements within each configuration property (those to be sanitized) are still under consideration. Due to this the config parameter has not been implemented (see {{domxref('Sanitizer.sanitizer()', 'the constructor')}} for more information). See {{bug('1673309')}} for more details.

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

#### Document property: autoplayPolicy

The {{domxref("document")}} property autoplayPolicy returns a string indicating how the browser handles requests to automatically play media (either using the {{domxref("HTMLMediaElement.autoplay", "autoplay")}} property on a media element or by attempting to trigger playback from JavaScript code. The spec for this API is still being written. The value changes over time depending on what the user is doing, their preferences, and the state of the browser in general. Potential values include `allowed` (autoplay is currently permitted), `allowed-muted` (autoplay is allowed but only with no—or muted—audio), and `disallowed` (autoplay is not allowed at this time). See {{bug(1506289)}} for more details.

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
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.media.autoplay.autoplay-policy-api</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils methods: convertPointFromNode(), convertRectFromNode(), and convertQuadFromNode()

The `GeometryUtils` methods `convertPointFromNode()`, `convertRectFromNode()`, and `convertQuadFromNode()` map the given point, rectangle, or quadruple from the {{domxref("Node")}} on which they're called to another node. (See {{bug(918189)}} for more details.)

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

#### GeometryUtils method: getBoxQuads()

The `GeometryUtils` method `getBoxQuads()` returns the CSS boxes for a {{domxref("Node")}} relative to any other node or viewport. (See {{bug(917755)}} for more details.)

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

#### ElementInternals: Form associated custom element methods and properties

New {{domxref("ElementInternals")}} properties and methods that allow custom elements to interact with a form:

- The {{domxref("ElementInternals.form","form")}} property gets the form associated with the element.
- The {{domxref("ElementInternals.labels","labels")}} property gets the list of labels associated with the element.
- The {{domxref("ElementInternals.willValidate", "willValidate")}} property checks if a custom form element will be validated.
- The {{domxref("ElementInternals.setFormValue()","setFormValue()")}} method sets the sanitized value and user-entered data, if needed.

See these bugs for details: {{bug(1556362)}}, {{bug(1556373)}}, {{bug(1556365)}}, {{bug(1556449)}}.

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

The [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) provides support for handling web-based payments within web content or apps. Due to a bug that came up during testing of the user interface, we have decided to postpone shipping this API while discussions over potential changes to the API are held. Work is ongoing. (See {{bug(1318984)}} for more details.)

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
See {{bug(1697647)}} for more details.

Note that since locking the screen orientation isn't typically supported on desktop systems, you will need to use Firefox for Android Nightly build and enable the preference in `about:config`.

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

In order to help mitigate man-in-the-middle (MitM) attacks caused by Flash content on encrypted pages, a preference has been added to treat `OBJECT_SUBREQUEST`s as active content. See {{bug(1190623)}} for more details.

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

These two preferences add a "Not secure" text label in the address bar next to the traditional lock icon when a page is loaded insecurely (that is, using {{Glossary("HTTP")}} rather than {{Glossary("HTTPS")}}). See {{bug(1335970)}} for more details.

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

When enabled, this preference causes Firefox to automatically upgrade requests for media content from HTTP to HTTPS on secure pages. The intent is to prevent mixed-content conditions in which some content is loaded securely while other content is insecure. If the upgrade fails (because the media's host doesn't support HTTPS), the media is not loaded. (See {{bug(1435733)}} for more details.)

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

### Feature policy

[Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy) allows web developers to selectively enable, disable, and modify the behavior of certain features and APIs in the browser. It is similar to CSP but controls features instead of security behavior.

> **Note:** The `Feature-Policy` header has now been renamed to `Permissions-Policy` in the spec, and this article will eventually be updated to reflect that change.

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

> **Note:** This was originally enabled by default, but put behind a preference in version 94 ({{bug(1729291)}}).

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

## Developer tools

Mozilla's developer tools are constantly evolving. We experiment with new ideas, add new features, and test them on the Nightly and Developer Edition channels before letting them go through to beta and release. The features below are the current crop of experimental developer tool features.

### Execution context selector

This feature displays a button on the console's command line that lets you change the context in which the expression you enter will be executed. (See {{bug(1605154)}} and {{bug(1605153)}} for more details.)

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

Mouse gestures are used to simulate mobile gestures like swiping/scrolling, double-tap and pinch-zooming and long-press to select/open the context menu. (See {{bug(1621781)}}, {{bug(1245183)}}, and {{bug(1401304)}} for more details.)

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

The Network Monitor displays information for [server-sent](/en-US/docs/Web/API/Server-sent_events) events. (See {{bug(1405706)}} for more details.)

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

This feature lets you enable smooth pinch zooming on desktop computers without requiring layout reflows, just like mobile devices do. (See {{bug(1245183)}} and {{bug(1620055)}} for more details.)

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
