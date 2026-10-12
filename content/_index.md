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
        <article class="career-card"><p class="career-eyebrow">ML SYSTEMS · COMPUTER VISION</p><h3>Privacy-Preserving Vision Inference</h3><p><strong>Problem.</strong> Remote vision inference can expose sensitive image content; mobile devices have limited compute.</p><p><strong>Contribution.</strong> Developed LLPRI, a pipeline combining sensitive object detection, scheduling, and obfuscation to balance privacy, task utility, and latency.</p><p><strong>Evaluation.</strong> Experiments examine privacy protection, vision-task utility, and latency overhead.</p><div class="career-links"><a href="/publication/kan-tdsc-2025/">Research details →</a></div></article>
        <article class="career-card"><p class="career-eyebrow">DISTRIBUTED SYSTEMS · OPTIMIZATION</p><h3>Time-Sensitive Edge–Cloud Scheduling</h3><p><strong>Problem.</strong> Vehicular ML tasks need timely results despite constrained compute and communication overhead.</p><p><strong>Contribution.</strong> Designed TODORA, a threshold-based online mechanism for distributed task offloading and resource allocation.</p><p><strong>Evaluation.</strong> Simulations compare task duration and computation overhead against periodic optimization and practical baselines.</p><div class="career-links"><a href="/publication/kan-tvt-2025/">Paper & research details →</a></div></article>
        <article class="career-card"><p class="career-eyebrow">LLM INFERENCE · EDGE–CLOUD SYSTEMS</p><h3>Collaborative Speculative Decoding</h3><p><strong>Problem.</strong> Repeated cloud verification adds latency, communication overhead, and verifier load during LLM generation.</p><p><strong>Contribution.</strong> Built a pipeline that uses drafter confidence and token hardness to selectively send uncertain tokens for cloud verification.</p><p><strong>Focus.</strong> Reduce unnecessary verification and cloud serving cost while maintaining generation quality.</p><p class="career-context">February 2026–present · Ongoing research</p><div class="career-links"><a href="/project/speculative-decoding/">Project details →</a></div></article>
        </div>
        <p class="career-section-link"><a href="/projects/">More engineering projects →</a> · <a href="/research/">More research →</a></p>
    design:
      columns: '1'
  - block: career-markdown
    content:
      title: 'Relevant Experience'
      text: |-
        <div class="career-grid"><article class="career-card"><p class="career-eyebrow">META · SUMMER 2026</p><h3>Incoming Machine Learning Engineer Intern</h3><p class="career-context">May–August 2026 · Menlo Park, CA</p><p>Expected focus: ad recommendation under privacy constraints, improving ranking and retrieval utility while meeting privacy and data minimization requirements.</p><div class="career-links"><a href="/experience/">Internship & experience →</a></div></article><article class="career-card"><p class="career-eyebrow">USC · RESEARCH</p><h3>Machine Learning & Distributed Systems</h3><p>Developed privacy-preserving inference, hardware-aware neural architecture search, online edge–cloud scheduling, and collaborative speculative decoding in the NetPD research group.</p><div class="career-links"><a href="/experience/">Experience & education →</a></div></article><article class="career-card"><p class="career-eyebrow">ACADEMIA SINICA · INDUSTRY COLLABORATION</p><h3>Wireless Systems & Optimization</h3><p>Researched intelligent reflecting surfaces and DRL-enhanced MIMO detection, and collaborated with MediaTek researchers on hybrid RIS/relay systems for 6G communications.</p><div class="career-links"><a href="/experience/">Research & collaboration →</a></div></article></div>
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
