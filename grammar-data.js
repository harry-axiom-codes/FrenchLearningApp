const GRAMMAR_CHAPTERS = [
    // ═══════════════════════════════════════════════════
    // CHAPTERS 1–15: LES BASES
    // ═══════════════════════════════════════════════════

    { id: 1, section: "Les bases", title: "Le verbe « être »",
      notes: "**Le verbe ÊTRE** conjugué au présent :\n\nJe **suis** / Tu **es** / Il, elle, on **est** / Nous **sommes** / Vous **êtes** / Ils, elles **sont**\n\n- **Vous** : politesse ou pluriel. **Tu** : amis, famille.\n- **On** = nous (langage courant) ou tout le monde.\n- **À** indique la ville : *Je suis à Paris.*\n- **De** indique l'origine : *Je suis de Rome.*\n- **Chez** s'utilise avec les personnes : *Je suis chez Pierre.*",
      exercises: [
        { id: 1, prompt: "- ___ êtes espagnol ou portugais ? - Je suis espagnol.", answer: "Vous", hint: "Pronom de politesse" },
        { id: 2, prompt: "- Vous ___ de Madrid ou de Barcelone ? - Je suis de Madrid.", answer: "êtes", hint: "Verbe être avec vous" },
        { id: 3, prompt: "- Vous êtes étudiant ou professeur ? - Je ___ étudiant.", answer: "suis", hint: "Verbe être avec je" },
        { id: 4, prompt: "- ___ es là, papa ?", answer: "Tu", hint: "Familier, famille" },
        { id: 5, prompt: "- ___ êtes seule, mademoiselle ?", answer: "Vous", hint: "Politesse" },
        { id: 6, prompt: "- Le professeur est là ? - Oui, ___ est là.", answer: "il", hint: "Pronom sujet masculin" },
        { id: 7, prompt: "- La salle est grande ? - Oui, ___ est grande.", answer: "elle", hint: "Pronom sujet féminin" },
        { id: 8, prompt: "Jean et moi, nous ___ français.", answer: "sommes", hint: "Être avec nous" },
        { id: 9, prompt: "- Les étudiants ___ en forme ? - Ils sont toujours en forme !", answer: "sont", hint: "Être avec ils" },
        { id: 10, prompt: "Paul et moi, on ___ de Nice.", answer: "est", hint: "On = nous, mais verbe au singulier" },
    ] },

    { id: 2, section: "Les bases", title: "L'adjectif (1)",
      notes: "**Masculin → Féminin** : en général, on ajoute **-e** au masculin.\n*grand → grande, français → française*\n\nCas particuliers :\n- -en → -enne, -on → -onne, -el → -elle\n- -f → -ve, -eux → -euse, -eur → -euse, -teur → -trice\n- -er → -ère, -et → -ète\n\n**Singulier → Pluriel** : on ajoute **-s**.\n- Les adjectifs en -s ou -x ne changent pas.\n- Les adjectifs en -al → -aux.",
      exercises: [
        { id: 1, prompt: "Franz est allemand. Petra est ___.", answer: "allemande", hint: "Féminin : ajoutez -e" },
        { id: 2, prompt: "Mon père est français. Ma mère est ___.", answer: "française", hint: "Féminin de français" },
        { id: 3, prompt: "Mon frère est grand. Ma sœur est ___.", answer: "grande", hint: "Féminin : ajoutez -e" },
        { id: 4, prompt: "Mon oncle est blond. Ma tante est ___.", answer: "blonde", hint: "Féminin : ajoutez -e" },
        { id: 5, prompt: "Le petit garçon est content. La petite fille est ___.", answer: "contente", hint: "Féminin : ajoutez -e" },
        { id: 6, prompt: "Giorgio est italien. Bruna est ___.", answer: "italienne", hint: "-en → -enne" },
        { id: 7, prompt: "Il est mignon. Elle est ___.", answer: "mignonne", hint: "-on → -onne" },
        { id: 8, prompt: "Marc est sportif. Cathy est ___.", answer: "sportive", hint: "-f → -ve" },
        { id: 9, prompt: "Il est sérieux. Elle est ___.", answer: "sérieuse", hint: "-eux → -euse" },
        { id: 10, prompt: "Un sac neuf et une valise ___.", answer: "neuve", hint: "-f → -ve" },
        { id: 11, prompt: "Un pull bleu et une veste ___.", answer: "bleue", hint: "Ajoutez -e" },
        { id: 12, prompt: "Un tapis ancien et une armoire ___.", answer: "ancienne", hint: "-en → -enne" },
        { id: 13, prompt: "Un poisson frais et une viande ___.", answer: "fraîche", hint: "Cas particulier : frais → fraîche" },
        { id: 14, prompt: "Pierre est sympathique. Pierre et Alain sont ___.", answer: "sympathiques", hint: "Pluriel : ajoutez -s" },
        { id: 15, prompt: "Arthur est petit et mince. Arthur et Bruno sont ___ et ___.", answer: "petits/minces", hint: "Pluriel : ajoutez -s" },
    ] },

    { id: 3, section: "Les bases", title: "La négation et l'interrogation (1)",
      notes: "**La négation** : sujet + **ne** + verbe + **pas**\n*Je ne suis pas français. Il n'est pas espagnol.*\n\n**L'interrogation** :\n- Intonation montante : *Vous êtes français ?*\n- Avec est-ce que : *Est-ce que vous êtes français ?*\n- Inversion : *Êtes-vous français ?*",
      exercises: [
        { id: 1, prompt: "- Vous êtes anglais ? - Non, je ___ suis ___ anglais.", answer: "ne/pas", hint: "ne ... pas" },
        { id: 2, prompt: "- Tu es fatigué ? - Non, je ___ suis ___ fatigué.", answer: "ne/pas", hint: "ne ... pas" },
        { id: 3, prompt: "- Vous êtes marié ? - Non, je ne ___ pas marié.", answer: "suis", hint: "Verbe être avec je" },
        { id: 4, prompt: "- Il est français ? - Non, il ___ pas français.", answer: "n'est", hint: "ne + voyelle = n'" },
        { id: 5, prompt: "- Marie est grande ? - Non, elle n'est ___ grande.", answer: "pas", hint: "Deuxième partie de la négation" },
        { id: 6, prompt: "___ vous êtes étudiant ?", answer: "Est-ce que", hint: "Forme interrogative courante" },
    ] },

    { id: 4, section: "Les bases", title: "Le nom et l'article",
      notes: "**Articles définis** : le, la, l', les\n**Articles indéfinis** : un, une, des\n\n- Le/la → **l'** devant voyelle ou h muet.\n- En général : noms en -e → féminin, autres → masculin.\n- Exceptions : le musée, le lycée, la clé...\n- Pluriel des noms : en général +s. Noms en -s, -x, -z ne changent pas.",
      exercises: [
        { id: 1, prompt: "___ soleil est chaud. (le/la)", answer: "Le", hint: "Soleil est masculin" },
        { id: 2, prompt: "___ lune est belle. (le/la)", answer: "La", hint: "Lune est féminin" },
        { id: 3, prompt: "___ école est grande. (le/la/l')", answer: "L'", hint: "Devant voyelle" },
        { id: 4, prompt: "J'ai ___ chat et ___ chien. (un/une)", answer: "un/un", hint: "Chat et chien sont masculins" },
        { id: 5, prompt: "Il y a ___ boulangerie dans la rue. (un/une)", answer: "une", hint: "Boulangerie est féminin" },
        { id: 6, prompt: "J'achète ___ journaux et ___ revues. (des)", answer: "des/des", hint: "Pluriel indéfini" },
    ] },

    { id: 5, section: "Les bases", title: "« C'est » et « il est »",
      notes: "**C'est** + nom (avec article/possessif) : *C'est un ami. C'est Pierre.*\n**Il/Elle est** + adjectif ou profession (sans article) : *Il est grand. Elle est médecin.*\n\n- C'est + adjectif pour commenter une situation : *C'est beau ! C'est intéressant !*\n- Pluriel : Ce sont des amis. Ils sont sympathiques.",
      exercises: [
        { id: 1, prompt: "___ un ami. ___ sympathique.", answer: "C'est/Il est", hint: "C'est + nom, Il est + adjectif" },
        { id: 2, prompt: "___ Pierre. ___ français.", answer: "C'est/Il est", hint: "C'est + nom propre, Il est + nationalité" },
        { id: 3, prompt: "___ une actrice. ___ très belle.", answer: "C'est/Elle est", hint: "C'est + nom, Elle est + adjectif" },
        { id: 4, prompt: "___ médecin. ___ un bon médecin.", answer: "Il est/C'est", hint: "Il est + profession, C'est + article + nom" },
        { id: 5, prompt: "La tour Eiffel ? ___ beau ! ___ un monument célèbre.", answer: "C'est/C'est", hint: "C'est pour commenter" },
    ] },

    { id: 6, section: "Les bases", title: "Les possessifs",
      notes: "**Adjectifs possessifs** :\n- mon, ma, mes (je)\n- ton, ta, tes (tu)\n- son, sa, ses (il/elle)\n- notre, nos (nous)\n- votre, vos (vous)\n- leur, leurs (ils/elles)\n\nDevant voyelle féminine : **mon** amie (pas *ma amie*).",
      exercises: [
        { id: 1, prompt: "J'ai un frère. ___ frère s'appelle Paul.", answer: "Mon", hint: "Possessif de je, masculin" },
        { id: 2, prompt: "Tu as une sœur. ___ sœur est grande.", answer: "Ta", hint: "Possessif de tu, féminin" },
        { id: 3, prompt: "Il a des enfants. ___ enfants sont petits.", answer: "Ses", hint: "Possessif de il, pluriel" },
        { id: 4, prompt: "Nous avons une maison. ___ maison est belle.", answer: "Notre", hint: "Possessif de nous" },
        { id: 5, prompt: "Vous avez des livres. ___ livres sont intéressants.", answer: "Vos", hint: "Possessif de vous, pluriel" },
        { id: 6, prompt: "Ils ont un chien. ___ chien est gentil.", answer: "Leur", hint: "Possessif de ils, singulier" },
        { id: 7, prompt: "J'ai une amie. ___ amie est italienne.", answer: "Mon", hint: "Devant voyelle féminine : mon (pas ma)" },
    ] },

    { id: 7, section: "Les bases", title: "Les noms de parenté et de groupe",
      notes: "**La famille** : le père, la mère, le fils, la fille, le frère, la sœur, le mari, la femme, l'oncle, la tante, le cousin, la cousine, le grand-père, la grand-mère...\n\n**Les groupes** : les gens, les personnes, tout le monde.\n\n- On utilise les possessifs avec les noms de parenté : *mon père, sa mère, leurs enfants*.",
      exercises: [
        { id: 1, prompt: "Le père de mon père est mon ___.", answer: "grand-père", hint: "Nom de parenté" },
        { id: 2, prompt: "La sœur de ma mère est ma ___.", answer: "tante", hint: "Nom de parenté" },
        { id: 3, prompt: "Le fils de mon oncle est mon ___.", answer: "cousin", hint: "Nom de parenté" },
        { id: 4, prompt: "La fille de mes parents est ma ___.", answer: "sœur", hint: "Nom de parenté" },
    ] },

    { id: 8, section: "Les bases", title: "Les démonstratifs",
      notes: "**Adjectifs démonstratifs** :\n- **ce** + nom masculin : *ce livre*\n- **cet** + nom masculin commençant par voyelle/h : *cet homme*\n- **cette** + nom féminin : *cette femme*\n- **ces** + nom pluriel : *ces livres*\n\nOn ajoute **-ci** (proche) ou **-là** (éloigné) : *ce livre-ci, ce livre-là*.",
      exercises: [
        { id: 1, prompt: "___ livre est intéressant. (ce/cette)", answer: "Ce", hint: "Masculin singulier" },
        { id: 2, prompt: "___ femme est belle. (ce/cette)", answer: "Cette", hint: "Féminin singulier" },
        { id: 3, prompt: "___ homme est grand. (ce/cet)", answer: "Cet", hint: "Masculin devant voyelle/h" },
        { id: 4, prompt: "___ enfants sont sages. (ce/ces)", answer: "Ces", hint: "Pluriel" },
        { id: 5, prompt: "___ appartement est petit. (ce/cet)", answer: "Cet", hint: "Masculin devant voyelle" },
        { id: 6, prompt: "___ fleurs sont jolies. (cette/ces)", answer: "Ces", hint: "Pluriel" },
    ] },

    { id: 9, section: "Les bases", title: "« Il y a » et « c'est »",
      notes: "**Il y a** + article indéfini : pour signaler l'existence.\n*Il y a un chat dans le jardin. Il y a des livres sur la table.*\n\n**C'est** + article défini/possessif : pour identifier.\n*C'est le chat de Pierre. C'est mon livre.*\n\nNégation : *Il n'y a pas de...*",
      exercises: [
        { id: 1, prompt: "___ un café dans la rue.", answer: "Il y a", hint: "Signaler l'existence" },
        { id: 2, prompt: "___ le café de Pierre.", answer: "C'est", hint: "Identifier" },
        { id: 3, prompt: "___ des fleurs dans le jardin.", answer: "Il y a", hint: "Signaler l'existence" },
        { id: 4, prompt: "Il n'y a ___ de pain.", answer: "pas", hint: "Négation de il y a" },
    ] },

    { id: 10, section: "Les bases", title: "La situation dans l'espace (1)",
      notes: "**Prépositions de lieu** :\n- **à** + ville : *à Paris*\n- **en** + pays féminin : *en France*\n- **au** + pays masculin : *au Japon*\n- **aux** + pays pluriel : *aux États-Unis*\n\n**Localisation** : sur, sous, dans, devant, derrière, entre, à côté de, en face de, près de, loin de.",
      exercises: [
        { id: 1, prompt: "Je suis ___ Paris.", answer: "à", hint: "Préposition + ville" },
        { id: 2, prompt: "Il habite ___ France.", answer: "en", hint: "Pays féminin" },
        { id: 3, prompt: "Elle va ___ Japon.", answer: "au", hint: "Pays masculin" },
        { id: 4, prompt: "Nous allons ___ États-Unis.", answer: "aux", hint: "Pays pluriel" },
        { id: 5, prompt: "Le livre est ___ la table.", answer: "sur", hint: "Position : dessus" },
        { id: 6, prompt: "Le chat est ___ le lit.", answer: "sous", hint: "Position : dessous" },
    ] },

    { id: 11, section: "Les bases", title: "Le verbe « avoir »",
      notes: "**Le verbe AVOIR** au présent :\n\nJ'**ai** / Tu **as** / Il, elle, on **a** / Nous **avons** / Vous **avez** / Ils, elles **ont**\n\nExpressions avec avoir : avoir faim, avoir soif, avoir chaud, avoir froid, avoir peur, avoir raison, avoir tort, avoir besoin de, avoir envie de, avoir ___ ans.",
      exercises: [
        { id: 1, prompt: "J'___ vingt ans.", answer: "ai", hint: "Avoir avec je" },
        { id: 2, prompt: "Tu ___ un frère ?", answer: "as", hint: "Avoir avec tu" },
        { id: 3, prompt: "Elle ___ les yeux bleus.", answer: "a", hint: "Avoir avec elle" },
        { id: 4, prompt: "Nous ___ une grande maison.", answer: "avons", hint: "Avoir avec nous" },
        { id: 5, prompt: "Vous ___ des enfants ?", answer: "avez", hint: "Avoir avec vous" },
        { id: 6, prompt: "Ils ___ faim.", answer: "ont", hint: "Avoir avec ils" },
        { id: 7, prompt: "J'ai ___ : je voudrais boire.", answer: "soif", hint: "Expression avec avoir" },
        { id: 8, prompt: "Il a ___ : il met un pull.", answer: "froid", hint: "Expression avec avoir" },
        { id: 9, prompt: "Elle a 30 ___ .", answer: "ans", hint: "L'âge avec avoir" },
    ] },

    { id: 12, section: "Les bases", title: "L'adjectif (2)",
      notes: "**Place de l'adjectif** : en général après le nom.\n*un livre intéressant, une robe rouge*\n\nAdjectifs courts et courants **avant** le nom : petit, grand, gros, beau, joli, bon, mauvais, jeune, vieux, nouveau.\n*un petit chat, une belle maison*\n\n**Beau, nouveau, vieux** devant voyelle masculine : bel, nouvel, vieil.\n*un bel homme, un nouvel ami, un vieil arbre*",
      exercises: [
        { id: 1, prompt: "C'est un ___ appartement. (beau/bel)", answer: "bel", hint: "Devant voyelle" },
        { id: 2, prompt: "C'est un ___ ami. (nouveau/nouvel)", answer: "nouvel", hint: "Devant voyelle" },
        { id: 3, prompt: "C'est un ___ homme. (vieux/vieil)", answer: "vieil", hint: "Devant voyelle/h" },
        { id: 4, prompt: "C'est une ___ robe. (beau/belle)", answer: "belle", hint: "Féminin" },
        { id: 5, prompt: "C'est une ___ maison. (nouveau/nouvelle)", answer: "nouvelle", hint: "Féminin" },
    ] },

    { id: 13, section: "Les bases", title: "Les nombres",
      notes: "0-20 : zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt.\n\n21-69 : vingt et un, vingt-deux... trente, quarante, cinquante, soixante.\n\n70-99 : soixante-dix, soixante et onze... quatre-vingts, quatre-vingt-un... quatre-vingt-dix...\n\n100 : cent. 1000 : mille.",
      exercises: [
        { id: 1, prompt: "10 + 10 = ___ (en lettres)", answer: "vingt", hint: "Nombre" },
        { id: 2, prompt: "30 + 40 = ___ (en lettres)", answer: "soixante-dix", hint: "Nombre" },
        { id: 3, prompt: "4 × 20 = ___ (en lettres)", answer: "quatre-vingts", hint: "Nombre" },
        { id: 4, prompt: "4 × 20 + 10 = ___ (en lettres)", answer: "quatre-vingt-dix", hint: "Nombre" },
    ] },

    { id: 14, section: "Les bases", title: "Le temps (1)",
      notes: "**Jours** : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.\n**Mois** : janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.\n\n**Moments** : le matin, l'après-midi, le soir, la nuit.\n\n- **Le** + jour = habitude : *Le lundi, je travaille.* (= tous les lundis)\n- Jour sans article = prochain : *Lundi, je pars.* (= lundi prochain)",
      exercises: [
        { id: 1, prompt: "___ matin, je me lève à 7 heures. (tous les matins)", answer: "Le", hint: "Article pour l'habitude" },
        { id: 2, prompt: "___ lundi, je vais au cinéma. (habitude)", answer: "Le", hint: "Le + jour = habitude" },
        { id: 3, prompt: "Nous sommes en ___ . (mois 1)", answer: "janvier", hint: "Premier mois de l'année" },
    ] },

    { id: 15, section: "Les bases", title: "Les indéfinis",
      notes: "**Quelques** (= un petit nombre) : *quelques amis*\n**Plusieurs** (= un certain nombre) : *plusieurs livres*\n**Certains/certaines** (= quelques-uns en particulier) : *certains étudiants*\n**Chaque** (= chacun) : *chaque jour*\n**Tout, toute, tous, toutes** (= la totalité) : *tous les jours, toutes les semaines*\n**Aucun/aucune** (= zéro) : *aucun problème*",
      exercises: [
        { id: 1, prompt: "J'ai ___ amis à Paris. (un petit nombre)", answer: "quelques", hint: "Un petit nombre" },
        { id: 2, prompt: "Il y a ___ solutions possibles. (un certain nombre)", answer: "plusieurs", hint: "Un certain nombre" },
        { id: 3, prompt: "___ jour, je fais du sport.", answer: "Chaque", hint: "= chacun" },
        { id: 4, prompt: "___ les matins, je bois un café.", answer: "Tous", hint: "La totalité, masculin pluriel" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 16–26: LE PRÉSENT (SUITE)
    // ═══════════════════════════════════════════════════

    { id: 16, section: "Le présent (suite)", title: "Les verbes en « -er » au présent",
      notes: "**Verbes en -er** (1er groupe) : radical + terminaisons.\n\nParler : je parl**e**, tu parl**es**, il parl**e**, nous parl**ons**, vous parl**ez**, ils parl**ent**.\n\nParticularités :\n- Verbes en -ger : nous mangeons (ajout de e)\n- Verbes en -cer : nous commençons (cédille)\n- Acheter : j'achète (accent grave)\n- Appeler : j'appelle (double l)\n- Payer : je paie/paye",
      exercises: [
        { id: 1, prompt: "Je ___ français. (parler)", answer: "parle", hint: "Verbe en -er, je" },
        { id: 2, prompt: "Tu ___ la radio. (écouter)", answer: "écoutes", hint: "Verbe en -er, tu" },
        { id: 3, prompt: "Il ___ à Paris. (habiter)", answer: "habite", hint: "Verbe en -er, il" },
        { id: 4, prompt: "Nous ___ au restaurant. (manger)", answer: "mangeons", hint: "Verbe en -ger : nous mangeons" },
        { id: 5, prompt: "Vous ___ bien. (danser)", answer: "dansez", hint: "Verbe en -er, vous" },
        { id: 6, prompt: "Ils ___ le bus. (prendre → non ! regarder)", answer: "regardent", hint: "Verbe en -er, ils" },
        { id: 7, prompt: "Nous ___ à 8 heures. (commencer)", answer: "commençons", hint: "Verbe en -cer : cédille avec nous" },
        { id: 8, prompt: "J'___ un livre. (acheter)", answer: "achète", hint: "j'achète avec accent grave" },
    ] },

    { id: 17, section: "Le présent (suite)", title: "Le temps (2)",
      notes: "**L'heure** :\n- Il est une heure / deux heures / midi / minuit.\n- Il est trois heures et quart / et demie / moins le quart.\n- Il est 8 h 30 = huit heures trente.\n\n**Expressions** : tôt, tard, en avance, en retard, à l'heure.\n**Fréquence** : toujours, souvent, quelquefois, rarement, jamais.",
      exercises: [
        { id: 1, prompt: "Il est 8 h 30 = Il est huit heures et ___.", answer: "demie", hint: "30 minutes = et demie" },
        { id: 2, prompt: "Il est 9 h 15 = Il est neuf heures et ___.", answer: "quart", hint: "15 minutes = et quart" },
        { id: 3, prompt: "Il est 12 h 00 = Il est ___.", answer: "midi", hint: "12 h" },
        { id: 4, prompt: "Il est 0 h 00 = Il est ___.", answer: "minuit", hint: "0 h" },
    ] },

    { id: 18, section: "Le présent (suite)", title: "L'adverbe",
      notes: "**Formation** : en général, adjectif féminin + **-ment**.\n*lent → lente → lentement*\n*heureux → heureuse → heureusement*\n\nAdjectifs en -ent → -emment : *récent → récemment*\nAdjectifs en -ant → -amment : *courant → couramment*\n\nIrréguliers : bien, mal, vite.",
      exercises: [
        { id: 1, prompt: "Il parle ___ . (lent → adverbe)", answer: "lentement", hint: "Féminin + -ment" },
        { id: 2, prompt: "Elle chante ___ . (doux → adverbe)", answer: "doucement", hint: "Douce + -ment" },
        { id: 3, prompt: "Il parle français ___ . (courant → adverbe)", answer: "couramment", hint: "-ant → -amment" },
        { id: 4, prompt: "Il a ___ changé. (récent → adverbe)", answer: "récemment", hint: "-ent → -emment" },
    ] },

    { id: 19, section: "Le présent (suite)", title: "L'expression de la quantité",
      notes: "**Partitifs** : du (masc.), de la (fém.), de l' (voyelle), des (pluriel).\n*Je mange du pain, de la confiture, de l'huile, des fruits.*\n\nAprès négation : **pas de/d'**.\n*Je ne mange pas de pain.*\n\nQuantités : un peu de, beaucoup de, assez de, trop de, un kilo de, un litre de, une bouteille de...",
      exercises: [
        { id: 1, prompt: "Je bois ___ café.", answer: "du", hint: "Partitif masculin" },
        { id: 2, prompt: "Je mange ___ salade.", answer: "de la", hint: "Partitif féminin" },
        { id: 3, prompt: "Je bois ___ eau.", answer: "de l'", hint: "Partitif devant voyelle" },
        { id: 4, prompt: "Je ne bois pas ___ vin.", answer: "de", hint: "Après négation : pas de" },
        { id: 5, prompt: "Il mange beaucoup ___ fruits.", answer: "de", hint: "Après quantité : de" },
    ] },

    { id: 20, section: "Le présent (suite)", title: "Le pronom « en »",
      notes: "**En** remplace :\n- **du, de la, de l', des** + nom : *Je mange du pain → J'en mange.*\n- une quantité : *J'ai trois livres → J'en ai trois.*\n- **de** + nom : *Je viens de Paris → J'en viens.*\n\nPlace : avant le verbe. *J'en veux. Je n'en veux pas.*",
      exercises: [
        { id: 1, prompt: "- Tu manges du fromage ? - Oui, j'___ mange.", answer: "en", hint: "Remplace du fromage" },
        { id: 2, prompt: "- Vous avez des enfants ? - Oui, j'___ ai deux.", answer: "en", hint: "Remplace des enfants" },
        { id: 3, prompt: "- Il boit du café ? - Non, il n'___ boit pas.", answer: "en", hint: "Remplace du café" },
        { id: 4, prompt: "- Tu veux de la salade ? - Oui, j'___ veux.", answer: "en", hint: "Remplace de la salade" },
    ] },

    { id: 21, section: "Le présent (suite)", title: "La situation dans l'espace (2)",
      notes: "**Prépositions** :\n- **de** + ville : *Je viens de Paris.*\n- **d'** + pays féminin/voyelle : *Je viens d'Italie.*\n- **du** + pays masculin : *Je viens du Japon.*\n- **des** + pays pluriel : *Je viens des États-Unis.*\n\n**Ici, là, là-bas** : proximité décroissante.",
      exercises: [
        { id: 1, prompt: "Je viens ___ France.", answer: "de", hint: "Venir de + pays féminin" },
        { id: 2, prompt: "Il vient ___ Japon.", answer: "du", hint: "Venir du + pays masculin" },
        { id: 3, prompt: "Elle vient ___ États-Unis.", answer: "des", hint: "Venir des + pays pluriel" },
        { id: 4, prompt: "Nous venons ___ Italie.", answer: "d'", hint: "De + voyelle = d'" },
    ] },

    { id: 22, section: "Le présent (suite)", title: "Le comparatif et le superlatif",
      notes: "**Comparatif** :\n- plus + adj + que : *Il est plus grand que moi.*\n- moins + adj + que : *Elle est moins grande que lui.*\n- aussi + adj + que : *Tu es aussi grand que moi.*\n\n**Superlatif** : le/la/les plus/moins + adj.\n*C'est le plus grand. C'est la moins chère.*\n\nIrrégulier : bon → meilleur, bien → mieux.",
      exercises: [
        { id: 1, prompt: "Pierre est ___ grand que Paul. (+ grand)", answer: "plus", hint: "Supériorité" },
        { id: 2, prompt: "Marie est ___ grande que Sophie. (= grande)", answer: "aussi", hint: "Égalité" },
        { id: 3, prompt: "Ce livre est ___ intéressant que l'autre. (- intéressant)", answer: "moins", hint: "Infériorité" },
        { id: 4, prompt: "Ce gâteau est ___ que l'autre. (bon, comparatif)", answer: "meilleur", hint: "Bon → meilleur (pas plus bon)" },
        { id: 5, prompt: "C'est ___ plus grand restaurant de la ville.", answer: "le", hint: "Superlatif avec article" },
    ] },

    { id: 23, section: "Le présent (suite)", title: "Le verbe « aller »",
      notes: "**ALLER** au présent :\nJe **vais** / Tu **vas** / Il **va** / Nous **allons** / Vous **allez** / Ils **vont**\n\nAller + à/en/au/aux + lieu : *Je vais à Paris. Je vais en France.*\nAller + infinitif = futur proche : *Je vais manger.*",
      exercises: [
        { id: 1, prompt: "Je ___ au cinéma.", answer: "vais", hint: "Aller avec je" },
        { id: 2, prompt: "Tu ___ à la plage ?", answer: "vas", hint: "Aller avec tu" },
        { id: 3, prompt: "Nous ___ en France.", answer: "allons", hint: "Aller avec nous" },
        { id: 4, prompt: "Ils ___ au restaurant.", answer: "vont", hint: "Aller avec ils" },
        { id: 5, prompt: "Vous ___ bien ?", answer: "allez", hint: "Aller avec vous" },
    ] },

    { id: 24, section: "Le présent (suite)", title: "Le pronom « y »",
      notes: "**Y** remplace un complément de lieu introduit par **à, en, dans, sur, chez...**\n\n*Je vais à Paris → J'y vais.*\n*Il habite en France → Il y habite.*\n\nPlace : avant le verbe. *J'y vais. Je n'y vais pas.*",
      exercises: [
        { id: 1, prompt: "- Tu vas au cinéma ? - Oui, j'___ vais.", answer: "y", hint: "Remplace au cinéma" },
        { id: 2, prompt: "- Vous habitez à Paris ? - Oui, j'___ habite.", answer: "y", hint: "Remplace à Paris" },
        { id: 3, prompt: "- Elle va en France ? - Oui, elle ___ va.", answer: "y", hint: "Remplace en France" },
    ] },

    { id: 25, section: "Le présent (suite)", title: "La situation dans l'espace et le temps (3)",
      notes: "**En** + durée = temps nécessaire : *Je fais le trajet en 2 heures.*\n**Dans** + durée = moment futur : *Je pars dans 3 jours.*\n**Depuis** = durée qui continue : *J'habite ici depuis 5 ans.*\n**Pendant** = durée limitée : *J'ai dormi pendant 8 heures.*\n**Il y a** = moment passé : *Il est parti il y a 2 jours.*",
      exercises: [
        { id: 1, prompt: "J'habite à Paris ___ trois ans.", answer: "depuis", hint: "Durée qui continue" },
        { id: 2, prompt: "Je pars ___ deux jours.", answer: "dans", hint: "Moment futur" },
        { id: 3, prompt: "Il a téléphoné ___ une heure.", answer: "il y a", hint: "Moment passé" },
        { id: 4, prompt: "J'ai travaillé ___ huit heures.", answer: "pendant", hint: "Durée limitée" },
    ] },

    { id: 26, section: "Le présent (suite)", title: "Les verbes en « -ir », « -oir » et « -re »",
      notes: "**Verbes en -ir** (2e groupe) : finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.\n\n**Verbes courants irréguliers** :\n- Faire : je fais, nous faisons, ils font\n- Prendre : je prends, nous prenons, ils prennent\n- Pouvoir : je peux, nous pouvons, ils peuvent\n- Vouloir : je veux, nous voulons, ils veulent\n- Devoir : je dois, nous devons, ils doivent\n- Savoir : je sais, nous savons\n- Connaître : je connais, nous connaissons",
      exercises: [
        { id: 1, prompt: "Je ___ mon travail à 18 h. (finir)", answer: "finis", hint: "Verbe en -ir, je" },
        { id: 2, prompt: "Nous ___ du sport. (faire)", answer: "faisons", hint: "Faire avec nous" },
        { id: 3, prompt: "Tu ___ le bus ? (prendre)", answer: "prends", hint: "Prendre avec tu" },
        { id: 4, prompt: "Je ___ venir demain. (pouvoir)", answer: "peux", hint: "Pouvoir avec je" },
        { id: 5, prompt: "Ils ___ partir. (vouloir)", answer: "veulent", hint: "Vouloir avec ils" },
        { id: 6, prompt: "Vous ___ faire vos devoirs. (devoir)", answer: "devez", hint: "Devoir avec vous" },
        { id: 7, prompt: "Je ___ la réponse. (savoir)", answer: "sais", hint: "Savoir avec je" },
        { id: 8, prompt: "Tu ___ cette ville ? (connaître)", answer: "connais", hint: "Connaître avec tu" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 27–31: LES PRONOMS ET MODES
    // ═══════════════════════════════════════════════════

    { id: 27, section: "Les pronoms et modes", title: "Les verbes pronominaux",
      notes: "**Verbes pronominaux** : se + verbe.\nJe **me** lève, tu **te** lèves, il **se** lève, nous **nous** levons, vous **vous** levez, ils **se** lèvent.\n\nExemples : se lever, se coucher, se laver, se dépêcher, s'habiller, s'appeler.\n\nNégation : *Je ne me lève pas.*",
      exercises: [
        { id: 1, prompt: "Je ___ lève à 7 heures.", answer: "me", hint: "Pronom réfléchi avec je" },
        { id: 2, prompt: "Tu ___ couches tard ?", answer: "te", hint: "Pronom réfléchi avec tu" },
        { id: 3, prompt: "Il ___ appelle Pierre.", answer: "s'", hint: "Pronom réfléchi avec il, devant voyelle" },
        { id: 4, prompt: "Nous ___ promenons dans le parc.", answer: "nous", hint: "Pronom réfléchi avec nous" },
        { id: 5, prompt: "Elles ___ dépêchent.", answer: "se", hint: "Pronom réfléchi avec elles" },
    ] },

    { id: 28, section: "Les pronoms et modes", title: "Les pronoms compléments",
      notes: "**COD** (complément d'objet direct) : me, te, le/la, nous, vous, les.\n*Je regarde Pierre → Je le regarde.*\n\n**COI** (complément d'objet indirect, à + personne) : me, te, lui, nous, vous, leur.\n*Je parle à Pierre → Je lui parle.*\n\nPlace : avant le verbe.",
      exercises: [
        { id: 1, prompt: "- Tu regardes la télé ? - Oui, je ___ regarde.", answer: "la", hint: "COD féminin singulier" },
        { id: 2, prompt: "- Tu connais Pierre ? - Oui, je ___ connais.", answer: "le", hint: "COD masculin singulier" },
        { id: 3, prompt: "- Tu téléphones à Marie ? - Oui, je ___ téléphone.", answer: "lui", hint: "COI singulier" },
        { id: 4, prompt: "- Tu parles aux enfants ? - Oui, je ___ parle.", answer: "leur", hint: "COI pluriel" },
        { id: 5, prompt: "- Tu invites tes amis ? - Oui, je ___ invite.", answer: "les", hint: "COD pluriel" },
    ] },

    { id: 29, section: "Les pronoms et modes", title: "Les pronoms toniques",
      notes: "**Pronoms toniques** : moi, toi, lui, elle, nous, vous, eux, elles.\n\nUtilisation :\n- Après préposition : *avec moi, chez lui, pour eux*\n- Pour insister : *Moi, je suis français.*\n- Après c'est : *C'est moi. C'est lui.*\n- Dans les comparaisons : *plus grand que toi*",
      exercises: [
        { id: 1, prompt: "Tu viens chez ___ ? (je)", answer: "moi", hint: "Tonique de je" },
        { id: 2, prompt: "C'est pour ___ . (il)", answer: "lui", hint: "Tonique de il" },
        { id: 3, prompt: "Je pars avec ___ . (ils)", answer: "eux", hint: "Tonique de ils" },
        { id: 4, prompt: "C'est ___ qui a raison. (tu)", answer: "toi", hint: "Tonique de tu" },
    ] },

    { id: 30, section: "Les pronoms et modes", title: "L'impératif",
      notes: "**L'impératif** : 3 formes (tu, nous, vous), sans pronom sujet.\n\n- Verbes en -er : parle, parlons, parlez (pas de -s à tu !)\n- Autres verbes : finis, finissons, finissez\n- Être : sois, soyons, soyez\n- Avoir : aie, ayons, ayez\n\nNégatif : *Ne parle pas ! Ne mangez pas !*",
      exercises: [
        { id: 1, prompt: "___ ! (écouter, tu)", answer: "Écoute", hint: "Impératif tu, verbe en -er : pas de -s" },
        { id: 2, prompt: "___ la porte ! (fermer, vous)", answer: "Fermez", hint: "Impératif vous" },
        { id: 3, prompt: "___ ! (finir, nous)", answer: "Finissons", hint: "Impératif nous" },
        { id: 4, prompt: "Ne ___ pas ! (parler, tu)", answer: "parle", hint: "Impératif négatif" },
        { id: 5, prompt: "___ sages ! (être, vous)", answer: "Soyez", hint: "Impératif de être" },
    ] },

    { id: 31, section: "Les pronoms et modes", title: "Le conditionnel (1)",
      notes: "**Le conditionnel de politesse** :\n- Je **voudrais** (vouloir) : *Je voudrais un café.*\n- Je **pourrais** (pouvoir) : *Je pourrais avoir l'addition ?*\n- Il **faudrait** (falloir) : *Il faudrait partir.*\n- Ce **serait** (être) : *Ce serait bien.*\n\nFormation : radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).",
      exercises: [
        { id: 1, prompt: "Je ___ un café, s'il vous plaît. (vouloir, conditionnel)", answer: "voudrais", hint: "Politesse avec vouloir" },
        { id: 2, prompt: "Est-ce que je ___ avoir l'addition ? (pouvoir, conditionnel)", answer: "pourrais", hint: "Politesse avec pouvoir" },
        { id: 3, prompt: "Il ___ réserver. (falloir, conditionnel)", answer: "faudrait", hint: "Politesse avec falloir" },
        { id: 4, prompt: "Ce ___ bien de partir tôt. (être, conditionnel)", answer: "serait", hint: "Conditionnel de être" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 32–37: LE DISCOURS ET LES RELATIONS
    // ═══════════════════════════════════════════════════

    { id: 32, section: "Le discours et les relations", title: "Les relatifs",
      notes: "**Pronoms relatifs** :\n- **qui** = sujet : *L'homme qui parle est mon père.*\n- **que** = COD : *Le livre que je lis est intéressant.*\n- **où** = lieu ou temps : *La ville où j'habite. Le jour où je suis arrivé.*\n- **dont** = de + nom : *Le film dont je parle.*",
      exercises: [
        { id: 1, prompt: "C'est un homme ___ parle bien français.", answer: "qui", hint: "Sujet du verbe parle" },
        { id: 2, prompt: "C'est un livre ___ j'aime beaucoup.", answer: "que", hint: "COD" },
        { id: 3, prompt: "C'est la ville ___ je suis né.", answer: "où", hint: "Lieu" },
        { id: 4, prompt: "C'est le film ___ je t'ai parlé.", answer: "dont", hint: "Parler de → dont" },
        { id: 5, prompt: "La femme ___ habite ici est ma voisine.", answer: "qui", hint: "Sujet" },
        { id: 6, prompt: "Le jour ___ il est arrivé, il pleuvait.", answer: "où", hint: "Temps" },
    ] },

    { id: 33, section: "Le discours et les relations", title: "L'interrogation (2)",
      notes: "**Mots interrogatifs** :\n- **Qui** : personne. *Qui est-ce ?*\n- **Que/Qu'est-ce que** : chose. *Qu'est-ce que tu fais ?*\n- **Où** : lieu. **Quand** : temps. **Comment** : manière.\n- **Pourquoi** : cause. **Combien** : quantité.\n- **Quel/quelle/quels/quelles** + nom : *Quelle heure est-il ?*\n- **Lequel/laquelle** : choix. *Lequel préférez-vous ?*",
      exercises: [
        { id: 1, prompt: "___ Comment ___ vous appelez-vous ?", answer: "Comment", hint: "Manière" },
        { id: 2, prompt: "___ habitez-vous ?", answer: "Où", hint: "Lieu" },
        { id: 3, prompt: "___ est-ce que vous faites ? (chose)", answer: "Qu'", hint: "Qu'est-ce que" },
        { id: 4, prompt: "___ heure est-il ? (quel/quelle)", answer: "Quelle", hint: "Heure est féminin" },
        { id: 5, prompt: "___ est-ce qui a téléphoné ? (personne)", answer: "Qui", hint: "Personne" },
    ] },

    { id: 34, section: "Le discours et les relations", title: "La négation (2)",
      notes: "Autres formes négatives :\n- **ne ... plus** (fin) : *Je ne fume plus.*\n- **ne ... jamais** (fréquence zéro) : *Je ne fume jamais.*\n- **ne ... rien** (chose zéro) : *Je ne vois rien.*\n- **ne ... personne** (personne zéro) : *Je ne vois personne.*\n- **ne ... ni ... ni** : *Je n'aime ni le café ni le thé.*\n- **ne ... que** (restriction) : *Je ne bois que de l'eau.*",
      exercises: [
        { id: 1, prompt: "Je ne travaille ___ le samedi ___ le dimanche.", answer: "ni/ni", hint: "Double négation" },
        { id: 2, prompt: "Je ne connais ___ Simon ___ Gérald.", answer: "ni/ni", hint: "Double négation" },
        { id: 3, prompt: "Je ne fume ___ . (= j'ai arrêté)", answer: "plus", hint: "Fin d'une action" },
        { id: 4, prompt: "Je ne bois ___ de café le matin.", answer: "jamais", hint: "Fréquence zéro" },
        { id: 5, prompt: "Il n'y a ___ dans le tiroir.", answer: "rien", hint: "Chose zéro" },
    ] },

    { id: 35, section: "Le discours et les relations", title: "Le discours indirect au présent",
      notes: "**Discours indirect** (verbe introducteur au présent) :\n- Il dit que + phrase : *Il dit qu'il est fatigué.*\n- Il demande si + oui/non : *Il demande si elle est libre.*\n- Il demande ce que + chose : *Il demande ce qu'elle fait.*\n- Il demande où/quand/comment/pourquoi...",
      exercises: [
        { id: 1, prompt: "« Je suis fatigué. » → Il dit ___ il est fatigué.", answer: "qu'", hint: "que + voyelle = qu'" },
        { id: 2, prompt: "« Est-ce qu'elle est libre ? » → Il demande ___ elle est libre.", answer: "si", hint: "Question oui/non → si" },
        { id: 3, prompt: "« Où habites-tu ? » → Il demande ___ j'habite.", answer: "où", hint: "Mot interrogatif conservé" },
        { id: 4, prompt: "« Qu'est-ce que tu fais ? » → Il demande ___ je fais.", answer: "ce que", hint: "Qu'est-ce que → ce que" },
    ] },

    { id: 36, section: "Le discours et les relations", title: "Le gérondif",
      notes: "**Le gérondif** : **en** + participe présent.\nFormation : radical de nous au présent + **-ant**.\n*Nous parlons → parlant → en parlant.*\n\nUtilisation :\n- Simultanéité : *Il parle en mangeant.*\n- Manière/moyen : *J'apprends en écoutant.*\n- Condition : *En travaillant plus, tu réussiras.*",
      exercises: [
        { id: 1, prompt: "Il parle ___ mangeant. (en + gérondif)", answer: "en", hint: "Gérondif = en + -ant" },
        { id: 2, prompt: "Il étudie en ___ du rock. (écouter)", answer: "écoutant", hint: "Écouter → écoutant" },
        { id: 3, prompt: "Il téléphone en ___. (conduire)", answer: "conduisant", hint: "Conduire → conduisant" },
        { id: 4, prompt: "Elle dit au revoir en ___. (sourire)", answer: "souriant", hint: "Sourire → souriant" },
    ] },

    { id: 37, section: "Le discours et les relations", title: "Les prépositions et les verbes",
      notes: "Verbes suivis de **à** : commencer à, apprendre à, réussir à, hésiter à, chercher à...\nVerbes suivis de **de** : décider de, essayer de, oublier de, refuser de, rêver de, arrêter de...\nVerbes sans préposition : vouloir, pouvoir, devoir, savoir, aimer, préférer, détester...",
      exercises: [
        { id: 1, prompt: "Je suis désolé(e) ___ être en retard.", answer: "d'", hint: "Être désolé de" },
        { id: 2, prompt: "Je suis surpris(e) ___ avoir une contravention.", answer: "d'", hint: "Être surpris de" },
        { id: 3, prompt: "Je suis heureux/heureuse ___ partir en voyage.", answer: "de", hint: "Être heureux de" },
        { id: 4, prompt: "J'espère ___ trouver du travail.", answer: "—", hint: "Espérer + infinitif directement (pas de préposition)" },
        { id: 5, prompt: "Il a décidé ___ faire des économies.", answer: "de", hint: "Décider de" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 38–39: LE DÉPLACEMENT ET LE FUTUR PROCHE
    // ═══════════════════════════════════════════════════

    { id: 38, section: "Le déplacement et le futur proche", title: "Les verbes de déplacement",
      notes: "**Aller** : d'un lieu vers un autre. *Je vais en Italie.*\n**Venir** : d'un lieu vers ici. *Venez me voir à Paris !*\n**Revenir** : venir une nouvelle fois.\n**Retourner** : aller de nouveau (= revenir dans un lieu connu).\n**Rentrer** : revenir chez soi.\n\n**Aller voir** (personne), **Visiter** (lieu touristique).",
      exercises: [
        { id: 1, prompt: "Les touristes ___ dans leur pays à la fin des vacances.", answer: "retournent", hint: "Retourner = aller de nouveau dans un lieu" },
        { id: 2, prompt: "Je ___ chez moi à 8 heures du soir.", answer: "rentre", hint: "Rentrer = revenir chez soi" },
        { id: 3, prompt: "Nous ___ venir. (aller → verbe de déplacement)", answer: "allons", hint: "Aller avec nous" },
        { id: 4, prompt: "___ me voir quand tu veux !", answer: "Viens", hint: "Venir, impératif tu" },
    ] },

    { id: 39, section: "Le déplacement et le futur proche", title: "Le futur proche",
      notes: "**Futur proche** : **aller** au présent + infinitif.\n*Je vais manger. Tu vas partir. Il va pleuvoir.*\n\nUtilisation : événement imminent ou prévu.\n*Ce soir, je vais dîner au restaurant.*\n*Attention, tu vas tomber !*\n\nNégatif : *Je ne vais pas sortir.*\nPronom : *Je vais le faire. Je vais y aller.*",
      exercises: [
        { id: 1, prompt: "D'habitude, je pars du bureau à 19 heures. Ce soir, je ___ ___ rentrer plus tôt.", answer: "vais", hint: "Futur proche = aller + infinitif" },
        { id: 2, prompt: "D'habitude, je dîne chez moi. Ce soir, je vais ___ au restaurant.", answer: "dîner", hint: "Aller + infinitif" },
        { id: 3, prompt: "D'habitude, je mange des légumes. Ce soir, je vais ___ une pizza.", answer: "manger", hint: "Aller + infinitif" },
        { id: 4, prompt: "L'année prochaine, nous allons ___ nos vacances en Corse.", answer: "passer", hint: "Aller + infinitif" },
        { id: 5, prompt: "Il ___ pleuvoir.", answer: "va", hint: "Futur proche avec il" },
        { id: 6, prompt: "Attention ! Tu ___ tomber !", answer: "vas", hint: "Futur proche avec tu" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 40–45: LE PASSÉ
    // ═══════════════════════════════════════════════════

    { id: 40, section: "Le passé", title: "Le passé composé",
      notes: "**Formation** : auxiliaire (avoir ou être) au présent + participe passé.\n\n**Avec avoir** (majorité des verbes) : *J'ai mangé, tu as fini, il a pris.*\n**Avec être** (verbes de déplacement + pronominaux) : *Je suis allé(e), elle est partie, ils se sont levés.*\n\nParticipes en -é (mangé), -i (fini), -u (vu, bu, lu), -is (mis, pris), -it (dit, écrit), -ert (ouvert).\n\nAvec être : le participe s'accorde avec le sujet. *Elle est allée. Ils sont partis.*",
      exercises: [
        { id: 1, prompt: "D'habitude, je mange de la viande, mais hier, j'ai ___ du poisson.", answer: "mangé", hint: "Participe passé de manger" },
        { id: 2, prompt: "En général, je dîne au restaurant, mais hier, j'ai ___ chez moi.", answer: "dîné", hint: "Participe passé de dîner" },
        { id: 3, prompt: "D'habitude, je travaille sept heures, mais hier, j'ai ___ huit heures.", answer: "travaillé", hint: "Participe passé de travailler" },
        { id: 4, prompt: "Hier soir, j'___ écouté la radio.", answer: "ai", hint: "Auxiliaire avoir avec je" },
        { id: 5, prompt: "La semaine dernière, nous ___ visité le musée.", answer: "avons", hint: "Auxiliaire avoir avec nous" },
        { id: 6, prompt: "George a ___ le journal et il a pris l'autobus.", answer: "acheté", hint: "Participe passé de acheter" },
        { id: 7, prompt: "Maria a ___ un imperméable et elle a pris un parapluie.", answer: "mis", hint: "Participe passé de mettre" },
        { id: 8, prompt: "Elle est ___ à 15 heures. (arriver, fém.)", answer: "arrivée", hint: "Avec être, accord féminin" },
        { id: 9, prompt: "Ils sont ___ en vacances. (partir, masc. pl.)", answer: "partis", hint: "Avec être, accord masculin pluriel" },
        { id: 10, prompt: "Je me suis ___ tôt ce matin. (lever)", answer: "levé", hint: "Pronominal : auxiliaire être" },
    ] },

    { id: 41, section: "Le passé", title: "Le temps (3)",
      notes: "**Il y a** + durée = moment passé : *Il est parti il y a deux ans.*\n**Depuis** + durée/date = action qui continue : *J'habite ici depuis 2010. / depuis 5 ans.*\n**Pendant** + durée = durée définie : *J'ai voyagé pendant deux mois.*\n**Dans** + durée = moment futur : *Je pars dans trois jours.*\n**En** + durée = temps nécessaire : *Je fais ce trajet en une heure.*\n**Pour** + durée prévue : *Je suis ici pour deux ans.*",
      exercises: [
        { id: 1, prompt: "Les semaines ont commencé ___ deux semaines.", answer: "il y a", hint: "Moment passé" },
        { id: 2, prompt: "J'ai passé mon permis ___ longtemps.", answer: "il y a", hint: "Moment passé" },
        { id: 3, prompt: "J'ai arrêté ma voiture ___ 15 minutes.", answer: "il y a", hint: "Moment passé" },
        { id: 4, prompt: "Je suis en France ___ deux ans.", answer: "depuis", hint: "Action qui continue" },
        { id: 5, prompt: "J'ai travaillé ___ six mois.", answer: "pendant", hint: "Durée définie" },
        { id: 6, prompt: "Il a étudié le latin ___ quatre ans.", answer: "pendant", hint: "Durée définie" },
        { id: 7, prompt: "Max a dit : « Attendez-moi ici, ___ dix minutes. »", answer: "dans", hint: "Moment futur (je reviens dans...)" },
    ] },

    { id: 42, section: "Le passé", title: "Le passif",
      notes: "**Formation** : être + participe passé (+ par + agent).\n*Le directeur convoque les employés → Les employés sont convoqués par le directeur.*\n\nLe passif peut s'utiliser à tous les temps :\n- Présent : *Il est invité.*\n- Passé composé : *Il a été invité.*\n- Futur : *Il sera invité.*",
      exercises: [
        { id: 1, prompt: "Le téléphone a ___ inventé par Graham Bell.", answer: "été", hint: "Passif au passé composé" },
        { id: 2, prompt: "Le film Titanic a été ___ par James Cameron.", answer: "réalisé", hint: "Participe passé de réaliser" },
        { id: 3, prompt: "Le Petit Prince a été ___ par Saint-Exupéry.", answer: "écrit", hint: "Participe passé de écrire" },
        { id: 4, prompt: "La pénicilline a été ___ par Fleming.", answer: "découverte", hint: "Participe passé de découvrir (fém.)" },
        { id: 5, prompt: "L'imprimerie a été ___ par Gutenberg.", answer: "inventée", hint: "Participe passé de inventer (fém.)" },
    ] },

    { id: 43, section: "Le passé", title: "L'imparfait",
      notes: "**Formation** : radical de nous au présent + -ais, -ais, -ait, -ions, -iez, -aient.\n*Nous parlons → je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient.*\n\nException : être → j'étais.\n\n**Utilisation** : habitudes passées, descriptions, situations.\n*Avant, j'habitais à Paris. Il faisait beau. J'avais quinze ans.*",
      exercises: [
        { id: 1, prompt: "Maintenant, je parle beaucoup. Avant, je ___ très peu.", answer: "parlais", hint: "Imparfait de parler" },
        { id: 2, prompt: "Maintenant, je marche très peu. Avant, je ___ beaucoup.", answer: "marchais", hint: "Imparfait de marcher" },
        { id: 3, prompt: "Maintenant, je conduis lentement. Avant, je ___ vite.", answer: "conduisais", hint: "Imparfait de conduire" },
        { id: 4, prompt: "Maintenant, je dors bien. Avant, je ___ mal.", answer: "dormais", hint: "Imparfait de dormir" },
        { id: 5, prompt: "Maintenant, je ne fais plus de sport. Avant, je ___ beaucoup de sport.", answer: "faisais", hint: "Imparfait de faire" },
        { id: 6, prompt: "Quand j'___ petit, j'adorais le chocolat. (être)", answer: "étais", hint: "Imparfait de être" },
        { id: 7, prompt: "Il ___ beau et tout le monde ___ content. (faire, être)", answer: "faisait/était", hint: "Imparfait : description" },
    ] },

    { id: 44, section: "Le passé", title: "Le plus-que-parfait",
      notes: "**Formation** : auxiliaire (avoir/être) à l'imparfait + participe passé.\n*J'avais mangé. J'étais parti(e). Il s'était couché.*\n\n**Utilisation** : action antérieure à une autre action passée.\n*Quand je suis arrivé, le train était déjà parti.*\n*J'ai vendu l'appartement que j'avais acheté en 1992.*",
      exercises: [
        { id: 1, prompt: "Quand vous avez trouvé du travail, vous ___ déjà diné. (avoir)", answer: "aviez", hint: "Avoir à l'imparfait avec vous" },
        { id: 2, prompt: "Quand le cours a commencé, vous aviez déjà ___ le français. (étudier)", answer: "étudié", hint: "Participe passé de étudier" },
        { id: 3, prompt: "Quand vous avez passé le test, vous aviez déjà ___ vos livres. (acheter)", answer: "acheté", hint: "Participe passé de acheter" },
        { id: 4, prompt: "Quand je suis arrivé, mon fils ___ déjà fini ses devoirs. (avoir)", answer: "avait", hint: "Avoir à l'imparfait avec il" },
    ] },

    { id: 45, section: "Le passé", title: "Le discours indirect au passé",
      notes: "Quand le verbe introducteur est au passé, les temps changent :\n- Présent → **imparfait** : *Il dit qu'il est fatigué → Il a dit qu'il était fatigué.*\n- Futur → **conditionnel** : *Il dit qu'il viendra → Il a dit qu'il viendrait.*\n- Passé composé → **plus-que-parfait** : *Il dit qu'il a fini → Il a dit qu'il avait fini.*",
      exercises: [
        { id: 1, prompt: "« Je suis malade. » → Il a dit qu'il ___ malade.", answer: "était", hint: "Présent → imparfait" },
        { id: 2, prompt: "« Je viendrai demain. » → Il a dit qu'il ___ le lendemain.", answer: "viendrait", hint: "Futur → conditionnel" },
        { id: 3, prompt: "« J'ai fini. » → Il a dit qu'il ___ fini.", answer: "avait", hint: "Passé composé → plus-que-parfait" },
        { id: 4, prompt: "« Il pleut. » → Il a dit qu'il ___.", answer: "pleuvait", hint: "Présent → imparfait" },
        { id: 5, prompt: "« Je ne sais pas. » → Il a dit qu'il ne ___ pas.", answer: "savait", hint: "Présent → imparfait" },
    ] },

    // ═══════════════════════════════════════════════════
    // CHAPTERS 46–52: LES TEMPS AVANCÉS
    // ═══════════════════════════════════════════════════

    { id: 46, section: "Les temps avancés", title: "« Venir de », « être en train de », « être sur le point de »",
      notes: "**Venir de** + infinitif = passé récent.\n*Je viens de manger.* (= il y a très peu de temps)\n\n**Être en train de** + infinitif = action en cours.\n*Je suis en train de dîner.* (= maintenant, en ce moment)\n\n**Être sur le point de** + infinitif = futur imminent.\n*Je suis sur le point de partir.* (= dans quelques instants)",
      exercises: [
        { id: 1, prompt: "N'entrez pas, Paul ___ la sieste. (être en train de + faire)", answer: "est en train de faire", hint: "Action en cours" },
        { id: 2, prompt: "Le bus est passé il y a longtemps ? - Non, il ___ de passer. (venir)", answer: "vient", hint: "Passé récent" },
        { id: 3, prompt: "L'oiseau va s'envoler. L'oiseau ___ sur le point de s'envoler.", answer: "est", hint: "Futur imminent" },
        { id: 4, prompt: "La nuit va tomber. La nuit est ___ le ___ de tomber.", answer: "sur/point", hint: "Être sur le point de" },
        { id: 5, prompt: "Je ___ d'acheter ce livre. (venir)", answer: "viens", hint: "Passé récent avec venir de" },
    ] },

    { id: 47, section: "Les temps avancés", title: "Le futur simple",
      notes: "**Formation** : infinitif + -ai, -as, -a, -ons, -ez, -ont.\n*Je parlerai, tu finiras, il mangera.*\n\nVerbes irréguliers : être → **ser**-ai, avoir → **aur**-ai, aller → **ir**-ai, faire → **fer**-ai, pouvoir → **pourr**-ai, vouloir → **voudr**-ai, venir → **viendr**-ai, voir → **verr**-ai, savoir → **saur**-ai, devoir → **devr**-ai, il faut → il **faudr**-a, il pleut → il **pleuvr**-a.\n\nUtilisation : projets, prévisions.",
      exercises: [
        { id: 1, prompt: "Les villes ___ presque vides. (être, futur)", answer: "seront", hint: "Être au futur : ser-" },
        { id: 2, prompt: "Il y ___ une maison individuelle. (avoir, futur)", answer: "aura", hint: "Avoir au futur : aur-" },
        { id: 3, prompt: "Il ___ froid et il ___ du brouillard. (faire, y avoir)", answer: "fera/y aura", hint: "Faire au futur : fer-" },
        { id: 4, prompt: "Je ___ la terrasse. (aménager, futur)", answer: "aménagerai", hint: "Infinitif + -ai" },
        { id: 5, prompt: "Nous ___ de la dinde. (manger, futur)", answer: "mangerons", hint: "Infinitif + -ons" },
    ] },

    { id: 48, section: "Les temps avancés", title: "Le futur antérieur",
      notes: "**Formation** : auxiliaire (avoir/être) au futur simple + participe passé.\n*J'aurai mangé. Je serai parti(e).*\n\n**Utilisation** : action future achevée avant une autre action future.\n*Je me marierai quand j'aurai terminé mes études.*\n*Revenez me voir quand vous aurez terminé votre traitement.*",
      exercises: [
        { id: 1, prompt: "Je ferai des crêpes quand j'___ terminé le pot-au-feu.", answer: "aurai", hint: "Avoir au futur + participe passé" },
        { id: 2, prompt: "Revenez me voir quand vous ___ terminé votre traitement.", answer: "aurez", hint: "Avoir au futur avec vous" },
        { id: 3, prompt: "Nous ___ la télé. (regarder, futur antérieur avec nous)", answer: "aurons regardé", hint: "Avoir futur + participe passé" },
    ] },

    { id: 49, section: "Les temps avancés", title: "Le conditionnel (2)",
      notes: "**Conditionnel présent** : radical du futur + terminaisons de l'imparfait.\n*Je parlerais, tu finirais, il serait...*\n\nUtilisation :\n- Imaginaire : *Si j'étais riche, je voyagerais.*\n- Supposition (au cas où) : *Au cas où vous auriez des problèmes, téléphonez-moi.*\n- Information non confirmée : *L'accident aurait fait 200 victimes.*\n- Regret : *J'aurais aimé être un artiste.*\n\n**Conditionnel passé** : conditionnel de être/avoir + participe passé.\n*J'aurais voulu / Je serais allé(e).*",
      exercises: [
        { id: 1, prompt: "Si je perdais votre numéro, je vous ___ appelé. (avoir, cond. passé)", answer: "aurais", hint: "Conditionnel passé avec avoir" },
        { id: 2, prompt: "Je ne savais pas qu'il y avait une fête, sinon je ___ venu.", answer: "serais", hint: "Conditionnel passé avec être" },
        { id: 3, prompt: "J'ai oublié que c'était l'anniversaire de Marie, sinon je lui ___ offert un cadeau.", answer: "aurais", hint: "Conditionnel passé avec avoir" },
    ] },

    { id: 50, section: "Les temps avancés", title: "Les hypothèses",
      notes: "**Hypothèse sur le futur** (probable) :\nSi + présent, futur simple. *S'il fait beau, nous irons à la plage.*\n\n**Hypothèse sur le présent** (imaginaire) :\nSi + imparfait, conditionnel présent. *Si j'avais mal aux dents, j'irais chez le dentiste.*\n\n**Hypothèse sur le passé** (irréel) :\nSi + plus-que-parfait, conditionnel passé. *Si j'avais su, je serais venu.*\n\nAttention : jamais de futur après **si** !",
      exercises: [
        { id: 1, prompt: "Si vous aviez mal aux dents, que feriez-vous ? - Si j'avais mal aux dents, j'___ chez le dentiste.", answer: "irais", hint: "Si + imparfait → conditionnel présent" },
        { id: 2, prompt: "Si j'___ français, je parlerais bien français. (être, imparfait)", answer: "étais", hint: "Hypothèse sur le présent : si + imparfait" },
        { id: 3, prompt: "Si j'avais gagné 100 000 euros, j'___ acheté une télévision.", answer: "aurais", hint: "Hypothèse sur le passé : conditionnel passé" },
        { id: 4, prompt: "Si elle ___ venue au cocktail, elle aurait rencontré le directeur. (être, PQP)", answer: "était", hint: "Si + plus-que-parfait" },
        { id: 5, prompt: "S'il fait beau, nous ___ à la plage. (aller, futur)", answer: "irons", hint: "Si + présent → futur" },
    ] },

    { id: 51, section: "Les temps avancés", title: "Le subjonctif",
      notes: "**Formation** : radical de ils au présent + -e, -es, -e, -ions, -iez, -ent.\n*Ils parlent → que je parle, que nous parlions.*\n\nIrréguliers : être (que je sois), avoir (que j'aie), aller (que j'aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache).\n\n**Utilisation** : après *il faut que*, verbes de désir/sentiment/doute (vouloir que, souhaiter que, avoir peur que, regretter que, douter que...).\n*Il faut que je parte. Je voudrais qu'il soit là.*",
      exercises: [
        { id: 1, prompt: "Il faut que vous ___ français. (parler)", answer: "parliez", hint: "Subjonctif avec vous" },
        { id: 2, prompt: "Il faut que je ___ souvent les mêmes structures. (répéter)", answer: "répète", hint: "Subjonctif avec je" },
        { id: 3, prompt: "Il faut que nous ___ le matériel. (contrôler)", answer: "contrôlions", hint: "Subjonctif avec nous" },
        { id: 4, prompt: "Il faut vraiment que je le ___ ? (prendre)", answer: "prenne", hint: "Subjonctif irrégulier de prendre" },
        { id: 5, prompt: "Il faut que vous ___ ces antibiotiques. (prendre)", answer: "preniez", hint: "Subjonctif avec vous" },
        { id: 6, prompt: "Marie a très mal à la tête : il faut qu'elle ___ une aspirine.", answer: "prenne", hint: "Subjonctif de prendre" },
        { id: 7, prompt: "Je ne suis pas sûr qu'il ___ . (venir, subjonctif)", answer: "vienne", hint: "Subjonctif de venir" },
    ] },

    { id: 52, section: "Les temps avancés", title: "Les relations logiques",
      notes: "**La cause** : parce que, comme, puisque, à cause de, grâce à.\n*Je reste parce que je suis malade. Grâce à toi, j'ai réussi.*\n\n**La conséquence** : donc, alors, par conséquent, c'est pour ça que.\n*Il pleut, donc je reste.*\n\n**Le but** : pour (que), afin de/que, pour que + subjonctif.\n*Je travaille pour réussir.*\n\n**L'opposition/concession** : mais, pourtant, cependant, malgré, bien que + subjonctif.\n*Il pleut, mais je sors. Bien qu'il pleuve, je sors.*",
      exercises: [
        { id: 1, prompt: "Jean est absent ___ il est malade.", answer: "parce qu'", hint: "Cause" },
        { id: 2, prompt: "Le bébé pleure. Pourquoi ? - ___ il a faim.", answer: "Parce qu'", hint: "Cause, réponse à pourquoi" },
        { id: 3, prompt: "Marie est triste. Pourquoi ? - ___ elle a perdu son chat.", answer: "Parce qu'", hint: "Cause" },
        { id: 4, prompt: "Tu as dix-huit ans, ___ tu peux voter !", answer: "donc", hint: "Conséquence" },
        { id: 5, prompt: "Il pleut, ___ je prends un taxi.", answer: "alors", hint: "Conséquence" },
        { id: 6, prompt: "Il pleut, ___ nous sortons quand même.", answer: "mais", hint: "Opposition" },
        { id: 7, prompt: "Je suis fatigué, ___ j'ai dormi neuf heures.", answer: "pourtant", hint: "Concession" },
    ] },
];
