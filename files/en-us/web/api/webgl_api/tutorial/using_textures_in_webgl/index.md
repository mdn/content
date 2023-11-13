---
title: Using textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Now that our sample program has a rotating 3D cube, let's map a texture onto it instead of having its faces be solid colors.

## Loading textures

The first thing to do is add code to load the textures. In our case, we'll be using a single texture, mapped onto all six sides of our rotating cube, but the same technique can be used for any number of textures.

> **Note:** It's important to note that the loading of textures follows [cross-domain rules](/en-US/docs/Web/HTTP/CORS); that is, you can only load textures from sites for which your content has CORS approval. See [Cross-domain textures below](#cross-domain_textures) for details.

> **Note:** Add these two functions to your "webgl-demo.js" script:

```js
//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be downloaded over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    // WebGL1 has different requirements for power of 2 images
    // vs. non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}
```

The `loadTexture()` routine starts by creating a WebGL texture object `texture` by calling the WebGL {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}} function. It then uploads a single blue pixel using {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}. This makes the texture immediately usable as a solid blue color even though it may take a few moments for our image to download.

To load the texture from the image file, it then creates an `Image` object and assigns the `src` to the URL for our image we wish to use as our texture. The function we assign to `image.onload` will be called once the image has finished downloading. At that point we again call {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} this time using the image as the source for the texture. After that we setup filtering and wrapping for the texture based on whether or not the image we download was a power of 2 in both dimensions or not.

WebGL1 can only use non power of 2 textures with filtering set to `NEAREST` or `LINEAR` and it can not generate a mipmap for them. Their wrapping mode must also be set to `CLAMP_TO_EDGE`. On the other hand if the texture is a power of 2 in both dimensions then WebGL can do higher quality filtering, it can use mipmap, and it can set the wrapping mode to `REPEAT` or `MIRRORED_REPEAT`.

An example of a repeated texture is tiling an image of a few bricks to cover a brick wall.

Mipmapping and UV repeating can be disabled with {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}}. This will allow non-power-of-two (NPOT) textures at the expense of mipmapping, UV wrapping, UV tiling, and your control over how the device will handle your texture.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Again, with these parameters, compatible WebGL devices will automatically accept any resolution for that texture (up to their maximum dimensions). Without performing the above configuration, WebGL requires all samples of NPOT textures to fail by returning transparent black: `rgba(0,0,0,0)`.

To load the image, add a call to our `loadTexture()` function within our `main()` function. This can be added after the `initBuffers(gl)` call.

But also note: Browsers copy pixels from the loaded image in top-to-bottom order — from the top-left corner; but WebGL wants the pixels in bottom-to-top order — starting from the bottom-left corner. (For more details, see [Why is my WebGL texture upside-down?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

So in order to prevent the resulting image texture from having the wrong orientation when rendered, we also need call [`pixelStorei()`](/en-US/docs/Web/API/WebGLRenderingContext/pixelStorei) with the `gl.UNPACK_FLIP_Y_WEBGL` parameter set to `true` — to cause the pixels to be flipped into the bottom-to-top order that WebGL expects.

> **Note:** Add the following code to your `main()` function, right after the call to `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> **Note:** Finally, download the [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) file to the same local directory as your JavaScript files.

## Mapping the texture onto the faces

At this point, the texture is loaded and ready to use. But before we can use it, we need to establish the mapping of the texture coordinates to the vertices of the faces of our cube. This replaces all the previously existing code for configuring colors for each of the cube's faces in `initBuffers()`.

> **Note:** Add this function to your "init-buffer.js" module:

```js
function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Back
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Top
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bottom
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Right
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Left
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}
```

First, this code creates a WebGL buffer into which we'll store the texture coordinates for each face, then we bind that buffer as the array we'll be writing into.

The `textureCoordinates` array defines the texture coordinates corresponding to each vertex of each face. Note that the texture coordinates range from 0.0 to 1.0; the dimensions of textures are normalized to a range of 0.0 to 1.0 regardless of their actual size, for the purpose of texture mapping.

Once we've set up the texture mapping array, we pass the array into the buffer, so that WebGL has that data ready for its use.

Then we return the new buffer.

Next, we need to update `initBuffers()` to create and return the texture coordinates buffer instead of the color buffer.

> **Note:** In the `initBuffers()` function of your "init-buffers.js" module, replace the call to `initColorBuffer()` with the following line:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> **Note:** In the `initBuffers()` function of your "init-buffers.js" module, replace the `return` statement with the following:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Updating the shaders

The shader program also needs to be updated to use the textures instead of solid colors.

### The vertex shader

We need to replace the vertex shader so that instead of fetching color data, it instead fetches the texture coordinate data.

> **Note:** Update the `vsSource` declaration in your `main()` function like this:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

The key change here is that instead of fetching the vertex color, we're fetching the texture coordinates and passing them to the vertex shader; this will indicate the location within the texture corresponding to the vertex.

### The fragment shader

The fragment shader likewise needs to be updated.

> **Note:** Update the `fsSource` declaration in your `main()` function like this:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Instead of assigning a color value to the fragment's color, the fragment's color is computed by fetching the {{Glossary("texel")}} (that is, the pixel within the texture) based on the value of `vTextureCoord` which like the colors is interpolated between vertices.

### Attribute and Uniform Locations

Because we changed an attribute and added a uniform we need to look up their locations.

> **Note:** Update the `programInfo` declaration in your `main()` function like this:

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

## Drawing the textured cube

The changes to the `drawScene()` function are simple.

> **Note:** In the `drawScene()` function of your "draw-scene.js" module, add the following function:

```js
// tell webgl how to pull out the texture coordinates from buffer
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // every coordinate composed of 2 values
  const type = gl.FLOAT; // the data in the buffer is 32-bit float
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set to the next
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
  gl.vertexAttribPointer(
    programInfo.attribLocations.textureCoord,
    num,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

> **Note:** In the `drawScene()` function of your "draw-scene.js" module, replace the call to `setColorAttribute()` with the following line:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Then add code to specify the texture to map onto the faces.

> **Note:** In your `drawScene()` function, just after the two calls to `gl.uniformMatrix4fv()`, add the following code:

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL provides a minimum of 8 texture units; the first of these is `gl.TEXTURE0`. We tell WebGL we want to affect unit 0. We then call {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}} which binds the texture to the `TEXTURE_2D` bind point of texture unit 0. We then tell the shader that for the `uSampler` use texture unit 0.

Lastly, add `texture` as a parameter to the `drawScene()` function, both where it is defined and where it is called.

> **Note:** Update the declaration of your `drawScene()` function to add the new parameter:

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> **Note:** Update the place in your `main()` function where you call `drawScene()`:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

At this point, the rotating cube should be good to go.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-domain textures

Loading of WebGL textures is subject to cross-domain access controls. In order for your content to load a texture from another domain, CORS approval needs to be obtained. See [HTTP access control](/en-US/docs/Web/HTTP/CORS) for details on CORS.

Because WebGL now requires textures to be loaded from secure contexts, you can't use textures loaded from `file:///` URLs in WebGL. That means that you'll need a secure web server to test and deploy your code. For local testing, see our guide [How do you set up a local testing server?](/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) for help.

See this [hacks.mozilla.org article](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) for an explanation of how to use CORS-approved images as WebGL textures.

Tainted (write-only) 2D canvases can't be used as WebGL textures. A 2D {{ HTMLElement("canvas") }} becomes tainted, for example, when a cross-domain image is drawn on it.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
