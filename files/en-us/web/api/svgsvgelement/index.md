---
title: SVGSVGElement
slug: Web/API/SVGSVGElement
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGSVGElement
---
{{APIRef("SVG")}}

The **`SVGSVGElement`** interface provides access to the properties of {{SVGElement("svg")}} elements, as well as methods to manipulate them. This interface contains also various miscellaneous commonly-used utility methods, such as matrix operations and the ability to control the time of redraw on visual rendering devices.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}} and also implements the ones from {{domxref("SVGFitToViewBox")}} and {{domxref("WindowEventHandlers")}}._

- {{domxref("SVGSVGElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.contentScriptType")}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("contentScriptType")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.contentStyleType")}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("contentStyleType")}} attribute of the given {{SVGElement("svg")}} element.
- {{domxref("SVGSVGElement.pixelUnitToMillimeterX")}} {{deprecated_inline}}
  - : A float representing the size of the pixel unit (as defined by CSS2) along the x-axis of the viewport, which represents a unit somewhere in the range of 70dpi to 120dpi, and, on systems that support this, might actually match the characteristics of the target medium. On systems where it is impossible to know the size of a pixel, a suitable default pixel size is provided.
- {{domxref("SVGSVGElement.pixelUnitToMillimeterY")}} {{deprecated_inline}}
  - : A float representing the size of a pixel unit along the y-axis of the viewport.
- {{domxref("SVGSVGElement.screenPixelToMillimeterX")}} {{deprecated_inline}}
  - : User interface (UI) events in DOM Level 2 indicate the screen positions at which the given UI event occurred. When the browser actually knows the physical size of a "screen unit", this float attribute will express that information; otherwise, user agents will provide a suitable default value (such as `.28mm`).
- {{domxref("SVGSVGElement.screenPixelToMillimeterY")}} {{deprecated_inline}}
  - : Corresponding size of a screen pixel along the y-axis of the viewport.
- {{domxref("SVGSVGElement.useCurrentView")}}
  - : The initial view (i.e., before magnification and panning) of the current innermost SVG document fragment can be either the "standard" view, i.e., based on attributes on the {{SVGElement("svg")}} element such as {{SVGAttr("viewBox")}}) or on a "custom" view (i.e., a hyperlink into a particular {{SVGElement("view")}} or other element). If the initial view is the "standard" view, then this attribute is `false`. If the initial view is a "custom" view, then this attribute is `true`.
- {{domxref("SVGSVGElement.currentView")}}

  - : An {{domxref("SVGViewSpec")}} defining the initial view (i.e., before magnification and panning) of the current innermost SVG document fragment. The meaning depends on the situation: If the initial view was a "standard" view, then:

    - the values for {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} and {{SVGAttr("zoomAndPan")}} within {{SVGAttr("currentView")}} will match the values for the corresponding DOM attributes that are on `SVGSVGElement` directly
    - the values for {{SVGAttr("transform")}} and {{SVGAttr("viewTarget")}} within {{SVGAttr("currentView")}} will be `null`

    If the initial view was a link into a {{SVGElement("view")}} element, then:

    - the values for {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} and {{SVGAttr("zoomAndPan")}} within {{SVGAttr("currentView")}} will correspond to the corresponding attributes for the given {{SVGElement("view")}} element
    - the values for {{SVGAttr("transform")}} and {{SVGAttr("viewTarget")}} within {{SVGAttr("currentView")}} will be `null`

    If the initial view was a link into another element (i.e., other than a {{SVGElement("view")}}), then:

    - the values for {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}} and {{SVGAttr("zoomAndPan")}} within {{SVGAttr("currentView")}} will match the values for the corresponding DOM attributes that are on `SVGSVGElement` directly for the closest ancestor {{SVGElement("svg")}} element
    - the values for {{SVGAttr("transform")}} within {{SVGAttr("currentView")}} will be `null`
    - the {{SVGAttr("viewTarget")}} within {{SVGAttr("currentView")}} will represent the target of the link

    If the initial view was a link into the SVG document fragment using an SVG view specification fragment identifier (i.e., `#svgView(…)`), then:

    - the values for {{SVGAttr("viewBox")}}, {{SVGAttr("preserveAspectRatio")}}, {{SVGAttr("zoomAndPan")}}, {{SVGAttr("transform")}} and {{SVGAttr("viewTarget")}} within {{SVGAttr("currentView")}} will correspond to the values from the SVG view specification fragment identifier

- {{domxref("SVGSVGElement.currentScale")}}
  - : On an outermost {{SVGElement("svg")}} element, this float attribute indicates the current scale factor relative to the initial view to take into account user magnification and panning operations. DOM attributes `currentScale` and `currentTranslate` are equivalent to the 2×3 matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. If "magnification" is enabled (i.e., `zoomAndPan="magnify"`), then the effect is as if an extra transformation were placed at the outermost level on the SVG document fragment (i.e., outside the outermost {{SVGElement("svg")}} element).
- {{domxref("SVGSVGElement.currentTranslate")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGPoint")}} representing the translation factor that takes into account user "magnification" corresponding to an outermost {{SVGElement("svg")}} element. The behavior is undefined for `<svg>` elements that are not at the outermost level.

## Methods

_This interface also inherits methods from its parent, {{domxref("SVGGraphicsElement")}} and also implements the ones from {{domxref("SVGFitToViewBox")}} and {{domxref("WindowEventHandlers")}}._

- {{domxref("SVGSVGElement.suspendRedraw()")}} {{deprecated_inline}}

  - : Takes a time-out value which indicates that redraw shall not occur until:

    the corresponding `unsuspendRedraw()` call has been made, an `unsuspendRedrawAll()` call has been made, or its timer has timed out.

    In environments that do not support interactivity (e.g., print media), then redraw shall not be suspended. Calls to `suspendRedraw()` and `unsuspendRedraw()` should, but need not be, made in balanced pairs.

    To suspend redraw actions as a collection of SVG DOM changes occur, precede the changes to the SVG DOM with a method call similar to:

    ```js
    const suspendHandleID = suspendRedraw(maxWaitMilliseconds)
    ```

    and follow the changes with a method call similar to:

    ```js
    unsuspendRedraw(suspendHandleID)
    ```

    Note that multiple `suspendRedraw()` calls can be used at once, and that each such method call is treated independently of the other `suspendRedraw()` method calls.

- {{domxref("SVGSVGElement.unsuspendRedraw()")}} {{deprecated_inline}}
  - : Cancels a specified `suspendRedraw()` by providing a unique suspend handle ID that was returned by a previous `suspendRedraw()` call.
- {{domxref("SVGSVGElement.unsuspendRedrawAll()")}} {{deprecated_inline}}
  - : Cancels all currently active `suspendRedraw()` method calls. This method is most useful at the very end of a set of SVG DOM calls to ensure that all pending `suspendRedraw()` method calls have been cancelled.
- {{domxref("SVGSVGElement.forceRedraw()")}} {{deprecated_inline}}
  - : In rendering environments supporting interactivity, forces the user agent to immediately redraw all regions of the viewport that require updating.
- {{domxref("SVGSVGElement.pauseAnimations()")}}
  - : Suspends (i.e., pauses) all currently running animations that are defined within the SVG document fragment corresponding to this {{SVGElement("svg")}} element, causing the animation clock corresponding to this document fragment to stand still until it is unpaused.
- {{domxref("SVGSVGElement.unpauseAnimations()")}}
  - : Unsuspends (i.e., unpauses) currently running animations that are defined within the SVG document fragment, causing the animation clock to continue from the time at which it was suspended.
- {{domxref("SVGSVGElement.animationsPaused()")}}
  - : Returns `true` if this SVG document fragment is in a paused state.
- {{domxref("SVGSVGElement.getCurrentTime()")}}
  - : Returns the current time in seconds relative to the start time for the current SVG document fragment. If `getCurrentTime()` is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's `SVGLoad` event is dispatched), then `0` is returned.
- {{domxref("SVGSVGElement.setCurrentTime()")}}
  - : Adjusts the clock for this SVG document fragment, establishing a new current time. If `setCurrentTime()` is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's `SVGLoad` event is dispatched), then the value of seconds in the last invocation of the method gives the time that the document will seek to once the document timeline has begun.
- {{domxref("SVGSVGElement.getIntersectionList()")}}
  - : Returns a {{domxref("NodeList")}} of graphics elements whose rendered content intersects the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.getEnclosureList()")}}
  - : Returns a {{domxref("NodeList")}} of graphics elements whose rendered content is entirely contained within the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.checkIntersection()")}}
  - : Returns `true` if the rendered content of the given element intersects the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.checkEnclosure()")}}
  - : Returns `true` if the rendered content of the given element is entirely contained within the supplied rectangle. Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.
- {{domxref("SVGSVGElement.deselectAll()")}}
  - : Unselects any selected objects, including any selections of text strings and type-in bars.
- {{domxref("SVGSVGElement.createSVGNumber()")}}
  - : Creates an {{domxref("SVGNumber")}} object outside of any document trees. The object is initialized to `0`.
- {{domxref("SVGSVGElement.createSVGLength()")}}
  - : Creates an {{domxref("SVGLength")}} object outside of any document trees. The object is initialized to `0` user units.
- {{domxref("SVGSVGElement.createSVGAngle()")}}
  - : Creates an {{domxref("SVGAngle")}} object outside of any document trees. The object is initialized to a value of `0` degrees (unitless).
- {{domxref("SVGSVGElement.createSVGPoint()")}}
  - : Creates an {{domxref("SVGPoint")}} object outside of any document trees. The object is initialized to the point `(0,0)` in the user coordinate system.
- {{domxref("SVGSVGElement.createSVGMatrix()")}}
  - : Creates an {{domxref("SVGMatrix")}} object outside of any document trees. The object is initialized to the identity matrix.
- {{domxref("SVGSVGElement.createSVGRect()")}}
  - : Creates an {{domxref("SVGRect")}} object outside of any document trees. The object is initialized such that all values are set to `0` user units.
- {{domxref("SVGSVGElement.createSVGTransform()")}}
  - : Creates an {{domxref("SVGTransform")}} object outside of any document trees. The object is initialized to an identity matrix transform (`SVG_TRANSFORM_MATRIX`).
- {{domxref("SVGSVGElement.createSVGTransformFromMatrix()")}}
  - : Creates an {{domxref("SVGTransform")}} object outside of any document trees. The object is initialized to the given matrix transform (i.e., `SVG_TRANSFORM_MATRIX`). The values from the parameter matrix are copied, the matrix parameter is not adopted as `SVGTransform::matrix`.
- {{domxref("SVGSVGElement.getElementById()")}}
  - : Searches this SVG document fragment (i.e., the search is restricted to a subset of the document tree) for an Element whose `id` is given by `elementId`. If an Element is found, that Element is returned. If no such element exists, returns `null`. Behavior is not defined if more than one element has this id.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("circle")}}
