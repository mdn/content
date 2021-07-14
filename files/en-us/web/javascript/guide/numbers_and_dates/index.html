---
title: Numbers and dates
slug: Web/JavaScript/Guide/Numbers_and_dates
tags:
  - Calculation
  - Dates
  - FP
  - Floating Point
  - Floating-Point
  - Guide
  - Integer
  - JavaScript
  - Math
  - Numbers
  - Numeric
  - 'l10n:priority'
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}</div>

<p>This chapter introduces the concepts, objects and functions used to work with and perform calculations using numbers and dates in JavaScript. This includes using numbers written in various bases including decimal, binary, and hexadecimal, as well as the use of the global {{jsxref("Math")}} object to perform a wide variety of mathematical operations on numbers.</p>

<h2 id="Numbers">Numbers</h2>

<p>In JavaScript, numbers are implemented in <a class="external external-icon" href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">double-precision 64-bit binary format IEEE 754</a> (i.e., a number between ±2^−1022 and ±2^+1023, or about ±10^−308 to ±10^+308, with a numeric precision of 53 bits). Integer values up to ±2^53 − 1 can be represented exactly.</p>

<p>In addition to being able to represent floating-point numbers, the number type has three symbolic values: <code>+</code>{{jsxref("Infinity")}}, <code>-</code>{{jsxref("Infinity")}}, and {{jsxref("NaN")}} (not-a-number).</p>

<p>A more recent addition to JavaScript is {{jsxref("BigInt")}} which lets you represent integers that may be very large. There are caveats to using <code>BigInt</code>, however; for example, you can't mix and match <code>BigInt</code> and {{jsxref("Number")}} values in the same operation, and you can't use the {{jsxref("Math")}} object with <code>BigInt</code> values.</p>

<p>See also <a href="/en-US/docs/Web/JavaScript/Data_structures">JavaScript data types and structures</a> for context with other primitive types in JavaScript.</p>

<p>You can use four types of number literals: decimal, binary, octal, and hexadecimal.</p>

<h3 id="Decimal_numbers">Decimal numbers</h3>

<pre class="brush: js">1234567890
42

// Caution when using leading zeros:

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)
</pre>

<p>Note that decimal literals can start with a zero (<code>0</code>) followed by another decimal digit, but if every digit after the leading <code>0</code> is smaller than 8, the number gets parsed as an octal number.</p>

<h3 id="Binary_numbers">Binary numbers</h3>

<p>Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (<code>0b</code> or <code>0B</code>). If the digits after the <code>0b</code> are not 0 or 1, the following {{jsxref("SyntaxError")}} is thrown: "Missing binary digits after 0b".</p>

<pre class="brush: js">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

<h3 id="Octal_numbers">Octal numbers</h3>

<p>Octal number syntax uses a leading zero. If the digits after the <code>0</code> are outside the range 0 through 7, the number will be interpreted as a decimal number.</p>

<pre class="brush: js">var n = 0755; // 493
var m = 0644; // 420
</pre>

<p>Strict mode in ECMAScript 5 forbids octal syntax. Octal syntax isn't part of ECMAScript 5, but it's supported in all browsers by prefixing the octal number with a zero: <code>0644 === 420</code> and <code>"\045" === "%"</code>. In ECMAScript 2015, octal numbers are supported if they are prefixed with <code>0o</code>, e.g.:</p>

<pre class="brush: js">var a = 0o10; // ES2015: 8
</pre>

<h3 id="Hexadecimal_numbers">Hexadecimal numbers</h3>

<p>Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (<code>0x</code> or <code>0X</code>). If the digits after 0x are outside the range (0123456789ABCDEF), the following {{jsxref("SyntaxError")}} is thrown: "Identifier starts immediately after numeric literal".</p>

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h3 id="Exponentiation">Exponentiation</h3>

<pre class="brush: js">1E3   // 1000
2e6   // 2000000
0.1e2 // 10</pre>

<h2 id="Number_object">Number object</h2>

<p>The built-in {{jsxref("Number")}} object has properties for numerical constants, such as maximum value, not-a-number, and infinity. You cannot change the values of these properties and you use them as follows:</p>

<pre class="brush: js">var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
</pre>

<p>You always refer to a property of the predefined <code>Number</code> object as shown above, and not as a property of a <code>Number</code> object you create yourself.</p>

<p>The following table summarizes the <code>Number</code> object's properties.</p>

<table class="standard-table">
 <caption>Properties of <code>Number</code></caption>
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.MAX_VALUE")}}</td>
   <td>The largest representable number (<code>±1.7976931348623157e+308</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_VALUE")}}</td>
   <td>The smallest representable number (<code>±5e-324</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NaN")}}</td>
   <td>Special "not a number" value</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NEGATIVE_INFINITY")}}</td>
   <td>Special negative infinite value; returned on overflow</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.POSITIVE_INFINITY")}}</td>
   <td>Special positive infinite value; returned on overflow</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.EPSILON")}}</td>
   <td>Difference between <code>1</code> and the smallest value greater than <code>1</code> that can be represented as a {{jsxref("Number")}} (<code>2.220446049250313e-16</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_SAFE_INTEGER")}}</td>
   <td>Minimum safe integer in JavaScript (−2^53 + 1, or <code>−9007199254740991</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MAX_SAFE_INTEGER")}}</td>
   <td>Maximum safe integer in JavaScript (+2^53 − 1, or <code>+9007199254740991</code>)</td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Methods of <code>Number</code></caption>
 <thead>
  <tr>
   <th>Method</th>
   <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.parseFloat()")}}</td>
   <td>Parses a string argument and returns a floating point number.<br>
    Same as the global {{jsxref("parseFloat", "parseFloat()")}} function.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.parseInt()")}}</td>
   <td>Parses a string argument and returns an integer of the specified radix or base.<br>
    Same as the global {{jsxref("parseInt", "parseInt()")}} function.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isFinite()")}}</td>
   <td>Determines whether the passed value is a finite number.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isInteger()")}}</td>
   <td>Determines whether the passed value is an integer.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isNaN()")}}</td>
   <td>Determines whether the passed value is {{jsxref("Global_Objects/NaN", "NaN")}}. More robust version of the original global {{jsxref("Global_Objects/isNaN", "isNaN()")}}.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isSafeInteger()")}}</td>
   <td>Determines whether the provided value is a number that is a <dfn>safe integer</dfn>.</td>
  </tr>
 </tbody>
</table>

<p>The <code>Number</code> prototype provides methods for retrieving information from <code>Number</code> objects in various formats. The following table summarizes the methods of <code>Number.prototype</code>.</p>

<table class="standard-table">
 <caption>Methods of <code>Number.prototype</code></caption>
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.toExponential", "toExponential()")}}</td>
   <td>Returns a string representing the number in exponential notation.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toFixed", "toFixed()")}}</td>
   <td>Returns a string representing the number in fixed-point notation.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toPrecision", "toPrecision()")}}</td>
   <td>Returns a string representing the number to a specified precision in fixed-point notation.</td>
  </tr>
 </tbody>
</table>

<h2 id="Math_object">Math object</h2>

<p>The built-in {{jsxref("Math")}} object has properties and methods for mathematical constants and functions. For example, the <code>Math</code> object's <code>PI</code> property has the value of pi (3.141...), which you would use in an application as</p>

<pre class="brush: js">Math.PI
</pre>

<p>Similarly, standard mathematical functions are methods of <code>Math</code>. These include trigonometric, logarithmic, exponential, and other functions. For example, if you want to use the trigonometric function sine, you would write</p>

<pre class="brush: js">Math.sin(1.56)
</pre>

<p>Note that all trigonometric methods of <code>Math</code> take arguments in radians.</p>

<p>The following table summarizes the <code>Math</code> object's methods.</p>

<table class="standard-table">
 <caption>Methods of <code>Math</code></caption>
 <thead>
  <tr>
   <th scope="col">Method</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Math.abs", "abs()")}}</td>
   <td>Absolute value</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}</td>
   <td>Standard trigonometric functions; with the argument in radians.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}</td>
   <td>Inverse trigonometric functions; return values in radians.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}</td>
   <td>Hyperbolic functions; argument in hyperbolic angle.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}</td>
   <td>Inverse hyperbolic functions; return values in hyperbolic angle.</td>
  </tr>
  <tr>
   <td>
    <p>{{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}}</p>
   </td>
   <td>Exponential and logarithmic functions.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}</td>
   <td>Returns the largest/smallest integer less/greater than or equal to an argument.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}</td>
   <td>Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.random", "random()")}}</td>
   <td>Returns a random number between 0 and 1.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},</td>
   <td>Rounding and truncation functions.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}</td>
   <td>Square root, cube root, Square root of the sum of square arguments.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sign", "sign()")}}</td>
   <td>The sign of a number, indicating whether the number is positive, negative or zero.</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.clz32", "clz32()")}},<br>
    {{jsxref("Math.imul", "imul()")}}</td>
   <td>Number of leading zero bits in the 32-bit binary representation.<br>
    The result of the C-like 32-bit multiplication of the two arguments.</td>
  </tr>
 </tbody>
</table>

<p>Unlike many other objects, you never create a <code>Math</code> object of your own. You always use the built-in <code>Math</code> object.</p>

<h2 id="Date_object">Date object</h2>

<p>JavaScript does not have a date data type. However, you can use the {{jsxref("Date")}} object and its methods to work with dates and times in your applications. The <code>Date</code> object has a large number of methods for setting, getting, and manipulating dates. It does not have any properties.</p>

<p>JavaScript handles dates similarly to Java. The two languages have many of the same date methods, and both languages store dates as the number of milliseconds since January 1, 1970, 00:00:00, with a Unix Timestamp being the number of seconds since January 1, 1970, 00:00:00.</p>

<p>The <code>Date</code> object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.</p>

<p>To create a <code>Date</code> object:</p>

<pre class="brush: js">var dateObjectName = new Date([parameters]);
</pre>

<p>where <code>dateObjectName</code> is the name of the <code>Date</code> object being created; it can be a new object or a property of an existing object.</p>

<p>Calling <code>Date</code> without the <code>new</code> keyword returns a string representing the current date and time.</p>

<p>The <code>parameters</code> in the preceding syntax can be any of the following:</p>

<ul>
 <li>Nothing: creates today's date and time. For example, <code>today = new Date();</code>.</li>
 <li>A string representing a date in the following form: "Month day, year hours:minutes:seconds." For example, <code>var Xmas95 = new Date("December 25, 1995 13:30:00")</code>. If you omit hours, minutes, or seconds, the value will be set to zero.</li>
 <li>A set of integer values for year, month, and day. For example, <code>var Xmas95 = new Date(1995, 11, 25)</code>.</li>
 <li>A set of integer values for year, month, day, hour, minute, and seconds. For example, <code>var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);</code>.</li>
</ul>

<h3 id="Methods_of_the_Date_object">Methods of the Date object</h3>

<p>The <code>Date</code> object methods for handling dates and times fall into these broad categories:</p>

<ul>
 <li>"set" methods, for setting date and time values in <code>Date</code> objects.</li>
 <li>"get" methods, for getting date and time values from <code>Date</code> objects.</li>
 <li>"to" methods, for returning string values from <code>Date</code> objects.</li>
 <li>parse and UTC methods, for parsing <code>Date</code> strings.</li>
</ul>

<p>With the "get" and "set" methods you can get and set seconds, minutes, hours, day of the month, day of the week, months, and years separately. There is a <code>getDay</code> method that returns the day of the week, but no corresponding <code>setDay</code> method, because the day of the week is set automatically. These methods use integers to represent these values as follows:</p>

<ul>
 <li>Seconds and minutes: 0 to 59</li>
 <li>Hours: 0 to 23</li>
 <li>Day: 0 (Sunday) to 6 (Saturday)</li>
 <li>Date: 1 to 31 (day of the month)</li>
 <li>Months: 0 (January) to 11 (December)</li>
 <li>Year: years since 1900</li>
</ul>

<p>For example, suppose you define the following date:</p>

<pre class="brush: js">var Xmas95 = new Date('December 25, 1995');
</pre>

<p>Then <code>Xmas95.getMonth()</code> returns 11, and <code>Xmas95.getFullYear()</code> returns 1995.</p>

<p>The <code>getTime</code> and <code>setTime</code> methods are useful for comparing dates. The <code>getTime</code> method returns the number of milliseconds since January 1, 1970, 00:00:00 for a <code>Date</code> object.</p>

<p>For example, the following code displays the number of days left in the current year:</p>

<pre class="brush: js">var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year
</pre>

<p>This example creates a <code>Date</code> object named <code>today</code> that contains today's date. It then creates a <code>Date</code> object named <code>endYear</code> and sets the year to the current year. Then, using the number of milliseconds per day, it computes the number of days between <code>today</code> and <code>endYear</code>, using <code>getTime</code> and rounding to a whole number of days.</p>

<p>The <code>parse</code> method is useful for assigning values from date strings to existing <code>Date</code> objects. For example, the following code uses <code>parse</code> and <code>setTime</code> to assign a date value to the <code>IPOdate</code> object:</p>

<pre class="brush: js">var IPOdate = new Date();
IPOdate.setTime(Date.parse('Aug 9, 1995'));
</pre>

<h3 id="Example">Example</h3>

<p>In the following example, the function <code>JSClock()</code> returns the time in the format of a digital clock.</p>

<pre class="brush: js">function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour &gt; 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute &lt; 10) ? ':0' : ':') + minute;
  temp += ((second &lt; 10) ? ':0' : ':') + second;
  temp += (hour &gt;= 12) ? ' P.M.' : ' A.M.';
  return temp;
}
</pre>

<p>The <code>JSClock</code> function first creates a new <code>Date</code> object called <code>time</code>; since no arguments are given, time is created with the current date and time. Then calls to the <code>getHours</code>, <code>getMinutes</code>, and <code>getSeconds</code> methods assign the value of the current hour, minute, and second to <code>hour</code>, <code>minute</code>, and <code>second</code>.</p>

<p>The next four statements build a string value based on the time. The first statement creates a variable <code>temp</code>, assigning it a value using a conditional expression; if <code>hour</code> is greater than 12, (<code>hour - 12</code>), otherwise hour, unless hour is 0, in which case it becomes 12.</p>

<p>The next statement appends a <code>minute</code> value to <code>temp</code>. If the value of <code>minute</code> is less than 10, the conditional expression adds a string with a preceding zero; otherwise it adds a string with a demarcating colon. Then a statement appends a seconds value to <code>temp</code> in the same way.</p>

<p>Finally, a conditional expression appends "P.M." to <code>temp</code> if <code>hour</code> is 12 or greater; otherwise, it appends "A.M." to <code>temp</code>.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}</p>
