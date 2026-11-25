---
title: "CanvasRenderingContext2D: arcTo() method"
short-title: arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.arcTo
---

{{APIRef("Canvas API")}}

The **`CanvasRenderingContext2D.arcTo()`** method of the Canvas 2D API adds a circular arc to the current sub-path, using the given control points and radius.
The arc is automatically connected to the path's latest point with a straight line if necessary, for example if the starting point and control points are in a line.

This method is commonly used for making rounded corners.

> [!NOTE]
> You may get unexpected results when using a
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
```

```css hidden
label {
  margin: 10px;
}
.input {
  color: blue;
  text-decoration: underline;
}
#canvas {
  border: 1px solid black;
}
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.height = 300;

const points = [
  [50, 50],
  [275, 150],
  [50, 275],
];
const state = { radius: 75 };
const slider = document.getElementById("radius-slider");
slider.max = 250;

const clamp = (value, max) => Math.max(0, Math.min(value, max));
const subtract = (a, b) => a.map((value, i) => value - b[i]);
const along = (point, distance, direction) =>
  point.map((value, i) => value + distance * direction[i]);

function findConstruction() {
  const directions = [points[0], points[2]].map((p) => subtract(p, points[1]));
  const lengths = directions.map((d) => Math.hypot(...d));
  if (lengths.includes(0)) return null; // Coincident points

  const [u, v] = directions.map((d, i) => d.map((value) => value / lengths[i]));
  const cosine = u[0] * v[0] + u[1] * v[1];
  if (Math.abs(cosine) > 0.999999) return null; // Collinear, or nearly so

  // Each tangent point and the center form a right triangle with P1.
  const distance = state.radius / Math.tan(Math.acos(cosine) / 2);
  const T1 = along(points[1], distance, u);
  const T2 = along(points[1], distance, v);
  const side = Math.sign(u[0] * v[1] - u[1] * v[0]);
  const C = along(T1, side * state.radius, [-u[1], u[0]]);
  const ends = [u, v].map((d) =>
    along(points[1], canvas.width + canvas.height, d),
  );
  return { T1, T2, C, ends };
}

function circle(point, radius) {
  ctx.beginPath();
  ctx.arc(...point, radius, 0, 2 * Math.PI);
}

function line(points) {
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  points.slice(1).forEach((point) => ctx.lineTo(...point));
  ctx.stroke();
}

function dots(points, color) {
  ctx.fillStyle = color;
  points.forEach((point) => {
    circle(point, 4);
    ctx.fill();
  });
}

function labels(points, names) {
  ctx.fillStyle = "black";
  points.forEach(([x, y], i) => ctx.fillText(names[i], x, y - 15));
}

function draw(construction) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "italic 14pt sans-serif";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "green";
  ctx.setLineDash(construction ? [4, 6] : [2, 6]);

  if (construction) {
    const { T1, T2, C, ends } = construction;
    dots([C, T1, T2], "green");
    line([ends[0], points[1], ends[1]]);
    line([C, T1]);
    circle(C, state.radius);
    ctx.stroke();
    labels([C, T1, T2], ["C", "T₁", "T₂"]);
    ctx.fillText(" r", (T1[0] + C[0]) / 2, (T1[1] + C[1]) / 2);
  } else {
    line(points);
  }

  dots(points, "blue");
  labels(points, ["P₀", "P₁", "P₂"]);

  // Draw the actual arcTo() path over the construction.
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  ctx.arcTo(...points[1], ...points[2], state.radius);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.setLineDash([]);
  ctx.stroke();
}

function update() {
  inputs.forEach(({ element, object, key }) => {
    const text = String(object[key]);
    // Avoid replacing unchanged text, which would move the editing caret.
    if (element.textContent !== text) element.textContent = text;
  });
  slider.value = state.radius;
  const construction = findConstruction();
  for (const name of ["T1", "T2", "C"]) {
    document.getElementById(`value-${name}`).textContent = construction
      ? `(${construction[name].join(", ")})`
      : "undefined";
  }
  draw(construction);
}

function bindInput(id, object, key, max) {
  const element = document.getElementById(id);
  const set = (value) => {
    object[key] = clamp(value, max);
    update();
  };
  element.addEventListener("input", () => {
    set(parseInt(element.textContent, 10) || 0);
  });
  element.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      event.preventDefault(); // Keep the editable value on one line.
    } else if (["ArrowUp", "ArrowDown"].includes(event.code)) {
      event.preventDefault();
      set(Number(element.textContent) + (event.code === "ArrowUp" ? 1 : -1));
    }
  });
  return { element, object, key, set };
}

const radiusInput = bindInput("value-r", state, "radius", Number(slider.max));
const pointInputs = points.map((point, i) =>
  ["x", "y"].map((axis, key) =>
    bindInput(
      `value-P${i}${axis}`,
      point,
      key,
      key === 0 ? canvas.width : canvas.height,
    ),
  ),
);
const inputs = [radiusInput, ...pointInputs.flat()];
slider.addEventListener("input", () => radiusInput.set(slider.valueAsNumber));

// Arrow keys on a point label move that point in either direction.
const arrows = {
  ArrowLeft: [0, -1],
  ArrowRight: [0, 1],
  ArrowUp: [1, -1],
  ArrowDown: [1, 1],
};
points.forEach((point, i) => {
  document
    .getElementById(`value-P${i}`)
    .addEventListener("keydown", (event) => {
      const arrow = arrows[event.code];
      if (!arrow) return;
      event.preventDefault();
      const [axis, step] = arrow;
      pointInputs[i][axis].set(point[axis] + step);
    });
});

const mousePoint = (event) => [event.offsetX, event.offsetY];
const hitTest = (position) =>
  points.findIndex((point) => Math.hypot(...subtract(position, point)) <= 5);
let dragging = -1;
let mouseDelta;

function mouseMove(event) {
  const position = mousePoint(event);
  if (dragging >= 0 && event.buttons & 1) {
    // Preserve the grab offset and keep the point within the canvas.
    subtract(position, mouseDelta).forEach((value, axis) => {
      points[dragging][axis] = clamp(
        value,
        axis === 0 ? canvas.width : canvas.height,
      );
    });
    update();
  } else {
    dragging = -1;
    canvas.style.cursor = hitTest(position) < 0 ? "auto" : "pointer";
  }
}

canvas.addEventListener("mousedown", (event) => {
  if (event.button !== 0) return;
  const position = mousePoint(event);
  dragging = hitTest(position);
  if (dragging < 0) return;
  mouseDelta = subtract(position, points[dragging]);
  canvas.style.cursor = "move";
});
canvas.addEventListener("mouseup", (event) => {
  if (event.button === 0 && dragging >= 0) {
    dragging = -1;
    canvas.style.cursor = "pointer";
  }
});
canvas.addEventListener("mousemove", mouseMove);
// Resume dragging on reentry only if the left button is still down.
canvas.addEventListener("mouseenter", mouseMove);

update();
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
let radius = control.value; // match with init control value
control.oninput = () => {
  controlOut.textContent = radius = control.value;
};

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };

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
