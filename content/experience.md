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
        <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
          <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Skills
          </div>
          <p>Below is a list of my technical skill sets categorized by domain.</p>
        </div>

        <div class="flex flex-col lg:flex-row items-start max-w-prose mx-auto gap-3 px-6 md:px-0">
          <div class="w-full lg:w-1/2">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Programming</div>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Go</li>
              <li>C++</li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="mb-5 text-xl font-bold text-gray-900 dark:text-white">Tools & Frameworks</div>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>TensorFlow, PyTorch</li>
              <li>Hugo, Tailwind CSS</li>
              <li>Git, Docker</li>
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
