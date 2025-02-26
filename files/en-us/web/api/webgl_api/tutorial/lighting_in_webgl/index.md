---
title: Lighting in WebGL
slug: Web/API/WebGL_API/Tutorial/Lighting_in_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}

As should be clear by now, WebGL doesn't have much built-in knowledge. It just runs two functions you supply — a vertex shader and a fragment shader — and expects you to write creative functions to get the results you want. In other words, if you want lighting you have to calculate it yourself. Fortunately, it's not all that hard to do, and this article will cover some of the basics.

## Simulating lighting and shading in 3D

Although going into detail about the theory behind simulated lighting in 3D graphics is far beyond the scope of this article, it's helpful to know a bit about how it works. Instead of discussing it in depth here, take a look at the article on [Phong shading](https://en.wikipedia.org/wiki/Phong_shading) at Wikipedia, which provides a good overview of the most commonly used lighting model or if you'd like to see a WebGL based explanation [see this article](https://webglfundamentals.org/webgl/lessons/webgl-3d-lighting-point.html).

There are three basic types of lighting:

**Ambient light** is the light that permeates the scene; it's non-directional and affects every face in the scene equally, regardless of which direction it's facing.

**Directional light** is light that is emitted from a specific direction. This is light that's coming from so far away that every photon is moving parallel to every other photon. Sunlight, for example, is considered directional light.

**Point light** is light that is being emitted from a point, radiating in all directions. This is how many real-world light sources usually work. A light bulb emits light in all directions, for example.

For our purposes, we're going to simplify the lighting model by only considering simple directional and ambient lighting; we won't have any [specular highlights](https://en.wikipedia.org/wiki/Specular_highlights) or point light sources in this scene. Instead, we'll have our ambient lighting plus a single directional light source, aimed at the rotating cube from the [previous demo](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).

Once you drop out the concept of point sources and specular lighting, there are two pieces of information we'll need in order to implement our directional lighting:

1. We need to associate a **surface normal** with each vertex. This is a vector that's perpendicular to the face at that vertex.
2. We need to know the direction in which the light is traveling; this is defined by the **direction vector**.

Then we update the vertex shader to adjust the color of each vertex, taking into account the ambient lighting as well as the effect of the directional lighting given the angle at which it's striking the face. We'll see how to do that when we look at the code for the shader.

## Building the normals for the vertices

The first thing we need to do is generate the array of normals for all the vertices that comprise our cube. Since a cube is a very simple object, this is easy to do; obviously for more complex objects, calculating the normals will be more involved.

> [!NOTE]
> Add this function to your "init-buffer.js" module:

```js
function initNormalBuffer(gl) {
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);

  const vertexNormals = [
    // Front
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

    // Back
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

    // Top
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

    // Bottom
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

    // Right
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

    // Left
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(vertexNormals),
    gl.STATIC_DRAW,
  );

  return normalBuffer;
}
```

This should look pretty familiar by now; we create a new buffer, bind it to be the buffer we're working with, then send along our array of vertex normals into the buffer by calling `bufferData()`.

As before, we have updated `initBuffers()` to call our new function, and to return the buffer it created.

> [!NOTE]
> At the end of your `initBuffers()` function, add the following code, replacing the existing `return` statement:

```js
const normalBuffer = initNormalBuffer(gl);

return {
  position: positionBuffer,
  normal: normalBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

Then we add the code to the "draw-scene.js" module to bind the normals array to a shader attribute so the shader code can get access to it.

> [!NOTE]
> Add this function to your "draw-scene.js" module:

```js
// Tell WebGL how to pull out the normals from
// the normal buffer into the vertexNormal attribute.
function setNormalAttribute(gl, buffers, programInfo) {
  const numComponents = 3;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexNormal,
    numComponents,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);
}
```

> [!NOTE]
> Add this line to the `drawScene()` function of your "draw-scene.js" module, just before the `gl.useProgram()` line:

```js
setNormalAttribute(gl, buffers, programInfo);
```

Finally, we need to update the code that builds the uniform matrices to generate and deliver to the shader a **normal matrix**, which is used to transform the normals when dealing with the current orientation of the cube in relation to the light source.

> [!NOTE]
> Add the following code to the `drawScene()` function of your "draw-scene.js" module, just after the three `mat4.rotate()` calls:

```js
const normalMatrix = mat4.create();
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

> [!NOTE]
> Add the following code to the `drawScene()` function of your "draw-scene.js" module, just after the two previous `gl.uniformMatrix4fv()` calls:

```js
gl.uniformMatrix4fv(
  programInfo.uniformLocations.normalMatrix,
  false,
  normalMatrix,
);
```

## Update the shaders

Now that all the data the shaders need is available to them, we need to update the code in the shaders themselves.

### The vertex shader

The first thing to do is update the vertex shader so it generates a shading value for each vertex based on the ambient lighting as well as the directional lighting.

> [!NOTE]
> Update the `vsSource` declaration in your `main()` function like this:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;
```

Once the position of the vertex is computed, and we pass the coordinates of the {{Glossary("texel")}} corresponding to the vertex to the fragment shader, we can work on computing the shading for the vertex.

The first thing we do is transform the normal based on the current orientation of the cube, by multiplying the vertex's normal by the normal matrix. We can then compute the amount of directional lighting that needs to be applied to the vertex by calculating the dot product of the transformed normal and the directional vector (that is, the direction from which the light is coming). If this value is less than zero, then we pin the value to zero, since you can't have less than zero light.

Once the amount of directional lighting is computed, we can generate the lighting value by taking the ambient light and adding in the product of the directional light's color and the amount of directional lighting to provide. As a result, we now have an RGB value that will be used by the fragment shader to adjust the color of each pixel we render.

### The fragment shader

The fragment shader now needs to be updated to take into account the lighting value computed by the vertex shader.

> [!NOTE]
> Update the `fsSource` declaration in your `main()` function like this:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
    }
  `;
```

Here we fetch the color of the texel, just like we did in the previous example, but before setting the color of the fragment, we multiply the texel's color by the lighting value to adjust the texel's color to take into account the effect of our light sources.

The only thing left is to look up the location of the `aVertexNormal` attribute and the `uNormalMatrix` uniform.

> [!NOTE]
> Update the `programInfo` declaration in your `main()` function like this:

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexNormal: gl.getAttribLocation(shaderProgram, "aVertexNormal"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    normalMatrix: gl.getUniformLocation(shaderProgram, "uNormalMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

And that's it!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample7/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample7) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample7/)

## Exercises for the reader

Obviously, this is a simple example, implementing basic per-vertex lighting. For more advanced graphics, you'll want to implement per-pixel lighting, but this will get you headed in the right direction.

You might also try experimenting with the direction of the light source, the colors of the light sources, and so forth.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL", "Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL")}}
