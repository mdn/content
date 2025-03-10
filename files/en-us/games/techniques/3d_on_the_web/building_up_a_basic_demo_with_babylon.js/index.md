---
title: Building up a basic demo with Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
page-type: guide
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) is one of the most popular 3D game engines used by developers. As with any other 3D library it provides built-in functions to help you implement common 3D functionality more quickly. In this article we'll take you through the basics of using Babylon.js, including setting up a development environment, structuring the necessary HTML, and writing the JavaScript code.

We will create a basic demo first — a cube rendered on the screen. If you have already worked through our _Building up a basic demo_ [series](/en-US/docs/Games/Techniques/3D_on_the_web) with [Three.js](/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) or [A-Frame](/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) (or you are familiar with other 3D libraries) you'll notice that Babylon.js works using similar concepts: camera, light and objects.

> [!NOTE]
> This guide was last updated in November 2024, and is compatible with Babylon.js version `7.34.1`.

## Development setup

To start developing with Babylon.js, you don't need much.
Make sure you are using a modern browser with good [WebGL](/en-US/docs/Web/API/WebGL_API) support.
It's useful to keep the [Babylon.js documentation](https://doc.babylonjs.com/) in a separate tab while you're working.

If you're developing locally in an IDE, make a directory to store your experiments in and save a copy of the [latest Babylon.js engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) inside that directory.
Alternatively, you can load Babylon.js from a CDN:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

If you don't want to develop locally, you can use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
With these editors, you can add `https://cdn.babylonjs.com/v7.34.1/babylon.js` as a JavaScript source so it's available in your code.

### HTML starter for Babylon.js

If you're building your project locally in an IDE, here's the HTML structure to get started:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Babylon.js demo</title>
    <style>
      html,
      body,
      canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    </style>
  </head>
  <body>
    <!--  The local copy of Babylon.js -->
    <script src="babylon.js"></script>
    <!--  or loaded via CDN: -->
    <!-- <script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script> -->

    <canvas id="render-canvas"></canvas>

    <script>
      const canvas = document.getElementById("render-canvas");
      /* All of our JavaScript code goes here */
    </script>
  </body>
</html>
```

It contains some basic information like the document {{htmlelement("title")}}, and some CSS to set the width and height of the {{htmlelement("canvas")}} element (which Babylon.js will use to render the content on) to fill the entire available viewport space. The first {{htmlelement("script")}} element includes the Babylon.js library in the page; we will write our example code in the second one. There is one variable already included, which will store a reference to the `<canvas>` element.

If you're developing in an IDE, copy this code to a new text file and save it in your working directory as `index.html`.

## Initializing the Babylon.js engine

We have to create a Babylon.js engine instance first (passing it the `<canvas>` element to render on) before we start developing our game. Add the following code to the bottom of your second `<script>` element:

```js
const engine = new BABYLON.Engine(canvas);
```

The `BABYLON` global object contains all the Babylon.js functions available in the engine.

## Creating a scene

A scene is the place where all the game content is displayed. While creating new objects in the demo, we will be adding them all to the scene to make them visible on the screen. Let's create a scene by adding the following lines just below our previous code:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

The scene is created and the second line sets the background color to light gray.

## Creating a rendering loop

To make the scene actually visible we have to render it. Add these lines at the end of the `<script>` element, just before the closing `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

We're using the engine's `runRenderLoop()` method to execute the `renderLoop()` function repeatedly on every frame — the loop will continue to render indefinitely until told to stop.

## Creating a camera

Now the setup code is in place we need to think about implementing the standard scene components: camera, light and objects. Let's start with the camera — add this line to your code below the scene creation and the line where we defined the `clearColor`.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

There are many [cameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) available in Babylon.js; `FreeCamera` is the most basic and universal one. To initialize it you need to pass it three parameters: any name you want to use for it, the coordinates where you want it to be positioned in the 3D space, and the scene you want to add it to.

You may have noticed the `BABYLON.Vector3()` method in use here — this defines a 3D position on the scene. Babylon.js is bundled with a complete math library for handling vectors, colors, matrices etc.

## Let there be light

There are various [light sources](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) available in Babylon.js. The most basic one is the `PointLight`, which works like a flashlight — shining a spotlight in a given direction. Add the following line below your camera definition:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

The parameters are very similar to the previously defined camera: the name of the light, a position in 3D space and the scene to which the light is added.

## Geometry

Now the scene is properly rendering we can start adding 3D shapes to it. To speed up development Babylon.js provides a bunch of [predefined primitives](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set) that you can use to create shapes instantly in a single line of code. There are cubes, spheres, cylinders and more complicated shapes available. Let's start by defining the geometry for a box shape — add the following new code below your previous additions:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

A mesh is a way the engine creates geometric shapes, so material (textures) can be easily applied to them later on. In this case we're creating a box using the `Mesh.CreateBox` method with its own name, a size of 2, and a declaration of which scene we want it added to.

The size or position values (e.g., for the box size) are unitless, and can basically be anything you deem suitable for your scene — millimeters, meters, feet, or miles — it's up to you.

If you save and refresh now, your object will look like a square, because it's facing the camera. The good thing about objects is that we can move them on the scene however we want, for example rotating and scaling. Let's apply a little rotation to the box, so we can see more than one face — again, add these lines below the previous one:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

The box looks black at the moment, because we haven't defined any material to apply to its faces. Let's deal with that next.

## Material

Material is that thing covering the object — the colors or texture on its surface. In our case we will use a simple blue color to paint our box. There are many types of [materials](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary) that can be used, but for now the standard one should be enough for us. Add these lines below the previous ones:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

The `StandardMaterial` takes two parameters: a name, and the scene you want to add it to. The second line defines an `emissiveColor` — the one that will be visible for us. We can use the built-in `Color3` function to define it. The third line assigns the newly created material to our box.

## Babylon.js shapes example

Congratulations, you've created your first object in a 3D environment using Babylon.js! It was easier than you thought, right?
Here's what we have created so far in a live sample.
You can click "Play" to edit the code in the MDN Playground:

```html hidden live-sample___babylon-js-intro
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js hidden live-sample___babylon-js-intro
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);

const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

const renderLoop = function () {
  scene.render();
};

engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-intro
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("babylon-js-intro", "", "400px")}}

## More shapes

We have a box on the scene already; now let's try adding more shapes.

### Torus

Let's try adding a torus — add the following lines below the previous code:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

This will create a torus and add it to the scene; the parameters are: name, diameter, thickness, tessellation (number of segments) and the scene to add it to. We also position it a bit to the left and rotate it on the `x` axis so it can be seen better. Now let's add a material:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

It looks similar to the box element — we're creating the standard material, giving it a grayish color and assigning it to the torus.

### Cylinder

Creating a cylinder and its material is done in almost exactly the same way as we did for the torus. Add the following code, again at the bottom of your script:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

The cylinder parameters are: name, height, diameter at the top, diameter at the bottom, tessellation, height subdivisions and the scene to add it to. It is then positioned to the right of the cube, rotated a bit so its 3D shape can be seen, and given a yellow material.

This is good progress, but we can make it more exciting! In a game, something is usually happening — we can see animations and such — so let's try to breathe some life into those shapes by animating them.

## Animation

We already used `position` and `rotation` to adjust the position of the shapes; we could also scale them. To show actual animation, we need to make changes to these values inside the rendering loop at the end of our code, so they are updated on every frame. Define a helper variable — `t` — that we will use for animations, just before the `renderLoop`, and decrement it on every frame inside the loop, like this:

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

The `t` variable will be incremented on every rendered frame.

### Rotation

Applying rotation is as easy as adding this line at the end of the `renderLoop` function:

```js
box.rotation.y = t * 2;
```

It will rotate the box along the `y` axis.

### Scaling

Add this line below the previous one to scale the torus:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

There's a little bit of adjustment made to make the animation look and feel nice. You can experiment with the values and see how it affects the animation.

### Moving

By changing the position of the cylinder directly we can move it on the scene — add this line below the previous one:

```js
cylinder.position.y = Math.sin(t * 3);
```

The cylinder will float up and down on the `y` axis thanks to the `Math.sin()` function.

## Babylon.js example with animation

Here's the final code with animated shapes.
You can click "Play" to edit the example in the MDN Playground:

```html hidden live-sample___babylon-js-animation
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js live-sample___babylon-js-animation
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: false,
  alpha: true,
});

const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;

const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;

const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;

let t = 0;
const renderLoop = function () {
  scene.render();
  t -= 0.01;
  box.rotation.y = t * 2;
  torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
  cylinder.position.y = Math.sin(t * 3);
};
engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-animation
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  color: rgba(204, 204, 204, 1);
}
```

{{embedlivesample("babylon-js-animation", "", "400px")}}
