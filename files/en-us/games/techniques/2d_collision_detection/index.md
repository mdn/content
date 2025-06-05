---
title: 2D collision detection
slug: Games/Techniques/2D_collision_detection
page-type: guide
---

{{GamesSidebar}}

Algorithms to detect collision in 2D games depend on the type of shapes that can collide (e.g., Rectangle to Rectangle, Rectangle to Circle, Circle to Circle). Generally you will have a simple generic shape that covers the entity known as a "hitbox" so even though collision may not be pixel perfect, it will look good enough and be performant across multiple entities. This article provides a review of the most common techniques used to provide collision detection in 2D games.

## Engine code

The demos in this page don't rely on any external library, so we implement all the orchestration ourselves, which includes rendering, handling user input, and invoking behaviors of each entity. The code is shown below (it won't be repeated for each example):

```html
<div id="container"></div>
```

```css
.entity {
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: blue;
}

.movable {
  left: 50px;
  top: 50px;
  background-color: red;
}

.collision-state {
  background-color: green !important;
}
```

```js
const collider = {
  moveableEntity: null,
  staticEntities: [],
  checkCollision() {
    // Important: the isCollidingWith method is what we are implementing
    const isColliding = this.staticEntities.some((staticEntity) =>
      this.moveableEntity.isCollidingWith(staticEntity),
    );
    this.moveableEntity.setCollisionState(isColliding);
  },
};

class BaseEntity {
  ref;
  position;
  constructor(ref) {
    this.ref = ref;
    this.position = {
      x: parseInt(ref.style.left, 10),
      y: parseInt(ref.style.top, 10),
    };
  }
  shiftPosition(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    this.redraw();
  }
  redraw() {
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
  }
  setCollisionState(isColliding) {
    if (isColliding && !this.ref.classList.contains("collision-state")) {
      this.ref.classList.add("collision-state");
    } else if (!isColliding) {
      this.ref.classList.remove("collision-state");
    }
  }
  isCollidingWith(other) {
    throw new Error("isCollidingWith must be implemented in subclasses");
  }
}

const container = document.getElementById("container");

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      collider.moveableEntity.shiftPosition(-5, 0);
      break;
    case "ArrowUp":
      collider.moveableEntity.shiftPosition(0, -5);
      break;
    case "ArrowRight":
      collider.moveableEntity.shiftPosition(5, 0);
      break;
    case "ArrowDown":
      collider.moveableEntity.shiftPosition(0, 5);
      break;
  }
  collider.checkCollision();
});
```

## Axis-aligned bounding box

One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.

```html hidden
<div id="container"></div>
```

```css hidden
.entity {
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: blue;
}

.movable {
  left: 50px;
  top: 50px;
  background-color: red;
}

.collision-state {
  background-color: green !important;
}
```

```js hidden
const collider = {
  moveableEntity: null,
  staticEntities: [],
  checkCollision() {
    // Important: the isCollidingWith method is what we are implementing
    const isColliding = this.staticEntities.some((staticEntity) =>
      this.moveableEntity.isCollidingWith(staticEntity),
    );
    this.moveableEntity.setCollisionState(isColliding);
  },
};

class BaseEntity {
  ref;
  position;
  constructor(ref) {
    this.ref = ref;
    this.position = {
      x: parseInt(ref.style.left, 10),
      y: parseInt(ref.style.top, 10),
    };
  }
  shiftPosition(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    this.redraw();
  }
  redraw() {
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
  }
  setCollisionState(isColliding) {
    if (isColliding && !this.ref.classList.contains("collision-state")) {
      this.ref.classList.add("collision-state");
    } else if (!isColliding) {
      this.ref.classList.remove("collision-state");
    }
  }
  isCollidingWith(other) {
    throw new Error("isCollidingWith must be implemented in subclasses");
  }
}

const container = document.getElementById("container");

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      collider.moveableEntity.shiftPosition(-5, 0);
      break;
    case "ArrowUp":
      collider.moveableEntity.shiftPosition(0, -5);
      break;
    case "ArrowRight":
      collider.moveableEntity.shiftPosition(5, 0);
      break;
    case "ArrowDown":
      collider.moveableEntity.shiftPosition(0, 5);
      break;
  }
  collider.checkCollision();
});
```

```js
class BoxEntity extends BaseEntity {
  width = 20;
  height = 20;

  isCollidingWith(other) {
    return (
      this.position.x < other.position.x + other.width &&
      this.position.x + this.width > other.position.x &&
      this.position.y < other.position.y + other.height &&
      this.position.y + this.height > other.position.y
    );
  }
}
```

```js hidden
// create a bunch of random divs
for (let i = 0; i < 100; i++) {
  const newStaticDiv = document.createElement("div");
  newStaticDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
  newStaticDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
  newStaticDiv.classList.add("entity");
  container.appendChild(newStaticDiv);
  const entity = new BoxEntity(newStaticDiv);
  collider.staticEntities.push(entity);
}

// create the moveable div
const newMoveableDiv = document.createElement("div");
newMoveableDiv.style.left = "500px";
newMoveableDiv.style.top = "500px";
newMoveableDiv.classList.add("entity", "movable");
container.appendChild(newMoveableDiv);
const entity = new BoxEntity(newMoveableDiv);
collider.moveableEntity = entity;
```

{{EmbedLiveSample("axis-aligned_bounding_box", "", 550)}}

## Circle collision

Another simple shape for collision detection is between two circles. This algorithm works by taking the center points of the two circles and ensuring the distance between the center points are less than the two radii added together.

```html hidden
<div id="container"></div>
```

```css hidden
.entity {
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: blue;
}

.movable {
  left: 50px;
  top: 50px;
  background-color: red;
}

.collision-state {
  background-color: green !important;
}
```

```css
.entity {
  border-radius: 50%;
}
```

```js hidden
const collider = {
  moveableEntity: null,
  staticEntities: [],
  checkCollision() {
    // Important: the isCollidingWith method is what we are implementing
    const isColliding = this.staticEntities.some((staticEntity) =>
      this.moveableEntity.isCollidingWith(staticEntity),
    );
    this.moveableEntity.setCollisionState(isColliding);
  },
};

class BaseEntity {
  ref;
  position;
  constructor(ref) {
    this.ref = ref;
    this.position = {
      x: parseInt(ref.style.left, 10),
      y: parseInt(ref.style.top, 10),
    };
  }
  shiftPosition(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    this.redraw();
  }
  redraw() {
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
  }
  setCollisionState(isColliding) {
    if (isColliding && !this.ref.classList.contains("collision-state")) {
      this.ref.classList.add("collision-state");
    } else if (!isColliding) {
      this.ref.classList.remove("collision-state");
    }
  }
  isCollidingWith(other) {
    throw new Error("isCollidingWith must be implemented in subclasses");
  }
}

const container = document.getElementById("container");

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      collider.moveableEntity.shiftPosition(-5, 0);
      break;
    case "ArrowUp":
      collider.moveableEntity.shiftPosition(0, -5);
      break;
    case "ArrowRight":
      collider.moveableEntity.shiftPosition(5, 0);
      break;
    case "ArrowDown":
      collider.moveableEntity.shiftPosition(0, 5);
      break;
  }
  collider.checkCollision();
});
```

```js
class CircleEntity extends BaseEntity {
  radius = 10;

  isCollidingWith(other) {
    const dx =
      this.position.x + this.radius - (other.position.x + other.radius);
    const dy =
      this.position.y + this.radius - (other.position.t + other.radius);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.radius + other.radius;
  }
}
```

```js hidden
// create a bunch of random divs
for (let i = 0; i < 100; i++) {
  const newStaticDiv = document.createElement("div");
  newStaticDiv.classList.add("entity");
  newStaticDiv.style.top = `${Math.floor(Math.random() * 500)}px`;
  newStaticDiv.style.left = `${Math.floor(Math.random() * 500)}px`;
  container.appendChild(newStaticDiv);
  const entity = new CircleEntity(newStaticDiv);
  collider.staticEntities.push(entity);
}

// create the moveable div
const newMoveableDiv = document.createElement("div");
newMoveableDiv.style.left = "500px";
newMoveableDiv.style.top = "500px";
newMoveableDiv.classList.add("entity", "movable");
container.appendChild(newMoveableDiv);
const entity = new CircleEntity(newMoveableDiv);
collider.moveableEntity = entity;
```

> [!NOTE]
> The circles' `x` and `y` coordinates refer to their top left corners, so we need to add the radius to compare their centers.

{{EmbedLiveSample("circle_collision", "", 550)}}

## Separating Axis Theorem

This is a collision algorithm that can detect a collision between any two _convex_ polygons. It's more complicated to implement than the above methods but is more powerful. The complexity of an algorithm like this means we will need to consider performance optimization, covered in the next section.

Implementing SAT is out of scope for this page so see the recommended tutorials below:

1. [Separating Axis Theorem (SAT) explanation](https://www.sevenson.com.au/programming/sat/)
2. [Collision detection and response](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Collision detection Using the Separating Axis Theorem](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Separating Axis Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Collision performance

While some of these algorithms for collision detection are simple enough to calculate, it can be a waste of cycles to test _every_ entity with every other entity. Usually games will split collision into two phases, broad and narrow.

### Broad phase

Broad phase should give you a list of entities that _could_ be colliding. This can be implemented with a spatial data structure that will give you a rough idea of where the entity exists and what exist around it. Some examples of spatial data structures are Quad Trees, R-Trees or a Spatial Hashmap.

### Narrow phase

When you have a small list of entities to check you will want to use a narrow phase algorithm (like the ones listed above) to provide a certain answer as to whether there is a collision or not.
