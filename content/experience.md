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
        <div class="flex flex-col lg:flex-row flex-wrap items-start max-w-prose mx-auto gap-3 px-6 md:px-0">
          <!-- Column 1 -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Programming</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><i class="fas fa-code mr-2 text-primary-600"></i>Python</li>
              <li><i class="fas fa-code mr-2 text-primary-600"></i>JavaScript</li>
              <li><i class="fas fa-code mr-2 text-primary-600"></i>Go</li>
              <li><i class="fas fa-code mr-2 text-primary-600"></i>C++</li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Tools & Frameworks</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><i class="fas fa-tools mr-2 text-primary-600"></i>TensorFlow</li>
              <li><i class="fas fa-laptop-code mr-2 text-primary-600"></i>PyTorch</li>
              <li><i class="fas fa-cubes mr-2 text-primary-600"></i>Scikit-learn</li>
              <li><i class="fas fa-project-diagram mr-2 text-primary-600"></i>Keras</li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div class="w-full lg:w-1/3">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Infrastructure</div>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><i class="fas fa-server mr-2 text-primary-600"></i>Docker</li>
              <li><i class="fas fa-cloud mr-2 text-primary-600"></i>OpenStack</li>
              <li><i class="fas fa-network-wired mr-2 text-primary-600"></i>Kubernetes</li>
              <li><i class="fas fa-database mr-2 text-primary-600"></i>PostgreSQL</li>
            </ul>
          </div>
        </div>
  - block: resume-awardså
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
