---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
# sections:
#   - block: collection
#     content:
#       title: Selected Projects
#       text: I enjoy making things. Here are a selection of projects that I have worked on over the years.
#       filters:
#         folders:
#           - project
#     design:
#       view: article-grid
#       fill_image: false
#       columns: 3
sections:
  - block: markdown
    id: section-projects
    content:
      title: Selective Projects
      username: admin
      text: |
        <div class="flex flex-col lg:flex-row flex-wrap justify-between mx-auto gap-6 px-6 md:px-0">
          <!-- Row 0 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Schematic-to-Netlist Translation using RL-Enhanced VLM Pipeline</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Fall 2025</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Trained a Qwen-based vision-language model (with LoRA adapters) to translate circuit schematics into SPICE-compatible netlists with syntax and functional guarantees.</li>
              <li>Used GRPO reinforcement learning with dual rewards (syntax validity + SPICE simulation-based functional correctness) to iteratively refine generated netlists.</li>
              <li>Integrated circuit-rule checks and simulation signals into the reward loop, boosting end-to-end translation accuracy and reducing human correction time.</li>
            </ul>
          </div>

          <!-- Row 1 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Operating System Implementation</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2024</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Completed Brown University's kernel assignment project to build a simple operating system called Weenix.</li>
              <li>Implemented essential elements for an operating systems, including but not limited to process, thread, scheduler, virtual file system, and virtual memory.</li>
            </ul>
          </div>

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
        </div>
---
