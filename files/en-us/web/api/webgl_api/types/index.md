---
title: WebGL types
slug: Web/API/WebGL_API/Types
tags:
  - Reference
  - Types
  - WebGL
---
{{WebGLSidebar}}

The following types are used in [WebGL](/en-US/docs/Web/API/WebGL_API) interfaces.

## WebGL 1

These types are used within a {{domxref("WebGLRenderingContext")}}.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Type</th>
      <th>Web IDL type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GLenum</code></td>
      <td><code>unsigned long</code></td>
      <td>
        Used for enums. See also the list of
        <a href="/en-US/docs/Web/API/WebGL_API/Constants">constants</a>.
      </td>
    </tr>
    <tr>
      <td><code>GLboolean</code></td>
      <td><code>boolean</code></td>
      <td>A boolean value.</td>
    </tr>
    <tr>
      <td><code>GLbitfield</code></td>
      <td><code>unsigned long</code></td>
      <td>
        A bit field that stores multiple, logical bits. Used for example in
        {{domxref("WebGLRenderingContext.clear()")}}.
      </td>
    </tr>
    <tr>
      <td><code>GLbyte</code></td>
      <td><code>byte</code></td>
      <td>8-bit twos complement signed integer.</td>
    </tr>
    <tr>
      <td><code>GLshort</code></td>
      <td><code>short</code></td>
      <td>16-bit twos complement signed integer.</td>
    </tr>
    <tr>
      <td><code>GLint</code></td>
      <td><code>long</code></td>
      <td>32-bit twos complement signed integer.</td>
    </tr>
    <tr>
      <td><code>GLsizei</code></td>
      <td><code>long</code></td>
      <td>Used for sizes (e.g. width and height of the drawing buffer).</td>
    </tr>
    <tr>
      <td><code>GLintptr</code></td>
      <td><code>long long</code></td>
      <td>Special type for pointer arithmetic.</td>
    </tr>
    <tr>
      <td><code>GLsizeiptr</code></td>
      <td><code>long long</code></td>
      <td>Special type for pointer arithmetic.</td>
    </tr>
    <tr>
      <td><code>GLubyte</code></td>
      <td><code>octet</code></td>
      <td>8-bit twos complement unsigned integer.</td>
    </tr>
    <tr>
      <td><code>GLushort</code></td>
      <td><code>unsigned short</code></td>
      <td>16-bit twos complement unsigned integer.</td>
    </tr>
    <tr>
      <td><code>GLuint</code></td>
      <td><code>unsigned long</code></td>
      <td>32-bit twos complement unsigned integer.</td>
    </tr>
    <tr>
      <td><code>GLfloat</code></td>
      <td><code>unrestricted float</code></td>
      <td>32-bit IEEE floating point number.</td>
    </tr>
    <tr>
      <td><code>GLclampf</code></td>
      <td><code>unrestricted float</code></td>
      <td>Clamped 32-bit IEEE floating point number.</td>
    </tr>
  </tbody>
</table>

## WebGL 2

These types are used within a {{domxref("WebGL2RenderingContext")}}. All WebGL 1 types are used as well.

| Type      | Web IDL type | Description                   |
| --------- | ------------ | ----------------------------- |
| `GLint64` | `long long`  | Signed 64-bit integer number. |

## WebGL extensions

These types are used within [WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

| Type          | Web IDL type | Description                     |
| ------------- | ------------ | ------------------------------- |
| `GLuint64EXT` | `long long`  | Unsigned 64-bit integer number. |

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>{{SpecName('WebGL', "#5.1", "Types")}}</td>
      <td>{{Spec2('WebGL')}}</td>
      <td>Initial definition</td>
    </tr>
    <tr>
      <td>{{SpecName('WebGL2', "#3.1", "Types")}}</td>
      <td>{{Spec2('WebGL2')}}</td>
      <td>Defines additional types.</td>
    </tr>
    <tr>
      <td>
        {{SpecName('EXT_disjoint_timer_query', "", "GLuint64EXT")}}
      </td>
      <td>{{Spec2('EXT_disjoint_timer_query')}}</td>
      <td>Adds <code>GLuint64EXT</code></td>
    </tr>
  </tbody>
</table>

## See also

- {{domxref("WebGLRenderingContext")}}
