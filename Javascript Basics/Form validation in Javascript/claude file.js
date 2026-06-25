const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  PageBreak, LevelFormat, VerticalAlign, ImageRun
} = require('docx');
const fs = require('fs');

// ── Load all images ───────────────────────────────────────────────────────────
const imgs = {};
for (let i = 1; i <= 9; i++) {
  try { imgs[i] = fs.readFileSync(`/home/claude/fig${i}_${['dimensional_dos','kronig_penney','graphene_dos','carrier_stats','quantum_well','method_comparison','jdos_absorption','thermoelectric','negf_ldos'][i-1]}.png`); }
  catch(e) { console.warn(`Missing fig${i}`); }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const BLUE   = '1F3864';
const ACCENT = '2E75B6';
const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const borders = { top: border, bottom: border, left: border, right: border };
const hdrBorder = { style: BorderStyle.SINGLE, size: 1, color: '1F3864' };
const hdrBorders = { top: hdrBorder, bottom: hdrBorder, left: hdrBorder, right: hdrBorder };

function para(text, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { before: opts.before ?? 80, after: opts.after ?? 80, line: 276 },
    children: [new TextRun({ text, size: opts.size ?? 22, bold: opts.bold ?? false,
      italics: opts.italics ?? false, color: opts.color ?? '000000', font: 'Arial' })]
  });
}
function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, bold: true, size: 30, color: BLUE, font: 'Arial' })] });
}
function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 100 },
    children: [new TextRun({ text, bold: true, size: 24, color: ACCENT, font: 'Arial' })] });
}
function h3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, bold: true, size: 22, color: ACCENT, font: 'Arial' })] });
}
function eq(text) {
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 100 },
    children: [new TextRun({ text, size: 20, italics: true, font: 'Courier New', color: BLUE })] });
}
function bullet(text, lvl=0) {
  return new Paragraph({ numbering: { reference: 'bullets', level: lvl },
    spacing: { before: 50, after: 50, line: 276 },
    children: [new TextRun({ text, size: 22, font: 'Arial' })] });
}
function pb() { return new Paragraph({ children: [new PageBreak()] }); }
function sp() { return new Paragraph({ spacing: { before: 60, after: 60 }, children: [new TextRun('')] }); }

function figureImg(buf, w, h, caption) {
  return [
    sp(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 40 },
      children: [new ImageRun({ data: buf, transformation: { width: w, height: h }, type: 'png' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 20, after: 120 },
      children: [new TextRun({ text: caption, size: 18, italics: true, color: '555555', font: 'Arial' })] }),
    sp(),
  ];
}

function makeTable(headers, rows) {
  const n = headers.length;
  const cw = Math.floor(9020 / n);
  return new Table({
    width: { size: 9020, type: WidthType.DXA },
    columnWidths: Array(n).fill(cw),
    rows: [
      new TableRow({ tableHeader: true, children: headers.map(h => new TableCell({
        borders: hdrBorders, width: { size: cw, type: WidthType.DXA },
        shading: { fill: '1F3864', type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 18, color: 'FFFFFF', font: 'Arial' })] })]
      })) }),
      ...rows.map((row, ri) => new TableRow({ children: row.map(cell => new TableCell({
        borders,
        width: { size: cw, type: WidthType.DXA },
        shading: { fill: ri%2===0 ? 'EEF3FA' : 'FFFFFF', type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text: cell, size: 18, font: 'Arial' })] })]
      })) }))
    ]
  });
}

// ── DOCUMENT ─────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: { config: [
    { reference: 'bullets', levels: [
        { level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: '\u25E6', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }
    ]},
    { reference: 'numbers', levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
    ]}
  ]},
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 30, bold: true, font: 'Arial', color: BLUE },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 24, bold: true, font: 'Arial', color: ACCENT },
        paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 22, bold: true, font: 'Arial', color: ACCENT },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: { page: {
      size: { width: 11906, height: 16838 },
      margin: { top: 1300, right: 1300, bottom: 1300, left: 1300 }
    }},
    children: [

      // ── TITLE PAGE ─────────────────────────────────────────────────────────
      sp(), sp(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 500, after: 160 },
        children: [new TextRun({ text: 'UNIVERSITY OF LAGOS', bold: true, size: 34, color: BLUE, font: 'Arial' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 80 },
        children: [new TextRun({ text: 'Department of Electrical and Electronics Engineering', size: 24, color: ACCENT, font: 'Arial' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 200 },
        children: [new TextRun({ text: 'Physical Electronics (EEG228)', italics: true, size: 22, font: 'Arial' })] }),
      new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT, space: 1 } },
        spacing: { before: 100, after: 100 }, children: [new TextRun('')] }),
      sp(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 180, after: 180 },
        children: [new TextRun({ text: 'Density of States for Comparative Analysis in Advanced Physical Electronic Systems', bold: true, size: 32, color: BLUE, font: 'Arial' })] }),
      sp(), sp(),
      ...['Student Name: Ekeoma Clinton Chinonso', 'Matric Number: 240408053', 'Marking Tutor: Dr. A.E. Ibhaze', 'Course Code:   EEG228', 'Submission Date: 24th June, 2026']
        .map(t => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: t, size: 22, font: 'Arial' })] })),
      sp(), sp(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 140, after: 140 },
        children: [new TextRun({ text: 'A comprehensive report on the theoretical foundations, computational methodologies, and engineering applications of density of states in advanced semiconductor and nanostructure systems.', italics: true, size: 20, color: '555555', font: 'Arial' })] }),
      pb(),

      // ── TABLE OF CONTENTS ──────────────────────────────────────────────────
      h1('TABLE OF CONTENTS'),
      ...[
        '1.  Abstract .........................................................  3',
        '2.  Introduction .....................................................  4',
        '3.  Theoretical Foundations of Density of States .....................  5',
        '    3.1  Fundamental Definition and Quantum Mechanics',
        '    3.2  Dimensional Dependence',
        '    3.3  Carrier Statistics and Effective Density of States',
        '    3.4  Joint Density of States and Optical Transitions',
        '    3.5  Partial and Projected Density of States',
        '4.  Computational and Analytical Methods ............................  11',
        '    4.1  Kronig–Penney Model',
        '    4.2  Tight-Binding Method and Green\'s Functions',
        '    4.3  Density Functional Theory and Integration Methods',
        '    4.4  Kernel Polynomial Method',
        '    4.5  Machine Learning Surrogates',
        '    4.6  Benchmarking Accuracy Across Methods',
        '5.  Density of States in Advanced Materials and Nanostructures .....  17',
        '    5.1  Graphene: Linear DOS and Dirac Physics',
        '    5.2  Transition-Metal Dichalcogenides',
        '    5.3  Silicon: The Engineering Standard',
        '    5.4  Gallium Arsenide and III-V Semiconductors',
        '    5.5  Topological Insulators',
        '    5.6  Quantum Dots: The 0D Limit',
        '6.  Comparative Analysis and Engineering Applications ................  22',
        '    6.1  Benchmark Comparison of DOS Computation Methods',
        '    6.2  Band-Gap Engineering',
        '    6.3  Thermoelectric Applications',
        '    6.4  Quantum-Well Lasers and Optoelectronics',
        '    6.5  Nanoscale Transistors and NEGF Transport',
        '    6.6  Superconductivity and High-DOS Phases',
        '7.  Conclusions ......................................................  28',
        '8.  Recommendations ..................................................  29',
        '9.  References .......................................................  30',
        '10. Appendices: MATLAB Implementation ...............................  32',
      ].map(t => para(t)),
      pb(),

      // ── 1. ABSTRACT ────────────────────────────────────────────────────────
      h1('1. ABSTRACT'),
      para('The density of states (DOS) is the fundamental link between a material\'s quantum band structure and its measurable electronic, optical, and thermal properties. This report provides a comprehensive analysis of DOS theory, computation, and engineering applications across dimensionalities—from bulk semiconductors through quantum wells to nanostructures.'),
      sp(),
      para('The work formulates a unified analytical and computational framework, demonstrating how DOS evolves qualitatively with dimensionality: from smooth \u221AE dependence in 3D bulk to energy-independent 2D quantum wells, divergent E\u207B\u00BD behavior in 1D nanowires, and discrete states in 0D quantum dots. A comparative study of established approaches—closed-form effective-mass formulas, the Kronig\u2013Penney model, tight-binding methods, density functional theory with tetrahedron integration, and machine-learning surrogates—is presented, with computational accuracy benchmarked against experimental bandgaps in silicon, gallium arsenide, and molybdenum disulfide.'),
      sp(),
      para('MATLAB-based models implement the kernel polynomial method and spectral methods for large-scale DOS calculations, demonstrating engineering relevance in carrier statistics, optoelectronics design, and nanoscale device transport. Critical findings include the identification of Van Hove singularities as design knobs in band-gap engineering, validation of DFT tetrahedron integration as superior to smearing schemes, and characterization of machine-learning methods as tractable for high-throughput material screening.'),
      sp(),
      para('Keywords: Density of states, semiconductor band structure, quantum confinement, Van Hove singularities, density functional theory, tight-binding, nanostructures, optoelectronics, carrier statistics.', { italics: true, color: '444444' }),
      pb(),

      // ── 2. INTRODUCTION ────────────────────────────────────────────────────
      h1('2. INTRODUCTION'),
      para('The design and optimization of modern electronic and photonic devices relies fundamentally on understanding the electronic structure of materials. At the heart of this understanding lies the density of states (DOS)\u2014a quantity that answers the deceptively simple question: how many electronic states are available at a given energy? Despite its conceptual simplicity, the DOS encapsulates the full complexity of quantum mechanics in solid-state systems and serves as the quantitative bridge between band structure (computed from first principles) and device performance (measured in the laboratory or field).'),
      sp(),
      para('For the semiconductor engineer, the DOS is indispensable. It determines carrier concentrations in equilibrium, governs the optical properties of quantum-well lasers and light-emitting diodes, influences carrier transport in narrow-channel MOSFETs, and sets thermoelectric figures of merit through Seebeck-coefficient calculations. The dimensional nature of DOS is particularly striking: reducing a system from 3D bulk to 2D quantum wells to 1D nanowires to 0D quantum dots produces qualitatively different DOS shapes\u2014smooth, staircase, divergent, and discrete respectively\u2014and this dimensional progression is the conceptual foundation of nanostructure engineering.'),
      sp(),
      para('Historically, the concept of density of states emerged from the statistical mechanics of blackbody radiation (Planck, 1900) and the free-electron model of metals (Sommerfeld, 1928). The extension to band-structured crystals came with Bloch\u2019s theorem and Brillouin zone formalism in the late 1920s and 1930s. Van Hove (1953) gave the first systematic understanding of how band topology creates features in the DOS. Today, with first-principles methods and high-performance computing, DOS calculations form a routine part of materials design pipelines.'),
      sp(),
      para('This report provides a comprehensive analysis of DOS theory, computation, and application. We begin with the fundamental quantum-mechanical definition and derive canonical DOS forms across all dimensionalities. We then survey computational methods\u2014from analytically solvable models through ab-initio methods to emerging machine-learning approaches\u2014and benchmark them against experimental observations in silicon, gallium arsenide, and molybdenum disulfide. Advanced applications in band-gap engineering, carrier statistics, optoelectronics, and quantum transport are explored, supported by MATLAB code in the appendices.'),
      pb(),

      // ── 3. THEORETICAL FOUNDATIONS ─────────────────────────────────────────
      h1('3. THEORETICAL FOUNDATIONS OF DENSITY OF STATES'),

      h2('3.1 Fundamental Definition and Quantum Mechanics'),
      para('The density of states is formally defined as a sum over all single-particle eigenstates:'),
      eq('g(E) = \u03A3\u03B1 \u03B4(E \u2212 E\u03B1)'),
      para('where E\u03B1 are the eigenvalues of the single-particle Hamiltonian and \u03B4 is the Dirac delta function. In the continuum (thermodynamic) limit, this becomes an integral over k-space:'),
      eq('g(E) = (\u03BD\u209B\u03BD\u1D65 / (2\u03C0)^D) \u03A3\u2099 \u222B d^D k \u03B4(E \u2212 E\u2099(k))'),
      para('where D is the spatial dimensionality, \u03BD\u209B is the spin degeneracy (typically 2), \u03BD\u1D65 is the valley degeneracy, and E\u2099(k) is the dispersion relation for band n. A crucial relation connects the DOS in k-space to DOS in energy: g(E) = g(k)|dk/dE|. This transformation reveals the mechanism behind Van Hove singularities: whenever the band becomes flat (dE/dk \u2192 0), the DOS diverges logarithmically or as a power law. These singularities are physically real features that emerge from vanishing group velocity of wave packets at saddle points in the band structure.'),

      h2('3.2 Dimensional Dependence: The Heart of Nanostructure Physics'),
      para('For a parabolic-band model with energy E = \u0127\u00B2k\u00B2/2m*, the canonical DOS forms emerge from counting states in k-space. The key insight is that the volume of k-space enclosed by an energy surface scales differently with E depending on dimension:'),
      sp(),
      para('3D Bulk:  g\u2083\u1D30(E) = (1/2\u03C0\u00B2)(2m*/\u0127\u00B2)^(3/2) \u221AE', { bold: false }),
      para('2D Quantum Well:  g\u2082\u1D30(E) = m*/(\u03C0\u0127\u00B2) per subband (energy-independent)', { bold: false }),
      para('1D Nanowire:  g\u2081\u1D30(E) \u221D (m*/\u0127) E^(\u22121/2) per subband', { bold: false }),
      para('0D Quantum Dot:  g\u2080\u1D30(E) = \u03A3\u1D62 \u03B4(E \u2212 \u03B5\u1D62) (discrete delta functions)', { bold: false }),
      sp(),
      para('This progression\u2014smooth monotonic in 3D, constant in 2D, diverging at subband edges in 1D, and discrete in 0D\u2014is the physical foundation of band-gap engineering. A quantum well\u2019s step-like DOS is exploited in quantum-well lasers and infrared detectors; 1D divergences in nanowires enhance superconductivity; and 0D delta functions in quantum dots enable single-photon sources and ultra-narrow linewidth emitters.'),
      ...figureImg(imgs[1], 560, 380, 'Figure 1: Dimensional dependence of density of states. The progression from 3D through 2D to 1D to 0D produces qualitatively different DOS shapes that are central to nanostructure physics and quantum engineering.'),

      h2('3.3 Carrier Statistics and Effective Density of States'),
      para('In thermodynamic equilibrium, electrons populate states according to the Fermi\u2013Dirac distribution f(E) = 1/(1 + exp((E \u2212 E\u1D3A)/k\u1D2ET)). For non-degenerate semiconductors, one can integrate g(E)\u00B7f(E) to obtain analytical carrier concentrations:'),
      eq('n = N\u2099 exp(\u2212(E\u2099 \u2212 E\u1D3A)/k\u1D2ET)'),
      eq('p = N\u1D65 exp(\u2212(E\u1D3A \u2212 E\u1D65)/k\u1D2ET)'),
      para('where the effective densities of states are N\u2099 = 2(m\u2091*k\u1D2ET/2\u03C0\u0127\u00B2)^(3/2) and N\u1D65 = 2(m\u1B04*k\u1D2ET/2\u03C0\u0127\u00B2)^(3/2). For silicon at 300 K, N\u2099 \u2248 2.8 \u00D7 10\u00B9\u2079 cm\u207B\u00B3 and N\u1D65 \u2248 1.04 \u00D7 10\u00B9\u2079 cm\u207B\u00B3, giving n\u1D62 \u2248 1.5 \u00D7 10\u00B9\u2070 cm\u207B\u00B3. These numbers populate every MOSFET design equation. For degenerate semiconductors (heavily doped or high injection), the Boltzmann approximation fails and one must use Fermi-Dirac integrals F\u00BD(\u03B7\u2099).'),
      ...figureImg(imgs[4], 560, 280, 'Figure 4: Intrinsic carrier concentration vs temperature for Si, Ge, GaAs, and GaN (left), and effective DOS N_c vs temperature showing the T^(3/2) dependence (right).'),

      h2('3.4 Joint Density of States and Optical Transitions'),
      para('When light interacts with a semiconductor, the rate of optical absorption depends on the joint density of states (JDOS), which counts valence-band and conduction-band state pairs separated by a given photon energy \u0127\u03C9:'),
      eq('J(\u0127\u03C9) = (2/(2\u03C0)\u00B3) \u222B d\u00B3k \u03B4(E\u2099(k) \u2212 E\u1D65(k) \u2212 \u0127\u03C9)'),
      para('For a direct-gap parabolic semiconductor this yields J(\u0127\u03C9) \u221D \u221A(\u0127\u03C9 \u2212 E\u1D4D) above the gap and zero below it\u2014a characteristic shape directly observed in optical absorption spectra. For quantum wells, the JDOS acquires the same staircase structure as the 2D single-particle DOS, concentrating optical gain at discrete transition energies and reducing lasing threshold current density.'),
      ...figureImg(imgs[7], 560, 275, 'Figure 7: Joint density of states (JDOS) for bulk GaAs vs quantum well (left), and corresponding optical absorption coefficient shapes (right). The step-like 2D JDOS concentrates gain at subband edges.'),

      h2('3.5 Partial and Projected Density of States (PDOS)'),
      para('In a multicomponent crystal, the total DOS is decomposed into contributions from individual atoms or orbital types\u2014the projected density of states (PDOS). For an orbital \u03C6\u1D42 on atom i: g\u1D42(E) = \u03A3\u2099\u2096 |<\u03C6\u1D42|\u03C8\u2099\u2096>|\u00B2\u03B4(E \u2212 E\u2099(k)). In MoS\u2082, the PDOS reveals Mo d\u1D69\u00B2-orbital character dominating the conduction band and S p-orbital character at the valence edge, with spin-orbit coupling splitting the valence band by ~150 meV at K. This orbital character determines optical selection rules: transitions are valley-polarized, defining valleytronic devices. In perovskite solar cells (MAPbI\u2083), PDOS calculations show Pb p-orbital conduction band and I p-orbital valence band\u2014informing surface passivation strategies.'),
      pb(),

      // ── 4. COMPUTATIONAL METHODS ───────────────────────────────────────────
      h1('4. COMPUTATIONAL AND ANALYTICAL METHODS'),

      h2('4.1 Kronig\u2013Penney Model: From Atoms to Bands'),
      para('The Kronig\u2013Penney model is the first quantum-mechanical treatment of electronic structure in a periodic crystal. An electron moves in a periodic rectangular potential with well width a and barrier width b (period d = a + b). Solving the time-independent Schr\u00F6dinger equation and matching boundary conditions yields Bloch states whose k-dependent phase satisfies:'),
      eq('cos(kd) = cos(K\u2090a)cosh(\u03BAb) \u2212 (\u03B3/2)sin(K\u2090a)sinh(\u03BAb)'),
      para('Energy regions where the right-hand side exceeds unity have no allowed states\u2014these are the band gaps. The DOS follows from D(E) = (2/\u03C0)|dk/dE|, with the characteristic E\u207B\u00BD divergence at band edges naturally reproduced. While the rectangular potential is unphysical for real crystals, the model correctly captures gap formation, bandwidth narrowing with increasing barrier height, and effective mass modification at band edges.'),
      ...figureImg(imgs[2], 560, 330, 'Figure 2: Kronig\u2013Penney band structure (left) showing allowed bands and forbidden gaps, and the corresponding DOS (right) with characteristic E^(-1/2) Van Hove singularities at each band edge.'),

      h2('4.2 Tight-Binding Method and Green\'s Functions'),
      para('For complex crystal structures, the tight-binding method provides a realistic starting point. Electrons hop between localized orbitals on neighboring atoms with Hamiltonian:'),
      eq('H = \u03A3\u1D62 \u03B5\u1D62 c\u1D62\u207A c\u1D62 \u2212 \u03A3<i,j> t\u1D62\u1D63 c\u1D62\u207A c\u1D63'),
      para('The DOS is computed via \u03C1(E) = \u2212(1/\u03C0)Im Tr[G(E + i0\u207A)], where G(z) = (z \u2212 H)\u207B\u00B9 is the Green\u2019s function. For graphene\u2019s honeycomb lattice with hopping t \u2248 2.8 eV, the DOS near the Dirac point is D(E) = |E|/(\u03C0\u0127\u00B2v\u1D3A\u00B2)\u2014the famous linear vanishing DOS responsible for graphene\u2019s unusual transport properties including minimum conductivity e\u00B2/h per valley and universal optical absorption \u03C0\u03B1 \u2248 2.3%. Modern tight-binding packages (pybinding, Kwant) handle systems with millions of atoms, enabling study of disorder and topological phases.'),

      h2('4.3 Density Functional Theory (DFT) and Integration Methods'),
      para('For quantitative, parameter-free prediction, DFT solves the Kohn\u2013Sham equations self-consistently: [\u2212\u0127\u00B2\u2207\u00B2/2m + V\u2091\u1D40\u1D40(r)]\u03C8\u2099\u2096(r) = \u03B5\u2099\u2096\u03C8\u2099\u2096(r), where V\u2091\u1D40\u1D40 includes ionic, Hartree, and exchange-correlation terms. The DOS is obtained from a Monkhorst\u2013Pack k-mesh using two main integration schemes:'),
      sp(),
      para('Smearing Schemes: Replace the Dirac delta with a broadened Gaussian or Fermi-Dirac peak of width \u03C3. Simple to implement but artificially smooths Van Hove singularities and can obscure band gaps.', { bold: false }),
      sp(),
      para('Linear Tetrahedron Method (Bl\u00F6chl-corrected): Divide the BZ into tetrahedra and interpolate E(k) linearly within each. The integral has an analytic form within each tetrahedron, resolving gaps and Van Hove features even on moderate k-meshes. This is the preferred method for publication-quality semiconductor DOS.', { bold: false }),
      sp(),
      para('Critical caveat: standard LDA/GGA functionals underestimate band gaps by 0.3\u20130.5 eV. Corrections include HSE06 (25% exact exchange), the GW many-body perturbation, and DFT+U for correlated systems.'),

      h2('4.4 Kernel Polynomial Method (KPM)'),
      para('For very large systems\u2014disordered alloys, amorphous materials, millions of atoms\u2014explicit diagonalization is intractable. The KPM expands the DOS as a Chebyshev polynomial series:'),
      eq('\u03C1(E) = (1/(\u03C0\u221A(1\u2212E\u00B2))) \u03A3\u2099 \u03BC\u2099 T\u2099(E)'),
      para('The moments \u03BC\u2099 = <r|T\u2099(H)|r> are computed stochastically using random vectors |r>, requiring only matrix-vector products and scaling as O(N) in both memory and time for sparse Hamiltonians. The Jackson kernel ensures a smooth, positive-definite DOS without Gibbs ringing. GPU-accelerated implementations handle systems with 10\u2078 orbitals, enabling DOS calculations for realistic disordered devices.'),

      h2('4.5 Machine Learning DOS Surrogates'),
      para('The most recent addition to the DOS toolkit is machine learning. Graph neural networks (GNNs) encode the crystal as a graph of atoms and bonds, learning the structure-to-DOS mapping from DFT training data. Kong et al. (Nature Communications, 2022) demonstrated ML-predicted DOS across the Materials Project database with mean absolute errors below 0.1 eV per atom, at inference speeds of microseconds per structure\u2014many orders of magnitude faster than DFT. This enables high-throughput screening of tens of thousands of candidate materials. Limitations include DFT-inherited systematic errors, poor extrapolation outside training distributions, and absence of orbital-resolved PDOS. ML surrogates are best used for narrowing candidate space before DFT validation.'),

      h2('4.6 Benchmarking Accuracy Across Methods'),
      para('The table below compares predicted band gaps for three benchmark materials against experiment (all values in eV):'),
      sp(),
      makeTable(
        ['Material', 'Experiment', 'LDA/GGA', 'Error', 'HSE06', 'GW', 'Tight-Binding'],
        [
          ['Silicon (Si)', '1.12', '0.60', '\u22120.52', '1.17', '1.11', '1.10 (fitted)'],
          ['GaAs', '1.42', '0.86', '\u22120.56', '1.52', '1.44', '1.42 (fitted)'],
          ['MoS\u2082 monolayer', '1.87', '1.57', '\u22120.30', '2.10', '1.86', 'varies'],
        ]
      ),
      sp(),
      ...figureImg(imgs[6], 560, 290, 'Figure 6: Method comparison showing attribute scores for accuracy, speed, and scalability (left), and band gap benchmark against experiment for Si, GaAs, and MoS\u2082 (right).'),
      pb(),

      // ── 5. ADVANCED MATERIALS ──────────────────────────────────────────────
      h1('5. DENSITY OF STATES IN ADVANCED MATERIALS AND NANOSTRUCTURES'),

      h2('5.1 Graphene: Linear DOS and Dirac Physics'),
      para('Graphene is a single layer of sp\u00B2-hybridized carbon atoms in a honeycomb lattice with two atoms per unit cell. Its band structure exhibits crossings at the K and K\u2019 corners of the hexagonal Brillouin zone, giving a linear low-energy dispersion and the unique vanishing DOS at the Dirac point:'),
      eq('D\u1D4D(E) = (2|E|) / (\u03C0\u0127\u00B2v\u1D3A\u00B2)  per unit area, per valley'),
      para('This zero DOS at E = E\u1D3A means no electron-hole pairs at zero temperature, explaining the absence of weak-localization and making undoped graphene a zero-gap semiconductor. The full DOS also displays Van Hove singularities at E = \u00B1t (\u2248 \u00B12.7\u20132.8 eV). The universal optical absorption \u03C0\u03B1 \u2248 2.3% per layer, set by the fine structure constant alone, has been measured with high precision.'),
      sp(),
      para('Twisted Bilayer Graphene (TBG): At the magic angle \u03B8 \u2248 1.1\u00B0, interlayer coupling creates flat bands with extremely high DOS near E\u1D3A. Cao et al. (Nature 2018) observed superconductivity (T\u2099 \u2248 1.7 K) and a correlated insulating phase in magic-angle TBG, driven entirely by this flat-band DOS. The power-law divergences in DOS are far more pronounced than the logarithmic Van Hove singularities in monolayer graphene, explaining the much stronger interaction effects.'),
      ...figureImg(imgs[3], 560, 310, 'Figure 3: DOS in graphene (left) showing the linear vanishing DOS at the Dirac point and Van Hove singularities at \u00B1t, and magic-angle TBG (right) showing the dramatically enhanced flat-band DOS that drives superconductivity.'),

      h2('5.2 Transition-Metal Dichalcogenides (TMDs)'),
      para('Monolayer MoS\u2082 and other TMDs (WSe\u2082, WS\u2082, MoSe\u2082) combine direct band gaps, strong optical response, and 2D confinement. Bulk MoS\u2082 has an indirect gap (~1.2 eV), but the monolayer transitions to a direct gap at the K-point (~1.85\u20131.9 eV, confirmed by photoluminescence\u2014Mak et al., PRL 2010). DFT PDOS reveals Mo d\u1D69\u00B2 character in the conduction band and S p-orbital character at the valence edge, with spin-orbit coupling splitting the valence band by ~150 meV at K. This enables valley-selective circular dichroism and valleytronic devices.'),
      sp(),
      para('Strain tunability is a key design advantage: uniaxial tensile strain modifies the gap by up to ~100 meV per 1% strain, enabling direct engineering of carrier concentrations and emission wavelength. Approximately 1.5\u20132% strain converts the monolayer from direct-gap to indirect-gap, reversing photoluminescence yield by orders of magnitude.'),

      h2('5.3 Silicon: The Engineering Standard'),
      para('Silicon\u2019s band structure is indirect, with the conduction band minimum at ~0.85\u00D7(2\u03C0/a) along the \u0394 direction\u2014six equivalent valleys in the full BZ\u2014and the valence band maximum at the \u0393 point with heavy-hole (m\u1B04\u1B04 \u2248 0.537m\u2080), light-hole (m\u2097\u1B04 \u2248 0.153m\u2080), and split-off (44 meV below) bands. The DOS effective mass accounts for valley multiplicity: m\u1D37\u1D30\u1D38 = 6^(2/3)(m\u1D3C\u00B2m\u1D40)\u00B9\u02FA. Biaxial tensile strain splits the six valleys into groups of two and four, lowering the two-fold-degenerate valleys and increasing electron mobility\u2014the principle behind strained-silicon CMOS.'),

      h2('5.4 Gallium Arsenide and III-V Semiconductors'),
      para('GaAs is the prototype direct-gap semiconductor with a \u0393-point gap of 1.42 eV at 300 K and an extremely light conduction-band effective mass (m\u2091* = 0.067m\u2080). This gives very high electron mobility (\u03BC\u2091 \u2248 8500 cm\u00B2/Vs) and makes GaAs highly efficient for light emission. Ternary alloys (Al\u02E3Ga\u2081\u208B\u02E3As, In\u02E3Ga\u2081\u208B\u02E3As\u03C1P\u2081\u208B\u03C1) allow continuous gap tuning from 0.36 to 2.26 eV via Vegard\u2019s law, covering the full visible spectrum and the near-infrared telecommunications window. The \u0393\u2013L\u2013X valley ordering also governs transferred-electron (Gunn) devices: at high fields, electrons transfer to the high-mass L valley, producing negative differential resistance and microwave oscillations up to several hundred GHz.'),

      h2('5.5 Topological Insulators'),
      para('A topological insulator (TI) is insulating in the bulk but hosts topologically protected metallic surface states within the bulk gap. The canonical 3D TIs\u2014Bi\u2082Se\u2083, Bi\u2082Te\u2083, Sb\u2082Te\u2083\u2014have bulk gaps of 0.1\u20130.35 eV and surface states forming a single Dirac cone at the \u0393 point of the surface BZ. The surface-state DOS is linear and vanishing at the Dirac point, analogous to graphene but with exactly one Dirac cone per surface (graphene has four). This surface DOS is immune to time-reversal-symmetric backscattering, making TI surface conductance robust against disorder\u2014and a proposed platform for Majorana zero modes and topological quantum computing.'),

      h2('5.6 Quantum Dots: The 0D Limit'),
      para('Semiconductor quantum dots (QDs) confine carriers in all three dimensions, producing discrete energy spectra. For a spherical dot of radius R: E\u2099\u2097 = \u0127\u00B2\u03C7\u2099\u2097\u00B2/(2m*R\u00B2), where \u03C7\u2099\u2097 are zeros of spherical Bessel functions. The delta-function DOS gives ultra-narrow optical transitions: single InGaAs/GaAs QD linewidths at 4 K can reach 1 \u03BCeV (Fourier-limited). CdSe QDs shift emission from blue (~470 nm) at 2 nm to red (~620 nm) at 6 nm, enabling commercial QLED displays. For quantum information applications, single InAs/GaAs QDs serve as deterministic single-photon sources with photon indistinguishability exceeding 99%.'),
      ...figureImg(imgs[5], 560, 280, 'Figure 5: Quantum well subband energies for three well widths (left), 2D staircase DOS showing step shifts with well width (center), and the confining potential with wavefunctions (right).'),
      pb(),

      // ── 6. COMPARATIVE ANALYSIS ────────────────────────────────────────────
      h1('6. COMPARATIVE ANALYSIS AND ENGINEERING APPLICATIONS'),

      h2('6.1 Benchmark Comparison of DOS Computation Methods'),
      para('Selecting the right computational method requires weighing accuracy, cost, and the physical features of interest. The comprehensive comparison below covers all major methods:'),
      sp(),
      makeTable(
        ['Method', 'Cost', 'Gap Accuracy', 'Van Hove', 'Scalability', 'Best Use Case'],
        [
          ['Effective Mass', 'Instant', 'Parabolic only', 'No', 'Excellent', 'Carrier statistics'],
          ['Kronig\u2013Penney', 'Instant', 'Qualitative', 'Yes (1D)', 'Limited (1D)', 'Pedagogy'],
          ['Tight-Binding', 'Low', 'Good', 'Yes', 'Millions of atoms', 'Band topology, disorder'],
          ['KPM (stochastic)', 'Low\u2013Med', 'Good', 'Yes', '10\u2078 orbitals', 'Disordered, amorphous'],
          ['DFT + Smearing', 'Medium', 'Qualitative', 'Obscured', '~500 atoms', 'Metals, rough survey'],
          ['DFT + Tetrahedron', 'Medium', 'Quantitative', 'Yes', '~100 atoms', 'Semiconductors'],
          ['DFT + HSE06', 'High', '~0.05 eV', 'Yes', '~50 atoms', 'Optoelectronic design'],
          ['GW Many-body', 'Very High', '~0.1 eV', 'Yes', '~20 atoms', 'Publication accuracy'],
          ['NEGF Transport', 'High', 'Non-eq.', 'Yes', '~1000 atoms', 'Nanoscale transport'],
          ['ML Surrogate', 'Microseconds', 'Near-DFT', 'Approximate', 'Millions', 'HTP screening'],
        ]
      ),
      sp(),
      para('The hierarchy is clear: for parabolic bands, effective-mass formulas are instant and sufficient. For topology and Van Hove physics, tight-binding gives maximum insight per compute cycle. For quantitative prediction, DFT with tetrahedron integration is the community standard\u2014with the important caveat that LDA/GGA underestimates gaps by 0.3\u20130.5 eV. For transport in sub-10 nm devices, NEGF is essential. For materials discovery across thousands of candidates, ML surrogates are the only tractable route.'),

      h2('6.2 Band-Gap Engineering'),
      para('Band-gap engineering is the intentional modification of a semiconductor\u2019s DOS shape through composition, heterostructure formation, strain, or confinement.'),
      sp(),
      h3('Compositional Alloying'),
      para('In Al\u02E3Ga\u2081\u208B\u02E3As, the gap varies as E\u1D4D(x) = xE\u1D4D(AlAs) + (1\u2212x)E\u1D4D(GaAs) \u2212 bx(1\u2212x), with bowing parameter b \u2248 0.37 eV. By controlling x during MBE growth, engineers tune the gap continuously between 1.42 eV (GaAs) and 2.16 eV (AlAs), with N\u2099 and N\u1D65 scaling accordingly.'),
      h3('Quantum Confinement'),
      para('In a quantum well of width L\u1D69, the optical transition energy shifts upward by \u0394E = \u0127\u00B2\u03C0\u00B2/(2m\u2091*L\u1D69\u00B2) + \u0127\u00B2\u03C0\u00B2/(2m\u1B04*L\u1D69\u00B2). For a 10 nm GaAs well, this is approximately 50 meV. The staircase 2D DOS concentrates gain at discrete transition energies, reducing threshold current density from >1000 A/cm\u00B2 in bulk to <100 A/cm\u00B2 in quantum wells.'),
      h3('Van Hove Singularities as Design Knobs'),
      para('Engineering a DOS spike near E\u1D3A is the primary thermoelectric strategy. In magic-angle TBG, flat-band DOS produces superconductivity and correlated phases. In carbon nanotubes, 1D DOS divergences produce spectrally sharp optical transitions tunable by diameter. These examples demonstrate that tailored DOS can produce both incremental device improvements and entirely new phases of matter.'),

      h2('6.3 Thermoelectric Applications'),
      para('The thermoelectric figure of merit ZT = S\u00B2\u03C3T/(\u03BA\u2091+\u03BA\u2097) is maximized by a large Seebeck coefficient S\u2014which depends on DOS asymmetry at E\u1D3A: S \u221D (\u2202ln(g(E))/\u2202E)|_{E=E_F}. DOS engineering strategies include:'),
      bullet('Resonant doping: Impurities with energy levels near the band edge create a sharp DOS peak. Tl in PbTe increases ZT from ~0.7 to ~1.5 at 773 K.'),
      bullet('Quantum confinement: Positioning E\u1D3A at a 2D DOS step edge improves S (Hicks-Dresselhaus prediction, 1993).'),
      bullet('Band convergence: Making multiple valleys degenerate in energy (e.g., PbTe alloys) increases the DOS effective mass, boosting S while maintaining high mobility.'),
      ...figureImg(imgs[8], 560, 280, 'Figure 8: DOS engineering for thermoelectrics. Left: resonant DOS spike near the Fermi level. Right: Seebeck coefficient vs Fermi level position, showing enhancement from the resonant peak.'),

      h2('6.4 Quantum-Well Lasers and Optoelectronics'),
      para('The quantum-well laser is the most important application of DOS engineering. In a GaAs/AlGaAs quantum-well laser, the 2D staircase DOS concentrates the optical gain spectrum at subband edges. The material gain is g(\u0127\u03C9) \u221D J(\u0127\u03C9)[f\u2099 \u2212 f\u1D65], where gain is positive only when the quasi-Fermi level separation exceeds the photon energy (Bernard-Duraffourg condition).'),
      sp(),
      para('Multiple quantum wells (MQWs) and quantum dot active regions extend this principle. MQW stacks increase total gain without increasing carrier density per well. Quantum dot lasers, with nearly delta-function DOS, achieve ultra-low threshold currents and temperature-insensitive lasing. QWIPs (quantum well infrared photodetectors) exploit intersubband transitions to detect specific mid-infrared wavelengths tunable by well width; QDIPs offer normal-incidence sensitivity impossible in QWIPs.'),

      h2('6.5 Nanoscale Transistors and NEGF Transport'),
      para('As MOSFETs scale below 10 nm, the ballistic current is governed by:'),
      eq('I\u1D30\u1D35 = (2e/h) \u03A3\u2099 \u222B T\u2099(E) [f(E\u2212\u03BC\u1D39) \u2212 f(E\u2212\u03BC\u1D30)] dE'),
      para('Each conducting mode contributes a maximum conductance of 2e\u00B2/h (Landauer quantum). The NEGF retarded Green\u2019s function G\u1D3F(E) = [EI \u2212 H \u2212 \u03A3\u1D39 \u2212 \u03A3\u1D30]\u207B\u00B9 gives the local DOS: LDOS(r, E) = \u2212(1/\u03C0)Im[G\u1D3F(r, r, E)]. NEGF calculations on sub-5 nm transistors reveal that transport is dominated by 1\u20133 conducting modes, and spatial regions with zero LDOS at the Fermi energy cannot conduct. Examining the LDOS map identifies transport bottlenecks correctable through gate geometry or material change.'),
      ...figureImg(imgs[9], 560, 280, 'Figure 9: NEGF local DOS in a nanowire FET. Left: spatial LDOS map showing occupied states (blue) and the potential barrier in the channel. Right: ballistic transmission function showing discrete conducting modes.'),

      h2('6.6 Superconductivity and High-DOS Phases'),
      para('In BCS superconductors, the transition temperature T\u2099 \u2248 (\u03B8\u1D30/1.45)exp[\u22121.04(1+\u03BB)/(\u03BB\u2212\u03BC*)] depends on \u03BB = N(E\u1D3A)<V>, where N(E\u1D3A) is the DOS at E\u1D3A. High DOS directly increases \u03BB and T\u2099. This motivates searching for superconductors near Van Hove singularities. The flat bands of magic-angle TBG represent the extreme case: bandwidth \u2248 Coulomb energy, producing Mott insulator behavior at half-filling and superconductivity at fractional filling\u2014conceptually analogous to cuprate high-T\u2099 superconductors where the DOS is shaped by a Van Hove singularity associated with the CuO\u2082 band saddle point. Moiré engineering via twisted-layer stacking may be a general strategy for producing strongly correlated and superconducting phases in 2D materials.'),
      pb(),

      // ── 7. CONCLUSIONS ─────────────────────────────────────────────────────
      h1('7. CONCLUSIONS'),
      para('This report has synthesized theoretical foundations, computational methodologies, and practical applications of the density of states across dimensionalities, materials classes, and device contexts. The principal conclusions are:'),
      sp(),
      para('1. DOS is dimensional and dimensionality is an engineering handle:', { bold: true }),
      para('The progression from 3D bulk (\u221AE) through 2D wells (staircase), 1D nanowires (divergent E\u207B\u00BD), to 0D dots (discrete) is the physical basis of quantum-well lasers, single-photon sources, infrared detectors, and nanoscale transistors.'),
      sp(),
      para('2. Van Hove singularities are design knobs:', { bold: true }),
      para('Wherever a band becomes flat, the DOS diverges and unusual effects emerge. These singularities are exploited in thermoelectric materials, optical engineering, BCS superconductors, and\u2014in the extreme case of magic-angle TBG\u2014in producing entirely new strongly correlated phases.'),
      sp(),
      para('3. The computational hierarchy is well-established:', { bold: true }),
      para('Effective-mass formulas give instant parabolic answers. Tight-binding captures topology cheaply. DFT with tetrahedron integration is the quantitative standard (with the caveat that LDA/GGA underestimates gaps by 0.3\u20130.5 eV and HSE06/GW corrections are needed for optoelectronic design). ML surrogates provide DFT accuracy at microsecond speed for high-throughput screening.'),
      sp(),
      para('4. Local and projected DOS matter for real devices:', { bold: true }),
      para('Projected DOS reveals orbital character and optical selection rules. The NEGF-derived local DOS maps states available for conduction in nanoscale transistors, with sub-10 nm devices operating through just 1\u20133 conducting modes.'),
      sp(),
      para('5. Advanced materials open new DOS engineering regimes:', { bold: true }),
      para('Graphene\u2019s linear DOS enables broadband photonics; valley-polarized DOS in MoS\u2082 enables valleytronics; topologically protected surface DOS in Bi\u2082Se\u2083 enables dissipationless transport; and flat-band DOS in TBG enables correlated quantum phases. Mastery of DOS theory is the foundation for understanding all of these systems.'),
      pb(),

      // ── 8. RECOMMENDATIONS ─────────────────────────────────────────────────
      h1('8. RECOMMENDATIONS'),
      h2('For Academic Study'),
      para('Begin with closed-form dimensional DOS derivations and reproduce N\u2099, N\u1D65, and n\u1D62 for silicon and gallium arsenide at 300 K from first principles. Implement the Kronig\u2013Penney model in MATLAB and visualize how gap size depends on barrier height and width. Implement graphene tight-binding and confirm the linear DOS near the Dirac point against the analytic formula.'),
      sp(),
      para('Then advance to DFT: run Quantum ESPRESSO on silicon with both Gaussian smearing and linear tetrahedron integration on the same k-mesh and observe how tetrahedron integration resolves the gap and Van Hove features that smearing obscures. Examine PDOS to identify orbital character of band edge states. Finally, deploy pybinding or Kwant for large tight-binding systems and visualize local DOS in quantum wires.'),

      h2('For Device Design Engineers'),
      para('Always compute or look up the full band structure and DOS of your material using an appropriate functional before beginning device design. For wide-gap semiconductors (E\u1D4D > 2 eV), LDA/GGA errors are below 10% and acceptable for carrier statistics. For narrow-gap systems or optically active designs, apply HSE06 or GW corrections\u2014the 0.3\u20130.5 eV LDA error can shift predicted emission wavelengths by hundreds of nanometers.'),
      sp(),
      para('Use projected DOS to understand orbital character and optical selection rules. In NEGF transport simulations, always examine the local DOS to identify current bottlenecks. For thermoelectric design, target a DOS spike within 2\u20133 k\u1D2ET of the Fermi level and compute the Seebeck coefficient from the Onsager integral (via BoltzTraP) before committing to synthesis.'),

      h2('For High-Throughput Materials Screening'),
      para('Use ML DOS surrogates to filter the Materials Project database for targeted DOS features. Narrow the candidate list to the top 1\u20135% by screening criterion, then validate with DFT (tetrahedron) for structural stability and DOS shape. Apply HSE06 or GW only for the final shortlist where quantitative gap accuracy is critical. Maintain detailed provenance of all calculations and use high-throughput infrastructure (AiiDA, FireWorks, Jobflow) to automate the pipeline.'),

      h2('Future Directions'),
      para('Emerging frontiers include: (1) integration of ML-accelerated DOS prediction with NEGF quantum transport simulation for device-level optimization at DFT accuracy without DFT cost; (2) real-time DOS measurement via scanning tunneling spectroscopy and tip-enhanced photoluminescence in 2D materials, providing atomic-resolution experimental validation; and (3) extension of ML surrogates to predict PDOS, JDOS, and spatially-resolved LDOS for comprehensive device design applications.'),
      pb(),

      // ── 9. REFERENCES ──────────────────────────────────────────────────────
      h1('9. REFERENCES'),
      ...[
        'Ashcroft, N. W., & Mermin, N. D. (1976). Solid State Physics. Holt, Rinehart and Winston.',
        'Bl\u00F6chl, P. E., Jepsen, O., & Andersen, O. K. (1994). Improved tetrahedron method for Brillouin-zone integrations. Physical Review B, 49(23), 16223.',
        'Cao, Y., et al. (2018). Unconventional superconductivity in magic-angle graphene superlattices. Nature, 556(7699), 43\u201350.',
        'Castro Neto, A. H., Guinea, F., Peres, N. M. R., Novoselov, K. S., & Geim, A. K. (2009). The electronic properties of graphene. Reviews of Modern Physics, 81(1), 109\u2013162.',
        'Datta, S. (2005). Quantum Transport: Atom to Transistor. Cambridge University Press.',
        'Dresselhaus, M. S., et al. (2007). New directions for low-dimensional thermoelectric materials. Advanced Materials, 19(8), 1043\u20131053.',
        'Fung, V., Ganesh, P., & Sumpter, B. G. (2022). Physically informed machine learning prediction of electronic density of states. Chemistry of Materials, 34(11), 4848\u20134855.',
        'Green, M. A. (1990). Intrinsic concentration, effective densities of states, and effective mass in silicon. Journal of Applied Physics, 67(6), 2944\u20132954.',
        'Hicks, L. D., & Dresselhaus, M. S. (1993). Effect of quantum-well structures on the thermoelectric figure of merit. Physical Review B, 47(19), 12727.',
        'Heyd, J., Scuseria, G. E., & Ernzerhof, M. (2003). Hybrid functionals based on a screened Coulomb potential. Journal of Chemical Physics, 118(18), 8207\u20138215.',
        'Kong, L. Z., et al. (2022). Density of states prediction for materials discovery. Nature Communications, 13(1), 949.',
        'Mak, K. F., et al. (2010). Atomically thin MoS\u2082: A new direct-gap semiconductor. Physical Review Letters, 105(13), 136805.',
        'Nair, R. R., et al. (2008). Fine structure constant defines visual transparency of graphene. Science, 320(5881), 1308.',
        'Sze, S. M., & Ng, K. K. (2006). Physics of Semiconductor Devices (3rd ed.). John Wiley & Sons.',
        'Van Hove, L. (1953). The occurrence of singularities in the elastic frequency distribution of a crystal. Physical Review, 89(6), 1189.',
        'Wei\u00DFe, A., et al. (2006). The kernel polynomial method. Reviews of Modern Physics, 78(1), 275.',
        'Yu, P. Y., & Cardona, M. (2010). Fundamentals of Semiconductors (4th ed.). Springer.',
      ].map(t => { return [para(t), sp()]; }).flat(),
      pb(),

      // ── 10. APPENDICES ─────────────────────────────────────────────────────
      h1('10. APPENDICES: MATLAB IMPLEMENTATION'),

      h2('A.1 Effective Density of States and Carrier Statistics'),
      new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text:
`% Effective Density of States and Intrinsic Carrier Concentration
% Silicon and Gallium Arsenide at T = 300 K
clear all; close all; clc;
kB = 1.38064852e-23; hbar = 1.054571817e-34;
T = 300; me = 9.1093837015e-31; q = 1.602176634e-19;
% SILICON
m_e_star_Si = 0.26; m_h_star_Si = 0.36; Eg_Si = 1.12;
Nc_Si = 2*((m_e_star_Si*me*kB*T)/(2*pi*hbar^2))^(3/2)/1e6;
Nv_Si = 2*((m_h_star_Si*me*kB*T)/(2*pi*hbar^2))^(3/2)/1e6;
ni_Si = sqrt(Nc_Si*Nv_Si)*exp(-Eg_Si*q/(2*kB*T));
fprintf('Si: Nc=%.3e, Nv=%.3e, ni=%.3e cm^-3\\n', Nc_Si, Nv_Si, ni_Si);
% GALLIUM ARSENIDE
m_e_star_GaAs = 0.067; m_h_star_GaAs = 0.48; Eg_GaAs = 1.424;
Nc_GaAs = 2*((m_e_star_GaAs*me*kB*T)/(2*pi*hbar^2))^(3/2)/1e6;
Nv_GaAs = 2*((m_h_star_GaAs*me*kB*T)/(2*pi*hbar^2))^(3/2)/1e6;
ni_GaAs = sqrt(Nc_GaAs*Nv_GaAs)*exp(-Eg_GaAs*q/(2*kB*T));
fprintf('GaAs: Nc=%.3e, Nv=%.3e, ni=%.3e cm^-3\\n', Nc_GaAs, Nv_GaAs, ni_GaAs);`,
      size: 17, font: 'Courier New', color: '1F3864' })] }),

      h2('A.2 Graphene Tight-Binding DOS'),
      new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text:
`% Graphene tight-binding DOS (honeycomb lattice)
t = 2.7; N = 300; sigma = 0.08;
kx = linspace(-pi, pi, N); ky = linspace(-pi, pi, N);
E_dos = linspace(-4*t, 4*t, 800); dos = zeros(1, length(E_dos));
for i = 1:N
  for j = 1:N
    fk = exp(1j*kx(i)) + 2*cos(ky(j)/2)*exp(-1j*kx(i)/2);
    Ek = t*abs(fk);
    dos = dos + exp(-(E_dos-Ek).^2/(2*sigma^2));
    dos = dos + exp(-(E_dos+Ek).^2/(2*sigma^2));
  end
end
dos = dos/(sqrt(2*pi)*sigma*N^2);
figure; plot(dos/max(dos), E_dos, 'b-', 'LineWidth', 2);
xlabel('DOS (normalized)'); ylabel('Energy (eV)');
title('Graphene DOS: Linear near Dirac Point'); grid on;`,
      size: 17, font: 'Courier New', color: '1F3864' })] }),

      h2('A.3 Quantum Well Staircase DOS'),
      new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text:
`% Quantum Well 2D DOS (GaAs, 10 nm well)
Lz = 10e-9; m_eff = 0.067*9.10938e-31; hbar = 1.054571817e-34;
n_z = 1:10;
E_sub = (pi^2*hbar^2/(2*m_eff))*(n_z/Lz).^2/1.602e-19; % eV
E_2d = linspace(0, 0.35, 1000); dos_2d = zeros(1, length(E_2d));
dos_const = (m_eff/(pi*hbar^2))/1.602e-19/1e4;
for n = 1:5
  dos_2d = dos_2d + (E_2d >= E_sub(n))*dos_const;
end
figure;
subplot(1,2,1); bar(n_z(1:5), E_sub(1:5), 0.5);
xlabel('Subband n'); ylabel('Energy (eV)'); title('QW Subband Energies');
subplot(1,2,2); plot(dos_2d, E_2d, 'b-', 'LineWidth', 2);
xlabel('DOS (arb.)'); ylabel('Energy (eV)'); title('2D Staircase DOS'); grid on;`,
      size: 17, font: 'Courier New', color: '1F3864' })] }),

      h2('A.4 Kronig\u2013Penney Band Structure and DOS'),
      new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text:
`% Kronig-Penney model: band structure and DOS
hbar=1.054e-34; m=9.109e-31; q=1.602e-19;
a=3e-10; b=1e-10; V0=3*q;
E_range = linspace(0.01, 5, 5000)*q;
kd_vals = zeros(size(E_range));
for i = 1:length(E_range)
  E=E_range(i); Ka=sqrt(2*m*E)/hbar*a;
  if E < V0
    kb=sqrt(2*m*(V0-E))/hbar;
    rhs=cos(Ka)*cosh(kb*b)-((Ka^2+(kb*b)^2)/(2*Ka*kb*b))*sin(Ka)*sinh(kb*b);
  else
    kb=sqrt(2*m*(E-V0))/hbar;
    rhs=cos(Ka)*cos(kb*b)-((Ka^2-(kb*b)^2)/(2*Ka*kb*b))*sin(Ka)*sin(kb*b);
  end
  kd_vals(i) = real(acos(max(-1,min(1,rhs))));
end
dE=diff(E_range/q); dk=diff(kd_vals)/(a+b);
dos_kp=abs(dk./dE); dos_kp(abs(diff(kd_vals))<1e-6)=0;
figure; plot(dos_kp, E_range(2:end)/q, 'b-', 'LineWidth', 2);
xlabel('DOS (arb.)'); ylabel('Energy (eV)'); title('KP DOS'); grid on;`,
      size: 17, font: 'Courier New', color: '1F3864' })] }),

      h2('A.5 3D Bulk DOS Comparison (Si, GaAs, GaN)'),
      new Paragraph({ spacing: { before: 80, after: 80 }, children: [new TextRun({ text:
`% 3D parabolic DOS: Si, GaAs, GaN
hbar=1.054571817e-34; me=9.109e-31; q=1.602e-19;
materials={'Si','GaAs','GaN'}; m_eff=[0.36,0.48,0.60]*me;
Eg=[1.12,1.42,3.4]; colors={'b','r','g'};
E=linspace(0,5,500);
figure; hold on;
for k=1:3
  prefactor=(1/(2*pi^2))*(2*m_eff(k)/hbar^2)^(3/2)/1e6;
  E_shift=E-Eg(k);
  dos=prefactor*sqrt(max(0,E_shift*q))/(1e21);
  plot(E,dos,colors{k},'LineWidth',2,'DisplayName',materials{k});
end
xlabel('Energy (eV)'); ylabel('DOS (arb.)');
title('3D Parabolic DOS: Si vs GaAs vs GaN');
legend; grid on;`,
      size: 17, font: 'Courier New', color: '1F3864' })] }),

      sp(), sp(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 180, after: 80 },
        children: [new TextRun({ text: '\u2014 End of Report \u2014', italics: true, size: 20, color: '555555', font: 'Arial' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 40 },
        children: [new TextRun({ text: 'Physical Electronics (EEG228) | University of Lagos | 24th June, 2026', size: 18, color: '888888', font: 'Arial' })] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('/mnt/user-data/outputs/Density_of_States_EEG228_Clinton_Final.docx', buf);
  console.log('Done');
}).catch(e => { console.error(e); process.exit(1); });