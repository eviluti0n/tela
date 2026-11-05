// The full list of topics, shared by the student dashboard (index.html) and the tutor page (tutor.html).
// SAMPLE_TOPICS rows are [title, category, tier, description, status, grade]; Maths is built from MATHS_BY_GRADE,
// Biology from BIOLOGY_BY_PAPER and Chemistry from CHEMISTRY_BY_PAPER.
const SAMPLE_TOPICS = {
 Physics: [
  ["Energy stores & transfers", "Energy", "Both", "Kinetic, gravitational and elastic energy stores; conservation of energy and efficiency.", "done"],
  ["Specific heat capacity", "Energy", "Both", "Using ΔE = mcΔθ and the required practical.", "doing"],
  ["Circuits & resistance", "Electricity", "Both", "Series and parallel circuits, V = IR, and I–V characteristics.", "doing"],
  ["Mains electricity & power", "Electricity", "Both", "AC vs DC, the plug, P = IV and the National Grid.", "todo"],
  ["Density & changes of state", "Particle Model", "Both", "ρ = m/V, specific latent heat and internal energy.", "todo"],
  ["Radioactive decay", "Atomic Structure", "Both", "Alpha, beta and gamma radiation, half-life and nuclear equations.", "doing"],
  ["Forces & Newton's laws", "Forces", "Both", "Resultant forces, F = ma, stopping distances and momentum.", "todo"],
  ["Wave properties", "Waves", "Both", "Transverse and longitudinal waves, v = fλ and the EM spectrum.", "todo"],
  ["Magnetism & electromagnetism", "Magnetism", "Both", "Magnetic fields, the motor effect and F = BIl.", "todo"]
 ],
 Chemistry: [], // built from CHEMISTRY_BY_PAPER below
 Biology: [],   // built from BIOLOGY_BY_PAPER below
 Maths: []
};

// GCSE Maths topics grouped by grade. Each starts with a code for its area of maths:
// N Number, A Algebra, R Ratio & Proportion, G Geometry & Measures, P Probability, S Statistics.
const MATHS_AREAS = {
  N: "Number", A: "Algebra", R: "Ratio & Proportion",
  G: "Geometry & Measures", P: "Probability", S: "Statistics"
};
const MATHS_BY_GRADE = {
  "Grade 1": [
    "N Addition of integers and decimals", "N Subtraction of integers and decimals",
    "N Multiplication of integers and decimals", "N Division of integers and decimals",
    "N Ordering integers and decimals", "G Reading scales", "N Fractions: writing, simplifying and ordering",
    "N Rounding", "N Place value", "G Time", "A Coordinates", "G Names of polygons", "G Names of angles",
    "S Tally charts", "S Pictograms", "N Negative numbers", "N Powers and roots", "N Factors and multiples", "N BIDMAS"
  ],
  "Grade 2": [
    "N Calculation money problems", "N Fractions of an amount", "N Fractions, decimals and percentages",
    "A Algebra: collecting like terms", "N Estimation", "A Function machines", "G Perimeter and area",
    "P Probability: scales", "S Frequency polygons", "S Averages from lists (mean and median)",
    "S Bar charts", "S Stem and leaf", "S Pie charts", "N Systematic listing strategies"
  ],
  "Grade 3": [
    "N Error intervals", "N Fractions: arithmetic", "R Ratio: as a fraction and simplifying",
    "R Proportion: recipes and ingredients", "R Ratio: sharing", "R Percentages: percentages of amounts",
    "R Percentages: increase/decrease", "R Percentage change", "R Exchange rate", "R Conversions and units",
    "G Scale drawings", "R Best buy questions", "A Number substitution", "A Solving linear equations",
    "A Drawing graphs", "G Area and circumference of circles", "G Area of compound shapes",
    "S Frequency tables", "S Two-way tables", "G Transformations of shapes"
  ],
  "Grade 4": [
    "R Compound interest and depreciation", "N Indices: basics", "N HCF and LCM", "N Prime factor trees",
    "A Real life graphs", "A Distance time graphs", "A Inequalities: representing on a number line",
    "A Inequalities: solving equations", "A Forming and solving equations", "A Sequences: generating",
    "A Sequences: nth term", "A Expanding single and double brackets", "A Factorising",
    "G Angles in parallel lines", "G Angles in polygons", "G Surface area (prisms and cylinders)",
    "G Volume (prisms and cylinders)", "G Loci and construction", "G Bearings", "G Plans and elevations",
    "S Averages: frequency tables (mean and median)", "P Probability basics", "S Scatter graphs", "G Pythagoras"
  ],
  "Grade 5": [
    "R Ratio: writing ratios as fractions", "R Ratio: writing ratios as linear functions",
    "R Reverse percentages", "N Standard form", "R Speed and density", "A Changing the subject of a formula",
    "A Factorising quadratics", "A Solving quadratics", "A Drawing quadratic graphs",
    "A Other graphs: cubic, reciprocal", "A Using graphs to solve equations", "A Simultaneous equations",
    "A Using graphs to solve simultaneous equations", "A Straight line graphs: everything",
    "G Surface area and volume of cone & sphere", "G Sectors: area and arc length",
    "G Similar shapes (lengths)", "G SOHCAHTOA", "G Congruent shapes", "G Exact trig values",
    "P Probability trees", "P Venn diagrams", "G Vectors"
  ],
  "Grade 6": [
    "N Recurring decimals to fractions", "N Product rule for counting", "R Repeated percentage change",
    "N Indices: fractions and negative powers", "A Expanding triple brackets",
    "A Straight line graphs: parallel & perpendicular", "A Straight line graphs: finding areas under graph",
    "A Inequalities on graphs: shading", "G Similar shapes (area and volume)",
    "G Enlargements: negative scale factor", "G Circle theorems", "S Cumulative frequency", "S Box plots",
    "R Ratio: capture recapture"
  ],
  "Grade 7": [
    "P Tree diagrams: conditional probability", "P Probability: conditional probability algebra",
    "P Venn diagrams: \"given that\" questions", "N Surds", "A Factorising harder quadratics",
    "R Direct and inverse proportion", "N Bounds", "A Other graphs: trig and exponential",
    "A Exponential functions and exponential growth", "A Algebraic fractions", "A Re-arranging harder formulae",
    "A Functions: inverse and composite", "A Iteration", "G Sine & cosine rule", "G Area of any triangle",
    "G 3D Pythagoras", "A Rates of change and tangents to curves", "S Histograms"
  ],
  "Grade 8/9": [
    "A Quadratic simultaneous equations", "A Area of shapes with algebra", "G Sine/cosine rule with algebra",
    "R Ratio with algebra", "A Transforming curves", "G Proof: circle theorems, sine & cosine rule",
    "A Completing the square", "A nth term of a quadratic sequence", "A Quadratic inequalities",
    "A Velocity time graphs", "A Equation of a tangent", "G Vector proof questions"
  ]
};
const GRADES = Object.keys(MATHS_BY_GRADE);

// Grades 1–3 sit on Foundation, 4–5 on both tiers, 6 and above on Higher.
const tierForGrade = grade => {
  const n = parseInt(grade.replace("Grade ", ""), 10);
  return n <= 3 ? "Foundation" : n <= 5 ? "Both" : "Higher";
};
SAMPLE_TOPICS.Maths = Object.entries(MATHS_BY_GRADE).flatMap(([grade, entries]) =>
  entries.map(entry => [entry.slice(2), MATHS_AREAS[entry[0]], tierForGrade(grade), "", "todo", grade]));

// GCSE Biology (AQA 8461) topics, by paper and then by topic, each list in the order the spec teaches it
// (4.1 Cell Biology to 4.7 Ecology). "H: " at the start marks extra Higher tier content, and "★ " a required practical.
const BIOLOGY_BY_PAPER = {
  "Paper 1": {
    "Cell Biology": [
      "Prokaryotic vs eukaryotic cells", "Animal and plant cell structures and functions",
      "Differentiation and specialised cells", "Microscopy: magnification and resolution",
      "H: Microscopy calculations using standard form", "★ Using a microscope to observe cells",
      "Mitosis and the cell cycle", "Stem cells: types and uses (embryonic & adult)",
      "Diffusion: factors affecting rate", "Osmosis: definition and examples", "★ Osmosis in plant tissue",
      "Active transport: differences from diffusion"
    ],
    "Organisation": [
      "Cells → tissues → organs → organ systems", "Digestive system: organs and enzymes",
      "Enzyme action: lock and key, temperature, pH", "★ Food tests (Benedict's, Biuret, iodine)",
      "★ Effect of pH on enzyme activity", "Heart structure and the circulatory system",
      "Blood vessels: arteries, veins, capillaries", "Blood: components and functions",
      "Coronary heart disease and treatments", "Health: communicable vs non-communicable disease",
      "Cancer: benign vs malignant tumours", "Plant tissues: leaf structure and transpiration"
    ],
    "Infection and Response": [
      "Pathogens: bacteria, viruses, fungi, protists", "Examples of communicable diseases",
      "Human defence systems: non-specific (skin, mucus, stomach acid)", "The immune response: white blood cells, antibodies",
      "Vaccination and herd immunity", "Antibiotics: how they work and resistance",
      "Drug development: clinical trials, double-blind", "H: Monoclonal antibodies: production and uses",
      "Plant disease: detection and defence"
    ],
    "Bioenergetics": [
      "Photosynthesis equation (word and symbol)", "Adaptations of the leaf for photosynthesis",
      "Limiting factors: light, CO₂, temperature",
      "H: Limiting factors in depth: interactions, the inverse square law and greenhouse costs",
      "★ Investigating the rate of photosynthesis", "Aerobic respiration equation",
      "Anaerobic respiration: fermentation, muscle fatigue", "Exercise: effects on breathing rate and heart rate",
      "H: Oxygen debt: lactic acid converted back to glucose in the liver"
    ]
  },
  "Paper 2": {
    "Homeostasis and Response": [
      "Homeostasis: definition and importance", "The nervous system: CNS, neurones, synapses",
      "Reflex arc: sensory, relay, motor neurones", "★ Measuring reaction time",
      "The brain: regions and functions", "The eye: structure and function, accommodation",
      "Thermoregulation: vasodilation, sweating, shivering", "Hormones: endocrine glands and target organs",
      "Blood glucose control: insulin, diabetes", "Type 1 vs Type 2 diabetes: causes and treatments",
      "H: Glucagon and insulin: negative feedback", "Osmoregulation: kidneys and water balance",
      "H: Osmoregulation in depth: urea formation and ADH",
      "Hormones in reproduction: FSH, LH, oestrogen and progesterone",
      "H: How hormones interact to control the menstrual cycle", "Contraception: hormonal and non-hormonal",
      "H: Fertility treatments: IVF, fertility drugs", "Plant hormones: auxin, gravitropism, phototropism"
    ],
    "Inheritance, Variation and Evolution": [
      "Sexual vs asexual reproduction: advantages", "Meiosis: stages and importance of variation",
      "DNA structure and chromosome pairs (basic)", "H: DNA structure in detail (nucleotides) and protein synthesis",
      "H: How mutations affect the protein made", "Genes, alleles: dominant and recessive",
      "Punnett squares and probability of inheritance", "H: Constructing Punnett squares from scratch",
      "Inherited disorders: cystic fibrosis, polydactyly", "Sex determination: X and Y chromosomes",
      "Variation: genetic, environmental, combination", "Mutations: causes and effects (basic)",
      "Natural selection and evolution", "Selective breeding: process and examples",
      "Genetic engineering: what it is, GM crops, insulin", "H: The steps of genetic engineering (enzymes, vectors)",
      "Evidence for evolution: fossils, antibiotic resistance", "Classification: kingdoms, phylogenetic trees"
    ],
    "Ecology": [
      "Ecosystems: habitats, populations, communities", "Abiotic factors: temperature, light, pH, moisture",
      "Biotic factors: predation, competition, disease", "Adaptations: structural, behavioural, functional",
      "Food chains and food webs", "Predator-prey relationships and population cycles",
      "★ Sampling using quadrats and transects", "Carbon cycle", "Water cycle",
      "Nitrogen cycle: decomposers, nitrifying bacteria", "H: How environmental change affects where species are found",
      "Biodiversity: importance and preservation", "Human impact: deforestation, global warming, land use",
      "Pollution indicators: lichen, invertebrates", "Trophic levels and energy transfer", "Pyramids of biomass"
    ]
  }
};
// The paper goes where Maths keeps its grade, so tiles read "Biology · Paper 1". Required practicals get a title
// that says so; Higher tier extras get the "Higher" tier.
SAMPLE_TOPICS.Biology = Object.entries(BIOLOGY_BY_PAPER).flatMap(([paper, topicsIn]) =>
  Object.entries(topicsIn).flatMap(([category, items]) => items.map(item =>
    item.startsWith("H: ") ? [item.slice(3), category, "Higher", "Higher tier only", "todo", paper]
    : item.startsWith("★ ") ? ["Required practical: " + item[2].toLowerCase() + item.slice(3), category, "Both", "Required practical", "todo", paper]
    : [item, category, "Both", "", "todo", paper])));

// GCSE Chemistry (Pearson Edexcel 1CH0) topics, by paper and then by spec topic (Topic 1 Key concepts to Topic 9
// Separate chemistry 2), each list in spec order. Topic 1 (and the formulae and equations in 0.1–0.6) is examined in
// both papers. "H: " marks content that is Higher tier only (bold in the spec), and "★ " a Core Practical.
const CHEMISTRY_BY_PAPER = {
  "Paper 1 & 2": {
    "Key Concepts in Chemistry": [
      "Formulae, equations and hazard symbols", "H: Balanced ionic equations",
      "Atomic structure: protons, neutrons, electrons and models of the atom", "Isotopes and relative atomic mass",
      "H: Calculating relative atomic mass from isotope abundances", "The periodic table: Mendeleev, groups and periods",
      "Electronic configuration", "Ionic bonding, ions and formulae of ionic compounds",
      "Covalent bonding and simple molecules", "Types of substance: ionic, simple molecular, giant covalent and metallic",
      "Carbon: diamond, graphite, fullerenes, graphene and polymers", "Relative formula mass and percentage by mass",
      "Empirical and molecular formulae", "Conservation of mass and reacting masses", "Concentration in g dm⁻³",
      "H: Moles and the Avogadro constant", "H: Limiting reactants and stoichiometry"
    ]
  },
  "Paper 1": {
    "States of Matter and Mixtures": [
      "States of matter and changes of state", "Pure substances and mixtures",
      "Separating mixtures: filtration, crystallisation and distillation", "Paper chromatography and Rf values",
      "★ Investigating inks: distillation and chromatography", "Making water potable"
    ],
    "Chemical Changes": [
      "Acids, alkalis, pH and indicators", "H: pH and hydrogen ion concentration",
      "★ pH change when calcium hydroxide is added to hydrochloric acid", "H: Strong and weak, dilute and concentrated acids",
      "Bases, neutralisation and reactions of acids", "Making soluble salts", "★ Preparing pure, dry copper sulfate crystals",
      "Solubility rules, precipitates and insoluble salts", "Electrolysis: electrolytes, ions and products",
      "H: Half equations, oxidation and reduction in electrolysis", "Electrolysis of copper sulfate and purifying copper",
      "★ Electrolysis of copper sulfate solution"
    ],
    "Extracting Metals and Equilibria": [
      "The reactivity series and displacement reactions", "H: Displacement reactions as redox reactions",
      "Extracting metals: ores, oxidation and reduction", "H: Biological methods of metal extraction",
      "Recycling metals and life-cycle assessments", "Reversible reactions, dynamic equilibrium and the Haber process",
      "H: Changing the position of equilibrium"
    ],
    "Separate Chemistry 1": [
      "Transition metals, corrosion and rusting", "Alloys and the uses of metals", "H: Concentration in mol dm⁻³",
      "★ Acid-alkali titration", "H: Titration calculations", "Percentage yield and atom economy",
      "H: Choosing a reaction pathway", "H: Molar volume of gases and Avogadro's law", "The Haber process and fertilisers",
      "H: Rate of reaching equilibrium and industrial conditions", "Chemical cells and fuel cells"
    ]
  },
  "Paper 2": {
    "Groups in the Periodic Table": [
      "Group 1: the alkali metals", "Group 7: the halogens and their reactions", "Halogen displacement reactions",
      "H: Halogen displacement as redox reactions", "Group 0: the noble gases"
    ],
    "Rates of Reaction and Energy Changes": [
      "★ Investigating rates of reaction", "Measuring rates and interpreting rate graphs",
      "Collision theory and factors affecting rate", "Catalysts and enzymes", "Exothermic and endothermic reactions",
      "Bond breaking and bond making", "H: Calculating energy changes from bond energies",
      "Activation energy and reaction profiles"
    ],
    "Fuels and Earth Science": [
      "Crude oil, hydrocarbons and fractional distillation", "Alkanes and homologous series",
      "Complete and incomplete combustion", "Pollutants: sulfur dioxide, acid rain and oxides of nitrogen",
      "Fossil fuels and hydrogen as a fuel for cars", "Cracking", "The Earth's early atmosphere and how it changed",
      "The greenhouse effect and climate change"
    ],
    "Separate Chemistry 2": [
      "Flame tests and tests for metal ions", "Tests for negative ions (anions)", "★ Identifying the ions in unknown salts",
      "Instrumental analysis and flame photometry", "Alkanes and alkenes", "Reactions of alkenes and the bromine water test",
      "Addition polymers", "H: Condensation polymers", "Problems with polymers, recycling and natural polymers",
      "Alcohols", "★ Temperature rise from burning alcohols", "Carboxylic acids", "Fermentation and making ethanol",
      "Nanoparticles: sizes, uses and risks", "Comparing materials: ceramics, polymers, composites and metals"
    ]
  }
};
// Like Biology, the paper goes where Maths keeps its grade ("Chemistry · Paper 2"). Edexcel calls its required
// practicals Core Practicals, so their tiles say so.
SAMPLE_TOPICS.Chemistry = Object.entries(CHEMISTRY_BY_PAPER).flatMap(([paper, topicsIn]) =>
  Object.entries(topicsIn).flatMap(([category, items]) => items.map(item =>
    item.startsWith("H: ") ? [item.slice(3), category, "Higher", "Higher tier only", "todo", paper]
    : item.startsWith("★ ") ? ["Core practical: " + item[2].toLowerCase() + item.slice(3), category, "Both", "Core practical", "todo", paper]
    : [item, category, "Both", "", "todo", paper])));

// Subjects switched off for now: they don't show anywhere in the app (dashboard, filters, homework picker,
// tutor progress), but their topics, questions and everyone's saved progress are kept.
// Take a subject out of this list to bring it back.
const HIDDEN_SUBJECTS = ["Physics", "Chemistry"];
const isShownSubject = subject => !HIDDEN_SUBJECTS.includes(subject);
