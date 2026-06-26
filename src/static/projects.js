export const projects = [
  {
    id: 'rag-system',
    title: 'RAG System',
    type: 'AI / Search pipeline',
    year: '2026',
    featured: true,
    description:
      'Built a retrieval-augmented generation pipeline that indexes documents, retrieves relevant chunks with FAISS, and grounds generated answers in source context.',
    details: [
      'Implemented document chunking, embedding storage, and vector similarity search with FAISS.',
      'Designed the retrieval flow to improve answer grounding and reduce unsupported responses.',
      'Structured the project as a reusable backend pipeline with clear data-processing stages.'
    ],
    tech: ['C++', 'FAISS', 'Embeddings', 'RAG', 'Vector Search'],
    github: 'https://github.com/k-brandon98/RAG-System'
  },
  {
    id: 'rank-n-read',
    title: 'Rank ’n’ Read',
    type: 'Search / Recommendation app',
    year: '2026',
    featured: true,
    description:
      'Created a book discovery app that ranks Amazon book data using information retrieval methods and presents recommendations through a Flask interface.',
    details: [
      'Built ranking logic with TF-IDF and dimensionality reduction for similarity-based discovery.',
      'Designed backend routes for search, ranking, and result presentation.',
      'Focused on explainable recommendations and a clean user flow from query to ranked books.'
    ],
    tech: ['Python', 'Flask', 'TF-IDF', 'SVD', 'Information Retrieval'],
    github: 'https://github.com/Peter-N-Wainaina/rank_n_read'
  },
  {
    id: 'dictation-app',
    title: 'Dictation App',
    type: 'Web app',
    year: '2026',
    featured: true,
    description:
      'Developed a browser-based dictation tool for capturing speech as text with a simple interface, language selection, and real-time transcription flow.',
    details: [
      'Integrated the Web Speech API into a Fresh/Preact island architecture.',
      'Added language selection and simplified the interface around the core dictation workflow.',
      'Handled transcript state updates and browser capability differences.'
    ],
    tech: ['TypeScript', 'Fresh', 'Preact', 'Web Speech API', 'Deno'],
    github: 'https://github.com/k-brandon98/dictation-app'
  },
  {
    id: 'vha-platform',
    title: 'Virtual Hospitals Africa Platform',
    type: 'Full-stack healthtech',
    year: '2025–2026',
    featured: true,
    description:
      'Contributed to a telehealth platform for rural clinical workflows, including patient intake, health worker dashboards, and location-aware organization features.',
    details: [
      'Built and debugged address autocomplete flows using Google Places and organization-aware API routes.',
      'Worked across Fresh/Preact UI, Zod validation, Kysely queries, and PostgreSQL/PostGIS data models.',
      'Improved reliability for patient contact data, country handling, and low-friction form interactions.'
    ],
    tech: ['TypeScript', 'Deno', 'Fresh', 'Preact', 'PostgreSQL', 'PostGIS', 'Zod'],
    github: 'https://github.com/Virtual-Hospitals-Africa/virtual-hospitals-africa'
  },
  {
    id: 'minibank',
    title: 'MiniBank',
    type: 'Database-backed system',
    year: '2025',
    featured: false,
    description:
      'Created a banking simulation in OCaml using SQLite3, with customer and teller workflows for deposits, withdrawals, and transfers.',
    details: [
      'Modeled persistent customer/account data in a relational database.',
      'Implemented teller and customer logic in a functional programming style.',
      'Supported core banking operations with validation and state persistence.'
    ],
    tech: ['OCaml', 'SQLite3', 'SQL', 'Functional Programming']
  },
  {
    id: 'sewer-navigation',
    title: 'Sewer Navigation',
    type: 'Algorithms game',
    year: '2024',
    featured: false,
    description:
      'Built a Java maze game where an agent navigates to a target, collects coins, and exits efficiently under path-length constraints.',
    details: [
      'Implemented Dijkstra’s algorithm for shortest-path navigation.',
      'Used a greedy collection strategy to balance scoring with step limits.',
      'Connected algorithmic decisions to playable GUI behavior.'
    ],
    tech: ['Java', 'Dijkstra', 'Graphs', 'GUI']
  },
  {
    id: 'find-a-pet',
    title: 'Find-A-Pet',
    type: 'Mobile app',
    year: '2024',
    featured: false,
    description:
      'Created an Android app for searching adoptable pets using REST API calls, filters, RecyclerViews, and custom adapters.',
    details: [
      'Integrated with the PetFinder API to retrieve pet listings.',
      'Built responsive selection interfaces with Spinners and RecyclerViews.',
      'Managed app state and network-driven UI updates in Kotlin.'
    ],
    tech: ['Kotlin', 'Android', 'REST APIs', 'RecyclerView']
  },
  {
    id: 'uatus-codex',
    title: 'Uatu’s Codex',
    type: 'Android app',
    year: '2024',
    featured: false,
    description:
      'Built an Android character browser that retrieves, sorts, and displays Marvel character data from a public API.',
    details: [
      'Made GET requests to the Marvel API and transformed retrieved data for display.',
      'Designed list-based mobile UI screens with Kotlin and XML.',
      'Practiced API integration, sorting, and Android project organization.'
    ],
    tech: ['Kotlin', 'Android Studio', 'XML', 'REST APIs']
  },
  {
    id: 'image-filters',
    title: 'Image Filters',
    type: 'Desktop tool',
    year: '2023',
    featured: false,
    description:
      'Designed an image-editing program that applies filters and steganography operations using multidimensional pixel arrays.',
    details: [
      'Manipulated image pixels with custom filter algorithms.',
      'Implemented vignette, negative, rotation, and black-and-white effects.',
      'Added data encoding and decoding capabilities using steganography.'
    ],
    tech: ['Java', 'Arrays', 'Image Processing', 'Steganography']
  },
  {
    id: 'viterbi-pos',
    title: 'Viterbi POS Tagger',
    type: 'NLP algorithm',
    year: '2023',
    featured: false,
    description:
      'Decoded part-of-speech tag sequences using Hidden Markov Models and the Viterbi dynamic programming algorithm.',
    details: [
      'Parsed HMM input files and represented transition/emission probabilities.',
      'Implemented efficient dynamic programming over hidden state sequences.',
      'Used NumPy and file I/O to support repeatable decoding experiments.'
    ],
    tech: ['Python', 'NumPy', 'HMMs', 'Dynamic Programming', 'NLP']
  }
]
