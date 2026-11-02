/* =====================================================================
   BIOLOGY QUESTIONS — AQA GCSE Biology (8461)
   =====================================================================
   Built from the key terms and definitions in the glossary of the Oxford
   AQA GCSE Biology student book, and the key processes that come up in
   exams. Each topic's "topic" must match its dashboard tile EXACTLY.

   The questions are written with these short helpers:
     fill("Osmosis is the diffusion of [water] through a membrane.")
                 Fill in the blank. Each [word] becomes a blank; give other
                 accepted answers with "/", e.g. [mitochondria/mitochondrion].
     define("osmosis")       Write the full definition of a key term
                             (marked against the book's definition).
     nameIt("osmosis")       Given the definition, name the key term.
     match(["xylem", "phloem", "stomata"])
                 Match each definition to its term. A pair can also be given
                 as ["term", "description"] for something not in the glossary.
     order("Put the steps of ... in order.", ["first", "second", ...])
                 Put a process in the right order (list the steps in order;
                 the app jumbles them).
   Questions can also be written out in full, like in questions.js
   (diagram questions are written that way).
   ===================================================================== */
(function () {
  // ---------- Key terms (Oxford AQA GCSE Biology glossary) ----------
  const G = {
    // Topic 1: Cell biology
    "active transport": "The movement of substances from a dilute solution to a more concentrated solution against a concentration gradient, requiring energy from respiration.",
    "adult stem cells": "Stem cells that are found in adults that can differentiate and form a limited number of cells.",
    "agar gel": "Widely used solid (gel) culture medium used for growing microorganisms.",
    "algae": "Simple aquatic organisms (protista) that make their own food by photosynthesis.",
    "bacteria": "Single-celled prokaryotic organisms.",
    "binary fission": "Reproduction by simple cell division, for example in bacteria.",
    "cell cycle": "The three-stage process of cell division in a body cell that involves mitosis and results in the formation of two identical daughter cells.",
    "cell membrane": "The membrane around the contents of a cell that controls what moves in and out of the cell.",
    "cell wall": "The rigid structure around plant and algal cells. It is made of cellulose and strengthens the cell.",
    "cellulose": "The complex carbohydrate that makes up plant and algal cell walls and gives them strength.",
    "chloroplasts": "The organelles in which photosynthesis takes place.",
    "culture medium": "A liquid or gel used to support the growth of microorganisms or other cultures, often containing specific nutrients.",
    "cytoplasm": "The water-based gel in which the organelles of all living cells are suspended and most of the chemical reactions of life take place.",
    "differentiate": "The process where cells become specialised for a particular function.",
    "diffusion": "The spreading out of the particles of any substance in a solution, or particles in a gas, resulting in a net movement of particles from an area of higher concentration to an area of lower concentration down a concentration gradient.",
    "embryonic stem cells": "Stem cells from an early embryo that can differentiate to form the specialised cells of the body.",
    "eukaryotic cells": "Cells from eukaryotes that have a cell membrane, cytoplasm, and genetic material enclosed in a nucleus.",
    "hypertonic (osmosis)": "A solution that is more concentrated than the cell contents.",
    "hypotonic (osmosis)": "A solution that is less concentrated than the cell contents.",
    "inoculate": "Introducing microorganisms to a culture medium, or introducing modified microorganisms into an individual to protect them against disease.",
    "isotonic (osmosis)": "A solution that is the same concentration as the cell contents.",
    "mitochondria": "The site of aerobic cellular respiration in a cell.",
    "mitosis": "Part of the cell cycle where one set of new chromosomes is pulled to each end of the cell forming two identical nuclei during cell division.",
    "nucleus": "Organelle found in many living cells containing the genetic information surrounded by the nuclear membrane.",
    "osmosis": "The diffusion of water through a partially permeable membrane from a dilute solution (which has a high concentration of water) to a concentrated solution (with a low concentration of water) down a concentration gradient.",
    "partially permeable membrane": "A membrane that allows only certain substances to pass through.",
    "permanent vacuole": "Space in the cytoplasm filled with cell sap.",
    "plasmolysis": "The state of plant cells when so much water is lost from the cell by osmosis that the vacuole and cytoplasm shrink and the cell membrane pulls away from the cell wall.",
    "prokaryotic cells": "Cells from prokaryotic organisms. They have a cytoplasm surrounded by a cell membrane, and a cell wall that does not contain cellulose. The genetic material is a DNA loop that is free in the cytoplasm and not enclosed by a nucleus. Sometimes there are one or more small rings of DNA called plasmids.",
    "resolving power": "A measure of the ability to distinguish between two separate points that are very close together.",
    "ribosomes": "The site of protein synthesis in a cell.",
    "stem cells": "Undifferentiated cells with the potential to form a wide variety of different cell types.",
    "therapeutic cloning": "A process where an embryo is produced that is genetically identical to the patient so the cells can then be used in medical treatments.",
    "turgor": "The pressure inside a plant cell exerted by the cell contents pressing on the cell wall.",

    // Topic 2: Organisation
    "active site": "The site on an enzyme where the reactants bind.",
    "alveoli": "Tiny air sacs in the lungs that increase the surface area for gaseous exchange.",
    "amino acids": "Molecules made up of carbon, hydrogen, oxygen, and nitrogen that are the building blocks of proteins.",
    "amylase": "Enzyme that speeds up the digestion of starch into sugars.",
    "aorta": "The artery that leaves the heart from the left ventricle and carries oxygenated blood to the body.",
    "arteries": "Blood vessels that carry blood away from the heart. They usually carry oxygenated blood and have a pulse.",
    "atria": "The upper chambers of the heart.",
    "benign tumours": "Growths of abnormal cells that are contained in one area, usually within a membrane, and do not invade other tissues.",
    "bile": "Neutralises stomach acid to give a high pH for the enzymes from the pancreas and small intestine to work well. It is not an enzyme.",
    "cancer": "The common name for a malignant tumour, formed as a result of changes in cells that lead to uncontrolled growth and division.",
    "capillaries": "The smallest blood vessels. They run between individual cells and have a wall that is only one cell thick.",
    "carbohydrases": "Enzymes that speed up the breakdown of carbohydrates into simple sugars.",
    "carbohydrates": "Molecules that contain only carbon, hydrogen, and oxygen. They provide the energy for the metabolism and are found in foods such as rice, potatoes, and bread.",
    "carcinogens": "Agents that cause cancer or significantly increase the risk of developing cancer.",
    "catalyst": "A substance that speeds up the rate of another reaction but is not used up or changed itself.",
    "coronary arteries": "The blood vessels that supply oxygenated blood to the heart muscle.",
    "denatured": "The breakdown of the molecular structure of a protein so it no longer functions.",
    "digestive system": "Organ system where food is digested and absorbed.",
    "double circulatory system": "The circulation of blood from the heart to the lungs is separate from the circulation of blood from the heart to the rest of the body.",
    "enzymes": "Biological catalysts, usually proteins.",
    "epidermal": "The name given to cells that make up the epidermis or outer layer of an organism.",
    "fatty acids": "Part of the structure of a lipid molecule.",
    "glycerol": "Part of the structure of a lipid molecule.",
    "guard cells": "Surround the stomata in the leaves of plants and control their opening and closing.",
    "haemoglobin": "The red pigment that carries oxygen around the body in the red blood cells.",
    "ionising radiation": "Has enough energy to cause ionisation in the materials it passes through, which in turn can make them biologically active and may result in mutation and cancer.",
    "lipase": "Enzymes that speed up the breakdown of lipids into fatty acids and glycerol.",
    "lipids": "Include fats and oils and are found in foods such as butter, olive oil, and crisps. They are made of carbon, hydrogen and oxygen.",
    "malignant tumours": "Invade neighbouring tissues and spread to different parts of the body in the blood where they form secondary tumours. They are also known as cancers.",
    "organ": "An aggregation (collection) of different tissues working together to carry out specific functions.",
    "organ system": "A group of organs that work together to carry out specific functions and form organisms.",
    "palisade mesophyll": "The upper layer of the mesophyll tissue in plant leaves made up of closely packed cells that contain many chloroplasts for photosynthesis.",
    "phloem": "The living transport tissue in plants that carries dissolved food (sugars) around the plant.",
    "plasma": "The clear yellow liquid part of the blood that carries dissolved substances and blood cells around the body.",
    "platelets": "Fragments of cells in the blood that play a vital role in the clotting mechanism of the blood.",
    "proteases": "Enzymes that speed up the breakdown of proteins into amino acids.",
    "proteins": "Molecules that contain carbon, hydrogen, oxygen, and nitrogen and are made of long chains of amino acids. They are used for building the cells and tissues of the body and to form enzymes.",
    "pulmonary artery": "The large blood vessel that takes deoxygenated blood from the right ventricle of the heart to the lungs.",
    "pulmonary vein": "The large blood vessel that carries oxygenated blood from the lungs back to the left atrium of the heart.",
    "red blood cells": "Biconcave cells that contain the red pigment haemoglobin and carry oxygen around the body in the blood.",
    "simple sugars": "Small carbohydrate units, for example glucose.",
    "spongy mesophyll": "The lower layer of mesophyll tissue in plant leaves that contains some chloroplasts and many large air spaces to give a big surface area for the exchange of gases.",
    "statins": "Drugs used to lower blood cholesterol levels and improve the balance of high- to low-density lipoproteins in the blood.",
    "stent": "A metal mesh placed in a blocked or partially blocked artery. They are used to open up the blood vessel by the inflation of a tiny balloon.",
    "stomata": "Openings in the leaves of plants, particularly on the underside and opened and closed by guard cells, allowing gases to enter and leave the leaf.",
    "tissue": "A group of specialised cells with a similar structure and function.",
    "translocation": "The movement of sugars from the leaves to the rest of the plant through the phloem.",
    "transpiration": "The loss of water vapour from the leaves of plants through the stomata when they are opened to allow gas exchange for photosynthesis. It involves evaporation from the surface of the cells and diffusion through the stomata.",
    "tumour": "A mass of abnormally growing cells that forms when the cells do not respond to the normal mechanisms that control growth and when control of the cell cycle is lost.",
    "veins": "Blood vessels that carry blood towards the heart. They usually carry deoxygenated blood and have valves to prevent the backflow of blood.",
    "vena cava": "The large vein that brings deoxygenated blood from the body into the heart.",
    "ventilated": "Movement of air or water into and out of the gas exchange organ, for example lungs or gills.",
    "ventricles": "Chambers of the heart that contract to force blood out of the heart.",
    "white blood cells": "Blood cells involved in the immune system of the body. They engulf pathogens and make antibodies and antitoxins.",
    "xylem": "The non-living transport tissue in plants that transports water from the roots to the leaves and shoots.",

    // Topic 3: Infection and response
    "aphids": "Insects that penetrate the plant phloem and feed on the dissolved food. They act as vectors that carry pathogenic viruses, bacteria, and fungi into healthy plant tissue.",
    "chlorosis": "The yellowing seen on the leaves of plants when they cannot make chlorophyll due to lack of magnesium ions.",
    "clinical trials": "Test potential new drugs on healthy and patient volunteers.",
    "communicable disease": "Disease caused by pathogens that can be passed from one organism to another.",
    "hybridomas": "Cells created during the production of monoclonal antibodies by the fusion of an antibody-specific lymphocyte and a tumour cell.",
    "non-communicable diseases": "Are not infectious and cannot be passed from one organism to another.",
    "pathogens": "Microorganisms that cause disease.",
    "Penicillium": "The mould from which the antibiotic penicillin is extracted.",
    "placebo": "A medicine that does not contain the active drug being tested, used in clinical trials of new medicines.",
    "preclinical testing": "Is carried out on a potential new medicine in a laboratory using cells, tissues, and live animals.",
    "sexually transmitted disease (STD)": "Transmitted from an infected person to an uninfected person by unprotected sexual contact.",
    "vaccine": "Dead or inactive pathogenic material used in vaccination to develop immunity to a disease in a healthy person.",
    "virus": "Pathogens that are much smaller than bacteria and can only reproduce inside living cells of other organisms.",

    // Topic 4: Bioenergetics
    "aerobic respiration": "An exothermic reaction in which glucose is broken down using oxygen to produce carbon dioxide and water and release energy for the cells.",
    "anaerobic respiration": "An exothermic reaction in which glucose is broken down in the absence of oxygen to produce lactic acid in animals and ethanol and carbon dioxide in plants and yeast. A small amount of energy is transferred for the cells.",
    "chlorophyll": "The green pigment contained in the chloroplasts.",
    "endothermic reaction": "A reaction that requires a transfer of energy from the environment.",
    "exothermic reaction": "A reaction that transfers energy to the environment.",
    "glucose": "A simple sugar.",
    "glycogen": "Carbohydrate store in animals.",
    "lactic acid": "The end product of anaerobic respiration in animal cells.",
    "limiting factors": "Limit the rate of a reaction, for example photosynthesis.",
    "metabolism": "The sum of all the reactions taking place in a cell or the body of an organism.",
    "oxygen debt": "The extra oxygen that must be taken into the body after exercise has stopped to complete the aerobic respiration of lactic acid.",
    "photosynthesis": "The process by which plants make food using carbon dioxide, water, and light.",

    // Topic 5: Homeostasis and response
    "ADH": "Anti-diuretic hormone helps control the water balance of the body and affects the amount of urine produced by the kidney.",
    "adrenaline": "Hormone that prepares the body for flight or fight.",
    "auxin": "A plant hormone that controls the responses of plants to light (phototropism) and gravity (gravitropism).",
    "central nervous system (CNS)": "The part of the nervous system where information is processed. It is made up of the brain and spinal cord.",
    "cerebellum": "Region of the brain concerned with coordinating muscular activity and balance.",
    "cerebral cortex": "Region of the brain associated with consciousness, memory, and language.",
    "ciliary muscles": "Muscles that contract and relax to change the shape of the lens of the eye.",
    "contraception": "Methods of preventing pregnancy which usually involve preventing the sperm and egg from meeting.",
    "coordination centres": "Areas that receive and process information from receptors.",
    "dialysis": "The process of cleansing the blood through a dialysis machine when the kidneys fail.",
    "effectors": "Areas (usually muscles or glands) that bring about responses in the body.",
    "endocrine system": "The glands that produce the hormones that control many aspects of the development and metabolism of the body, and the hormones they produce.",
    "follicle stimulating hormone (FSH)": "Causes the eggs to mature in the ovary.",
    "gibberellins": "Plant hormones that are important in initiating seed germination.",
    "glucagon": "Hormone involved in the control of blood sugar levels.",
    "gravitropism": "The response of a plant to gravity.",
    "homeostasis": "The regulation of the internal conditions of a cell or organism to maintain optimum conditions for function, in response to internal and external changes.",
    "hormones": "Chemicals produced in one area of the body of an organism that have an effect on the functioning of another area of the body. In animals hormones are produced in glands.",
    "hyperopia": "Long sightedness, where the rays of light from distant objects can be focused clearly on the retina but the rays of light from close objects are not focused and the objects appear blurred.",
    "insulin": "Hormone involved in the control of blood sugar levels.",
    "medulla": "Region of the brain concerned with unconscious activities such as controlling the heart rate and breathing rate.",
    "motor neurones": "Carry impulses from the central nervous system to the effector organs.",
    "myopia": "Short sightedness, where the rays of light from close objects are brought into focus on the retina but distant objects appear blurred as the light is focused in front of the retina.",
    "nerve": "Bundle of hundreds or even thousands of neurones.",
    "neurones": "Basic cells of the nervous system that carry minute electrical impulses around the body.",
    "oestrogen": "Female sex hormone that controls the development of secondary sexual characteristics in girls at puberty, and the build-up and maintenance of the uterus lining during the menstrual cycle.",
    "ovaries": "Female sex organs that produce eggs and sex hormones.",
    "ovulation": "The release of a mature egg (ovum) from the ovary.",
    "phototropism": "The response of a plant to light, controlled by auxin.",
    "pituitary gland": "Endocrine 'master gland' found in the brain that secretes a number of different hormones into the blood in response to different conditions to control other endocrine glands in the body.",
    "receptors": "Cells that detect stimuli – changes in the internal or external environment.",
    "reflex arcs": "Bring about a reflex action. They involve the sense organ, sensory neurone, relay neurone and motor neurone.",
    "reflexes": "Rapid automatic responses of the nervous system that do not involve conscious thought.",
    "selective reabsorption": "The process in the kidney where the materials needed in the body such as glucose, some mineral ions, and water are reabsorbed back into the blood from the filtrate.",
    "sensory neurone": "Neurone that carries impulses from the sensory organs to the central nervous system.",
    "stimuli": "Changes in the external or internal environment that can be detected by receptors.",
    "suspensory ligaments": "The ligaments that connect the lens of the eye to the ciliary muscles.",
    "testosterone": "The main male sex hormone that controls the male secondary sexual characteristics at puberty and the production of sperm.",
    "thermoregulatory centre": "The area of the brain that is sensitive to the temperature of the blood.",
    "tropism": "The responses of plant roots and shoots to environmental stimuli such as light or gravity.",
    "type 1 diabetes": "A disorder where the pancreas fails to produce sufficient insulin.",
    "type 2 diabetes": "A disorder where the body cells no longer respond to the insulin produced by the pancreas.",
    "urea": "The waste product formed by the breakdown of excess amino acids in the liver.",
    "vasoconstriction": "The constriction or narrowing of the blood vessels.",
    "vasodilation": "The dilation or opening up of the blood vessels.",

    // Topic 6: Inheritance, variation and evolution
    "alleles": "Different forms of the same gene, sometimes referred to as variants.",
    "archaea": "One of the three domains, containing primitive forms of bacteria that can live in many of the extreme environments of the world.",
    "asexual reproduction": "Involves only one individual and the offspring is identical to the parent. There is no fusion of gametes or mixing of genetic information.",
    "bases (DNA)": "Nitrogenous compounds that make up part of the structure of DNA and RNA. They are represented by the letters A, T, C, and G.",
    "carriers": "Individuals who are heterozygous for a recessive allele linked to a genetic disorder. Carriers have one healthy allele so they are not affected themselves but they can pass on the affected allele to their offspring.",
    "classification": "The organisation of living organisms into groups according to their similarities.",
    "cloning": "The production of identical offspring by asexual reproduction.",
    "cystic fibrosis": "An inherited disorder that affects the lungs, digestive, and reproductive system and is inherited through a recessive allele.",
    "domain": "The highest level of classification. There are three domains — Archaea, Bacteria, and Eukaryota.",
    "dominant allele": "The phenotype will be apparent in the offspring even if only one of the alleles is inherited.",
    "evolutionary trees": "Models used to explain the evolutionary links between groups of organisms.",
    "extinction": "The permanent loss of all members of a species from an area or from the world.",
    "genetic engineering": "The process by which scientists can manipulate and change the genotype of an organism.",
    "genotype": "The genetic makeup of an individual for a particular characteristic, for example hair or eye colour.",
    "heterozygote": "Individual with different alleles for a characteristic.",
    "homozygote": "Individual with two identical alleles for a characteristic.",
    "meiosis": "Two-stage process of cell division that reduces the chromosome number of daughter cells. It is involved in making gametes for sexual reproduction.",
    "mutation": "A change in the genetic material of an organism.",
    "natural selection": "The process by which evolution takes place. Organisms produce more offspring than the environment can support. Only those that are most suited to their environment will survive to breed and pass on their useful characteristics to their offspring.",
    "nucleotide": "A molecule made up of a sugar, a phosphate group, and one of four different bases. They are key units in the structure of DNA and RNA.",
    "phenotype": "The physical appearance/biochemistry of an individual for a particular characteristic.",
    "polydactyly": "A dominant inherited disorder that results in babies born with extra fingers and/or toes.",
    "Punnett square diagram": "A way of modelling a genetic cross and predicting the outcome using probability.",
    "recessive": "A phenotype that will only show up in the offspring if both of the alleles coding for that characteristic are inherited.",
    "selective breeding": "Speeds up natural selection by selecting animals or plants for breeding that have a required characteristic.",
    "sex chromosomes": "Carry the information that determines the sex of an individual.",
    "sexual reproduction": "Involves the joining (fusion) of male and female gametes, producing genetic variation in the offspring.",
    "speciation": "The process by which two species evolve from a single original species by natural selection.",
    "species": "The smallest group of clearly identified organisms in Linnaeus's classification system, often described as a group of organisms that can breed together and produce fertile offspring.",
    "sperm": "The male sex cells or gametes that carry the genetic material from the male parent.",
    "tissue culture": "A modern way of cloning plants that allows thousands of new plants to be created from one piece of plant tissue.",
    "zygote": "The single new cell formed by the fusion of gametes in sexual reproduction.",

    // Topic 7: Ecology
    "abundance": "A measure of how common or rare a particular type of organism is in a given environment.",
    "adaptations": "Special features that make an organism particularly well suited to the environment where it lives.",
    "biodiversity": "A measure of the variety of all the different species of organisms on Earth.",
    "biomass": "The amount of biological material in an organism.",
    "carbon cycle": "The cycling of carbon through the living and non-living world.",
    "community": "Group of interdependent living organisms in an ecosystem.",
    "competition": "The process by which living organisms compete with each other for limited resources such as food, light, or reproductive partners.",
    "decomposers": "Microorganisms that break down waste products and dead bodies.",
    "distribution": "Where particular types of organisms are found within an environment.",
    "extremophile": "An organism that can survive and reproduce in extreme conditions.",
    "incident energy": "Light from the Sun arriving at the surface of the Earth.",
    "interdependence": "The network of relationships between different organisms within a community, for example each species depends on other species for food, shelter, pollination, seed dispersal, etc.",
    "primary consumer": "Animals that eat producers.",
    "producers": "Organisms such as plants and algae that can make food from raw materials such as carbon dioxide and water.",
    "quadrat": "A sample area used for measuring the abundance and distribution of organisms in the field.",
    "quantitative sampling": "Records the numbers of organisms rather than just the type.",
    "secondary consumer": "Animals that eat the primary consumers.",
    "transect": "A measured line or area along which ecological measurements are made.",
    "trophic level": "Feeding levels in an ecosystem."
  };

  // ---------- Question makers ----------
  const def = term => {
    if (!(term in G)) throw new Error(`"${term}" isn't in the key terms list`);
    return G[term];
  };
  // How a term is shown: "hypertonic (osmosis)" is just "hypertonic"; "central nervous system (CNS)" keeps CNS.
  const shown = term => term.replace(/\s*\(([^)]*)\)$/, (m, inner) => /^[A-Z]+$/.test(inner) ? ` (${inner})` : "");
  // Other ways of writing a term that also count when naming it.
  const ALSO = {
    "differentiate": "differentiation", "Punnett square diagram": "Punnett square", "reflex arcs": "reflex arc", "stimuli": "stimulus",
    "alveoli": "alveolus", "mitochondria": "mitochondrion", "bacteria": "bacterium", "atria": "atrium", "epidermal": "epidermis",
    "coordination centres": "coordination centre", "ventilated": "ventilation", "dominant allele": "dominant",
    "recessive": "recessive allele", "type 1 diabetes": "type one diabetes", "type 2 diabetes": "type two diabetes",
    "permanent vacuole": "vacuole", "motor neurones": "motor neurone", "neurones": "neurone/neuron/neurons"
  };
  // Accepted answers for a term: its name, its abbreviation if it has one, and any other ways of writing it.
  const accepted = term => {
    const abbr = /\(([A-Z]+)\)$/.exec(term);
    return [term.replace(/\s*\([^)]*\)$/, ""), ...(abbr ? [abbr[1]] : []), ...(ALSO[term] ? [ALSO[term]] : [])].join("/");
  };

  const define = term => ({ question: `Write the definition of "${shown(term)}".`, type: "explain", marks: 2, answer: def(term) });
  const nameIt = term => ({ question: `Which key term is this? "${def(term)}"`, type: "word", marks: 1, answer: accepted(term) });
  const match = (terms, question) => ({
    question: question || "Match each description to the right term.", type: "match", marks: 2,
    pairs: terms.map(t => Array.isArray(t) ? t : [shown(t), def(t)])
  });
  const order = (question, steps) => ({ question, type: "sequence", marks: 2, steps });
  // "[answer]" marks a blank. One blank is a single question; several become parts (a), (b), ... of one question.
  function fill(sentence) {
    const answers = [];
    const text = sentence.replace(/\[([^\]]+)\]/g, (m, a) => {
      answers.push(a);
      return answers.length > 1 || /\[[^\]]+\][\s\S]*\[/.test(sentence) ? `(${String.fromCharCode(96 + answers.length)}) _____` : "_____";
    });
    if (!answers.length) throw new Error(`no blank in "${sentence}"`);
    if (answers.length === 1) return { question: "Fill in the blank: " + text, type: "word", marks: 1, answer: answers[0] };
    return { text: "Fill in the blanks: " + text, parts: answers.map(a => ({ question: "Missing word", type: "word", marks: 1, answer: a })) };
  }

  const TIP = "Fill in the blanks, write definitions, put processes in order and match terms to their meanings. " +
    "For definitions, compare your answer with the book's and mark yourself.";
  // Each topic's block is kept so the exam-style questions further down can join its list.
  const blocks = {};
  const topic = (title, questions) => QUESTION_BANK.add(blocks[title] = { topic: title, title, type: "word", questionsPerSet: 8, tip: TIP, questions });

  // ---------- Diagrams ----------
  const ARROW = `<defs><marker id="bioArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#146c43"/></marker></defs>`;
  const PLANT_CELL = `<svg viewBox="0 0 330 220" width="330" role="img" aria-label="A plant cell with five parts labelled A to E">
    <rect x="20" y="20" width="220" height="180" rx="8"/>
    <rect x="29" y="29" width="202" height="162" rx="5" style="fill:#fbfdfb;stroke-width:1.5"/>
    <ellipse cx="118" cy="112" rx="62" ry="44" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <circle cx="198" cy="62" r="18" fill="#e8d8c4" stroke="#7a5230" stroke-width="2"/>
    <ellipse cx="58" cy="54" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <ellipse cx="205" cy="162" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <ellipse cx="62" cy="172" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <line x1="240" y1="34" x2="282" y2="34"/><text x="290" y="39">A</text>
    <line x1="214" y1="66" x2="282" y2="78"/><text x="290" y="83">B</text>
    <line x1="168" y1="114" x2="282" y2="120"/><text x="290" y="125">C</text>
    <line x1="217" y1="160" x2="282" y2="160"/><text x="290" y="165">D</text>
    <line x1="150" y1="178" x2="282" y2="198"/><text x="290" y="203">E</text>
  </svg>`;
  const HEART = `<svg viewBox="0 0 300 220" width="300" role="img" aria-label="The four chambers of the heart, labelled W, X, Y and Z, seen from the front">
    <rect x="40" y="30" width="100" height="60" rx="10"/><text x="84" y="66">W</text>
    <rect x="160" y="30" width="100" height="60" rx="10"/><text x="204" y="66">X</text>
    <rect x="40" y="100" width="100" height="90" rx="10"/><text x="84" y="150">Y</text>
    <rect x="160" y="100" width="100" height="90" rx="10" style="stroke-width:5"/><text x="205" y="150">Z</text>
    <text x="40" y="18" style="font-weight:500;font-size:12px">Right side of the heart</text>
    <text x="164" y="18" style="font-weight:500;font-size:12px">Left side of the heart</text>
    <text x="40" y="210" style="font-weight:500;font-size:12px">The diagram shows the heart from the front.</text>
  </svg>`;
  const box = (x, y, w, label, attrs = "") => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="8" ${attrs}/><text x="${x + w / 2}" y="${y + 25}" text-anchor="middle" style="font-size:12px">${label}</text>`;
  const arrow = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#bioArrow)"/>`;
  const REFLEX = `<svg viewBox="0 0 560 120" width="560" role="img" aria-label="A reflex arc as a chain of boxes with two missing, labelled P and Q">${ARROW}
    ${box(0, 10, 90, "Stimulus")}${arrow(92, 30, 108, 30)}${box(110, 10, 90, "Receptor")}${arrow(202, 30, 218, 30)}
    ${box(220, 10, 110, "P", `style="fill:#fff;stroke-dasharray:5 4"`)}${arrow(332, 30, 348, 30)}${box(350, 10, 110, "Relay neurone")}
    ${arrow(462, 30, 478, 30)}${box(480, 10, 80, "(in the CNS)", `style="fill:none;stroke:none"`)}
    ${arrow(405, 52, 405, 68)}${box(350, 70, 110, "Q", `style="fill:#fff;stroke-dasharray:5 4"`)}${arrow(348, 90, 332, 90)}
    ${box(220, 70, 110, "Effector")}${arrow(218, 90, 202, 90)}${box(110, 70, 90, "Response")}
  </svg>`;
  const CARBON = `<svg viewBox="0 0 420 260" width="420" role="img" aria-label="The carbon cycle, with arrows labelled A to E">${ARROW}
    ${box(140, 6, 140, "CO₂ in the air")}
    ${box(10, 110, 100, "Plants")}${box(160, 110, 100, "Animals")}${box(310, 110, 100, "Fossil fuels")}
    ${box(100, 210, 220, "Dead organisms and waste")}
    ${arrow(150, 46, 72, 108)}<text x="92" y="76">A</text>
    ${arrow(92, 108, 168, 46)}<text x="136" y="92">B</text>
    ${arrow(112, 130, 158, 130)}<text x="129" y="124">C</text>
    ${arrow(352, 108, 270, 46)}<text x="318" y="76">D</text>
    ${arrow(300, 208, 262, 48)}<text x="292" y="150">E</text>
    ${arrow(60, 152, 120, 208)}${arrow(210, 152, 210, 208)}
  </svg>`;
  const PYRAMID = `<svg viewBox="0 0 360 190" width="360" role="img" aria-label="A pyramid of biomass with four bars labelled P to S">
    <rect x="150" y="10" width="60" height="36"/><text x="225" y="34" style="font-size:12px;font-weight:500">S: 0.5 kg</text>
    <rect x="125" y="50" width="110" height="36"/><text x="250" y="74" style="font-size:12px;font-weight:500">R: 10 kg</text>
    <rect x="80" y="90" width="200" height="36"/><text x="292" y="114" style="font-size:12px;font-weight:500">Q: 100 kg</text>
    <rect x="20" y="130" width="320" height="36"/><text x="160" y="154" style="font-size:12px">P: 1000 kg</text>
  </svg>`;

  // ======================= PAPER 1 =======================
  // ---------- 4.1 Cell Biology ----------
  topic("Prokaryotic vs eukaryotic cells", [
    define("prokaryotic cells"), define("eukaryotic cells"), nameIt("bacteria"),
    fill("In prokaryotic cells the genetic material is not enclosed in a [nucleus]."),
    fill("In prokaryotic cells the DNA is a single [loop] that is free in the cytoplasm."),
    fill("Small rings of DNA found in some prokaryotic cells are called [plasmids/plasmid]."),
    fill("The cell wall of a prokaryotic cell does not contain [cellulose]."),
    fill("Animal and plant cells are [eukaryotic] cells; bacteria are [prokaryotic] cells."),
    match(["prokaryotic cells", "eukaryotic cells", "bacteria", "algae"]),
    match([["Plasmid", "Small ring of DNA found in some prokaryotic cells"], ["Nucleus", "Encloses the genetic material in eukaryotic cells"],
      ["Cell wall", "Rigid outer layer: made of cellulose in plants, but not in bacteria"], ["Cytoplasm", "Gel where most chemical reactions take place"]],
      "Match each cell feature to its description.")
  ]);

  topic("Animal and plant cell structures and functions", [
    define("nucleus"), define("mitochondria"), define("ribosomes"), define("cell membrane"), define("cell wall"),
    nameIt("chloroplasts"), nameIt("permanent vacuole"), nameIt("cytoplasm"), nameIt("cellulose"),
    fill("Photosynthesis takes place in the [chloroplasts/chloroplast]."),
    fill("Aerobic respiration takes place in the [mitochondria/mitochondrion]."),
    fill("Proteins are made at the [ribosomes/ribosome]."),
    fill("The cell wall is made of [cellulose], which strengthens the cell."),
    fill("The permanent vacuole is filled with [cell sap/sap]."),
    match(["nucleus", "mitochondria", "ribosomes", "cell membrane"]),
    match(["cell wall", "chloroplasts", "permanent vacuole", "cytoplasm"]),
    { text: "The diagram shows a plant cell.", diagram: PLANT_CELL, always: true, parts: [
      { question: "Name part A.", type: "word", answer: "cell wall" },
      { question: "Name part B.", type: "word", answer: "nucleus" },
      { question: "Name part C.", type: "word", answer: "permanent vacuole/vacuole" },
      { question: "Name part D, where photosynthesis takes place.", type: "word", answer: "chloroplast/chloroplasts" },
      { question: "Name part E, the gel where most chemical reactions happen.", type: "word", answer: "cytoplasm" }
    ] },
    { text: "The diagram shows a plant cell.", diagram: PLANT_CELL, parts: [
      { question: "Which letter labels the part that an animal cell also has: A, B or D?", type: "choice", options: ["A", "B", "D"], answer: "B" },
      { question: "Part A is made of which carbohydrate?", type: "word", answer: "cellulose" }
    ] }
  ]);

  topic("Differentiation and specialised cells", [
    define("differentiate"), nameIt("differentiate"), nameIt("stem cells"), nameIt("tissue"),
    fill("As a cell differentiates it gains new sub-cellular structures so it is [specialised] for its function."),
    fill("Most animal cells differentiate at an [early] stage of development, but many plant cells keep the ability to differentiate throughout life."),
    fill("In mature animals, cell division is mainly for [repair] and replacement."),
    match([["Sperm cell", "Has a tail to swim and lots of mitochondria for energy"], ["Root hair cell", "Has a large surface area to absorb water and mineral ions"],
      ["Red blood cell", "Has no nucleus, leaving more room for haemoglobin"], ["Palisade cell", "Packed with chloroplasts for photosynthesis"]],
      "Match each specialised cell to how it is adapted.")
  ]);

  topic("Microscopy: magnification and resolution", [
    define("resolving power"), nameIt("resolving power"),
    fill("Magnification = size of [image] ÷ size of real object"),
    fill("An electron microscope has a much higher [resolution/resolving power] than a light microscope, so it shows more detail."),
    fill("Electron microscopes can show sub-cellular structures such as [ribosomes/ribosome/mitochondria] in detail."),
    { question: "An image of a cell is 20 mm long. The real cell is 0.1 mm long. Work out the magnification.", type: "number", marks: 2, answer: "200" },
    { question: "A cell is magnified ×400. Its image is 12 mm across. How wide is the real cell, in mm?", type: "number", marks: 2, answer: "0.03" },
    match([["Magnification", "How many times bigger the image is than the real object"], ["Resolution", "The ability to tell apart two points that are very close together"],
      ["Light microscope", "Uses light; magnifies up to about ×2000"], ["Electron microscope", "Uses electrons; has a much higher magnification and resolution"]],
      "Match each word to its meaning.")
  ]);

  topic("Microscopy calculations using standard form", [
    fill("1 mm = [1000] µm"),
    fill("1 µm = [1000] nm"),
    { question: "Write 0.00002 m in standard form.", type: "stdform", answer: "2 × 10^-5" },
    { question: "Write 3.5 × 10^-3 mm as an ordinary number.", type: "number", answer: "0.0035" },
    { question: "A mitochondrion is 2 µm long. How long is it in mm?", type: "number", marks: 1, answer: "0.002" },
    { question: "An image of a bacterium is 15 mm long at ×5000 magnification. Find the real length in mm, in standard form.", type: "stdform", marks: 2, answer: "3 × 10^-3" },
    { question: "An image is 40 mm across. The real object is 8 µm across. Work out the magnification.", type: "number", marks: 2, answer: "5000" },
    order("Put these in order of size, smallest first.", ["Ribosome", "Mitochondrion", "Bacterium", "Animal cell", "Plant cell"])
  ]);

  topic("Required practical: using a microscope to observe cells", [
    order("Put the steps for looking at onion cells under a light microscope in order.", [
      "Peel a thin layer of onion epidermis and place it on a slide",
      "Add a drop of iodine solution to stain the cells",
      "Carefully lower a coverslip onto the slide, avoiding air bubbles",
      "Clip the slide onto the stage and select the lowest-power objective lens",
      "Use the coarse focusing wheel, then the fine focusing wheel, to focus",
      "Switch to a higher-power objective lens and refocus with the fine focusing wheel"
    ]),
    fill("Start with the [lowest/low]-power objective lens so it is easier to find the cells."),
    fill("A stain such as [iodine] makes the cell structures easier to see."),
    fill("A thin layer of cells is used so that [light] can pass through it."),
    fill("Total magnification = eyepiece lens magnification × [objective] lens magnification"),
    { question: "The eyepiece lens is ×10 and the objective lens is ×40. What is the total magnification?", type: "number", answer: "400" },
    match([["Coarse focus", "Moves the stage a lot to get the image roughly in focus"], ["Fine focus", "Makes small adjustments to sharpen the image"],
      ["Coverslip", "Holds the specimen flat and stops it drying out"], ["Stain", "Makes parts of the cell show up more clearly"]],
      "Match each part of the method to what it does.")
  ]);

  topic("Mitosis and the cell cycle", [
    define("cell cycle"), define("mitosis"), nameIt("mitosis"), nameIt("binary fission"),
    order("Put the stages of the cell cycle in order.", [
      "The cell grows and the number of sub-cellular structures (ribosomes, mitochondria) increases",
      "The DNA replicates to form two copies of each chromosome",
      "Mitosis: one set of chromosomes is pulled to each end of the cell and the nucleus divides",
      "The cytoplasm and cell membrane divide to form two genetically identical daughter cells"
    ]),
    fill("Before a cell divides, its DNA [replicates/copies] to form two copies of each chromosome."),
    fill("Mitosis produces two daughter cells that are genetically [identical]."),
    fill("Cell division by mitosis is important for growth, [repair] and asexual reproduction."),
    match(["cell cycle", "mitosis", "binary fission"])
  ]);

  topic("Stem cells: types and uses (embryonic & adult)", [
    define("stem cells"), define("therapeutic cloning"), nameIt("embryonic stem cells"), nameIt("adult stem cells"),
    match(["stem cells", "embryonic stem cells", "adult stem cells", "therapeutic cloning"]),
    fill("In adults, stem cells are found in the bone [marrow]."),
    fill("In plants, stem cells are found in the [meristem/meristems], at the tips of roots and shoots."),
    fill("In therapeutic cloning, the embryo is genetically identical to the patient, so the cells are not [rejected] by the body."),
    fill("Embryonic stem cells can form [most/all/any] types of cell, but adult stem cells form only a limited number of cell types.")
  ]);

  topic("Diffusion: factors affecting rate", [
    define("diffusion"), nameIt("diffusion"),
    fill("Diffusion is the net movement of particles from an area of [higher/high] concentration to an area of [lower/low] concentration."),
    fill("Diffusion is passive: it does not need [energy] from respiration."),
    fill("The rate of diffusion increases with a steeper [concentration gradient], a higher [temperature] and a larger [surface area]."),
    fill("Oxygen moves into the blood in the lungs by [diffusion]."),
    match([["Concentration gradient", "The difference in concentration between two areas"], ["Surface area", "The bigger it is, the more particles can move across at once"],
      ["Temperature", "Makes particles move faster when it rises"], ["Net movement", "The overall movement after particles moving both ways are taken into account"]],
      "Match each word to its meaning.")
  ]);

  topic("Osmosis: definition and examples", [
    define("osmosis"), define("partially permeable membrane"), nameIt("osmosis"), nameIt("plasmolysis"), nameIt("turgor"),
    match(["hypertonic (osmosis)", "hypotonic (osmosis)", "isotonic (osmosis)"]),
    match(["osmosis", "partially permeable membrane", "plasmolysis", "turgor"]),
    fill("In osmosis, water moves from a [dilute] solution to a [concentrated] solution."),
    fill("In a hypotonic solution, plant cells gain water and become [turgid]."),
    fill("In a hypertonic solution, plant cells lose water and become [plasmolysed]."),
    fill("Animal cells placed in pure water may [burst/lyse] because they have no cell wall.")
  ]);

  topic("Required practical: osmosis in plant tissue", [
    order("Put the steps of the osmosis practical in order.", [
      "Cut potato cylinders of the same size and blot them dry",
      "Measure the mass of each cylinder",
      "Place each cylinder in a different concentration of sugar solution",
      "Leave them for the same length of time, e.g. overnight",
      "Remove the cylinders, blot them dry and measure their mass again",
      "Work out the percentage change in mass for each cylinder"
    ]),
    fill("Potato cylinders gain mass in a solution that is [hypotonic/dilute] compared with the cell contents."),
    fill("Potato cylinders lose mass in a solution that is [hypertonic/concentrated] compared with the cell contents."),
    fill("Where the line of the graph crosses 0% change, the solution is [isotonic] with the cells."),
    fill("The cylinders are blotted dry to remove [surface] water before weighing."),
    { question: "A potato cylinder's mass goes from 2.0 g to 2.3 g. What is the percentage change in mass?", type: "number", marks: 2, answer: "15" },
    { question: "A cylinder's mass goes from 2.5 g to 2.0 g. What is the percentage change in mass? (Give a negative number for a loss.)", type: "number", marks: 2, answer: "-20" }
  ]);

  topic("Active transport: differences from diffusion", [
    define("active transport"), nameIt("active transport"),
    order("Put these statements about active transport in a logical order.", [
      "Substances move from a dilute solution to a more concentrated one, against the concentration gradient",
      "Carrier proteins in the membrane move the substance",
      "This needs energy from respiration, so active cells have many mitochondria"
    ]),
    fill("Active transport moves substances [against] the concentration gradient."),
    fill("Active transport needs energy from [respiration]."),
    fill("Root hair cells take up mineral [ions] from the soil by active transport."),
    fill("In the gut, [glucose] can be absorbed into the blood by active transport."),
    match(["diffusion", "osmosis", "active transport"])
  ]);

  // ---------- 4.2 Organisation ----------
  topic("Cells → tissues → organs → organ systems", [
    define("tissue"), define("organ"), define("organ system"), nameIt("organ"),
    order("Put these levels of organisation in order, from smallest to largest.", ["Cell", "Tissue", "Organ", "Organ system", "Organism"]),
    match(["tissue", "organ", "organ system"]),
    fill("A [tissue] is a group of specialised cells with a similar structure and function."),
    fill("The stomach is an example of an [organ]; the digestive system is an example of an [organ system]."),
    match([["Tissue", "Muscle tissue"], ["Organ", "Heart"], ["Organ system", "Circulatory system"], ["Cell", "Red blood cell"]],
      "Match each example to its level of organisation.")
  ]);

  topic("Digestive system: organs and enzymes", [
    define("digestive system"), define("bile"), nameIt("amylase"), nameIt("proteases"), nameIt("lipase"), nameIt("carbohydrases"),
    match(["amylase", "proteases", "lipase", "bile"]),
    match(["carbohydrates", "proteins", "lipids", "simple sugars"]),
    fill("Amylase breaks down [starch] into sugars."),
    fill("Proteases break down proteins into [amino acids]."),
    fill("Lipase breaks down lipids into [fatty acids] and [glycerol]."),
    fill("Bile is made in the [liver] and stored in the [gall bladder]."),
    fill("Bile emulsifies fats into small droplets, increasing the [surface area] for lipase to work on."),
    fill("Small soluble products of digestion are absorbed through the [villi/villus] of the small intestine into the blood."),
    match([["Salivary glands", "Make amylase"], ["Stomach", "Makes protease and hydrochloric acid"], ["Pancreas", "Makes amylase, protease and lipase"], ["Liver", "Makes bile"]],
      "Match each organ to what it makes.")
  ]);

  topic("Enzyme action: lock and key, temperature, pH", [
    define("enzymes"), define("catalyst"), define("active site"), nameIt("denatured"), nameIt("catalyst"),
    order("Put the steps of the lock and key model in order.", [
      "The substrate fits into the enzyme's active site, which has a specific shape",
      "An enzyme–substrate complex forms and the reaction is catalysed",
      "The products are released and the enzyme is unchanged"
    ]),
    fill("Enzymes are biological [catalysts/catalyst], usually proteins."),
    fill("The substrate fits into the enzyme's [active site]."),
    fill("A high temperature or the wrong pH changes the shape of the active site, so the enzyme is [denatured]."),
    fill("Each enzyme works best at its [optimum] temperature and pH."),
    match(["enzymes", "catalyst", "active site", "denatured"])
  ]);

  topic("Required practical: food tests (Benedict's, Biuret, iodine)", [
    match([["Iodine solution", "Starch"], ["Benedict's solution", "Reducing sugars"], ["Biuret reagent", "Protein"], ["Ethanol (emulsion test)", "Lipids"]],
      "Match each food test to what it detects."),
    match([["Starch present", "Iodine turns blue-black"], ["Reducing sugar present", "Benedict's turns brick red (after heating)"],
      ["Protein present", "Biuret turns purple"], ["Lipid present", "A cloudy white emulsion forms"]], "Match each result to what it shows."),
    fill("Iodine solution turns from orange-brown to [blue-black/black/blue black/dark blue] if starch is present."),
    fill("Benedict's solution must be [heated/warmed] in a water bath before it changes colour."),
    fill("With reducing sugars, Benedict's solution turns from blue to [brick red/red/orange/brick-red]."),
    fill("Biuret reagent turns from blue to [purple/lilac/mauve] if protein is present."),
    order("Put the steps of the Benedict's test in order.", [
      "Grind the food with distilled water and filter it",
      "Put some of the food solution in a test tube",
      "Add a few drops of Benedict's solution",
      "Heat the tube in a water bath at about 75 °C for a few minutes",
      "Look for a colour change from blue to green, yellow or brick red"
    ])
  ]);

  topic("Required practical: effect of pH on enzyme activity", [
    order("Put the steps of the pH and amylase practical in order.", [
      "Put a drop of iodine solution into each well of a spotting tile",
      "Mix amylase with a pH buffer solution and starch solution, and start the stopwatch",
      "Every 30 seconds, add a drop of the mixture to a fresh well of iodine",
      "Stop when the iodine stays orange-brown, showing the starch has all been broken down",
      "Repeat with buffers at different pH values"
    ]),
    fill("Amylase breaks down [starch] into sugars."),
    fill("When all the starch has gone, the iodine stays [orange/orange-brown/brown]."),
    fill("A [buffer] solution keeps the pH of the mixture constant."),
    fill("The temperature is kept constant using a [water bath]."),
    fill("At a very high or low pH, the enzyme's active site changes shape and it is [denatured]."),
    { question: "Starch is all broken down after 50 seconds. Rate = 1000 ÷ time. What is the rate?", type: "number", answer: "20" }
  ]);

  topic("Heart structure and the circulatory system", [
    define("double circulatory system"), define("atria"), define("ventricles"), nameIt("aorta"), nameIt("vena cava"),
    nameIt("pulmonary artery"), nameIt("pulmonary vein"), nameIt("coronary arteries"), nameIt("alveoli"),
    order("Put the path of blood through the heart in order, starting from the body.", [
      "Deoxygenated blood from the body enters the right atrium through the vena cava",
      "It passes to the right ventricle, which pumps it to the lungs through the pulmonary artery",
      "Oxygenated blood returns through the pulmonary vein to the left atrium",
      "It passes to the left ventricle, which pumps it to the body through the aorta"
    ]),
    match(["aorta", "vena cava", "pulmonary artery", "pulmonary vein"]),
    match(["atria", "ventricles", "coronary arteries", "double circulatory system"]),
    fill("[Valves/Valve] in the heart stop blood flowing backwards."),
    fill("The wall of the left ventricle is thicker because it pumps blood around the whole [body]."),
    fill("In the alveoli, oxygen diffuses into the blood and [carbon dioxide] diffuses out."),
    fill("The heart's natural resting rate is controlled by a group of cells in the right atrium that act as a [pacemaker]."),
    { text: "The diagram shows the four chambers of the heart.", diagram: HEART, always: true, parts: [
      { question: "Name chamber W.", type: "word", answer: "right atrium" },
      { question: "Name chamber Z.", type: "word", answer: "left ventricle" },
      { question: "Which chamber, W, X, Y or Z, pumps blood to the lungs?", type: "choice", options: ["W", "X", "Y", "Z"], answer: "Y" },
      { question: "Which chamber receives blood from the pulmonary vein?", type: "choice", options: ["W", "X", "Y", "Z"], answer: "X" }
    ] },
    order("Put the gas exchange steps in a logical order.", [
      "Air is breathed in and the alveoli fill with air",
      "Oxygen diffuses from the alveoli into the blood in the capillaries",
      "Carbon dioxide diffuses from the blood into the alveoli",
      "Air with more carbon dioxide is breathed out"
    ])
  ]);

  topic("Blood vessels: arteries, veins, capillaries", [
    define("arteries"), define("veins"), define("capillaries"),
    match(["arteries", "veins", "capillaries"]),
    fill("Arteries have thick, muscular, [elastic] walls because the blood is at high pressure."),
    fill("Veins have [valves/valve] to stop blood flowing backwards."),
    fill("Capillary walls are only one [cell] thick, so substances can diffuse in and out easily."),
    fill("Arteries carry blood [away from] the heart; veins carry blood [towards/to] the heart."),
    match([["Artery", "Has a thick, muscular, elastic wall"], ["Vein", "Has valves to stop backflow"], ["Capillary", "Has a wall only one cell thick"], ["Artery", "Has a pulse"]],
      "Match each feature to the blood vessel that has it.")
  ]);

  topic("Blood: components and functions", [
    define("plasma"), define("red blood cells"), define("white blood cells"), define("platelets"), nameIt("haemoglobin"), nameIt("platelets"),
    match(["plasma", "red blood cells", "white blood cells", "platelets"]),
    fill("Red blood cells contain the red pigment [haemoglobin], which carries oxygen."),
    fill("Red blood cells are [biconcave] in shape, giving a large surface area."),
    fill("Red blood cells have no [nucleus], so there is more room for haemoglobin."),
    fill("[Platelets/Platelet] help the blood to clot."),
    fill("Plasma carries dissolved substances such as [carbon dioxide/urea/glucose/hormones]."),
    fill("White blood cells make [antibodies] and antitoxins.")
  ]);

  topic("Coronary heart disease and treatments", [
    define("coronary arteries"), define("statins"), define("stent"), nameIt("stent"), nameIt("statins"),
    match(["coronary arteries", "statins", "stent"]),
    fill("In coronary heart disease, layers of fatty material build up inside the [coronary arteries/coronary artery]."),
    fill("Narrowed coronary arteries reduce the flow of blood, so the heart muscle gets less [oxygen]."),
    fill("Statins lower blood [cholesterol] levels."),
    fill("Faulty heart [valves/valve] can be replaced with biological or mechanical ones."),
    match([["Stent", "Keeps a narrowed artery open"], ["Statins", "Reduce cholesterol, slowing the build-up of fatty material"],
      ["Heart transplant", "Replaces a failing heart with a donor heart"], ["Artificial heart", "Keeps a patient alive while waiting for a transplant"]],
      "Match each treatment to what it does.")
  ]);

  topic("Health: communicable vs non-communicable disease", [
    define("communicable disease"), define("non-communicable diseases"), nameIt("carcinogens"), nameIt("ionising radiation"),
    match(["communicable disease", "non-communicable diseases", "carcinogens", "pathogens"]),
    fill("A [communicable] disease can be passed from one person to another."),
    fill("Heart disease and type 2 diabetes are examples of [non-communicable] diseases."),
    fill("Smoking is a risk factor for lung disease and lung [cancer]."),
    fill("Obesity is a risk factor for type [2/two] diabetes."),
    match([["Smoking", "Lung cancer"], ["Obesity", "Type 2 diabetes"], ["Too much alcohol", "Liver disease"], ["Ionising radiation", "Cancer"]],
      "Match each risk factor to a disease it is linked to.")
  ]);

  topic("Cancer: benign vs malignant tumours", [
    define("tumour"), define("benign tumours"), define("malignant tumours"), define("cancer"), nameIt("carcinogens"),
    match(["tumour", "benign tumours", "malignant tumours", "carcinogens"]),
    fill("Cancer is the result of changes in cells that lead to uncontrolled growth and [division]."),
    fill("Malignant tumour cells spread in the [blood] to other parts of the body."),
    fill("Malignant tumours form [secondary] tumours in different parts of the body."),
    fill("Benign tumours are usually contained in one area within a [membrane]."),
    fill("Ionising radiation and chemicals in tobacco smoke are examples of [carcinogens/carcinogen].")
  ]);

  topic("Plant tissues: leaf structure and transpiration", [
    define("xylem"), define("phloem"), define("transpiration"), define("translocation"),
    nameIt("stomata"), nameIt("guard cells"), nameIt("palisade mesophyll"), nameIt("spongy mesophyll"),
    match(["xylem", "phloem", "stomata", "guard cells"]),
    match(["palisade mesophyll", "spongy mesophyll", "epidermal", "transpiration"]),
    order("Put the steps of the transpiration stream in order, starting in the soil.", [
      "Water enters root hair cells by osmosis",
      "Water is pulled up the xylem from the roots in a continuous stream",
      "Water evaporates from cells inside the leaf",
      "Water vapour diffuses out of the leaf through the stomata"
    ]),
    fill("Water travels up the plant in the [xylem]; dissolved sugars travel in the [phloem]."),
    fill("The movement of sugars through the phloem is called [translocation]."),
    fill("Mineral ions enter root hair cells by [active transport]."),
    fill("The rate of transpiration increases with higher temperature, light intensity and air movement, and lower [humidity]."),
    fill("Stomata are opened and closed by [guard cells/guard cell].")
  ]);

  // ---------- 4.3 Infection and Response ----------
  topic("Pathogens: bacteria, viruses, fungi, protists", [
    define("pathogens"), define("virus"), nameIt("pathogens"), nameIt("communicable disease"),
    match(["pathogens", "virus", "bacteria", "communicable disease"]),
    fill("Viruses can only reproduce inside living [cells/cell]."),
    fill("Bacteria may produce [toxins/toxin] that damage tissues and make us feel ill."),
    fill("Pathogens may be bacteria, viruses, protists or [fungi/fungus]."),
    fill("Pathogens can spread by direct contact, by water or by [air]."),
    match([["Virus", "Reproduces inside cells, damaging them"], ["Bacterium", "Single-celled prokaryote that may release toxins"],
      ["Fungus", "Can grow thread-like hyphae, e.g. rose black spot"], ["Protist", "Single-celled eukaryote, e.g. the cause of malaria"]],
      "Match each type of pathogen to its description.")
  ]);

  topic("Examples of communicable diseases", [
    nameIt("sexually transmitted disease (STD)"),
    match([["Measles", "Virus"], ["Salmonella food poisoning", "Bacterium"], ["Rose black spot", "Fungus"], ["Malaria", "Protist"]],
      "Match each disease to the type of pathogen that causes it."),
    match([["HIV", "Virus spread by sexual contact or body fluids"], ["Gonorrhoea", "Bacterial STD, with a yellow or green discharge"],
      ["Tobacco mosaic virus", "Plant disease causing a mosaic pattern on leaves"], ["Malaria", "Spread by mosquitoes"]], "Match each disease to the right description."),
    fill("Malaria is spread by [mosquitoes/mosquito], which act as vectors."),
    fill("HIV and gonorrhoea are examples of [sexually transmitted diseases/sexually transmitted disease/STDs/STD]."),
    fill("Gonorrhoea is caused by a [bacterium/bacteria] and was treated with penicillin."),
    fill("Measles is spread by inhaling [droplets] from sneezes and coughs."),
    fill("Salmonella food poisoning is spread by bacteria in food or food prepared in [unhygienic] conditions.")
  ]);

  topic("Human defence systems: non-specific (skin, mucus, stomach acid)", [
    match([["Skin", "A barrier; also makes antimicrobial secretions"], ["Nose", "Hairs and mucus trap particles"],
      ["Trachea and bronchi", "Cilia move mucus up to the throat"], ["Stomach", "Hydrochloric acid kills pathogens"]],
      "Match each part of the body to how it stops pathogens."),
    fill("The skin acts as a [barrier] to pathogens."),
    fill("Mucus in the airways [traps/trap] pathogens."),
    fill("Tiny hairs called [cilia] move mucus up to the throat to be swallowed."),
    fill("The stomach makes hydrochloric [acid], which kills pathogens."),
    fill("If a pathogen gets past these defences, the [immune] system attacks it.")
  ]);

  topic("The immune response: white blood cells, antibodies", [
    define("white blood cells"), nameIt("white blood cells"),
    match([["Phagocytosis", "White blood cells engulf and digest pathogens"], ["Antibodies", "Are specific to the antigens on a pathogen and target it for destruction"],
      ["Antitoxins", "Neutralise the toxins released by bacteria"]], "Match each defence to how white blood cells use it."),
    fill("White blood cells engulf and digest pathogens by [phagocytosis]."),
    fill("[Antibodies/antibody] are specific to the antigens on a pathogen."),
    fill("[Antitoxins/antitoxin] neutralise the toxins released by bacteria."),
    fill("The proteins on the surface of a pathogen are called [antigens/antigen].")
  ]);

  topic("Vaccination and herd immunity", [
    define("vaccine"), nameIt("vaccine"),
    order("Put the steps of how vaccination works in order.", [
      "Dead or inactive pathogens are injected",
      "White blood cells (lymphocytes) make antibodies against their antigens",
      "Memory cells remain in the blood",
      "If the live pathogen enters later, antibodies are made faster and in larger amounts",
      "The person does not become ill"
    ]),
    fill("A vaccine contains [dead] or inactive forms of a pathogen."),
    fill("After vaccination, [memory] cells remain in the blood."),
    fill("If a large proportion of people are vaccinated, the spread of the pathogen is reduced. This is called [herd immunity]."),
    fill("The secondary response to a pathogen is [faster/quicker] and produces more antibodies.")
  ]);

  topic("Antibiotics: how they work and resistance", [
    define("Penicillium"), nameIt("Penicillium"),
    fill("Antibiotics kill infective [bacteria/bacterium] inside the body."),
    fill("Antibiotics cannot kill [viruses/virus], which live and reproduce inside cells."),
    fill("Penicillin was discovered by Alexander [Fleming]."),
    fill("Painkillers treat the [symptoms/symptom] of a disease but do not kill the pathogen."),
    fill("Overusing antibiotics has led to [resistant] strains of bacteria such as MRSA."),
    order("Put the steps of how antibiotic resistance spreads in order.", [
      "A mutation makes one bacterium resistant to an antibiotic",
      "The antibiotic kills the non-resistant bacteria",
      "The resistant bacterium survives and reproduces",
      "The population of resistant bacteria grows"
    ]),
    match([["Antibiotic", "Kills bacteria inside the body"], ["Painkiller", "Relieves symptoms but does not kill pathogens"],
      ["Penicillium", "The mould penicillin comes from"], ["Resistant bacteria", "Bacteria that are not killed by an antibiotic"]], "Match each word to its description.")
  ]);

  topic("Drug development: clinical trials, double-blind", [
    define("clinical trials"), define("placebo"), define("preclinical testing"), nameIt("placebo"),
    order("Put the stages of developing a new drug in order.", [
      "Preclinical testing in the lab on cells, tissues and live animals",
      "Clinical trials with very low doses on healthy volunteers, to check safety",
      "The drug is given to patient volunteers to find the optimum dose",
      "Double-blind trials with a placebo",
      "Results are peer reviewed before publication"
    ]),
    match(["clinical trials", "placebo", "preclinical testing"]),
    fill("New drugs are tested for toxicity, efficacy and [dose]."),
    fill("In a [double-blind/double blind] trial, neither the patients nor the doctors know who has the drug."),
    fill("Checking of results by other scientists is called [peer] review."),
    fill("Digitalis comes from foxgloves and aspirin comes from [willow] trees.")
  ]);

  topic("Monoclonal antibodies: production and uses", [
    define("hybridomas"), nameIt("hybridomas"),
    order("Put the steps of producing monoclonal antibodies in order.", [
      "A mouse is injected with an antigen so its lymphocytes make the specific antibody",
      "The lymphocytes are fused with a tumour cell to make a hybridoma cell",
      "The hybridoma cells divide rapidly and each makes the same antibody",
      "The antibodies are collected and purified"
    ]),
    fill("Monoclonal antibodies come from a single clone of [cells/cell]."),
    fill("A lymphocyte is fused with a [tumour/myeloma/cancer] cell to make a hybridoma."),
    fill("Monoclonal antibodies are used in [pregnancy] tests."),
    fill("Monoclonal antibodies can carry drugs straight to [cancer] cells."),
    match([["Pregnancy tests", "Detect the hormone HCG in urine"], ["Diagnosis", "Find pathogens or measure hormone levels in blood"],
      ["Research", "Carry a fluorescent dye to specific molecules in cells, showing where they are"], ["Treating cancer", "Carry a drug or toxin to cancer cells"]],
      "Match each use of monoclonal antibodies to how it works.")
  ]);

  topic("Plant disease: detection and defence", [
    define("aphids"), define("chlorosis"), nameIt("chlorosis"), nameIt("aphids"),
    match([["Stunted growth", "Lack of nitrate ions"], ["Chlorosis", "Lack of magnesium ions"], ["Spots on leaves", "Fungal disease such as rose black spot"],
      ["Mosaic pattern on leaves", "Tobacco mosaic virus"]], "Match each sign of disease to its cause."),
    fill("Plants need nitrate ions to make [proteins/protein]; without them growth is stunted."),
    fill("Plants need [magnesium] ions to make chlorophyll."),
    fill("Aphids are insects that feed on the [phloem]."),
    match([["Cellulose cell walls", "Physical defence"], ["Thorns", "Mechanical defence"], ["Antibacterial chemicals", "Chemical defence"]],
      "Match each plant defence to its type.")
  ]);

  // ---------- 4.4 Bioenergetics ----------
  topic("Photosynthesis equation (word and symbol)", [
    define("photosynthesis"), define("endothermic reaction"), nameIt("chlorophyll"), nameIt("photosynthesis"),
    fill("carbon dioxide + water → [glucose] + oxygen"),
    fill("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6[O₂/O2]"),
    fill("Photosynthesis is an [endothermic] reaction: energy is transferred from the environment."),
    fill("Light energy is absorbed by the green pigment [chlorophyll]."),
    fill("Photosynthesis takes place in the [chloroplasts/chloroplast]."),
    match([["Starch", "Insoluble glucose store"], ["Cellulose", "Strengthens cell walls"], ["Amino acids", "Made from glucose and nitrate ions, then used to build proteins"], ["Lipids", "Fat or oil for storage"]],
      "Match each use of glucose in a plant to its description."),
    order("Put these steps of photosynthesis in order.", [
      "Chlorophyll absorbs light energy",
      "Carbon dioxide and water are converted into glucose and oxygen",
      "The glucose is used for respiration, or converted to starch, cellulose, lipids or amino acids"
    ])
  ]);

  topic("Adaptations of the leaf for photosynthesis", [
    define("palisade mesophyll"), define("spongy mesophyll"), define("stomata"), nameIt("guard cells"),
    match(["palisade mesophyll", "spongy mesophyll", "stomata", "guard cells"]),
    fill("Leaves are broad and flat to give a large [surface area] to absorb light."),
    fill("The palisade cells contain many [chloroplasts/chloroplast]."),
    fill("Air spaces in the spongy mesophyll let [carbon dioxide/CO2] diffuse to the cells."),
    fill("Carbon dioxide enters the leaf through the [stomata/stoma]."),
    fill("Veins containing [xylem] bring water to the leaf.")
  ]);

  topic("Limiting factors: light, CO₂, temperature", [
    define("limiting factors"), nameIt("limiting factors"),
    fill("The rate of photosynthesis is limited by light intensity, carbon dioxide concentration, [temperature] and the amount of chlorophyll."),
    fill("Whichever factor is in [shortest] supply is the limiting factor."),
    fill("At very high temperatures the enzymes involved are [denatured], so the rate falls."),
    fill("Farmers can add paraffin heaters to greenhouses to raise the temperature and the [carbon dioxide/CO2] concentration."),
    match([["Light intensity", "More light means more energy for photosynthesis"], ["Carbon dioxide", "A raw material of photosynthesis"],
      ["Temperature", "Affects the enzymes that control photosynthesis"], ["Chlorophyll", "Too little (e.g. from chlorosis) means less light is absorbed"]],
      "Match each limiting factor to why it affects the rate.")
  ]);

  topic("Limiting factors in depth: interactions, the inverse square law and greenhouse costs", [
    fill("light intensity ∝ 1 ÷ [distance²/distance squared/d²/d^2]"),
    { question: "A lamp is moved from 10 cm to 20 cm from a plant. Light intensity becomes what fraction of what it was?", type: "fraction", marks: 2, answer: "1/4" },
    { question: "A lamp is moved from 30 cm to 10 cm from a plant. How many times greater is the light intensity?", type: "number", marks: 2, answer: "9" },
    fill("On a graph where the rate stops rising as light increases, [light intensity/light] is no longer the limiting factor."),
    fill("Greenhouse owners must balance the extra cost of heating and lighting with the extra [profit/income/yield] from faster growth."),
    fill("Doubling the distance from a lamp makes the light intensity a [quarter]."),
    match([["Rising part of the graph", "Light intensity is limiting"], ["Flat part of the graph", "Another factor (CO₂ or temperature) is limiting"],
      ["Higher plateau with more CO₂", "Carbon dioxide was limiting before"]], "Match each part of a rate graph to what it shows.")
  ]);

  topic("Required practical: investigating the rate of photosynthesis", [
    order("Put the steps of the pondweed practical in order.", [
      "Place pondweed in a test tube of sodium hydrogencarbonate solution",
      "Place a lamp at a set distance from the pondweed",
      "Leave it for a few minutes to adjust to the light",
      "Count the oxygen bubbles given off in one minute",
      "Repeat with the lamp at different distances"
    ]),
    fill("The gas given off by the pondweed is [oxygen/O2]."),
    fill("Sodium hydrogencarbonate solution gives the pondweed plenty of [carbon dioxide/CO2]."),
    fill("The independent variable is the [distance] of the lamp from the pondweed."),
    fill("A beaker of water between the lamp and the plant stops the lamp changing the [temperature]."),
    fill("As the lamp moves closer, the number of bubbles per minute [increases/goes up/rises].")
  ]);

  topic("Aerobic respiration equation", [
    define("aerobic respiration"), define("exothermic reaction"), define("metabolism"), nameIt("mitochondria"),
    fill("glucose + oxygen → carbon dioxide + [water]"),
    fill("C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6[H₂O/H2O]"),
    fill("Aerobic respiration takes place in the [mitochondria/mitochondrion]."),
    fill("Respiration is an [exothermic] reaction: it transfers energy to the environment."),
    fill("Organisms need energy for chemical reactions, movement and keeping [warm]."),
    match(["aerobic respiration", "exothermic reaction", "metabolism", "glucose"])
  ]);

  topic("Anaerobic respiration: fermentation, muscle fatigue", [
    define("anaerobic respiration"), nameIt("lactic acid"),
    fill("In muscles: glucose → [lactic acid]"),
    fill("In plants and yeast: glucose → [ethanol] + carbon dioxide"),
    fill("Anaerobic respiration in yeast is called [fermentation]."),
    fill("Anaerobic respiration releases [less] energy than aerobic respiration."),
    fill("Fermentation is used to make bread and [alcoholic drinks/alcohol/beer/wine]."),
    match([["Aerobic respiration", "Uses oxygen and releases the most energy"], ["Anaerobic respiration in muscles", "Makes lactic acid"],
      ["Fermentation in yeast", "Makes ethanol and carbon dioxide"]], "Match each type of respiration to what it does.")
  ]);

  topic("Exercise: effects on breathing rate and heart rate", [
    define("oxygen debt"), nameIt("glycogen"), nameIt("oxygen debt"),
    order("Put the steps of what happens during and after hard exercise in order.", [
      "Heart rate, breathing rate and breath volume increase to supply more oxygen and glucose to the muscles",
      "Not enough oxygen is supplied, so muscles respire anaerobically",
      "Lactic acid builds up, causing muscle fatigue",
      "After exercise, the oxygen debt is repaid as lactic acid is taken to the liver"
    ]),
    fill("During exercise, heart rate and [breathing] rate increase."),
    fill("Muscles store glucose as [glycogen]."),
    fill("Lactic acid building up in the muscles causes [fatigue]."),
    match(["oxygen debt", "lactic acid", "glycogen"])
  ]);

  topic("Oxygen debt: lactic acid converted back to glucose in the liver", [
    define("oxygen debt"), nameIt("oxygen debt"),
    order("Put the steps of repaying an oxygen debt in order.", [
      "Lactic acid builds up in the muscles during hard exercise",
      "Blood carries the lactic acid to the liver",
      "The liver converts the lactic acid back into glucose",
      "Extra oxygen breathed in after exercise is used to complete this"
    ]),
    fill("Blood carries lactic acid to the [liver]."),
    fill("In the liver, lactic acid is converted back into [glucose]."),
    fill("After exercise, you keep breathing hard to take in [oxygen] to repay the debt."),
    fill("The oxygen debt is the extra oxygen needed to react with the accumulated [lactic acid].")
  ]);

  // ======================= PAPER 2 =======================
  // ---------- 4.5 Homeostasis and Response ----------
  topic("Homeostasis: definition and importance", [
    define("homeostasis"), define("receptors"), define("effectors"), nameIt("homeostasis"), nameIt("stimuli"), nameIt("coordination centres"),
    order("Put the parts of an automatic control system in order.", ["Stimulus", "Receptor", "Coordination centre", "Effector", "Response"]),
    match(["receptors", "coordination centres", "effectors", "stimuli"]),
    fill("Homeostasis keeps internal conditions at their [optimum] for enzymes and cell functions."),
    fill("Homeostasis controls blood glucose concentration, body [temperature] and water levels."),
    fill("Control systems can involve nervous responses or [chemical/hormonal] responses.")
  ]);

  topic("The nervous system: CNS, neurones, synapses", [
    define("central nervous system (CNS)"), define("neurones"), nameIt("nerve"), nameIt("sensory neurone"), nameIt("motor neurones"),
    match(["central nervous system (CNS)", "neurones", "nerve", "sensory neurone", "motor neurones"]),
    fill("The CNS is made up of the brain and the spinal [cord]."),
    fill("The gap between two neurones is called a [synapse]."),
    fill("At a synapse, a [chemical] diffuses across the gap to the next neurone."),
    fill("Motor neurones carry impulses from the CNS to [effectors/effector]."),
    order("Put the pathway of a nervous response in order.", ["Receptor", "Sensory neurone", "CNS", "Motor neurone", "Effector"])
  ]);

  topic("Reflex arc: sensory, relay, motor neurones", [
    define("reflexes"), define("reflex arcs"), nameIt("reflexes"),
    order("Put the steps of a reflex arc in order.", [
      "A stimulus is detected by a receptor",
      "An impulse travels along a sensory neurone to the CNS",
      "It crosses a synapse to a relay neurone",
      "It crosses another synapse to a motor neurone",
      "The impulse reaches the effector, which produces a rapid, automatic response"
    ]),
    fill("Reflexes are rapid and [automatic] and do not involve conscious thought."),
    fill("In a reflex arc, the relay neurone is in the [CNS/spinal cord/central nervous system]."),
    match(["sensory neurone", "motor neurones", "reflexes", "effectors"]),
    { text: "The diagram shows the pathway of a reflex action.", diagram: REFLEX, always: true, parts: [
      { question: "Name neurone P.", type: "word", answer: "sensory neurone/sensory" },
      { question: "Name neurone Q.", type: "word", answer: "motor neurone/motor" },
      { question: "Give an example of an effector.", type: "word", answer: "muscle/gland/muscles/glands" }
    ] }
  ]);

  topic("Required practical: measuring reaction time", [
    order("Put the steps of the ruler-drop test in order.", [
      "Person A holds a ruler vertically above person B's open hand, with 0 cm level with B's thumb",
      "Person A drops the ruler without warning",
      "Person B catches the ruler as quickly as possible",
      "Read the distance the ruler fell, level with the top of B's thumb",
      "Repeat several times and work out a mean, then convert distance to time using a table"
    ]),
    fill("The shorter the distance the ruler falls, the [faster/quicker/shorter] the reaction time."),
    fill("Repeating the test and calculating a [mean/average] makes the results more reliable."),
    fill("Caffeine is a stimulant that may [decrease/reduce/shorten] reaction time."),
    { question: "Three catches give 12 cm, 15 cm and 18 cm. What is the mean distance, in cm?", type: "number", answer: "15" },
    fill("The same hand should be used each time to make it a [fair] test.")
  ]);

  topic("The brain: regions and functions", [
    define("cerebral cortex"), define("cerebellum"), define("medulla"),
    match(["cerebral cortex", "cerebellum", "medulla"]),
    fill("The [cerebral cortex] is linked with consciousness, memory and language."),
    fill("The [cerebellum] coordinates muscular activity and balance."),
    fill("The [medulla] controls unconscious activities such as heart rate and breathing."),
    fill("Brain damage can be studied using [MRI/CT/fMRI] scans."),
    fill("The brain is hard to treat because damaged nerve tissue does not [repair] easily and treatment can easily damage other areas.")
  ]);

  topic("The eye: structure and function, accommodation", [
    define("myopia"), define("hyperopia"), nameIt("ciliary muscles"), nameIt("suspensory ligaments"),
    match(["ciliary muscles", "suspensory ligaments", "myopia", "hyperopia"]),
    order("Put the steps of focusing on a near object in order.", [
      "The ciliary muscles contract",
      "The suspensory ligaments slacken",
      "The lens becomes thicker",
      "Light is refracted more"
    ]),
    order("Put the steps of focusing on a distant object in order.", [
      "The ciliary muscles relax",
      "The suspensory ligaments tighten",
      "The lens is pulled thin",
      "Light is refracted less"
    ]),
    match([["Retina", "Contains light receptor cells"], ["Cornea", "Transparent outer layer that refracts light"], ["Iris", "Controls how much light enters the pupil"],
      ["Optic nerve", "Carries impulses to the brain"]], "Match each part of the eye to its function."),
    fill("Short-sightedness is called [myopia]."),
    fill("Long-sightedness is called [hyperopia]."),
    fill("Myopia and hyperopia can be corrected with glasses, contact lenses or [laser] surgery.")
  ]);

  topic("Thermoregulation: vasodilation, sweating, shivering", [
    define("thermoregulatory centre"), define("vasodilation"), define("vasoconstriction"), nameIt("thermoregulatory centre"),
    match(["thermoregulatory centre", "vasodilation", "vasoconstriction"]),
    fill("When too hot, [vasodilation] brings more blood to the skin surface so more heat is lost."),
    fill("When too hot, sweat [evaporates] from the skin, transferring energy away."),
    fill("When too cold, [vasoconstriction] reduces blood flow to the skin."),
    fill("[Shivering] is muscle contraction that releases heat from respiration."),
    fill("The thermoregulatory centre monitors the temperature of the [blood]."),
    match([["Too hot", "Sweating increases"], ["Too cold", "Vasoconstriction"], ["Too cold", "Shivering"], ["Too hot", "Vasodilation"]],
      "Match each response to when it happens.")
  ]);

  topic("Hormones: endocrine glands and target organs", [
    define("endocrine system"), define("hormones"), define("pituitary gland"), nameIt("adrenaline"), nameIt("pituitary gland"),
    match([["Pituitary gland", "The 'master gland' in the brain"], ["Pancreas", "Makes insulin and glucagon"], ["Thyroid", "Makes thyroxine"],
      ["Adrenal glands", "Make adrenaline"], ["Ovaries", "Make oestrogen"], ["Testes", "Make testosterone"]],
      "Match each gland to what it does or makes."),
    fill("Hormones are carried to their target organs in the [blood/bloodstream]."),
    fill("Compared with the nervous system, hormones act more [slowly] but their effects last longer."),
    fill("The pituitary gland is often called the [master] gland."),
    fill("Adrenaline prepares the body for [fight or flight/flight or fight]."),
    match(["endocrine system", "hormones", "adrenaline", "testosterone"])
  ]);

  topic("Blood glucose control: insulin, diabetes", [
    define("insulin"), nameIt("glycogen"),
    order("Put the steps of controlling a high blood glucose level in order.", [
      "Blood glucose rises after a meal",
      "The pancreas releases insulin",
      "Insulin makes cells take up glucose from the blood",
      "The liver and muscles convert glucose to glycogen for storage",
      "Blood glucose falls back to normal"
    ]),
    fill("Blood glucose is monitored and controlled by the [pancreas]."),
    fill("Insulin causes glucose to move from the blood into the [cells/cell]."),
    fill("In liver and muscle cells, excess glucose is converted to [glycogen] for storage."),
    match(["insulin", "glycogen", "type 1 diabetes", "type 2 diabetes"])
  ]);

  topic("Type 1 vs Type 2 diabetes: causes and treatments", [
    define("type 1 diabetes"), define("type 2 diabetes"), nameIt("type 1 diabetes"), nameIt("type 2 diabetes"),
    match(["type 1 diabetes", "type 2 diabetes"].concat([["Insulin injections", "The main treatment for type 1 diabetes"], ["Diet and exercise", "The first treatment for type 2 diabetes"]])),
    fill("Type 1 diabetes is treated with [insulin] injections."),
    fill("Type 2 diabetes is first treated with a carbohydrate-controlled diet and [exercise]."),
    fill("[Obesity] is a risk factor for type 2 diabetes."),
    fill("In type 1 diabetes, the [pancreas] fails to produce enough insulin.")
  ]);

  topic("Glucagon and insulin: negative feedback", [
    define("glucagon"),
    order("Put the steps of controlling a low blood glucose level in order.", [
      "Blood glucose falls too low",
      "The pancreas releases glucagon",
      "Glucagon makes the liver convert glycogen back into glucose",
      "The glucose is released into the blood",
      "Blood glucose rises back to normal"
    ]),
    fill("If blood glucose is too high, the pancreas releases [insulin]; if too low, it releases [glucagon]."),
    fill("Glucagon makes the liver convert glycogen into [glucose]."),
    fill("Insulin and glucagon work together by [negative] feedback to keep blood glucose steady."),
    match([["Insulin", "Lowers blood glucose"], ["Glucagon", "Raises blood glucose"], ["Glycogen", "Stored form of glucose in liver and muscles"]],
      "Match each word to what it does.")
  ]);

  topic("Osmoregulation: kidneys and water balance", [
    define("urea"), define("dialysis"), define("selective reabsorption"), nameIt("urea"), nameIt("dialysis"),
    match(["urea", "dialysis", "selective reabsorption"]),
    order("Put the steps of how a kidney makes urine in order.", [
      "The kidneys filter the blood",
      "Glucose, some ions and the water the body needs are selectively reabsorbed",
      "Urea, excess ions and excess water are left in the filtrate",
      "Urine is stored in the bladder"
    ]),
    fill("Urea is made in the [liver] from excess amino acids."),
    fill("Water leaves the body from the lungs when we [exhale/breathe out]."),
    fill("If cells lose or gain too much water by [osmosis], they do not work efficiently."),
    fill("Kidney failure can be treated by dialysis or a kidney [transplant].")
  ]);

  topic("Osmoregulation in depth: urea formation and ADH", [
    define("ADH"), nameIt("ADH"), nameIt("urea"),
    order("Put the steps of how ADH controls water in the body in order.", [
      "The blood becomes too concentrated",
      "The pituitary gland releases more ADH",
      "ADH makes the kidney tubules more permeable",
      "More water is reabsorbed into the blood",
      "A small volume of concentrated urine is produced"
    ]),
    order("Put the steps of urea formation in order.", [
      "Excess amino acids are taken to the liver",
      "They are deaminated: the amino group is removed as ammonia",
      "Ammonia is converted into urea",
      "Urea is carried in the blood to the kidneys and removed in urine"
    ]),
    fill("ADH is released by the [pituitary gland/pituitary]."),
    fill("If the blood is too dilute, [less] ADH is released."),
    fill("Removing the amino group from amino acids is called [deamination]."),
    fill("Ammonia is toxic, so it is converted into [urea].")
  ]);

  topic("Hormones in reproduction: FSH, LH, oestrogen and progesterone", [
    define("follicle stimulating hormone (FSH)"), define("oestrogen"), define("testosterone"), nameIt("ovulation"), nameIt("ovaries"),
    match(["follicle stimulating hormone (FSH)", "oestrogen", "testosterone", "ovulation"]),
    match([["FSH", "Makes an egg mature in the ovary"], ["LH", "Triggers ovulation"], ["Oestrogen", "Builds up the uterus lining"], ["Progesterone", "Maintains the uterus lining"]],
      "Match each hormone to its role in the menstrual cycle."),
    fill("The main female reproductive hormone is [oestrogen]; the main male one is [testosterone]."),
    fill("Testosterone is made by the [testes/testis]."),
    fill("Ovulation is the release of an egg from the [ovary/ovaries] about every 28 days."),
    fill("FSH and LH are released by the [pituitary gland/pituitary].")
  ]);

  topic("How hormones interact to control the menstrual cycle", [
    order("Put the stages of the menstrual cycle in order.", [
      "FSH from the pituitary makes an egg mature in the ovary and stimulates oestrogen production",
      "Oestrogen from the ovaries builds up the uterus lining and stimulates LH release",
      "LH from the pituitary triggers ovulation around day 14",
      "Progesterone from the ovaries maintains the uterus lining",
      "If progesterone levels fall, the lining breaks down (menstruation)"
    ]),
    fill("Oestrogen [inhibits/stops] the release of FSH."),
    fill("A surge of [LH] triggers ovulation."),
    fill("Ovulation happens around day [14] of the cycle."),
    fill("[Progesterone] keeps the uterus lining thick."),
    fill("Menstruation happens when the level of [progesterone] falls.")
  ]);

  topic("Contraception: hormonal and non-hormonal", [
    define("contraception"), nameIt("contraception"),
    match([["Oral contraceptive (the pill)", "Contains hormones that stop FSH being released, so no eggs mature"], ["Condom", "A barrier that stops sperm reaching the egg"],
      ["Spermicidal agent", "Kills or disables sperm"], ["Sterilisation", "Surgical method that is permanent"]], "Match each method to how it works."),
    fill("Oral contraceptives contain hormones that stop [FSH] being released, so no eggs mature."),
    fill("Condoms and diaphragms are [barrier] methods."),
    fill("An intrauterine device (IUD) stops an embryo [implanting] in the uterus."),
    fill("Condoms also protect against [sexually transmitted diseases/sexually transmitted disease/STDs/STD/STIs]."),
    match([["Hormonal", "Contraceptive implant"], ["Barrier", "Diaphragm"], ["Surgical", "Sterilisation"], ["Natural method", "Avoiding sex around the time of ovulation"]],
      "Match each type of contraception to an example.")
  ]);

  topic("Fertility treatments: IVF, fertility drugs", [
    order("Put the steps of IVF in order.", [
      "The mother is given FSH and LH to make several eggs mature",
      "The eggs are collected from the mother",
      "The eggs are fertilised by sperm from the father in the lab",
      "The fertilised eggs develop into embryos",
      "One or two embryos are inserted into the mother's uterus"
    ]),
    fill("Fertility drugs contain FSH and [LH] to stimulate ovulation."),
    fill("IVF stands for [in vitro fertilisation/in vitro fertilization]."),
    fill("IVF can lead to multiple [births/pregnancies/birth]."),
    fill("In IVF, the early embryos are a tiny ball of [cells/cell]."),
    match([["FSH and LH", "Make eggs mature"], ["Collecting eggs", "Removes eggs from the mother's ovaries"], ["Lab fertilisation", "Eggs mixed with sperm"], ["Implantation", "Embryos placed in the uterus"]],
      "Match each part of IVF to what happens.")
  ]);

  topic("Plant hormones: auxin, gravitropism, phototropism", [
    define("auxin"), define("phototropism"), define("gravitropism"), nameIt("gibberellins"), nameIt("tropism"),
    match(["auxin", "gibberellins", "phototropism", "gravitropism"]),
    order("Put the steps of phototropism in order.", [
      "Light shines on a shoot from one side",
      "Auxin moves to the shaded side of the shoot",
      "Shoot cells on the shaded side grow faster",
      "The shoot bends towards the light"
    ]),
    fill("In roots, auxin collects on the [lower/bottom] side and slows growth, so the root bends downwards."),
    fill("[Gibberellins/Gibberellin] are important in starting seed germination."),
    fill("Plants produce the gas [ethene] to control the ripening of fruit."),
    fill("Auxins are used as [weedkillers/weed killers/weedkiller] and rooting powders.")
  ]);

  // ---------- 4.6 Inheritance, Variation and Evolution ----------
  topic("Sexual vs asexual reproduction: advantages", [
    define("sexual reproduction"), define("asexual reproduction"), define("zygote"), nameIt("cloning"), nameIt("tissue culture"), nameIt("sperm"),
    match(["sexual reproduction", "asexual reproduction", "zygote", "cloning"]),
    fill("Sexual reproduction involves the fusion of male and female [gametes/gamete]."),
    fill("Asexual reproduction produces offspring that are genetically [identical] to the parent."),
    fill("Asexual reproduction involves only [mitosis]; gametes are made by meiosis."),
    fill("Sexual reproduction produces [variation] in the offspring."),
    match([["Sexual reproduction", "Produces variation, so a species can survive changes in the environment"], ["Asexual reproduction", "Only one parent is needed, so it's faster"]],
      "Match each type of reproduction to an advantage.")
  ]);

  topic("Meiosis: stages and importance of variation", [
    define("meiosis"), nameIt("meiosis"),
    order("Put the stages of meiosis in order.", [
      "The DNA is copied, so each chromosome has two copies",
      "The cell divides twice",
      "Four gametes are formed, each with a single set of chromosomes",
      "At fertilisation, two gametes fuse and the full number of chromosomes is restored"
    ]),
    fill("Meiosis makes [four/4] gametes from each cell."),
    fill("Each gamete has [half] the normal number of chromosomes."),
    fill("All the gametes made by meiosis are genetically [different]."),
    fill("Meiosis happens in the [reproductive organs/testes and ovaries/ovaries and testes/sex organs]."),
    match([["Mitosis", "Makes two identical body cells"], ["Meiosis", "Makes four genetically different gametes"], ["Fertilisation", "Two gametes fuse to form a zygote"]],
      "Match each process to what it does.")
  ]);

  topic("DNA structure and chromosome pairs (basic)", [
    define("bases (DNA)"), nameIt("sex chromosomes"),
    fill("DNA is a polymer made of two strands forming a double [helix]."),
    fill("DNA is found in structures called [chromosomes/chromosome]."),
    fill("A [gene] is a small section of DNA that codes for a particular protein."),
    fill("The entire genetic material of an organism is its [genome]."),
    fill("Human body cells contain [23] pairs of chromosomes."),
    order("Put these in order, from largest to smallest.", ["Nucleus", "Chromosome", "Gene", "Base"])
  ]);

  topic("DNA structure in detail (nucleotides) and protein synthesis", [
    define("nucleotide"), define("bases (DNA)"), nameIt("nucleotide"),
    fill("A nucleotide is made of a sugar, a [phosphate] group and a base."),
    fill("Base A always pairs with base [T]."),
    fill("Base C always pairs with base [G]."),
    fill("A sequence of [three/3] bases codes for one amino acid."),
    order("Put the steps of protein synthesis in order.", [
      "A copy of the gene is made and leaves the nucleus",
      "It attaches to a ribosome in the cytoplasm",
      "Carrier molecules bring the matching amino acids",
      "The amino acids join in the right order to form a protein",
      "The protein chain folds into its unique shape"
    ]),
    match(["nucleotide", "bases (DNA)", "ribosomes"])
  ]);

  topic("How mutations affect the protein made", [
    define("mutation"), nameIt("mutation"),
    order("Put the steps of how a mutation can stop a protein working in order.", [
      "A mutation changes the sequence of bases in a gene",
      "A different amino acid may be coded for",
      "The protein folds into a different shape",
      "An enzyme's active site may change, so the substrate no longer fits"
    ]),
    fill("A mutation is a change in the [DNA/genetic material/base sequence]."),
    fill("Most mutations have [no] effect on the phenotype."),
    fill("A change in the protein's shape can stop an enzyme's [active site] working."),
    fill("Mutations happen continuously and [randomly/at random]."),
    fill("Some mutations affect [non-coding] DNA that switches genes on and off.")
  ]);

  topic("Genes, alleles: dominant and recessive", [
    define("alleles"), define("genotype"), define("phenotype"), define("dominant allele"),
    match(["alleles", "genotype", "phenotype", "dominant allele"]),
    match(["homozygote", "heterozygote", "recessive"]),
    fill("An individual with two identical alleles is a [homozygote/homozygous]."),
    fill("An individual with two different alleles is a [heterozygote/heterozygous]."),
    fill("A [recessive] allele only shows if two copies are present."),
    fill("A dominant allele is shown with a [capital] letter."),
    { question: "What is the phenotype of an individual with genotype Bb, if B (brown eyes) is dominant to b (blue eyes)?", type: "word", answer: "brown/brown eyes" }
  ]);

  topic("Punnett squares and probability of inheritance", [
    define("Punnett square diagram"), nameIt("Punnett square diagram"),
    { question: "Two parents are both Bb. What fraction of the offspring are expected to be bb?", type: "fraction", marks: 2, answer: "1/4" },
    { question: "A parent Bb has children with a parent bb. What is the probability that a child is bb? Give a fraction.", type: "fraction", marks: 2, answer: "1/2" },
    { question: "Two parents are both Bb. What percentage of the offspring are expected to have the dominant phenotype?", type: "number", marks: 2, answer: "75" },
    { question: "Parents BB and bb have children. What percentage of the children will be Bb?", type: "number", answer: "100" },
    fill("A cross between two heterozygous parents gives a ratio of 3 dominant : [1] recessive."),
    order("Put the steps of using a Punnett square in order.", [
      "Write down the genotype of each parent",
      "Write each parent's possible gametes along the sides of the grid",
      "Fill in each box by combining the alleles",
      "Work out the ratio or probability of each genotype and phenotype"
    ])
  ]);

  topic("Constructing Punnett squares from scratch", [
    { question: "Cystic fibrosis is recessive (f). Two carrier parents (Ff) have a child. What is the probability the child has cystic fibrosis? Give a fraction.", type: "fraction", marks: 2, answer: "1/4" },
    { question: "Two carriers (Ff) have a child. What is the probability the child is a carrier? Give a fraction.", type: "fraction", marks: 2, answer: "1/2" },
    { question: "Polydactyly is dominant (D). A parent Dd has children with a parent dd. What percentage of children are expected to have polydactyly?", type: "number", marks: 2, answer: "50" },
    { question: "Two parents are both Tt. Give the expected ratio of TT : Tt : tt.", type: "ratio", marks: 2, answer: "1:2:1" },
    { question: "Out of 200 offspring of a Bb × Bb cross, how many are expected to be bb?", type: "number", marks: 2, answer: "50" },
    order("Put the steps of building a genetic cross in order.", [
      "Choose letters for the alleles (capital for dominant)",
      "Write the genotypes of both parents",
      "Show the gametes each parent can make",
      "Combine the gametes in a Punnett square",
      "State the probability, ratio or percentage asked for"
    ])
  ]);

  topic("Inherited disorders: cystic fibrosis, polydactyly", [
    define("cystic fibrosis"), define("polydactyly"), define("carriers"), nameIt("carriers"),
    match(["cystic fibrosis", "polydactyly", "carriers"]),
    fill("Cystic fibrosis is caused by a [recessive] allele."),
    fill("Polydactyly is caused by a [dominant] allele."),
    fill("Cystic fibrosis is a disorder of [cell membranes/cell membrane]."),
    fill("Embryos can be screened for genetic disorders; this raises economic, social and [ethical] issues."),
    fill("Polydactyly causes extra fingers or [toes/toe].")
  ]);

  topic("Sex determination: X and Y chromosomes", [
    define("sex chromosomes"), nameIt("sex chromosomes"),
    fill("Human body cells have [23] pairs of chromosomes; one of these pairs is the sex chromosomes."),
    fill("Females have two [X] chromosomes."),
    fill("Males have one X and one [Y] chromosome."),
    { question: "What is the probability that a baby will be a boy? Give a fraction.", type: "fraction", answer: "1/2" },
    fill("The sex of a baby is decided by whether the [sperm] carries an X or a Y chromosome."),
    match([["XX", "Female"], ["XY", "Male"], ["Egg", "Always carries an X chromosome"], ["Sperm", "Carries an X or a Y chromosome"]], "Match each item to its description.")
  ]);

  topic("Variation: genetic, environmental, combination", [
    fill("Differences between individuals of the same species are called [variation]."),
    fill("Variation can be caused by genes, the [environment], or a combination of both."),
    fill("Most characteristics are a result of both genes and the [environment]."),
    fill("There is usually a lot of genetic variation within a [population]."),
    match([["Blood group", "Genetic"], ["A scar", "Environmental"], ["Height", "Genetic and environmental"], ["Eye colour", "Genetic"]].map(([a, b]) => [b, a]),
      "Match each characteristic to what causes its variation."),
    nameIt("phenotype")
  ]);

  topic("Mutations: causes and effects (basic)", [
    define("mutation"), nameIt("mutation"),
    fill("A mutation is a change in the [genetic material/DNA] of an organism."),
    fill("Most mutations have [no] effect on the phenotype."),
    fill("Mutations happen [randomly/at random] and continuously."),
    fill("Mutations are a source of new [variation]."),
    fill("Ionising radiation can increase the rate of [mutation/mutations]."),
    match(["mutation", "alleles", "natural selection"])
  ]);

  topic("Natural selection and evolution", [
    define("natural selection"), define("speciation"), define("extinction"), nameIt("natural selection"), nameIt("speciation"),
    order("Put the steps of natural selection in order.", [
      "There is variation within a population, caused by mutations",
      "Some individuals have characteristics that make them better suited to the environment",
      "These individuals are more likely to survive and reproduce",
      "They pass on the alleles for these characteristics to their offspring",
      "Over many generations, the allele becomes more common in the population"
    ]),
    match(["natural selection", "speciation", "extinction", "species"]),
    fill("The theory of evolution by natural selection was put forward by Charles [Darwin]."),
    fill("Two populations become different species when they can no longer [interbreed/breed] to produce fertile offspring.")
  ]);

  topic("Evidence for evolution: fossils, antibiotic resistance", [
    define("extinction"), nameIt("extinction"),
    fill("[Fossils/Fossil] are the remains of organisms from millions of years ago, found in rocks."),
    fill("The fossil record is incomplete because many early forms of life were [soft-bodied/soft bodied/soft]."),
    fill("Bacteria evolve quickly because they [reproduce/divide/multiply] at a fast rate."),
    fill("MRSA is a strain of bacteria that is [resistant] to antibiotics."),
    order("Put the steps of how fossils form in order.", [
      "An organism dies and is quickly buried in sediment",
      "Its hard parts are slowly replaced by minerals",
      "Layers of rock build up over millions of years",
      "The fossil is exposed by erosion and found"
    ]),
    match([["Mineralised fossil", "Bones and shells slowly replaced by minerals"], ["Trace fossil", "Footprints, burrows and root pathways"],
      ["Preserved remains", "Whole organisms kept in amber, ice or peat, where decay can't happen"]], "Match each type of fossil to how it forms.")
  ]);

  topic("Selective breeding: process and examples", [
    define("selective breeding"), nameIt("selective breeding"),
    order("Put the steps of selective breeding in order.", [
      "Choose parents with the desired characteristic",
      "Breed them together",
      "Choose the offspring with the desired characteristic and breed them",
      "Repeat over many generations until all offspring show the characteristic"
    ]),
    fill("Selective breeding is also called artificial [selection]."),
    fill("Inbreeding reduces [variation], so a population is more vulnerable to disease."),
    fill("Crops can be selectively bred for [disease] resistance."),
    match([["Dairy cows", "Bred to produce lots of milk"], ["Wheat", "Bred for high yield and disease resistance"], ["Dogs", "Bred for a gentle nature"], ["Roses", "Bred for large or unusual flowers"]],
      "Match each organism to a characteristic it has been selectively bred for.")
  ]);

  topic("Genetic engineering: what it is, GM crops, insulin", [
    define("genetic engineering"), nameIt("genetic engineering"),
    fill("Genetic engineering changes the [genome/genotype] of an organism by adding a gene from another organism."),
    fill("Bacteria have been genetically engineered to make human [insulin]."),
    fill("GM crops may be resistant to insects or [herbicides/herbicide/weedkiller]."),
    fill("Crops that have had their genes changed are called [GM/genetically modified] crops."),
    match([["GM crops", "Plants with a gene added, e.g. for pest resistance"], ["Human insulin", "Made by genetically engineered bacteria"],
      ["Gene therapy", "Using genetic engineering to treat inherited disorders"]], "Match each example to its description."),
    fill("Some people worry GM crops could affect populations of wild flowers and [insects/insect].")
  ]);

  topic("The steps of genetic engineering (enzymes, vectors)", [
    order("Put the steps of genetic engineering in order.", [
      "The required gene is cut out of an organism's DNA using enzymes",
      "It is inserted into a vector, such as a bacterial plasmid or a virus",
      "The vector puts the gene into the cells of the target organism",
      "The organism now has the useful characteristic"
    ]),
    fill("Genes are cut out using [enzymes/enzyme]."),
    fill("A [vector] carries the gene into the target cell."),
    fill("Bacterial [plasmids/plasmid] or viruses are used as vectors."),
    fill("In plants and animals, genes are put into cells at an [early] stage of development so all cells get the gene."),
    match([["Restriction enzyme", "Cuts out the gene"], ["Ligase", "Joins the gene into the vector"], ["Vector", "Carries the gene into the target cell"]],
      "Match each tool of genetic engineering to its job.")
  ]);

  topic("Classification: kingdoms, phylogenetic trees", [
    define("classification"), define("domain"), define("species"), nameIt("archaea"), nameIt("evolutionary trees"),
    order("Put the levels of Linnaeus's classification in order, from largest to smallest.", ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]),
    match(["classification", "domain", "species", "evolutionary trees"]),
    fill("The three domains are Archaea, Bacteria and [Eukaryota]."),
    fill("The three-domain system was proposed by Carl [Woese]."),
    fill("The binomial system names an organism by its genus and [species]."),
    fill("Archaea can live in [extreme] environments.")
  ]);

  // ---------- 4.7 Ecology ----------
  topic("Ecosystems: habitats, populations, communities", [
    define("community"), define("interdependence"), nameIt("community"), nameIt("interdependence"),
    match([["Habitat", "The place where an organism lives"], ["Population", "All the organisms of one species in a habitat"],
      ["Community", "The populations of different species in a habitat"], ["Ecosystem", "The community together with the non-living parts of its environment"]],
      "Match each word to its meaning."),
    order("Put these in order, from smallest to largest.", ["Individual", "Population", "Community", "Ecosystem"]),
    fill("A [stable] community is one where all the species and environmental factors are in balance."),
    fill("Organisms depend on each other for food, shelter and [pollination]; this is called interdependence.")
  ]);

  topic("Abiotic factors: temperature, light, pH, moisture", [
    fill("Abiotic factors are [non-living] factors in the environment."),
    fill("Light intensity, temperature and soil pH are examples of [abiotic] factors."),
    fill("Plants need [light] for photosynthesis."),
    fill("Aquatic animals need enough dissolved [oxygen] in the water."),
    match([["Light intensity", "Affects how fast plants photosynthesise"], ["Wind", "Affects water loss from plants"],
      ["Soil pH and minerals", "Affects which plants can grow"], ["Carbon dioxide", "Needed by plants for photosynthesis"]],
      "Match each abiotic factor to its effect."),
    fill("Moisture levels affect both plants and [animals/animal].")
  ]);

  topic("Biotic factors: predation, competition, disease", [
    define("competition"), nameIt("competition"),
    fill("Biotic factors are [living] factors in the environment."),
    fill("Plants compete for light, space, water and mineral [ions/ion]."),
    fill("Animals compete for food, mates and [territory]."),
    fill("A new [predator/pathogen] arriving can reduce the population of a species."),
    match([["Availability of food", "Biotic"], ["New pathogens", "Biotic"], ["Temperature", "Abiotic"], ["Soil pH", "Abiotic"]].map(([a, b]) => [b, a]),
      "Match each factor to whether it is biotic or abiotic.")
  ]);

  topic("Adaptations: structural, behavioural, functional", [
    define("adaptations"), define("extremophile"), nameIt("extremophile"),
    match([["Structural", "A body feature, e.g. thick fur"], ["Behavioural", "The way an organism behaves, e.g. migrating"], ["Functional", "A body process, e.g. making less urine"]],
      "Match each type of adaptation to an example."),
    fill("Organisms that live in very hot, cold or salty places are called [extremophiles/extremophile]."),
    fill("A camel's ability to produce very concentrated urine is a [functional] adaptation."),
    fill("Cacti have spines instead of leaves to reduce [water] loss."),
    fill("A large surface area to volume ratio helps animals in hot climates lose [heat].")
  ]);

  topic("Food chains and food webs", [
    define("producers"), define("primary consumer"), define("secondary consumer"), nameIt("producers"),
    match(["producers", "primary consumer", "secondary consumer"].concat([["Apex predator", "A carnivore with no predators"]])),
    order("Put this food chain in order, starting with the producer.", ["Grass", "Rabbit", "Fox"]),
    order("Put this food chain in order, starting with the producer.", ["Algae", "Mayfly larva", "Small fish", "Heron"]),
    fill("Food chains begin with a [producer], which makes glucose by photosynthesis."),
    fill("The arrows in a food chain show the transfer of [biomass/energy]."),
    fill("Producers are eaten by [primary] consumers.")
  ]);

  topic("Predator-prey relationships and population cycles", [
    fill("In a stable community, the numbers of predators and [prey] rise and fall in cycles."),
    fill("If the number of prey rises, the number of predators [rises/increases/goes up]."),
    fill("The peak in predator numbers comes slightly [after/later than] the peak in prey numbers."),
    order("Put the steps of a predator–prey cycle in order.", [
      "The prey population increases",
      "There is more food, so the predator population increases",
      "More prey are eaten, so the prey population falls",
      "There is less food, so the predator population falls"
    ]),
    match(["community", "interdependence", "competition"])
  ]);

  topic("Required practical: sampling using quadrats and transects", [
    define("quadrat"), define("transect"), define("quantitative sampling"), nameIt("abundance"), nameIt("distribution"),
    match(["quadrat", "transect", "abundance", "distribution"]),
    order("Put the steps of estimating a population with quadrats in order.", [
      "Place quadrats at random coordinates",
      "Count the organisms in each quadrat",
      "Find the mean number per quadrat",
      "Scale up to the total area"
    ]),
    order("Put the steps of using a transect in order.", [
      "Lay a tape across a changing habitat",
      "Place quadrats at regular intervals along the tape",
      "Count the organisms in each quadrat",
      "Compare how the distribution changes along the transect"
    ]),
    fill("Quadrats are placed at [random] to avoid bias."),
    fill("Using many quadrats makes results more [representative]."),
    { question: "The mean is 6 daisies per 1 m² quadrat. The field is 500 m². Estimate the number of daisies.", type: "number", marks: 2, answer: "3000" }
  ]);

  topic("Carbon cycle", [
    define("carbon cycle"), define("decomposers"), nameIt("carbon cycle"),
    order("Put the steps of the carbon cycle in order, starting with carbon dioxide in the air.", [
      "Plants remove CO₂ from the air by photosynthesis and make carbon compounds",
      "Animals eat the plants, passing the carbon along food chains",
      "Plants, animals and decomposers release CO₂ back into the air by respiration",
      "Decomposers break down dead organisms and waste, returning carbon and mineral ions"
    ]),
    fill("Burning fossil fuels and wood, called [combustion], releases CO₂."),
    fill("Plants take carbon dioxide out of the air by [photosynthesis]."),
    { text: "The diagram shows part of the carbon cycle.", diagram: CARBON, always: true, parts: [
      { question: "Name process A.", type: "word", answer: "photosynthesis" },
      { question: "Name process B.", type: "word", answer: "respiration" },
      { question: "Name process D.", type: "word", answer: "combustion/burning" },
      { question: "Which organisms carry out process E?", type: "word", answer: "decomposers/decomposer/microorganisms/bacteria and fungi" }
    ] }
  ]);

  topic("Water cycle", [
    order("Put the stages of the water cycle in order.", [
      "Water evaporates from the sea and land, and transpires from plants",
      "The water vapour condenses to form clouds",
      "Water falls as precipitation",
      "Water runs off into rivers, lakes and seas"
    ]),
    fill("Water vapour cools and [condenses] to form clouds."),
    fill("Rain, snow and hail are all forms of [precipitation]."),
    fill("Water lost from plant leaves is called [transpiration]."),
    fill("The water cycle provides [fresh] water for plants and animals on land."),
    match([["Evaporation", "Liquid water turns to vapour"], ["Condensation", "Water vapour turns to liquid droplets"], ["Precipitation", "Water falls from clouds"], ["Transpiration", "Water vapour lost from leaves"]],
      "Match each process to its description.")
  ]);

  topic("Nitrogen cycle: decomposers, nitrifying bacteria", [
    define("decomposers"), nameIt("decomposers"),
    order("Put the steps of decay in order.", [
      "Organisms die or produce waste",
      "Microorganisms (decomposers) break down the dead material and waste",
      "Mineral ions are returned to the soil and CO₂ to the air",
      "Plants take up the mineral ions to make proteins"
    ]),
    fill("Decay is fastest when it is warm, moist and has plenty of [oxygen]."),
    fill("Nitrifying bacteria turn ammonium compounds into [nitrates/nitrate]."),
    fill("Plants absorb nitrates to make [proteins/protein]."),
    fill("Anaerobic decay in a biogas generator produces [methane]."),
    match([["Decomposers", "Break down dead material"], ["Nitrifying bacteria", "Make nitrates"], ["Nitrogen-fixing bacteria", "Turn nitrogen gas into nitrogen compounds"], ["Denitrifying bacteria", "Turn nitrates back into nitrogen gas"]],
      "Match each kind of bacteria to its job.")
  ]);

  topic("How environmental change affects where species are found", [
    define("distribution"), nameIt("distribution"),
    fill("Changes in the environment affect the [distribution] of species."),
    fill("Changes can be seasonal, geographic or caused by [human] interaction."),
    fill("A change in water availability, temperature or atmospheric gases can change where species [live/are found]."),
    match([["Seasonal", "Birds migrating in winter"], ["Geographic", "Different soil or rock in an area"], ["Human interaction", "Pollution or climate change"]],
      "Match each kind of change to an example."),
    fill("As the climate warms, some species are found further [north/towards the poles] than before.")
  ]);

  topic("Biodiversity: importance and preservation", [
    define("biodiversity"), nameIt("biodiversity"),
    fill("High biodiversity makes an ecosystem more [stable]."),
    fill("Breeding programmes help to protect [endangered] species."),
    fill("Protecting rare [habitats/habitat] helps maintain biodiversity."),
    fill("Reintroducing field margins and [hedgerows/hedgerow] increases biodiversity on farms."),
    match([["Breeding programmes", "Help endangered species to increase their numbers"], ["Hedgerows", "Habitats for many species on farmland"], ["Recycling", "Reduces waste sent to landfill"], ["Reducing deforestation", "Protects habitats and reduces CO₂"]],
      "Match each action to how it helps biodiversity.")
  ]);

  topic("Human impact: deforestation, global warming, land use", [
    fill("Removing large areas of forest is called [deforestation]."),
    fill("Burning forests releases [carbon dioxide/CO2] into the air."),
    fill("Digging up peat bogs to make [compost] releases carbon dioxide."),
    fill("Rising levels of carbon dioxide and [methane] cause global warming."),
    order("Put the steps of how deforestation contributes to global warming in order.", [
      "Trees are cut down and burned",
      "Carbon dioxide is released by burning and by decay",
      "Fewer trees are left to remove carbon dioxide by photosynthesis",
      "Carbon dioxide levels in the air rise, increasing the greenhouse effect"
    ]),
    match([["Deforestation", "Clearing forests to grow crops for biofuels or to raise cattle"], ["Global warming", "Can change species distribution and raise sea levels"], ["Land use", "Building, farming and quarrying leave less land for other animals and plants"]],
      "Match each human impact to its description.")
  ]);

  topic("Pollution indicators: lichen, invertebrates", [
    fill("Lichens are sensitive to [sulfur dioxide/sulphur dioxide/SO2] in the air."),
    fill("More types of lichen growing means the air is [cleaner/less polluted/clean]."),
    fill("Stonefly larvae only live in water with lots of dissolved [oxygen]."),
    fill("Sewage fungus and rat-tailed maggots show that water is [polluted]."),
    match([["Many types of lichen", "Clean air"], ["Blackspot fungus on roses", "Clean air"], ["Stonefly larvae", "Clean water"], ["Rat-tailed maggots", "Polluted water"]].map(([a, b]) => [b, a]),
      "Match each indicator species to what it shows."),
    fill("Pollution can also be measured directly with oxygen meters and [data loggers/data logger].")
  ]);

  topic("Trophic levels and energy transfer", [
    define("trophic level"), define("biomass"), define("incident energy"), nameIt("trophic level"),
    match(["trophic level", "producers", "primary consumer", "secondary consumer"]),
    fill("Only about [10]% of the biomass at each trophic level is transferred to the next."),
    fill("Producers transfer only about 1% of the [incident energy] that reaches them."),
    fill("Biomass is lost through respiration, excretion and [egestion/faeces/urine]."),
    { question: "The producers have 2000 kg of biomass and the primary consumers have 200 kg. What percentage of the biomass is transferred?", type: "number", marks: 2, answer: "10" },
    fill("Level 1 is the producers, level 2 the primary consumers and level 3 the [secondary] consumers.")
  ]);

  topic("Pyramids of biomass", [
    define("biomass"), nameIt("biomass"),
    fill("A pyramid of biomass shows the [biomass] at each trophic level."),
    fill("The bottom bar of a pyramid of biomass is always the [producers/producer]."),
    fill("Each bar is smaller than the one below because biomass is [lost] at each level."),
    { text: "The diagram shows a pyramid of biomass.", diagram: PYRAMID, always: true, parts: [
      { question: "Which trophic level is bar P?", type: "word", answer: "producers/producer" },
      { question: "Which bar shows the secondary consumers?", type: "choice", options: ["P", "Q", "R", "S"], answer: "R" },
      { question: "What percentage of the biomass in P is transferred to Q?", type: "number", marks: 2, answer: "10" },
      { question: "What percentage of the biomass in R is transferred to S?", type: "number", marks: 2, answer: "5" }
    ] },
    order("Put the trophic levels in order, from the bottom of the pyramid to the top.", ["Producers", "Primary consumers", "Secondary consumers", "Tertiary consumers"])
  ]);

  // ======================= EXAM STYLE =======================
  // Short definition and naming questions written in the style of GCSE exam questions (a context, then a
  // question), marked the way an exam would mark them. They join each topic's own list, with no separate heading.
  //   examDefine(question, marks, points, notes)   Write the definition. "points" are what earn the marks (shown
  //                                                 as bullets if the student gets it wrong); "notes" say what
  //                                                 else counts, or what doesn't.
  //   examTerm(question, answers, exact)           Name the term; "/" separates accepted answers, and
  //                                                 exact: true means the spelling must be right.
  const examDefine = (question, marks, points, notes = "") =>
    ({ question, type: "explain", marks, points, notes, answer: points.join("; ") + (notes ? ". " + notes : "") });
  const examTerm = (question, answer, exact = false) =>
    ({ question, type: "word", marks: 1, answer, ...(exact ? { exact } : {}) });
  const examStyle = (title, questions) => {
    if (!blocks[title]) throw new Error(`no topic called "${title}"`);
    blocks[title].questions.push(...questions);
  };

  // ---------- Paper 1 ----------
  examStyle("Diffusion: factors affecting rate", [
    examDefine("A drop of food colouring is added to a beaker of water. The colour slowly spreads through the water. Explain what is meant by diffusion.", 2,
      ["The (net) movement / spreading out of particles (1 mark)", "From an area of higher concentration to an area of lower concentration (1 mark)"],
      "Naming the particles is fine, and so is \"down a concentration gradient\". \"Along\" or \"across\" a gradient doesn't get the mark.")
  ]);
  examStyle("Osmosis: definition and examples", [
    examTerm("Root hair cells take in water from the soil. Name the process by which water moves into these cells.", "osmosis")
  ]);
  examStyle("Active transport: differences from diffusion", [
    { question: "Complete the sentence. Unlike diffusion, active transport needs _____ from respiration.", type: "word", answer: "energy" },
    examTerm("Cells in the small intestine move glucose from a low concentration to a high concentration. Name this process.", "active transport")
  ]);
  examStyle("Mitosis and the cell cycle", [
    examTerm("New skin cells are made to repair a cut. Name the type of cell division that makes them. (Your spelling must be correct.)", "mitosis", true)
  ]);
  examStyle("Differentiation and specialised cells", [
    examTerm("A stem cell changes into a nerve cell. What is this process called?", "differentiation/differentiate")
  ]);
  examStyle("Stem cells: types and uses (embryonic & adult)", [
    examTerm("Name the plant tissue, found at the tips of roots and shoots, that contains stem cells.", "meristem/meristems/meristem tissue")
  ]);
  examStyle("Cells → tissues → organs → organ systems", [
    examDefine("Muscle and xylem are both examples of tissues. What is meant by a tissue?", 1,
      ["A group of cells with a similar structure and function (1 mark)"], "\"A group of cells\" on its own doesn't get the mark."),
    examTerm("The stomach is made of several different tissues working together. What is a structure like this called?", "organ")
  ]);
  examStyle("Enzyme action: lock and key, temperature, pH", [
    examDefine("Amylase is an enzyme found in saliva. Give two features of enzymes.", 2,
      ["It is a biological catalyst: it speeds up reactions", "It is specific: it works on only one substrate", "It is made of protein"],
      "Any two of these, 1 mark each.")
  ]);
  examStyle("Required practical: effect of pH on enzyme activity", [
    examTerm("A student investigates the effect of pH on amylase. They keep the temperature the same throughout. What type of variable is temperature in this investigation?",
      "control variable/control variables/control")
  ]);
  examStyle("Heart structure and the circulatory system", [
    examDefine("Humans have a double circulatory system. Describe what this means.", 1,
      ["One side (the right) pumps blood to the lungs", "AND the other side (the left) pumps blood to the rest of the body"],
      "Both are needed for the 1 mark. Saying blood passes through the heart twice on each circuit of the body also counts.")
  ]);
  examStyle("Blood: components and functions", [
    examTerm("Name the yellow liquid part of the blood that carries the blood cells around the body.", "plasma"),
    examTerm("After a cut, small cell fragments in the blood help it to clot. Name these fragments.", "platelets/platelet/thrombocytes/thrombocyte")
  ]);
  examStyle("Plant tissues: leaf structure and transpiration", [
    examTerm("Water moves into the roots, up through the xylem and out of the leaves. What is this flow of water called? (Two words.)", "transpiration stream"),
    examTerm("Name the process by which plants lose water vapour from their leaves.", "transpiration"),
    examTerm("Carbon dioxide enters a leaf through tiny pores on its lower surface. Name these pores.", "stomata/stoma"),
    examTerm("Name the cells either side of each pore in a leaf that open and close it.", "guard cells/guard cell")
  ]);
  examStyle("Pathogens: bacteria, viruses, fungi, protists", [
    examTerm("Some bacteria, viruses, fungi and protists cause disease. What general name is given to these microorganisms?", "pathogens/pathogen")
  ]);
  examStyle("Examples of communicable diseases", [
    examTerm("Mosquitoes carry the malaria pathogen from one person to another. What name is given to an organism that spreads a pathogen like this?", "vector/vectors")
  ]);
  examStyle("Plant disease: detection and defence", [
    examTerm("Foxgloves make poisons that stop animals eating them. What type of plant defence is this?", "chemical/chemical defence")
  ]);
  examStyle("Drug development: clinical trials, double-blind", [
    examTerm("In a drug trial, some volunteers are given a pill that looks the same but contains no drug. What is this pill called?", "placebo")
  ]);
  examStyle("Aerobic respiration equation", [
    examTerm("Name the type of respiration that uses oxygen.", "aerobic respiration/aerobic"),
    examTerm("Name the process in every living cell that transfers energy from glucose.", "respiration/aerobic respiration/cellular respiration")
  ]);

  // ---------- Paper 2 ----------
  examStyle("Blood glucose control: insulin, diabetes", [
    examTerm("After a meal, the liver stores excess glucose as an insoluble carbohydrate. Name this carbohydrate.", "glycogen")
  ]);
  examStyle("Reflex arc: sensory, relay, motor neurones", [
    examDefine("A person touches a hot pan and pulls their hand away. Explain what is meant by a reflex action.", 2,
      ["A response to a stimulus (1 mark)", "That is automatic: it doesn't involve conscious thought (1 mark)"],
      "\"Fast\" on its own and examples don't earn marks."),
    { question: "Which of these is true of every reflex action?", type: "choice", answer: "It happens automatically.",
      options: ["It happens automatically.", "It has to be learned.", "It is controlled by a hormone.", "It is a conscious decision."] }
  ]);
  examStyle("The eye: structure and function, accommodation", [
    examTerm("A student looks up from a book to a tree far away. Name the process by which the eye changes its focus.", "accommodation")
  ]);
  examStyle("Plant hormones: auxin, gravitropism, phototropism", [
    examTerm("A plant shoot grows towards a window. What general name is given to a plant's growth response to a stimulus like this?", "tropism/tropisms/phototropism")
  ]);
  examStyle("Sexual vs asexual reproduction: advantages", [
    examDefine("A garden centre grows hundreds of new plants from a few cells of one plant. What is meant by tissue culture?", 1,
      ["Growing (a small group of) cells into a whole new organism (1 mark)"], "Just saying \"clones\" doesn't earn the mark.")
  ]);
  examStyle("Meiosis: stages and importance of variation", [
    examTerm("Name the type of cell division that makes eggs and sperm. (Your spelling must be correct.)", "meiosis", true)
  ]);
  examStyle("DNA structure and chromosome pairs (basic)", [
    examTerm("What is the name for a small section of DNA on a chromosome that codes for a protein?", "gene")
  ]);
  examStyle("Genes, alleles: dominant and recessive", [
    examDefine("The allele for blue eyes is recessive. What is meant by a recessive allele?", 1,
      ["An allele that only shows (is expressed) when two copies are present (1 mark)"]),
    examTerm("An allele shows in the phenotype even when only one copy is inherited. What is this type of allele called?", "dominant/dominant allele")
  ]);
  examStyle("Mutations: causes and effects (basic)", [
    examDefine("A new variant of a virus appears because of a mutation. What is meant by a mutation?", 1,
      ["A change in the DNA: in a gene, the base sequence or a chromosome (1 mark)"], "\"A change in genetic information\" is too vague.")
  ]);
  examStyle("Evidence for evolution: fossils, antibiotic resistance", [
    examDefine("Scientists find the shape of an ancient fern in a rock. What is a fossil?", 1,
      ["The remains (or traces) of an organism from millions of years ago (1 mark)"], "Saying \"thousands of years ago\" also counts.")
  ]);
  examStyle("Ecosystems: habitats, populations, communities", [
    examTerm("A pond contains populations of frogs, water snails, pondweed and algae. What name is given to all these populations living together?", "community/communities")
  ]);
  examStyle("Required practical: sampling using quadrats and transects", [
    examTerm("Name the square frame placed on the ground to count the plants inside it.", "quadrat/quadrats")
  ]);
  examStyle("Biodiversity: importance and preservation", [
    examDefine("A survey finds many different species living in a hedgerow. What is meant by biodiversity?", 1,
      ["The variety of different species in an area or ecosystem (1 mark)"])
  ]);

  // ======================= MORE DIAGRAMS =======================
  // Diagram, graph and table questions for more topics. One diagram question per topic has always: true, so
  // every set has a diagram to read.
  const withDiagrams = (title, questions) => {
    if (!blocks[title]) throw new Error(`no topic called "${title}"`);
    blocks[title].questions.push(...questions);
  };
  const label = (x1, y1, x2, y2, letter, tx, ty) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><text x="${tx}" y="${ty}">${letter}</text>`;
  const axes = (xLabel, yLabel) => `<line x1="40" y1="20" x2="40" y2="170"/><line x1="40" y1="170" x2="340" y2="170"/>
    <text x="190" y="203" text-anchor="middle" style="font-weight:500;font-size:12px">${xLabel}</text>
    <text x="14" y="95" text-anchor="middle" transform="rotate(-90 14 95)" style="font-weight:500;font-size:12px">${yLabel}</text>`;

  const ANIMAL_CELL = `<svg viewBox="0 0 290 200" width="290" role="img" aria-label="An animal cell with four parts labelled A to D">
    <ellipse cx="120" cy="100" rx="100" ry="80" fill="#f2f8f5" stroke="#146c43" stroke-width="2.5"/>
    <circle cx="110" cy="92" r="28" fill="#e8d8c4" stroke="#7a5230" stroke-width="2"/>
    <ellipse cx="62" cy="62" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <ellipse cx="172" cy="142" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <ellipse cx="168" cy="58" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <circle cx="70" cy="125" r="2.5" fill="#555"/><circle cx="85" cy="140" r="2.5" fill="#555"/><circle cx="150" cy="105" r="2.5" fill="#555"/><circle cx="60" cy="95" r="2.5" fill="#555"/>
    ${label(132, 82, 245, 40, "A", 252, 45)}${label(82, 150, 245, 92, "B", 252, 97)}${label(218, 112, 245, 140, "C", 252, 145)}${label(186, 144, 245, 182, "D", 252, 187)}
  </svg>`;
  const BACTERIUM = `<svg viewBox="0 0 360 180" width="360" role="img" aria-label="A bacterial cell with four parts labelled P to S">
    <rect x="40" y="45" width="220" height="90" rx="45"/>
    <rect x="49" y="54" width="202" height="72" rx="36" style="fill:#fbfdfb;stroke-width:1.5"/>
    <path d="M100 90 C110 62 140 115 160 85 S205 70 192 98 S130 116 100 90Z" fill="none" stroke="#7a5230" stroke-width="2"/>
    <circle cx="222" cy="75" r="7" fill="none" stroke="#b5651d" stroke-width="2"/><circle cx="78" cy="108" r="7" fill="none" stroke="#b5651d" stroke-width="2"/>
    <path d="M260 90 q10 -12 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#146c43" stroke-width="2"/>
    ${label(158, 84, 158, 24, "P", 153, 18)}${label(224, 68, 236, 24, "Q", 232, 18)}${label(62, 128, 44, 158, "R", 38, 174)}${label(320, 92, 320, 158, "S", 315, 174)}
  </svg>`;
  const LOCK_KEY = `<svg viewBox="0 0 340 160" width="340" role="img" aria-label="An enzyme with its active site labelled X, and a substrate labelled Y">
    <path d="M20 40 H120 V72 H152 V40 H200 Q220 40 220 60 V120 Q220 140 200 140 H40 Q20 140 20 120 Z" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <text x="70" y="110" style="font-weight:500">Enzyme</text>
    <path d="M262 40 h30 v30 h-30 z" fill="#f4c7a1" stroke="#b5651d" stroke-width="2"/>
    ${label(146, 58, 178, 16, "X", 183, 20)}${label(277, 72, 277, 112, "Y", 272, 128)}
  </svg>`;
  const OSMOSIS = `<svg viewBox="0 0 320 200" width="320" role="img" aria-label="A beaker split by membrane M into side A, with a dilute sugar solution, and side B, with a concentrated sugar solution">
    <path d="M32 62 H288 V168 H32 Z" fill="#dceefb" stroke="none"/>
    <path d="M30 30 V170 H290 V30" fill="none" stroke="#146c43" stroke-width="2.5"/>
    <line x1="160" y1="56" x2="160" y2="170" style="stroke:#7a5230;stroke-width:3;stroke-dasharray:6 5"/>
    <circle cx="80" cy="110" r="5" fill="#b5651d"/><circle cx="120" cy="140" r="5" fill="#b5651d"/>
    ${[[190, 90], [215, 120], [240, 85], [265, 140], [200, 150], [250, 110], [228, 150], [272, 95]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#b5651d"/>`).join("")}
    <text x="90" y="52">A</text><text x="222" y="52">B</text><text x="154" y="48">M</text>
    <circle cx="44" cy="188" r="5" fill="#b5651d"/><text x="54" y="193" style="font-weight:500;font-size:12px">= sugar molecule</text>
  </svg>`;
  const LEAF = `<svg viewBox="0 0 330 205" width="330" role="img" aria-label="A cross-section of a leaf with four parts labelled A to D">
    <rect x="20" y="20" width="250" height="18" style="fill:#fff;stroke-width:1.5"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${22 + i * 20.5}" y="40" width="18" height="52" rx="6" style="stroke-width:1.5"/>
      <circle cx="${31 + i * 20.5}" cy="55" r="3" fill="#5fb37a"/><circle cx="${31 + i * 20.5}" cy="75" r="3" fill="#5fb37a"/>`).join("")}
    ${[[40, 112], [75, 130], [110, 108], [145, 135], [180, 112], [215, 132], [250, 110], [55, 148], [125, 148], [235, 148]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="13" fill="#e7f3ec" stroke="#146c43" stroke-width="1.5"/>`).join("")}
    <rect x="20" y="162" width="118" height="18" style="fill:#fff;stroke-width:1.5"/><rect x="162" y="162" width="108" height="18" style="fill:#fff;stroke-width:1.5"/>
    <ellipse cx="142" cy="171" rx="6" ry="10" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/><ellipse cx="158" cy="171" rx="6" ry="10" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    ${label(270, 29, 292, 29, "A", 298, 34)}${label(262, 66, 292, 66, "B", 298, 71)}${label(263, 112, 292, 120, "C", 298, 125)}${label(160, 181, 292, 192, "D", 298, 197)}
  </svg>`;
  const EYE = `<svg viewBox="0 0 360 210" width="360" role="img" aria-label="A cross-section of the eye with four parts labelled A to D">
    <circle cx="170" cy="100" r="80" fill="#fbfdfb" stroke="#146c43" stroke-width="2.5"/>
    <path d="M214 33 A80 80 0 0 1 214 167" fill="none" stroke="#b5651d" stroke-width="6"/>
    <path d="M100 58 Q66 100 100 142" fill="none" stroke="#4a7fb5" stroke-width="3"/>
    <ellipse cx="120" cy="100" rx="11" ry="28" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <path d="M247 88 H315 M247 112 H315" fill="none" stroke="#7a5230" stroke-width="2.5"/>
    ${label(78, 100, 40, 100, "A", 24, 105)}${label(120, 128, 120, 186, "B", 115, 202)}${label(238, 60, 300, 30, "C", 306, 35)}${label(300, 112, 326, 140, "D", 330, 152)}
  </svg>`;
  const food = (x, y, name) => `<rect x="${x}" y="${y}" width="90" height="34" rx="8"/><text x="${x + 45}" y="${y + 22}" text-anchor="middle" style="font-size:13px">${name}</text>`;
  const FOOD_WEB = `<svg viewBox="0 0 370 220" width="370" role="img" aria-label="A food web: grass is eaten by rabbits and mice; oak leaves by caterpillars; rabbits and mice by foxes; mice and blue tits by owls; caterpillars by blue tits">${ARROW}
    ${food(40, 176, "Grass")}${food(230, 176, "Oak leaves")}
    ${food(0, 98, "Rabbit")}${food(120, 98, "Mouse")}${food(240, 98, "Caterpillar")}
    ${food(40, 20, "Fox")}${food(160, 20, "Owl")}${food(275, 20, "Blue tit")}
    ${arrow(80, 176, 50, 134)}${arrow(90, 176, 160, 134)}${arrow(275, 176, 283, 134)}
    ${arrow(45, 98, 75, 56)}${arrow(150, 98, 110, 56)}${arrow(170, 98, 200, 56)}${arrow(290, 98, 315, 56)}${arrow(275, 37, 252, 37)}
  </svg>`;
  const vessel = (cx, outer, inner, name, rx = 1) => `<ellipse cx="${cx}" cy="70" rx="${outer * rx}" ry="${outer}" fill="#f2c9c4" stroke="#a33a3a" stroke-width="2"/>
    <ellipse cx="${cx}" cy="70" rx="${inner * rx}" ry="${inner}" fill="#fff" stroke="#a33a3a" stroke-width="1.5"/><text x="${cx - 5}" y="140">${name}</text>`;
  const VESSELS = `<svg viewBox="0 0 320 150" width="320" role="img" aria-label="Cross-sections of three blood vessels, P, Q and R">
    ${vessel(60, 42, 13, "P")}${vessel(170, 40, 31, "Q", 1.25)}${vessel(270, 10, 6, "R")}
  </svg>`;
  const TEMP_GRAPH = `<svg viewBox="0 0 350 212" width="350" role="img" aria-label="A graph of the rate of an enzyme reaction against temperature, rising to a peak at 40 °C then falling to zero at about 60 °C">
    ${axes("Temperature (°C)", "Rate of reaction")}
    ${[0, 20, 40, 60].map((t, i) => `<line x1="${40 + i * 75}" y1="170" x2="${40 + i * 75}" y2="175"/><text x="${40 + i * 75}" y="186" text-anchor="middle" style="font-weight:500;font-size:11px">${t}</text>`).join("")}
    <path d="M40 160 C100 150 160 40 190 40 C215 40 235 120 265 170" fill="none" stroke="#146c43" stroke-width="3"/>
  </svg>`;
  const LIGHT_GRAPH = `<svg viewBox="0 0 350 212" width="350" role="img" aria-label="A graph of the rate of photosynthesis against light intensity: the rate rises at point X, then levels off at point Y">
    ${axes("Light intensity", "Rate of photosynthesis")}
    <path d="M40 170 C100 80 160 62 220 62 L330 62" fill="none" stroke="#146c43" stroke-width="3"/>
    <circle cx="85" cy="115" r="5" fill="#34598f"/><text x="66" y="108">X</text>
    <circle cx="280" cy="62" r="5" fill="#34598f"/><text x="275" y="50">Y</text>
  </svg>`;
  const PRED_PREY = `<svg viewBox="0 0 350 230" width="350" role="img" aria-label="A graph of two populations over time, A and B, rising and falling in cycles; B's peaks come after A's">
    ${axes("Time", "Number of organisms")}
    <path d="M40 120 C60 60 100 60 120 120 S180 165 200 120 S260 60 280 120 S330 165 340 135" fill="none" stroke="#146c43" stroke-width="3"/>
    <path d="M40 160 C70 165 100 120 140 112 S190 150 220 160 S260 112 300 112 S335 150 340 155" fill="none" stroke="#b5651d" stroke-width="3" stroke-dasharray="8 5"/>
    <line x1="60" y1="220" x2="85" y2="220" style="stroke:#146c43;stroke-width:3"/><text x="90" y="225" style="font-size:12px">A</text>
    <line x1="130" y1="220" x2="155" y2="220" style="stroke:#b5651d;stroke-width:3;stroke-dasharray:8 5"/><text x="160" y="225" style="font-size:12px">B</text>
  </svg>`;

  // ---------- Paper 1 ----------
  withDiagrams("Prokaryotic vs eukaryotic cells", [
    { text: "The diagram shows a bacterial cell.", diagram: BACTERIUM, always: true, parts: [
      { question: "Part P is the cell's main genetic material. What form does it take?", type: "word", answer: "loop/DNA loop/a loop of DNA/single loop/circular DNA" },
      { question: "Name the small ring of DNA labelled Q.", type: "word", answer: "plasmid/plasmids" },
      { question: "Name part S, which the bacterium uses to move.", type: "word", answer: "flagellum/flagella/tail" },
      { question: "Which structure, found in animal and plant cells, does this cell NOT have?", type: "choice", options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosomes"], answer: "Nucleus" }
    ] }
  ]);
  withDiagrams("Animal and plant cell structures and functions", [
    { text: "The diagram shows an animal cell.", diagram: ANIMAL_CELL, parts: [
      { question: "Name part A, which contains the genetic material.", type: "word", answer: "nucleus" },
      { question: "Name part B, where most chemical reactions take place.", type: "word", answer: "cytoplasm" },
      { question: "Name part C, which controls what enters and leaves the cell.", type: "word", answer: "cell membrane/membrane" },
      { question: "Name part D, where aerobic respiration happens.", type: "word", answer: "mitochondrion/mitochondria" }
    ] }
  ]);
  withDiagrams("Osmosis: definition and examples", [
    { text: "The beaker is split in two by membrane M. Side A has a dilute sugar solution and side B a concentrated sugar solution. Water can pass through M, but sugar can't.",
      diagram: OSMOSIS, always: true, parts: [
      { question: "Which way will water move overall?", type: "choice", options: ["From A to B", "From B to A", "No overall movement"], answer: "From A to B" },
      { question: "Name the type of membrane M.", type: "word", answer: "partially permeable/partially permeable membrane/semi-permeable/selectively permeable" },
      { question: "Name the process by which the water moves.", type: "word", answer: "osmosis" },
      { question: "What will happen to the level of the liquid on side B?", type: "choice", options: ["It will rise", "It will fall", "It will stay the same"], answer: "It will rise" }
    ] }
  ]);
  withDiagrams("Enzyme action: lock and key, temperature, pH", [
    { text: "The diagram shows the lock and key model of enzyme action.", diagram: LOCK_KEY, always: true, parts: [
      { question: "Name part X of the enzyme.", type: "word", answer: "active site" },
      { question: "Name the molecule Y that fits into it.", type: "word", answer: "substrate" },
      { question: "At a very high temperature, X changes shape. What is the enzyme then said to be?", type: "word", answer: "denatured" }
    ] },
    { text: "The graph shows how temperature affects the rate of a reaction controlled by an enzyme.", diagram: TEMP_GRAPH, parts: [
      { question: "What is the optimum temperature for this enzyme, in °C?", type: "number", answer: "40", tolerance: 2 },
      { question: "Above the optimum, the rate falls quickly. What has happened to the enzyme?", type: "word", answer: "denatured/it is denatured/it has denatured" }
    ] }
  ]);
  withDiagrams("Blood vessels: arteries, veins, capillaries", [
    { text: "The diagram shows cross-sections of three blood vessels, P, Q and R (not to scale).", diagram: VESSELS, always: true, parts: [
      { question: "Which vessel is an artery?", type: "choice", options: ["P", "Q", "R"], answer: "P" },
      { question: "Which vessel is a capillary?", type: "choice", options: ["P", "Q", "R"], answer: "R" },
      { question: "Arteries have thick, muscular walls. Blood in arteries is at high _____.", type: "word", answer: "pressure" }
    ] }
  ]);
  withDiagrams("Plant tissues: leaf structure and transpiration", [
    { text: "The diagram shows a cross-section through a leaf.", diagram: LEAF, always: true, parts: [
      { question: "Name layer B, where most photosynthesis happens.", type: "word", answer: "palisade mesophyll/palisade/palisade layer" },
      { question: "Name layer C, which has air spaces for gas exchange.", type: "word", answer: "spongy mesophyll/spongy/spongy layer" },
      { question: "Name the cells labelled D.", type: "word", answer: "guard cells/guard cell" },
      { question: "Name the gap between the two D cells, which lets gases in and out.", type: "word", answer: "stoma/stomata/pore" }
    ] }
  ]);
  withDiagrams("Adaptations of the leaf for photosynthesis", [
    { text: "The diagram shows a cross-section through a leaf.", diagram: LEAF, always: true, parts: [
      { question: "Name layer B.", type: "word", answer: "palisade mesophyll/palisade/palisade layer" },
      { question: "Why do the cells in layer B contain many chloroplasts?", type: "choice", answer: "To absorb more light for photosynthesis",
        options: ["To absorb more light for photosynthesis", "To store water", "To let gases diffuse", "To make the leaf stronger"] },
      { question: "Layer A is transparent. Why does this help photosynthesis?", type: "choice", answer: "It lets light through to the cells below",
        options: ["It lets light through to the cells below", "It absorbs carbon dioxide", "It makes glucose", "It stops water entering"] }
    ] }
  ]);
  withDiagrams("Limiting factors: light, CO₂, temperature", [
    { text: "The graph shows how light intensity affects the rate of photosynthesis.", diagram: LIGHT_GRAPH, always: true, parts: [
      { question: "What is limiting the rate of photosynthesis at point X?", type: "choice", options: ["Light intensity", "Carbon dioxide concentration", "Temperature"], answer: "Light intensity" },
      { question: "Name one factor that could be limiting the rate at point Y.", type: "word",
        answer: "carbon dioxide/carbon dioxide concentration/CO2/CO2 concentration/temperature/chlorophyll" },
      { question: "What happens to the rate between X and Y as light intensity increases?", type: "choice",
        options: ["It increases, then stays the same", "It keeps increasing", "It decreases"], answer: "It increases, then stays the same" }
    ] }
  ]);

  // ---------- Paper 2 ----------
  withDiagrams("The eye: structure and function, accommodation", [
    { text: "The diagram shows a cross-section of the eye.", diagram: EYE, always: true, parts: [
      { question: "Name part A, the clear outer layer at the front.", type: "word", answer: "cornea" },
      { question: "Name part B, which focuses light.", type: "word", answer: "lens" },
      { question: "Name part C, which contains light-sensitive receptor cells.", type: "word", answer: "retina" },
      { question: "Name part D, which carries impulses to the brain.", type: "word", answer: "optic nerve" }
    ] }
  ]);
  withDiagrams("DNA structure in detail (nucleotides) and protein synthesis", [
    { text: "The table shows the bases on one strand of a section of DNA.", table: { headings: ["Strand 1", "A", "T", "T", "G", "C"], rows: [["Strand 2", "?", "?", "?", "?", "?"]] },
      always: true, parts: [
      { question: "Write the bases on strand 2, in order.", type: "word", answer: "TAACG/T A A C G" },
      { question: "How many amino acids could a sequence of 12 bases code for?", type: "number", answer: "4" }
    ] }
  ]);
  withDiagrams("Punnett squares and probability of inheritance", [
    { text: "Brown eyes (B) are dominant to blue eyes (b). The Punnett square shows a cross between two parents who are both Bb.",
      table: { headings: ["", "B", "b"], rows: [["B", "BB", "Bb"], ["b", "Bb", "bb"]] }, always: true, parts: [
      { question: "What fraction of the offspring are expected to have blue eyes?", type: "fraction", answer: "1/4" },
      { question: "What percentage of the offspring are expected to have brown eyes?", type: "number", answer: "75" },
      { question: "What is the expected ratio of brown eyes to blue eyes?", type: "ratio", answer: "3:1" }
    ] }
  ]);
  withDiagrams("Sex determination: X and Y chromosomes", [
    { text: "The Punnett square shows how sex is inherited.", table: { headings: ["", "X", "X"], rows: [["X", "XX", "XX"], ["Y", "XY", "XY"]] }, always: true, parts: [
      { question: "Which parent's gametes are shown down the left side (X and Y)?", type: "choice", options: ["Father", "Mother"], answer: "Father" },
      { question: "What percentage of the offspring are expected to be male?", type: "number", answer: "50" },
      { question: "What is the ratio of female to male offspring?", type: "ratio", answer: "1:1" }
    ] }
  ]);

  // ---------- Ecology ----------
  withDiagrams("Food chains and food webs", [
    { text: "The diagram shows a woodland food web.", diagram: FOOD_WEB, always: true, parts: [
      { question: "Name a producer in this food web.", type: "word", answer: "grass/oak leaves/oak/oak tree" },
      { question: "Name a primary consumer that is eaten by the owl.", type: "word", answer: "mouse/mice" },
      { question: "What does the owl eat that is a secondary consumer?", type: "word", answer: "blue tit/blue tits" },
      { question: "A disease kills most of the foxes. What will most likely happen to the number of rabbits?", type: "choice",
        options: ["It will increase", "It will decrease", "It will stay the same"], answer: "It will increase" }
    ] }
  ]);
  withDiagrams("Predator-prey relationships and population cycles", [
    { text: "The graph shows the populations of a predator and its prey over time.", diagram: PRED_PREY, always: true, parts: [
      { question: "Which line shows the predator?", type: "choice", options: ["A", "B"], answer: "B" },
      { question: "Why do the predator's peaks come after the prey's?", type: "choice", answer: "Predator numbers rise only once there is more prey to eat",
        options: ["Predator numbers rise only once there is more prey to eat", "Predators reproduce faster than prey", "Prey eat the predators"] }
    ] }
  ]);
  withDiagrams("Required practical: sampling using quadrats and transects", [
    { text: "A student placed five 1 m² quadrats at random in a 200 m² field and counted the daisies in each.",
      table: { headings: ["Quadrat", "1", "2", "3", "4", "5"], rows: [["Number of daisies", "3", "7", "4", "6", "5"]] }, always: true, parts: [
      { question: "Work out the mean number of daisies per quadrat.", type: "number", answer: "5" },
      { question: "Estimate the number of daisies in the whole field.", type: "number", marks: 2, answer: "1000" },
      { question: "Why were the quadrats placed at random?", type: "choice", options: ["To avoid bias", "To save time", "To find more daisies"], answer: "To avoid bias" }
    ] }
  ]);

  // ======================= EXPLAIN AND DESCRIBE =======================
  // Written questions that ask students to explain or describe. Each lists the points that earn marks: they're
  // shown as bullets if the student marks themselves wrong.
  //   ex(question, marks, ...points)
  const ex = (question, marks, ...points) => ({ question, type: "explain", marks, points, answer: points.join(" ") });
  const addTo = (title, questions) => {
    if (!blocks[title]) throw new Error(`no topic called "${title}"`);
    blocks[title].questions.push(...questions);
  };

  // ---------- 4.1 Cell Biology ----------
  addTo("Prokaryotic vs eukaryotic cells", [
    ex("Describe two differences between a bacterial cell and an animal cell.", 2,
      "A bacterial cell has no nucleus; its DNA is a single loop free in the cytoplasm.", "A bacterial cell has a cell wall (and may have plasmids); an animal cell has no cell wall."),
    ex("Describe how the genetic material is arranged in a prokaryotic cell.", 2,
      "The DNA is a single loop that is free in the cytoplasm, not in a nucleus.", "There may also be small rings of DNA called plasmids."),
    ex("Explain why bacteria are described as prokaryotic.", 1, "Their genetic material is not enclosed in a nucleus."),
    ex("Describe how the size of a bacterial cell compares with an animal cell.", 2,
      "Bacterial cells are much smaller.", "Bacteria are about 1–10 µm long; animal cells are usually about 10–100 µm."),
    ex("Describe two features that plant cells and bacterial cells have in common.", 2,
      "Both have a cell wall.", "Both have a cell membrane, cytoplasm and ribosomes.")
  ]);
  addTo("Animal and plant cell structures and functions", [
    ex("Explain why a root hair cell has no chloroplasts.", 2, "Root hair cells are underground, so they get no light.", "They can't photosynthesise, so they don't need chloroplasts."),
    ex("Describe the function of the cell membrane and the cell wall.", 2,
      "The cell membrane controls which substances move in and out of the cell.", "The cell wall strengthens and supports the cell."),
    ex("Explain why muscle cells contain many mitochondria.", 2,
      "Mitochondria are where aerobic respiration happens.", "Muscle cells need a lot of energy for contraction.")
  ]);
  addTo("Differentiation and specialised cells", [
    ex("Explain what is meant by a specialised cell.", 1, "A cell that has differentiated to have a structure suited to a particular function."),
    ex("Describe how a sperm cell is adapted to its function.", 3,
      "It has a tail to swim to the egg.", "It has many mitochondria to release energy for swimming.", "Its head (acrosome) contains enzymes to digest through the egg's outer layer."),
    ex("Describe how a root hair cell is adapted to absorb water and mineral ions.", 2,
      "It has a long hair that gives a large surface area.", "It has many mitochondria to release energy for active transport of mineral ions."),
    ex("Describe how nerve cells are adapted to carry impulses.", 2,
      "They are long, so they can carry impulses over long distances.", "They have branched endings to connect with many other cells."),
    ex("Describe how xylem cells are adapted to carry water.", 2,
      "They are hollow tubes with no end walls, so water flows freely.", "Their walls are strengthened with lignin to support the plant."),
    ex("Explain the difference in when animal and plant cells differentiate.", 2,
      "Most animal cells differentiate at an early stage and then lose the ability.", "Many plant cells keep the ability to differentiate throughout life."),
    ex("Describe how a muscle cell is adapted to its function.", 2,
      "It contains protein fibres that can contract.", "It has many mitochondria to release the energy needed for contraction.")
  ]);
  addTo("Microscopy: magnification and resolution", [
    ex("Describe the difference between magnification and resolution.", 2,
      "Magnification is how many times bigger the image is than the real object.", "Resolution is the ability to tell apart two points that are close together (the amount of detail)."),
    ex("Explain why electron microscopes have increased our understanding of cells.", 2,
      "They have a much higher magnification and resolution than light microscopes.", "So sub-cellular structures such as ribosomes and mitochondria can be seen in detail."),
    ex("Describe one advantage and one disadvantage of a light microscope compared with an electron microscope.", 2,
      "Advantage: it is cheaper and portable, and can be used to look at living cells.", "Disadvantage: it has lower magnification and resolution, so less detail can be seen."),
    ex("Describe how to calculate the real size of a cell from an image.", 2, "Measure the size of the image.", "Divide the image size by the magnification."),
    ex("Explain why ribosomes cannot be seen with a light microscope.", 2, "Ribosomes are very small.", "A light microscope's resolution is too low to show them."),
    ex("Explain why units should be the same when working out magnification.", 1, "Image size and real size must be in the same units, otherwise the answer will be wrong by a factor of 1000 or more."),
    ex("Describe how the development of microscopes changed what we know about cells.", 2,
      "Light microscopes first showed cells and nuclei.", "Electron microscopes later showed the detail of sub-cellular structures."),
    ex("Explain why scientists use a scale bar on a micrograph.", 1, "It shows the real size, so the size of structures can be worked out even if the image is enlarged.")
  ]);
  addTo("Microscopy calculations using standard form", [
    ex("Explain why standard form is useful for cell sizes.", 2, "Cell sizes are very small numbers with many zeros.", "Standard form makes them quicker to write and easier to compare."),
    ex("Describe how to convert a length in mm to µm.", 1, "Multiply by 1000."),
    ex("Describe how to convert a length in µm to mm.", 1, "Divide by 1000."),
    ex("Explain how to rearrange the magnification equation to find the image size.", 1, "Image size = magnification × real size."),
    ex("Describe how to write 0.000 45 m in standard form.", 2, "Move the decimal point so there is one non-zero digit in front: 4.5.", "Count the places moved (4) and write it as 4.5 × 10⁻⁴ m."),
    ex("Explain what a negative power of ten means in standard form.", 1, "The number is less than 1: the decimal point moves that many places to the left."),
    ex("Describe how to compare the sizes of two cells given in standard form.", 2, "First compare the powers of ten: the bigger power is the bigger number.", "If the powers are the same, compare the numbers in front."),
    ex("Explain why a student's magnification answer of 0.002 is likely to be wrong.", 2, "A magnification should be greater than 1, as the image is bigger than the real object.", "They have probably divided the wrong way round or mixed up units.")
  ]);
  addTo("Required practical: using a microscope to observe cells", [
    ex("Explain why the specimen is stained.", 1, "To make the cell structures, such as the nucleus, easier to see."),
    ex("Explain why the lowest-power objective lens is used first.", 2, "It gives the widest field of view.", "So it is easier to find the cells before zooming in."),
    ex("Describe how to prepare a slide of onion cells.", 3,
      "Peel a thin layer of onion epidermis with tweezers and place it on a slide with a drop of water.", "Add a drop of iodine solution to stain it.", "Lower a coverslip on at an angle to avoid air bubbles."),
    ex("Explain why the coverslip is lowered on at an angle.", 1, "To stop air bubbles being trapped, which could hide the cells."),
    ex("Explain why a thin layer of tissue is used.", 1, "So light can pass through it and single cells can be seen."),
    ex("Describe how to focus the microscope on the cells.", 2, "Use the coarse focusing wheel to bring the stage close and focus roughly.", "Then use the fine focusing wheel to make the image sharp."),
    ex("Describe how to make a good biological drawing of cells seen under the microscope.", 3,
      "Use a sharp pencil and draw clear, unbroken lines with no shading.", "Draw the structures in proportion and label them with straight lines.", "Include a title and the magnification."),
    ex("Explain why a cheek cell is stained with methylene blue rather than iodine.", 1, "Methylene blue stains the nucleus of animal cells clearly (iodine is used for starch in plant cells)."),
    ex("Explain how to calculate the total magnification.", 1, "Multiply the eyepiece lens magnification by the objective lens magnification.")
  ]);
  addTo("Mitosis and the cell cycle", [
    ex("Describe what happens during the cell cycle.", 3,
      "The cell grows and copies its sub-cellular structures, such as mitochondria and ribosomes.", "The DNA replicates to form two copies of each chromosome.",
      "Mitosis separates the chromosomes, then the cytoplasm and membrane divide to form two identical cells."),
    ex("Explain why the DNA must be copied before a cell divides.", 1, "So each new cell gets a full, identical set of chromosomes."),
    ex("Explain why mitosis is important for multicellular organisms.", 2, "It produces new cells for growth and repair.", "The new cells are genetically identical to the parent cell."),
    ex("Describe what happens to the chromosomes during mitosis.", 2, "The chromosomes line up in the middle of the cell.", "One set is pulled to each end of the cell, and a new nucleus forms around each set."),
    ex("Explain how uncontrolled cell division can cause cancer.", 2, "Changes in cells mean the cell cycle is no longer controlled.", "The cells divide uncontrollably, forming a tumour."),
    ex("Describe how bacteria reproduce.", 2, "They reproduce by binary fission.", "The DNA loop is copied, then the cell splits into two identical cells.")
  ]);
  addTo("Stem cells: types and uses (embryonic & adult)", [
    ex("Describe one difference between embryonic stem cells and adult stem cells.", 1,
      "Embryonic stem cells can form almost any type of cell; adult stem cells can only form a limited number of cell types."),
    ex("Explain how stem cells could be used to treat diabetes.", 2, "Stem cells could be made to differentiate into insulin-producing cells.", "These cells are put into the patient so they can make their own insulin."),
    ex("Describe two concerns about using embryonic stem cells.", 2,
      "Ethical or religious objections, because an embryo is destroyed.", "Risk of transferring viral infection, or the cells could divide uncontrollably and cause cancer."),
    ex("Explain why therapeutic cloning reduces the risk of rejection.", 2,
      "The embryo is made with the patient's own genetic material.", "So the stem cells are genetically identical to the patient and are not rejected by the immune system."),
    ex("Describe how plant stem cells can be used.", 2, "Meristem tissue can be used to produce clones of plants quickly and cheaply.", "This can save rare species or produce crops with useful features, e.g. disease resistance."),
    ex("Explain why bone marrow transplants can treat some blood disorders.", 2, "Bone marrow contains adult stem cells.", "They can differentiate into new blood cells.")
  ]);
  addTo("Diffusion: factors affecting rate", [
    ex("Explain why oxygen diffuses into a red blood cell in the lungs.", 2, "There is a higher concentration of oxygen in the alveoli than in the blood.", "So oxygen moves down its concentration gradient into the blood."),
    ex("Explain how temperature affects the rate of diffusion.", 2, "At a higher temperature particles have more kinetic energy and move faster.", "So diffusion is faster."),
    ex("Explain how a steeper concentration gradient affects diffusion.", 1, "A bigger difference in concentration makes diffusion faster."),
    ex("Explain why single-celled organisms don't need a special exchange surface.", 2, "They have a large surface area to volume ratio.", "So diffusion across the cell membrane is enough to meet their needs."),
    ex("Explain why large multicellular organisms need exchange surfaces and transport systems.", 2,
      "They have a small surface area to volume ratio, and diffusion distances are long.", "Diffusion alone would be too slow to supply all their cells."),
    ex("Describe how the small intestine is adapted for efficient absorption.", 3,
      "It has millions of villi that give a large surface area.", "Villi have a wall one cell thick, giving a short diffusion distance.", "Villi have a good blood supply, keeping the concentration gradient steep."),
    ex("Describe how fish gills are adapted for gas exchange.", 2, "Gill filaments and lamellae give a large surface area.", "They have thin walls and a good blood supply."),
    ex("Explain what is meant by diffusion being passive.", 1, "It needs no energy from respiration.")
  ]);
  addTo("Osmosis: definition and examples", [
    ex("Explain what happens to an animal cell placed in pure water.", 2, "Water moves into the cell by osmosis.", "The cell swells and may burst, because it has no cell wall."),
    ex("Explain why a plant cell does not burst when placed in pure water.", 2, "Water enters the cell by osmosis and the cell becomes turgid.", "The strong cell wall stops it bursting."),
    ex("Explain why plants wilt when they lose too much water.", 2, "Cells lose water by osmosis and lose turgor.", "So the cells become flaccid and no longer support the plant.")
  ]);
  addTo("Required practical: osmosis in plant tissue", [
    ex("Explain why percentage change in mass is calculated, not just change in mass.", 2, "The cylinders may have different starting masses.", "Percentage change lets the results be compared fairly."),
    ex("Explain why a potato cylinder gains mass in pure water.", 2, "The water is more dilute than the potato cells.", "So water moves into the cells by osmosis."),
    ex("Explain why a potato cylinder loses mass in a concentrated sugar solution.", 2, "The solution is more concentrated than the potato cells.", "So water moves out of the cells by osmosis."),
    ex("Describe how to use the results to find the concentration of the potato cells.", 2,
      "Plot a graph of percentage change in mass against concentration.", "Read the concentration where the line crosses 0% change."),
    ex("Name two variables that should be controlled, and explain why.", 2, "The size (length/diameter) of the cylinders and the time left in the solution.", "So that only the concentration affects the change in mass."),
    ex("Explain why the cylinders are blotted dry before weighing.", 1, "To remove surface water, which would add to the mass and make results inaccurate."),
    ex("Describe how to make the results more reliable.", 1, "Repeat each concentration and calculate a mean."),
    ex("Explain why all the cylinders should come from the same potato.", 1, "Different potatoes may have different concentrations inside their cells."),
    ex("Describe a hazard in this practical and how to reduce the risk.", 2, "The knife or cork borer is sharp and can cut you.", "Cut on a tile, away from your body.")
  ]);
  addTo("Active transport: differences from diffusion", [
    ex("Describe two differences between active transport and diffusion.", 2,
      "Active transport moves substances against the concentration gradient; diffusion moves them down it.", "Active transport needs energy from respiration; diffusion does not."),
    ex("Explain why root hair cells need active transport.", 2, "The concentration of mineral ions in the soil is usually lower than in the root cells.", "So ions must be moved against the concentration gradient."),
    ex("Explain why root hair cells have many mitochondria.", 2, "Active transport needs energy.", "Mitochondria release energy by aerobic respiration."),
    ex("Explain why waterlogged soil can reduce mineral uptake.", 2, "Waterlogged soil has little oxygen, so root cells can't respire aerobically.", "Less energy is released for active transport."),
    ex("Describe how active transport is used in the small intestine.", 2, "Glucose is absorbed from the gut into the blood.", "Even when the concentration in the gut is lower than in the blood."),
    ex("Explain why active transport stops if a cell is given a poison that stops respiration.", 1, "No energy is released, and active transport needs energy.")
  ]);

  // ---------- 4.2 Organisation ----------
  addTo("Cells → tissues → organs → organ systems", [
    ex("Describe the levels of organisation in a multicellular organism.", 3,
      "Cells are grouped into tissues, groups of cells with a similar structure and function.", "Tissues are grouped into organs, which carry out specific functions.", "Organs work together in organ systems, which form the organism."),
    ex("Explain why the stomach is described as an organ.", 1, "It is made of several different tissues working together, e.g. muscle, glandular and epithelial tissue."),
    ex("Describe the function of three tissues in the stomach.", 3,
      "Muscular tissue churns the contents.", "Glandular tissue makes digestive juices.", "Epithelial tissue covers the inside and outside of the stomach."),
    ex("Explain why the digestive system is an organ system.", 1, "It is made of several organs working together to digest and absorb food."),
    ex("Describe the levels of organisation in a plant, with an example of each.", 2, "Cells (e.g. palisade cells) form tissues (e.g. xylem).", "Tissues form organs (e.g. the leaf), which form organ systems (e.g. the transport system).")
  ]);
  addTo("Digestive system: organs and enzymes", [
    ex("Describe the role of bile in digestion.", 2, "Bile neutralises stomach acid, giving alkaline conditions for enzymes in the small intestine.", "It emulsifies fats into small droplets, increasing the surface area for lipase."),
    ex("Explain why food must be digested.", 2, "Food molecules are large and insoluble.", "They must be broken into small soluble molecules that can be absorbed into the blood."),
    ex("Describe what happens to protein in the digestive system.", 3,
      "Proteases break proteins into amino acids.", "Protease is made in the stomach, pancreas and small intestine.", "Amino acids are absorbed into the blood in the small intestine.")
  ]);
  addTo("Enzyme action: lock and key, temperature, pH", [
    ex("Explain why an enzyme only works on one substrate.", 2, "The active site has a specific shape.", "Only the substrate with a complementary shape fits into it."),
    ex("Explain how increasing the temperature affects the rate of an enzyme reaction up to the optimum.", 2,
      "Molecules move faster and collide more often.", "So more enzyme–substrate complexes form and the rate increases."),
    ex("Explain why enzyme activity falls at a pH far from the optimum.", 2, "The shape of the active site changes; the enzyme is denatured.", "The substrate no longer fits, so the reaction can't be catalysed.")
  ]);
  addTo("Required practical: food tests (Benedict's, Biuret, iodine)", [
    ex("Describe how to test a food for starch.", 2, "Add a few drops of iodine solution to the food sample.", "It turns from orange-brown to blue-black if starch is present."),
    ex("Describe how to test a food for protein.", 2, "Add Biuret reagent to the food solution.", "It turns from blue to purple if protein is present."),
    ex("Describe how to test a food for lipids.", 2, "Mix the food with ethanol, then add the mixture to water and shake.", "A cloudy white emulsion shows lipids are present."),
    ex("Explain why the Benedict's test is heated.", 1, "The reaction only happens at a high temperature (about 75 °C in a water bath)."),
    ex("Explain why a water bath is used to heat the Benedict's test, not a Bunsen burner.", 2, "It heats the tube gently and evenly.", "A Bunsen burner could make the solution spit out of the tube; ethanol may be nearby and is flammable."),
    ex("Describe how to prepare a food sample for testing.", 2, "Grind the food with distilled water using a pestle and mortar.", "Filter the mixture to get a solution."),
    ex("Explain how the colour of a Benedict's test shows how much sugar is present.", 2, "Green shows a small amount, yellow more, orange more again.", "Brick red shows the most reducing sugar."),
    ex("Describe one safety precaution when using Biuret reagent.", 1, "Wear eye protection, as it contains an irritant (corrosive) chemical."),
    ex("Explain why a control tube with distilled water is used.", 1, "To show what a negative result looks like, so the colour change can be compared.")
  ]);
  addTo("Required practical: effect of pH on enzyme activity", [
    ex("Explain why a buffer solution is used.", 1, "To keep the pH of the mixture constant at a known value."),
    ex("Explain why the iodine stays orange-brown at the end point.", 2, "All the starch has been broken down by amylase.", "Iodine only turns blue-black if starch is present."),
    ex("Explain why the solutions are put in a water bath before mixing.", 2, "So they are at the same temperature before the reaction starts.", "Temperature affects enzyme activity, so it must be controlled."),
    ex("Explain why the rate is slow at a very low pH.", 2, "The pH changes the shape of the active site; the enzyme is denatured.", "Starch no longer fits, so less is broken down."),
    ex("Describe how to calculate the rate of reaction from the time taken.", 1, "Rate = 1000 ÷ time (or 1 ÷ time)."),
    ex("Describe how to improve the accuracy of this practical.", 2, "Test more often, e.g. every 10 seconds instead of every 30.", "Use a colorimeter instead of judging the colour by eye."),
    ex("Name two control variables and explain why they must be controlled.", 2, "Temperature and the volumes/concentrations of amylase and starch.", "So only the pH affects the rate."),
    ex("Describe what the results show if the reaction is fastest at pH 6.", 1, "The optimum pH of amylase is about pH 6.")
  ]);
  addTo("Heart structure and the circulatory system", [
    ex("Explain why the left ventricle has a thicker wall than the right ventricle.", 2, "The left ventricle pumps blood around the whole body.", "The right ventricle only pumps blood to the nearby lungs, at a lower pressure."),
    ex("Describe the advantage of a double circulatory system.", 2, "Blood returns to the heart after the lungs, so it can be pumped to the body at high pressure.", "This delivers oxygen to the body cells quickly."),
    ex("Describe how the alveoli are adapted for gas exchange.", 3, "They give a very large surface area.", "Their walls are thin, one cell thick, for a short diffusion distance.", "They have a good blood supply and are ventilated, keeping the concentration gradients steep.")
  ]);
  addTo("Blood vessels: arteries, veins, capillaries", [
    ex("Explain how arteries are adapted to their function.", 2, "Arteries carry blood at high pressure.", "They have thick, muscular, elastic walls to withstand the pressure."),
    ex("Explain how veins are adapted to their function.", 2, "Veins carry blood at low pressure.", "They have a large lumen and valves to stop the blood flowing backwards."),
    ex("Explain how capillaries are adapted for exchange.", 2, "Their walls are only one cell thick, giving a short diffusion distance.", "There are many of them, close to every cell, giving a large surface area."),
    ex("Describe the path of blood through the vessels from the heart to an organ and back.", 3,
      "Blood leaves the heart in arteries.", "It passes through capillaries in the organ, where substances are exchanged.", "It returns to the heart in veins."),
    ex("Explain why veins need valves but arteries don't.", 2, "Blood in veins is at low pressure, so it could flow backwards.", "Blood in arteries is at high pressure from the heart, so it keeps moving forwards."),
    ex("Describe how to calculate the rate of blood flow.", 1, "Rate of blood flow = volume of blood ÷ number of minutes.")
  ]);
  addTo("Blood: components and functions", [
    ex("Explain how red blood cells are adapted to carry oxygen.", 3, "They contain haemoglobin, which binds to oxygen.", "They have no nucleus, giving more room for haemoglobin.", "Their biconcave shape gives a large surface area for oxygen to diffuse."),
    ex("Describe how white blood cells protect the body.", 3, "Some engulf and digest pathogens (phagocytosis).", "Some make antibodies against pathogens.", "Some make antitoxins to neutralise toxins."),
    ex("Describe the role of plasma.", 2, "It carries the blood cells around the body.", "It carries dissolved substances such as glucose, carbon dioxide, urea and hormones.")
  ]);
  addTo("Coronary heart disease and treatments", [
    ex("Explain how coronary heart disease can cause a heart attack.", 3,
      "Fatty material builds up in the coronary arteries, narrowing them.", "Less blood flows to the heart muscle, so it gets less oxygen.", "The heart muscle can't respire, so it is damaged or dies."),
    ex("Describe how a stent treats coronary heart disease.", 2, "A metal mesh is inserted into the narrowed coronary artery.", "It holds the artery open so blood can flow to the heart muscle."),
    ex("Give one advantage and one disadvantage of using statins.", 2, "Advantage: they lower blood cholesterol, slowing the build-up of fatty material.", "Disadvantage: they must be taken long-term and can have side effects, e.g. liver problems."),
    ex("Give one advantage and one disadvantage of a heart transplant.", 2, "Advantage: it can replace a heart that is failing completely.", "Disadvantage: there may be no donor, it needs major surgery, and the heart could be rejected."),
    ex("Describe how faulty heart valves affect the heart.", 2, "The valve may not open fully, or may leak.", "So blood flows backwards and the heart pumps less efficiently.")
  ]);
  addTo("Health: communicable vs non-communicable disease", [
    ex("Describe the difference between communicable and non-communicable diseases.", 2,
      "Communicable diseases are caused by pathogens and can spread between people.", "Non-communicable diseases are not caused by pathogens and can't be passed on."),
    ex("Explain what a risk factor is.", 1, "Something linked to an increased chance of getting a disease."),
    ex("Describe how one disease can make a person more likely to get another.", 2, "A defect in the immune system makes a person more likely to get infectious diseases.", "For example, HIV weakens the immune system so other infections take hold."),
    ex("Describe the effects of smoking on health.", 2, "It increases the risk of lung disease and lung cancer.", "It increases the risk of cardiovascular disease."),
    ex("Explain why non-communicable diseases have a high human and financial cost.", 2,
      "People can suffer and die, which affects families.", "Treatment is expensive for the NHS, and people may be unable to work."),
    ex("Explain why a correlation between a risk factor and a disease doesn't prove one causes the other.", 2, "Another factor may cause both.", "A causal link needs a mechanism that explains how the risk factor causes the disease.")
  ]);
  addTo("Cancer: benign vs malignant tumours", [
    ex("Describe the difference between benign and malignant tumours.", 2, "Benign tumours stay in one place, usually within a membrane, and don't invade other tissues.",
      "Malignant tumours invade nearby tissues and spread in the blood to form secondary tumours."),
    ex("Explain how a tumour forms.", 2, "Changes in cells lead to uncontrolled growth and division.", "The cells form a mass of abnormal cells."),
    ex("Describe two lifestyle risk factors for cancer.", 2, "Smoking (lung, mouth and throat cancers).", "Obesity, UV exposure or alcohol (e.g. skin cancer from UV)."),
    ex("Explain why malignant tumours are more dangerous than benign tumours.", 2, "Malignant tumour cells spread to other parts of the body in the blood.", "They form secondary tumours, so the cancer is harder to treat."),
    ex("Describe how some cancers are linked to genetics.", 1, "Some people inherit faulty genes, e.g. BRCA, that increase their risk of certain cancers.")
  ]);
  addTo("Plant tissues: leaf structure and transpiration", [
    ex("Explain why the rate of transpiration increases on a windy day.", 2, "Wind moves water vapour away from the leaf surface.", "This keeps the concentration gradient steep, so water vapour diffuses out faster."),
    ex("Explain why the rate of transpiration is lower when the air is humid.", 2, "Humid air already contains lots of water vapour.", "So the concentration gradient between the leaf and the air is smaller."),
    ex("Describe how xylem and phloem differ.", 2, "Xylem carries water and mineral ions up from the roots; its cells are dead and strengthened by lignin.",
      "Phloem carries dissolved sugars both ways; its cells are living, with pores in the end walls.")
  ]);

  // ---------- 4.3 Infection and response ----------
  addTo("Pathogens: bacteria, viruses, fungi, protists", [
    ex("Describe how bacteria make us feel ill.", 2, "Bacteria reproduce rapidly inside the body.", "They may produce toxins that damage tissues."),
    ex("Describe how viruses make us feel ill.", 2, "Viruses live and reproduce inside cells.", "This causes cell damage when the cells burst."),
    ex("Describe three ways pathogens can be spread.", 3, "By direct contact (e.g. touching).", "By water (e.g. dirty drinking water).", "By air (e.g. droplets from coughs and sneezes)."),
    ex("Describe two ways the spread of disease can be reduced.", 2, "Good hygiene, e.g. washing hands.", "Isolating infected people, destroying or controlling vectors, or vaccination."),
    ex("Explain why antibiotics can't be used to treat viral diseases.", 2, "Antibiotics kill bacteria.", "Viruses live inside cells, so antibiotics can't kill them without damaging the cells.")
  ]);
  addTo("Examples of communicable diseases", [
    ex("Describe the symptoms of measles and how it is spread.", 2, "Fever and a red skin rash.", "It is spread by inhaling droplets from sneezes and coughs."),
    ex("Describe how HIV is spread and how it affects the body.", 3, "It is spread by sexual contact or exchange of body fluids, e.g. blood when drug users share needles.",
      "The virus attacks the body's immune cells.", "Late-stage HIV (AIDS) means the immune system is so damaged it can't deal with other infections."),
    ex("Describe how tobacco mosaic virus (TMV) affects a plant.", 2, "It causes a mosaic pattern of discoloration on the leaves.", "This reduces photosynthesis, so the plant's growth is affected."),
    ex("Describe the symptoms of Salmonella food poisoning and how it is controlled in the UK.", 3, "Fever, abdominal cramps, vomiting and diarrhoea, caused by toxins.",
      "It is spread by eating undercooked or contaminated food.", "Poultry in the UK are vaccinated against Salmonella."),
    ex("Describe how gonorrhoea is spread and how its spread can be controlled.", 3, "It is a bacterial STD spread by sexual contact.", "It is treated with antibiotics (though many strains are now resistant).", "Its spread is controlled by using condoms."),
    ex("Describe how rose black spot affects a plant and how it is treated.", 3, "Purple or black spots develop on the leaves, which often turn yellow and drop early.",
      "This reduces photosynthesis, so the plant grows less well.", "It is treated with fungicides and by removing and destroying affected leaves."),
    ex("Describe how the spread of malaria can be controlled.", 2, "Stop mosquitoes breeding, e.g. by draining standing water.", "Use mosquito nets and insecticides to avoid being bitten.")
  ]);
  addTo("Human defence systems: non-specific (skin, mucus, stomach acid)", [
    ex("Describe how the skin protects the body against pathogens.", 2, "It acts as a physical barrier.", "It produces antimicrobial secretions, and healthy skin bacteria compete with pathogens."),
    ex("Describe how the nose stops pathogens getting into the lungs.", 1, "Hairs and mucus trap particles that may contain pathogens."),
    ex("Explain how the trachea and bronchi protect the body against pathogens.", 2, "They make mucus, which traps pathogens.", "Cilia move the mucus up to the throat, where it is swallowed."),
    ex("Explain how the stomach protects the body against pathogens.", 2, "The stomach makes hydrochloric acid.", "The acid kills most pathogens that are swallowed."),
    ex("Explain why smoking increases the risk of chest infections.", 2, "Chemicals in smoke damage the cilia.", "So mucus and trapped pathogens build up in the airways."),
    ex("Explain why these defences are described as non-specific.", 1, "They work against all pathogens, not just one type."),
    ex("Explain why a cut in the skin increases the risk of infection.", 1, "It breaks the physical barrier, so pathogens can get into the body."),
    ex("Describe the role of platelets in defending the body.", 2, "Platelets help the blood to clot at a wound.", "The clot seals the wound, stopping pathogens getting in."),
    ex("Describe the difference between non-specific defences and the immune system.", 2, "Non-specific defences stop pathogens getting into the body.", "The immune system destroys pathogens that do get in."),
    ex("Explain how tears help protect the eyes.", 1, "Tears contain enzymes (lysozyme) that kill bacteria.")
  ]);
  addTo("The immune response: white blood cells, antibodies", [
    ex("Describe three ways white blood cells defend the body.", 3, "Phagocytosis: engulfing and digesting pathogens.", "Producing antibodies.", "Producing antitoxins."),
    ex("Explain why antibodies are specific.", 2, "Each antibody has a shape that is complementary to one antigen.", "So it only binds to one type of pathogen."),
    ex("Explain why you usually only catch a disease such as chickenpox once.", 3, "After the first infection, memory cells stay in the blood.",
      "If the same pathogen enters again, they produce the right antibodies very quickly.", "The pathogen is destroyed before it can make you ill."),
    ex("Describe what an antigen is.", 1, "A protein on the surface of a cell or pathogen that the immune system recognises."),
    ex("Describe how phagocytes destroy pathogens.", 2, "They engulf the pathogen.", "They digest it using enzymes."),
    ex("Describe the role of antitoxins.", 1, "They bind to and neutralise the toxins produced by bacteria."),
    ex("Explain why it takes a few days to recover from a new infection.", 2, "White blood cells take time to make the right antibodies the first time.", "Meanwhile the pathogen reproduces and causes symptoms."),
    ex("Explain how antibodies help destroy pathogens.", 2, "Antibodies bind to antigens on the pathogen.", "This clumps pathogens together or marks them, so phagocytes can destroy them more easily."),
    ex("Explain why the number of white blood cells increases during an infection.", 1, "More white blood cells are made to fight the pathogen.")
  ]);
  addTo("Vaccination and herd immunity", [
    ex("Describe how vaccination prevents illness.", 3, "A small amount of dead or inactive pathogen is injected.", "White blood cells produce antibodies and memory cells.",
      "If the real pathogen enters, antibodies are made quickly and the person doesn't become ill."),
    ex("Explain how herd immunity protects people who can't be vaccinated.", 2, "If a large proportion of the population is immune, the pathogen can't spread easily.", "So unvaccinated people are less likely to meet someone who is infected."),
    ex("Explain why the vaccine for a disease may need to change from year to year.", 2, "The pathogen mutates, changing its antigens.", "Antibodies from the old vaccine no longer fit, e.g. for flu."),
    ex("Give one advantage and one disadvantage of vaccination.", 2, "Advantage: it can control or wipe out a disease, e.g. smallpox.", "Disadvantage: some people get mild side effects such as a sore arm or fever."),
    ex("Explain why a vaccine uses a dead or inactive form of the pathogen.", 1, "So it triggers an immune response without causing the disease."),
    ex("Explain why booster doses of some vaccines are given.", 2, "The number of antibodies and memory cells can fall over time.", "A booster triggers a stronger secondary response, giving longer-lasting immunity."),
    ex("Explain why a vaccine for measles doesn't protect you against chickenpox.", 2, "Antibodies are specific to one antigen.", "The chickenpox virus has different antigens."),
    ex("Explain why a large proportion of the population needs to be vaccinated.", 1, "To give herd immunity, so the pathogen can't spread."),
    ex("Describe how the number of antibodies changes after a second exposure, compared with the first.", 2, "They are produced faster.", "Many more antibodies are produced.")
  ]);
  addTo("Antibiotics: how they work and resistance", [
    ex("Explain why antibiotics should not be prescribed for colds.", 2, "Colds are caused by viruses, which antibiotics don't kill.", "Unnecessary use increases the risk of antibiotic resistance."),
    ex("Explain why patients should finish their course of antibiotics.", 2, "To make sure all the bacteria are killed.", "So no bacteria survive to mutate and form resistant strains."),
    ex("Describe how a strain of antibiotic-resistant bacteria develops.", 3, "A mutation makes some bacteria resistant to an antibiotic.",
      "The antibiotic kills the non-resistant bacteria, but the resistant ones survive and reproduce.", "The resistant strain spreads because there is no competition."),
    ex("Explain why antibiotic resistance is a problem.", 2, "Infections caused by resistant bacteria, e.g. MRSA, are hard to treat.", "New antibiotics take a long time to develop."),
    ex("Describe the difference between antibiotics and painkillers.", 2, "Antibiotics kill bacteria inside the body.", "Painkillers only treat the symptoms; they don't kill pathogens."),
    ex("Describe two ways to reduce the development of antibiotic resistance.", 2, "Doctors should only prescribe antibiotics when really needed.", "Restrict their use in farming, and patients should finish the course."),
    ex("Explain why specific antibiotics are used for specific bacteria.", 1, "Different antibiotics kill different types of bacteria, so using the right one is more effective.")
  ]);
  addTo("Drug development: clinical trials, double-blind", [
    ex("Describe the three things new drugs are tested for.", 3, "Toxicity: whether it is harmful.", "Efficacy: whether it works.", "Dose: the best amount to give."),
    ex("Describe the stages of developing a new drug.", 3, "Preclinical testing on cells, tissues and live animals.", "Clinical trials on healthy volunteers with low doses, to test for side effects.",
      "Then trials on patients to find the optimum dose and whether it works."),
    ex("Explain why very low doses are used at the start of a clinical trial.", 1, "In case the drug has harmful side effects."),
    ex("Explain why the results of drug trials are peer reviewed before publishing.", 2, "Other scientists check the results.", "This helps prevent false claims and checks the methods are valid."),
    ex("Describe where these drugs were first found: digitalis, aspirin and penicillin.", 3, "Digitalis comes from foxgloves.", "Aspirin comes from willow.", "Penicillin was discovered by Alexander Fleming from the Penicillium mould.")
  ]);
  addTo("Monoclonal antibodies: production and uses", [
    ex("Describe how monoclonal antibodies are produced.", 4, "A mouse is injected with an antigen so its lymphocytes make the antibody.", "The lymphocytes are combined with tumour cells to make hybridoma cells.",
      "A single hybridoma cell is cloned.", "The clones produce lots of identical antibodies, which are collected and purified."),
    ex("Explain why lymphocytes are combined with tumour cells.", 2, "Lymphocytes make antibodies but don't divide.", "Tumour cells divide rapidly, so the hybridoma cell both divides and makes antibodies."),
    ex("Describe how monoclonal antibodies are used in pregnancy tests.", 2, "They bind to the hormone HCG, found in the urine of pregnant women.", "This causes a coloured line to appear on the test strip."),
    ex("Explain how monoclonal antibodies can be used to treat cancer.", 2, "They are made to bind to antigens on cancer cells.", "They can carry a drug or radioactive substance to the cancer cells, so other cells aren't harmed."),
    ex("Explain why monoclonal antibodies are specific.", 1, "They are all identical, so they bind only to one specific antigen."),
    ex("Give one disadvantage of using monoclonal antibodies.", 1, "They can cause more side effects than expected, e.g. fever or low blood pressure."),
    ex("Describe two uses of monoclonal antibodies in the lab or hospital.", 2, "Measuring levels of hormones or chemicals in the blood, or detecting pathogens.", "Locating or identifying specific molecules in cells by binding to them with a fluorescent dye."),
    ex("Explain why monoclonal antibodies are not as widely used as scientists first hoped.", 1, "They caused more side effects than expected.")
  ]);
  addTo("Plant disease: detection and defence", [
    ex("Describe three signs that a plant may have a disease.", 3, "Stunted growth.", "Spots or areas of decay on leaves.", "Discoloration, growths, malformed stems or leaves, or visible pests."),
    ex("Describe how plants can be tested to identify a disease.", 2, "Use a gardening manual or website, or take infected plants to a lab.", "Use testing kits that contain monoclonal antibodies."),
    ex("Describe the physical defences plants have against pathogens.", 3, "A cellulose cell wall.", "A tough waxy cuticle on the leaves.", "A layer of dead cells on the stem (bark), which falls off."),
    ex("Describe the mechanical defences plants have against animals.", 2, "Thorns and hairs deter animals.", "Leaves that droop or curl when touched, or mimicry to trick animals."),
    ex("Explain how a lack of nitrate ions affects a plant.", 2, "Nitrates are needed to make proteins.", "So the plant has stunted growth."),
    ex("Explain how a lack of magnesium ions affects a plant.", 2, "Magnesium is needed to make chlorophyll.", "So the leaves turn yellow (chlorosis) and photosynthesis is reduced.")
  ]);

  // ---------- 4.4 Bioenergetics ----------
  addTo("Photosynthesis equation (word and symbol)", [
    ex("Explain why photosynthesis is described as endothermic.", 1, "Energy is transferred from the environment (as light) to the chloroplasts."),
    ex("Describe how a plant uses the glucose it makes.", 3, "For respiration.", "Converted into starch for storage, or cellulose to strengthen the cell wall.",
      "To make fats or oils for storage, and amino acids (with nitrates) to make proteins."),
    ex("Explain why plants store glucose as starch.", 2, "Starch is insoluble.", "So it doesn't affect the water balance of cells by osmosis."),
    ex("Describe where the reactants for photosynthesis come from.", 2, "Carbon dioxide diffuses in from the air through the stomata.", "Water is absorbed from the soil by the roots and carried in the xylem."),
    ex("Explain why the leaves of a plant left in the dark contain no starch.", 2, "There is no light, so no photosynthesis takes place.", "The stored starch has been used up in respiration.")
  ]);
  addTo("Adaptations of the leaf for photosynthesis", [
    ex("Explain why palisade cells are near the top of the leaf.", 2, "They contain lots of chloroplasts.", "Being near the top means they absorb the most light."),
    ex("Explain how the spongy mesophyll is adapted for gas exchange.", 2, "It has air spaces between the cells.", "These let gases diffuse quickly to and from the cells."),
    ex("Explain why leaves are broad and flat.", 1, "This gives a large surface area to absorb light."),
    ex("Explain why leaves are thin.", 1, "It gives a short diffusion distance for carbon dioxide to reach the cells."),
    ex("Explain why leaves have veins.", 2, "Xylem in the veins brings water to the leaf cells for photosynthesis.", "Phloem carries the sugars made away to the rest of the plant.")
  ]);
  addTo("Limiting factors: light, CO₂, temperature", [
    ex("Explain what is meant by a limiting factor.", 1, "The factor in shortest supply that stops the rate of photosynthesis increasing."),
    ex("Explain why increasing the light intensity increases the rate of photosynthesis, up to a point.", 2, "Light provides the energy for photosynthesis.", "Beyond a point, another factor such as CO₂ or temperature becomes limiting."),
    ex("Explain why the rate of photosynthesis falls at high temperatures.", 2, "Photosynthesis is controlled by enzymes.", "At high temperatures the enzymes are denatured."),
    ex("Explain how carbon dioxide concentration affects the rate of photosynthesis.", 2, "CO₂ is a reactant, so more CO₂ increases the rate.", "Until another factor such as light or temperature becomes limiting."),
    ex("Explain why the rate of photosynthesis is low on a cold, sunny winter day.", 2, "Temperature is the limiting factor.", "Enzymes work slowly at low temperatures."),
    ex("Explain why a plant in a dim room grows slowly even when watered well.", 2, "Light intensity is the limiting factor.", "So the plant makes less glucose for growth."),
    ex("Describe how the amount of chlorophyll can be a limiting factor.", 2, "Chlorophyll absorbs the light for photosynthesis.", "Disease or a lack of magnesium reduces chlorophyll, so less light is absorbed."),
    ex("Explain why the rate of photosynthesis levels off on a graph of rate against light intensity.", 1, "Something else, such as CO₂ concentration or temperature, has become the limiting factor.")
  ]);
  addTo("Limiting factors in depth: interactions, the inverse square law and greenhouse costs", [
    ex("Explain what the inverse square law means for light intensity.", 2, "Light intensity is inversely proportional to the square of the distance.", "So doubling the distance gives one quarter of the light intensity."),
    ex("Explain why farmers add paraffin heaters to greenhouses.", 2, "The heaters raise the temperature, so enzymes work faster.", "Burning paraffin also releases CO₂, increasing photosynthesis."),
    ex("Explain why a farmer may not increase the CO₂ concentration in a greenhouse beyond a certain level.", 2, "Above a certain level CO₂ is no longer limiting, so the rate doesn't increase.", "The extra cost wouldn't be covered by the increase in yield."),
    ex("Describe how to interpret a graph with two lines for rate of photosynthesis at different CO₂ concentrations.", 2,
      "Where the lines are the same, light intensity is the limiting factor.", "Where the higher CO₂ line rises above, CO₂ was limiting the lower line."),
    ex("Explain why greenhouse owners use artificial lighting.", 2, "It allows photosynthesis to continue at night and on dull days.", "So crops grow faster and give a higher yield."),
    ex("Explain how a farmer decides on the best conditions in a greenhouse.", 2, "The conditions must give the fastest rate of photosynthesis.", "While still making a profit, balancing the extra cost with the extra yield."),
    ex("Calculate the change in light intensity when a lamp is moved from 10 cm to 20 cm away, and explain your answer.", 2, "The distance doubles.", "So light intensity falls to 1/2² = 1/4 of the original."),
    ex("Explain why a raised temperature only increases the rate of photosynthesis if light and CO₂ are not limiting.", 2,
      "The rate is set by whichever factor is in shortest supply.", "If light or CO₂ is limiting, warming won't increase the rate."),
    ex("Explain why plants in greenhouses are less likely to get pests.", 1, "The enclosed space keeps out many pests, and pesticides or biological control can be used easily.")
  ]);
  addTo("Required practical: investigating the rate of photosynthesis", [
    ex("Describe how to investigate the effect of light intensity on the rate of photosynthesis using pondweed.", 4,
      "Place pondweed in a test tube of water with sodium hydrogencarbonate.", "Place a lamp at a set distance from the tube.",
      "Count the oxygen bubbles produced in one minute (or collect the gas in a syringe).", "Repeat at different distances, keeping everything else the same."),
    ex("Explain why sodium hydrogencarbonate is added to the water.", 1, "It supplies carbon dioxide, so CO₂ is not a limiting factor."),
    ex("Explain why the number of bubbles is used to measure the rate.", 1, "The bubbles are oxygen, which is produced by photosynthesis."),
    ex("Explain why the pondweed is left for a few minutes before counting the bubbles.", 1, "To let it adjust to the new light intensity."),
    ex("Explain why a beaker of water or a heat shield is placed between the lamp and the pondweed.", 2, "The lamp gives off heat as well as light.", "This keeps the temperature constant so only light intensity changes."),
    ex("Explain why counting bubbles may not be accurate.", 2, "Bubbles can be different sizes.", "Some may be missed if they come quickly; collecting gas in a syringe is more accurate."),
    ex("Name two control variables in this investigation.", 2, "Temperature.", "Carbon dioxide concentration, the type of pondweed or the length of pondweed."),
    ex("Describe what the results would show as the lamp is moved further away.", 2, "Fewer bubbles are produced.", "Because the light intensity is lower, so the rate of photosynthesis is lower."),
    ex("Explain why the room should be darkened during this experiment.", 1, "So the only light reaching the pondweed comes from the lamp."),
    ex("Describe how to make the results more reliable.", 1, "Repeat each distance several times and calculate a mean.")
  ]);
  addTo("Aerobic respiration equation", [
    ex("Explain why respiration is described as exothermic.", 1, "It transfers energy to the environment."),
    ex("Describe three ways organisms use the energy from respiration.", 3, "To build larger molecules from smaller ones.", "For movement (muscle contraction).", "To keep warm."),
    ex("Explain why aerobic respiration releases more energy than anaerobic respiration.", 2, "Glucose is completely oxidised in aerobic respiration.", "In anaerobic respiration the glucose is only partly broken down."),
    ex("Describe where aerobic respiration takes place.", 1, "Mainly in the mitochondria.")
  ]);
  addTo("Anaerobic respiration: fermentation, muscle fatigue", [
    ex("Explain why muscles respire anaerobically during vigorous exercise.", 2, "Muscles need more energy than aerobic respiration can supply.", "Not enough oxygen reaches them."),
    ex("Describe anaerobic respiration in yeast.", 2, "Glucose is broken down into ethanol and carbon dioxide.", "This is called fermentation."),
    ex("Explain why fermentation is useful in making bread.", 2, "Yeast produces carbon dioxide.", "The gas makes the dough rise."),
    ex("Explain why fermentation is useful in making beer and wine.", 1, "Yeast produces ethanol (alcohol)."),
    ex("Explain why muscles become fatigued during long periods of vigorous activity.", 2, "Lactic acid builds up in the muscles.", "This stops them contracting efficiently."),
    ex("Describe the difference between anaerobic respiration in muscles and in plants or yeast.", 2, "In muscles, glucose is broken down into lactic acid.", "In plants and yeast, glucose is broken down into ethanol and carbon dioxide."),
    ex("Explain why anaerobic respiration can only be used for a short time in muscles.", 2, "It releases much less energy than aerobic respiration.", "Lactic acid builds up, causing fatigue."),
    ex("Describe a test to show that yeast produces carbon dioxide.", 2, "Bubble the gas through limewater.", "Limewater turns cloudy (milky) if carbon dioxide is present.")
  ]);
  addTo("Exercise: effects on breathing rate and heart rate", [
    ex("Explain why heart rate increases during exercise.", 3, "Muscles respire more, so they need more oxygen and glucose.", "The heart pumps faster to deliver more blood to the muscles.", "This also removes carbon dioxide faster."),
    ex("Explain why breathing rate and breath volume increase during exercise.", 2, "More oxygen is taken into the blood.", "More carbon dioxide is removed from the body."),
    ex("Describe how to investigate the effect of exercise on heart rate.", 3, "Measure your resting pulse rate for one minute.", "Exercise for a set time, e.g. 2 minutes of step-ups.", "Measure the pulse rate straight away and repeat at intervals until it returns to normal."),
    ex("Explain why a fitter person's heart rate returns to normal more quickly after exercise.", 2, "Their heart pumps more blood with each beat.", "So oxygen debt is repaid more quickly."),
    ex("Explain why breathing rate stays high for a while after exercise has stopped.", 2, "The body needs extra oxygen to repay the oxygen debt.", "It is used to break down lactic acid."),
    ex("Explain why muscles get hotter during exercise.", 2, "Muscles respire faster.", "Respiration releases energy, some of it as heat."),
    ex("Explain why measuring the pulse is a measure of heart rate.", 1, "Each pulse is caused by one heartbeat pushing blood through an artery."),
    ex("Describe how the body supplies muscles with more glucose during exercise.", 2, "Glycogen stored in the muscles and liver is converted to glucose.", "Faster blood flow carries more glucose to the muscles.")
  ]);
  addTo("Oxygen debt: lactic acid converted back to glucose in the liver", [
    ex("Explain what is meant by oxygen debt.", 1, "The amount of extra oxygen needed after exercise to react with the lactic acid built up in the muscles."),
    ex("Describe how lactic acid is removed from the body after exercise.", 3, "Blood carries the lactic acid from the muscles to the liver.", "In the liver it is converted back into glucose.", "This needs oxygen."),
    ex("Explain why you keep breathing heavily after exercise.", 2, "You need extra oxygen to repay the oxygen debt.", "This oxygen is used to break down lactic acid."),
    ex("Explain why the heart rate stays high after exercise.", 2, "To carry lactic acid to the liver quickly.", "And to supply oxygen to remove it."),
    ex("Explain why an athlete who sprints builds up a larger oxygen debt than one who jogs.", 2, "Sprinting needs energy faster than aerobic respiration can provide.", "So more anaerobic respiration happens and more lactic acid is made."),
    ex("Describe the role of the liver after vigorous exercise.", 1, "It converts lactic acid back into glucose."),
    ex("Explain why training can reduce the size of the oxygen debt.", 2, "Training makes the heart and lungs more efficient.", "So more oxygen reaches the muscles and less anaerobic respiration is needed."),
    ex("Explain why lactic acid causes problems if it builds up in muscles.", 1, "It causes muscle fatigue, so muscles stop contracting efficiently."),
    ex("Describe what happens to the glucose made from lactic acid in the liver.", 1, "It can be used for respiration or stored as glycogen.")
  ]);

  // ---------- 4.5 Homeostasis and response ----------
  addTo("Homeostasis: definition and importance", [
    ex("Explain why homeostasis is important.", 2, "It keeps internal conditions at optimal levels.", "So cells and enzymes work properly."),
    ex("Describe three conditions controlled by homeostasis in the human body.", 3, "Blood glucose concentration.", "Body temperature.", "Water levels."),
    ex("Describe the parts of an automatic control system.", 3, "Receptors detect stimuli.", "Coordination centres (brain, spinal cord, pancreas) process the information.", "Effectors (muscles or glands) bring about responses."),
    ex("Explain why body temperature must stay close to 37 °C.", 2, "This is the optimum temperature for the body's enzymes.", "Too high and enzymes denature; too low and reactions are too slow."),
    ex("Describe the difference between nervous and hormonal control.", 2, "Nervous control is fast and short-lasting, using electrical impulses.", "Hormonal control is slower and longer-lasting, using chemicals in the blood.")
  ]);
  addTo("The nervous system: CNS, neurones, synapses", [
    ex("Describe how information passes along the nervous system from a receptor to an effector.", 3, "A receptor detects a stimulus and sends impulses along sensory neurones.", "The CNS coordinates a response.", "Impulses travel along motor neurones to the effector."),
    ex("Describe how a nerve impulse crosses a synapse.", 3, "The impulse arrives at the end of the neurone.", "A chemical (neurotransmitter) is released and diffuses across the gap.", "It binds to the next neurone and starts a new impulse."),
    ex("Explain what the CNS is made of.", 1, "The brain and spinal cord."),
    ex("Describe two ways effectors can respond.", 2, "Muscles contract.", "Glands release hormones."),
    ex("Explain why damage to the spinal cord can cause paralysis.", 2, "Impulses can't pass between the brain and the body below the damage.", "So muscles there receive no impulses.")
  ]);
  addTo("Reflex arc: sensory, relay, motor neurones", [
    ex("Explain why reflexes are important.", 2, "They are fast and automatic.", "So they protect the body from harm, e.g. pulling your hand from a hot object."),
    ex("Describe the path of a reflex arc after touching a hot object.", 4, "Receptors in the skin detect the heat.", "Impulses travel along a sensory neurone to the spinal cord.",
      "A relay neurone passes the impulse to a motor neurone.", "The motor neurone carries the impulse to a muscle, which contracts."),
    ex("Explain why reflex actions are faster than voluntary actions.", 2, "The impulse doesn't go to the conscious part of the brain.", "So fewer synapses are involved and no decision is made."),
    ex("Describe two examples of reflex actions.", 2, "Pupils getting smaller in bright light.", "Pulling away from a hot object, blinking, or the knee-jerk reflex."),
    ex("Explain why the synapse slows the impulse down.", 1, "The chemical has to diffuse across the gap, which is slower than an electrical impulse."),
    ex("Explain why the pupil reflex is important.", 1, "It protects the retina from damage by bright light.")
  ]);
  addTo("Required practical: measuring reaction time", [
    ex("Describe how to measure reaction time using a ruler.", 4, "One person holds a ruler vertically with the 0 cm mark between the other's finger and thumb.",
      "The ruler is dropped without warning.", "The catcher catches it as quickly as possible and the distance is read.", "Repeat several times and convert the distance to a time using a table."),
    ex("Explain why the ruler is dropped without warning.", 1, "So the catcher reacts to the ruler falling rather than predicting when it will fall."),
    ex("Explain why the test is repeated several times.", 2, "Results vary from one go to the next.", "A mean is more reliable and anomalies can be spotted."),
    ex("Explain why the same hand should be used each time.", 1, "Your dominant hand may react faster, so using the same hand keeps the test fair."),
    ex("Describe how caffeine might affect reaction time and why.", 2, "Caffeine reduces (speeds up) reaction time.", "It is a stimulant that increases the activity of the nervous system."),
    ex("Name two control variables in a reaction time investigation.", 2, "The starting height of the ruler.", "The hand used, the person dropping it, and time between tests."),
    ex("Explain why a computer test is more accurate than the ruler drop test.", 2, "It measures time directly, to the nearest millisecond.", "There is no human error in reading the ruler."),
    ex("Explain why reaction times may get shorter with practice.", 1, "The person learns what to expect and gets better at the task."),
    ex("Explain why the catcher should rest their arm on a table.", 1, "To keep the position of the hand the same each time."),
    ex("Describe a hazard in the caffeine investigation and how to reduce it.", 2, "Too much caffeine can be harmful, and some people are sensitive to it.", "Use only small amounts and don't test people with health conditions.")
  ]);
  addTo("The brain: regions and functions", [
    ex("Describe the function of the cerebral cortex.", 1, "It is responsible for consciousness, intelligence, memory and language."),
    ex("Describe the function of the cerebellum.", 1, "It coordinates muscle activity and balance."),
    ex("Describe the function of the medulla.", 1, "It controls unconscious activities such as heart rate and breathing."),
    ex("Explain why it is difficult to treat brain damage.", 3, "The brain is complex and delicate.", "It is hard to reach without damaging other tissue.", "We don't fully understand how it works."),
    ex("Describe two ways scientists have mapped the regions of the brain.", 2, "Studying patients with brain damage.", "Electrically stimulating parts of the brain, or using MRI scans."),
    ex("Explain why MRI scans are useful to study the brain.", 2, "They show which parts of the brain are active.", "They don't involve cutting into the brain."),
    ex("Explain why a person with damage to the medulla might need a ventilator.", 2, "The medulla controls breathing.", "So the person may not be able to breathe without help.")
  ]);
  addTo("The eye: structure and function, accommodation", [
    ex("Describe how the eye focuses on a near object.", 3, "The ciliary muscles contract.", "The suspensory ligaments loosen.", "The lens becomes thicker and refracts light more strongly."),
    ex("Describe how the eye focuses on a distant object.", 3, "The ciliary muscles relax.", "The suspensory ligaments are pulled tight.", "The lens is pulled thin and refracts light less."),
    ex("Explain how the iris responds to bright light.", 2, "The circular muscles contract and the radial muscles relax.", "The pupil gets smaller, letting less light in.")
  ]);
  addTo("Thermoregulation: vasodilation, sweating, shivering", [
    ex("Explain how sweating cools the body.", 2, "Sweat is released onto the skin.", "When it evaporates it transfers energy from the skin to the environment."),
    ex("Explain how vasodilation helps cool the body.", 2, "Blood vessels near the skin surface widen.", "More blood flows near the surface, so more heat is transferred to the environment."),
    ex("Explain how the body responds when it is too cold.", 3, "Blood vessels near the skin constrict (vasoconstriction), reducing heat loss.", "Sweating stops.", "Muscles contract rapidly (shivering), releasing heat from respiration."),
    ex("Describe the role of the thermoregulatory centre.", 2, "It is in the brain and contains receptors sensitive to blood temperature.", "It receives impulses from skin receptors and coordinates the response."),
    ex("Explain why shivering warms the body.", 2, "Muscles contract rapidly.", "This needs respiration, which releases energy as heat.")
  ]);
  addTo("Hormones: endocrine glands and target organs", [
    ex("Describe how hormones travel to their target organs.", 2, "Hormones are secreted by glands directly into the bloodstream.", "The blood carries them to the target organ."),
    ex("Describe the role of the pituitary gland.", 2, "It is a master gland in the brain.", "It releases hormones that make other glands release hormones."),
    ex("Describe the role of adrenaline.", 3, "It is made by the adrenal glands in times of fear or stress.", "It increases heart rate.", "It boosts the delivery of oxygen and glucose to the brain and muscles, preparing the body for fight or flight."),
    ex("Describe the role of thyroxine.", 2, "It is made by the thyroid gland.", "It controls the basal metabolic rate, which is important for growth and development."),
    ex("Explain why hormones affect only certain organs.", 1, "Only the target organs have receptors for that hormone.")
  ]);
  addTo("Blood glucose control: insulin, diabetes", [
    ex("Describe how the body responds when blood glucose concentration is too high.", 3, "The pancreas detects the rise and releases insulin.", "Insulin causes glucose to move from the blood into cells.", "In the liver and muscles, excess glucose is converted to glycogen for storage."),
    ex("Explain why blood glucose concentration rises after a meal.", 1, "Carbohydrates are digested into glucose, which is absorbed into the blood."),
    ex("Explain why blood glucose concentration falls during exercise.", 2, "Muscles respire faster.", "They take up more glucose from the blood."),
    ex("Describe the role of the pancreas in blood glucose control.", 2, "It monitors the blood glucose concentration.", "It releases insulin when glucose is high and glucagon when it is low."),
    ex("Explain why people with diabetes must monitor their blood glucose.", 2, "Their body can't control blood glucose properly.", "Very high or low levels can be dangerous, so they adjust their insulin, diet or exercise."),
    ex("Explain why glucose is stored as glycogen and not left in the blood.", 2, "High blood glucose can damage cells by osmosis.", "Glycogen is insoluble and can be broken down when glucose is needed."),
    ex("Describe how a person with type 1 diabetes can control their blood glucose.", 2, "Insulin injections, usually at mealtimes.", "Watching their diet and exercise."),
    ex("Explain why insulin is injected and not taken as a tablet.", 2, "Insulin is a protein.", "It would be digested by enzymes in the stomach.")
  ]);
  addTo("Type 1 vs Type 2 diabetes: causes and treatments", [
    ex("Describe the cause of type 1 diabetes.", 1, "The pancreas produces too little or no insulin."),
    ex("Describe the cause of type 2 diabetes.", 1, "Body cells no longer respond to insulin."),
    ex("Describe how type 2 diabetes is treated.", 2, "A carbohydrate-controlled diet.", "An exercise regime, and sometimes medication."),
    ex("Explain why obesity is a risk factor for type 2 diabetes.", 2, "Being obese is linked with cells becoming less sensitive to insulin.", "So blood glucose isn't controlled."),
    ex("Describe two differences between type 1 and type 2 diabetes.", 2, "Type 1: no insulin is made; type 2: cells don't respond to insulin.", "Type 1 is treated with insulin injections; type 2 mainly with diet and exercise."),
    ex("Explain why type 1 diabetes usually develops in childhood.", 1, "It is often caused by the immune system destroying insulin-making cells in the pancreas, which happens early in life."),
    ex("Explain why type 2 diabetes cases are increasing in the UK.", 2, "More people are overweight or obese.", "Diets are high in sugar and people exercise less.")
  ]);
  addTo("Glucagon and insulin: negative feedback", [
    ex("Describe how the body responds when blood glucose concentration is too low.", 3, "The pancreas releases glucagon.", "Glucagon causes glycogen in the liver to be converted into glucose.", "The glucose is released into the blood."),
    ex("Explain what is meant by negative feedback.", 2, "A change from the normal level is detected.", "The body responds to reverse the change and return to normal."),
    ex("Explain how insulin and glucagon work together in negative feedback.", 3, "If glucose rises, insulin is released and glucose is stored as glycogen.", "If glucose falls, glucagon is released and glycogen is broken down.",
      "So glucose levels stay within a narrow range."),
    ex("Describe the difference between glucose, glycogen and glucagon.", 3, "Glucose is a sugar used in respiration.", "Glycogen is a storage carbohydrate in the liver and muscles.", "Glucagon is a hormone that raises blood glucose."),
    ex("Explain why blood glucose levels rise and fall throughout the day.", 2, "They rise after meals.", "They fall during exercise or between meals, and hormones bring them back."),
    ex("Explain why glucagon is released during exercise.", 2, "Muscles use glucose faster, so blood glucose falls.", "Glucagon raises it by converting glycogen to glucose."),
    ex("Explain why the liver is important in controlling blood glucose.", 2, "It stores excess glucose as glycogen.", "It converts glycogen back to glucose when needed."),
    ex("Explain why insulin and glucagon are described as having opposite effects.", 1, "Insulin lowers blood glucose; glucagon raises it."),
    ex("Describe what happens to blood glucose if the pancreas stops making glucagon.", 2, "Blood glucose can't be raised when it falls.", "Levels could drop dangerously low, e.g. during exercise or between meals."),
    ex("Explain why the pancreas is both the receptor and coordination centre in glucose control.", 1, "It detects blood glucose levels and releases the hormones in response.")
  ]);
  addTo("Osmoregulation: kidneys and water balance", [
    ex("Explain why the water level in the body must be controlled.", 2, "If body cells lose or gain too much water by osmosis they don't work properly.", "Animal cells can shrink or burst."),
    ex("Describe how the kidneys produce urine.", 3, "The blood is filtered.", "All the glucose, some ions and the water needed are selectively reabsorbed.", "Urea, excess ions and excess water leave in the urine."),
    ex("Describe three ways water leaves the body.", 3, "From the lungs during exhalation.", "Through the skin in sweat.", "Through the kidneys in urine."),
    ex("Explain why urine is more concentrated on a hot day.", 2, "More water is lost in sweat.", "The kidneys reabsorb more water, so less water is lost in urine."),
    ex("Explain why glucose is not normally found in urine.", 1, "All the glucose is reabsorbed back into the blood.")
  ]);
  addTo("Osmoregulation in depth: urea formation and ADH", [
    ex("Describe how urea is made.", 2, "Excess amino acids are deaminated in the liver to form ammonia.", "Ammonia is toxic, so it is immediately converted to urea for safe excretion."),
    ex("Describe how ADH controls water levels when the blood is too concentrated.", 3, "The brain detects that the blood is too concentrated.", "The pituitary gland releases more ADH into the blood.",
      "ADH makes the kidney tubules more permeable, so more water is reabsorbed."),
    ex("Explain how a kidney dialysis machine works.", 3, "Blood flows between partially permeable membranes surrounded by dialysis fluid.", "The fluid has the same concentration of useful substances as normal blood, so these aren't lost.",
      "Urea and excess ions diffuse out of the blood into the fluid."),
    ex("Give one advantage and one disadvantage of a kidney transplant compared with dialysis.", 2, "Advantage: the patient is free from regular dialysis sessions and diet restrictions.", "Disadvantage: there's a shortage of donors and the kidney could be rejected."),
    ex("Explain why kidney transplant patients take drugs that suppress the immune system.", 2, "The donor kidney has different antigens.", "So the immune system could attack and reject it."),
    ex("Explain why ADH release is reduced after drinking lots of water.", 2, "The blood becomes too dilute.", "Less ADH means less water is reabsorbed, so more dilute urine is made."),
    ex("Explain why ammonia is converted into urea.", 1, "Ammonia is toxic, while urea is less toxic and can be safely excreted.")
  ]);
  addTo("Hormones in reproduction: FSH, LH, oestrogen and progesterone", [
    ex("Describe the roles of FSH and LH in the menstrual cycle.", 2, "FSH causes an egg to mature in the ovary.", "LH stimulates the release of the egg (ovulation)."),
    ex("Describe the role of oestrogen and progesterone.", 2, "Oestrogen causes the lining of the uterus to build up.", "Progesterone maintains the uterus lining."),
    ex("Describe the role of testosterone.", 2, "Testosterone is made by the testes.", "It stimulates sperm production."),
    ex("Explain why the uterus lining breaks down at the end of the cycle.", 2, "Progesterone levels fall if the egg isn't fertilised.", "Without progesterone the lining isn't maintained."),
    ex("Describe the role of oestrogen at puberty.", 1, "Oestrogen is the main female reproductive hormone, made in the ovary, causing secondary sexual characteristics.")
  ]);
  addTo("How hormones interact to control the menstrual cycle", [
    ex("Explain how FSH and oestrogen interact.", 2, "FSH stimulates the ovaries to make oestrogen.", "Oestrogen inhibits FSH and stimulates LH release."),
    ex("Explain why only one egg usually matures each cycle.", 2, "Oestrogen made by the developing follicle inhibits FSH.", "So no more eggs are stimulated to mature."),
    ex("Describe what triggers ovulation.", 2, "High levels of oestrogen stimulate the pituitary to release LH.", "A surge of LH causes the egg to be released."),
    ex("Explain how progesterone affects FSH and LH.", 2, "Progesterone inhibits both FSH and LH.", "This stops more eggs maturing while the uterus lining is maintained."),
    ex("Describe what happens to hormone levels if the egg is fertilised.", 2, "Progesterone levels stay high.", "So the uterus lining is maintained for the embryo."),
    ex("Explain why the menstrual cycle is described as being controlled by negative feedback.", 2, "Hormones made by the ovaries inhibit hormones from the pituitary.", "This keeps the cycle regular and repeating."),
    ex("Describe where FSH, LH, oestrogen and progesterone are made.", 2, "FSH and LH are made in the pituitary gland.", "Oestrogen and progesterone are made in the ovaries."),
    ex("Describe the changes in the uterus lining during the menstrual cycle.", 3, "Days 1–4: the lining breaks down (menstruation).", "Days 4–14: oestrogen causes the lining to build up.", "Days 14–28: progesterone maintains the lining."),
    ex("Explain why the hormone levels in the cycle repeat roughly every 28 days.", 2, "When progesterone falls, FSH is no longer inhibited.", "So FSH rises again and a new cycle begins."),
    ex("Explain how a contraceptive pill containing oestrogen can prevent pregnancy.", 2, "High oestrogen levels inhibit FSH.", "So no eggs mature.")
  ]);
  addTo("Contraception: hormonal and non-hormonal", [
    ex("Describe how barrier methods of contraception work.", 2, "Condoms and diaphragms stop the sperm reaching an egg.", "Condoms also protect against sexually transmitted infections."),
    ex("Describe how the progesterone-only pill prevents pregnancy.", 2, "It thickens the mucus at the cervix.", "This stops sperm reaching the egg."),
    ex("Give one advantage and one disadvantage of the contraceptive pill.", 2, "Advantage: it is over 99% effective if taken correctly.", "Disadvantage: it can have side effects, it must be taken daily, and it doesn't protect against STIs."),
    ex("Describe how spermicidal agents work.", 1, "They kill or disable sperm."),
    ex("Describe how an intrauterine device (IUD) works.", 2, "It is placed in the uterus.", "It prevents an embryo implanting, and some release hormones."),
    ex("Explain why some people prefer non-hormonal contraception.", 2, "Hormonal methods can have side effects, e.g. mood changes.", "Some people have religious or personal reasons."),
    ex("Describe how surgical methods of contraception work.", 2, "In women, the oviducts are cut or tied.", "In men, the sperm ducts are cut (vasectomy)."),
    ex("Describe how abstaining during the fertile time prevents pregnancy.", 2, "Intercourse is avoided around the time an egg may be in the oviduct.", "So sperm can't meet the egg.")
  ]);
  addTo("Fertility treatments: IVF, fertility drugs", [
    ex("Describe how IVF is carried out.", 4, "The woman is given FSH and LH to stimulate several eggs to mature.", "The eggs are collected and fertilised by sperm in the lab.",
      "The fertilised eggs develop into embryos.", "One or two embryos are put into the woman's uterus."),
    ex("Explain how fertility drugs can help a woman become pregnant.", 2, "They contain FSH and LH.", "These stimulate the ovaries to mature and release eggs."),
    ex("Give two disadvantages of IVF.", 2, "It is emotionally and physically stressful, and the success rate is low.", "It can lead to multiple births, which is a risk to the mother and babies."),
    ex("Explain why multiple births can be a problem.", 2, "They increase the risk for the mother.", "The babies are more likely to be premature or have a low birth weight."),
    ex("Explain why FSH is given at the start of IVF treatment.", 2, "FSH makes eggs mature.", "So several eggs can be collected."),
    ex("Describe one ethical issue linked with IVF.", 1, "Unused embryos may be destroyed, which some people think is wrong."),
    ex("Explain why only one or two embryos are usually put into the uterus.", 1, "To reduce the chance of multiple births."),
    ex("Describe how scientists have improved IVF.", 1, "Better microscopes and micro-tools allow sperm to be injected into eggs, and better techniques for growing embryos."),
    ex("Explain why IVF is expensive.", 1, "It needs specialist staff, lab equipment and drugs, and may need several attempts."),
    ex("Explain why a couple might need IVF.", 1, "The woman's oviducts may be blocked, or the man may produce few sperm.")
  ]);
  addTo("Plant hormones: auxin, gravitropism, phototropism", [
    ex("Explain how a shoot grows towards light.", 3, "Auxin moves to the shaded side of the shoot.", "Auxin makes cells on the shaded side elongate more.", "So the shoot bends towards the light."),
    ex("Explain how a root grows downwards.", 3, "Auxin collects on the lower side of the root.", "In roots, auxin inhibits cell elongation.", "So the upper side grows faster and the root bends downwards."),
    ex("Describe two uses of gibberellins.", 2, "To end seed dormancy and make seeds germinate.", "To promote flowering and increase fruit size."),
    ex("Describe two uses of auxins in agriculture.", 2, "As weed killers.", "As rooting powders, or for promoting growth in tissue culture.")
  ]);

  // ---------- 4.6 Inheritance, variation and evolution ----------
  addTo("Sexual vs asexual reproduction: advantages", [
    ex("Describe one advantage and one disadvantage of sexual reproduction.", 2, "Advantage: it produces variation, so a species may survive environmental change.", "Disadvantage: it takes more time and energy to find a mate."),
    ex("Describe one advantage and one disadvantage of asexual reproduction.", 2, "Advantage: only one parent is needed, and it is faster.", "Disadvantage: there is no variation, so a disease could wipe out the whole population."),
    ex("Explain why sexual reproduction produces variation.", 2, "Genetic information from two parents is mixed.", "Gametes are made by meiosis, so each one is different.")
  ]);
  addTo("Meiosis: stages and importance of variation", [
    ex("Describe what happens during meiosis.", 3, "Copies of the genetic information are made.", "The cell divides twice to form four gametes.", "Each gamete has a single set of chromosomes and is genetically different."),
    ex("Explain why gametes need half the number of chromosomes.", 2, "At fertilisation two gametes join.", "So the normal number of chromosomes is restored."),
    ex("Describe two differences between mitosis and meiosis.", 2, "Mitosis makes two cells; meiosis makes four.", "Mitosis makes identical cells; meiosis makes genetically different cells with half the chromosomes."),
    ex("Explain why meiosis is important for variation.", 2, "Each gamete gets a different mix of chromosomes.", "So offspring are genetically different from each other and their parents."),
    ex("Describe what happens to the fertilised egg after fertilisation.", 2, "It divides by mitosis.", "As the embryo develops, cells differentiate."),
    ex("Describe where meiosis happens in humans.", 1, "In the reproductive organs: the ovaries and testes."),
    ex("Explain why each human body cell has 46 chromosomes but a sperm cell has 23.", 2, "Sperm are made by meiosis, which halves the number.", "Body cells are made by mitosis, which keeps all 46.")
  ]);
  addTo("DNA structure and chromosome pairs (basic)", [
    ex("Describe the structure of DNA.", 2, "DNA is a polymer made of two strands.", "The strands are twisted to form a double helix."),
    ex("Describe the relationship between DNA, genes and chromosomes.", 3, "DNA is found in chromosomes in the nucleus.", "A gene is a small section of DNA on a chromosome.", "Each gene codes for a particular sequence of amino acids to make a protein."),
    ex("Explain what is meant by the genome.", 1, "The entire genetic material of an organism."),
    ex("Explain why studying the human genome is important.", 3, "To find genes linked to different diseases.", "To understand and treat inherited disorders.", "To trace human migration patterns from the past."),
    ex("Explain why chromosomes are found in pairs.", 1, "One chromosome of each pair comes from each parent."),
    ex("Describe how many chromosomes are found in human body cells.", 1, "46 chromosomes, in 23 pairs."),
    ex("Explain why DNA is described as a polymer.", 1, "It is made of many repeating units (nucleotides) joined together.")
  ]);
  addTo("DNA structure in detail (nucleotides) and protein synthesis", [
    ex("Describe the structure of a nucleotide.", 2, "A sugar and a phosphate group.", "One of four bases: A, C, G or T."),
    ex("Describe how bases pair in DNA.", 2, "A always pairs with T.", "C always pairs with G."),
    ex("Describe how a protein is made from the code in DNA.", 4, "A copy (template) of the gene is made and moves out of the nucleus.", "It attaches to a ribosome.",
      "Carrier molecules bring specific amino acids in the order set by the base sequence.", "The amino acids join to form a protein, which folds into a unique shape."),
    ex("Explain how the base sequence determines the protein made.", 2, "Each sequence of three bases codes for one amino acid.", "The order of bases decides the order of amino acids in the protein."),
    ex("Describe three types of protein and their functions.", 3, "Enzymes, which catalyse reactions.", "Hormones, which carry messages.", "Structural proteins, e.g. collagen, which give strength."),
    ex("Explain why the shape of a protein is important.", 2, "The shape lets the protein do its job.", "For example, an enzyme's active site must fit its substrate.")
  ]);
  addTo("How mutations affect the protein made", [
    ex("Explain how a mutation can change the activity of an enzyme.", 3, "A mutation changes the base sequence.", "This changes the sequence of amino acids, so the protein folds differently.", "The active site changes shape and the substrate may no longer fit."),
    ex("Explain why most mutations have no effect on the phenotype.", 2, "Many mutations don't change the amino acid coded for.", "Or they occur in non-coding DNA."),
    ex("Explain how a change in non-coding DNA can affect the phenotype.", 2, "Non-coding DNA can switch genes on and off.", "So a mutation can change whether a gene is expressed."),
    ex("Describe three types of mutation.", 3, "Insertion: an extra base is added.", "Deletion: a base is removed.", "Substitution: one base is swapped for another."),
    ex("Explain why an insertion or deletion usually has a bigger effect than a substitution.", 2, "It shifts how every following group of three bases is read.", "So many amino acids after it change."),
    ex("Explain how a mutation could cause a structural protein to stop working.", 2, "The amino acid sequence changes.", "So the protein loses its shape and strength."),
    ex("Explain why a mutation in a body cell is not passed on to children.", 1, "Only mutations in gametes are inherited."),
    ex("Explain how a substitution may have no effect on the protein.", 1, "The new triplet may still code for the same amino acid.")
  ]);
  addTo("Genes, alleles: dominant and recessive", [
    ex("Explain the difference between genotype and phenotype.", 2, "Genotype is the combination of alleles an organism has.", "Phenotype is the characteristic that shows."),
    ex("Explain the difference between homozygous and heterozygous.", 2, "Homozygous means both alleles are the same.", "Heterozygous means the two alleles are different."),
    ex("Explain why two brown-eyed parents can have a blue-eyed child.", 3, "Both parents are heterozygous, carrying a recessive blue allele.", "The child inherits a recessive allele from each parent.", "So the child is homozygous recessive and has blue eyes.")
  ]);
  addTo("Punnett squares and probability of inheritance", [
    ex("Describe how to use a Punnett square to predict the offspring of a cross.", 3, "Write the alleles of one parent's gametes along the top and the other's down the side.",
      "Fill in each box with the combination of alleles.", "Count the boxes to work out the ratio or probability."),
    ex("Explain why the actual numbers of offspring may not match the predicted ratio.", 2, "Fertilisation is random.", "With small numbers of offspring, chance has a big effect."),
    ex("Explain the probability of a child having cystic fibrosis if both parents are carriers.", 2, "Each parent passes on the recessive allele with a probability of 1/2.", "So the chance of the child getting two recessive alleles is 1/4 (25%)."),
    ex("Explain why a heterozygous parent can pass on either allele.", 1, "The alleles separate into different gametes during meiosis."),
    ex("Explain why each child has the same probability, however many children a couple already has.", 1, "Each fertilisation is a separate random event."),
    ex("Describe how to write a ratio from a Punnett square.", 2, "Count how many boxes have each phenotype.", "Write them as a ratio, e.g. 3 : 1."),
    ex("Explain why a cross between a homozygous dominant and a homozygous recessive parent gives all one phenotype.", 2, "Every offspring inherits one dominant allele.", "So they are all heterozygous and show the dominant phenotype.")
  ]);
  addTo("Constructing Punnett squares from scratch", [
    ex("Describe the first step when constructing a Punnett square.", 1, "Choose letters for the alleles: a capital for dominant and lower case for recessive."),
    ex("Explain why the gametes of a heterozygous parent are written as two separate alleles.", 1, "Each gamete only carries one allele of each gene."),
    ex("Explain how to find the genotype of an unknown parent with the dominant phenotype.", 3, "Cross it with a homozygous recessive individual.", "If any offspring show the recessive phenotype, the parent is heterozygous.", "If all show the dominant phenotype, it is probably homozygous dominant."),
    ex("Describe how to work out the percentage of offspring with a phenotype.", 2, "Count the boxes with that phenotype out of four.", "Multiply the fraction by 100, e.g. 1/4 = 25%."),
    ex("Explain why the same letter is used for both alleles of one gene.", 1, "They are different versions of the same gene."),
    ex("Explain why a cross between two heterozygous parents gives a 3 : 1 ratio.", 2, "Three of the four boxes contain at least one dominant allele.", "Only one box is homozygous recessive."),
    ex("Explain why a cross between a heterozygous and a homozygous recessive parent gives a 1 : 1 ratio.", 2, "Half the gametes from the heterozygous parent carry the dominant allele.", "So half the offspring are heterozygous and half homozygous recessive."),
    ex("Describe what each box in a Punnett square represents.", 1, "A possible genotype of the offspring, each with an equal chance."),
    ex("Explain why you should write a key when constructing a Punnett square.", 1, "So it is clear which letter stands for which allele."),
    ex("Describe how to set out a full genetic cross answer.", 3, "Give the parents' phenotypes and genotypes.", "Show the gametes and the Punnett square.", "State the offspring genotypes, phenotypes and ratio.")
  ]);
  addTo("Inherited disorders: cystic fibrosis, polydactyly", [
    ex("Explain why a person can be a carrier of cystic fibrosis.", 2, "Cystic fibrosis is caused by a recessive allele.", "A carrier has one recessive allele and one dominant allele, so doesn't have the disorder."),
    ex("Explain why polydactyly can be inherited from just one parent.", 2, "It is caused by a dominant allele.", "Only one copy is needed for it to show."),
    ex("Describe the symptoms of cystic fibrosis.", 2, "It is a disorder of cell membranes.", "Thick, sticky mucus builds up in the lungs and digestive system."),
    ex("Describe two concerns about embryo screening.", 2, "It is expensive and can give false results.", "Some people think it is wrong to destroy embryos, and it may lead to 'designer babies'."),
    ex("Describe one argument for embryo screening.", 1, "It can stop children being born with serious disorders that cause suffering."),
    ex("Explain why gene therapy might one day treat cystic fibrosis.", 2, "A healthy allele could be put into the patient's cells.", "So the cells could make the working protein.")
  ]);
  addTo("Sex determination: X and Y chromosomes", [
    ex("Explain how sex is determined in humans.", 2, "Females have two X chromosomes (XX).", "Males have one X and one Y chromosome (XY)."),
    ex("Explain why there is a 50% chance of a baby being a boy.", 3, "All eggs carry an X chromosome.", "Half the sperm carry X and half carry Y.", "So the chance of a sperm with Y fertilising the egg is 1/2."),
    ex("Explain why the father's sperm determines the sex of the baby.", 2, "The mother can only pass on an X chromosome.", "The father can pass on either X or Y."),
    ex("Describe how many pairs of chromosomes in a human cell control sex.", 1, "One of the 23 pairs."),
    ex("Explain why a family with three girls still has a 50% chance of having a boy next.", 1, "Each fertilisation is independent, so previous births don't affect the next one."),
    ex("Explain why gametes contain only one sex chromosome.", 1, "Gametes are made by meiosis, so they contain one chromosome from each pair."),
    ex("Describe how to show sex inheritance using a Punnett square.", 2, "Put the mother's gametes (X, X) on one side and the father's (X, Y) on the other.", "Two boxes are XX and two are XY, giving a 1 : 1 ratio.")
  ]);
  addTo("Variation: genetic, environmental, combination", [
    ex("Describe the three causes of variation.", 3, "Genetic: the genes inherited.", "Environmental: the conditions in which the organism develops.", "A combination of genes and the environment."),
    ex("Give one example of a characteristic caused only by genes.", 1, "Blood group, eye colour or an inherited disorder."),
    ex("Give one example of a characteristic caused only by the environment.", 1, "Scars, tattoos, a language spoken or dyed hair."),
    ex("Explain why identical twins can have different body masses.", 2, "Identical twins have the same genes.", "So the difference is due to the environment, e.g. diet or exercise."),
    ex("Explain why height is a combination of genetic and environmental factors.", 2, "Genes set the range of height a person may reach.", "Diet and health affect how tall they actually grow."),
    ex("Explain why there is usually extensive genetic variation within a population.", 2, "Sexual reproduction mixes the alleles of two parents.", "Mutations add new variants."),
    ex("Explain why studying identical twins helps scientists understand variation.", 2, "Identical twins have the same genes.", "So any differences between them must be caused by the environment."),
    ex("Explain why plants of the same species can grow to different heights.", 2, "They may have different alleles.", "They may also get different amounts of light, water or minerals."),
    ex("Describe how mutations affect variation.", 2, "Mutations make new variants of genes.", "Most have no effect, but rarely they change the phenotype."),
    ex("Explain why variation is important for natural selection.", 1, "Without variation, no individuals would be better adapted to survive.")
  ]);
  addTo("Mutations: causes and effects (basic)", [
    ex("Describe two things that increase the rate of mutation.", 2, "Ionising radiation, e.g. X-rays or UV light.", "Certain chemicals, e.g. in tobacco smoke."),
    ex("Explain how a mutation could lead to a new phenotype.", 2, "Most mutations have no effect.", "A rare mutation may change the protein made, giving a new phenotype."),
    ex("Explain how a mutation could help an organism survive.", 2, "The new phenotype may be better suited to the environment.", "So the organism survives and passes on the mutation."),
    ex("Explain how a mutation can cause cancer.", 2, "A mutation in a gene controlling cell division.", "The cell divides uncontrollably, forming a tumour."),
    ex("Explain why mutations happen.", 1, "They happen randomly when DNA is copied, and continuously."),
    ex("Explain why X-ray workers wear lead aprons or stand behind screens.", 2, "X-rays are ionising radiation.", "This can damage DNA and cause mutations."),
    ex("Explain why mutations in bacteria can be a problem.", 2, "A mutation may make bacteria resistant to antibiotics.", "The resistant bacteria survive and spread.")
  ]);
  addTo("Natural selection and evolution", [
    ex("Describe Darwin's theory of evolution by natural selection.", 4, "Individuals in a species show variation.", "Those best suited to the environment are more likely to survive and breed.",
      "They pass on the genes for these characteristics to their offspring.", "Over many generations this leads to evolution."),
    ex("Explain why some people did not accept Darwin's theory at first.", 3, "It challenged the idea that God made all living things.", "There wasn't enough evidence at the time.", "The mechanism of inheritance and variation wasn't known then."),
    ex("Explain how a new species can form.", 2, "Two populations become so different in phenotype.", "That they can no longer interbreed to produce fertile offspring."),
    ex("Describe Lamarck's theory and why it was rejected.", 2, "Lamarck thought changes during an organism's life were passed on.", "Experiments showed acquired characteristics are not inherited."),
    ex("Explain how a population of rabbits could evolve thicker fur in a colder climate.", 3, "Some rabbits have alleles for thicker fur.", "These rabbits are more likely to survive the cold and breed.", "Over many generations the allele becomes more common."),
    ex("Explain why evolution usually takes a very long time.", 1, "Changes happen gradually, over many generations."),
    ex("Describe the work of Alfred Russel Wallace.", 2, "He independently proposed the theory of evolution by natural selection.", "He studied warning colouration in animals and speciation.")
  ]);
  addTo("Selective breeding: process and examples", [
    ex("Describe how selective breeding is carried out.", 3, "Choose parents with the desired characteristic.", "Breed them together.", "Choose the best offspring and breed them; repeat over many generations."),
    ex("Give three examples of characteristics chosen in selective breeding.", 3, "Disease resistance in food crops.", "Animals that produce more meat or milk.", "Domestic dogs with a gentle nature, or large or unusual flowers."),
    ex("Explain why selective breeding can lead to inbreeding.", 2, "Closely related animals or plants are bred together.", "This reduces variation."),
    ex("Explain why inbreeding is a problem.", 2, "Some breeds are prone to disease or inherited defects.", "With little variation, a new disease could affect them all."),
    ex("Describe how selective breeding is different from genetic engineering.", 2, "Selective breeding chooses parents with features and breeds them over many generations.", "Genetic engineering moves genes directly between organisms."),
    ex("Explain why selective breeding takes a long time.", 1, "It needs many generations of breeding to get the desired result."),
    ex("Explain how selective breeding could produce a wheat variety resistant to a disease.", 3, "Choose wheat plants that are least affected by the disease.", "Cross them and grow the seeds.", "Keep selecting the most resistant offspring over many generations."),
    ex("Explain why farmers use selective breeding.", 1, "To get plants or animals with useful characteristics, e.g. higher yield."),
    ex("Explain why selective breeding has existed for thousands of years.", 1, "People have always kept the best plants and animals to breed from, since farming began.")
  ]);
  addTo("Genetic engineering: what it is, GM crops, insulin", [
    ex("Describe how genetic engineering is used to produce human insulin.", 3, "The human insulin gene is cut out.", "It is inserted into a bacterium's plasmid.", "The bacteria multiply and make insulin, which is collected."),
    ex("Describe two benefits of GM crops.", 2, "Resistance to insect pests or herbicides.", "Bigger, better fruits, giving bigger yields."),
    ex("Describe two concerns about GM crops.", 2, "Effects on wild flowers and insects.", "The long-term effects on human health of eating GM crops aren't fully known."),
    ex("Explain why GM crops that resist insects can increase yield.", 2, "Fewer crops are damaged by insects.", "So more crop is harvested."),
    ex("Explain why using bacteria to make insulin is better than using animal insulin.", 2, "It is identical to human insulin, so fewer reactions.", "Large amounts can be made quickly and cheaply."),
    ex("Describe how gene therapy may be used in medicine.", 2, "Healthy genes are inserted into the cells of a patient.", "To overcome inherited disorders."),
    ex("Explain why there is concern that genes from GM crops could spread.", 2, "Pollen from GM crops could spread to wild plants.", "Weeds could become herbicide resistant."),
    ex("Explain what is meant by genetic engineering.", 1, "Changing the genome of an organism by adding a gene from another organism.")
  ]);
  addTo("The steps of genetic engineering (enzymes, vectors)", [
    ex("Describe the main steps of genetic engineering.", 4, "Enzymes isolate (cut out) the required gene.", "The gene is inserted into a vector, such as a plasmid or virus.",
      "The vector inserts the gene into the required cells.", "The cells with the gene are allowed to grow and reproduce."),
    ex("Explain why restriction enzymes are used.", 1, "To cut out the required gene at specific places in the DNA."),
    ex("Explain why ligase enzymes are used.", 1, "To join the gene into the vector DNA."),
    ex("Describe what a vector is.", 1, "Something used to carry the gene into the cell, e.g. a plasmid or a virus."),
    ex("Explain why the same restriction enzyme is used to cut the gene and the plasmid.", 2, "It produces matching sticky ends.", "So the gene and the plasmid fit together."),
    ex("Explain why genes are put into plants or animals at an early stage of development.", 2, "The gene is copied into every new cell as the organism grows.", "So all its cells have the desired characteristic."),
    ex("Explain why plasmids are useful vectors.", 2, "Plasmids are small loops of DNA in bacteria.", "They are easy to cut open and are copied when bacteria divide."),
    ex("Describe how scientists check which bacteria have taken up the new gene.", 2, "A marker gene, e.g. for antibiotic resistance, is added with the gene.", "Only bacteria with the plasmid grow on a plate with the antibiotic."),
    ex("Explain how a virus can be used as a vector.", 2, "Viruses naturally insert their DNA into cells.", "So the required gene can be carried into the cell by the virus."),
    ex("Explain why bacteria are used to produce human proteins.", 2, "Bacteria reproduce very quickly.", "So large amounts of the protein can be made.")
  ]);
  addTo("Evidence for evolution: fossils, antibiotic resistance", [
    ex("Describe three ways fossils can form.", 3, "Parts of organisms that haven't decayed because conditions were wrong for decay.",
      "Hard parts replaced by minerals as they decay.", "Preserved traces such as footprints, burrows and root traces."),
    ex("Explain why there are gaps in the fossil record.", 3, "Many early forms of life were soft-bodied, so left few traces.", "Many fossils have been destroyed by geological activity.", "Many fossils have not yet been found."),
    ex("Explain how fossils provide evidence for evolution.", 2, "Fossils from different rock layers show how organisms changed over time.", "Older rocks contain simpler organisms."),
    ex("Explain how the development of antibiotic resistance supports evolution.", 2, "It shows natural selection happening quickly.", "Bacteria reproduce rapidly, so the change can be seen."),
    ex("Describe the factors that can lead to extinction.", 3, "New predators or diseases.", "Changes to the environment over geological time.", "New competitors, or catastrophic events such as volcanic eruptions."),
    ex("Explain why scientists can't be certain how life began on Earth.", 2, "Early life forms were soft-bodied.", "So there are very few fossils from that time."),
    ex("Explain why fossils found in deeper layers of rock are older.", 1, "Rock layers are laid down on top of each other over time.")
  ]);
  addTo("Classification: kingdoms, phylogenetic trees", [
    ex("Describe the Linnaean system of classification.", 2, "Organisms are classified into kingdom, phylum, class, order, family, genus and species.", "Based on their structure and characteristics."),
    ex("Explain why the three-domain system was introduced.", 2, "New evidence from chemical analysis.", "Showed that some organisms (archaea) are very different from bacteria."),
    ex("Describe the three domains.", 3, "Archaea: primitive bacteria, often in extreme environments.", "Bacteria: true bacteria.", "Eukaryota: protists, fungi, plants and animals."),
    ex("Explain how the binomial system names organisms.", 2, "Each organism is named by its genus and species.", "For example, Homo sapiens."),
    ex("Explain why classification systems have changed over time.", 2, "Better microscopes revealed internal structures.", "Biochemical processes and DNA analysis gave new evidence.")
  ]);

  // ---------- 4.7 Ecology ----------
  addTo("Ecosystems: habitats, populations, communities", [
    ex("Explain what is meant by an ecosystem.", 1, "The interaction of a community of living organisms with the non-living parts of their environment."),
    ex("Describe what organisms need to survive.", 3, "Plants need light, carbon dioxide, water, space and mineral ions.", "Animals need space, food, water and mates.", "Organisms compete for these resources."),
    ex("Explain what is meant by interdependence.", 2, "Species in a community depend on each other.", "For food, shelter, pollination and seed dispersal."),
    ex("Explain what is meant by a stable community.", 2, "All species and environmental factors are in balance.", "So population sizes remain fairly constant."),
    ex("Explain why removing one species can affect the whole community.", 2, "Other species depend on it for food or shelter.", "So their populations change, affecting others in turn."),
    ex("Describe the difference between a population and a community.", 2, "A population is all the organisms of one species in a habitat.", "A community is the populations of different species in a habitat."),
    ex("Describe an example of a stable community.", 1, "Tropical rainforests, oak woodlands or coral reefs.")
  ]);
  addTo("Abiotic factors: temperature, light, pH, moisture", [
    ex("Describe five abiotic factors that can affect a community.", 3, "Light intensity and temperature.", "Moisture levels and soil pH and mineral content.", "Wind intensity and direction, carbon dioxide levels for plants, oxygen levels for aquatic animals."),
    ex("Explain how light intensity affects the distribution of plants in a woodland.", 2, "Plants need light for photosynthesis.", "Fewer plants grow in shaded areas under trees."),
    ex("Explain how a low oxygen level affects animals in water.", 2, "Animals in water need dissolved oxygen for respiration.", "Few animals can survive where oxygen is low."),
    ex("Explain how soil pH can affect which plants grow there.", 2, "Each plant species has an optimum pH.", "Enzymes may not work well and minerals may not be absorbed at other pH values."),
    ex("Explain how wind affects plants.", 2, "Strong winds increase transpiration.", "So plants in windy places need adaptations to reduce water loss."),
    ex("Explain why temperature affects the distribution of organisms.", 2, "Temperature affects the rate of enzyme reactions.", "So organisms only survive where it is suitable for them."),
    ex("Explain why moisture level affects the organisms found in an area.", 2, "Organisms need water to survive.", "Plants in dry areas need adaptations to reduce water loss."),
    ex("Describe how to measure an abiotic factor in a habitat.", 2, "Use a light meter, thermometer, pH probe or moisture meter.", "Take readings at several points and calculate a mean."),
    ex("Explain why the concentration of carbon dioxide affects plants.", 1, "Plants need carbon dioxide for photosynthesis."),
    ex("Explain the difference between abiotic and biotic factors.", 2, "Abiotic factors are non-living parts of the environment.", "Biotic factors are living factors.")
  ]);
  addTo("Biotic factors: predation, competition, disease", [
    ex("Describe four biotic factors that can affect a community.", 4, "Availability of food.", "New predators arriving.", "New pathogens.", "One species outcompeting another."),
    ex("Explain how a new predator could affect a community.", 2, "It reduces the population of its prey.", "This affects other species that eat or compete with that prey."),
    ex("Explain how the arrival of grey squirrels affected red squirrels in the UK.", 2, "Grey squirrels outcompeted red squirrels for food and shelter.", "They also carried a disease that kills red squirrels."),
    ex("Explain why plants compete with each other.", 2, "For light, space, water and mineral ions.", "These are needed for growth and survival."),
    ex("Explain why animals compete with each other.", 2, "For food, mates and territory.", "These are needed to survive and reproduce."),
    ex("Explain how a new pathogen could affect a population.", 2, "Many individuals may die from the disease.", "The population size falls."),
    ex("Explain why competition between species can cause one species to disappear from an area.", 2, "One species is better at getting resources.", "The other can't get enough to survive and reproduce."),
    ex("Describe how a lack of food can affect a population.", 2, "Animals may starve or fail to breed.", "So the population decreases."),
    ex("Explain why the number of organisms of a species in an area may change from year to year.", 2, "Biotic factors such as food, predators and disease change.", "Abiotic factors such as temperature also change.")
  ]);
  addTo("Adaptations: structural, behavioural, functional", [
    ex("Describe the three types of adaptation, with an example of each.", 3, "Structural: e.g. thick fur in polar bears.", "Behavioural: e.g. migration.", "Functional: e.g. making less urine to save water in desert animals."),
    ex("Explain how a camel is adapted to live in the desert.", 3, "It stores fat in its hump, reducing heat loss elsewhere.", "It produces little urine.", "It has large, flat feet to walk on sand."),
    ex("Explain how a polar bear is adapted to the cold.", 3, "Thick fur and a thick layer of fat for insulation.", "A small surface area to volume ratio reduces heat loss.", "White fur for camouflage."),
    ex("Explain how a cactus is adapted to dry conditions.", 3, "Leaves are spines, reducing water loss.", "A thick stem stores water.", "Long or shallow, spreading roots to absorb water."),
    ex("Explain what is meant by an extremophile.", 1, "An organism that lives in extreme conditions, e.g. high temperature, pressure or salt."),
    ex("Explain why animals in hot climates often have large ears.", 2, "Large ears give a large surface area.", "So more heat is lost to the environment."),
    ex("Explain why organisms are adapted to their environment.", 1, "So they can survive in the conditions where they normally live."),
    ex("Describe a behavioural adaptation of an animal living in a hot desert.", 1, "Staying in burrows during the day and being active at night.")
  ]);
  addTo("Food chains and food webs", [
    ex("Explain why food chains always start with a producer.", 2, "Producers make their own food by photosynthesis.", "They transfer energy from the Sun into biomass."),
    ex("Explain how a fall in the number of rabbits could affect a food web.", 2, "Foxes that eat rabbits have less food, so their numbers fall.", "Grass that rabbits eat may increase."),
    ex("Describe the difference between a food chain and a food web.", 2, "A food chain shows one feeding relationship sequence.", "A food web shows many interlinked food chains."),
    ex("Explain why food webs are more stable than single food chains.", 2, "Animals in a food web have more than one food source.", "If one food source declines, they can eat another."),
    ex("Explain why most food chains have fewer than five trophic levels.", 2, "Energy is lost at each trophic level.", "Not enough energy is left to support more levels.")
  ]);
  addTo("Predator-prey relationships and population cycles", [
    ex("Explain why the number of predators rises after the number of prey rises.", 2, "There is more food for the predators.", "So more predators survive and breed."),
    ex("Explain why the number of prey falls after the number of predators rises.", 2, "More predators eat more prey.", "So more prey are killed."),
    ex("Explain why the predator population peak comes after the prey peak.", 2, "Predators take time to breed.", "So their population only rises after there is plenty of food."),
    ex("Explain why the predator population falls after the prey population falls.", 2, "There is less food for the predators.", "So some starve or can't breed."),
    ex("Describe the shape of a predator–prey graph.", 2, "Both populations go up and down in cycles.", "The predator cycle lags behind the prey cycle."),
    ex("Explain why the prey population is usually larger than the predator population.", 2, "Energy is lost at each trophic level.", "So there is less biomass at the predator level."),
    ex("Describe what happens to the populations in a stable community.", 1, "Predator and prey numbers rise and fall in cycles."),
    ex("Explain how a disease in the prey could affect the predators.", 2, "Prey numbers fall.", "So predators have less food and their numbers fall."),
    ex("Explain why predator and prey numbers are rarely exactly the same each cycle.", 2, "Other factors also affect numbers.", "Such as disease, weather and food for the prey."),
    ex("Explain how hunting predators could affect a prey population.", 2, "Fewer prey are eaten, so prey numbers rise.", "The prey may then eat more plants or run out of food.")
  ]);
  addTo("Required practical: sampling using quadrats and transects", [
    ex("Explain why the quadrats are placed randomly.", 1, "To avoid bias, so the sample represents the whole area."),
    ex("Describe how to estimate the population of a plant in a field using quadrats.", 3, "Place quadrats randomly and count the plants in each.", "Calculate the mean number per quadrat.", "Multiply by the number of quadrats that would fit into the field."),
    ex("Describe how to use a transect to see how plant distribution changes across an area.", 3, "Lay out a tape measure across the area.", "Place quadrats at regular intervals along it.", "Count the plants in each quadrat and measure abiotic factors.")
  ]);
  addTo("Carbon cycle", [
    ex("Describe how carbon is removed from the atmosphere.", 2, "Plants absorb carbon dioxide during photosynthesis.", "It becomes part of the carbon compounds in the plant."),
    ex("Describe three ways carbon dioxide is returned to the atmosphere.", 3, "Respiration by plants and animals.", "Decay by microorganisms (decomposers).", "Combustion of fuels."),
    ex("Explain the role of decomposers in the carbon cycle.", 2, "Decomposers break down dead organisms and waste.", "They release carbon dioxide into the air by respiration."),
    ex("Explain how carbon moves from plants to animals.", 2, "Animals eat plants.", "Carbon compounds in the plants become part of the animals."),
    ex("Explain why burning fossil fuels increases carbon dioxide in the atmosphere.", 2, "Fossil fuels contain carbon that has been locked away for millions of years.", "Combustion releases it as carbon dioxide."),
    ex("Explain why cutting down forests affects the carbon cycle.", 2, "Fewer trees take in carbon dioxide by photosynthesis.", "If the trees are burned, more carbon dioxide is released."),
    ex("Explain why the carbon cycle is important.", 1, "It returns carbon to the atmosphere so it can be used again by plants."),
    ex("Describe how carbon gets locked into fossil fuels.", 2, "Dead organisms are buried before they decay.", "Over millions of years, heat and pressure turn them into fossil fuels."),
    ex("Explain why the carbon dioxide level in the air stayed fairly constant for thousands of years.", 2, "The carbon dioxide released by respiration and decay.", "Was balanced by the carbon dioxide absorbed by photosynthesis.")
  ]);
  addTo("Water cycle", [
    ex("Describe the water cycle.", 4, "Water evaporates from the sea and land.", "Water vapour rises, cools and condenses to form clouds.",
      "It falls as precipitation (rain, snow).", "Water runs into rivers and the sea, or soaks into the ground, and the cycle repeats."),
    ex("Explain how plants are involved in the water cycle.", 2, "Plants take up water from the soil.", "They release water vapour by transpiration."),
    ex("Explain how animals are involved in the water cycle.", 2, "Animals take in water by drinking and eating.", "They lose water in urine, sweat and breath."),
    ex("Explain why the water cycle is important for living organisms.", 2, "It provides fresh water for plants and animals on land.", "Water is needed for life processes."),
    ex("Explain how energy from the Sun drives the water cycle.", 2, "The Sun heats water, causing evaporation.", "And drives transpiration from plants."),
    ex("Explain why rain water is fresh water even though it comes from the sea.", 1, "Only water evaporates; the salt is left behind."),
    ex("Describe what happens to water that falls on land.", 2, "It runs into streams and rivers or soaks into the ground.", "It is taken up by plants or flows back to the sea."),
    ex("Explain how deforestation can affect the water cycle.", 2, "Fewer trees means less transpiration.", "So less water vapour enters the air, and less rain may fall."),
    ex("Explain why water vapour forms clouds.", 1, "As it rises it cools and condenses into tiny droplets."),
    ex("Explain why the water cycle is described as a cycle.", 1, "Water is constantly recycled between the land, sea and atmosphere.")
  ]);
  addTo("Nitrogen cycle: decomposers, nitrifying bacteria", [
    ex("Explain why plants need nitrates.", 2, "Nitrates are needed to make proteins.", "Proteins are needed for growth."),
    ex("Describe the role of decomposers in the nitrogen cycle.", 2, "They break down proteins in dead organisms and waste.", "This releases ammonia (ammonium compounds) into the soil."),
    ex("Describe the role of nitrifying bacteria.", 1, "They convert ammonium compounds into nitrates."),
    ex("Describe the role of nitrogen-fixing bacteria.", 2, "They convert nitrogen gas from the air into nitrogen compounds.", "Some live in root nodules of legumes such as peas."),
    ex("Explain why farmers add fertilisers or manure to fields.", 2, "Crops take nitrates from the soil and are removed when harvested.", "Fertiliser replaces the nitrates, so crops grow well."),
    ex("Describe the role of denitrifying bacteria.", 1, "They convert nitrates in the soil back into nitrogen gas."),
    ex("Explain why waterlogged soils are low in nitrates.", 2, "Denitrifying bacteria thrive in waterlogged soil with little oxygen.", "Nitrifying bacteria need oxygen, so fewer nitrates are made."),
    ex("Explain how nitrogen moves from plants to animals.", 2, "Animals eat plants.", "They digest the plant protein and use the amino acids to make their own proteins.")
  ]);
  addTo("How environmental change affects where species are found", [
    ex("Describe three environmental changes that can affect the distribution of species.", 3, "Changes in the availability of water.", "Changes in temperature.", "Changes in the composition of atmospheric gases."),
    ex("Explain how global warming could affect the distribution of species.", 2, "Some species may move further north (or to higher ground) as it gets warmer.", "Species that can't move may die out."),
    ex("Explain why some bird species are migrating at different times than before.", 2, "Changes in temperature affect when food is available.", "So birds migrate earlier or later."),
    ex("Explain how a drought could affect where species are found.", 2, "Some species need lots of water.", "They die or move to areas with more water."),
    ex("Describe the difference between seasonal and geographic changes.", 2, "Seasonal changes happen each year, e.g. temperature.", "Geographic changes vary from place to place, e.g. soil type."),
    ex("Explain how human activity can cause environmental change.", 2, "Burning fossil fuels changes the gases in the atmosphere.", "Building and farming changes habitats."),
    ex("Explain why a species of insect might start to be found further north in the UK.", 2, "The climate is getting warmer.", "So more northern areas now have suitable temperatures."),
    ex("Explain why marine species may change their distribution.", 2, "Sea temperatures are changing.", "So their food and suitable conditions move."),
    ex("Explain why species that need very specific conditions are most affected by environmental change.", 1, "They can't adapt or move easily if their conditions change.")
  ]);
  addTo("Biodiversity: importance and preservation", [
    ex("Explain why high biodiversity is important.", 2, "It makes ecosystems more stable.", "Species depend less on any one species for food, shelter and maintaining the environment."),
    ex("Describe four ways to protect biodiversity.", 4, "Breeding programmes for endangered species.", "Protecting and regenerating rare habitats.", "Reintroducing field margins and hedgerows.", "Reducing deforestation and recycling to reduce landfill."),
    ex("Explain how human population growth affects biodiversity.", 2, "More resources are used and more waste is produced.", "This destroys habitats and reduces biodiversity."),
    ex("Explain why hedgerows increase biodiversity on farms.", 2, "They provide habitats and food.", "For many species of plants, insects and birds."),
    ex("Explain why breeding programmes help endangered species.", 2, "Animals are bred in captivity.", "Then released into the wild to increase population numbers."),
    ex("Explain why protecting rare habitats helps biodiversity.", 1, "It protects the species that live there."),
    ex("Describe one conflict when trying to protect biodiversity.", 2, "Protecting land may stop it being used for farming or building.", "Which affects people's jobs and food supplies."),
    ex("Explain why we depend on biodiversity.", 2, "Many species provide food, medicines and materials.", "Healthy ecosystems clean water and air.")
  ]);
  addTo("Human impact: deforestation, global warming, land use", [
    ex("Describe two reasons for large-scale deforestation in tropical areas.", 2, "To provide land for cattle and rice fields.", "To grow crops for biofuels."),
    ex("Explain how deforestation contributes to global warming.", 3, "Fewer trees take in carbon dioxide by photosynthesis.", "Burning trees releases carbon dioxide.", "Microorganisms decay the remaining wood, releasing carbon dioxide."),
    ex("Describe three biological consequences of global warming.", 3, "Loss of habitat as low-lying areas flood.", "Changes in the distribution of species.", "Changes in migration patterns and reduced biodiversity."),
    ex("Explain why destroying peat bogs is a problem.", 2, "Peat is burned or decayed, releasing carbon dioxide.", "It destroys the habitat of many species."),
    ex("Describe four ways humans reduce the land available for other animals and plants.", 4, "Building.", "Quarrying.", "Farming.", "Dumping waste."),
    ex("Explain why using peat-free compost helps the environment.", 2, "Peat bogs are left intact.", "So the carbon stored in peat isn't released."),
    ex("Explain how pollution can reduce biodiversity.", 2, "Pollution kills plants and animals.", "In water, on land, and in the air, e.g. from smoke and acidic gases."),
    ex("Explain why deforestation reduces biodiversity.", 2, "Forests contain many species.", "Destroying them removes the habitats of these species."),
    ex("Explain how sewage and fertiliser pollution affect rivers.", 2, "They cause algae to grow quickly, blocking light.", "Plants die and are decomposed by bacteria, using up oxygen, so fish die."),
    ex("Explain why the growth in the human population increases waste.", 1, "More people use more resources, so more waste is produced.")
  ]);
  addTo("Pollution indicators: lichen, invertebrates", [
    ex("Explain why lichens are used as indicators of air pollution.", 2, "Lichens are sensitive to sulfur dioxide.", "So few lichens grow where the air is polluted."),
    ex("Explain why the presence of stonefly nymphs suggests clean water.", 2, "Stonefly nymphs need a high oxygen concentration.", "Polluted water has low oxygen."),
    ex("Explain why bloodworms and sludgeworms are found in polluted water.", 2, "They can survive in water with low oxygen.", "Other animals can't, so they have less competition."),
    ex("Explain what is meant by an indicator species.", 1, "A species whose presence or absence shows the level of pollution."),
    ex("Give one advantage and one disadvantage of using indicator species instead of electronic meters.", 2, "Advantage: cheap and show long-term pollution.", "Disadvantage: less precise; they don't give exact levels of pollutants."),
    ex("Describe how to use lichens to compare air pollution in two areas.", 2, "Count the number or types of lichens on trees or walls in each area.", "More lichens shows cleaner air."),
    ex("Explain why sulfur dioxide levels are higher in cities.", 1, "Burning fossil fuels in cars and industry releases sulfur dioxide."),
    ex("Explain why black spot fungus on roses can indicate clean air.", 2, "Black spot is killed by sulfur dioxide.", "So it is more common where the air is clean."),
    ex("Explain how sewage reduces the oxygen in a river.", 2, "Bacteria decompose the sewage.", "They use up oxygen in the water for respiration."),
    ex("Describe how to sample invertebrates in a stream.", 2, "Use a net to disturb the stream bed and catch animals (kick sampling).", "Identify and count the animals in a tray.")
  ]);
  addTo("Trophic levels and energy transfer", [
    ex("Explain why only about 10% of the biomass is transferred to the next trophic level.", 3, "Not all the organism is eaten, e.g. bones and roots.", "Some ingested material is egested as faeces.", "Much is used in respiration, and lost as waste such as urine."),
    ex("Describe the trophic levels in a food chain.", 3, "Level 1: producers.", "Level 2: primary consumers (herbivores).", "Level 3 and above: secondary and tertiary consumers (carnivores)."),
    ex("Describe how to calculate the efficiency of biomass transfer.", 1, "Efficiency = biomass transferred to the next level ÷ biomass available at the previous level × 100."),
    ex("Explain why there are usually fewer animals at the top of a food chain.", 2, "Biomass is lost at each trophic level.", "So there is less biomass available at higher levels."),
    ex("Explain why animals that eat meat have a more efficient transfer than herbivores.", 2, "Meat is easier to digest than plants.", "So less is lost as faeces."),
    ex("Explain the role of decomposers in a food chain.", 2, "They break down dead plants and animals.", "They release mineral ions back into the soil.")
  ]);
  addTo("Pyramids of biomass", [
    ex("Explain why a pyramid of biomass is always pyramid-shaped.", 2, "Biomass is lost at each trophic level.", "So each level has less biomass than the one below."),
    ex("Describe how to draw a pyramid of biomass.", 2, "Draw a bar for each trophic level, with producers at the bottom.", "The width of each bar is proportional to the biomass."),
    ex("Explain why a pyramid of biomass is more useful than a pyramid of numbers.", 2, "A single large tree can feed many insects, so a pyramid of numbers may not be a pyramid.", "Biomass shows the actual mass at each level."),
    ex("Explain why biomass is measured as dry mass.", 2, "The amount of water in organisms varies.", "So dry mass gives a fairer comparison."),
    ex("Give one disadvantage of measuring dry biomass.", 1, "The organisms have to be killed."),
    ex("Explain why the producer level has the largest biomass.", 2, "Producers capture energy from the Sun.", "They support all the other levels."),
    ex("Explain how the efficiency of food production can be improved.", 2, "Reduce the number of stages in the food chain.", "Keep animals warm and limit movement so less energy is lost."),
    ex("Explain why eating plants rather than meat could feed more people.", 2, "Energy is lost at each trophic level.", "Eating plants removes a stage, so more biomass is available."),
    ex("Calculate the efficiency of transfer if 1000 kg of grass supports 100 kg of rabbits, and explain your answer.", 2, "Efficiency = 100 ÷ 1000 × 100 = 10%.", "90% of the biomass is lost at that step.")
  ]);

  // ======================= 6-MARK QUESTIONS =======================
  // Extended-response questions in the style of the GCSE 6-markers (plan, describe, explain, compare, evaluate).
  // They're original questions, not copied from past papers. Like the real ones they're marked by level, so each
  // lists the indicative content (shown as bullets if the student marks themselves wrong) plus the level guide.
  //   six(question, points, kind)   kind "evaluate" or "compare" adds what those need for the top level.
  const LEVELS = "Marked by level, not by counting points. Level 3 (5–6 marks): a detailed, logically ordered answer " +
    "that covers most of these points and links them together. Level 2 (3–4 marks): several relevant points, with " +
    "some linking. Level 1 (1–2 marks): a few simple, separate points.";
  const LEVEL_EXTRA = {
    evaluate: " For Level 3 you must weigh up both sides and give a conclusion with a reason.",
    compare: " For Level 3 you must give both similarities and differences, saying how each one compares (not two separate descriptions).",
    plan: " For Level 3 the method must be clear enough for someone else to follow, with the variable to change, what to measure and what to keep the same."
  };
  const six = (question, points, kind = "") =>
    ({ question, type: "explain", marks: 6, points, notes: LEVELS + (LEVEL_EXTRA[kind] || ""), answer: points.join(" ") });

  // ---------- 4.1 Cell Biology ----------
  addTo("Required practical: using a microscope to observe cells", [
    six("A student wants to look at cells from the thin inner layer of a red onion and estimate their size. Describe how the student should prepare a slide and use a light microscope to do this.", [
      "Peel a thin layer of epidermis from the onion with forceps, so light can pass through it.",
      "Lay it flat on a drop of water on a clean slide, with no folds.",
      "Add a drop of stain such as iodine solution so the cell structures can be seen.",
      "Lower a coverslip at an angle with a mounted needle to avoid trapping air bubbles.",
      "Put the slide on the stage and start with the lowest-power objective lens.",
      "Focus with the coarse focus, then the fine focus, then change to a higher-power objective and refocus.",
      "Use a scale (eyepiece graticule or a ruler on the image) and count how many cells fit across a known distance to estimate the size of one cell."
    ], "plan")
  ]);
  addTo("Mitosis and the cell cycle", [
    six("Skin cells divide to replace cells that are lost. Describe what happens during the cell cycle to produce two new skin cells.", [
      "The cell grows bigger.",
      "The number of subcellular structures such as ribosomes and mitochondria increases.",
      "The DNA replicates, so each chromosome is copied to form two identical copies.",
      "During mitosis the chromosomes line up at the centre of the cell.",
      "One copy of each chromosome is pulled to each end of the cell, and a new nucleus forms at each end.",
      "The cytoplasm and cell membrane divide.",
      "Two genetically identical daughter cells are made, each with the same number of chromosomes as the parent cell."
    ])
  ]);
  addTo("Stem cells: types and uses (embryonic & adult)", [
    six("Doctors hope to use stem cells to treat people with paralysis caused by a damaged spinal cord. Evaluate the use of embryonic stem cells and adult stem cells for this treatment.", [
      "Embryonic stem cells can differentiate into any type of cell, including nerve cells.",
      "Adult stem cells (e.g. from bone marrow) can only form a limited number of cell types, so may not form nerve cells.",
      "Embryonic stem cells could be made by therapeutic cloning, so they match the patient and are not rejected.",
      "Adult stem cells from the patient's own body would not be rejected, and no embryo is destroyed.",
      "Using embryos raises ethical or religious objections, because the embryo could have become a person.",
      "Risks of both: stem cells grown in the lab could be infected with a virus, or could keep dividing and form a tumour.",
      "Conclusion with a reason, e.g. embryonic cells are more likely to work, but adult cells avoid the ethical problems."
    ], "evaluate")
  ]);
  addTo("Required practical: osmosis in plant tissue", [
    six("A student wants to find the concentration of sugar solution that is the same concentration as the cell contents of a carrot. Plan an investigation the student could use.", [
      "Cut cylinders from the carrot with a cork borer, all the same length and width (and remove the skin).",
      "Blot each cylinder dry and measure its starting mass on a balance.",
      "Put the cylinders in a range of sugar solutions, e.g. 0, 0.2, 0.4, 0.6, 0.8 and 1.0 mol/dm³.",
      "Keep the volume of solution, temperature and time (e.g. 24 hours) the same for each tube.",
      "Remove the cylinders, blot them dry and measure the final mass.",
      "Calculate the percentage change in mass, and repeat for each concentration to find a mean.",
      "Plot percentage change in mass against concentration; the concentration where the line crosses zero (no change in mass) is the same as the cell contents."
    ], "plan")
  ]);
  addTo("Digestive system: organs and enzymes", [
    six("A person eats a cheese sandwich, which contains starch, protein and fat. Describe how the starch, protein and fat are digested and how the products are absorbed.", [
      "Starch is broken down into sugars by amylase, made in the salivary glands and pancreas, in the mouth and small intestine.",
      "Protein is broken down into amino acids by protease, made in the stomach and pancreas, in the stomach and small intestine.",
      "Fat (lipids) is broken down into fatty acids and glycerol by lipase, made in the pancreas, in the small intestine.",
      "Hydrochloric acid in the stomach gives the low pH that the stomach protease works best at.",
      "Bile, made in the liver and stored in the gall bladder, emulsifies fat into small droplets, giving a larger surface area for lipase.",
      "Bile is alkaline, so it neutralises stomach acid, giving a pH that the enzymes in the small intestine work best at.",
      "The soluble products are absorbed into the blood through the villi of the small intestine, which have a large surface area and a good blood supply."
    ])
  ]);
  addTo("Required practical: food tests (Benedict's, Biuret, iodine)", [
    six("A company says its new fruit smoothie contains sugar and protein but no starch. Describe how you could test a sample of the smoothie to check this claim.", [
      "Put a small sample of the smoothie into three separate test tubes (blending or filtering it first if it has lumps).",
      "Sugar: add Benedict's solution and heat in a water bath at about 75 °C for a few minutes.",
      "If sugar (a reducing sugar) is present, the colour changes from blue to green, yellow or brick red.",
      "Protein: add Biuret reagent (or sodium hydroxide then copper sulfate solution).",
      "If protein is present, the colour changes from blue to purple (lilac).",
      "Starch: add a few drops of iodine solution; it stays orange-brown if there is no starch, and turns blue-black if starch is present.",
      "Safety: wear eye protection, especially when heating Benedict's, and take care with the Biuret reagent, which is corrosive."
    ], "plan")
  ]);
  addTo("Required practical: effect of pH on enzyme activity", [
    six("A student is given amylase, starch solution, iodine solution and buffer solutions of different pH. Plan an investigation to find the effect of pH on the rate at which amylase breaks down starch.", [
      "Put a drop of iodine solution into each well of a spotting tile.",
      "Use buffer solutions to give a range of pH values, e.g. pH 4, 5, 6, 7 and 8.",
      "Mix the same volume of amylase, starch solution and buffer in a test tube, and start a stopwatch.",
      "Keep the temperature the same by putting the tubes in a water bath (e.g. at 35 °C), and keep the volumes and concentrations of amylase and starch the same.",
      "Every 10 or 30 seconds, put a drop of the mixture into a new well of iodine.",
      "Record the time when the iodine stays orange-brown (no longer turns blue-black), showing all the starch has been broken down.",
      "Repeat at each pH and calculate a mean; a shorter time means a faster rate (rate = 1000 ÷ time)."
    ], "plan")
  ]);
  addTo("Heart structure and the circulatory system", [
    six("Describe how blood flows through the heart and around the body, starting with deoxygenated blood returning to the heart from the body.", [
      "Deoxygenated blood enters the right atrium through the vena cava.",
      "It passes through a valve into the right ventricle.",
      "The right ventricle pumps it through the pulmonary artery to the lungs, where it picks up oxygen.",
      "Oxygenated blood returns to the left atrium through the pulmonary vein.",
      "It passes into the left ventricle, which has a thicker muscle wall.",
      "The left ventricle pumps it through the aorta to the rest of the body.",
      "Valves stop the blood flowing backwards; it is a double circulation, through the heart twice in each circuit."
    ])
  ]);
  addTo("Coronary heart disease and treatments", [
    six("A patient has coronary heart disease. Evaluate the use of stents and statins to treat the patient.", [
      "In coronary heart disease, fatty material builds up in the coronary arteries, reducing blood flow (and oxygen) to the heart muscle.",
      "A stent is a mesh tube placed in the artery to hold it open, so blood can flow again.",
      "Stents work straight away and last a long time, and recovery from fitting one is quick.",
      "But fitting a stent needs surgery, with a risk of infection, bleeding or a blood clot, and fat can build up again.",
      "Statins lower the level of cholesterol in the blood, so fatty material builds up more slowly.",
      "Statins are a tablet, so no surgery is needed, but they must be taken every day for life, take time to work and can have side effects such as muscle pain or liver problems.",
      "Conclusion with a reason, e.g. a stent for a badly blocked artery, then statins to stop it happening again."
    ], "evaluate")
  ]);
  addTo("Plant tissues: leaf structure and transpiration", [
    six("Explain how water moves from the soil, through a plant and out into the air, and why this happens faster on a hot, windy day.", [
      "Water enters root hair cells from the soil by osmosis; root hairs give a large surface area.",
      "The water moves across the root and into the xylem.",
      "Xylem vessels are hollow tubes that carry water up the stem to the leaves.",
      "Water evaporates from the surfaces of cells inside the leaf.",
      "Water vapour diffuses out of the leaf through the stomata; this loss pulls more water up the xylem (the transpiration stream).",
      "A higher temperature gives the water molecules more energy, so evaporation and diffusion are faster.",
      "Wind carries away water vapour from around the leaf, keeping the concentration gradient steep, so diffusion is faster."
    ])
  ]);

  // ---------- 4.3 Infection and Response ----------
  addTo("The immune response: white blood cells, antibodies", [
    six("Bacteria get into the blood through a cut. Describe how white blood cells protect the body against these bacteria.", [
      "Some white blood cells engulf the bacteria and digest them; this is phagocytosis.",
      "Lymphocytes produce antibodies.",
      "Each antibody is specific to (fits) the antigens on the surface of that type of bacterium.",
      "Antibodies stick to the bacteria, clumping them together and helping to destroy them.",
      "Some white blood cells make antitoxins, which neutralise the toxins released by the bacteria.",
      "Memory cells stay in the blood after the infection.",
      "If the same bacteria enter again, antibodies are made faster and in larger amounts, so the person doesn't become ill."
    ])
  ]);
  addTo("Vaccination and herd immunity", [
    six("Explain how a vaccine against measles stops a person becoming ill if they later catch the measles virus, and why it helps to vaccinate a large proportion of a population.", [
      "The vaccine contains a dead or inactive (weakened) form of the measles virus.",
      "The virus has antigens on its surface.",
      "White blood cells (lymphocytes) produce antibodies specific to these antigens.",
      "Memory cells are made, which stay in the body.",
      "If the live virus gets in later, the memory cells make the right antibodies quickly and in large numbers.",
      "The virus is destroyed before it can cause symptoms.",
      "If most people are vaccinated, the virus can't spread easily, so even unvaccinated people are protected (herd immunity)."
    ])
  ]);
  addTo("Antibiotics: how they work and resistance", [
    six("A hospital finds that an antibiotic no longer kills a type of bacterium that it used to kill. Explain how this antibiotic resistance developed, and describe how the spread of resistant bacteria can be reduced.", [
      "A random mutation in the DNA of one bacterium made it resistant to the antibiotic.",
      "When the antibiotic was used, the bacteria without the mutation were killed.",
      "The resistant bacteria survived (natural selection).",
      "They reproduced quickly by binary fission, passing on the resistance allele.",
      "The population of resistant bacteria grew, and it spreads because people aren't immune and there's no effective treatment.",
      "Doctors should only prescribe antibiotics when they're really needed (not for viral infections), and patients should finish the course.",
      "Use of antibiotics in farming should be restricted, and hospitals should have good hygiene, e.g. handwashing and isolating infected patients."
    ])
  ]);
  addTo("Drug development: clinical trials, double-blind", [
    six("A company has made a new drug to lower blood pressure. Describe how the drug would be tested before doctors could prescribe it.", [
      "Preclinical testing is done in the lab on cells, tissues and then live animals.",
      "It checks for toxicity, efficacy (whether it works) and the dose.",
      "Clinical trials start with very low doses given to healthy volunteers, to check for side effects.",
      "If it's safe, it is given to patients with high blood pressure to find the optimum dose.",
      "Some patients are given a placebo, so the effect of the drug can be compared fairly.",
      "In a double-blind trial neither the patients nor the doctors know who has the drug, so the results aren't biased.",
      "The results are peer reviewed by other scientists before the drug is licensed."
    ])
  ]);
  addTo("Monoclonal antibodies: production and uses", [
    six("Describe how monoclonal antibodies are produced, and give two ways they can be used.", [
      "A mouse is injected with a chosen antigen.",
      "The mouse's lymphocytes make antibodies specific to that antigen; these lymphocytes are collected.",
      "The lymphocytes are fused with tumour cells to make hybridoma cells.",
      "Hybridoma cells divide quickly and can each make the antibody.",
      "A single hybridoma cell is cloned to make many identical cells, which all make the same antibody.",
      "The antibodies are collected and purified.",
      "Uses: pregnancy tests, diagnosing diseases, measuring hormone levels in the blood, locating clots or cancer cells, or carrying drugs to cancer cells."
    ])
  ]);
  addTo("Plant disease: detection and defence", [
    six("Describe the different ways that plants defend themselves against pathogens and against animals that eat them.", [
      "Physical: cellulose cell walls are hard for pathogens to get through.",
      "Physical: a tough waxy cuticle on leaves acts as a barrier.",
      "Physical: layers of dead cells on the surface (e.g. bark) fall off, taking pathogens with them.",
      "Chemical: some plants make antibacterial chemicals (e.g. mint, witch hazel).",
      "Chemical: some make poisons, so animals don't eat them (e.g. foxgloves, tobacco).",
      "Mechanical: thorns and hairs stop animals touching or eating them.",
      "Mechanical: leaves that droop or curl when touched, or mimicry that tricks animals."
    ])
  ]);

  // ---------- 4.4 Bioenergetics ----------
  addTo("Limiting factors in depth: interactions, the inverse square law and greenhouse costs", [
    six("A farmer grows lettuces in a large greenhouse. Explain how the farmer could increase the rate of photosynthesis to grow more lettuces, and why the farmer has to think about cost.", [
      "Light intensity, carbon dioxide concentration and temperature can each limit the rate of photosynthesis.",
      "Lamps can give more light, including at night, increasing light intensity.",
      "A paraffin heater can raise the carbon dioxide concentration (and also warm the greenhouse).",
      "Heaters keep the temperature close to the optimum for the photosynthesis enzymes, but too hot would denature them.",
      "Increasing one factor only helps until another factor becomes limiting.",
      "Lamps, heaters and fuel cost money to buy and run.",
      "The farmer should only raise a factor if the extra income from the larger yield is more than the extra cost."
    ])
  ]);
  addTo("Required practical: investigating the rate of photosynthesis", [
    six("Plan an investigation into how light intensity affects the rate of photosynthesis in pondweed.", [
      "Put a piece of pondweed in a boiling tube of water with sodium hydrogencarbonate added, to provide carbon dioxide.",
      "Place a lamp at a set distance, e.g. 10 cm, measured with a metre ruler.",
      "Leave the pondweed for a few minutes to adjust to the light.",
      "Count the bubbles of oxygen given off in one minute, or collect the gas in a measuring cylinder or gas syringe and measure its volume.",
      "Repeat with the lamp at different distances, e.g. 20, 30, 40 and 50 cm.",
      "Control variables: the same pondweed, the same concentration of sodium hydrogencarbonate, and keep the temperature constant with a water bath or an LED bulb.",
      "Repeat at each distance and calculate a mean; light intensity is proportional to 1 ÷ distance²."
    ], "plan")
  ]);
  addTo("Oxygen debt: lactic acid converted back to glucose in the liver", [
    six("A student runs a 400 m race as fast as possible. Explain the changes that happen in the student's body during and after the race.", [
      "Heart rate increases, so blood flows faster to the muscles.",
      "Breathing rate and breath volume increase, so more oxygen gets into the blood.",
      "This supplies more oxygen and glucose for aerobic respiration, and removes more carbon dioxide.",
      "The muscles can't get enough oxygen, so they also respire anaerobically, producing lactic acid.",
      "Lactic acid builds up and the muscles become fatigued, so they contract less efficiently.",
      "After the race, breathing stays fast and deep to repay the oxygen debt.",
      "Blood carries the lactic acid to the liver, where it is converted back into glucose."
    ])
  ]);

  // ---------- 4.5 Homeostasis and Response ----------
  addTo("Reflex arc: sensory, relay, motor neurones", [
    six("A person touches a hot pan and quickly pulls their hand away. Describe how the nervous system produces this response.", [
      "Receptors in the skin detect the heat (the stimulus).",
      "Electrical impulses travel along a sensory neurone to the spinal cord (CNS).",
      "At the synapse, a chemical is released that diffuses across the gap and starts an impulse in the next neurone.",
      "A relay neurone in the spinal cord passes the impulse to a motor neurone.",
      "The impulse travels along the motor neurone to the effector, a muscle in the arm.",
      "The muscle contracts, pulling the hand away.",
      "It's a reflex: fast and automatic, because the impulse doesn't go through the conscious part of the brain, which reduces damage."
    ])
  ]);
  addTo("The eye: structure and function, accommodation", [
    six("A student looks up from reading a book to look at a tree in the distance. Explain how the eye changes to focus on the book, and then on the tree.", [
      "Light is refracted by the cornea and the lens to focus an image on the retina.",
      "Near object (book): the ciliary muscles contract.",
      "The suspensory ligaments slacken (loosen).",
      "The lens becomes thicker (more curved), so it refracts light more strongly.",
      "Distant object (tree): the ciliary muscles relax.",
      "The suspensory ligaments are pulled tight.",
      "The lens is pulled thin (flatter), so it refracts light only slightly; this process is called accommodation."
    ])
  ]);
  addTo("Thermoregulation: vasodilation, sweating, shivering", [
    six("Explain how the body responds to bring its core temperature back to normal when it gets too hot, and when it gets too cold.", [
      "The thermoregulatory centre in the brain detects the temperature of the blood; receptors in the skin also send information.",
      "Too hot: blood vessels supplying the skin capillaries dilate (vasodilation), so more blood flows near the surface and more heat is lost.",
      "Too hot: sweat glands release sweat, which evaporates from the skin, transferring heat away.",
      "Too cold: the blood vessels constrict (vasoconstriction), so less blood flows near the surface and less heat is lost.",
      "Too cold: sweating stops.",
      "Too cold: skeletal muscles contract rapidly (shivering), releasing heat from respiration.",
      "These responses bring the temperature back to about 37 °C, which keeps enzymes working at their best."
    ])
  ]);
  addTo("Glucagon and insulin: negative feedback", [
    six("Explain how blood glucose concentration is controlled after a large meal, and after several hours without food.", [
      "The pancreas monitors the blood glucose concentration.",
      "After a meal the concentration rises, so the pancreas releases insulin into the blood.",
      "Insulin makes body cells take in glucose from the blood.",
      "In the liver and muscles, excess glucose is converted into glycogen for storage.",
      "Without food the concentration falls, so the pancreas releases glucagon.",
      "Glucagon makes the liver convert glycogen back into glucose, which is released into the blood.",
      "This is negative feedback: each change triggers a response that brings the concentration back to normal."
    ])
  ]);
  addTo("Type 1 vs Type 2 diabetes: causes and treatments", [
    six("Compare Type 1 and Type 2 diabetes. Include their causes and how they are treated.", [
      "In both types the blood glucose concentration can rise too high.",
      "Type 1: the pancreas produces too little or no insulin.",
      "Type 2: the pancreas still makes insulin, but body cells no longer respond to it properly.",
      "Type 1 usually starts in childhood; Type 2 is more common in older people.",
      "Obesity (and lack of exercise) is a risk factor for Type 2, but not for Type 1.",
      "Type 1 is treated with insulin injections (or a pump), as well as a careful diet.",
      "Type 2 is treated first with a carbohydrate-controlled diet and exercise; drugs may be added later."
    ], "compare")
  ]);
  addTo("How hormones interact to control the menstrual cycle", [
    six("Describe how the hormones FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.", [
      "FSH is released by the pituitary gland.",
      "FSH causes an egg to mature in the ovary and stimulates the ovaries to produce oestrogen.",
      "Oestrogen makes the lining of the uterus build up, and stops FSH being released.",
      "Oestrogen stimulates the pituitary gland to release LH.",
      "LH causes ovulation (release of the mature egg), around day 14.",
      "Progesterone is released by the ovary after ovulation and keeps the uterus lining thick.",
      "Progesterone stops FSH and LH being released; when progesterone falls, the lining breaks down (menstruation) and FSH rises again."
    ])
  ]);
  addTo("Contraception: hormonal and non-hormonal", [
    six("A couple are deciding which method of contraception to use. Evaluate the use of hormonal and non-hormonal methods.", [
      "Hormonal methods include the pill, implant, injection and patch; they release oestrogen and/or progesterone.",
      "They work by stopping FSH being released, so no eggs mature, or by thickening mucus so sperm can't get through.",
      "Hormonal methods are very effective (over 99% if used correctly), and an implant or injection lasts for months or years.",
      "But they can have side effects (e.g. mood changes, headaches, blood clots), the pill must be taken every day, and they don't protect against STIs.",
      "Non-hormonal methods include condoms and diaphragms (barriers), spermicide, abstaining around ovulation, and surgery (sterilisation).",
      "Condoms protect against STIs and have no hormonal side effects, but are less effective and can split; surgery is very effective but usually permanent.",
      "Conclusion with a reason, e.g. a hormonal method for reliability, plus condoms for protection against STIs."
    ], "evaluate")
  ]);
  addTo("Fertility treatments: IVF, fertility drugs", [
    six("Describe how IVF treatment is carried out, and give some of the problems with it.", [
      "The woman is given FSH and LH to make several eggs mature at once.",
      "The eggs are collected from her ovaries.",
      "The eggs are fertilised in a lab with sperm from the father (or a sperm is injected directly into an egg).",
      "The fertilised eggs develop into embryos.",
      "When they are tiny balls of cells, one or two embryos are inserted into the mother's uterus.",
      "Problems: the success rate is low, so it can be emotionally and physically stressful, and it is expensive.",
      "Problems: putting in more than one embryo can lead to multiple births, which are risky for the mother and babies; unused embryos raise ethical issues."
    ])
  ]);
  addTo("Plant hormones: auxin, gravitropism, phototropism", [
    six("A seedling is placed on a windowsill so it gets light from one side only. Explain how the shoot grows towards the light, and how the root grows downwards.", [
      "Auxin is a plant hormone made in the tips of shoots and roots.",
      "Light from one side makes auxin collect on the shaded side of the shoot.",
      "In shoots, auxin stimulates cell elongation, so the shaded side grows faster.",
      "The shoot bends towards the light (phototropism), so its leaves get more light for photosynthesis.",
      "In a root, gravity makes auxin collect on the lower side.",
      "In roots, auxin inhibits cell elongation, so the upper side grows faster and the root bends downwards (gravitropism).",
      "Roots growing down anchor the plant and reach water and mineral ions."
    ])
  ]);

  // ---------- 4.6 Inheritance, Variation and Evolution ----------
  addTo("Sexual vs asexual reproduction: advantages", [
    six("Strawberry plants reproduce sexually using seeds, and asexually using runners. Compare sexual and asexual reproduction, including the advantages of each.", [
      "Sexual reproduction involves two parents and the fusion of gametes; asexual involves one parent and no gametes.",
      "Sexual reproduction uses meiosis to make gametes; asexual reproduction uses mitosis.",
      "Sexual offspring show variation (a mix of genes); asexual offspring are clones, genetically identical to the parent.",
      "Advantage of sexual: variation means some may survive if the environment changes or a disease spreads, and it drives natural selection.",
      "Advantage of sexual: humans can use it to selectively breed plants with useful features.",
      "Advantage of asexual: only one parent is needed, so it is faster and uses less time and energy than finding a mate.",
      "Advantage of asexual: many identical offspring can be made quickly when conditions are good, e.g. runners spreading over a field."
    ], "compare")
  ]);
  addTo("Meiosis: stages and importance of variation", [
    six("Compare mitosis and meiosis.", [
      "Both are types of cell division, and in both the DNA is copied first.",
      "Mitosis has one division; meiosis has two divisions.",
      "Mitosis makes two daughter cells; meiosis makes four.",
      "Mitosis makes cells with the full number of chromosomes (diploid, 46 in humans); meiosis makes cells with half the number (haploid, 23).",
      "Mitosis makes genetically identical cells; meiosis makes cells that are all genetically different.",
      "Mitosis happens in body cells for growth, repair and asexual reproduction.",
      "Meiosis happens in the reproductive organs (testes and ovaries) to make gametes."
    ], "compare")
  ]);
  addTo("Inherited disorders: cystic fibrosis, polydactyly", [
    six("Embryos made by IVF can be screened for cystic fibrosis before one is chosen to put into the uterus. Evaluate the use of embryo screening.", [
      "Cystic fibrosis is caused by a recessive allele, so two carrier parents have a 1 in 4 chance of each child having it.",
      "Screening means only embryos without the disorder are implanted, so the child won't suffer from it.",
      "It saves the cost of lifelong treatment and care for the disorder.",
      "Screening is expensive, and removing a cell could damage the embryo.",
      "Some people think destroying embryos with the disorder is wrong.",
      "Some worry it could lead to people choosing embryos for other reasons (\"designer babies\"), or suggests that people with disorders are less valued.",
      "Conclusion with a reason, e.g. it is justified for serious disorders, if strictly regulated."
    ], "evaluate")
  ]);
  addTo("Natural selection and evolution", [
    six("A species of hare lives in a region that has become much snowier over thousands of years. Most of the hares now have white fur in winter. Explain how this change happened by natural selection.", [
      "There was variation in fur colour in the original population.",
      "The variation was caused by different alleles, which came from mutations.",
      "Hares with whiter fur were better camouflaged in the snow, so predators were less likely to see and catch them.",
      "Darker hares were more likely to be eaten.",
      "The white hares were more likely to survive and reproduce.",
      "They passed the alleles for white fur on to their offspring.",
      "Over many generations, the allele for white fur became more common in the population."
    ])
  ]);
  addTo("Selective breeding: process and examples", [
    six("Farmers want a variety of wheat that is resistant to a fungal disease. Compare using selective breeding and genetic engineering to produce this wheat.", [
      "Both produce plants with a useful characteristic that can be passed on to offspring.",
      "Selective breeding: choose parent plants that show the most resistance and breed them together.",
      "Then choose the most resistant offspring and breed them, repeating over many generations.",
      "Genetic engineering: cut out the gene for resistance from another organism and insert it into the wheat's cells.",
      "Selective breeding is slow (many generations), but genetic engineering can give the result in one generation.",
      "Genetic engineering can use genes from a completely different species; selective breeding can only use variation already in the wheat.",
      "Selective breeding can cause inbreeding and a smaller gene pool; people worry GM crops might affect wild plants and insects, or the health of people who eat them."
    ], "compare")
  ]);
  addTo("The steps of genetic engineering (enzymes, vectors)", [
    six("Describe how bacteria can be genetically engineered to make human insulin.", [
      "The gene for insulin is found in human DNA.",
      "It is cut out using enzymes (restriction enzymes), leaving sticky ends.",
      "A plasmid is taken from a bacterium and cut open with the same enzyme; the plasmid is the vector.",
      "The insulin gene is joined into the plasmid using another enzyme (ligase).",
      "The plasmid is put back into a bacterium.",
      "The bacterium divides many times, making clones that all contain the gene.",
      "The bacteria are grown in large vessels (fermenters) and produce insulin, which is collected and purified."
    ])
  ]);

  // ---------- 4.7 Ecology ----------
  addTo("Required practical: sampling using quadrats and transects", [
    six("A student wants to find out how the distribution of buttercups changes from the edge of a wood out into an open field. Plan an investigation the student could use.", [
      "Lay a tape measure in a straight line from the edge of the wood out into the field (a transect).",
      "Place a quadrat at regular intervals along the tape, e.g. every 2 m.",
      "Count the number of buttercups in each quadrat, or estimate the percentage cover.",
      "Measure an abiotic factor at each quadrat, e.g. light intensity with a light meter.",
      "Use the same size quadrat each time.",
      "Repeat with more transects in different places along the edge of the wood and calculate means.",
      "Plot the number of buttercups (and light intensity) against distance from the wood to see the pattern."
    ], "plan")
  ]);
  addTo("Carbon cycle", [
    six("Describe how carbon is recycled in a woodland ecosystem.", [
      "Plants (producers) take in carbon dioxide from the air for photosynthesis.",
      "The carbon becomes part of carbohydrates, proteins and fats in the plants.",
      "Animals eat the plants, so carbon passes along the food chain.",
      "Plants and animals release carbon dioxide back into the air by respiration.",
      "When plants and animals die (or produce waste), decomposers such as bacteria and fungi break them down.",
      "Decomposers release carbon dioxide into the air by respiration.",
      "Burning wood (combustion) also releases carbon dioxide."
    ])
  ]);
  addTo("Human impact: deforestation, global warming, land use", [
    six("Large areas of tropical forest are being cut down and burned to make space for cattle farms and crops. Explain the effects this has on the environment.", [
      "Burning the trees releases carbon dioxide into the atmosphere.",
      "Microorganisms decomposing the dead wood also release carbon dioxide by respiration.",
      "Fewer trees means less carbon dioxide is taken from the air by photosynthesis.",
      "More carbon dioxide (and methane from cattle) increases the greenhouse effect, leading to global warming.",
      "Habitats are destroyed, so many species lose their food and shelter.",
      "This reduces biodiversity, and some species may become extinct.",
      "Lower biodiversity makes ecosystems less stable, and we may lose plants that could be used for medicines or food."
    ])
  ]);
  addTo("Trophic levels and energy transfer", [
    six("Explain why biomass is lost at each stage of a food chain, and why this means food chains rarely have more than four or five trophic levels.", [
      "Producers (plants) make biomass by photosynthesis; only about 10% is passed on to each next trophic level.",
      "Not all of an organism is eaten, e.g. roots or bones.",
      "Not all the food eaten is digested; some is egested as faeces.",
      "Much of the glucose is used in respiration, releasing energy for movement and keeping warm, and carbon dioxide is lost.",
      "Some biomass is lost as waste such as urea in urine.",
      "So each trophic level has much less biomass than the one below.",
      "After a few levels there isn't enough biomass left to support another population of consumers."
    ])
  ]);
})();
