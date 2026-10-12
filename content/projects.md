---
title: 'Projects'
date: 2024-05-19
type: landing
design:
  spacing: '4rem'
sections:
  - block: career-markdown
    content:
      title: 'Selected Projects'
      text: |-
        <p>Selected implementations across machine learning and systems programming. Research systems and their evaluations are also documented on the <a href="/research/">Research page</a>.</p>
        <div class="career-grid">
        <article class="career-card"><p class="career-eyebrow">LLM INFERENCE · EDGE–CLOUD SYSTEMS</p><h3>Collaborative Speculative Decoding</h3><p><strong>Problem.</strong> Repeated cloud verification adds latency, communication overhead, and verifier load during LLM generation.</p><p><strong>Contribution.</strong> Built a pipeline that uses drafter confidence and token hardness to selectively route 8-token draft spans for cloud verification.</p><p><strong>Preliminary result.</strong> GSM8K accuracy of <strong>72.21%</strong> at a <strong>27.00% cloud call rate</strong>, versus 61.26% for edge-only generation.</p><p class="career-context">February 2026–present · Ongoing research · Measured accuracy and cloud usage; end-to-end latency is not yet evaluated.</p><div class="career-links"><a href="/project/speculative-decoding/">Project details →</a></div></article>
        <article id="schematic-to-netlist" class="career-card"><p class="career-eyebrow">VISION–LANGUAGE MODELS · REINFORCEMENT LEARNING</p><h3>Schematic-to-Netlist Translation</h3><p><strong>Problem.</strong> Translating circuit diagrams into usable SPICE netlists requires both valid syntax and correct circuit behavior.</p><p><strong>Contribution.</strong> Co-developed BRIDGE with Chee-An Yu, sharing every part equally. Compared Qwen2.5-VL with LoRA, GRPO, and supervised fine-tuning.</p><p><strong>Validation.</strong> SFT component-detection F1: 0.7467 versus 0.6987 for original Qwen. Netlist mean BLEU-4: 0.0407 versus 0.0007; functional equivalence remains to be evaluated.</p><p class="career-context">Fall 2025 · Qwen, LoRA, GRPO, SPICE</p><div class="career-links"><a href="/project/schematic-to-netlist/">Implementation & project resources →</a></div></article>
        <article class="career-card"><p class="career-eyebrow">SYSTEMS PROGRAMMING · C</p><h3>Operating System Implementation</h3><p><strong>Scope.</strong> Implemented core components of Weenix through Brown University’s operating systems assignment.</p><p><strong>Implementation.</strong> Processes, threads, scheduling, virtual file systems, and virtual memory.</p><p><strong>Engineering focus.</strong> Kernel abstractions, resource management, and the interaction between execution, storage, and memory.</p><div class="career-links"><a href="/project/weenix/">Implementation & project resources →</a></div></article>
        </div>
        <details class="career-archive"><summary>Additional projects · 2016–2023</summary><div class="career-archive-content">
          <!-- Row 1 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Drift-Plus-Penalty (DPP)-based Task Offloading Mechanism for Vehicular Networks</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2023</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Devised a DPP-based algorithm to effectively schedule resource-intensive tasks on edge and cloud servers.</li>
              <li>Verified the proposed algorithm can achieve comparable performance in low complexity as compared to the optimal solution.</li>
            </ul>
          </div>

          <!-- Row 1 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Socket Programming</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2022</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Established an authorization and web registration system with C socket.</li>
            </ul>
          </div>

          <!-- Row 2 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Reinforcement Learning (RL)-Based Mechanism for Loss Reduction during the COVID-19 Outbreak</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Developed RL-based algorithms to provide appropriate business strategies for the food and beverage industry.</li>
              <li>Simulated the proposed RL-based algorithms to verify the superiority of our proposed methods in comparison to baselines.</li>
            </ul>
          </div>

          <!-- Row 2 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Large-Scale Network Project</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Utilized R to explore graph theory and algorithms.</li>
              <li>Analyzed topology of social networks including Facebook and Google+.</li>
            </ul>
          </div>

          <!-- Row 3 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Generative Adversarial Imitation Learning (GAIL)</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Implemented an imitation learning algorithm that can be scaled up to large and high-dimensional environments with Python.</li>
              <li>Evaluated the imitation algorithm in the OpenAI environment such as Pendulum and Cartpole and showed that the proposed GAIL algorithm outperforms the common baseline, Behavior Cloning.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Image Generation Methods for Cataract Surgery</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Winter 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Applied two deep learning-based frameworks, U-Net and U-Net+WGAN, to segment the images of eye structures.</li>
              <li>Evaluated the two frameworks with respect to three metrics, pixel accuracy, mean IoU, and F1 score, and also compared the results with our self-labeled data.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Large-Scale Data Mining Project</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Winter 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Collected and cleaned large-scale data with Python.</li>
              <li>Performed data analysis with different modeling tools from machine learning, such as Bayesian graphical models and collaborative filtering, and evaluated the performance of models.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">IEEE 802.15.4 Design Challenge</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2017</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Designed wireless Machine-to-Machine (M2M) communication protocols to adjust the duty cycle of each device.</li>
              <li>Implemented wireless M2M communication protocols with the FCM2401 module using AutoNet Software Development Kit.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Performance Analysis of Cloud Computing Center</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2017</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Reproduced the results in the paper that analyzed the performance of small- to medium-sized cloud resource providers.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Intra System Handoff in Heterogeneous Wireless Networks</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2017</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Simulated the performance of mobile vertical and horizontal handoff among 3G, 4G, and WiFi in the Taipei Metro System.</li>
            </ul>
          </div>

          <!-- Row 4 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Text Recognizing Voice Recorder</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2017</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Established a novel design with knowledge in digital signal processing and circuit design of a voice recorder on FPGA able to automatically recognize text commands and perform corresponding functions.</li>
            </ul>
          </div>

          <!-- Row 5 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Functionally Reduced And-Inverter Graph (FRAIG)</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2016</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Implemented a special circuit representation, FRAIG (Functionally Reduced And-Inverter Graph), with C from a circuit description file and designed a data structure to identify functionally equivalent candidate pairs in the circuit.</li>
              <li>Performed hash, Boolean logic simulations, and Boolean Satisfiability (SAT) solver to detect equivalence in a circuit.</li>
            </ul>
          </div>
        </div></details>
    design:
      columns: '1'
---
