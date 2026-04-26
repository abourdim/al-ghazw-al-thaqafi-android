/* الغزو الثقافي يمتد في فراغنا — CULTURAL INVASION — app.js v1.0 */
/* Based on "Al-Ghazw al-Thaqafi Yamtadd fi Faraghina" by Sheikh Mohammed al-Ghazali (1985) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الغزو الثقافي',
    splashSub: 'ابنِ درعك الفكري',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ١٢٠',
    tabHome: 'الرئيسية', tabThreats: 'التهديدات', tabShield: 'الدرع', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    threatsTitle: 'التهديدات الثقافية',
    threatsDesc: '١٠ تهديدات شخّصها الشيخ الغزالي — الأمراض الداخلية قبل العدوان الخارجي',
    shieldTitle: 'بناء الدرع',
    shieldDesc: '١٠ دفاعات لحماية الهوية — من القرآن والعقل والتاريخ',
    quizTitle: 'اكتشف التأثير',
    quizDesc: 'هل تستطيع تمييز الغزو الثقافي من التبادل الطبيعي؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الثبات',
    dailyLabel: '🛡️ درس اليوم',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    threat: '⚠️ التهديد',
    defense: '🛡️ الدفاع',
    verse: 'الآية',
    chapter: 'الفصل',
    internal: 'سبب داخلي',
    external: 'عامل خارجي',
    quizCorrect: 'إجابة صحيحة!',
    quizWrong: 'إجابة خاطئة',
    quizExplain: 'التوضيح:',
    nextQ: 'السؤال التالي',
    startQuiz: 'ابدأ الاختبار',
    restartQuiz: 'أعد الاختبار',
    quizComplete: 'أكملت الاختبار!',
    score: 'النتيجة',
    lifeline5050: '50/50',
    lifelineHint: 'تلميح',
    lifelineVerse: 'آية',
    xpLabel: 'نقاط الخبرة',
    badgesLabel: 'الأوسمة',
    streakMsg: 'يوم متتالي!',
    splashFeatures: [
      '٢٠ بطاقة درع — تهديدات ودفاعات',
      'اختبار "اكتشف التأثير" التفاعلي',
      'نظام نقاط وأوسمة',
      'ثلاث لغات + راوي صوتي'
    ],
  },
  en: {
    appTitle: 'Cultural Invasion',
    splashSub: 'Build your intellectual shield',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:120',
    tabHome: 'Home', tabThreats: 'Threats', tabShield: 'Shield', tabQuiz: 'Quiz', tabAbout: 'Book',
    threatsTitle: 'Cultural Threats',
    threatsDesc: '10 threats diagnosed by Sheikh al-Ghazali — internal diseases before external aggression',
    shieldTitle: 'Build the Shield',
    shieldDesc: '10 defenses to protect identity — from the Quran, reason, and history',
    quizTitle: 'Spot the Influence',
    quizDesc: 'Can you tell cultural invasion from natural exchange?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Steadfastness',
    dailyLabel: '🛡️ Today\'s Lesson',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    threat: '⚠️ Threat',
    defense: '🛡️ Defense',
    verse: 'Verse',
    chapter: 'Chapter',
    internal: 'Internal cause',
    external: 'External factor',
    quizCorrect: 'Correct!',
    quizWrong: 'Wrong answer',
    quizExplain: 'Explanation:',
    nextQ: 'Next Question',
    startQuiz: 'Start Quiz',
    restartQuiz: 'Retake Quiz',
    quizComplete: 'Quiz complete!',
    score: 'Score',
    lifeline5050: '50/50',
    lifelineHint: 'Hint',
    lifelineVerse: 'Verse',
    xpLabel: 'Experience Points',
    badgesLabel: 'Badges',
    streakMsg: 'day streak!',
    splashFeatures: [
      '20 shield cards — threats & defenses',
      'Interactive "Spot the Influence" quiz',
      'XP points & badge system',
      'Three languages + audio narrator'
    ],
  },
  fr: {
    appTitle: 'L\'Invasion Culturelle',
    splashSub: 'Construis ton bouclier intellectuel',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:120',
    tabHome: 'Accueil', tabThreats: 'Menaces', tabShield: 'Bouclier', tabQuiz: 'Quiz', tabAbout: 'Livre',
    threatsTitle: 'Menaces Culturelles',
    threatsDesc: '10 menaces diagnostiquees par le Sheikh al-Ghazali — maladies internes avant agression externe',
    shieldTitle: 'Construire le Bouclier',
    shieldDesc: '10 defenses pour proteger l\'identite — du Coran, de la raison et de l\'histoire',
    quizTitle: 'Reperer l\'Influence',
    quizDesc: 'Pouvez-vous distinguer l\'invasion culturelle de l\'echange naturel ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Fermete',
    dailyLabel: '🛡️ Lecon du Jour',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    threat: '⚠️ Menace',
    defense: '🛡️ Defense',
    verse: 'Verset',
    chapter: 'Chapitre',
    internal: 'Cause interne',
    external: 'Facteur externe',
    quizCorrect: 'Correct !',
    quizWrong: 'Mauvaise reponse',
    quizExplain: 'Explication :',
    nextQ: 'Question Suivante',
    startQuiz: 'Commencer le Quiz',
    restartQuiz: 'Refaire le Quiz',
    quizComplete: 'Quiz termine !',
    score: 'Score',
    lifeline5050: '50/50',
    lifelineHint: 'Indice',
    lifelineVerse: 'Verset',
    xpLabel: 'Points d\'Experience',
    badgesLabel: 'Badges',
    streakMsg: 'jours consecutifs !',
    splashFeatures: [
      '20 cartes bouclier — menaces et defenses',
      'Quiz interactif « Reperer l\'Influence »',
      'Systeme de points XP et badges',
      'Trois langues + narrateur audio'
    ],
  }
};

// ═══════════════ THREATS DATA (10 internal/external threats) ═══════════════
const THREATS = [
  {
    id:1, emoji:'🕳️', type:'internal',
    ar:{title:'تدين يكره الحضارة وتحضّر يكره الدين',desc:'يشخّص الغزالي الانقسام القاتل في العالم الإسلامي: متدينون يرفضون العلم والتقدم كفساد أجنبي، ومحدّثون يرون الدين عقبة أمام التقدم. كلاهما مخطئ. الإسلام الأصيل يتطلب التعبّد والمشاركة الحضارية معاً. هذا الانقسام الداخلي هو الفراغ الذي يملؤه الغزو الثقافي.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'الرعد ١٣: ١١',action:'اقرأ كتاباً واحداً كل شهر عن تاريخك وحضارتك'},
    en:{title:'The Internal Void',desc:'Al-Ghazali warns: A nation that abandoned knowledge and research became intellectually empty — this void is what invaders fill. The problem is not the enemy\'s strength but our weakness.',verse:'Indeed, Allah will not change the condition of a people until they change what is within themselves',verseRef:'Ar-Ra\'d 13:11',action:'Read one book per month about your history and civilization'},
    fr:{title:'Le Vide Interieur',desc:'Al-Ghazali met en garde: Une nation qui a abandonne le savoir est devenue intellectuellement vide — ce vide est ce que les envahisseurs remplissent. Le probleme n\'est pas la force de l\'ennemi mais notre faiblesse.',verse:'Allah ne modifie point l\'etat d\'un peuple, tant que les individus ne modifient pas ce qui est en eux-memes',verseRef:'Ar-Ra\'d 13:11',action:'Lisez un livre par mois sur votre histoire et civilisation'}
  },
  {
    id:2, emoji:'🔗', type:'internal',
    ar:{title:'التقليد الأعمى',desc:'يحذر الغزالي: اتباع التقاليد دون تمييز بين الأصيل والدخيل. تقديم العادات على العقيدة، والموروث على النص الصحيح.',verse:'وَإِذَا قِيلَ لَهُمُ اتَّبِعُوا مَا أَنزَلَ اللَّهُ قَالُوا بَلْ نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا',verseRef:'البقرة ٢: ١٧٠',action:'ميّز بين السنة الصحيحة والعادات المحلية في حياتك'},
    en:{title:'Blind Following',desc:'Al-Ghazali warns: Following traditions without distinguishing the authentic from the foreign. Prioritizing customs over creed, and inherited practices over verified text.',verse:'And when it is said to them: Follow what Allah has sent down, they say: Rather, we follow what we found our fathers doing',verseRef:'Al-Baqarah 2:170',action:'Distinguish between verified Sunnah and local customs in your life'},
    fr:{title:'L\'Imitation Aveugle',desc:'Al-Ghazali met en garde: Suivre les traditions sans distinguer l\'authentique de l\'etranger. Privilegier les coutumes sur la croyance, et l\'heritage sur le texte verifie.',verse:'Et quand on leur dit : Suivez ce qu\'Allah a fait descendre, ils disent : Nous suivons plutot ce sur quoi nous avons trouve nos ancetres',verseRef:'Al-Baqarah 2:170',action:'Distinguez entre la Sunna verifiee et les coutumes locales'}
  },
  {
    id:3, emoji:'📺', type:'external',
    ar:{title:'الإعلام الموجّه',desc:'يحذر الغزالي: وسائل إعلام تصنع صورة مشوهة عن الإسلام والمسلمين. تقدم نموذجاً واحداً للحياة وتسخر من كل بديل.',verse:'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',verseRef:'الصف ٦١: ٨',action:'تعلم التفكير النقدي — لا تصدق كل ما تراه في الإعلام'},
    en:{title:'Directed Media',desc:'Al-Ghazali warns: Media that crafts a distorted image of Islam and Muslims. Presents one model of life and mocks every alternative.',verse:'They want to extinguish the light of Allah with their mouths, but Allah will perfect His light',verseRef:'As-Saff 61:8',action:'Learn critical thinking — don\'t believe everything you see in media'},
    fr:{title:'Les Medias Orientes',desc:'Al-Ghazali met en garde: Des medias qui fabriquent une image deformee de l\'Islam et des musulmans. Presentent un seul modele de vie et se moquent de toute alternative.',verse:'Ils veulent eteindre la lumiere d\'Allah avec leurs bouches, mais Allah completera Sa lumiere',verseRef:'As-Saff 61:8',action:'Apprenez la pensee critique — ne croyez pas tout ce que vous voyez'}
  },
  {
    id:4, emoji:'🎓', type:'external',
    ar:{title:'التبعية الفكرية',desc:'يحذر الغزالي: استيراد المناهج والأفكار دون تمحيص. اعتبار كل ما يأتي من الغرب تقدماً وكل ما هو إسلامي تخلفاً.',verse:'وَلَن تَرْضَىٰ عَنكَ الْيَهُودُ وَلَا النَّصَارَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ٢: ١٢٠',action:'قارن بين المنهج الإسلامي والغربي في أي قضية تهمك'},
    en:{title:'Intellectual Dependency',desc:'Al-Ghazali warns: Importing curricula and ideas without examination. Considering everything Western as progress and everything Islamic as backwardness.',verse:'And never will the Jews or the Christians approve of you until you follow their religion',verseRef:'Al-Baqarah 2:120',action:'Compare Islamic and Western approaches on any issue that matters to you'},
    fr:{title:'La Dependance Intellectuelle',desc:'Al-Ghazali met en garde: Importer des programmes et des idees sans examen. Considerer tout ce qui est occidental comme progres et tout ce qui est islamique comme retard.',verse:'Ni les Juifs ni les Chretiens ne seront satisfaits de toi, jusqu\'a ce que tu suives leur religion',verseRef:'Al-Baqarah 2:120',action:'Comparez les approches islamique et occidentale sur toute question'}
  },
  {
    id:5, emoji:'💔', type:'internal',
    ar:{title:'الفهم السطحي للدين',desc:'يحذر الغزالي: اختزال الإسلام في طقوس شكلية دون فهم المقاصد. دين بلا عقل ولا روح — قشرة بلا لب.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٤٧: ٢٤',action:'عند قراءة آية، ابحث عن المعنى والمقصد وليس فقط الحفظ'},
    en:{title:'Superficial Understanding of Religion',desc:'Al-Ghazali warns: Reducing Islam to ritual formalities without understanding purposes. Religion without mind or spirit — a shell without substance.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 47:24',action:'When reading a verse, search for meaning and purpose, not just memorization'},
    fr:{title:'La Comprehension Superficielle de la Religion',desc:'Al-Ghazali met en garde: Reduire l\'Islam a des formalites rituelles sans comprendre les objectifs. Une religion sans esprit ni raison — une coquille sans substance.',verse:'Ne meditent-ils donc pas sur le Coran ? Ou y a-t-il des verrous sur les coeurs ?',verseRef:'Muhammad 47:24',action:'En lisant un verset, cherchez le sens et l\'objectif, pas seulement la memorisation'}
  },
  {
    id:6, emoji:'⚔️', type:'internal',
    ar:{title:'التطرف والغلو',desc:'يحذر الغزالي: الغلو في الدين يشوه صورته ويخيف الناس منه. التشدد ليس قوة — هو ضعف في الفهم وبُعد عن الوسطية.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ٢: ١٤٣',action:'في كل خلاف ديني، ابحث عن الرأي الوسط الذي يجمع ولا يفرق'},
    en:{title:'Extremism and Excess',desc:'Al-Ghazali warns: Religious excess distorts Islam\'s image and drives people away. Rigidity is not strength — it is weakness in understanding and distance from moderation.',verse:'And thus We have made you a moderate nation',verseRef:'Al-Baqarah 2:143',action:'In every religious disagreement, seek the moderate view that unites rather than divides'},
    fr:{title:'L\'Extremisme et l\'Exces',desc:'Al-Ghazali met en garde: L\'exces religieux deforme l\'image de l\'Islam et repousse les gens. La rigidite n\'est pas la force — c\'est la faiblesse de comprehension et l\'eloignement de la moderation.',verse:'Et c\'est ainsi que Nous avons fait de vous une communaute de juste milieu',verseRef:'Al-Baqarah 2:143',action:'Dans chaque desaccord religieux, cherchez l\'avis modere qui unit'}
  },
  {
    id:7, emoji:'🏳️', type:'external',
    ar:{title:'سقوط الخلافة',desc:'منذ سقوط الخلافة العثمانية فُتحت الأبواب للغزو الثقافي. غياب المرجعية الجامعة ترك المسلمين بلا قيادة فكرية.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ٣: ١٠٣',action:'ادعم المؤسسات الإسلامية التعليمية والثقافية في بلدك'},
    en:{title:'Fall of the Caliphate',desc:'Since the fall of the Ottoman Caliphate, doors opened wide for cultural invasion. The absence of a unifying authority left Muslims without intellectual leadership.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Aal-Imran 3:103',action:'Support Islamic educational and cultural institutions in your country'},
    fr:{title:'La Chute du Califat',desc:'Depuis la chute du califat ottoman, les portes se sont ouvertes a l\'invasion culturelle. L\'absence d\'autorite unificatrice a laisse les musulmans sans leadership intellectuel.',verse:'Et cramponnez-vous tous ensemble au Lien d\'Allah et ne soyez pas divises',verseRef:'Aal-Imran 3:103',action:'Soutenez les institutions islamiques educatives et culturelles de votre pays'}
  },
  {
    id:8, emoji:'🧲', type:'external',
    ar:{title:'الانبهار بالغرب',desc:'الإعجاب بالتقدم المادي للغرب تحول إلى تقليد أعمى لكل شيء — حتى ما يتناقض مع القيم الإسلامية.',verse:'لَتَتَّبِعُنَّ سَنَنَ الَّذِينَ مِن قَبْلِكُمْ شِبْرًا بِشِبْرٍ',verseRef:'حديث — صحيح البخاري',action:'أعجب بالتقنية والعلم لكن لا تستورد القيم دون تمحيص'},
    en:{title:'Dazzled by the West',desc:'Admiration for Western material progress turned into blind imitation of everything — even what contradicts Islamic values.',verse:'You will follow the ways of those who came before you, span by span',verseRef:'Hadith — Sahih al-Bukhari',action:'Admire technology and science but don\'t import values without examination'},
    fr:{title:'L\'Eblouissement par l\'Occident',desc:'L\'admiration pour le progres materiel occidental s\'est transformee en imitation aveugle de tout — meme ce qui contredit les valeurs islamiques.',verse:'Vous suivrez les voies de ceux qui vous ont precedes, empan par empan',verseRef:'Hadith — Sahih al-Bukhari',action:'Admirez la technologie et la science mais n\'importez pas les valeurs sans examen'}
  },
  {
    id:9, emoji:'🤐', type:'internal',
    ar:{title:'تكميم العقل',desc:'قمع التفكير الحر باسم الدين. منع السؤال والنقاش يُنتج جيلاً هشاً ينهار أمام أول شبهة.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٣٩: ٩',action:'شجع الأسئلة في عائلتك — السؤال بوابة العلم لا بوابة الكفر'},
    en:{title:'Silencing the Mind',desc:'Suppressing free thinking in the name of religion. Forbidding questions and discussion produces a fragile generation that collapses at the first doubt.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 39:9',action:'Encourage questions in your family — questioning is the gate of knowledge, not disbelief'},
    fr:{title:'Museler l\'Esprit',desc:'Supprimer la pensee libre au nom de la religion. Interdire les questions produit une generation fragile qui s\'effondre au premier doute.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 39:9',action:'Encouragez les questions dans votre famille — questionner est la porte du savoir'}
  },
  {
    id:10, emoji:'💰', type:'external',
    ar:{title:'الاستعمار الناعم',desc:'بعد فشل الاستعمار العسكري، جاء الغزو الثقافي عبر التعليم والإعلام والاقتصاد — أخطر وأعمق تأثيراً.',verse:'وَلَا يَزَالُونَ يُقَاتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ إِنِ اسْتَطَاعُوا',verseRef:'البقرة ٢: ٢١٧',action:'اعرف تاريخ بلدك الاستعماري وتأثيره على ثقافتك الحالية'},
    en:{title:'Soft Colonialism',desc:'After military colonialism failed, cultural invasion came through education, media, and economics — more dangerous and deeper in impact.',verse:'And they will continue to fight you until they turn you back from your religion, if they are able',verseRef:'Al-Baqarah 2:217',action:'Learn your country\'s colonial history and its impact on your current culture'},
    fr:{title:'Le Colonialisme Doux',desc:'Apres l\'echec du colonialisme militaire, l\'invasion culturelle est venue par l\'education, les medias et l\'economie — plus dangereuse et plus profonde.',verse:'Et ils ne cessent de vous combattre jusqu\'a ce qu\'ils vous detournent de votre religion, s\'ils peuvent',verseRef:'Al-Baqarah 2:217',action:'Apprenez l\'histoire coloniale de votre pays et son impact sur votre culture actuelle'}
  }
];

// ═══════════════ SHIELDS DATA (10 defenses) ═══════════════
const SHIELDS = [
  {
    id:1, emoji:'📖', type:'defense',
    ar:{title:'العودة إلى القرآن بفهم',desc:'ليس مجرد ترتيل بل تدبر وفهم وتطبيق. القرآن يبني العقل الناقد والروح المطمئنة معاً.',verse:'كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ',verseRef:'ص ٣٨: ٢٩',action:'خصص ١٥ دقيقة يومياً لتدبر آية واحدة بالتفسير'},
    en:{title:'Return to the Quran with Understanding',desc:'Not just recitation but reflection, understanding, and application. The Quran builds both the critical mind and the serene soul.',verse:'A blessed Book which We have revealed to you that they might reflect upon its verses',verseRef:'Sad 38:29',action:'Dedicate 15 minutes daily to reflect on one verse with its commentary'},
    fr:{title:'Retour au Coran avec Comprehension',desc:'Pas seulement la recitation mais la reflexion, la comprehension et l\'application. Le Coran construit a la fois l\'esprit critique et l\'ame sereine.',verse:'Un Livre beni que Nous avons fait descendre vers toi, afin qu\'ils meditent sur ses versets',verseRef:'Sad 38:29',action:'Consacrez 15 minutes par jour a mediter un verset avec son commentaire'}
  },
  {
    id:2, emoji:'🧠', type:'defense',
    ar:{title:'التفكير النقدي',desc:'الإسلام دين العقل. لا تقبل فكرة لمجرد أنها جاءت من الغرب أو الشرق — اعرضها على ميزان العقل والشرع.',verse:'وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ',verseRef:'الإسراء ١٧: ٣٦',action:'قبل مشاركة أي خبر أو فكرة، تحقق من مصدرها وصحتها'},
    en:{title:'Critical Thinking',desc:'Islam is the religion of reason. Don\'t accept an idea just because it came from the West or the East — weigh it on the scale of reason and scripture.',verse:'And do not pursue that of which you have no knowledge',verseRef:'Al-Isra 17:36',action:'Before sharing any news or idea, verify its source and accuracy'},
    fr:{title:'La Pensee Critique',desc:'L\'Islam est la religion de la raison. N\'acceptez pas une idee simplement parce qu\'elle vient de l\'Occident — pesez-la sur la balance de la raison et de l\'Ecriture.',verse:'Et ne poursuis pas ce dont tu n\'as aucune connaissance',verseRef:'Al-Isra 17:36',action:'Avant de partager toute nouvelle ou idee, verifiez sa source et sa veracite'}
  },
  {
    id:3, emoji:'📚', type:'defense',
    ar:{title:'معرفة التاريخ',desc:'من لا يعرف تاريخه يسهل خداعه. تاريخ الحضارة الإسلامية مليء بالعلم والإبداع والتسامح.',verse:'قَدْ خَلَتْ مِن قَبْلِكُمْ سُنَنٌ فَسِيرُوا فِي الْأَرْضِ',verseRef:'آل عمران ٣: ١٣٧',action:'تعلم عن عالم إسلامي واحد كل أسبوع — ابن سينا، الخوارزمي، ابن رشد...'},
    en:{title:'Knowing History',desc:'Those who don\'t know their history are easily deceived. Islamic civilization\'s history is full of knowledge, creativity, and tolerance.',verse:'There have been examples before you; so travel through the land',verseRef:'Aal-Imran 3:137',action:'Learn about one Islamic scholar per week — Ibn Sina, Al-Khwarizmi, Ibn Rushd...'},
    fr:{title:'Connaitre l\'Histoire',desc:'Ceux qui ne connaissent pas leur histoire sont facilement trompes. L\'histoire de la civilisation islamique est pleine de savoir, de creativite et de tolerance.',verse:'Des exemples vous ont precedes; parcourez donc la terre',verseRef:'Aal-Imran 3:137',action:'Apprenez un savant islamique par semaine — Ibn Sina, Al-Khwarizmi, Ibn Rushd...'}
  },
  {
    id:4, emoji:'🤝', type:'defense',
    ar:{title:'التبادل لا التبعية',desc:'لا بأس بالاستفادة من حكمة الآخرين — لكن كمتعلم ناقد لا كتابع أعمى. الحكمة ضالة المؤمن.',verse:'خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ',verseRef:'الأعراف ٧: ١٩٩',action:'عند قراءة كتاب أجنبي، دوّن ما يتوافق وما يتعارض مع قيمك'},
    en:{title:'Exchange Not Dependency',desc:'There is nothing wrong with benefiting from others\' wisdom — but as a critical learner, not a blind follower. Wisdom is the believer\'s lost property.',verse:'Show forgiveness, enjoin what is good',verseRef:'Al-A\'raf 7:199',action:'When reading a foreign book, note what aligns and what contradicts your values'},
    fr:{title:'L\'Echange pas la Dependance',desc:'Il n\'y a rien de mal a beneficier de la sagesse des autres — mais en tant qu\'apprenant critique, pas suiveur aveugle. La sagesse est le bien perdu du croyant.',verse:'Pratique le pardon, ordonne le bien',verseRef:'Al-A\'raf 7:199',action:'En lisant un livre etranger, notez ce qui s\'aligne et ce qui contredit vos valeurs'}
  },
  {
    id:5, emoji:'🏗️', type:'defense',
    ar:{title:'بناء المؤسسات',desc:'لا يكفي الشكوى — يجب بناء مدارس وجامعات ومراكز أبحاث تنتج المعرفة بدل استيرادها.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ',verseRef:'التوبة ٩: ١٠٥',action:'ساهم في مبادرة تعليمية محلية — ولو بتعليم مهارة واحدة'},
    en:{title:'Building Institutions',desc:'Complaining is not enough — we must build schools, universities, and research centers that produce knowledge instead of importing it.',verse:'And say: Work, for Allah will see your work',verseRef:'At-Tawbah 9:105',action:'Contribute to a local educational initiative — even by teaching one skill'},
    fr:{title:'Construire des Institutions',desc:'Se plaindre ne suffit pas — il faut construire des ecoles, des universites et des centres de recherche qui produisent le savoir au lieu de l\'importer.',verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre',verseRef:'At-Tawbah 9:105',action:'Contribuez a une initiative educative locale — meme en enseignant une competence'}
  },
  {
    id:6, emoji:'👨‍👩‍👧‍👦', type:'defense',
    ar:{title:'تربية الأبناء',desc:'الأسرة هي خط الدفاع الأول. تربية واعية تبني أطفالاً يفكرون ويسألون ويقارنون بدل أن يقلدوا.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',verseRef:'التحريم ٦٦: ٦',action:'خصص وقتاً أسبوعياً لمناقشة ما يشاهده أطفالك على الإنترنت'},
    en:{title:'Raising Children',desc:'The family is the first line of defense. Conscious upbringing builds children who think, question, and compare instead of just imitating.',verse:'O you who believe, protect yourselves and your families from a Fire',verseRef:'At-Tahrim 66:6',action:'Set aside weekly time to discuss what your children watch online'},
    fr:{title:'Eduquer les Enfants',desc:'La famille est la premiere ligne de defense. Une education consciente construit des enfants qui pensent, questionnent et comparent au lieu d\'imiter.',verse:'O vous qui croyez ! Preservez vos personnes et vos familles d\'un Feu',verseRef:'At-Tahrim 66:6',action:'Consacrez du temps hebdomadaire pour discuter de ce que vos enfants regardent en ligne'}
  },
  {
    id:7, emoji:'🌍', type:'defense',
    ar:{title:'الانفتاح الواعي',desc:'لا انغلاق ولا ذوبان. نأخذ ما ينفعنا ونترك ما يضرنا — بثقة وعلم لا بخوف وجهل.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ٤٩: ١٣',action:'تعلم لغة أجنبية لتفهم الآخرين — لا لتقلدهم'},
    en:{title:'Conscious Openness',desc:'Neither isolation nor dissolution. We take what benefits and leave what harms — with confidence and knowledge, not fear and ignorance.',verse:'O mankind, We created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 49:13',action:'Learn a foreign language to understand others — not to imitate them'},
    fr:{title:'L\'Ouverture Consciente',desc:'Ni isolement ni dissolution. Nous prenons ce qui profite et laissons ce qui nuit — avec confiance et savoir, pas peur et ignorance.',verse:'O hommes ! Nous vous avons crees d\'un male et d\'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez',verseRef:'Al-Hujurat 49:13',action:'Apprenez une langue etrangere pour comprendre les autres — pas pour les imiter'}
  },
  {
    id:8, emoji:'💪', type:'defense',
    ar:{title:'الاعتزاز بالهوية',desc:'لا نستحي من ديننا ولغتنا وحضارتنا. العزة الحقيقية لا تأتي من تقليد الآخرين بل من معرفة قيمة ما عندنا.',verse:'وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ',verseRef:'المنافقون ٦٣: ٨',action:'تحدث بلغتك الأم بفخر واستخدمها في حياتك اليومية'},
    en:{title:'Pride in Identity',desc:'We are not ashamed of our religion, language, and civilization. True dignity comes not from imitating others but from knowing the value of what we have.',verse:'And to Allah belongs honor, and to His Messenger, and to the believers',verseRef:'Al-Munafiqun 63:8',action:'Speak your mother tongue proudly and use it in your daily life'},
    fr:{title:'La Fierte de l\'Identite',desc:'Nous n\'avons pas honte de notre religion, langue et civilisation. La vraie dignite ne vient pas de l\'imitation mais de la connaissance de notre propre valeur.',verse:'C\'est a Allah qu\'est la puissance ainsi qu\'a Son messager et aux croyants',verseRef:'Al-Munafiqun 63:8',action:'Parlez votre langue maternelle fierement et utilisez-la quotidiennement'}
  },
  {
    id:9, emoji:'⚖️', type:'defense',
    ar:{title:'الوسطية',desc:'لا إفراط ولا تفريط. الغزالي يرى أن التطرف والتفريط وجهان لنفس العملة — كلاهما يخدم الغزو الثقافي.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ',verseRef:'البقرة ٢: ١٤٣',action:'في أي نقاش، اسأل نفسك: هل أنا أقرب للإفراط أم التفريط؟'},
    en:{title:'Moderation',desc:'Neither excess nor negligence. Al-Ghazali sees extremism and negligence as two sides of the same coin — both serve cultural invasion.',verse:'And thus We have made you a moderate nation that you will be witnesses over the people',verseRef:'Al-Baqarah 2:143',action:'In any debate, ask yourself: am I closer to excess or negligence?'},
    fr:{title:'La Moderation',desc:'Ni exces ni negligence. Al-Ghazali voit l\'extremisme et la negligence comme les deux faces d\'une meme piece — les deux servent l\'invasion culturelle.',verse:'Et ainsi Nous avons fait de vous une communaute de juste milieu pour que vous soyez temoins envers les gens',verseRef:'Al-Baqarah 2:143',action:'Dans tout debat, demandez-vous : suis-je plus proche de l\'exces ou de la negligence ?'}
  },
  {
    id:10, emoji:'🔬', type:'defense',
    ar:{title:'إنتاج المعرفة',desc:'لن نتحرر من الغزو الثقافي حتى ننتج بدل أن نستهلك. العلم هو سلاح الحرية الحقيقي.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ٩٦: ١',action:'ابدأ مشروعاً إبداعياً صغيراً — مقال، تطبيق، فيديو تعليمي'},
    en:{title:'Producing Knowledge',desc:'We won\'t be free from cultural invasion until we produce instead of consume. Knowledge is the true weapon of freedom.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 96:1',action:'Start a small creative project — an article, an app, an educational video'},
    fr:{title:'Produire le Savoir',desc:'Nous ne serons pas libres de l\'invasion culturelle tant que nous ne produisons pas au lieu de consommer. Le savoir est la vraie arme de la liberte.',verse:'Lis, au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 96:1',action:'Commencez un petit projet creatif — un article, une application, une video educative'}
  }
];

// ═══════════════ QUIZ DATA: "Spot the Influence" ═══════════════
const QUIZ = [
  {
    ar:{q:'صديقك يرفض لبس الثوب التقليدي لأنه "لا يناسب العصر". هل هذا:',options:['تأثر طبيعي بالموضة','غزو ثقافي — ربط الهوية بالملابس الغربية','حرية شخصية لا علاقة لها بالغزو'],correct:1,explain:'الغزالي يرى أن ربط "التقدم" بالمظهر الغربي هو شكل من الغزو الثقافي'},
    en:{q:'Your friend refuses to wear traditional clothing because it\'s "not modern." Is this:',options:['Natural fashion influence','Cultural invasion — linking identity to Western clothing','Personal freedom unrelated to invasion'],correct:1,explain:'Al-Ghazali sees linking "progress" to Western appearance as a form of cultural invasion'},
    fr:{q:'Votre ami refuse de porter des vetements traditionnels car ce n\'est "pas moderne." Est-ce :',options:['Influence mode naturelle','Invasion culturelle — lier l\'identite aux vetements occidentaux','Liberte personnelle sans rapport avec l\'invasion'],correct:1,explain:'Al-Ghazali voit le lien entre "progres" et apparence occidentale comme une forme d\'invasion culturelle'}
  },
  {
    ar:{q:'مدرسة تُدرّس العلوم الطبيعية بالمنهج الغربي. هل هذا غزو ثقافي؟',options:['نعم — كل استيراد غربي غزو','لا — العلوم الطبيعية عالمية','فقط إذا حذفت إسهامات العلماء المسلمين'],correct:2,explain:'الغزالي يميز بين العلوم العالمية (مشتركة) وبين تجاهل التاريخ الإسلامي فيها'},
    en:{q:'A school teaches natural sciences using Western curricula. Is this cultural invasion?',options:['Yes — any Western import is invasion','No — natural sciences are universal','Only if it erases Muslim scholars\' contributions'],correct:2,explain:'Al-Ghazali distinguishes between universal sciences (shared) and erasing Islamic history within them'},
    fr:{q:'Une ecole enseigne les sciences naturelles avec un programme occidental. Est-ce une invasion culturelle ?',options:['Oui — toute importation occidentale est une invasion','Non — les sciences naturelles sont universelles','Seulement si elle efface les contributions des savants musulmans'],correct:2,explain:'Al-Ghazali distingue entre les sciences universelles (partagees) et l\'effacement de l\'histoire islamique'}
  },
  {
    ar:{q:'شاب يقول: "لا أحتاج لقراءة القرآن، الأخلاق الإنسانية تكفي." ما المشكلة؟',options:['لا مشكلة — الأخلاق عالمية','فصل الأخلاق عن مصدرها — وهذا هدف الغزو الثقافي','المشكلة فقط إذا ترك الصلاة'],correct:1,explain:'الغزالي يحذر من فصل القيم عن مصدرها الإلهي — هذا بالضبط ما يسعى إليه الغزو الثقافي'},
    en:{q:'A young person says: "I don\'t need to read the Quran, human ethics are enough." What\'s the issue?',options:['No issue — ethics are universal','Separating ethics from their source — this is invasion\'s goal','Only a problem if they stop praying'],correct:1,explain:'Al-Ghazali warns against separating values from their divine source — this is exactly what cultural invasion seeks'},
    fr:{q:'Un jeune dit : "Je n\'ai pas besoin du Coran, l\'ethique humaine suffit." Quel est le probleme ?',options:['Pas de probleme — l\'ethique est universelle','Separer l\'ethique de sa source — c\'est l\'objectif de l\'invasion','Un probleme seulement s\'il arrete la priere'],correct:1,explain:'Al-Ghazali met en garde contre la separation des valeurs de leur source divine — c\'est exactement ce que l\'invasion culturelle recherche'}
  },
  {
    ar:{q:'طبيب مسلم يدرس في جامعة أمريكية ثم يعود ليخدم بلده. هل هذا غزو؟',options:['نعم — درس في الغرب فتأثر حتماً','لا — هذا تبادل صحي','يعتمد على ما إذا بقي متمسكاً بهويته'],correct:2,explain:'الغزالي يفرق بين الاستفادة مع الحفاظ على الهوية (صحي) والتبعية العمياء (غزو)'},
    en:{q:'A Muslim doctor studies in an American university then returns to serve their country. Is this invasion?',options:['Yes — studying in the West means being influenced','No — this is healthy exchange','Depends on whether they maintained their identity'],correct:2,explain:'Al-Ghazali distinguishes between beneficial learning while maintaining identity (healthy) and blind dependency (invasion)'},
    fr:{q:'Un medecin musulman etudie dans une universite americaine puis revient servir son pays. Est-ce une invasion ?',options:['Oui — etudier en Occident signifie etre influence','Non — c\'est un echange sain','Cela depend s\'il a maintenu son identite'],correct:2,explain:'Al-Ghazali distingue entre l\'apprentissage benefique avec maintien de l\'identite (sain) et la dependance aveugle (invasion)'}
  },
  {
    ar:{q:'شخص يرفض أي فكرة أجنبية بالمطلق. ما رأي الغزالي؟',options:['هذا هو الموقف الإسلامي الصحيح','هذا جهل — الحكمة ضالة المؤمن','هذا مقبول في زمن الغزو'],correct:1,explain:'الغزالي ينتقد الانغلاق بنفس قوة نقده للتبعية — كلاهما يضر الأمة'},
    en:{q:'Someone rejects every foreign idea absolutely. What is al-Ghazali\'s view?',options:['This is the correct Islamic position','This is ignorance — wisdom is the believer\'s lost property','This is acceptable in times of invasion'],correct:1,explain:'Al-Ghazali criticizes isolation as strongly as he criticizes dependency — both harm the nation'},
    fr:{q:'Quelqu\'un rejette absolument toute idee etrangere. Quel est l\'avis d\'al-Ghazali ?',options:['C\'est la position islamique correcte','C\'est de l\'ignorance — la sagesse est le bien perdu du croyant','C\'est acceptable en temps d\'invasion'],correct:1,explain:'Al-Ghazali critique l\'isolement aussi fortement que la dependance — les deux nuisent a la nation'}
  },
  {
    ar:{q:'مسلسل أجنبي يقدم الحب خارج الزواج كشيء طبيعي. ما نوع هذا التأثير؟',options:['ترفيه بريء لا علاقة له بالغزو','غزو ثقافي — تطبيع للقيم المخالفة عبر الترفيه','تأثير محدود لا يستحق القلق'],correct:1,explain:'الغزالي يرى أن تطبيع القيم المخالفة عبر الترفيه هو أخطر أدوات الغزو الثقافي'},
    en:{q:'A foreign TV show normalizes relationships outside marriage. What type of influence is this?',options:['Innocent entertainment, unrelated to invasion','Cultural invasion — normalizing contrary values through entertainment','Limited influence not worth worrying about'],correct:1,explain:'Al-Ghazali sees normalizing contrary values through entertainment as the most dangerous tool of cultural invasion'},
    fr:{q:'Une serie etrangere normalise les relations hors mariage. Quel type d\'influence est-ce ?',options:['Divertissement innocent, sans rapport avec l\'invasion','Invasion culturelle — normalisation de valeurs contraires par le divertissement','Influence limitee ne meritant pas d\'inquietude'],correct:1,explain:'Al-Ghazali voit la normalisation de valeurs contraires par le divertissement comme l\'outil le plus dangereux de l\'invasion culturelle'}
  },
  {
    ar:{q:'لماذا يقول الغزالي أن المشكلة داخلية قبل أن تكون خارجية؟',options:['لأن العدو لا يهاجم إلا الضعيف','لأن المسلمين لا أعداء لهم','لأنه لا يعترف بوجود غزو خارجي'],correct:0,explain:'الغزالي يؤكد أن الفراغ الداخلي هو ما يمكّن العدو — كالجسم الضعيف الذي يمرض بسهولة'},
    en:{q:'Why does al-Ghazali say the problem is internal before external?',options:['Because the enemy only attacks the weak','Because Muslims have no enemies','Because he doesn\'t acknowledge external invasion'],correct:0,explain:'Al-Ghazali emphasizes that internal void is what enables the enemy — like a weak body that falls ill easily'},
    fr:{q:'Pourquoi al-Ghazali dit-il que le probleme est interne avant d\'etre externe ?',options:['Parce que l\'ennemi n\'attaque que le faible','Parce que les musulmans n\'ont pas d\'ennemis','Parce qu\'il ne reconnait pas l\'invasion externe'],correct:0,explain:'Al-Ghazali souligne que le vide interne est ce qui permet a l\'ennemi — comme un corps faible qui tombe facilement malade'}
  },
  {
    ar:{q:'ما الفرق بين "التحديث" و"التغريب" عند الغزالي؟',options:['لا فرق — كلاهما مرفوض','التحديث أخذ العلم النافع، التغريب تقليد القيم الأجنبية','التحديث للتقنية فقط والتغريب للأفكار فقط'],correct:1,explain:'الغزالي يشجع التحديث (أخذ العلم والتقنية) لكن يرفض التغريب (استيراد القيم والمعتقدات)'},
    en:{q:'What\'s the difference between "modernization" and "Westernization" according to al-Ghazali?',options:['No difference — both are rejected','Modernization takes useful knowledge, Westernization copies foreign values','Modernization is for technology only, Westernization for ideas only'],correct:1,explain:'Al-Ghazali encourages modernization (taking useful knowledge and technology) but rejects Westernization (importing values and beliefs)'},
    fr:{q:'Quelle est la difference entre "modernisation" et "occidentalisation" selon al-Ghazali ?',options:['Aucune difference — les deux sont rejetees','La modernisation prend le savoir utile, l\'occidentalisation copie les valeurs etrangeres','La modernisation est pour la technologie, l\'occidentalisation pour les idees'],correct:1,explain:'Al-Ghazali encourage la modernisation (prendre le savoir et la technologie utiles) mais rejette l\'occidentalisation (importer les valeurs et croyances)'}
  },
  {
    ar:{q:'أنت تستخدم هاتفاً أمريكياً وتتصفح الإنترنت. هل أنت ضحية غزو ثقافي؟',options:['نعم — باستخدام منتجاتهم تتبعهم','لا — التقنية أداة محايدة','فقط إذا جعلتك التقنية تتخلى عن قيمك'],correct:2,explain:'الأداة محايدة — الغزو يكون في القيم والأفكار التي تتبناها لا في الأدوات التي تستخدمها'},
    en:{q:'You use an American phone and browse the internet. Are you a victim of cultural invasion?',options:['Yes — using their products means following them','No — technology is a neutral tool','Only if technology makes you abandon your values'],correct:2,explain:'The tool is neutral — invasion is in the values and ideas you adopt, not the tools you use'},
    fr:{q:'Vous utilisez un telephone americain et naviguez sur Internet. Etes-vous victime d\'invasion culturelle ?',options:['Oui — utiliser leurs produits signifie les suivre','Non — la technologie est un outil neutre','Seulement si la technologie vous fait abandonner vos valeurs'],correct:2,explain:'L\'outil est neutre — l\'invasion est dans les valeurs et idees que vous adoptez, pas les outils que vous utilisez'}
  },
  {
    ar:{q:'ما أول خطوة لمقاومة الغزو الثقافي حسب الغزالي؟',options:['محاربة الغرب','إصلاح الذات والأمة من الداخل','قطع العلاقات مع العالم'],correct:1,explain:'الغزالي يبدأ دائماً من الداخل — أصلح نفسك وأمتك أولاً ثم واجه التحديات الخارجية'},
    en:{q:'What is the first step to resist cultural invasion according to al-Ghazali?',options:['Fighting the West','Reforming the self and nation from within','Cutting ties with the world'],correct:1,explain:'Al-Ghazali always starts from within — reform yourself and your nation first, then face external challenges'},
    fr:{q:'Quelle est la premiere etape pour resister a l\'invasion culturelle selon al-Ghazali ?',options:['Combattre l\'Occident','Reformer le soi et la nation de l\'interieur','Couper les liens avec le monde'],correct:1,explain:'Al-Ghazali commence toujours de l\'interieur — reformez-vous et reformez votre nation d\'abord, puis affrontez les defis externes'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {
    ar:{label:'دعاء الثبات',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'من أكثر أدعية النبي ﷺ'},
    en:{label:'Dua for Steadfastness',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, keep my heart firm on Your religion'},
    fr:{label:'Dua pour la Fermete',text:'اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion'}
  },
  {
    ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'يُقال بعد صلاة الفجر'},
    en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds'},
    fr:{label:'Dua pour le Savoir Benefique',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, je Te demande un savoir benefique, une bonne subsistance et des oeuvres acceptees'}
  },
  {
    ar:{label:'دعاء نور البصيرة',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'من دعاء النبي ﷺ'},
    en:{label:'Dua for Light of Insight',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place light in my heart, light in my sight, and light in my hearing'},
    fr:{label:'Dua pour la Lumiere de la Clairvoyance',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, mets de la lumiere dans mon coeur, dans ma vue et dans mon ouie'}
  },
  {
    ar:{label:'دعاء الحفظ من الفتن',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'حماية من الفتن الظاهرة والباطنة'},
    en:{label:'Dua for Protection from Trials',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, I seek refuge in You from trials, both apparent and hidden'},
    fr:{label:'Dua de Protection contre les Epreuves',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ',tr:'O Allah, je cherche refuge aupres de Toi contre les epreuves, apparentes et cachees'}
  },
  {
    ar:{label:'دعاء التوكل',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'كلمة إبراهيم ﷺ حين ألقي في النار'},
    en:{label:'Dua of Reliance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Allah is sufficient for us, and He is the best Disposer of affairs'},
    fr:{label:'Dua de la Confiance en Allah',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Allah nous suffit, Il est notre meilleur Garant'}
  },
  {
    ar:{label:'دعاء طلب الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'طلب الهداية والسداد في كل أمر'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide me and direct me'},
    fr:{label:'Dua pour la Guidee',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide-moi et dirige-moi'}
  }
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('ghazw-lang') || 'ar';
let currentCardIdx = -1;
const STORAGE_PREFIX = 'ghazw-';

// ═══════════════ XP & BADGE SYSTEM ═══════════════
function getXP() { return parseInt(localStorage.getItem(STORAGE_PREFIX + 'xp') || '0'); }
function addXP(amount) {
  const xp = getXP() + amount;
  localStorage.setItem(STORAGE_PREFIX + 'xp', xp);
  updateXPDisplay();
  checkBadges();
  return xp;
}
function updateXPDisplay() {
  const xpEl = document.getElementById('xpDisplay');
  if (xpEl) xpEl.textContent = getXP();
  const xpBar = document.getElementById('xpBarFill');
  if (xpBar) {
    const level = Math.floor(getXP() / 100);
    const progress = (getXP() % 100);
    xpBar.style.width = progress + '%';
  }
}

const BADGES = [
  { id: 'beginner', emoji: '🌟', ar: 'مبتدئ', en: 'Beginner', fr: 'Debutant', condition: () => true },
  { id: 'reader', emoji: '📖', ar: 'قارئ', en: 'Reader', fr: 'Lecteur', condition: () => getCardsRead() >= 10 },
  { id: 'scholar', emoji: '🧠', ar: 'عالم', en: 'Scholar', fr: 'Savant', condition: () => getQuizCompleted() },
  { id: 'persistent', emoji: '🔥', ar: 'مثابر', en: 'Persistent', fr: 'Perseverant', condition: () => getStreak() >= 7 },
  { id: 'expert', emoji: '🏆', ar: 'خبير', en: 'Expert', fr: 'Expert', condition: () => getBestScore() >= 100 }
];

function getEarnedBadges() {
  return JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'badges') || '["beginner"]');
}
function checkBadges() {
  const earned = getEarnedBadges();
  BADGES.forEach(b => {
    if (!earned.includes(b.id) && b.condition()) {
      earned.push(b.id);
      localStorage.setItem(STORAGE_PREFIX + 'badges', JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('badge');
    }
  });
}
function getCardsRead() { return parseInt(localStorage.getItem(STORAGE_PREFIX + 'cardsRead') || '0'); }
function markCardRead() {
  const count = getCardsRead() + 1;
  localStorage.setItem(STORAGE_PREFIX + 'cardsRead', count);
  addXP(10);
}
function getQuizCompleted() { return localStorage.getItem(STORAGE_PREFIX + 'quizDone') === 'true'; }
function getBestScore() { return parseInt(localStorage.getItem(STORAGE_PREFIX + 'bestScore') || '0'); }

// ═══════════════ STREAK SYSTEM ═══════════════
function getStreak() {
  const data = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'streak') || '{"count":0,"lastDate":""}');
  return data.count;
}
function updateStreak() {
  const today = new Date().toDateString();
  let data = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'streak') || '{"count":0,"lastDate":""}');
  if (data.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  if (data.lastDate === yesterday.toDateString()) {
    data.count++;
  } else if (data.lastDate !== today) {
    data.count = 1;
  }
  data.lastDate = today;
  localStorage.setItem(STORAGE_PREFIX + 'streak', JSON.stringify(data));
  checkBadges();
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem(STORAGE_PREFIX + 'lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

// ═══════════════ THEME ═══════════════
const THEMES = ['fortress','night','steel'];
const THEME_ICONS = ['🛡️','🌙','⚙️'];
let themeIdx = THEMES.indexOf(localStorage.getItem(STORAGE_PREFIX + 'theme') || 'fortress');
if (themeIdx < 0) themeIdx = 0;
function cycleTheme() {
  themeIdx = (themeIdx + 1) % THEMES.length;
  document.documentElement.dataset.theme = THEMES[themeIdx];
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[themeIdx]; }
  localStorage.setItem(STORAGE_PREFIX + 'theme', THEMES[themeIdx]);
  playSound('theme');
}

// ═══════════════ SPLASH ═══════════════
let splashTimer;
function initSplash() {
  const t = T[lang];
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  const featEl = document.getElementById('splashFeatures');
  if (featEl) {
    featEl.innerHTML = t.splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.5 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const countEl = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (countEl) countEl.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.style.display = 'none', 500); }
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  // Daily card — random from all cards
  const allCards = [...THREATS, ...SHIELDS];
  const dayIdx = Math.floor(Date.now() / 86400000) % allCards.length;
  const card = allCards[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${d.title}</div>
    <div class="daily-body">${d.desc}</div>
    <div class="daily-action" onclick="switchToTab('${card.type === 'internal' || card.type === 'external' ? 'threats' : 'shield'}')">${card.emoji} ${t[card.type === 'defense' ? 'defense' : 'threat']}</div>
  `;
  // XP & Badges bar
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<span class="home-streak">🔥 ${streak} ${t.streakMsg}</span>` : '';
  // Home grid
  const tabs = [
    { tab: 'threats', icon: '⚠️', title: t.tabThreats, desc: lang === 'ar' ? '١٠ تهديدات' : lang === 'fr' ? '10 menaces' : '10 threats' },
    { tab: 'shield', icon: '🛡️', title: t.tabShield, desc: lang === 'ar' ? '١٠ دفاعات' : lang === 'fr' ? '10 defenses' : '10 defenses' },
    { tab: 'quiz', icon: '🎯', title: t.tabQuiz, desc: lang === 'ar' ? 'اكتشف التأثير' : lang === 'fr' ? 'Reperer l\'influence' : 'Spot the influence' },
    { tab: 'about', icon: '📖', title: t.tabAbout, desc: lang === 'ar' ? 'عن الكتاب' : lang === 'fr' ? 'Le livre' : 'About the book' }
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= `
    <div class="xp-bar-home">
      <div class="xp-info"><span class="xp-label">${t.xpLabel}</span><span class="xp-value" id="xpDisplay">${getXP()}</span> ${streakHTML}</div>
      <div class="xp-bar-bg"><div class="xp-bar-fill" id="xpBarFill" style="width:${getXP() % 100}%"></div></div>
      <div class="badges-row">${getEarnedBadges().map(id => { const b = BADGES.find(x => x.id === id); return b ? `<span class="badge-item" title="${b[lang]}">${b.emoji}</span>` : ''; }).join('')}</div>
    </div>
    ${tabs.map(t => `
      <div class="home-card" onclick="switchToTab('${t.tab}')">
        <span class="hc-icon">${t.icon}</span>
        <div class="hc-title">${t.title}</div>
        <div class="hc-desc">${t.desc}</div>
      </div>
    `).join('')}
  `;
  updateXPDisplay();
}

function switchToTab(tabName) {
  const tab = document.querySelector(`.tab[data-tab="${tabName}"]`);
  if (tab) tab.click();
}

// ═══════════════ RENDER: THREATS ═══════════════
function renderThreats() {
  const t = T[lang];
  { const _e=document.getElementById('threatsTitle'); if(_e) _e.textContent=t.threatsTitle; }
  { const _e=document.getElementById('threatsDesc'); if(_e) _e.textContent=t.threatsDesc; }
  const container = document.getElementById('threatsContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input class="search-input" id="threatsSearch" type="text" placeholder="${t.searchPlaceholder}" oninput="filterCards('threats')">
    </div>
  ` + THREATS.map((card, i) => {
    const d = card[lang];
    const typeLabel = card.type === 'internal' ? t.internal : t.external;
    return `
    <div class="threat-card scroll-reveal" id="threat-${card.id}" data-search="${d.title} ${d.desc}">
      <div class="threat-head" onclick="toggleCard('threat-${card.id}'); markCardRead();">
        <span class="threat-num">${card.id}</span>
        <span class="threat-emoji">${card.emoji}</span>
        <span class="threat-title">${d.title}</span>
        <span class="threat-type ${card.type}">${typeLabel}</span>
        <span class="threat-chev">&#9660;</span>
      </div>
      <div class="threat-body">
        <div class="threat-inner">
          <div class="threat-desc">${d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard('${d.title}','threat')"><span class="share-icon">🔗</span>${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: SHIELDS ═══════════════
function renderShields() {
  const t = T[lang];
  { const _e=document.getElementById('shieldTitle'); if(_e) _e.textContent=t.shieldTitle; }
  { const _e=document.getElementById('shieldDesc'); if(_e) _e.textContent=t.shieldDesc; }
  const container = document.getElementById('shieldContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input class="search-input" id="shieldSearch" type="text" placeholder="${t.searchPlaceholder}" oninput="filterCards('shield')">
    </div>
  ` + SHIELDS.map((card, i) => {
    const d = card[lang];
    return `
    <div class="shield-card scroll-reveal" id="shield-${card.id}" data-search="${d.title} ${d.desc}">
      <div class="shield-head" onclick="toggleCard('shield-${card.id}'); markCardRead();">
        <span class="shield-num">${card.id}</span>
        <span class="shield-emoji">${card.emoji}</span>
        <span class="shield-title">${d.title}</span>
        <span class="shield-chev">&#9660;</span>
      </div>
      <div class="shield-body">
        <div class="shield-inner">
          <div class="shield-desc">${d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard('${d.title}','shield')"><span class="share-icon">🔗</span>${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ ("Spot the Influence") ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fiftyFifty: true, hint: true, verse: true } };

function renderQuiz() {
  const t = T[lang];
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  quizState = { current: 0, score: 0, answers: [], lifelines: { fiftyFifty: true, hint: true, verse: true } };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');

  if (quizState.current >= QUIZ.length) {
    // Quiz complete
    const pct = Math.round(quizState.score / QUIZ.length * 100);
    localStorage.setItem(STORAGE_PREFIX + 'quizDone', 'true');
    const best = getBestScore();
    if (pct > best) localStorage.setItem(STORAGE_PREFIX + 'bestScore', pct);
    addXP(20);
    checkBadges();

    let emoji, title, desc;
    if (pct >= 80) {
      emoji = '🛡️'; title = lang === 'ar' ? 'درع قوي!' : lang === 'fr' ? 'Bouclier solide !' : 'Strong Shield!';
      desc = lang === 'ar' ? 'لديك وعي ممتاز بالغزو الثقافي. استمر في بناء درعك!' : lang === 'fr' ? 'Vous avez une excellente conscience de l\'invasion culturelle. Continuez !' : 'You have excellent awareness of cultural invasion. Keep building your shield!';
    } else if (pct >= 50) {
      emoji = '⚔️'; title = lang === 'ar' ? 'جيد' : lang === 'fr' ? 'Bien' : 'Good';
      desc = lang === 'ar' ? 'وعيك جيد لكن هناك مجال للتحسين. راجع بطاقات الدرع.' : lang === 'fr' ? 'Votre conscience est bonne mais il y a place pour l\'amelioration.' : 'Your awareness is good but there\'s room for improvement.';
    } else {
      emoji = '⚠️'; title = lang === 'ar' ? 'انتبه!' : lang === 'fr' ? 'Attention !' : 'Watch out!';
      desc = lang === 'ar' ? 'تحتاج لتقوية درعك الفكري. اقرأ بطاقات التهديدات والدفاعات بعناية.' : lang === 'fr' ? 'Vous devez renforcer votre bouclier. Lisez attentivement les cartes.' : 'You need to strengthen your shield. Read the threat and defense cards carefully.';
    }

    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="qr-emoji">${emoji}</div>
      <div class="qr-score">${pct}%</div>
      <div class="qr-title">${title}</div>
      <div class="qr-desc">${desc}</div>
      <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.restartQuiz}</button>
    `;
    container.innerHTML = '';
    result.scrollIntoView({ behavior: 'smooth' });
    playSound('success');
    launchConfetti();
    return;
  }

  const q = QUIZ[quizState.current][lang];
  const qNum = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${qNum / QUIZ.length * 100}%"></div></div>
      <span class="quiz-progress-text">${qNum}/${QUIZ.length}</span>
    </div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fiftyFifty ? '' : 'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fiftyFifty ? '' : 'disabled'}><span>📖</span> ${t.lifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint ? '' : 'used'}" onclick="useHint()" ${quizState.lifelines.hint ? '' : 'disabled'}><span>🤲</span> ${t.lifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.verse ? '' : 'used'}" onclick="useVerse()" ${quizState.lifelines.verse ? '' : 'disabled'}><span>📞</span> ${t.lifelineVerse}</button>
    </div>
    <div class="quiz-question" id="quiz-active">
      <div class="quiz-q-text">${qNum}. ${q.q}</div>
      <div class="quiz-options" id="quizOptions">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>
        `).join('')}
      </div>
    </div>
    <div class="quiz-feedback hidden" id="quizFeedback"></div>
  `;
}

function answerQuiz(idx) {
  const q = QUIZ[quizState.current][lang];
  const t = T[lang];
  const isCorrect = idx === q.correct;
  if (isCorrect) { quizState.score++; addXP(5); }

  // Highlight
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('quizFeedback');
  fb.classList.remove('hidden');
  fb.innerHTML = `
    <div class="feedback-result ${isCorrect ? 'correct' : 'wrong'}">
      <span>${isCorrect ? '✅ ' + t.quizCorrect : '❌ ' + t.quizWrong}</span>
    </div>
    <div class="feedback-explain">${t.quizExplain} ${q.explain}</div>
    <button class="quiz-submit" onclick="nextQuizQuestion()">${quizState.current < QUIZ.length - 1 ? t.nextQ : t.score}</button>
  `;
  fb.scrollIntoView({ behavior: 'smooth' });
  playSound(isCorrect ? 'success' : 'click');
}

function nextQuizQuestion() {
  quizState.current++;
  renderQuizQuestion();
}

// ═══════════════ LIFELINES ═══════════════
function useFiftyFifty() {
  if (!quizState.lifelines.fiftyFifty) return;
  quizState.lifelines.fiftyFifty = false;
  const q = QUIZ[quizState.current][lang];
  const wrongIndices = q.options.map((_, i) => i).filter(i => i !== q.correct);
  // Remove 1 wrong answer (since we have 3 options)
  const removeIdx = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
  const btn = document.getElementById('qopt-' + removeIdx);
  if (btn) { btn.style.opacity = '0.3'; btn.disabled = true; }
  renderQuizQuestion.__lifeline = true;
  // Re-render lifeline buttons state
  document.querySelector('.lifeline-btn').classList.add('used');
  document.querySelector('.lifeline-btn').disabled = true;
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  // Highlight the correct answer briefly
  const btn = document.getElementById('qopt-' + q.correct);
  if (btn) { btn.classList.add('hint-glow'); setTimeout(() => btn.classList.remove('hint-glow'), 2000); }
  playSound('click');
}

function useVerse() {
  if (!quizState.lifelines.verse) return;
  quizState.lifelines.verse = false;
  const q = QUIZ[quizState.current][lang];
  // Show explanation as hint
  const fb = document.getElementById('quizFeedback');
  fb.classList.remove('hidden');
  fb.innerHTML = `<div class="feedback-explain" style="border-left:3px solid var(--accent);padding-left:12px;">${q.explain}</div>`;
  playSound('click');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"الغزو الثقافي يمتد في فراغنا" كتاب صدر عن دار الشروق عام ١٩٨٥. يشخص الشيخ الغزالي فيه أمراض العالم الإسلامي — مؤكداً أن الأسباب الداخلية أخطر من العدوان الخارجي. يتناول: الفراغ الفكري، التقليد الأعمى، الفهم السطحي للدين، خطر التطرف والليبرالية معاً، وكيف يملأ الأعداء الفراغ الذي تركه المسلمون. الكتاب يدعو للوسطية والتفكير النقدي وإنتاج المعرفة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الغزو الثقافي يمتد في فراغنا" — الشيخ محمد الغزالي — دار الشروق ١٩٨٥', 'القرآن الكريم', 'صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending moderation.',
      bookTitle: 'About the Book',
      bookDesc: '"Cultural Invasion Spreads into Our Void" was published by Dar Al-Shorouk in 1985. Sheikh al-Ghazali diagnoses the diseases of the Muslim world — emphasizing that internal causes are more dangerous than external aggression. It covers: intellectual void, blind following, superficial understanding of religion, the danger of both extremism and liberalism, and how enemies fill the void Muslims left. The book calls for moderation, critical thinking, and knowledge production.',
      sourcesTitle: 'Sources',
      sources: ['"Cultural Invasion Spreads into Our Void" — Sheikh Mohammed al-Ghazali — Dar Al-Shorouk 1985', 'The Holy Quran', 'Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau, la lutte contre la rigidite et la defense de la moderation.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« L\'Invasion Culturelle s\'Etend dans Notre Vide » a ete publie par Dar Al-Shorouk en 1985. Le Sheikh al-Ghazali y diagnostique les maladies du monde musulman — soulignant que les causes internes sont plus dangereuses que l\'agression externe. Il couvre : le vide intellectuel, l\'imitation aveugle, la comprehension superficielle de la religion, le danger de l\'extremisme et du liberalisme, et comment les ennemis remplissent le vide laisse par les musulmans. Le livre appelle a la moderation, la pensee critique et la production du savoir.',
      sourcesTitle: 'Sources',
      sources: ['« L\'Invasion Culturelle s\'Etend dans Notre Vide » — Sheikh Mohammed al-Ghazali — Dar Al-Shorouk 1985', 'Le Saint Coran', 'Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الغزو الثقافي يمتد في فراغنا" للشيخ محمد الغزالي — دار الشروق ١٩٨٥.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة درع (تهديدات + دفاعات)، اختبار "اكتشف التأثير"، نقاط وأوسمة، راوي صوتي.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/al-ghazw-al-thaqafi'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Cultural Invasion Spreads into Our Void" by Sheikh Mohammed al-Ghazali — Dar Al-Shorouk 1985.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 shield cards (threats + defenses), "Spot the Influence" quiz, XP & badges, audio narrator.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate cards. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/al-ghazw-al-thaqafi'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« L\'Invasion Culturelle s\'Etend dans Notre Vide » par Sheikh Mohammed al-Ghazali — Dar Al-Shorouk 1985.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes bouclier (menaces + defenses), quiz « Reperer l\'Influence », XP & badges, narrateur audio.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/al-ghazw-al-thaqafi'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TICKER ═══════════════
function renderTicker() {
  const quotes = {
    ar: ['الشيخ الغزالي: المشكلة في فراغنا لا في قوة العدو', 'الإسلام دين العقل والتفكير', 'الحكمة ضالة المؤمن', 'لا إفراط ولا تفريط', 'ابنِ درعك الفكري'],
    en: ['Al-Ghazali: The problem is our void, not the enemy\'s strength', 'Islam is the religion of reason and thought', 'Wisdom is the believer\'s lost property', 'Neither excess nor negligence', 'Build your intellectual shield'],
    fr: ['Al-Ghazali : Le probleme est notre vide, pas la force de l\'ennemi', 'L\'Islam est la religion de la raison', 'La sagesse est le bien perdu du croyant', 'Ni exces ni negligence', 'Construisez votre bouclier intellectuel']
  };
  const ticker = document.getElementById('tickerText');
  if (ticker) {
    const items = quotes[lang].map(q => `<span class="tc">&nbsp;&nbsp;🛡️ ${q} &nbsp;&nbsp;</span>`).join('');
    ticker.innerHTML = items + items; // Duplicate for seamless scroll
    ticker.style.animation = `tickerMarquee ${quotes[lang].length * 8}s linear infinite`;
  }
}

// ═══════════════ FILTER / SEARCH ═══════════════
function filterCards(section) {
  const inputId = section + 'Search';
  const input = document.getElementById(inputId);
  const query = input.value.toLowerCase();
  const cards = document.querySelectorAll(`#${section}Container .${section === 'threats' ? 'threat' : 'shield'}-card`);
  cards.forEach(card => {
    const text = (card.dataset.search || '').toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
}

// ═══════════════ SHARE ═══════════════
function shareCard(title, type) {
  const text = `${title} — ${T[lang].appTitle}`;
  if (navigator.share) {
    navigator.share({ title: T[lang].appTitle, text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => showToast(lang === 'ar' ? 'تم النسخ' : 'Copied!'));
  }
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS (Web Audio API) ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    else if (type === 'badge') { osc.frequency.value = 660; osc.type = 'sine'; gain.gain.value = 0.07; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}

// ═══════════════ CONFETTI ANIMATION ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#78909C','#4FC3F7','#66BB6A','#FFD54F','#EF5350','#B388FF','#FF8A65'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5, h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4, vy: Math.random() * 3 + 2,
      rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.threat-card.open, .shield-card.open').forEach(c => c.classList.remove('open'));
    }
  });
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ PAGE TRANSITIONS ═══════════════
(function upgradeTabTransitions() {
  const origInitTabs = initTabs;
  initTabs = function() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const isRTL = document.documentElement.dir === 'rtl';
        const exitClass = isRTL ? 'panel-exit-rtl' : 'panel-exit-ltr';
        const enterClass = isRTL ? 'panel-enter-rtl' : 'panel-enter-ltr';
        const currentPanel = document.querySelector('.panel.active');
        if (currentPanel) {
          currentPanel.classList.add(exitClass);
          setTimeout(() => currentPanel.classList.remove('active', exitClass), 280);
        }
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const newPanel = document.getElementById('panel-' + tab.dataset.tab);
        if (newPanel) {
          setTimeout(() => {
            newPanel.classList.add('active', enterClass);
            setTimeout(() => newPanel.classList.remove(enterClass), 300);
          }, currentPanel ? 280 : 0);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        playSound('click');
        try { navigator.vibrate && navigator.vibrate(10); } catch(e) {}
      });
    });
  };
})();

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  // Update UI labels
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabThreats'); if(_e) _e.textContent=t.tabThreats; }
  { const _e=document.getElementById('tabShield'); if(_e) _e.textContent=t.tabShield; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('narratorTitle'); if(_e) _e.textContent=(NR_T && NR_T[lang]) ? NR_T[lang].title : '🎧 Narrator'; }

  // Narrator labels
  document.querySelectorAll('[data-nr]').forEach(el => {
    const key = el.dataset.nr;
    if (NR_T && NR_T[lang] && NR_T[lang][key]) el.textContent = NR_T[lang][key];
  });

  renderHome();
  renderThreats();
  renderShields();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
  updateXPDisplay();
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved settings
  const savedLang = localStorage.getItem(STORAGE_PREFIX + 'lang');
  if (savedLang) lang = savedLang;
  const savedTheme = localStorage.getItem(STORAGE_PREFIX + 'theme');
  if (savedTheme) {
    themeIdx = THEMES.indexOf(savedTheme);
    if (themeIdx < 0) themeIdx = 0;
  }
  document.documentElement.dataset.theme = THEMES[themeIdx];
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[themeIdx]; }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  initSplash();
  initTabs();
  renderAll();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  updateStreak();

  // Set about tab active by default
  setTimeout(() => {
    const aboutTab = document.querySelector('.tab[data-tab="about"]');
    if (aboutTab) aboutTab.click();
  }, 50);

  setTimeout(initTypewriter, 1500);
});

// NR_T stub for narrator labels (narrator.js provides the real one)
if (typeof NR_T === 'undefined') var NR_T = { ar: { title: '🎧 الراوي' }, en: { title: '🎧 Narrator' }, fr: { title: '🎧 Narrateur' } };
