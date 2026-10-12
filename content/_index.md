---
title: ""
date: 2022-10-24
type: landing
design:
  spacing: '4rem'
sections:
  - block: career-biography
    content:
      username: admin
      text: ""
    design:
      css_class: light
  - block: career-markdown
    id: selected-work
    content:
      title: 'Selected Work'
      text: |-
        <div class="career-grid">
        <article class="career-card"><p class="career-eyebrow">ML SYSTEMS · COMPUTER VISION</p><h3>Privacy-Preserving Vision Inference</h3><p><strong>Problem.</strong> Remote vision inference can expose sensitive image content; mobile devices have limited compute.</p><p><strong>Contribution.</strong> Developed LLPRI, a pipeline combining sensitive object detection, scheduling, and obfuscation to balance privacy, task utility, and latency.</p><p><strong>Result.</strong> <strong>14.99% relative mAP50 loss</strong> for LLPRI versus <strong>47.13%</strong> for random masking in the reported object-detection utility experiment.</p><p class="career-context">COCO · Faster R-CNN / ResNet-18 · random mask α = 50% · Table I. Relative loss from unobfuscated inference; this comparison does not hold privacy leakage equal.</p><div class="career-links"><a href="/publication/kan-tdsc-2025/">Results & experimental setup →</a></div></article>
        <article class="career-card"><p class="career-eyebrow">DISTRIBUTED SYSTEMS · OPTIMIZATION</p><h3>Time-Sensitive Edge–Cloud Scheduling</h3><p><strong>Problem.</strong> Vehicular ML tasks need timely results despite constrained compute and communication overhead.</p><p><strong>Contribution.</strong> Designed TODORA, a threshold-based online mechanism for distributed task offloading and resource allocation.</p><p><strong>Result.</strong> <strong>&lt; 1 ms decision runtime</strong> for TODORA versus <strong>&gt; 1 s</strong> for periodic optimization (POPT), with lower overall task duration in the reported vehicle-compute sweep.</p><p class="career-context">Simulation · vehicle compute 13–17 TFLOPS · Figure 4. Decision runtime is scheduler computation, not end-to-end task latency.</p><div class="career-links"><a href="/publication/kan-tvt-2025/">Results & experimental setup →</a></div></article>
        <article class="career-card"><p class="career-eyebrow">LLM INFERENCE · EDGE–CLOUD SYSTEMS</p><h3>Collaborative Speculative Decoding</h3><p><strong>Problem.</strong> Repeated cloud verification adds latency, communication overhead, and verifier load during LLM generation.</p><p><strong>Contribution.</strong> Built a pipeline that uses drafter confidence and token hardness to selectively route 8-token draft spans for cloud verification.</p><p><strong>Preliminary result.</strong> GSM8K accuracy of <strong>72.21%</strong> at a <strong>27.00% cloud call rate</strong>, versus 61.26% for edge-only generation.</p><p class="career-context">February 2026–present · Ongoing research · Measured accuracy and cloud usage; end-to-end latency is not yet evaluated.</p><div class="career-links"><a href="/project/speculative-decoding/">Project details →</a></div></article>
        </div>
        <p class="career-section-link"><a href="/projects/">More engineering projects →</a> · <a href="/research/">More research →</a></p>
    design:
      columns: '1'
  - block: career-markdown
    content:
      title: 'Relevant Experience'
      text: |-
        <div class="career-grid"><article class="career-card"><p class="career-eyebrow">META · SUMMER 2026</p><h3>Machine Learning Engineer Intern</h3><p class="career-context">May–August 2026</p><p>Owned end-to-end design and execution of <strong>200+ offline model experiments</strong> across architectures, training strategies, losses, labels, and features. Selected model candidates advanced to <strong>online testing</strong>.</p><p>Built AI-assisted training and evaluation tooling that reduced experiment rerun turnaround <strong>from days to hours</strong>. Investigated generalization challenges with large-scale feature sets and training data.</p><div class="career-links"><a href="/experience/">Internship & experience →</a></div></article><article class="career-card"><p class="career-eyebrow">USC · RESEARCH</p><h3>Machine Learning & Distributed Systems</h3><p>Developed privacy-preserving inference, hardware-aware neural architecture search, online edge–cloud scheduling, and collaborative speculative decoding in the NetPD research group.</p><div class="career-links"><a href="/experience/">Experience & education →</a></div></article><article class="career-card"><p class="career-eyebrow">ACADEMIA SINICA · INDUSTRY COLLABORATION</p><h3>Wireless Systems & Optimization</h3><p>Researched intelligent reflecting surfaces and DRL-enhanced MIMO detection, and collaborated with MediaTek researchers on hybrid RIS/relay systems for 6G communications.</p><div class="career-links"><a href="/experience/">Research & collaboration →</a></div></article></div>
    design:
      columns: '1'
  - block: collection
    content:
      title: Selected Publications & Manuscripts
      count: 3
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: citation
  - block: collection
    id: news
    content:
      title: Recent News
      count: 3
      filters:
        folders:
          - post
      order: desc
    design:
      view: date-title-summary
  - block: collection
    id: talks
    content:
      title: Talks & Presentations
      count: 3
      filters:
        folders:
          - event
    design:
      view: date-title-summary
---
