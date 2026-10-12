---
title: 'Collaborative Speculative Decoding Across Edge and Cloud'
summary: 'Confidence- and hardness-aware drafting and selective cloud verification for efficient LLM inference.'
date: '2026-02-01'
authors:
  - admin
tags:
  - LLM Inference
  - Speculative Decoding
  - Edge–Cloud Systems
featured: true
pager: false
---

**Status:** Ongoing research · February 2026–present

## The problem

Sequential LLM decoding incurs repeated computation, accumulated latency, and substantial memory demand. Running generation entirely on an edge device creates quality, latency, and memory tradeoffs. Cloud generation adds communication delay and server-side cost.

## My contribution

I built an edge–cloud speculative decoding pipeline with confidence- and hardness-aware gating. A small language model generates candidate tokens locally. The pipeline dynamically decides which draft tokens need verification by a remote target model, sending a subset of hard or uncertain tokens instead of verifying every draft token remotely.

Adaptive gating aims to avoid unnecessary verification, reduce edge–cloud communication and verifier load, and preserve output quality through targeted verification of high-risk tokens.

## Evaluation focus

The work examines end-to-end latency, communication overhead, cloud compute and serving cost, and generation quality. Current research questions include which signals best capture confidence and token hardness, and how to combine them for selective verification. Quantitative benchmarks are not included here yet.

## Research context

This project extends my work on efficient and privacy-aware ML systems for resource-constrained devices. It is introduced as a future research direction in my April 2026 qualifying exam presentation.

[Qualifying exam overview and slides](/event/qualifying-exam/) · [More research](/research/)
