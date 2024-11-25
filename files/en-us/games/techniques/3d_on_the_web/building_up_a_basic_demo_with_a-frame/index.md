---
title: Building up a basic demo with A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
page-type: guide
---

{{GamesSidebar}}

The [WebXR](/en-US/docs/Games/Techniques/3D_on_the_web/WebXR) and [WebGL](/en-US/docs/Web/API/WebGL_API) APIs already enable us to start creating virtual reality (VR) and augmented reality (AR) experiences inside web browsers.
To make this easier, Mozilla's [A-Frame](https://aframe.io/) framework provides a markup language that allows web developers to build 3D VR landscapes using a familiar approach, and which follows game development coding principles.
This is useful for quickly and successfully building prototypes and demos, without having to write a lot of JavaScript or GLSL.
This article explains how to get up and running with A-Frame, and how to use it to build up a simple demo.

> [!NOTE]
> This guide was last updated in November 2024, and is compatible with A-Frame version `1.6.0`.

## High level overview

A-Frame runs on most environments, such as desktop, mobile (iOS and Android), and devices such as Oculus Rift, Gear VR and HTC Vive.

A-Frame is built on top of [WebGL](/en-US/docs/Web/API/WebGL_API), and provides pre-built components to use in applications — models, video players, skyboxes, geometries, controls, animations, cursors, etc. It is based on the [entity component system](https://en.wikipedia.org/wiki/Entity_component_system), which is known in the game development world, but it targets web developers with a familiar markup structure that can be manipulated with JavaScript. The end result is 3D web experiences, which are VR-enabled by default.

## Development setup

To start developing with A-Frame, you should make sure you are using a modern browser with good [WebGL](/en-US/docs/Web/API/WebGL_API) support.
One option is to set up a VR device such as Oculus Rift or Google Cardboard for the experiments.

If you're developing locally in an IDE, make a directory to store your experiments in and save a copy of the [latest A-Frame engine](https://aframe.io/docs/1.6.0/introduction/installation.html) inside that directory.
Alternatively, you can load A-Frame from a CDN:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Whichever way you choose to get started, make sure you have the [A-Frame documentation](https://aframe.io/docs/) open somewhere while you're working for reference.

### HTML starter for A-Frame

If you're building your project locally in an IDE, here's the HTML structure to get started:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: A-Frame demo</title>
    <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
  </head>
  <body>
    <!-- HTML goes here -->
  </body>
</html>
```

This contains some basic information like the document `charset` and {{htmlelement("title")}}. The {{htmlelement("script")}} element includes the A-Frame framework in the page; we will write our example code inside the {{htmlelement("body")}} element.

### Initializing a scene in A-Frame

A scene is the place where everything happens. When creating new objects in the demo, we will be adding them all to the scene to make them visible on the screen. In A-Frame, the scene is represented by a [Scene entity](https://aframe.io/docs/core/scene.html).
An Entity is any element — it can be an object like a box, cylinder or cone, but it can also be a camera, light or sound source.

Let's create the scene by adding an `<a-scene>` element inside the `<body>` element:

```html
<a-scene></a-scene>
```

### Adding a cube

Adding the cube to the scene is done by adding a simple [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) element inside the `<a-scene>` element. Add it now:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

It contains a few parameters already defined: `color`, `position` and `rotation` — these are fairly obvious, and define the base color of the cube, the position inside the 3D scene, and the rotation of the cube.
The distance values (e.g. for the cube y position) are unitless, and can basically be anything you deem suitable for your scene — millimeters, meters, feet, or miles — it's up to you.

### Adding a background: Sky box

A sky box is a background for the 3D world, represented by an [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) element. In our case we will use a simple color, but it could also be an image, etc. Looking around would give an impression of being inside an open sky, a wooden barn — wherever you like! Add the following HTML before the `<a-cube>` element:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame shape example

At this point, if you save the code and refresh your browser you can already see the cube on the screen with our custom background:

```html live-sample___a-frame-intro
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>
  <a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
</a-scene>
```

```css hidden live-sample___a-frame-intro
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("a-frame-intro", "", "400px")}}

A-Frame takes care of setting up everything you need:

- A default light source and camera are included, so the cube is visible.
- The controls are already working: you can use the mouse for looking around and the keyboard for movement.
  Try the <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, and <kbd>D</kbd> keys).
- There's an "Enter VR mode" button in the bottom right corner of the screen, to allow you to shift to full screen, stereoscopic image viewing if you have the necessary VR hardware set up and ready.

### Specifying a camera

A camera entity can be created by adding an [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) element to the scene. We can set the position of the camera explicitly and move it back a little bit from the center of the scene, so we'll be able to see the shapes. Add this just before the closing `</a-scene>` tag:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

We've also defined a cursor for the given camera, using the `cursor-*` attributes (by default it is invisible.) — we've set its scale so it will more easily visible, its color, and some opacity so it won't completely cover the objects behind it.

### Adding lights

The basic light types in A-Frame are directional and ambient. The first type is a directional light placed somewhere on the scene while the second one reflects the light from the first type, so it looks more natural; this can be set globally. Add the new code below your previous additions — this uses the standard `<a-light>` element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

The directional light has a white color, its intensity is set to `0.5`, and it is placed at position `-1 1 2`. The ambient light only needs a color, which is also white.

### Adding some advanced geometry

We have a cube on the scene already; now let's try adding more shapes. We are not limited to the default entities like `<a-cube>` — using `<a-entity>` we can create custom advanced shapes. Let's try adding a torus — add this element below the previous code:

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

Our entity has a [torus primitive](https://aframe.io/docs/components/geometry.html#Torus), which represents its shape. We are passing some initial variables to that shape: the radius of the outer edge of the torus, the radius of the tube, and number of segments along the circumference of the tube face respectively. Rotation and position are set in the same way as we saw earlier.

### Defining a material

The torus is now visible on the scene, but its color doesn't look very good — this is because we have to create a [material](https://aframe.io/docs/components/material.html) to define the appearance of the entity. Edit the `<a-entity>` defining the torus to look like the following:

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  material="
    color: #EAEFF2;
    roughness: 0.1;
    metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

In the new `material` attribute, we set up the `color` of the material, then its `roughness` (a rougher material will scatter reflected light in more directions than a smooth material) and `metalness` (how metallic the material is).

## Adding some JavaScript to the mix

It is possible to populate the scene with entities created using JavaScript too, so let's use it to add a third shape, a cylinder. Add a new {{htmlelement("script")}} element at the end of the `<body>` element, just after the `<a-scene>` element, then add the following JavaScript code inside it:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

We're getting a reference to the scene handler first, then we create the cylinder element as an A-Frame entity. After that it's all about setting the proper attributes: `color`, `height`, `radius` and `position`. The last line adds the newly created cylinder to the scene. That's it — you've created three different shapes with A-Frame!
It is impressive to be able to create such a scene with just a few lines of HTML and JavaScript.

## Animation

We've already used `rotation` and `position` to move the shapes on the scene, and we can also scale them. These attributes can be manipulated to create the illusion of [animation](https://aframe.io/docs/1.6.0/components/animation.html).

### Rotation

There's a special [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) component that can help us animate elements. Add the `animation` component seen below to the `<a-box>` element as a property, as shown:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

As with any other entities, you can define key properties for the animation. We'll be animating the `rotation` attribute from `20 0 0` to `20 360 0`, so it will do a full spin. The animation direction is set to alternate so the animation will be played forward, and then back. The duration is set to 4 seconds, and it will be repeated indefinitely. The animation uses `easing` for easing, with [tween.js](https://github.com/tweenjs/tween.js/) being implemented internally.

### Scaling

We can also add animation to entities with custom geometry like the torus, in much the same way. Add the following `animation` component to your torus:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

The attribute we want to animate for the torus is `scale`. The initial, default scale is `1 1 1`, and we're going to animate it to `1 0.5 1`, so the `y` axis will be scaled from `1` to `0.5`. The easing we're going to use is `linear`. By setting the direction to `alternate` the scale will be animated to `0.5`, and then animated back to `1` during 2 seconds. Again, the animation is being repeated indefinitely.

### Moving

We could use the `animation` to change the position of the third shape, or we could use JavaScript instead. Add this code at the end of the `<script>` tag:

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

We're using the `render()` function to update the cylinder's position on every frame. Try changing the given values on the `y` axis and see how it affects the movement.

## A-Frame example with animation

Everything is rendered properly and animating — congratulations on building your first A-Frame scene! Here's how the final version looks and works:

```html live-sample___a-frame-animation
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>

  <a-light
    type="directional"
    color="#FFF"
    intensity="0.5"
    position="-1 1 2"></a-light>
  <a-light type="ambient" color="#FFF"></a-light>

  <a-camera position="0 1 4">
    <a-cursor color="#0095DD" opacity="0.5" scale="2 2 2"> </a-cursor>
  </a-camera>

  <a-box
    color="#0095DD"
    rotation="20 40 0"
    position="0 1 0"
    animation="property: rotation; from: 20 0 0; to: 20 360 0; 
      dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
  </a-box>

  <a-entity
    geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
    material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
    rotation="10 0 0"
    position="-3 1 0"
    animation="property: scale; to: 1 0.5 1; direction: alternate; 
      dur: 2000; loop: true; easing: linear;">
  </a-entity>
</a-scene>

<script>
  const scene = document.querySelector("a-scene");
  const cylinder = document.createElement("a-cylinder");
  cylinder.setAttribute("color", "#FF9500");
  cylinder.setAttribute("height", "2");
  cylinder.setAttribute("radius", "0.75");
  cylinder.setAttribute("position", "3 1 0");
  scene.appendChild(cylinder);
  let t = 0;
  function render() {
    t += 0.01;
    requestAnimationFrame(render);
    cylinder.setAttribute("position", "3 " + (Math.sin(t * 2) + 1) + " 0");
  }
  render();
</script>
```

```css hidden live-sample___a-frame-animation
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("a-frame-animation", "", "400px")}}

## Summary

A-Frame targets web developers by offering easy to use web markup and all the advantages that brings, such as JavaScript manipulation. It is easy to start with, but also provides a powerful API for advanced concepts, as well as dealing with cross browser differences. It's a great time to start experimenting with such frameworks.

## See also

- [A-Frame website](https://aframe.io/)
- [Introducing A-Frame 0.1.0 article](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame physics plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame gamepad controls plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
