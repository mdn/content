---
title: Building up a basic demo with Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
page-type: guide
---

{{GamesSidebar}}

A typical 3D scene in a game — even the simplest one — contains standard items like shapes located in a coordinate system, a camera to view it, lights and materials to make it look better, animations to make it look alive, etc. **Three.js**, as with any other 3D library, provides built-in helper functions to help you implement common 3D functionality more quickly. In this article we'll take you through the real basics of using Three.js, including setting up a development environment, structuring the necessary HTML, the fundamental objects of Three, and how to build up a basic demo.

Three is one of the most popular [WebGL](/en-US/docs/Web/API/WebGL_API) libraries, and it is easy to get started with.
We are not saying it is better than any other WebGL library, and you should feel free to try other libraries.

> [!NOTE]
> This guide was last updated in November 2024, and is compatible with Three.js version `r79`.

## Development setup

To start developing with Three.js, you should make sure you are using a modern browser with good [WebGL](/en-US/docs/Web/API/WebGL_API) support.

In your code, you can import Three.js [using a CDN or use Node.js](https://threejs.org/docs/#manual/en/introduction/Installation).
If you're including it from a CDN, you can use the following URL in your HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

A Node.js setup with Three.js installed as a dependency is convenient if you want to develop against specific Three.js versions and it can speed up collaboration and deployment:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternatively, you can download the [latest Three.js library](https://github.com/mrdoob/three.js/archive/master.zip) and copy the minified version of Three.js from the uncompressed archive at `build/three.module.min.js` into your project.
Bear in mind that the archives include source files, which makes the download size approximately 350MB.

Whichever way you choose to get started, make sure you have the [Three.js documentation](https://threejs.org/docs/) open somewhere while you're working for reference.

### HTML starter for Three.js

If you're building your project locally in an IDE, here's the HTML structure to get started:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Three.js demo</title>
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
    <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

It contains some basic information like the document {{htmlelement("title")}}, and some CSS to set the `width` and `height` of the {{htmlelement("canvas")}} element, that Three.js will insert on the page to 100% to fill the entire available viewport space. The first {{htmlelement("script")}} element includes the Three.js library in the page, and we will write our example code inside the second. There are two helper variables already included, which store the window's `width` and `height`.

Before reading further, copy this code to a new text file, and save it in your working directory as `index.html`.

## Renderer

A renderer is a tool which displays scenes right in your browser. There are a few different renderers: WebGL is the default, and others you can use are Canvas, SVG, CSS, and DOM. They differ in how everything is rendered, so the WebGL implementation will implement differently than the CSS one. Despite the variety of ways they achieve the goal, the experience will look the same for the user. Thanks to this approach, a fallback can be used, if a desired technology is not supported by the browser.

The code below creates a new WebGL renderer, sets its size to fit the whole available space on the screen, and appends the DOM structure to the page.
You might have noticed the `antialias` parameter in the first line — this renders the edges of shapes more smoothly. The `setClearColor()` method sets our background to a light gray color, instead of the default black one.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Add this code into our second {{htmlelement("script")}} element, just below the JavaScript comment.

## Scene

A scene is the place where everything happens.
When creating new objects in the demo, we add them all inside a scene to make them visible on the screen.
In three.js, the scene is represented by a `Scene` object. Let's create it, by adding the following line below our previous lines:

```js
const scene = new THREE.Scene();
```

Later, we will be using the `.add()` method, to add objects to this scene.

## Camera

We have the rendered scene, but we still need to add a camera to view our handiwork — imagine a movie set without any cameras. The following lines put the camera in place in the 3D coordinate system, and point it in the direction of our scene:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Add the above lines to your code, below those previously added.

There are other types of camera available (Cube, Orthographic), but the simplest is Perspective. To initialize it, we have to set its field of view and aspect ratio: the former is used to set how much is seen, and the latter is important for the objects on the screen to have the right proportions when rendered, and not look stretched. Let's explain values we are setting for the code above:

- The value we set for the field of view, 70, is something we can experiment with: the higher the value, the greater the amount of scene the camera will show. Imagine a normal camera view, versus a fish eye effect, which allows a lot more to be seen. The default value is 50.
- The aspect ratio is set to the current width and height of the window so it will be dynamically adjusted. We could set a fixed ratio — for example 16 ⁄ 9, which is the aspect ratio of a widescreen TV. The default value is 1.
- The `z` position, with the value of 50 units, is the distance between the camera and the center of the scene on the `z` axis. Here we're moving the camera back, so the objects in the scene can be viewed. 50 feels about right. It's not too near, or too far, and the sizes of the objects allow them to stay on the scene, within the given field of view. The `x` and `y` values, if not specified, will default to 0.

You should experiment with these values and see how they change what you see in the scene.
The distance values (e.g. for the camera z position) are unitless, and can be anything you deem suitable for your scene: millimeters, meters, feet, or miles. It's up to you.

## Rendering the scene

Everything is ready, but we still can't see anything. Although we've set up the renderer, we still need to render everything. Our `render()` function will do this job, with a little help from [`requestAnimationFrame()`](/en-US/docs/Web/API/Window/requestAnimationFrame), which causes the scene to be re-rendered constantly on every frame:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

On every new frame the `render` function is invoked, and the `renderer` renders the `scene` and the `camera`. Right after the function declaration, we're invoking it for the first time to start the loop, after which it will be used indefinitely.

Again, add this new code below your previous additions. Try saving the file and opening it in your browser. You should now see a gray window. Congratulations!

## Geometry

Now our scene is properly rendering, we can start adding 3D shapes. To speed up development, Three.js provides a bunch of predefined primitives, which you can use to create shapes instantly in a single line of code. There's cubes, spheres, cylinders, and more complicated shapes available. Detail like drawing required vertices and faces, for a given shape, is handled by the Three framework, so we can focus on higher level coding. Let's start, by defining the geometry for a cube shape, adding the following just above the `render()` function:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In this case, we define a simple cube that is 10 x 10 x 10 units. The geometry itself is not enough though, we also need a material that will be used for our shape.

## Material

A material is what covers an object, the colors, or textures on its surface. In our case, we will choose a simple blue color to paint our box. There are a number of predefined materials which can be used: Basic, Phong, Lambert. Let's play with the last two later, but for now, the Basic one should be enough:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

To apply the material to a geometry, a mesh is used. This takes a shape, and adds the specified material to every face:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Again, add this line below the one you previously added.

## Adding the cube to the scene

We've now created a cube, using the geometry and material defined earlier. The last thing to do is to place the cube to our scene. Add this line below the previous one:

```js
scene.add(cube);
```

If you save, and refresh your Web browser, our object will now look like a square, because it's facing the camera. The good thing about objects, is that we can move them on the scene, however we want. For example, rotating and scaling as we like. Let's apply a little rotation to the cube, so we can see more than one face. Again, adding our code below the previous:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js shape example

If you've followed everything so far without any problems, you've created your first object in a 3D environment using Three.js!
It was easier than you thought, right?
Your code should look like the following live sample.
You can click "Play" to view and edit the code in the MDN Playground:

```html hidden live-sample___three-js-intro
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js hidden live-sample___three-js-intro
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-intro", "", "400px")}}

## More shapes and materials

Now we will add more shapes to the scene, and explore other shapes, materials, lighting, and more. Let's move the cube to the left, to make space for some friends. Adding the following line just below the previous one:

```js
cube.position.x = -25;
```

Now onto more shapes and materials. What might happen when you add a torus, wrapped in the Phong material? Try adding the following lines, just below the lines defining the cube.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

These lines will add a torus geometry; the `TorusGeometry()` method's parameters define, and the parameters are `radius`, `tube diameter`, `radial segment count`, and `tubular segment count`. The Phong material should look more glossy than the box's simple Basic material, though right now our torus will just look black.
Adding a rotation gives the torus an initial depth so it doesn't look flat.

We can choose more fun predefined shapes. Let's play some more. Add the following lines, below those defining the torus:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

This time, we are creating a dodecahedron, a shape containing twelve flat faces. The parameter to `DodecahedronGeometry()` defines the size of the object. We're using a Lambert material, similar to Phong, but should be less glossy. Again it's black, for now. We're moving the object to the right, so it's not in the same position as the box, or torus.

As mentioned above, the new objects currently just look black. To have both, the Phong and Lambert materials properly visible, we need to introduce a source of light.

## Lights

There are various types of light sources available in Three.js. The most basic is `PointLight`, which works like a flashlight, shining a spotlight in a defined direction. Add the following lines, below your shape definitions:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

We define a white point of light, set its position a little away from the center of the scene, so it can light up some parts of the shapes, finally adding it to the scene. Now everything works as it should, all three shapes are visible. You should check the documentation for other types of lights, like Ambient, Directional, Hemisphere, or Spot. Experiment placing them on our scene, to see how they affect it.

This is good progress, but we can make it more exciting! In a game, something is usually happening. We might see animations and such. So let's try breathing a little life into these shapes, by animating them!

## Animation

We already used rotation to adjust the position of the cube. We can also scale the shapes, or change their positions. To show animation, we need to make changes to these values inside the render loop, so they update on each frame.

### Rotation

Rotating is straightforward. You add a value to a given direction of rotation on each frame. Add this line of code, right after the `requestAnimationFrame()` invocation inside the `render` function:

```js
cube.rotation.y += 0.01;
```

This rotates the cube on every frame, by a tiny bit, so the animation looks smooth.

### Scaling

We can also scale an object. Applying a constant value, we would make it grow, or shrink just once. Let's make things more interesting. First, we implement a helper variable called `t` for counting elapsed time. Add it right before the `render()` function:

```js
let t = 0;
```

Now let's increase the value by a given constant value, on each frame of the animation. Add the following lines, just below the `requestAnimationFrame()` invocation:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

We use `Math.sin`, ending up with quite an interesting result. This scales the torus, repeating the process, as `sin` is a periodic function. We're wrapping the scale value in `Math.abs`, to pass the absolute values, greater or equal to 0. As sin is between -1 and 1, negative values might render out torus in unexpected way. In this case it looks black half the time.

### Moving

Aside from rotation and scaling, we can additionally move objects around the scene. Add the following, again just below our `requestAnimationFrame()` invocation:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

This will move the dodecahedron up and down by applying the `sin()` value to the y-axis on each frame, and a little adjustment to make it look cooler. Try changing these values, to see how it affects the animations.

## Three.js example with animation

Here's the final code with animated shapes.
You can click "Play" to edit the example in the MDN Playground:

```html hidden live-sample___three-js-animation
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js live-sample___three-js-animation
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.position.x = -25;
cube.rotation.set(0.4, 0.2, 0);
scene.add(cube);

const torusGeometry = new THREE.TorusGeometry(7, 1, 16, 32);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);

const strangeGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);

let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cube.rotation.y += 0.01;
  torus.scale.y = Math.abs(Math.sin(t));
  dodecahedron.position.y = -7 * Math.sin(t * 2);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-animation", "", "400px")}}

## Summary

Now you know the basics of Three.js; happy experimentation!
You can continue reading the [3D Games on the Web](/en-US/docs/Games/Techniques/3D_on_the_web) documentation if you want to learn more.
You could also try learning WebGL, to gain a better understanding of what's going on underneath.
See our [WebGL documentation](/en-US/docs/Web/API/WebGL_API) for more information.
