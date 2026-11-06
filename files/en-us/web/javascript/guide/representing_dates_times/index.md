---
title: Representing dates & times
slug: Web/JavaScript/Guide/Representing_dates_times
page-type: guide
sidebar: jssidebar
---

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

Dates and times are everywhere in web applications. Want to calculate how long since the last scheduled payment? Want to set a reminder for "next Tuesday, 1 pm" or "My friend's birthday"? Want to display the time when each file was created? This guide explains the details behind handling dates and times in JavaScript, and gives you a gentle introduction to the gigantic {{jsxref("Temporal")}} API.

This guide introduces the API methods and properties and explains date mechanisms, especially calendars and time zones. If you are only interested in snippets for common use cases, see our [Temporal cookbook](/en-US/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook).

## Instants

Most date-times identify a unique moment in time in the past, present, or future. Consider these examples:

- The [first commit to mdn/content](https://github.com/mdn/content/commit/13e249a7051d637deb3c8fd3a25c397c401edf13) was made on **September 15, 2020 at 11:43:01 EDT** (the commit author was in the US Eastern time zone)
- The [Fall of the Bastille](https://en.wikipedia.org/wiki/Storming_of_the_Bastille) happened in Paris on **July 14, 1789**
- You may need to perform some maintenance to your app, so you tell your user that the app will be unavailable on **November 13, 2026 from 05:00 UTC to 07:00 UTC** (this is a "future date" at the time this doc was written; it may no longer be in the future when you are reading it!)

There's immediately one problem: we rarely know the _precise time_ of anything! Git commit timestamps only store the seconds, so we don't know the nanoseconds, or even milliseconds, of when this event occurred. Similarly, historic dates like July 14, 1789 rarely have specific times at all (and eventually we need to ask nonsensical questions like "Did the Bastille fall when the first defender walked out or the last?"). We can address this with some sensible defaults. For example, we can set all milliseconds and nanoseconds to 0, and assume that the Bastille fell at 17:00:00 UTC.

> [!NOTE]
> These approximations are akin to how you approximate a country's population to the nearest million, a person's age to a whole number of years, etc.—as long as they preserve the behavior and meaning that your users care about (for example, "Sort by date" can work correctly, or "x days ago" displays the correct number), it won't be a problem.

Anyway, such defaults enable us to define a precise **instant** in history, accurate to the nanosecond level (clocks can rarely measure more precisely than that). We can represent it as a single number: an offset from an agreed-upon instant, called the _epoch_. JavaScript—which follows the same Unix convention as many other pieces of software—uses the epoch **January 1, 1970, 00:00:00 UTC**. For example, we can construct an instant using a {{jsxref("Temporal.Instant")}} object that's `1600184581000000000` nanoseconds (note: this is equivalent to 18520 days, 15 hours, 43 minutes, and 1 second) after the epoch, and then display that time in the US Eastern time zone (see [Internationalization](/en-US/docs/Web/JavaScript/Guide/Internationalization#date_and_time_formatting) to understand more about date-time formatting):

```js
const specialInstant = new Temporal.Instant(1600184581000000000n);

console.log(
  specialInstant.toLocaleString("en-US", { timeZone: "America/New_York" }),
);
// 9/15/2020, 11:43:01 AM
```

As you can see, the `specialInstant` now represents the aforementioned **September 15, 2020 at 11:43:01 EDT** instant.

Similarly, we can construct an instant that's `5694908400000000000` nanoseconds (note: this is equivalent to 65913 days and 7 hours) _before_ the epoch by using a negative number. When displayed in the Paris time zone, this happens to be **July 14, 1789**, at some odd time (see [Understanding the time zone](#understanding_the_time_zone) for why it's 9 minutes and 21 seconds past the hour).

```js
const specialInstant = new Temporal.Instant(-5694908400000000000n);

console.log(
  specialInstant.toLocaleString("en-US", { timeZone: "Europe/Paris" }),
);
// 7/14/1789, 5:09:21 PM
```

The {{jsxref("Temporal.Instant")}} object stores the nanosecond offset, which you can retrieve with {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}. You can also use {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} to get the same offset in milliseconds (which is nanoseconds divided by a million and floored to an integer). Representing instants as single numbers is very convenient for the computer—storing, computing differences, and comparing instants are all straightforward. Git, databases, JavaScript's {{jsxref("Date")}} object, and most software use similar approaches.

Instants can be added/subtracted, compared, serialized, and displayed (see [Deriving new times](#deriving_new_times)), but importantly, they do not give you information like "what time of day it is" or "what date it is". Calculating such nuances requires additional metadata, which we'll look at next.

## Zoned date-times

If we were designing the date-time notation system from scratch, we could represent "18520 days, 15 hours, 43 minutes, and 1 second from the epoch" as `18520 15:43:01`. But this format is not convenient for humans, for two reasons: we are not very good at processing large numbers like `18520`, and the time `15:43:01` does not correspond to the sun's position in the sky at a particular location (such as New York)—we are used to 00:00 being midnight, 12:00 being noon, etc. We have created two systems to fix these problems: the _calendar_ and the _time zone_.

For subsequent demonstrations, let's convert our two instant examples to {{jsxref("Temporal.ZonedDateTime")}} (ZDT) objects with the {{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}} method, which takes a time zone name. Now you can use the {{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}} method to directly print out a user-friendly string, without providing a time zone like we previously did with `Instant`.

```js
const mdnCreationInst = new Temporal.Instant(1600184581000000000n);
const bastilleFallInst = new Temporal.Instant(-5694908400000000000n);

const mdnCreation = mdnCreationInst.toZonedDateTimeISO("America/New_York");
const bastilleFall = bastilleFallInst.toZonedDateTimeISO("Europe/Paris");

console.log(mdnCreation.toLocaleString("en-US")); // 9/15/2020, 11:43:01 AM EDT
console.log(bastilleFall.toLocaleString("en-US")); // 7/14/1789, 5:09:21 PM GMT+0:09:21
```

> [!NOTE]
> The `Instant` does not have a time zone while the `ZonedDateTime` mandates one, so it must be provided during the `toZonedDateTimeISO()` conversion. However, the method does not take a calendar name, because its name "ISO" tells us that the ISO calendar will be used.

Because a ZDT is a wrapper around the `Instant` object, everything you can do with an `Instant`, you can do so with a ZDT too: {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}, {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}, {{jsxref("Temporal/ZonedDateTime/compare", "compare()")}}, {{jsxref("Temporal/ZonedDateTime/add", "add()")}}/{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}, {{jsxref("Temporal/ZonedDateTime/since", "since()")}}/{{jsxref("Temporal/ZonedDateTime/until", "until()")}}. You can also get the `Instant` back from the `ZonedDateTime` using {{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}.

> [!NOTE]
> Because the ZDT is aware of calendars, arithmetic works slightly differently (for example, it can give you answers in years and months, whereas `Instant` can only give you seconds). We'll ignore these differences for now.

### Understanding the calendar

To break down large numbers of days, we invent _calendar units_ like weeks, months, years, and sometimes eras. A _calendar system_ answers questions like how many days are in a particular month and how many months are in a particular year. You probably already have a good understanding of how the Gregorian calendar works (12 months per year; 28–31 days per month; a leap year roughly every 4 years; leap years have an extra day in February; etc.), but it's important to remember that none of these assumptions may hold in other calendars, so you must be cautious when interpreting months and years. Today, the Gregorian calendar is ubiquitous and is widely used for cross-cultural communication. However, different cultures often use traditional calendars, for example for cultural, religious, or political purposes. The [`Temporal` reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) details how different calendars work.

The ISO 8601 calendar is based on the Gregorian calendar. They have identical month and year counting rules, but ISO 8601 does not use eras and has week numbering rules. The `toZonedDateTimeISO()` method produces `ZonedDateTime` objects in this calendar; you can tell from the {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}:

```js
console.log(mdnCreation.calendarId); // "iso8601"
```

In ISO 8601, the {{jsxref("Temporal/ZonedDateTime/year", "year")}}, {{jsxref("Temporal/ZonedDateTime/month", "month")}}, and {{jsxref("Temporal/ZonedDateTime/day", "day")}} properties are identical to their Gregorian representations and give you what you'd expect.

```js
console.log(mdnCreation.year, mdnCreation.month, mdnCreation.day);
// 2020 9 15
```

> [!NOTE]
> Years change monotonically, so for example the year before `1` (1 CE) is `0` (1 BCE), then `-1` (2 BCE), and so on.

Year-month-day is not the only way to number days. ISO 8601 additionally provides year-week-day. For this you use {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}, {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}, and {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}. For example, mdn/content was created on the Tuesday of the 38th week of 2020.

```js
console.log(
  mdnCreation.yearOfWeek,
  mdnCreation.weekOfYear,
  mdnCreation.dayOfWeek,
);
// 2020 38 2
```

> [!NOTE]
> Although `yearOfWeek` and `year` are equal in this case, they may not always be. If a week crosses a year, there are additional rules to decide if it belongs to the next or the previous year, in which case a day may belong to the previous year when counting by months, but to the next year when counting by weeks, and vice versa.

The third mode is year-day. For this you use `year` and {{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}. For example, mdn/content was created on the 259th day of 2020.

```js
console.log(mdnCreation.year, mdnCreation.dayOfYear); // 2020 259
```

Instead of a single monotonic year counter, many calendars group years into eras. ISO 8601 doesn't use this, but the Gregorian calendar does. It has two eras: CE and BCE, where years are numbered in the order of 3 BCE, 2 BCE, 1 BCE, 1 CE, 2 CE, ... So year numbers are always positive. You use {{jsxref("Temporal/ZonedDateTime/era", "era")}} and {{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}} to retrieve this information, and you can use them as a pair for every purpose that you use `year` for.

```js
const mdnCreationGreg = mdnCreation.withCalendar("gregory");
console.log(mdnCreationGreg.era, mdnCreationGreg.eraYear); // ce 2020
```

Instead of identifying months by numbers, many languages/calendars give them names like "January", "February", etc. But there's one problem: some calendars use leap _months_ (which adds an extra month) instead of leap _days_ (which adds an extra day). Furthermore, this month can be added in the middle of the year. Take the `chinese` calendar as an example. It normally names each month using a number, so the first month is literally called "month 1" (一月), and so on. But when a leap month is needed, it just repeats a certain month. For example, year 2020 happens to be a leap year in the Chinese calendar (check with {{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}). In this year, "month 4" is repeated as "leap month 4" (闰四月), so the months in that year are named "month 3" (index 3), "month 4" (index 4), "leap month 4" (index 5), "month 5" (index 6), and so on. The mdn/content creation time falls on "month 7", so its index is 8. But a month with the same name having index 7 in some years and index 8 in others causes problems for many use cases. Therefore, the {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} property allows you to identify months using the calendar convention—two months in different years with the same code are identical months, even if they have different index numbers in their respective years. You can use `monthCode` for every purpose that you use `month` for.

```js
const mdnCreationChi = mdnCreation.withCalendar("chinese");
console.log(mdnCreationChi.inLeapYear); // true
console.log(mdnCreationChi.month); // 8
console.log(mdnCreationChi.monthCode); // "M07"
```

> [!NOTE]
> As you can see, this `monthCode` is not intended to be human-readable (and its format is standardized across calendars). You should use {{jsxref("Intl.DateTimeFormat")}} to provide a readable name in the target language. This property is purely for computation purposes.

A group of properties—{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}, {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}, and {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}—help you retrieve the counting rules for this calendar for the specific date.

### Understanding the time zone

The time `15:43:01` is based on an epoch representing midnight in UTC, whose time of day approximately follows the mean solar time at Greenwich, London. Each longitude has a different local time. The sun's apparent motion is not uniform, but it moves 360° around the Earth in 24 hours, so on average, two clocks 1° apart in longitude will have a 4-minute difference. The time kept by a clock that synchronizes with the local sun position, assuming uniform motion, is called the _local mean time_. Usually, an entire region uses the local time of a clock at some important location (it would be very inconvenient if two nearby towns had clocks that are a few minutes apart); this region is called a _time zone_. The difference between the time in that time zone and UTC is called the _time zone offset_.

Each ZDT is associated with a time zone, identified by the {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} (which uses the name of a city in that time zone). You can get its offset using the {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}} property (which returns a number) or the {{jsxref("Temporal/ZonedDateTime/offset", "offset")}} property (which returns a string).

```js
console.log(bastilleFall.timeZoneId); // "Europe/Paris"
console.log(bastilleFall.offsetNanoseconds); // 561000000000
console.log(bastilleFall.offset); // "+00:09:21"
```

The sun reaches its highest position in Paris roughly **9 minutes** before it does in London. Therefore, a clock keeping Paris mean time will be about 9 minutes ahead of a clock keeping Greenwich mean time so that they synchronize in tracking the sun's position. This is why our "fall of the Bastille" instant, which is `17:00:00` in UTC, becomes `17:09:21` in the local mean time used for Paris by the time zone database—that's 9 minutes 21 seconds ahead!

Time zone offsets are not constant; for a given time zone, they can change multiple times, or even alternate throughout history. This is why two ZDTs representing different instants may report different offsets, despite being in the same time zone. There are many factors that affect the offset:

- The `+00:09:21` offset explained above is the Paris mean time, used by Paris and the Metropolitan France in older times (like when the Bastille fell). Similarly, New York originally used the offset `-04:56:02`.
- During the late nineteenth and early twentieth centuries, as international travel became more common, having these irregular offsets turned out to be a great nuisance, especially when reading train time tables or adjusting watches. Countries increasingly adopted **standardized time zones**, often with offsets in whole hours from Greenwich Mean Time (GMT). For example, [Metropolitan France switched to GMT in 1911](https://en.wikipedia.org/wiki/Time_in_France#history). At what would have been midnight on March 11 under the old offset, clocks were set backward by 9 minutes 21 seconds to 23:50:39 on March 10:

  | UTC time            | Local time          | Offset    |
  | ------------------- | ------------------- | --------- |
  | 1911-03-10 23:41:18 | 1911-03-10 23:50:39 | +00:09:21 |
  | 1911-03-10 23:41:19 | 1911-03-10 23:50:40 | +00:09:21 |
  | 1911-03-10 23:50:38 | 1911-03-10 23:59:59 | +00:09:21 |
  | 1911-03-10 23:50:39 | 1911-03-10 23:50:39 | +00:00:00 |
  | 1911-03-10 23:50:40 | 1911-03-10 23:50:40 | +00:00:00 |

  Similarly, when [the five-time-zone system of the US was standardized in 1883](https://en.wikipedia.org/wiki/History_of_time_in_the_United_States#Railway_time), the Eastern time zone used the `-05:00` offset, which was the closest to `-04:56:02`.

  This standardized time zone is sometimes called the "natural" time zone because it still more or less reflects the local sun position in the anchor city. (The error may become greater as the region extends.)

- Two regions with frequent communications may wish to align their time zone offsets. For example, during WWII, German-occupied France adopted the Berlin offset `+01:00`, which persists to this day. Similarly, the Pacific island country of Samoa changed its offset from `-11:00` to `+13:00`, effectively skipping the calendar day of December 30, 2011, to stay on the same day as Australia.
- [Daylight saving time](https://en.wikipedia.org/wiki/Daylight_saving_time) is recorded as part of the time zone offset, so the offset can also alternate each year. For example, Paris changes its offset from `+01:00` to `+02:00` during each summer. Our mdn/content creation example also falls in the DST period in the Eastern time zone, so it reports an offset of `-04:00` instead of `-05:00`:

  ```js
  console.log(mdnCreation.offsetNanoseconds); // -14400000000000
  console.log(mdnCreation.offset); // "-04:00"
  ```

  > [!NOTE]
  > Remember the mnemonic "spring forward, fall back"—the clocks jump forward by an hour in spring, and go back by an hour in fall.

A **time zone database** takes an instant and a region (identified by a city like `Europe/Paris`) and tells you what offset was used by clocks in that region at that particular instant. The {{jsxref("Temporal.Now.timeZoneId()")}} method gives you the time zone ID for your current JavaScript environment (which usually follows your system settings):

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "Europe/Paris"
```

The [`Temporal.ZonedDateTime` reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) also has a detailed explanation of the IANA time zone database used by JavaScript, including some caveats about corner cases involving time zone transitions. We _highly recommend_ that you always keep these cases in mind. The `ZonedDateTime` object provides methods and properties including {{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}} (not always 24!), {{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}} (not always 00:00!), and {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}} to help you deal with such irregularities.

Once a time zone is defined, retrieve the local time using `hour`, `minute`, `second`, `millisecond`, `microsecond`, and `nanosecond`.

```js
console.log(mdnCreation.hour, mdnCreation.minute, mdnCreation.second);
// 11 43 1
```

### Putting the three pieces together

Now we have a nanosecond offset from the epoch (which we can represent as a {{jsxref("Temporal.Instant")}} object), a {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} to calculate the date part of it, and a {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} to calculate the time part of it (which may also set the date back or forth by a day in some cases). Put these three together, and we have a {{jsxref("Temporal.ZonedDateTime")}} (ZDT) object. Indeed, that's how you construct such an object with the {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} constructor.

```js
const mdnCreation = new Temporal.ZonedDateTime(
  1600184581000000000n,
  "America/New_York",
  "gregory", // Defaults to "iso8601"
);
```

### Constructing a ZonedDateTime from a local date-time

You rarely have an existing timestamp in the form of a nanosecond offset from the epoch. Above, we did the math ourselves to get numbers like `-5694908400000000000n`, but you are more likely to construct ZDTs directly from the local time. To do so, use {{jsxref("Temporal.ZonedDateTime.from()")}}:

```js
const mdnCreation = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York", // Required
  year: 2020, // Required
  month: 9, // Required
  day: 15, // Required
  hour: 11, // Defaults to 0
  minute: 43, // Defaults to 0
  second: 1, // Defaults to 0
  // The rest (millisecond, microsecond, nanosecond) default to 0
  // calendar defaults to "iso8601"
});

console.log(mdnCreation.epochNanoseconds); // 1600184581000000000n
```

Other calendar date representations can be used too, if the calendar supports them. For example, you can pass `era` and `eraYear` instead of `year`, or `monthCode` instead of `month`.

## Plain date-times, dates, and times

Zoned date-times are powerful but they are sometimes too powerful. In many situations, you actually only care about the date-time instead of the exact instant. For example:

- You set a reminder to celebrate New Year's Day on **December 31, 2026 at 23:59** regardless of where you are in the world
- You book a hotel from **December 22, 2026** to **December 27, 2026**, in whatever time zone your travel destination is and without a specified check-in/check-out time
- You set a daily alarm to wake up at **8:00** regardless of where you are in the world

To represent these information-restricted situations, you use:

- {{jsxref("Temporal.PlainDateTime")}} = `ZonedDateTime` minus the `timeZoneId`
- {{jsxref("Temporal.PlainDate")}} = `ZonedDateTime` minus the `timeZoneId` and time parts (`hour`, `minute`, etc.)
- {{jsxref("Temporal.PlainTime")}} = `ZonedDateTime` minus the `timeZoneId` and date parts (`calendarId`, `year`, `month`, etc.)

If you already have a `ZonedDateTime` object, you can convert it to these three forms using the {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}, {{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}, and {{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}} methods:

```js
const mdnCreationDateTime = mdnCreation.toPlainDateTime();
const mdnCreationDate = mdnCreation.toPlainDate();
const mdnCreationTime = mdnCreation.toPlainTime();

console.log(mdnCreationDateTime.toLocaleString("en-US")); // "9/15/2020, 11:43:01 AM"
console.log(mdnCreationDate.toLocaleString("en-US")); // "9/15/2020"
console.log(mdnCreationTime.toLocaleString("en-US")); // "11:43:01 AM"
```

Or, you can use the methods {{jsxref("Temporal.PlainDateTime.from()")}}, {{jsxref("Temporal.PlainDate.from()")}}, {{jsxref("Temporal.PlainTime.from()")}}, passing properties for each component:

```js
const mdnCreationDate = Temporal.PlainDate.from({
  year: 2020,
  month: 9,
  day: 15,
});
```

"Why do I need a whole interface just to restrict myself," you might ask, "I should just use `ZonedDateTime` and remind myself to not use the properties I don't need." There are a few good reasons why you should rely on the dedicated interface.

First, there are minor differences about time calculations when using a `ZonedDateTime` versus a `PlainDateTime`, even when their date-times are the same. Consider a daylight saving transition. In the US, the day of November 3, 2024 was prolonged by 1 hour due to the clock being set back. That means if you have a time representing 00:00, November 3, 2024, and you ask "what's the time 12 hours from now?", you'll be surprised that it's not 12:00:

```js
const time1 = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2024,
  month: 11,
  day: 3,
});
const time2 = time1.add({ hours: 12 });
console.log(time2.toLocaleString("en-US")); // 11/3/2024, 11:00:00 AM EST
```

If, however, you perform the calculation on the _plain_ date-time instead, you'll get a different answer:

```js
const time1 = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2024,
  month: 11,
  day: 3,
});
const plainTime1 = time1.toPlainDateTime();
const plainTime2 = plainTime1.add({ hours: 12 });
const time2 = plainTime2.toZonedDateTime("America/New_York");
console.log(time2.toLocaleString("en-US")); // 11/3/2024, 12:00:00 PM EST
```

Which answer makes sense depends on what is more important for your use case—the resulting time or the duration. For example, if you need to cook a broth for 12 hours, the timer should go off exactly 12 hours from now, regardless of what the wall clock says. On the other hand, if you work a 12-hour shift, you should probably sit for another hour before signing off! Splitting these use cases into different classes makes the decision explicit.

The next problem is that the unused date/time fields are arbitrary and may interact badly with arithmetic. Suppose you use a ZDT to represent a whole day. What should the result be when you subtract a second or add a second? That would cause the time interval to cross two dates, and it's unclear which date to use. For example, if you use midnight as the underlying time, then subtracting one second would shift the date but adding one would not—a leak of abstraction.

```js
const fakeDate = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2020,
  month: 9,
  day: 15,
  // Time fields default to 0
});
console.log(fakeDate.subtract({ seconds: 1 }).day); // 14
console.log(fakeDate.add({ seconds: 1 }).day); // 15
```

By omitting the irrelevant information, you avoid accidentally leaking the abstraction.

```js
const realDate = Temporal.PlainDate.from({
  year: 2020,
  month: 9,
  day: 15,
});
// Adding/subtracting durations less than a day is always ignored
console.log(realDate.subtract({ seconds: 1 }).day); // 15
console.log(realDate.add({ seconds: 1 }).day); // 15
```

The remaining information is exposed through the same interface:

<table>
<thead>
<tr>
<td></td>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Calendar</th>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Year-related</th>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Month-related</th>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Week-related</th>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Day-related</th>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Time components</th>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
</tr>
</tbody>
</table>

You may want to convert the plain time back to your local time when you have the extra information you need. For example, the New Year celebration reminder needs to know which instant to fire at. You can convert `PlainDateTime` and `PlainDate` objects back to `ZonedDateTime` by calling {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}} and supplying the missing information (`timeZoneId` and, in the case of `PlainDate`, a `PlainTime`).

```js
const newYear = Temporal.PlainDate.from({
  year: 2026,
  month: 12,
  day: 31,
});
const reminder = newYear.toZonedDateTime({
  plainTime: { hour: 23, minute: 59 },
  timeZone: Temporal.Now.timeZoneId(),
});
```

## Plain year-months and month-days

You can remove further information from plain dates. Sometimes you don't even care about the whole year-month-day triple; you might only need a whole month in a year, or a recurring date in every year. The {{jsxref("Temporal.PlainYearMonth")}} and {{jsxref("Temporal.PlainMonthDay")}} objects provide such functionalities.

```js
// A special whole month
const prideMonth2026 = Temporal.PlainYearMonth.from({ year: 2026, month: 6 });
// A special calendar date for every year
const remembranceDay = Temporal.PlainMonthDay.from({ month: 11, day: 11 });
```

Year-months and month-days still store a full plain date internally, which is mostly used to deal with non-ISO calendars. Read the two classes' references, especially {{jsxref("Temporal.PlainYearMonth.from()")}} and {{jsxref("Temporal.PlainMonthDay.from()")}}, for more details about the reference day and what it does.

You can also convert back-and-forth between year-months/month-days and dates.

```js
const juneteenth2026 = prideMonth2026.toPlainDate({ day: 19 }); // 2026-06-19
const remembranceDay2026 = remembranceDay.toPlainDate({ year: 2026 }); // 2026-11-11
const mdnCreationMonth = mdnCreationDate.toPlainYearMonth(); // 2020-09
const bastilleDay = bastilleFall.toPlainDate().toPlainMonthDay(); // 07-14
```

## The RFC 9557 format

Dates are often passed between different systems, such as being stored in browser storage like [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), sent to your backend, etc. This requires a common serialization format. All `Temporal` objects implement the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, based on [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). To convert an object to an RFC 9557 string, call its `toString()` method.

```js
const bastilleFallStr = bastilleFall.toString();
console.log(bastilleFallStr); // 1789-07-14T17:09:21+00:09[Europe/Paris]
```

Times and dates are most commonly data fields of bigger objects. All `Temporal` objects include a `toJSON()` method, so they are automatically JSON-serialized to the same format when the bigger object is serialized using {{jsxref("JSON.stringify()")}}.

```js
const mdnRepoHistory = JSON.stringify({ creation: mdnCreation });
console.log(mdnRepoHistory); // {"creation":"2020-09-15T11:43:01-04:00[America/New_York]"}
```

RFC 9557 strings can be converted back to their respective objects by passing them to the `from()` method:

```js
const bastilleFall2 = Temporal.ZonedDateTime.from(bastilleFallStr); // Another ZDT object
```

When you use {{jsxref("JSON.parse()")}}, you can use the `reviver` to parse the date fields:

```js
const mdnRepoHistoryParsed = JSON.parse(mdnRepoHistory, (key, value) => {
  if (key === "creation") return Temporal.ZonedDateTime.from(value);
  return value;
});
// { creation: ZonedDateTime {...} }
```

Each class supports a different subset of the RFC 9557 format (for example, plain date-times won't output the offset or time zone ID); each class reference page has an "RFC 9557 format" section that details the format it uses.

## Deriving new times

So far, we've used dates to create an instant or a plain date-time (to various degrees of precision), store it in a variable, and display it to the user. The `Temporal` API can also derive new instants or plain date-times using arithmetic. We've already shown `compare()`, `add()`/`subtract()`, `since()`/`until()`, etc.; let's properly introduce the arithmetic methods on each `Temporal` object.

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Arithmetic</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Rounding</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Comparison</th>
<td>{{jsxref("Temporal/Instant/equals", "equals()")}}<br>{{jsxref("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDate/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{jsxref("Temporal/PlainTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{jsxref("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
</tbody>
</table>

Addition and subtraction involve another object, {{jsxref("Temporal.Duration")}}, representing the difference between two times. Its interface is relatively straightforward: it stores the number of {{jsxref("Temporal/Duration/years", "years")}}, {{jsxref("Temporal/Duration/months", "months")}}, {{jsxref("Temporal/Duration/days", "days")}}, etc., all the way to {{jsxref("Temporal/Duration/nanoseconds", "nanoseconds")}}. It can be either positive or negative. You can combine it with other times or durations:

- <code>duration1.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add">add</a>(duration2)</code>, <code>duration1.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract">subtract</a>(duration2)</code>: Calculate new durations
- <code>time.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add">add</a>(duration)</code>, <code>time.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract">subtract</a>(duration)</code>: Calculate new times (we show `ZonedDateTime` examples, but other time classes like `PlainDateTime` work similarly)
- <code>time1.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since">since</a>(time2)</code>, <code>time1.<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until">until</a>(time2)</code>: Calculate new durations (we show `ZonedDateTime` examples, but other time classes like `PlainDateTime` work similarly)

> [!NOTE]
> You can't do arithmetic with `PlainMonthDay` objects because they represent recurring dates, not a unique date/time.

For example, you can calculate the difference between two zoned date-times using {{jsxref("Temporal/ZonedDateTime/since", "since()")}} and {{jsxref("Temporal/ZonedDateTime/until", "until()")}}, which both give you {{jsxref("Temporal.Duration")}} objects. By default, the duration only uses units of hours or smaller:

```js
const mdnCreation = Temporal.ZonedDateTime.from(
  "2020-09-15T11:43:01-04:00[America/New_York]",
);
const bastilleFall = Temporal.ZonedDateTime.from(
  "1789-07-14T17:00:00Z[Europe/Paris]",
);

const timeDiff = mdnCreation.since(bastilleFall);
console.log(
  `mdn/content was created ${timeDiff.toLocaleString("en-US")} after the fall of the Bastille!`,
);
// mdn/content was created 2,026,414 hr, 43 min, 1 sec after the fall of the Bastille!

const timeDiff2 = bastilleFall.until(mdnCreation);
console.log(Temporal.Duration.compare(timeDiff, timeDiff2)); // 0 (equal)
```

Be aware that different `Temporal` classes have different restrictions on the durations they can process. For example, `Instant` has no calendar, so it cannot process calendar duration units like months; it also has no time zone, so it cannot process day units (because they may not be 24 hours long during offset transitions). `PlainYearMonth` is only accurate to whole months; durations less than a month are rounded off.

You can compare two times using the static `compare()` method, for example {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare(a, b)")}}. This method returns a number with the same sign as `a.epochNanoseconds - b.epochNanoseconds`:

```js
if (Temporal.ZonedDateTime.compare(mdnCreation, bastilleFall) > 0) {
  console.log("mdn/content was created after the fall of the Bastille!");
} else {
  console.log(
    "What...? mdn/content is at least as old as the fall of the Bastille!",
  );
}
```

> [!NOTE]
> `PlainMonthDay` objects are also not orderable.

Alternatively, you can use the `equals()` method to test if two objects store the same underlying data (this is stricter than just testing that they represent the same date/time). For `ZonedDateTime`, this requires their time zones and calendars to match; to compare only their instants, use `Temporal.ZonedDateTime.compare(a, b) === 0`.

```js
if (mdnCreation.equals(bastilleFall)) {
  // This won't execute, because the ZDTs both represent different instants
  // and have different time zone IDs
  console.log(
    "mdn/content was created at the exact same instant as the fall of the Bastille!",
  );
}
```

Finally, for objects carrying time components (`Instant`, `ZonedDateTime`, `PlainDateTime`, `PlainTime`), the `round()` method allows you to round off time units:

```js
const mdnCreationHour = mdnCreation.round({ smallestUnit: "hours" });
console.log(
  `mdn/content was created at approximately ${mdnCreationHour.toLocaleString("en-US")}`,
);
// mdn/content was created at approximately 9/15/2020, 12:00:00 PM EDT
```

All `Temporal` objects are immutable, so the same object always has the exact same underlying data. If you want to replace a single component or change the calendar or time zone, each class provides "with" methods to create new objects.

```js
const mdnCreationNoon = mdnCreation.with({ hour: 12, minute: 0, second: 0 });
const mdnCreationChi = mdnCreation.withCalendar("chinese");
const mdnCreationParis = mdnCreation.withTimeZone("Europe/Paris");
```

> [!NOTE]
> If you can, prefer using arithmetic methods like `add()`/`subtract()` instead of manually setting components. This avoids dealing with overflows, time zone transitions, etc.

### The Temporal.Now object

We've already shown {{jsxref("Temporal.Now.timeZoneId()")}}, which gives you the time zone ID of the current environment. You can also get the current time in various forms:

| Method                                        | Type                                 |
| --------------------------------------------- | ------------------------------------ |
| {{jsxref("Temporal.Now.instant()")}}          | {{jsxref("Temporal.Instant")}}       |
| {{jsxref("Temporal.Now.zonedDateTimeISO()")}} | {{jsxref("Temporal.ZonedDateTime")}} |
| {{jsxref("Temporal.Now.plainDateTimeISO()")}} | {{jsxref("Temporal.PlainDateTime")}} |
| {{jsxref("Temporal.Now.plainDateISO()")}}     | {{jsxref("Temporal.PlainDate")}}     |
| {{jsxref("Temporal.Now.plainTimeISO()")}}     | {{jsxref("Temporal.PlainTime")}}     |

For example, you can get the current time in Paris, regardless of what time zone your system is in:

```js
const parisNow = Temporal.Now.zonedDateTimeISO("Europe/Paris");
```

## The legacy Date object

> [!NOTE]
> The `Date` object is now considered legacy and should be avoided in new code. This section is purely for those working with legacy code.

To create a `Date` object:

```js
const dateObjectName = new Date();
```

You can pass parameters of various types:

- Nothing: creates today's date and time. For example, `today = new Date();`.
- A string representing a date, in many different forms. The exact forms supported differ among engines, but the following form is always supported: `YYYY-MM-DDTHH:mm:ss.sssZ`. For example, `xmas95 = new Date("1995-12-25")`. If you omit hours, minutes, or seconds, the value will be set to zero.
- A set of integer values for year, month, and day. For example, `xmas95 = new Date(1995, 11, 25)`.
- A set of integer values for year, month, day, hour, minute, and seconds. For example, `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

The `Date` object is similar to a `Temporal.ZonedDateTime` object, storing a millisecond epoch offset with the ISO 8601 calendar assumed. It represents the same instant in UTC and the local time zone. Methods for handling dates and times fall into these broad categories:

- "set" methods, for setting date and time values in `Date` objects.
- "get" methods, for getting date and time values from `Date` objects.
- "to" methods, for returning string values from `Date` objects.
- parse and UTC methods, for parsing `Date` strings.

For example, suppose you define the following date:

```js
const xmas95 = new Date("1995-12-25");
```

Then `xmas95.getMonth()` returns 11, and `xmas95.getFullYear()` returns 1995.

The `getTime` and `setTime` methods are useful for comparing dates. The `getTime` method returns the number of milliseconds since the epoch for a `Date` object.

For example, the following code displays the number of days left in the current year:

```js
const today = new Date();
const endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

This example creates a `Date` object named `today` that contains today's date. It then creates a `Date` object named `endYear` representing the end of the current year. Then, using the number of milliseconds per day, it computes the number of days between `today` and `endYear`, using `getTime` and rounding to a whole number of days.

The `parse` method is useful for assigning values from date strings to existing `Date` objects. For example, the following code uses `parse` and `setTime` to assign a date value to the `ipoDate` object:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

There are many undesirable aspects of `Date` that led to it being abandoned. For example, `Date` objects are mutable; the string format accepted by the constructor and `Date.parse()` can't be standardized; it doesn't accept other fixed time zones, etc. The `Temporal` object is built from the ground up and represents standard industry practices for handling dates. Use `Temporal`, and install a polyfill if your environment doesn't support it.

## Cookbook

You can find snippets for handling common use cases in our [Temporal cookbook](/en-US/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}
