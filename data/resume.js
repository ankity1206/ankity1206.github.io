/**
 * resume.js — Resume Data
 * ─────────────────────────────────────────────────────────────
 * Purpose: Single source of truth for all resume content.
 *          The static HTML in index.html was built from this data.
 *          Update this file first, then reflect changes in index.html.
 *
 * Easy to edit — update your info here!
 * ─────────────────────────────────────────────────────────────
 */

// eslint-disable-next-line no-unused-vars
const RESUME = {

  // ── Personal Info ─────────────────────────────────────────
  name:      'Ankit Yadav',
  institute: 'Indian Statistical Institute, Kolkata — 700108',

  contact: {
    emailISI:  'cs2501@isical.ac.in',
    emailGmail:'hak171562@gmail.com',
    phone:     '+91 8901847295',
    github:    'https://github.com/ankity1206',
  },

  cv: 'Ankit_resume_nvidia.pdf',

  // ── Achievements ──────────────────────────────────────────
  achievements: [
    'Secured All India Rank 88 in IIT JAM Mathematics',
    'Achieved 90.35 percentile in IIT JAM Statistics',
    'Merit-cum-Means Scholarship during M.Sc. at IIT Bombay',
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree:   'M.Tech. Computer Science',
      school:   'Indian Statistical Institute, Kolkata',
      period:   '2025–27',
      score:    'CGPA: 6.1',
      courses:  [
        'Discrete Mathematics',
        'Automata Theory',
        'Operating System',
        'Computer Organization',
        'Randomized & Approximation Algorithms',
        'Quantum Computing',
        'Statistical Methods',
      ],
    },
    {
      degree:   'M.Sc. Mathematics',
      school:   'Indian Institute of Technology (IIT), Bombay',
      period:   '2022–24',
      score:    'CGPA: 6.07',
      courses:  [
        'Linear Algebra',
        'Basic Algebra',
        'Algebra-I',
        'Optimization',
        'Introduction to Fourier Analysis',
      ],
    },
    {
      degree:   'B.Sc. Mathematics',
      school:   'Indira Gandhi University, Rewari',
      period:   '2018–21',
      score:    '69.84%',
      courses:  [],
    },
  ],

  // ── Research Experience ────────────────────────────────────
  research: [
    {
      title:   'Analysis of CRYSTALS-Dilithium, qTESLA and FALCON',
      guides:  [
        { name: 'Dr. Sartaj Ul Hasan', url: 'https://sites.google.com/site/sartajulhasan/' },
        { name: 'Dr. Sumit Kumar Pandey', url: 'https://iitjammu.ac.in/computer_science_engineering/faculty-list/~sumitkpandey' },
      ],
      institution: 'IIT Jammu',
      funding: 'DRDO Funded',
      period:  '2024-25',
      points:  [
        'Reproduced published solutions for specific instances of the LWE challenge and evaluated their solvability under relaxed boundary conditions.',
        'Experimentally validated key-recovery attack on reduced-parameter variants of FALCON and Module-FALCON.',
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      title: 'AI-assisted Quantum Error Correction Simulation',
      tags:  ['Stim', 'PyMatching', 'PyTorch', 'MWPM'],
      points: [
        'Simulated a distance-3 rotated surface code using Stim to model Pauli noise across 3 measurement rounds, simulating a 26-qubit system to generate fault datasets.',
        'Benchmarked neural decoding against MWPM via PyMatching, evaluating logical-error suppression across physical error rates (p ∈ [0.005, 0.020]) and code distances (d = 3, 5, 7).',
        'Trained a PyTorch MLP decoder on 135,000 fault samples achieving 89.82% accuracy and 76.68% F1-score.',
      ],
    },
    {
      title: 'Quantum Data Management',
      tags:  ['SQLite', 'Qiskit', 'Python'],
      points: [
        'Studied why standard DBMS cannot perfectly be used for Quantum Data.',
        'Used SQLite to execute quantum gates, bypassing the 2^n dense vector memory wall for sparse algorithms.',
        'Benchmarked RDBMS-based sparse approach against traditional dense simulator approach (Qiskit).',
      ],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: {
    'Programming Languages': ['Python', 'C', 'SQL'],
    'Python Libraries':      ['SciPy', 'PyTorch', 'Qiskit', 'Stim', 'NumPy', 'Matplotlib', 'Pandas'],
  },

  // ── Seminars & Workshops ───────────────────────────────────
  seminars: [
    {
      name:  'ISEA Webinar',
      place: 'ISI Kolkata',
      org:   'Ministry of Electronics and Information Technology',
    },
    {
      name:  'Topics in Advanced Areas of Cryptology (TAAC)',
      place: 'ISI Kolkata',
      org:   'DRDO',
    },
    {
      name:  'Theory Day',
      place: 'Arvind Raghunathan Center for Theoretical Computer Science',
      org:   'IIT Madras',
    },
    {
      name:  'National Symposium on Quantum Information and Foundations',
      place: 'ISI Kolkata',
      org:   'PAMU, ISI',
    },
  ],

}; // end RESUME
