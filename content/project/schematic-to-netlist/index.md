---
title: 'Schematic-to-Netlist Translation'
summary: 'Qwen adaptation and reinforcement learning for translating circuit diagrams into SPICE-compatible netlists.'
date: '2025-09-01'
layout: engineering-project
featured: true
pager: false
eyebrow: 'VISION–LANGUAGE MODELS · REINFORCEMENT LEARNING'
headline: 'From circuit diagrams to executable netlists.'
period: 'Fall 2025'
stack: ['Qwen', 'LoRA', 'GRPO', 'SPICE']
problem: 'A circuit diagram encodes components and connectivity visually. A useful translation must produce a valid netlist and preserve the circuit’s function, rather than merely generate plausible text.'
contribution: 'Developed an RL-enhanced vision–language model pipeline to translate schematic diagrams into SPICE-compatible netlists. Adapted Qwen with LoRA for schematic understanding, then used GRPO with syntax and functional correctness as reward signals to refine translation quality.'
workflow_title: 'Adapt the model. Refine with correctness feedback.'
workflow_note: 'Conceptual walkthrough of the pipeline described in my resume. The controls explain the stages; they do not run a model or circuit simulation.'
workflow:
  - name: 'Schematic input'
    text: 'The input is a circuit schematic diagram. The translation target is a SPICE-compatible representation of components and their connections.'
  - name: 'Qwen + LoRA'
    text: 'LoRA adapts Qwen for schematic understanding and netlist generation. This provides the model adaptation stage before reinforcement learning refinement.'
  - name: 'Correctness feedback'
    text: 'Syntax and functional correctness supply reward signals. The pipeline evaluates whether a generated netlist is well formed and represents the intended circuit behavior.'
  - name: 'GRPO refinement'
    text: 'GRPO uses correctness feedback to iteratively refine translation quality. Syntactic validity and functional correctness are distinct objectives; improving one alone is insufficient.'
review_title: 'Two levels of correctness'
review_points:
  - title: 'Syntax'
    text: 'Can the generated output be interpreted as a SPICE-compatible netlist? The project uses syntax correctness in the reward loop.'
  - title: 'Function'
    text: 'Does the translated circuit behave as intended? The project also uses functional correctness as a reward signal.'
  - title: 'Evidence to add'
    text: 'Representative input/output pairs, evaluation protocol, baseline comparisons, and measured syntax and functional success rates.'
---
