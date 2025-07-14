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
          <!-- Row 1 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Operating System Implementation</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2024</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300" style="text-align: justify;">
              <li>Completed Brown University's kernel assignment project to build a simple operating system called Weenix.</li>
              <li>Implemented essential elements for an operating systems, including but not limited to process, thread, scheduler, virtual file system, and virtual memory.</li>
            </ul>
          </div>

          <!-- Row 2 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Reinforcement Learning (RL)-Based Mechanism for Loss Reduction during the COVID-19 Outbreak</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><i class="fas fa-tools mr-2 text-primary-600"></i>Developed RL-based algorithms to provide appropriate business strategies for the food and beverage industry.</li>
              <li><i class="fas fa-laptop-code mr-2 text-primary-600"></i>Simulated the proposed RL-based algorithms to verify the superiority of our proposed methods in comparison to baselines.</li>
            </ul>
          </div>

          <!-- Row 3 -->
          <div class="w-full">
            <div class="uppercase tracking-wide mb-5 text-xl font-bold text-primary-700 dark:text-primary-200 flex justify-between items-center">Generative Adversarial Imitation Learning (GAIL)</div>
            <div class="mb-5 text-base font-bold text-gray-900 dark:text-white flex justify-between items-center">Spring 2020</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><i class="fas fa-server mr-2 text-primary-600"></i>Implemented an imitation learning algorithm that can be scaled up to large and high-dimensional environments with Python.</li>
              <li><i class="fas fa-cloud mr-2 text-primary-600"></i>Evaluated the imitation algorithm in the OpenAI environment such as Pendulum and Cartpole and showed that the proposed GAIL algorithm outperforms the common baseline, Behavior Cloning.</li>
            </ul>
          </div>
        </div>
---
