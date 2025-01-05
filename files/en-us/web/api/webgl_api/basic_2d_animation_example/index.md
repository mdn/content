---
title: A basic 2D WebGL animation example
slug: Web/API/WebGL_API/Basic_2D_animation_example
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}

In this WebGL example, we create a canvas and within it render a rotating square using WebGL. The coordinate system we use to represent our scene is the same as the canvas's coordinate system. That is, (0, 0) is at the top-left corner and the bottom-right corner is at (600, 460).

## A rotating square example

Let's follow the different steps to get our rotating square.

### Vertex shader

First, let's take a look at the vertex shader. Its job, as always, is to convert the coordinates we're using for our scene into clipspace coordinates (that is, the system by which (0, 0) is at the center of the context and each axis extends from -1.0 to 1.0 regardless of the actual size of the context).

```html
<script id="vertex-shader" type="x-shader/x-vertex">
  attribute vec2 aVertexPosition;

  uniform vec2 uScalingFactor;
  uniform vec2 uRotationVector;

  void main() {
    vec2 rotatedPosition = vec2(
      aVertexPosition.x * uRotationVector.y +
            aVertexPosition.y * uRotationVector.x,
      aVertexPosition.y * uRotationVector.y -
            aVertexPosition.x * uRotationVector.x
    );

    gl_Position = vec4(rotatedPosition * uScalingFactor, 0.0, 1.0);
  }
</script>
```

The main program shares with us the attribute `aVertexPosition`, which is the position of the vertex in whatever coordinate system it's using. We need to convert these values so that both components of the position are in the range -1.0 to 1.0. This can be done easily enough by multiplying by a scaling factor that's based on the context's {{glossary("aspect ratio")}}. We'll see that computation shortly.

We're also rotating the shape, and we can do that here, by applying a transform. We'll do that first. The rotated position of the vertex is computed by applying the rotation vector, found in the uniform `uRotationVector`, that's been computed by the JavaScript code.

Then the final position is computed by multiplying the rotated position by the scaling vector provided by the JavaScript code in `uScalingFactor`. The values of `z` and `w` are fixed at 0.0 and 1.0, respectively, since we're drawing in 2D.

The standard WebGL global `gl_Position` is then set to the transformed and rotated vertex's position.

### Fragment shader

Next comes the fragment shader. Its role is to return the color of each pixel in the shape being rendered. Since we're drawing a solid, untextured object with no lighting applied, this is exceptionally simple:

```html
<script id="fragment-shader" type="x-shader/x-fragment">
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform vec4 uGlobalColor;

  void main() {
    gl_FragColor = uGlobalColor;
  }
</script>
```

This starts by specifying the precision of the `float` type, as required. Then we set the global `gl_FragColor` to the value of the uniform `uGlobalColor`, which is set by the JavaScript code to the color being used to draw the square.

### HTML

The HTML consists solely of the {{HTMLElement("canvas")}} that we'll obtain a WebGL context on.

```html
<canvas id="gl-canvas" width="600" height="460">
  Oh no! Your browser doesn't support canvas!
</canvas>
```

### Globals and initialization

First, the global variables. We won't discuss these here; instead, we'll talk about them as they're used in the code to come.

```js
let gl = null;
let glCanvas = null;

// Aspect ratio and coordinate system
// details

let aspectRatio;
let currentRotation = [0, 1];
let currentScale = [1.0, 1.0];

// Vertex information

let vertexArray;
let vertexBuffer;
let vertexNumComponents;
let vertexCount;

// Rendering data shared with the
// scalers.

let uScalingFactor;
let uGlobalColor;
let uRotationVector;
let aVertexPosition;

// Animation timing

let shaderProgram;
let currentAngle;
let previousTime = 0.0;
let degreesPerSecond = 90.0;
```

Initializing the program is handled through a {{domxref("Window/load_event", "load")}} event handler called `startup()`:

```js
window.addEventListener("load", startup, false);

function startup() {
  glCanvas = document.getElementById("gl-canvas");
  gl = glCanvas.getContext("webgl");

  const shaderSet = [
    {
      type: gl.VERTEX_SHADER,
      id: "vertex-shader",
    },
    {
      type: gl.FRAGMENT_SHADER,
      id: "fragment-shader",
    },
  ];

  shaderProgram = buildShaderProgram(shaderSet);

  aspectRatio = glCanvas.width / glCanvas.height;
  currentRotation = [0, 1];
  currentScale = [1.0, aspectRatio];

  vertexArray = new Float32Array([
    -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5,
  ]);

  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  vertexNumComponents = 2;
  vertexCount = vertexArray.length / vertexNumComponents;

  currentAngle = 0.0;

  animateScene();
}
```

After getting the WebGL context, `gl`, we need to begin by building the shader program. Here, we're using code designed to let us add multiple shaders to our program quite easily. The array `shaderSet` contains a list of objects, each describing one shader function to be compiled into the program. Each function has a type (one of `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`) and an ID (the ID of the {{HTMLElement("script")}} element containing the shader's code).

The shader set is passed into the function `buildShaderProgram()`, which returns the compiled and linked shader program. We'll look at how this works next.

Once the shader program is built, we compute the aspect ratio of our context by dividing its width by its height. Then we set the current rotation vector for the animation to `[0, 1]`, and the scaling vector to `[1.0, aspectRatio]`. The scaling vector, as we saw in the vertex shader, is used to scale the coordinates to fit the -1.0 to 1.0 range.

The array of vertices is created next, as a {{jsxref("Float32Array")}} with six coordinates (three 2D vertices) per triangle to be drawn, for a total of 12 values.

As you can see, we're using a coordinate system of -1.0 to 1.0 for each axis. Why, you may ask, do we need to do any adjustments at all? This is because our context is not square. We're using a context that's 600 pixels wide and 460 tall. Each of those dimensions is mapped to the range -1.0 to 1.0. Since the two axes aren't the same length, if we don't adjust the values of one of the two axes, the square will get stretched out in one direction or the other. So we need to normalize these values.

Once the vertex array has been created, we create a new GL buffer to contain them by calling {{domxref("WebGLRenderingContext.createBuffer", "gl.createBuffer()")}}. We bind the standard WebGL array buffer reference to that by calling {{domxref("WebGLRenderingContext.bindBuffer", "gl.bindBuffer()")}} and then copy the vertex data into the buffer using {{domxref("WebGLRenderingContext.bufferData", "gl.bufferData()")}}. The usage hint `gl.STATIC_DRAW` is specified, telling WebGL that the data will be set only one time and never modified, but will be used repeatedly. This lets WebGL consider any optimizations it can apply that may improve performance based on that information.

With the vertex data now provided to WebGL, we set `vertexNumComponents` to the number of components in each vertex (2, since they're 2D vertexes) and `vertexCount` to the number of vertexes in the vertex list.

Then the current rotation angle (in degrees) is set to 0.0, since we haven't performed any rotation yet, and the rotation speed (in degrees per screen refresh period, typically 60 FPS) is set to 6.

Finally, `animateScene()` is called to render the first frame and schedule the rendering of the next frame of the animation.

### Compiling and linking the shader program

The `buildShaderProgram()` function accepts as input an array of objects describing a set of shader functions to be compiled and linked into the shader program and returns the shader program after it's been built and linked.

```js
function buildShaderProgram(shaderInfo) {
  const program = gl.createProgram();

  shaderInfo.forEach((desc) => {
    const shader = compileShader(desc.id, desc.type);

    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.log("Error linking shader program:");
    console.log(gl.getProgramInfoLog(program));
  }

  return program;
}
```

First, {{domxref("WebGLRenderingContext.createProgram", "gl.createProgram()")}} is called to create a new, empty, GLSL program.

Then, for each shader in the specified list of shaders, we call a `compileShader()` function to compile it, passing into it the ID and type of the shader function to build. Each of those objects includes, as mentioned before, the ID of the `<script>` element the shader code is found in and the type of shader it is. The compiled shader is attached to the shader program by passing it into {{domxref("WebGLRenderingContext.attachShader", "gl.attachShader()")}}.

> [!NOTE]
> We could go a step farther here, actually, and look at the value of the `<script>` element's `type` attribute to determine the shader type.

Once all of the shaders are compiled, the program is linked using {{domxref("WebGLRenderingContext.linkProgram", "gl.linkProgram()")}}.

If an error occurs while linking the program, the error message is logged to console.

Finally, the compiled program is returned to the caller.

### Compiling an individual shader

The `compileShader()` function, below, is called by `buildShaderProgram()` to compile a single shader.

```js
function compileShader(id, type) {
  const code = document.getElementById(id).firstChild.nodeValue;
  const shader = gl.createShader(type);

  gl.shaderSource(shader, code);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(
      `Error compiling ${
        type === gl.VERTEX_SHADER ? "vertex" : "fragment"
      } shader:`,
    );
    console.log(gl.getShaderInfoLog(shader));
  }
  return shader;
}
```

The code is fetched from the HTML document by obtaining the value of the text node contained within the {{HTMLElement("script")}} element with the specified ID. Then a new shader of the specified type is created using {{domxref("WebGLRenderingContext.createShader", "gl.createShader()")}}.

The source code is sent into the new shader by passing it into {{domxref("WebGLRenderingContext.shaderSource", "gl.shaderSource()")}}, and then the shader is compiled using {{domxref("WebGLRenderingContext.compileShader", "gl.compileShader()")}}

Compile errors are logged to the console. Note the use of a [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals) string to insert the correct shader type string into the message that gets generated. The actual error details are obtained by calling {{domxref("WebGLRenderingContext.getShaderInfoLog", "gl.getShaderInfoLog()")}}.

Finally, the compiled shader is returned to the caller (which is the `buildShaderProgram()` function.

### Drawing and animating the scene

The `animateScene()` function is called to render each animation frame.

```js
function animateScene() {
  gl.viewport(0, 0, glCanvas.width, glCanvas.height);
  gl.clearColor(0.8, 0.9, 1.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const radians = (currentAngle * Math.PI) / 180.0;
  currentRotation[0] = Math.sin(radians);
  currentRotation[1] = Math.cos(radians);

  gl.useProgram(shaderProgram);

  uScalingFactor = gl.getUniformLocation(shaderProgram, "uScalingFactor");
  uGlobalColor = gl.getUniformLocation(shaderProgram, "uGlobalColor");
  uRotationVector = gl.getUniformLocation(shaderProgram, "uRotationVector");

  gl.uniform2fv(uScalingFactor, currentScale);
  gl.uniform2fv(uRotationVector, currentRotation);
  gl.uniform4fv(uGlobalColor, [0.1, 0.7, 0.2, 1.0]);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");

  gl.enableVertexAttribArray(aVertexPosition);
  gl.vertexAttribPointer(
    aVertexPosition,
    vertexNumComponents,
    gl.FLOAT,
    false,
    0,
    0,
  );

  gl.drawArrays(gl.TRIANGLES, 0, vertexCount);

  requestAnimationFrame((currentTime) => {
    const deltaAngle =
      ((currentTime - previousTime) / 1000.0) * degreesPerSecond;

    currentAngle = (currentAngle + deltaAngle) % 360;

    previousTime = currentTime;
    animateScene();
  });
}
```

The first thing that needs to be done in order to draw a frame of the animation is to clear the background to the desired color. In this case, we set the viewport based on the size of the {{HTMLElement("canvas")}}, call {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}} to set the color to use when clearing content, then we clear the buffer with {{domxref("WebGLRenderingContext.clear", "clear()")}}.

Next, the current rotation vector is computed by converting the current rotation in degrees (`currentAngle`) into [radians](https://en.wikipedia.org/wiki/Radians), then setting the first component of the rotation vector to the [sine](https://en.wikipedia.org/wiki/Sine) of that value and the second component to the [cosine](https://en.wikipedia.org/wiki/Cosine). The `currentRotation` vector is now the location of the point on the [unit circle](https://en.wikipedia.org/wiki/Unit_circle) located at the angle `currentAngle`.

{{domxref("WebGLRenderingContext.useProgram", "useProgram()")}} is called to activate the GLSL shading program we established previously. Then we obtain the locations of each of the uniforms used to share information between the JavaScript code and the shaders (with {{domxref("WebGLRenderingContext.getUniformLocation", "getUniformLocation()")}}).

The uniform named `uScalingFactor` is set to the `currentScale` value previously computed; this, as you may recall, is the value used to adjust the coordinate system based on the aspect ratio of the context. This is done using {{domxref("WebGLRenderingContext/uniform", "uniform2fv()")}} (since this is a 2-value floating-point vector).

`uRotationVector` is set to the current rotation vector (`currentRotation)`, also using `uniform2fv()`.

`uGlobalColor` is set using {{domxref("WebGLRenderingContext/uniform", "uniform4fv()")}} to the color we wish to use when drawing the square. This is a 4-component floating-point vector (one component each for red, green, blue, and alpha).

Now that's all out of the way, we can set up the vertex buffer and draw our shape, first, the buffer of vertexes that will be used to draw the triangles of the shape is set by calling {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}}. Then the vertex position attribute's index is obtained from the shader program by calling {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.

With the index of the vertex position attribute now available in `aVertexPosition`, we call `enableVertexAttribArray()` to enable the position attribute so it can be used by the shader program (in particular, by the vertex shader).

Then the vertex buffer is bound to the `aVertexPosition` attribute by calling {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}. This step is not obvious, since this binding is almost a side effect. But as a result, accessing `aVertexPosition` now obtains data from the vertex buffer.

With the association in place between the vertex buffer for our shape and the `aVertexPosition` attribute used to deliver vertexes one by one into the vertex shader, we're ready to draw the shape by calling {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}}.

At this point, the frame has been drawn. All that's left to do is to schedule to draw the next one. That's done here by calling {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}, which asks that a callback function be executed the next time the browser is ready to update the screen.

Our `requestAnimationFrame()` callback receives as input a single parameter, `currentTime`, which specifies the time at which the frame drawing began. We use that and the saved time at which the last frame was drawn, `previousTime`, along with the number of degrees per second the square should rotate (`degreesPerSecond`) to calculate the new value of `currentAngle`. Then the value of `previousTime` is updated and we call `animateScene()` to draw the next frame (and in turn schedule the next frame to be drawn, ad infinitum).

### Result

This is a pretty simple example, since it's just drawing one simple object, but the concepts used here extend to much more complex animations.

{{EmbedLiveSample("A_rotating_square_example", 660, 500)}}

## See also

- [WebGL API](/en-US/docs/Web/API/WebGL_API)
- [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial)
