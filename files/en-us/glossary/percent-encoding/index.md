---
title: Percent-encoding
slug: Glossary/percent-encoding
tags:
  - Glossary
  - WebMechanics
---
<p><strong>Percent-encoding</strong> is a mechanism to encode 8-bit characters that have specific meaning in the context of {{Glossary("URL", "URLs")}}. It is sometimes called URL encoding. The encoding consists of substitution: A '%' followed by the hexadecimal representation of the ASCII value of the replace character.</p>

<p>Special characters needing encoding are: <code>':'</code>, <code>'/'</code>, <code>'?'</code>, <code>'#'</code>, <code>'['</code>, <code>']'</code>, <code>'@'</code>, <code>'!'</code>, <code>'$'</code>, <code>'&amp;'</code>, <code>"'"</code>, <code>'('</code>, <code>')'</code>, <code>'*'</code>, <code>'+'</code>, <code>','</code>, <code>';'</code>, <code>'='</code>, as well as <code>'%'</code> itself. Other characters don't need to be encoded, though they could.</p>

<table>
  <thead>
    <th>Character</th>
    <th>Encoding</th>
  </thead>
 <tbody>
  <tr>
   <td><code>':'</code></td>
   <td><code>%3A</code></td>
  </tr>
  <tr>
   <td><code>'/'</code></td>
   <td><code>%2F</code></td>
  </tr>
  <tr>
   <td><code>'?'</code></td>
   <td><code>%3F</code></td>
  </tr>
  <tr>
   <td><code>'#'</code></td>
   <td><code>%23</code></td>
  </tr>
  <tr>
   <td><code>'['</code></td>
   <td><code>%5B</code></td>
  </tr>
  <tr>
   <td><code>']'</code></td>
   <td><code>%5D</code></td>
  </tr>
  <tr>
   <td><code>'@'</code></td>
   <td><code>%40</code></td>
  </tr>
  <tr>
   <td><code>'!'</code></td>
   <td><code>%21</code></td>
  </tr>
  <tr>
   <td><code>'$'</code></td>
   <td><code>%24</code></td>
  </tr>
  <tr>
   <td><code>'&amp;'</code></td>
   <td><code>%26</code></td>
  </tr>
  <tr>
   <td><code>"'"</code></td>
   <td><code>%27</code></td>
  </tr>
  <tr>
   <td><code>'('</code></td>
   <td><code>%28</code></td>
  </tr>
  <tr>
   <td><code>')'</code></td>
   <td><code>%29</code></td>
  </tr>
  <tr>
   <td><code>'*'</code></td>
   <td><code>%2A</code></td>
  </tr>
  <tr>
   <td><code>'+'</code></td>
   <td><code>%2B</code></td>
  </tr>
  <tr>
   <td><code>','</code></td>
   <td><code>%2C</code></td>
  </tr>
  <tr>
   <td><code>';'</code></td>
   <td><code>%3B</code></td>
  </tr>
  <tr>
   <td><code>'='</code></td>
   <td><code>%3D</code></td>
  </tr>
  <tr>
   <td><code>'%'</code></td>
   <td><code>%25</code></td>
  </tr>
  <tr>
   <td><code>' '</code></td>
   <td><code>%20</code> or <code>+</code></td>
  </tr>
 </tbody>
</table>

<p>Depending on the context, the character <code>' '</code> is translated to a <code>'+'</code> (like in the percent-encoding version used in an <code>application/x-www-form-urlencoded</code> message), or in <code>'%20'</code> like on URLs.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>Definition of <a href="https://en.wikipedia.org/wiki/Percent-encoding">percent-encoding</a> in Wikipedia.</li>
 <li>{{RFC(3986)}}, section 2.1, where this encoding is defined.</li>
</ul>
