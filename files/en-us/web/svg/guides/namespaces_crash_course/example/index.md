---
title: Example
slug: Web/SVG/Guides/Namespaces_crash_course/Example
page-type: guide
sidebar: svgref
---

In this example, we use [XHTML](/en-US/docs/Glossary/XHTML), [SVG](/en-US/docs/Web/SVG), [JavaScript](/en-US/docs/Web/JavaScript), and the [DOM](/en-US/docs/Web/API/Document_Object_Model) to animate a swarm of "motes". These motes are governed by two basic principles. First, each mote tries to move towards the mouse cursor, and second each mote tries to move away from the average mote position. Combined, we get this very natural-looking behavior.

[View the example](https://mdn.dev/archives/media/samples/svg/swarm-of-motes.xhtml). The linked example was written with 2006 best practices. The example below has been updated to modern JavaScript best practices. Both work.

```xml
<?xml version='1.0'?>
<html xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <head>
  <title>A swarm of motes</title>
  <style>
  <![CDATA[
    label, input
    {
      width: 150px;
      display: block;
      float: left;
      margin-bottom: 10px;
    }
    label
    {
      text-align: right;
      width: 75px;
      padding-right: 20px;
    }
    br
    {
      clear: left;
    }
  ]]>
  </style>
  </head>
  <body onload='update()'>
    <svg:svg id='display' width='400' height='300'>
      <svg:circle id='cursor' cx='200'
cy='150' r='7' fill='#0000ff' fill-opacity='0.5'/>
    </svg:svg>

    <p>A swarm of motes, governed by two basic principles.
    First, each mote tries to move towards the cursor, and
    second each mote tries to move away from the average
    mote position. Combined, we get this very natural
    looking behavior.
    </p>

    <div>
    (C) 2006 <a id='email-me' href='#'>Nick Johnson</a>

    <script>
    <![CDATA[
      // foil spam bots
      let email = '@riovia.net';
      email ='nick' + email;
      document.getElementById('email-me').href = 'mailto:'+email;
    ]]>
    </script>
    This software is free for you to use in any way whatsoever,
    and comes with no warranty at all.
    </div>

    <form action="" onsubmit="return false;">
      <p>
      <label>Number of motes:</label>
        <input id='num_motes' value='5'/>
        <br/>

      <label>Max. Velocity:</label>
        <input id='max_velocity' value='15'/>
        <br/>

      <label>Attraction to cursor:</label>
        <input id='attract_cursor' value='6'/>
        <br/>

      <label>Repulsion from peers:</label>
        <input id='repel_peer' value='5'/>
        <br/>
      </p>
    </form>

  <script>
  <![CDATA[

    // Array of motes
    let motes;

    // Get the display element.
    function Display() {
      return document.getElementById('display');
    }

    // Determine dimensions of the display element.
    // Return this as a 2-tuple (x,y) in an array
    function Dimensions() {
      // Our Rendering Element
      const display = Display();
      const width = parseInt(display.getAttributeNS(null, 'width'));
      const height = parseInt(display.getAttributeNS(null, 'height'));

      return [width, height];
    }

    // This is called by mouse move events
    const mouse_x = 200;
    const mouse_y = 150;
    function OnMouseMove(evt) {
      mouse_x = evt.clientX;
      mouse_y = evt.clientY;

      const widget = document.getElementById('cursor');
      widget.setAttributeNS(null,'cx',mouse_x);
      widget.setAttributeNS(null,'cy',mouse_y);
    }
    document.onmousemove = OnMouseMove;

    // Determine (x,y) of the cursor
    function Cursor() {
      return [mouse_x, mouse_y];
    }

    // Determine average (x,y) of the swarm
    function AverageMotePosition() {
      if (!motes || motes.length === 0) {
        return [0, 0];
      }

      const sum_x = 0;
      const sum_y = 0;
      for (const mote of motes) {
        sum_x += mote.x;
        sum_y += mote.y;
      }

      return [sum_x / motes.length, sum_y / motes.length];
    }

    // A nicer, integer random
    function Rand(modulo)
    {
      return Math.round(Math.random() * (modulo - 1));
    }

    // Class Mote
    function Mote() {
      // Dimensions of drawing area.
      const dims = Dimensions();
      const width = dims[0];
      const height = dims[1];

      // Choose a random coordinate to start at.
      this.x = Rand(width);
      this.y = Rand(height);

      // Nil initial velocity.
      this.vx = this.vy = 0;

      // A visual element, initially none
      this.elt = null;
    }

    // Turn this into a class.
    new Mote();

    // Mote::applyForce() — Adjust velocity
    // towards the given position.
    // Warning: Pseudo-physics — not really
    // governed by any /real/ physical principles.
    Mote.prototype.applyForce = function (pos, mag) {
      if (pos[0] > this.x) {
        this.vx += mag;
      } else if (pos[0] < this.x) {
        this.vx -= mag;
      }

      if (pos[1] > this.y) {
        this.vy += mag;
      } else if (pos[1] < this.y) {
        this.vy -= mag;
      }
    }

    // Mote::capVelocity() — Apply an upper limit
    // on mote velocity.
    Mote.prototype.capVelocity = function () {
      const max = parseInt(document.getElementById('max_velocity').value);

      if (max < this.vx) {
        this.vx = max;
      } else if (-max > this.vx) {
        this.vx = -max;
      }

      if (max < this.vy) {
        this.vy = max;
      } else if (-max > this.vy) {
        this.vy = -max;
      }
    }

    // Mote::capPosition() — Apply an upper/lower limit
    // on mote position.
    Mote.prototype.capPosition = function () {
      const dims = Dimensions();
      if (this.x < 0) {
        this.x = 0;
      } else if (this.x >= dims[0]) {
        this.x = dims[0] - 1;
      }

      if (this.y < 0) {
        this.y = 0;
      } else if (this.y >= dims[1]) {
        this.y = dims[1] - 1;
      }
    }

    // Mote::move() — move a mote, update the screen.
    Mote.prototype.move = function () {
      // Apply attraction to cursor.
      const attract = parseInt(document.getElementById('attract_cursor').value);
      const cursor = Cursor();
      this.applyForce(cursor, attract);

      // Apply repulsion from average mote position.
      const repel = parseInt(document.getElementById('repel_peer').value);
      const average = AverageMotePosition();
      this.applyForce(average, -repel);

      // Add some randomness to the velocity.
      this.vx += Rand(3) - 1;
      this.vy += Rand(3) - 1;

      // Put an upper limit on velocity.
      this.capVelocity();

      // Apply velocity.
      const old_x = this.x;
      const old_y = this.y;
      this.x += this.vx;
      this.y += this.vy;
      this.capPosition();

      // Draw it.
      if (this.elt === null) {
        const svg = 'http://www.w3.org/2000/svg';
        this.elt = document.createElementNS(svg, 'line');
        this.elt.setAttributeNS(null, 'stroke', 'green');
        this.elt.setAttributeNS(null, 'stroke-width', '3');
        this.elt.setAttributeNS(null, 'stroke-opacity', '0.5');
        Display().appendChild(this.elt);
      }

      this.elt.setAttributeNS(null, 'x1', old_x);
      this.elt.setAttributeNS(null, 'y1', old_y);

      this.elt.setAttributeNS(null, 'x2', this.x);
      this.elt.setAttributeNS(null, 'y2', this.y);
    }

    function update() {
      // First call?
      if (!motes) {
        motes = [];
      }

      // How many motes should there be?
      let num = parseInt( document.getElementById('num_motes').value );
      if ( num < 0 ) {
        num = 0;
      }

      // Make sure we have exactly that many...
      // Too few?
      while (motes.length < num) {
        motes.push(new Mote());
      }

      // Or too many?
      if (num === 0) {
        motes = [];
      } else if (motes.length > num) {
        motes = motes.slice(0, num - 1);
      }

      // Move a random mote
      if (motes.length > 0) {
        motes[Rand(motes.length)].move();
      }

      // And do this again in 1/100 sec
      setTimeout('update()', 10);
    }
  ]]>
  </script>
  </body>
</html>
```
