---
title: 'BRIDGE: Schematic-to-Netlist Translation'
summary: 'Two-person VLM research project with equal contribution: comparing GRPO and SFT for circuit component detection and SPICE-style netlist generation.'
date: '2025-09-01'
layout: engineering-project
featured: true
pager: false
eyebrow: 'VISION–LANGUAGE MODELS · EDA'
headline: 'Learning to read circuit schematics.'
period: 'Ongoing project · Started Fall 2025'
stack: ['Qwen2.5-VL-7B-Instruct', 'LoRA', 'GRPO', 'SFT', 'SPICE-style netlists']
problem: 'Circuit schematics express components and connectivity visually, while circuit tools consume structured netlists. Translation must recover the correct symbols and electrical connections, not just plausible text.'
contribution: 'Chee-An Yu and I contribute equally across conceptualization, methodology and system design, model implementation, experiments, analysis, and writing. We developed BRIDGE and compared GRPO with supervised fine-tuning for schematic understanding and netlist generation. This is a two-person project with shared ownership of every part.'
workflow_title: 'Parse components. Learn structured outputs.'
workflow_note: 'Walkthrough of the current report. These controls explain the methods; they do not run a VLM or circuit simulator. GRPO and SFT results are separate experimental comparisons.'
workflow:
  - name: 'Paired circuit data'
    text: 'Use synthetic SPICE netlists paired with rendered circuit schematics from the Netlistify dataset. The tasks are component detection and connectivity-aware netlist generation.'
  - name: 'VLM + LoRA'
    text: 'Adapt Qwen2.5-VL-7B-Instruct with parameter-efficient LoRA. Prompts specify allowed component types and structured outputs.'
  - name: 'GRPO detection'
    text: 'Component-level rewards combine precision and recall, coverage, output format, and a penalty for invalid predictions. GRPO improves recall but can encourage over-generation.'
  - name: 'SFT & netlists'
    text: 'Supervised fine-tuning uses paired examples and token-level cross-entropy for component detection and SPICE-style netlist generation. Evaluate detection metrics and netlist BLEU-4.'
review_title: 'The challenge: reward hacking and structural correctness'
review_points:
  - title: 'Reward hacking'
    text: 'Recall-oriented rewards can favor listing too many components. GRPO increases recall but reduces overall precision relative to the original model in Table IV.'
  - title: 'Dense supervision'
    text: 'SFT supplies token-level feedback and yields the best overall precision and F1 among the three reported configurations. It provides a stronger structural baseline.'
  - title: 'Evaluation boundary'
    text: 'BLEU-4 measures token overlap with reference netlists. It does not establish electrical equivalence, successful SPICE simulation, or complete connectivity correctness.'
verified_results: true
---

## Preliminary measured results

Table IV of the current report compares component detection:

| Model | Accuracy | Precision | Recall | F1 |
|---|---:|---:|---:|---:|
| Original Qwen | 0.5370 | 0.6839 | 0.7143 | 0.6987 |
| Qwen + GRPO | 0.5687 | 0.6082 | **0.8976** | 0.7251 |
| Qwen + SFT | **0.5957** | **0.7388** | 0.7547 | **0.7467** |

SFT improves F1 by **0.0480** over the original model. GRPO improves recall by **0.1833**, while precision decreases by **0.0757**. These results show why recall alone is insufficient when incorrect components affect circuit structure.

### Netlist generation

Table V reports mean BLEU-4 increasing from **0.0007 to 0.0407** after SFT; the median increases from **0.0000 to 0.0285**. Figure 3 shows more structured outputs, with remaining component and connectivity errors. These are preliminary translation results, not a demonstrated circuit-equivalence or simulation pass rate.

### Current scope

The report compares original Qwen, GRPO, and SFT. It discusses staged training, but does not report a separate combined SFT-plus-GRPO result. Rule-checking and simulation-informed feedback are described in the framework; quantitative SPICE execution and functional-correctness results remain to be documented. The report does not specify the evaluation split size, exact GPU configuration, or repeated-run uncertainty.

### Team contribution

Te-Yi Kan and Chee-An Yu each contribute **50%** to conceptualization, methodology / system design, model implementation, experiments, analysis / interpretation, and manuscript writing (Table VI).
