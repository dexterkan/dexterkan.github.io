---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  # - block: resume-skills
  - block: markdown
    id: section-skills
    content:
      title: Skills
      username: admin
      text: |
       <div class="flex flex-col lg:flex-row items-start max-w-prose mx-auto gap-3 px-6 md:px-0">
          <!-- 1st Column -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Programming</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Python</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>R</li>
              <li>Matlab</li>
            </ul>
          </div>

          <!-- 2nd Column -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Deep Learning Frameworks & API</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>Scikit-learn</li>
              <li>Keras</li>
            </ul>
          </div>

          <!-- 3rd Column -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Infrastructure & Deployment</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Openstack</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
  - block: resume-languages
    id: section-hobbies
    content:
      title: Hobbies
      username: dexter
---
