---
title: Example
slug: Web/SVG/Namespaces_Crash_Course/Example
tags:
  - SVG
  - XML
---
<p>In this example, we use <a href="/en-US/docs/Glossary/XHTML">XHTML</a>, <a href="/en-US/docs/Web/SVG">SVG</a>, <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, and the <a href="/en-US/docs/Web/API/Document_Object_Model">DOM</a> to animate a swarm of "motes". These motes are governed by two simple principles. First, each mote tries to move towards the mouse cursor, and second each mote tries to move away from the average mote position. Combined, we get this very natural-looking behavior.</p>
<p>This is done completely in W3C Standards–XHTML, SVG, and JavaScript–no Flash or any vendor-specific extensions. This example should work in Firefox 1.5 and above.</p>
<p><a href="https://media.prod.mdn.mozit.cloud/samples/svg/swarm-of-motes.xhtml">View the example</a></p>
<pre class="brush:xml">&lt;?xml version='1.0'?&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"
	xmlns:svg="http://www.w3.org/2000/svg"&gt;
	&lt;head&gt;
	&lt;title&gt;A swarm of motes&lt;/title&gt;
	&lt;style type='text/css'&gt;
	&lt;![CDATA[
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
	]]&gt;
	&lt;/style&gt;
	&lt;/head&gt;
	&lt;body onload='update()'&gt;
		&lt;svg:svg id='display' width='400' height='300'&gt;
			&lt;svg:circle id='cursor' cx='200'
cy='150' r='7' fill='#0000ff' fill-opacity='0.5'/&gt;
		&lt;/svg:svg&gt;

		&lt;p&gt;A swarm of motes, governed by two simple principles.
		First, each mote tries to move towards the cursor, and
		second each mote tries to move away from the average
		mote position.	Combined, we get this very natural
		looking behavior.
		&lt;/p&gt;

		&lt;p&gt;
		This is done completely in W3C Standards–XHTML,
		SVG and JavaScript–no flash or any vendor specific
		extensions.	 Currently, this will work in Mozilla Firefox
		version 1.5 and above.
		&lt;/p&gt;

		&lt;div&gt;
		(C) 2006 &lt;a id='emailme' href='#'&gt;Nick Johnson&lt;/a&gt;

		&lt;script type='text/javascript'&gt;
		&lt;![CDATA[
			// foil spam bots
			var email = '@riovia.net';
			email ='nick' + email;
			document.getElementById('emailme').href = 'mailto:'+email;
		]]&gt;
		&lt;/script&gt;
		This software is free for you to use in any way whatsoever,
		and comes with no warranty at all.
		&lt;/div&gt;

		&lt;form action="" onsubmit="return false;"&gt;
			&lt;p&gt;
			&lt;label&gt;Number of motes:&lt;/label&gt;
				&lt;input id='num_motes' value='5'/&gt;
				&lt;br/&gt;

			&lt;label&gt;Max. Velocity:&lt;/label&gt;
				&lt;input id='max_velocity' value='15'/&gt;
				&lt;br/&gt;

			&lt;label&gt;Attraction to cursor:&lt;/label&gt;
				&lt;input id='attract_cursor' value='6'/&gt;
				&lt;br/&gt;

			&lt;label&gt;Repulsion from peers:&lt;/label&gt;
				&lt;input id='repel_peer' value='5'/&gt;
				&lt;br/&gt;
			&lt;/p&gt;
		&lt;/form&gt;

	&lt;script type='text/javascript'&gt;
	&lt;![CDATA[

		// Array of motes
		var motes;

		// Get the display element.
		function Display()
		{
			return document.getElementById('display');
		}

		// Determine dimensions of the display element.
		// Return this as a 2-tuple (x,y) in an array
		function Dimensions()
		{
			// Our Rendering Element
			var display = Display();
			var width = parseInt( display.getAttributeNS(null,'width') );
			var height = parseInt( display.getAttributeNS(null,'height') );

			return [width,height];
		}

		// This is called by mouse move events
		var mouse_x = 200, mouse_y = 150;
		function OnMouseMove(evt)
		{
			mouse_x = evt.clientX;
			mouse_y = evt.clientY;

			var widget = document.getElementById('cursor');
			widget.setAttributeNS(null,'cx',mouse_x);
			widget.setAttributeNS(null,'cy',mouse_y);
		}
		document.onmousemove = OnMouseMove;

		// Determine (x,y) of the cursor
		function Cursor()
		{
			return [mouse_x, mouse_y];
		}

		// Determine average (x,y) of the swarm
		function AverageMotePosition()
		{
			if( !motes )
				return [0,0];

			if( motes.length == 0 )
				return [0,0];

			var i;
			var sum_x=0, sum_y=0;
			for(i=0; i&lt;motes.length; i++)
			{
				sum_x += motes[i].x;
				sum_y += motes[i].y;
			}

			return [sum_x/motes.length, sum_y/motes.length];
		}

		// A nicer, integer random
		function Rand(modulo)
		{
			return Math.round( Math.random() * (modulo-1));
		}

		// Class Mote
		function Mote()
		{
			// Dimensions of drawing area.
			var dims = Dimensions();
			var width = dims[0], height = dims[1];

			// Choose a random coordinate to start at.
			this.x = Rand( width );
			this.y = Rand( height );

			// Nil initial velocity.
			this.vx = this.vy = 0;

			// A visual element---initially none
			this.elt = null;
		}

		// Turn this into a class.
		new Mote();

		// Mote::applyForce() -- Adjust velocity
		// towards the given position.
		// Warning: Pseudo-physics -- not really
		// governed by any /real/ physical principles.
		Mote.prototype.applyForce = function(pos, mag)
		{
			if( pos[0] &gt; this.x )
				this.vx += mag;
			else if( pos[0] &lt; this.x )
				this.vx -= mag;

			if( pos[1] &gt; this.y )
				this.vy += mag;
			else if( pos[1] &lt; this.y )
				this.vy -= mag;
		}

		// Mote::capVelocity() -- Apply an upper limit
		// on mote velocity.
		Mote.prototype.capVelocity = function()
		{
			var max = parseInt( document.getElementById('max_velocity').value );

			if( max &lt; this.vx )
				this.vx = max;
			else if( -max &gt; this.vx )
				this.vx = -max;

			if( max &lt; this.vy )
				this.vy = max;
			else if( -max &gt; this.vy )
				this.vy = -max;
		}

		// Mote::capPosition() -- Apply an upper/lower limit
		// on mote position.
		Mote.prototype.capPosition = function()
		{
			var dims = Dimensions();
			if( this.x &lt; 0 )
				this.x = 0;
			else if( this.x &gt;= dims[0] )
				this.x = dims[0]-1;

			if( this.y &lt; 0 )
				this.y = 0;
			else if( this.y &gt;= dims[1] )
				this.y = dims[1]-1;
		}

		// Mote::move() -- move a mote, update the screen.
		Mote.prototype.move = function()
		{
			// Apply attraction to cursor.
			var attract = parseInt( document.getElementById('attract_cursor').value );
			var cursor = Cursor();
			this.applyForce(cursor, attract);

			// Apply repulsion from average mote position.
			var repel = parseInt( document.getElementById('repel_peer').value );
			var average = AverageMotePosition();
			this.applyForce(average, -repel);

			// Add some randomness to the velocity.
			this.vx += Rand(3)-1;
			this.vy += Rand(3)-1;

			// Put an upper limit on velocity.
			this.capVelocity();

			// Apply velocity.
			var old_x = this.x, old_y = this.y;
			this.x += this.vx;
			this.y += this.vy;
			this.capPosition();

			// Draw it.

			if( this.elt === null )
			{
				var svg = 'http://www.w3.org/2000/svg';
				this.elt = document.createElementNS(svg,'line');
				this.elt.setAttributeNS(null,'stroke','green');
				this.elt.setAttributeNS(null,'stroke-width','3');
				this.elt.setAttributeNS(null,'stroke-opacity','0.5');
				Display().appendChild( this.elt );
			}

			this.elt.setAttributeNS(null,'x1',old_x);
			this.elt.setAttributeNS(null,'y1',old_y);

			this.elt.setAttributeNS(null,'x2',this.x);
			this.elt.setAttributeNS(null,'y2',this.y);
		}

		function update()
		{
			// First call?
			if( !motes )
				motes = [];

			// How many motes should there be?
			var num = parseInt( document.getElementById('num_motes').value );
			if( num &lt; 0 )
				num = 0;

			// Make sure we have exactly that many...
			// Too few?
			while( motes.length &lt; num )
				motes.push( new Mote() );
			// Or too many?
			if( num == 0 )
				motes = [];
			else if( motes.length &gt; num )
				motes = motes.slice(0,num-1);

			// Move a random mote
			if( motes.length &gt; 0 )
				motes[ Rand( motes.length ) ].move();

			// And do this again in 1/100 sec
			setTimeout('update()', 10);
		}
	]]&gt;
	&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
</pre>
