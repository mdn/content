---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
page-type: web-api-interface
browser-compat: api.PerformanceTimingConfidence
---

{{APIRef("Performance API")}}

The **`PerformanceTimingConfidence`** interface provides access to information that indicates whether a performance record reflects typical application performance, or is likely affected by external factors.

The `PerformanceTimingConfidence` object for each navigation timing entry is accessed via the {{domxref("PerformanceNavigationTiming")}} interface's {{domxref("PerformanceNavigationTiming.confidence", "confidence")}} property.

## Instance properties

- {{domxref("PerformanceTimingConfidence.randomizedTriggerRate")}} {{ReadOnlyInline}}
  - : A number indicating how often noise is applied when exposing the `value`.
- {{domxref("PerformanceTimingConfidence.value")}} {{ReadOnlyInline}}
  - : An enumerated value indicating a broad confidence measure of whether a performance record reflects typical application performance, or is likely affected by external factors.

## Instance methods

- {{domxref("PerformanceTimingConfidence.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceTimingConfidence` object.

## Description

If a website has loaded after a browser "cold start" or session restore, its pages may load more slowly as a result. In such cases, a `low` confidence {{domxref("PerformanceTimingConfidence.value", "value")}} is returned for an associated performance record. On the other hand, if the browser determines a returned performance record to be representative of typical application performance, a `high` confidence value is returned.

> [!NOTE]
> Device factors such as CPU do not contribute to the performance assessment. Other factors than browser "cold start" and session restore may be taken into account in future updates.

This confidence measure is useful for developers when trying to determine whether a performance issue is a legitimate concern, or an outlier being caused by external factors.

### Interpreting confidence data

Since the {{domxref("PerformanceTimingConfidence.randomizedTriggerRate", "randomizedTriggerRate")}} can vary across records, per-record weighting is needed to recover unbiased aggregates. The procedures below illustrate how weighting based on {{domxref("PerformanceTimingConfidence.value", "value")}} can be applied before computing summary statistics.

#### Computing debiased means

To compute debiased means for both [`high` and `low` values](/en-US/docs/Web/API/PerformanceTimingConfidence/value#value):

1. For each record:
   - Let `p` be the record's {{domxref("PerformanceTimingConfidence.randomizedTriggerRate", "randomizedTriggerRate")}}.
   - Let `c` be the record's {{domxref("PerformanceTimingConfidence.value", "value")}}.
   - Let `R` be `1` when `c` is `high`, otherwise `0`.
2. Compute per-record weight `w` based on `c`:
   - For estimating the `high` mean: `w = (R - (p / 2)) / (1 - p)`.
   - For estimating the `low` mean: `w = ((1 - R) - (p / 2)) / (1 - p)`.
     > [!NOTE]
     > `w` may be negative for some records; you should keep every record.
   - Let `weighted_duration = duration * w` (see {{domxref("PerformanceEntry.duration", "duration")}}).
3. Let `total_weighted_duration` be the sum of the `weighted_duration` values across all records.
4. Let `sum_weights` be the sum of the `w` values across all records.
5. Let `debiased_mean = total_weighted_duration / sum_weights`, provided `sum_weights` is not near zero.

#### Computing debiased percentiles

To compute debiased percentiles for both `high` and `low`:

1. Follow the [computing debiased means](#computing_debiased_means) steps to compute a per-record weight `w`.
2. Let `sum_weights` be the sum of the `w` values across all records.
3. Let `sorted_records` be all records sorted by duration in ascending order.
4. For a desired percentile (0-100), compute `q = percentile / 100.0`.
5. Walk `sorted_records` and for each record:
   - Compute cumulative weight `cw` per-record: `cw = sum_{i: duration_i <= duration_j} w_i`.
   - Compute debiased cumulative distribution function per-record: `cdf = cw / sum_weights`.
6. Find the first index `idx` where `cdf >= q`.
   - If `idx` is `0`, return `duration` for `sorted_records[0]`.
   - If no such `idx` exists, return `duration` for `sorted_records[n]`.
7. Compute interpolation fraction:
   - Let `lower_cdf` be `cdf` for `sorted_records[idx-1]`.
   - Let `upper_cdf` be `cdf` for `sorted_records[idx]`.
   - if `lower_cdf = upper_cdf`, return `duration` for `sorted_records[idx]`.
   - Otherwise:
     - Let `ifrac = (q - lower_cdf) / (upper_cdf - lower_cdf)`.
     - Let `lower_duration` be `duration` for `sorted_records[idx-1]`.
     - Let `upper_duration` be `duration` for `sorted_records[idx]`.
     - Return `lower_duration + (upper_duration - lower_duration) * ifrac`.

## Examples

### Basic usage

This example uses a {{domxref("PerformanceObserver")}} to retrieve confidence data from observed {{domxref("PerformanceNavigationTiming")}} entries.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name} confidence: ${entry.confidence.value}`,
      `Trigger rate: ${entry.confidence.randomizedTriggerRate}`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceNavigationTiming")}}
