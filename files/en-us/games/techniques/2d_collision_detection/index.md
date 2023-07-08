---
title: 2D collision detection
slug: Games/Techniques/2D_collision_detection
page-type: guide
---

{{GamesSidebar}}

Algorithms to detect collision in 2D games depend on the type of shapes that can collide (e.g. Rectangle to Rectangle, Rectangle to Circle, Circle to Circle). Generally you will have a simple generic shape that covers the entity known as a "hitbox" so even though collision may not be pixel perfect, it will look good enough and be performant across multiple entities. This article provides a review of the most common techniques used to provide collision detection in 2D games.

## Axis-Aligned Bounding Box

One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.

```html hidden
<div id="cr-stage"></div>
<p>
  Move the rectangle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5, w: 50, h: 50 };
const dim2 = { x: 20, y: 10, w: 60, h: 40 };

const rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

const rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  ) {
    // Collision detected!
    this.color("green");
  } else {
    // No collision
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('Axis-Aligned_Bounding_Box', '700', '300') }}

> **Note:** [Another example without Canvas or external libraries](https://jsfiddle.net/jlr7245/217jrozd/3/).

## Circle Collision

Another simple shape for collision detection is between two circles. This algorithm works by taking the center points of the two circles and ensuring the distance between the center points are less than the two radii added together.

```html hidden
<div id="cr-stage"></div>
<p>
  Move the circle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5 };
const dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle(radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw() {
    const ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

const circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

const circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", function () {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const colliding = distance < circle1.radius + circle2.radius;
  this.color = colliding ? "green" : "blue";
});
```

{{ EmbedLiveSample('Circle_Collision', '700', '300') }}

> **Note:** [Here is another example without Canvas or external libraries.](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## Separating Axis Theorem

This is a collision algorithm that can detect a collision between any two \*convex\* polygons. It's more complicated to implement than the above methods but is more powerful. The complexity of an algorithm like this means we will need to consider performance optimization, covered in the next section.

Implementing SAT is out of scope for this page so see the recommended tutorials below:

1. [Separating Axis Theorem (SAT) explanation](https://www.sevenson.com.au/programming/sat/)
2. [Collision detection and response](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Collision detection Using the Separating Axis Theorem](https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Separating Axis Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Collision Performance

While some of these algorithms for collision detection are simple enough to calculate, it can be a waste of cycles to test \*every\* entity with every other entity. Usually games will split collision into two phases, broad and narrow.

### Broad Phase

Broad phase should give you a list of entities that \*could\* be colliding. This can be implemented with a spacial data structure that will give you a rough idea of where the entity exists and what exist around it. Some examples of spacial data structures are Quad Trees, R-Trees or a Spacial Hashmap.

### Narrow Phase

When you have a small list of entities to check you will want to use a narrow phase algorithm (like the ones listed above) to provide a certain answer as to whether there is a collision or not.
