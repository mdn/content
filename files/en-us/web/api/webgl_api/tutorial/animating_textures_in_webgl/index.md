---
title: Animating textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In this demonstration, we build upon the previous example by replacing our static textures with the frames of an mp4 video file that's playing. This is actually pretty easy to do and fun to watch, so let's get started. You can use similar code to use any sort of data (such as a {{ HTMLElement("canvas") }}) as the source for your textures.

## Getting access to the video

The first step is to create the {{ HTMLElement("video") }} element that we'll use to retrieve the video frames.

> [!NOTE]
> Add this declaration to that start of your "webgl-demo.js" script:

```js
// will set to true when video can be copied to texture
let copyVideo = false;
```

> [!NOTE]
> Add this function your "webgl-demo.js" script:

```js
function setupVideo(url) {
  const video = document.createElement("video");

  let playing = false;
  let timeupdate = false;

  video.playsInline = true;
  video.muted = true;
  video.loop = true;

  // Waiting for these 2 events ensures
  // there is data in the video

  video.addEventListener(
    "playing",
    () => {
      playing = true;
      checkReady();
    },
    true,
  );

  video.addEventListener(
    "timeupdate",
    () => {
      timeupdate = true;
      checkReady();
    },
    true,
  );

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      copyVideo = true;
    }
  }

  return video;
}
```

First we create a video element. We set it to autoplay, mute the sound, and loop the video. We then set up two events to make sure the video is playing and the time has been updated. We need both of these checks because it will produce an error if you upload a video to WebGL that has no data available yet. Checking for both of these events guarantees there is data available and it's safe to start uploading video to a WebGL texture. In the code above, we confirm whether we got both of those events; if so, we set a global variable, `copyVideo`, to true to indicate that it's safe to start copying the video to a texture.

And finally, we set the `src` attribute to start and call `play` to start loading and playing the video.

The video must be loaded from a secure source in order to be used to provide texture data to WebGL. That means that you'll not only need to deploy code like using a secure web server, but you'll need a secure server to test with as well. See [How do you set up a local testing server?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) for help.

## Using the video frames as a texture

The next change is to initialize the texture, which becomes much simpler, since we no longer need to load an image file. Instead, we create an empty texture object, put a single pixel in it, and set its filtering for later use.

> [!NOTE]
> Replace the `loadTexture()` function in "webgl-demo.js" with the following code:

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because video has to be download over the internet
  // they might take a moment until it's ready so
  // put a single pixel in the texture so we can
  // use it immediately.
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

  // Turn off mips and set wrapping to clamp to edge so it
  // will work regardless of the dimensions of the video.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

> [!NOTE]
> Add the following function to "webgl-demo.js":

```js
function updateTexture(gl, texture, video) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    srcFormat,
    srcType,
    video,
  );
}
```

You've seen this code before. It's nearly identical to the image onload function in the previous example — except when we call `texImage2D()`, instead of passing an `Image` object, we pass in the {{ HTMLElement("video") }} element. WebGL knows how to pull the current frame out and use it as a texture.

Next, we need to call these new functions from our `main()` function.

> [!NOTE]
> In your `main()` function, replace the call to `loadTexture()` with this code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> You'll also need to download the [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) file to the same local directory as your JavaScript files.

> [!NOTE]
> In your `main()` function, replace the `render()` function with this:

```js
// Draw the scene repeatedly
function render(now) {
  now *= 0.001; // convert to seconds
  deltaTime = now - then;
  then = now;

  if (copyVideo) {
    updateTexture(gl, texture, video);
  }

  drawScene(gl, programInfo, buffers, texture, cubeRotation);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
}
```

If `copyVideo` is true, we call `updateTexture()` just before we call the `drawScene()` function.

That's all there is to it!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## See also

- [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
