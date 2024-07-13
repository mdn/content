---
title: "CanvasRenderingContext2D: arcTo() method"
short-title: arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.arcTo
---

{{APIRef}}

The **`CanvasRenderingContext2D.arcTo()`** method of the Canvas 2D API adds a circular arc to the current sub-path, using the given control points and radius.
The arc is automatically connected to the path's latest point with a straight line if necessary, for example if the starting point and control points are in a line.

This method is commonly used for making rounded corners.

> **Note:** You may get unexpected results when using a
> relatively large radius: the arc's connecting line will go in whatever direction it
> must to meet the specified radius.

## Syntax

```js-nolint
arcTo(x1, y1, x2, y2, radius)
```

### Parameters

- `x1`
  - : The x-axis coordinate of the first control point.
- `y1`
  - : The y-axis coordinate of the first control point.
- `x2`
  - : The x-axis coordinate of the second control point.
- `y2`
  - : The y-axis coordinate of the second control point.
- `radius`
  - : The arc's radius. Must be non-negative.

#### Usage notes

Assume <em>P<sub>0</sub></em> is the point on the path when `arcTo()` is called, <em>P<sub>1</sub></em> = (`x1`, `y1`) and <em>P<sub>2</sub></em> = (`x2`, `y2`) are the first and second control points, respectively, and _r_ is the `radius` specified in the call:

- If _r_ is negative, an `IndexSizeError` [exception](#exceptions) is raised.
- If _r_ is 0, `arcTo()` behaves as if <em>P<sub>0</sub></em>, <em>P<sub>1</sub></em>, and <em>P<sub>2</sub></em> are collinear (in a line).
- In the case of all of the points being collinear, a line from <em>P<sub>0</sub></em> to <em>P<sub>1</sub></em> is drawn unless the points <em>P<sub>0</sub></em> and <em>P<sub>1</sub></em> are coincident (having the same coordinates), in which case nothing is drawn.

These conditions can be created in the [Constructing an arcTo() path](#constructing_an_arcto_path) example below to see the results.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}

  - : Thrown if `radius` is a negative value.

## Examples

### How `arcTo()` works

One way to think about `arcTo()` is to imagine two straight segments: one
from the starting point to a first control point, and another from there to a second
control point. Without `arcTo()`, these two segments would form a sharp
corner: `arcTo()` creates a circular arc at this corner and smooths it
out. In other words, the arc is tangential to both segments.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Tangential lines
ctx.beginPath();
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// Arc
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke();

// Start point
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// Control points
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // Control point two
ctx.fill();
```

#### Result

In this example, the path created by `arcTo()` is **thick and
black**. Tangent lines are gray, control points are red, and the start point is blue.

{{ EmbedLiveSample('How_arcTo_works', 315, 170) }}

### Creating a rounded corner

This example creates a rounded corner using `arcTo()`. This is one of the
method's most common uses.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The arc begins at the point specified by `moveTo()`: (230, 20). It is shaped
to fit control points at (90, 130) and (20, 20), and has a radius of 50. The
`lineTo()` method connects the arc to (20, 20) with a straight line. Note
that the arc's second control point and the point specified by `lineTo()` are
the same, which produces a totally smooth corner.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const p0 = { x: 230, y: 20 };
const p1 = { x: 90, y: 130 };
const p2 = { x: 20, y: 20 };

const labelPoint = (p) => {
  const offset = 10;
  ctx.fillText(`(${p.x},${p.y})`, p.x + offset, p.y + offset);
};

ctx.beginPath();
ctx.lineWidth = 4;
ctx.font = "1em sans-serif";
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Creating_a_rounded_corner', 315, 165) }}

### Result of a large radius

If you use a relatively large radius, the arc may appear in a place you didn't expect.
In this example, the arc's connecting line goes above, instead of below, the coordinate
specified by `moveTo()`. This happens because the radius is too large for the
arc to fit entirely below the starting point.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180, 130, 110, 130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Result_of_a_large_radius', 315, 165) }}

### Constructing an arcTo() path

The demo shows the semi-infinite lines and circle with center _C_ tangent
to the lines at <em>T<sub>1</sub></em> and <em>T<sub>2</sub></em> used to
determine the path rendered by `arcTo()`.

Note that `arcTo` will create a straight line from <em>P<sub>0</sub></em>
to <em>P<sub>1</sub></em> when all points are in a line. Additionally,
nothing is drawn by `arcTo` if <em>P<sub>0</sub></em> and
<em>P<sub>1</sub></em> have the same coordinates.

Besides being able to set the arc radius with the slider, the initial point
<em>P<sub>0</sub></em> and control points <em>P<sub>1</sub></em> and
<em>P<sub>2</sub></em> can be moved by dragging them with the mouse with the
left button down. The numeric values can also be edited, and the arrow keys
can be used to change an underlined element that is in focus.

```html hidden
<div>
  <label for="arc-radius">arc radius <em>r</em></label>
  <input name="arc-radius" type="range" id="radius-slider" min="0" />
  <label
    for="arc-radius"
    id="value-r"
    class="input"
    contenteditable="true"></label>
</div>
<div>
  <span id="value-P0" class="input" tabindex="0">
    <em>P<sub>0</sub></em>
  </span>
  = (<span id="value-P0x" class="input" contenteditable="true"></span>,
  <span id="value-P0y" class="input" contenteditable="true"></span>)
  &nbsp;&nbsp;
  <span id="value-P1" class="input" tabindex="0">
    <em>P<sub>1</sub></em>
  </span>
  = (<span id="value-P1x" class="input" contenteditable="true"></span>,
  <span id="value-P1y" class="input" contenteditable="true"></span>)
  &nbsp;&nbsp;
  <span id="value-P2" class="input" tabindex="0">
    <em>P<sub>2</sub></em>
  </span>
  = (<span id="value-P2x" class="input" contenteditable="true"></span>,
  <span id="value-P2y" class="input" contenteditable="true"></span>)
</div>
<canvas id="canvas"></canvas>
<div>
  <em>T<sub>1</sub></em> = <span id="value-T1"></span>
</div>
<div>
  <em>T<sub>2</sub></em> = <span id="value-T2"></span>
</div>
<div><em>C</em> = <span id="value-C"></span></div>

<script>
  /* arcTo() demo
   * Note: there are browser issues at least in Chrome regarding cursor
   * updates. See
   * https://stackoverflow.com/questions/37462132/update-mouse-cursor-without-moving-mouse-with-changed-css-cursor-property
   *
   * Cursor problems were also seen when text was selected before entering
   * the canvas. Additional tests which may appear to be redundant in the
   * code minimized these issues.
   */

  "use strict";

  /* Parameters for demo */
  const param = {
    canvasWidth: 300, // canvas size
    canvasHeight: 300,
    hitDistance: 5, // mouse distance to be considered a hit
    errorTolCenter: 1e-4, // limit on circle center differences
    radiusMax: 250, // largest allowed radius
    P0x: 50, // initial point
    P0y: 50,
    P1x: 275, // First control point
    P1y: 150,
    P2x: 50, // Second control point
    P2y: 275,
    radius: 75, // radius of arc
  };

  /* Some math for 2-D vectors */
  class Math2D {
    /* Create new point */
    static point(x = 0, y = 0) {
      return { x: x, y: y };
    }

    /* Create new vector */
    static vector(x = 0, y = 0) {
      return this.point(x, y);
    }

    /* Subtraction: difference = minuend - subtrahend */
    static subtract(difference, minuend, subtrahend) {
      difference.x = minuend.x - subtrahend.x;
      difference.y = minuend.y - subtrahend.y;
    }

    /* Find L2 norm */
    static L2(a) {
      return Math.hypot(a.x, a.y);
    }

    /* Dot product */
    static dot(a, b) {
      return a.x * b.x + a.y * b.y;
    }

    /* Find point on line defined parametrically by
     * L = P0 + t * direction */
    static linePointAt(P0, t, dir) {
      return this.point(P0.x + t * dir.x, P0.y + t * dir.y);
    }
  } /* end of class Math2D */

  /* Text values allowing alternate inputs */
  class TextInput {
    #valueMax;
    #callbackKeydown;
    #callbackFocus;

    /* Mutation observer to watch the focused text input */
    static mo = new MutationObserver(TextInput.processInput);
    static moOptions = {
      subtree: true, // character data in internal node
      characterData: true,
    };

    /* Symbol to add index information to mutation observer */
    static symbolTextInput = Symbol("textInput");

    /* Handler for mutations of focused text input */
    static processInput(mrs, mo) {
      /* Access textInput object associated with the mutations */
      const textInput = mo[TextInput.symbolTextInput];

      /* Find the character data mutation and update based on the input */
      for (let i = 0, n = mrs.length; i < n; i++) {
        const mr = mrs[i];
        if (mr.type === "characterData") {
          const target = mr.target;
          if (target.nodeType !== 3) {
            console.error(
              "Mutation record type CharacterData but " +
                "node type = " +
                target.nodeType,
            );
            return;
          }
          /* Handle non-digits entered by parsing */
          let value = parseInt(target.textContent);
          value = isNaN(value) ? 0 : value;
          textInput.updateFull(value);
          break;
        }
      }
    }

    constructor(
      idText, // id of element in document
      idControl, // id of control in element, if any (radius ony)
      valueMax, // allowed values from 0 to maxValue, inclusive
      getStateValue, // function to get value from state object
      setStateValue,
    ) {
      // function to set value on state object
      this.#valueMax = valueMax;
      this.elementText = document.getElementById(idText);
      this.elementControl =
        idControl === null ? null : document.getElementById(idControl);
      this.getStateValue = getStateValue;
      this.setStateValue = setStateValue;
      this.#callbackKeydown = (evt) => {
        let valueInput;
        switch (evt.code) {
          case "Enter": // Do not allow since adds <br> nodes
            evt.preventDefault();
            return;
          case "ArrowUp":
            valueInput = Number(this.elementText.textContent) + 1;
            evt.preventDefault();
            break;
          case "ArrowDown":
            valueInput = Number(this.elementText.textContent) - 1;
            evt.preventDefault();
            break;
          default: // ignore all others
            return;
        }
        TextInput.mo.disconnect(); // suspend while changing value
        this.updateFull(valueInput); // do update
        const options = { subtree: true, characterData: true };
        TextInput.mo.observe(this.elementText, TextInput.moOptions);
        // observe again
      };
      this.#callbackFocus = (evt) => {
        /* Link mutation observer to the associated text input object */
        TextInput.mo[TextInput.symbolTextInput] = this;

        /* Look for changes in the input.
         * subtree: true needed since text is in internal node(s)
         * childList: true needed since <enter> becomes a <br> node */
        TextInput.mo.observe(this.elementText, TextInput.moOptions);

        /* Check for up and down arrows to increment/decrement values */
        this.elementText.addEventListener("keydown", this.#callbackKeydown);

        /* When focus is lost, stop watching this input */
        this.elementText.addEventListener("blur", () => {
          this.elementText.removeEventListener(
            "keydown",
            this.#callbackKeydown,
          );
          TextInput.mo.disconnect();
        });
      };

      this.elementText.addEventListener("focus", this.#callbackFocus);
    } // end of class TextInput

    /* Function to update based on input received from text input source */
    updateFull(value) {
      /* Clamp value in range */
      if (value > this.#valueMax) {
        value = this.#valueMax;
      } else if (value < 0) {
        value = 0;
      }

      /* Make consistent and update */
      const valueTextPrev = this.elementText.textContent;
      const valueString = String(value);
      if (valueTextPrev !== valueString) {
        this.elementText.textContent = valueString;
      }

      if (this.elementControl) {
        const valueControlPrev = this.elementControl.value;
        if (valueControlPrev !== valueString) {
          this.elementControl.value = valueString;
        }
      }

      const valueStatePrev = this.getStateValue();
      if (valueStatePrev !== value) {
        // input caused state change
        this.setStateValue(value);
        updateResults();
      }
    }
  } /* end of class TextInput */

  /* Given configuration parameters, initialize the state */
  function initDemoState({
    canvasWidth = 300,
    canvasHeight = 300,
    hitDistance = 5,
    errorTolCenter = 1e-4,
    radiusMax = 250,
    P0x = 0,
    P0y = 0,
    P1x = 0,
    P1y = 0,
    P2x = 0,
    P2y = 0,
    radius = 0,
  } = {}) {
    const s = {};
    s.controlPoints = [
      Math2D.point(P0x, P0y),
      Math2D.point(P1x, P1y),
      Math2D.point(P2x, P2y),
    ];
    s.hitDistance = hitDistance;
    s.errorTolCenter = errorTolCenter;
    s.canvasSize = Math2D.point(canvasWidth, canvasHeight);

    if (radius > radiusMax) {
      /* limit param to allowed values */
      radius = radiusMax;
    }
    s.radius = radius;
    s.radiusMax = radiusMax;

    [s.haveCircle, s.P0Inf, s.P2Inf, s.T1, s.T2, s.C] = findConstruction(
      s.controlPoints,
      s.radius,
      s.canvasSize,
      s.errorTolCenter,
    );
    s.pointActiveIndex = -1; // no point currently active
    s.pointActiveMoving = false; // Active point hovering (false) or
    // moving (true)
    s.mouseDelta = Math2D.point(); // offset of mouse pointer
    //from point center
    return s;
  }

  function updateResults() {
    updateConstruction();
    drawCanvas();
    ConstructionPoints.print(state.T1, state.T2, state.C);
  }

  function updateConstruction() {
    [state.haveCircle, state.P0Inf, state.P2Inf, state.T1, state.T2, state.C] =
      findConstruction(
        state.controlPoints,
        state.radius,
        state.canvasSize,
        state.errorTolCenter,
      );
  }

  /* Find the geometry that arcTo() uses to draw the path */
  function findConstruction([P0, P1, P2], r, canvasSize, errorTolCenter) {
    /* Find the center of a circle of radius r having a point T with a
     * tangent in the direction d and the center on the same side of
     * the tangent as dirTan. */
    function findCenter(T, d, r, dirTan) {
      /* Find direction of line normal to tangent line
       * Taking larger value to avoid division by 0.
       * a . n = 0. Set smaller component to 1 */
      const dn =
        Math.abs(d.x) < Math.abs(d.y)
          ? Math2D.point(1, -d.x / d.y)
          : Math2D.point(-d.y / d.x, 1);

      /* The normal may be pointing towards center or away.
       * Make towards center if not */
      if (Math2D.dot(dn, dirTan) < 0) {
        dn.x = -dn.x;
        dn.y = -dn.y;
      }

      /* Move a distance of the radius along line Tx + t * dn
       * to get to the center of the circle */
      return Math2D.linePointAt(T, r / Math2D.L2(dn), dn);
    }

    /* Test for coincidence. Note that points will have small integer
     * coordinates, so there is no issue with checking for exact
     * equality */
    const dir1 = Math2D.vector(P0.x - P1.x, P0.y - P1.y); // dir line 1
    if (dir1.x === 0 && dir1.y === 0) {
      // P0 and P1 coincident
      return [false];
    }

    const dir2 = Math2D.vector(P2.x - P1.x, P2.y - P1.y); // dir of line 2
    if (dir2.x === 0 && dir2.y === 0) {
      // P2 and P1 coincident
      return [false];
    }

    /* Magnitudes of direction vectors defining lines */
    const dir1Mag = Math2D.L2(dir1);
    const dir2Mag = Math2D.L2(dir2);

    /* Make direction vectors unit length */
    const dir1_unit = Math2D.vector(dir1.x / dir1Mag, dir1.y / dir1Mag);
    const dir2_unit = Math2D.vector(dir2.x / dir2Mag, dir2.y / dir2Mag);

    /* Angle between lines -- cos angle = a.b/(|a||b|)
     * Using unit vectors, so |a| = |b| = 1 */
    const dp = Math2D.dot(dir1_unit, dir2_unit);
    /* Test for collinearity */
    if (Math.abs(dp) > 0.999999) {
      /* Angle 0 or 180 degrees, or nearly so */
      return [false];
    }
    const angle = Math.acos(Math2D.dot(dir1_unit, dir2_unit));

    /* Distance to tangent points from P1 --
     * (T1, P1, C) form a right triangle (T2, P1, C) same triangle.
     * An angle of each triangle is half of the angle between the lines
     * tan(angle/2) = r / length(P1,T1) */
    const distToTangent = r / Math.tan(0.5 * angle);

    /* Locate tangent points */
    const T1 = Math2D.linePointAt(P1, distToTangent, dir1_unit);
    const T2 = Math2D.linePointAt(P1, distToTangent, dir2_unit);

    /* Center is along normal to tangent at tangent point at
     * a distance equal to the radius of the circle.
     * Locate center two ways. Should be equal */
    const dirT2_T1 = Math2D.vector(T2.x - T1.x, T2.y - T1.y);
    const dirT1_T2 = Math2D.vector(-dirT2_T1.x, -dirT2_T1.y);
    const C1 = findCenter(T1, dir1_unit, r, dirT2_T1);
    const C2 = findCenter(T2, dir2_unit, r, dirT1_T2);

    /* Error in center calculations */
    const deltaC = Math2D.vector(C2.x - C1.x, C2.y - C1.y);
    if (deltaC.x * deltaC.x + deltaC.y * deltaC.y > errorTolCenter) {
      console.error(
        `Programming or numerical error, ` +
          `P0(${P0.x},${P0.y}); ` +
          `P1(${P1.x},${P1.y}); ` +
          `P2(${P2.x},${P2.y}); ` +
          `r=${r};`,
      );
    }

    /* Average the center values */
    const C = Math2D.point(C1.x + 0.5 * deltaC.x, C1.y + 0.5 * deltaC.y);

    /* Find the "infinite values" of the two semi-infinite lines.
     * As a practical consideration, anything off the canvas is
     * infinite. A distance equal to the height + width of the canvas
     * is assured to be sufficiently far away and has the advantage of
     * being easily found. */
    const distToInf = canvasSize.x + canvasSize.y;
    const L1inf = Math2D.linePointAt(P1, distToInf, dir1_unit);
    const L2inf = Math2D.linePointAt(P1, distToInf, dir2_unit);

    return [true, L1inf, L2inf, T1, T2, C];
  } /* end of function findConstruction */

  /* Finds index and distance delta of first point in an array that is
   * closest to the specified point or returns index of -1 if none */
  function hitTestPoints(pointAt, points, hitDistance) {
    const n = points.length;
    const delta = Math2D.vector();
    for (let i = 0; i < n; i++) {
      Math2D.subtract(delta, pointAt, points[i]);
      if (Math2D.L2(delta) <= hitDistance) {
        return [i, delta];
      }
    }
    return [-1]; // no hit
  }

  /* Handle a mouse move for either a mousemove event or mouseentry */
  function doMouseMove(pointCursor, rBtnDown) {
    /* Test for active move. If so, move accordingly based on the
     * cursor position. The right button down flag handles the case
     * where the cursor leaves the canvas with the right button down
     * and enters with it up (not moving) or down (moving). It
     * also helps to handle unreliable delivery of mouse events. */
    if (state.pointActiveIndex >= 0 && state.pointActiveMoving && rBtnDown) {
      /* A point was moving and is moving more */
      moveActivePointAndUpdate(pointCursor);
      return;
    }

    /* If there is not an active move with the right button down,
     * update active state based on hit testing. Mouse events have
     * been found to not be reliably delivered sometimes, particularly
     * with Chrome, so the programming must handle this issue */
    state.pointActiveMoving = false; // not moving

    const [pointHitIndex, testDelta] = hitTestPoints(
      pointCursor,
      state.controlPoints,
      state.hitDistance,
    );
    state.pointActiveIndex = pointHitIndex;
    canvas.style.cursor = pointHitIndex < 0 ? "auto" : "pointer";
    return;
  } /* end of function doMouseMove */

  class ConstructionPoints {
    static #vT1 = document.getElementById("value-T1");
    static #vT2 = document.getElementById("value-T2");
    static #vC = document.getElementById("value-C");
    static print(T1, T2, C) {
      function prettyPoint(P) {
        return `(${P.x}, ${P.y})`;
      }
      if (state.haveCircle) {
        this.#vT1.textContent = prettyPoint(T1);
        this.#vT2.textContent = prettyPoint(T2);
        this.#vC.textContent = prettyPoint(C);
      } else {
        this.#vT1.textContent = "undefined";
        this.#vT2.textContent = "undefined";
        this.#vC.textContent = "undefined";
      }
    }
  }

  /* Move the active point, which must exist when called, to
   * its new point based on the cursor location and the offset of
   * the cursor to the center of the point */
  function moveActivePointAndUpdate(pointCursor) {
    let pointAdjusted = Math2D.point();
    Math2D.subtract(pointAdjusted, pointCursor, state.mouseDelta);

    /* Adjust location to keep point on canvas */
    if (pointAdjusted.x < 0) {
      pointAdjusted.x = 0;
    } else if (pointAdjusted.x >= state.canvasSize.x) {
      pointAdjusted.x = state.canvasSize.x;
    }
    if (pointAdjusted.y < 0) {
      pointAdjusted.y = 0;
    } else if (pointAdjusted.y >= state.canvasSize.y) {
      pointAdjusted.y = state.canvasSize.y;
    }

    /* Set point */
    const index = state.pointActiveIndex;
    const pt = state.controlPoints[index];
    let isPointChanged = false;
    let indexTextInput = 1 + 2 * index;
    if (pt.x !== pointAdjusted.x) {
      isPointChanged = true;
      pt.x = pointAdjusted.x;
      textInputs[indexTextInput].elementText.textContent = pointAdjusted.x;
    }
    if (pt.y !== pointAdjusted.y) {
      isPointChanged = true;
      pt.y = pointAdjusted.y;
      textInputs[indexTextInput + 1].elementText.textContent = pointAdjusted.y;
    }

    if (isPointChanged) {
      // Update results if x or y changed
      updateResults();
    }
  }

  function drawCanvas() {
    const rPoint = 4;
    const colorConstruction = "#080";
    const colorDragable = "#00F";
    const [P0, P1, P2] = state.controlPoints;

    ctx.font = "italic 14pt sans-serif";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;

    /* Draw construction information if present */
    if (state.haveCircle) {
      ctx.strokeStyle = colorConstruction;
      ctx.fillStyle = colorConstruction;
      ctx.setLineDash([4, 6]);

      /* Draw the construction points */
      const specialPoints = [state.C, state.T1, state.T2];
      specialPoints.forEach((value) => {
        ctx.beginPath();
        ctx.arc(value.x, value.y, rPoint, 0, 2 * Math.PI);
        ctx.fill();
      });

      /* Draw the semi-infinite lines, a radius, and the circle */
      ctx.beginPath();
      ctx.moveTo(state.P0Inf.x, state.P0Inf.y);
      ctx.lineTo(P1.x, P1.y);
      ctx.lineTo(state.P2Inf.x, state.P2Inf.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(state.C.x, state.C.y);
      ctx.lineTo(state.T1.x, state.T1.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(state.C.x, state.C.y, state.radius, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = "#000";
      ctx.fillText("C", state.C.x, state.C.y - 15);
      ctx.fillText("T\u2081", state.T1.x, state.T1.y - 15);
      ctx.fillText("T\u2082", state.T2.x, state.T2.y - 15);
      ctx.fillText(
        " r",
        0.5 * (state.T1.x + state.C.x),
        0.5 * (state.T1.y + state.C.y),
      );
    } else {
      // no circle
      ctx.beginPath();
      ctx.moveTo(P0.x, P0.y);
      ctx.setLineDash([2, 6]);
      ctx.lineTo(P1.x, P1.y);
      ctx.lineTo(P2.x, P2.y);
      ctx.strokeStyle = colorConstruction;
      ctx.stroke();
    }

    /* Draw initial point and control points */
    state.controlPoints.forEach((value) => {
      ctx.beginPath();
      ctx.arc(value.x, value.y, rPoint, 0, 2 * Math.PI);
      ctx.fillStyle = colorDragable;
      ctx.fill();
    });
    ctx.fillStyle = "#000";
    ctx.fillText("P\u2080", P0.x, P0.y - 15);
    ctx.fillText("P\u2081", P1.x, P1.y - 15);
    ctx.fillText("P\u2082", P2.x, P2.y - 15);

    /* Draw the arcTo() result */
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(P0.x, P0.y);
    ctx.setLineDash([]);
    ctx.arcTo(P1.x, P1.y, P2.x, P2.y, state.radius);
    ctx.strokeStyle = "#000";
    ctx.stroke();
  } /* end of function drawCanvas */

  function addPointArrowMoves() {
    [0, 1, 2].forEach((value) => addPointArrowMove(value));
  }

  /* Allow arrow key presses on the point labels to move the point in
   * x and y directions */
  function addPointArrowMove(indexPoint) {
    const elem = document.getElementById("value-P" + indexPoint);
    let indexTextInput = 2 * indexPoint + 1;
    elem.addEventListener("keydown", (evt) => {
      let valueNew;
      let indexActive = indexTextInput;
      switch (evt.code) {
        case "ArrowLeft": // left arrow -- dec x by 1
          valueNew = textInputs[indexActive].getStateValue() - 1;
          evt.preventDefault();
          break;
        case "ArrowUp": // up arrow -- dec y by 1
          valueNew = textInputs[++indexActive].getStateValue() - 1;
          evt.preventDefault();
          break;
        case "ArrowRight": // right arrow -- inc x by 1
          valueNew = textInputs[indexActive].getStateValue() + 1;
          evt.preventDefault();
          break;
        case "ArrowDown": // down arrow -- inc y by 1
          valueNew = textInputs[++indexActive].getStateValue() + 1;
          evt.preventDefault();
          break;
        default: // ignore all others
          return;
      }

      textInputs[indexActive].updateFull(valueNew); // do update
    });
  }

  /* Set initial state based on parameters */
  const state = initDemoState(param);

  /* Radius slider update */
  const controlR = document.getElementById("radius-slider");
  controlR.value = state.radius; // match initial value with state
  controlR.max = state.radiusMax;
  controlR.addEventListener("input", (evt) => {
    textInputs[0].elementText.textContent = controlR.value;
    state.radius = controlR.value;
    updateResults();
  });

  /* Create text inputs to set point locations and arc radius */
  const textInputs = [
    new TextInput(
      "value-r",
      "radius-slider",
      state.radiusMax,
      () => state.radius,
      (value) => (state.radius = value),
    ),
    new TextInput(
      "value-P0x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[0].x,
      (value) => (state.controlPoints[0].x = value),
    ),
    new TextInput(
      "value-P0y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[0].y,
      (value) => (state.controlPoints[0].y = value),
    ),
    new TextInput(
      "value-P1x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[1].x,
      (value) => (state.controlPoints[1].x = value),
    ),
    new TextInput(
      "value-P1y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[1].y,
      (value) => (state.controlPoints[1].y = value),
    ),
    new TextInput(
      "value-P2x",
      null,
      state.canvasSize.x,
      () => state.controlPoints[2].x,
      (value) => (state.controlPoints[2].x = value),
    ),
    new TextInput(
      "value-P2y",
      null,
      state.canvasSize.y,
      () => state.controlPoints[2].y,
      (value) => (state.controlPoints[2].y = value),
    ),
  ];

  /* Allow arrow keystrokes to alter point location */
  addPointArrowMoves();

  /* Initialize the text inputs from the associated state values */
  textInputs.forEach((ti) => (ti.elementText.textContent = ti.getStateValue()));

  /* Canvas setup */
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = state.canvasSize.x;
  canvas.height = state.canvasSize.y;

  /* Mouse may move a moving point, move over and hover an unhovered
   * point, move across a hovered point, or move on other parts of
   * the canvas */
  canvas.addEventListener("mousemove", (evt) =>
    doMouseMove(
      Math2D.point(evt.offsetX, evt.offsetY),
      (evt.buttons & 1) === 1,
    ),
  );

  /* Left mouse press on hovered point transitions to a moving point */
  canvas.addEventListener("mousedown", (evt) => {
    if (evt.button !== 0) {
      // ignore all but left clicks
      return;
    }

    const [pointHitIndex, testDelta] = hitTestPoints(
      Math2D.point(evt.offsetX, evt.offsetY),
      state.controlPoints,
      state.hitDistance,
    );
    if (pointHitIndex < 0) {
      // cursor over no point
      return; // nothing to do
    }

    /* Cursor over (hovered) point */
    state.pointActiveMoving = true; // point now moving
    canvas.style.cursor = "move"; // Set to moving cursor
    state.mouseDelta = testDelta; // dist of cursor from point center
  });

  /* Left mouse release if moving point transitions to a hovering point */
  canvas.addEventListener("mouseup", (evt) => {
    if (evt.button !== 0) {
      // ignore all but left clicks
      return;
    }

    /* If there was a moving point, it transitions to a hovering
     * point */
    if (state.pointActiveMoving) {
      state.pointActiveMoving = false; // point now hovering
      canvas.style.cursor = "pointer";
    }
  });

  /* Handle case that mouse reenters canvas with point moving.
   * If left button down on entry, continue move; otherwise stop
   * move. May also need to adjust hovering state */
  canvas.addEventListener("mouseenter", (evt) =>
    doMouseMove(
      Math2D.point(evt.offsetX, evt.offsetY),
      (evt.buttons & 1) === 1,
    ),
  );

  drawCanvas(); // Draw initial canvas
  ConstructionPoints.print(state.T1, state.T2, state.C); // output pts
</script>
```

```css hidden
label {
  margin: 10px;
}
.input {
  color: #00f;
  text-decoration: underline;
}
#canvas {
  border: 1px solid #000;
}
```

{{ EmbedLiveSample("constructing_an_arcto_path", 350, 450) }}

### Animating `arcTo()` drawing

For this example, you can play around with the arc radius to see how
the path changes. The path is drawn from the starting point _p0_ using `arcTo()` with control points
_p1_ and _p2_ and a radius that varies from 0 to the maximum radius selected with the slider.
Then a `lineTo()` call completes the path to _p2_.

#### HTML

```html
<div>
  <label for="radius">Radius: </label>
  <input name="radius" type="range" id="radius" min="0" max="100" value="50" />
  <label for="radius" id="radius-output">50</label>
</div>
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const controlOut = document.getElementById("radius-output");
const control = document.getElementById("radius");
control.oninput = () => {
  controlOut.textContent = radius = control.value;
};

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };
let radius = control.value; // match with init control value

function labelPoint(p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
}

function drawPoints(points) {
  points.forEach((p, i) => {
    labelPoint(p, { x: 0, y: -20 }, `p${i}`);
  });
}

// Draw arc
function drawArc([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function loop(t) {
  const angle = (t / 1000) % (2 * Math.PI);
  const rr = Math.abs(Math.cos(angle) * radius);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
}

loop(0);
```

#### Result

{{EmbedLiveSample('animating_arcto_drawing', 315, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
