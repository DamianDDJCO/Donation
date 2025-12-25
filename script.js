 // ============================================================================
    // CONFIGURACIÓN FÁCIL - ¡AQUÍ MODIFICAS TODO!
    // ============================================================================

    // WEBHOOK de Discord (para recibir los votos)
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1452007032080040138/B_9Jw3yJkws8DdlaihLld9FglO1RsFBeY5O-0EwvAa8Gg0RgwWDutAm4idnK1sVtw4v8";

    // Número total de miembros de la comunidad (se muestra en el inicio)
    const TOTAL_MEMBERS = 200000;

   // ===== CATEGORÍAS - FÁCIL DE AGREGAR/MODIFICAR =====
// Para agregar una categoría nueva, simplemente añade un objeto al array
const CATEGORIES = [
  {
    id: 'donadores',
    name: 'Donadores',
    description: 'Homenaje a los pilares fundamentales de nuestra comunidad, aquellos cuya generosidad excepcional y apoyo constante han construido un legado de solidaridad que trasciende lo virtual. Estos donadores extraordinarios no solo aportaron recursos, sino que sembraron esperanza y posibilitaron sueños, convirtiéndose en el verdadero motor que impulsa el crecimiento y bienestar colectivo.',
    icon: 'fas fa-crown',
    title: '🏆 DONADORES 2025'
  },
  {
    id: 'recibidos',
    name: 'Recibidos',
    description: 'Reconocemos a quienes, gracias al apoyo unánime y afectuoso de nuestra comunidad, han recibido el respaldo que inspira y transforma historias. Estas personas representan el corazón de nuestra solidaridad colectiva, demostrando cómo el apoyo comunitario puede cambiar realidades y fortalecer los lazos que nos unen como una verdadera familia virtual.',
    icon: 'fas fa-gem',
    title: '💎 RECIBIDOS 2025'
  },
  {
    id: 'influencers',
    name: 'Influencers',
    description: 'Celebramos a las voces creativas y a los creadores de contenido que amplificaron nuestro espíritu comunitario, llevando la visibilidad, la diversión y el crecimiento a nuevos horizontes. Su pasión por compartir experiencias, crear contenido memorable y conectar con la audiencia ha sido fundamental para construir una comunidad vibrante y en constante expansión.',
    icon: 'fas fa-star',
    title: '🌟 INFLUENCERS 2025'
  },
  {
    id: 'clanes',
    name: 'Clanes',
    description: 'Honramos a los clanes que destacaron por su unión inquebrantable, actividad ejemplar y apoyo mutuo, forjando la verdadera esencia de lo que significa ser comunidad. Estos grupos extraordinarios han demostrado que la fuerza colectiva, la organización y la camaradería son los cimientos sobre los que se construyen las experiencias más memorables y significativas.',
    icon: 'fas fa-users',
    title: '🛡️CLANES 2025'
  },
  {
    id: 'moderadores',
    name: 'Moderadores',
    description: 'Agradecemos profundamente a los guardianes del orden y la justicia, cuyo trabajo incansable, dedicación silenciosa y compromiso absoluto cultivaron un ambiente seguro, positivo y próspero para todos. Estos moderadores ejemplares han sido los pilares invisibles que mantienen la armonía, resolviendo conflictos con sabiduría y fomentando un espacio donde todos pueden crecer y expresarse libremente.',
    icon: 'fas fa-shield-alt',
    title: '🧑‍⚖️ MODERADORES 2025'
  }
];

// ===== NOMINADOS - FÁCIL DE AGREGAR/MODIFICAR =====
// Para agregar nominados, añádelos dentro del array de la categoría correspondiente
// IMPORTANTE: El "id" debe ser único para cada nominado
const NOMINEES = {
  donadores: [
    {
      id: 1,
      name: "Elderftv",
      description: "Máximo donador del año y figura histórica dentro de nuestra comunidad. Su contribución monumental de más de 5,000,000 de Robux (equivalente a aproximadamente 55,500 dólares estadounidenses) no solo apoyó a cientos de personas, sino que redefinió por completo el significado de la generosidad en el ámbito digital. Su legado trasciende las cifras, inspirando a una nueva generación de donadores y estableciendo un estándar de solidaridad que perdurará por años.",
      img: "img/donadores/elderftv.png"
    },
    {
      id: 2,
      name: "NcFnxe",
      description: "Con una donación constante y comprometida que superó los 2,000,000 de Robux (equivalente a aproximadamente 22,200 dólares estadounidenses), se distinguió por ser un soporte confiable y una mano amiga siempre disponible para la comunidad en sus momentos más necesitados. Su consistencia en el apoyo demostró que la verdadera generosidad no se mide en actos aislados, sino en la constancia del compromiso con el bienestar colectivo.",
      img: "img/donadores/ncfnxe.png"
    },
    {
      id: 3,
      name: "BatataWOK",
      description: "Dejó una huella imborrable en la historia de nuestra comunidad con más de 1,500,000 de Robux donados (equivalente a aproximadamente 16,650 dólares estadounidenses). Su compromiso inquebrantable, incluso tras su retiro de las donaciones activas, sigue siendo un referente de dedicación pura y desinteresada. Su ejemplo nos recuerda que el impacto de una contribución genuina perdura mucho más allá del momento en que se realiza.",
      img: "img/donadores/inc.png"
    },
    {
      id: 4,
      name: "Cappy_Kyct",
      description: "En solo 4 meses de actividad intensa, logró donar más de 600,000 Robux (equivalente a aproximadamente 6,660 dólares estadounidenses), un gesto de generosidad concentrada y poderosa que le granjeó el cariño, respeto y admiración eterna de todos los miembros. Su breve pero significativo paso por la comunidad demostró que el impacto no se mide por el tiempo, sino por la intensidad del compromiso y la calidad de las intenciones.",
      img: "img/donadores/inc.png"
    },
    {
      id: 5,
      name: "Deivi1l",
      description: "Ejemplo vivo de constancia solidaria y espíritu comunitario. Con más de 400,000 Robux aportados durante el año (equivalente a aproximadamente 4,440 dólares estadounidenses), demuestra día a día que el apoyo sostenido y consistente es lo que construye el verdadero cambio duradero. Su presencia continua y su disposición a ayudar lo han convertido en un pilar fundamental de nuestra red de apoyo mutuo.",
      img: "img/donadores/inc.png"
    },
    {
      id: 6,
      name: "Chisque0",
      description: "Pilar fundamental de la estructura de donaciones con más de 900,000 Robux donados durante el año (equivalente a aproximadamente 9,990 dólares estadounidenses). Su apoyo ininterrumpido y su visión a largo plazo han sido clave para el crecimiento sostenido y el bienestar colectivo. Cada contribución suya ha sido una semilla plantada para el futuro de la comunidad.",
      img: "img/donadores/chisque0.png"
    },
    {
      id: 7,
      name: "HulkGamerRD",
      description: "Donador activo cuya contribución continua de más de 300,000 Robux (equivalente a aproximadamente 3,330 dólares estadounidenses) prueba de manera elocuente que cada aporte, por pequeño que pueda parecer en el momento, deja una huella significativa y acumulativa en la construcción de una comunidad más fuerte. Su persistencia es un testimonio del poder de la constancia.",
      img: "img/donadores/hulkgamerrd.png"
    },
    {
      id: 8,
      name: "ToxicKyct",
      description: "Líder visionario del clan más grande y donador activo comprometido con más de 2,000,000 de Robux aportados a lo largo del año (equivalente a aproximadamente 5,550 dólares estadounidenses). Encarna el verdadero liderazgo que se demuestra con acciones concretas, apoyando de forma incondicional el crecimiento, desarrollo y bienestar de cada miembro de la comunidad que representa y protege.",
      img: "img/donadores/toxic.png"
    }
  ],

  recibidos: [
    {
      id: 1,
      name: "kenyr_112",
      description: "Actualmente se posiciona como el Top 2 de recibidos, habiendo obtenido el respaldo masivo de la comunidad con más de 828,000 Robux (equivalente a aproximadamente 9,190 dólares estadounidenses). Esta extraordinaria muestra de apoyo es un testimonio viviente del impacto positivo, la conexión genuina y la admiración que ha generado a través de su presencia constante y contribuciones significativas dentro de nuestro entorno virtual compartido.",
      img: "img/recibidos/keny.png"
    },
    {
      id: 2,
      name: "QueenBee_Kyct",
      description: "Como reconocida Top 3 de recibidos, ha sido honrada con más de 783,000 Robux por parte de la comunidad (equivalente a aproximadamente 8,690 dólares estadounidenses). Esta considerable suma refleja no solo el cariño y reconocimiento que la comunidad siente hacia su persona, sino también el valor de su destacada presencia, liderazgo inspirador y labor incansable en la construcción de puentes entre los miembros.",
      img: "img/recibidos/queen.png"
    },
    {
      id: 3,
      name: "GabyMx1",
      description: "Ocupando el respetado puesto de Top 4 de recibidos, ha acumulado más de 723,000 Robux en apoyo comunitario (equivalente a aproximadamente 8,020 dólares estadounidenses). Esta notable cifra simboliza la confianza, el aprecio y el respaldo que ha sabido ganarse a través de su autenticidad, participación activa y contribuciones valiosas que han enriquecido la experiencia colectiva de todos los participantes.",
      img: "img/recibidos/gaby.png"
    },
    {
      id: 4,
      name: "iixxcieloxxii",
      description: "Consolidándose como el Top 5 de recibidos, ha recibido el apoyo comunitario equivalente a más de 635,000 Robux (equivalente a aproximadamente 7,050 dólares estadounidenses). Este significativo respaldo económico representa la materialización del reconocimiento colectivo hacia su perseverancia, espíritu colaborativo y la positiva influencia que ejerce diariamente en el entorno social que compartimos.",
      img: "img/recibidos/cielo.png"
    },
    {
      id: 5,
      name: "Mirela29205",
      description: "Destacando como Top 6 de recibidos, ha sido beneficiada con más de 596,000 Robux provenientes de la solidaridad comunitaria (equivalente a aproximadamente 6,620 dólares estadounidenses). Esta cantidad considerable evidencia el aprecio generalizado hacia su contribución única, su actitud positiva y el valor agregado que representa su presencia constante en el desarrollo de nuestras interacciones diarias.",
      img: "img/recibidos/mirela.png"
    },
    {
      id: 6,
      name: "Mary_Pink1122",
      description: "Posicionándose como Top 7 de recibidos, ha obtenido el respaldo de la comunidad por más de 592,000 Robux (equivalente a aproximadamente 6,570 dólares estadounidenses). Este apoyo financiero sustancial es un reflejo directo de la estima, confianza y reconocimiento que ha cultivado a través de su participación constructiva, su autenticidad y su capacidad para inspirar positividad en cada interacción dentro de nuestro espacio virtual compartido.",
      img: "img/donadores/inc.png"
    }
  ],

  influencers: [
    {
      id: 1,
      name: "QueenBee_Kyct",
      description: "Co-líder visionaria del clan más grande y expansivo de nuestra comunidad, cautivó a audiencias masivas con transmisiones llenas de dinamismo, creatividad desbordante y un espíritu vibrante que mantuvo a miles enganchados semana tras semana. Su capacidad para crear contenido envolvente, organizar eventos memorables y conectar emocionalmente con los espectadores la ha convertido en un faro de inspiración y entretenimiento de calidad.",
      img: "img/recibidos/queen.png"
    },
    {
      id: 2,
      name: "iixxcieloxxii",
      description: "Verdadero motor de promoción masiva y crecimiento comunitario, su icónico y cuidadosamente diseñado stand se convirtió en un símbolo reconocible y emblemático dentro del juego, atrayendo a innumerables jugadores nuevos y revitalizando continuamente la experiencia colectiva. Su enfoque innovador en la creación de espacios visualmente atractivos y funcionales ha elevado los estándares de calidad y engagement dentro de nuestra plataforma.",
      img: "img/recibidos/cielo.png"
    },
    {
      id: 3,
      name: "Jossi",
      description: "Revolucionó el concepto de entretenimiento en directo con sesiones épicas dedicadas a la adquisición de brainrots, creando momentos virales, memes compartidos y una atmósfera de complicidad única con su audiencia. Su autenticidad desenfadada y su habilidad para transformar lo ordinario en extraordinario han generado una lealtad fanática y un seguimiento masivo que trasciende las barreras convencionales del streaming.",
      img: "img/influencers/jossi.png"
    },
    {
      id: 4,
      name: "GelyRoblox",
      description: "Estableció un nuevo paradigma de generosidad en tiempo real con sus emblemáticas transmisiones donde donaba significativas cantidades a seguidores y miembros de la comunidad, creando momentos de sorpresa, alegría genuina y oportunidades transformadoras. Su enfoque filantrópico del streaming ha demostrado que el entretenimiento puede ir de la mano con el apoyo tangible y el cambio positivo en la vida de las personas.",
      img: "img/influencers/gely.png"
    },
    {
      id: 5,
      name: "ROMAN",
      description: "Maestro de la dinamización comunitaria, llenó el calendario de eventos con ingeniosas dinámicas, juegos interactivos y transmisiones en directo que fomentaban la participación masiva y la sana competencia. Su capacidad para diseñar experiencias colaborativas, mantener altos niveles de energía y crear narrativas envolventes ha sido fundamental para fortalecer el tejido social de nuestra comunidad.",
      img: "img/influencers/roman.png"
    },
    {
      id: 6,
      name: "MOONCITA",
      description: "Pionera en la integración de la filantropía con el entretenimiento en vivo, sus sesiones de donaciones en directo no solo proporcionaron apoyo económico a numerosos miembros, sino que también establecieron un modelo replicable de cómo el contenido digital puede ser una fuerza para el bien colectivo. Su enfoque ha inspirado a toda una generación de creadores a incorporar la solidaridad en su propuesta de valor.",
      img: "img/influencers/moon.png"
    },
    {
      id: 7,
      name: "Jotita1M",
      description: "Arquitecto del conocimiento comunitario a través de tutoriales detallados, explicaciones accesibles y guías comprensivas que ayudaron a miles de personas a entender mecánicas complejas del juego y a integrarse plenamente en la comunidad. Su labor educativa, combinada con una promoción masiva efectiva, ha sido instrumental en la reducción de la curva de aprendizaje y en la expansión sostenida de nuestra base de usuarios.",
      img: "img/influencers/jotita.png"
    }
  ],

  clanes: [
    {
      id: 1,
      name: "Kyct",
      description: "Coronado de manera unánime como el clan más grande, activo e influyente del año, Kyct representa la culminación del espíritu comunitario con una familia digital que supera los 120 miembros activos y comprometidos. Su liderazgo ejemplar, organización militar, participación protagónica en eventos solidarios y capacidad para mantener altísimos niveles de engagement los convierte en el modelo arquetípico de lo que una comunidad organizada puede lograr cuando une fuerzas, talentos y voluntades hacia objetivos comunes.",
      img: "img/clanes/kyct.png"
    },
    {
      id: 2,
      name: "RWR",
      description: "Destacó de manera excepcional por su estructura organizativa ejemplar, crecimiento sostenido y metódico, y por erigirse como un pilar fundamental de acogida, orientación y guía para nuevos miembros. Bajo el liderazgo visionario de su fundador RWR_Noctaire, este clan ha forjado un sentido de pertenencia único, estableciendo protocolos de mentoría, sistemas de apoyo interno y una cultura de excelencia que los posiciona como referentes indiscutibles en la construcción de comunidades saludables y progresivas.",
      img: "img/clanes/rwr.png"
    }
  ],

  moderadores: [
    {
      id: 1,
      name: "Zerian7w7",
      description: "Moderador ejemplar y paragon de la imparcialidad administrativa, cuya ecuanimidad legendaria, dedicación inquebrantable y sabiduría resolutiva fueron elementos claves para diluir conflictos, mediar disputas complejas y mantener la armonía social durante todo el año calendario. Su enfoque metódico, combinado con una empatía genuina, ha establecido un estándar dorado para la resolución de conflictos en entornos digitales complejos y diversos.",
      img: "img/moderadores/zerian.png"
    },
    {
      id: 2,
      name: "Kain3873",
      description: "Reconocido de manera unánime por su compromiso inquebrantable con los ideales comunitarios y su presencia diaria constante, ofreciendo un apoyo silencioso pero fundamental que fortaleció los cimientos estructurales y emocionales de nuestra comunidad. Su disponibilidad perpetua, combinada con un discernimiento excepcional, lo ha convertido en el primer recurso tanto para usuarios novatos como veteranos en busca de orientación y solución.",
      img: "img/donadores/inc.png"
    },
    {
      id: 3,
      name: "ImNotServi",
      description: "Moderador paradigmático cuya combinación única de firmeza en la aplicación de normas y calidez en el trato interpersonal resolvió conflictos con una imparcialidad envidiable mientras mantenía el orden estructural y la cohesión social durante todo el ciclo anual. Su capacidad para equilibrar la necesaria rigidez regulatoria con una aproximación humana y comprensiva ha sido fundamental para la salud del ecosistema comunitario.",
      img: "img/moderadores/servi.png"
    },
    {
      id: 4,
      name: "Pepita56",
      description: "Distinguida por su dedicación diaria ejemplar y su apoyo constante e incondicional a cada faceta de la comunidad, desde los eventos más masivos hasta las interacciones más cotidianas. Su labor ha sido el cemento invisible que mantiene unida la estructura social, prestando atención tanto a las grandes problemáticas como a los pequeños detalles que en conjunto definen la calidad de la experiencia comunitaria.",
      img: "img/moderadores/pepita.png"
    },
    {
      id: 5,
      name: "Nooxthel73",
      description: "Moderador ejemplar cuya aproximación sistemática a la resolución de conflictos, combinada con una imparcialidad inquebrantable y una paciencia legendaria, mantuvo el orden estructural, la justicia procedimental y la armonía relacional durante todo el año. Su metodología ha sido estudiada y emulada por nuevos moderadores como modelo de eficacia administrativa con rostro humano.",
      img: "img/donadores/inc.png"
    },
    {
      id: 6,
      name: "Britsy_noway2",
      description: "Reconocido por su dedicación diaria meticulosa y su apoyo constante, proactivo y anticipatorio a las necesidades siempre cambiantes de la comunidad. Su capacidad para identificar potenciales conflictos antes de que escalen, combinada con su compromiso con el desarrollo positivo de cada miembro, lo ha establecido como un guardian preventivo más que reactivo del bienestar colectivo.",
      img: "img/donadores/inc.png"
    }
  ]
};

    // ============================================================================
    // SISTEMA DE LA APLICACIÓN (NO MODIFICAR A MENOS QUE SEPAS LO QUE HACES)
    // ============================================================================

    // Estado de la aplicación
    let currentCategory = null;
    let currentNomineeIndex = 0;
    let currentNominees = [];

    // Inicializar la aplicación
    document.addEventListener('DOMContentLoaded', () => {
      // Configurar estadísticas
      document.getElementById('totalMembers').textContent = TOTAL_MEMBERS.toLocaleString() + '+';
      
      // Crear partículas doradas
      createGoldParticles();
      
      // Generar categorías automáticamente
      generateCategories();
      
      // Configurar navegación
      setupNavigation();
      
      // Configurar votación
      setupVoting();
      
      // Configurar modales
      setupModals();
      
      // Configurar swipe para móvil
      setupSwipe();
    });

    // ===== FUNCIONES DEL SISTEMA =====

    function createGoldParticles() {
      const container = document.getElementById('goldParticles');
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'gold-particle';
        
        const size = Math.random() * 2 + 1;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = '100%';
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
      }
    }

    function generateCategories() {
      const categoriesGrid = document.getElementById('categoriesGrid');
      categoriesGrid.innerHTML = '';
      
      CATEGORIES.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = category.id;
        
        // Verificar si ya se votó en esta categoría
        const voteData = getVoteData(category.id);
        if (voteData) {
          categoryCard.classList.add('voted');
        }
        
        categoryCard.innerHTML = `
          <div class="category-icon">
            <i class="${category.icon}"></i>
          </div>
          <h3 class="category-name">${category.name}</h3>
          <p class="category-desc">${category.description}</p>
        `;
        
        categoriesGrid.appendChild(categoryCard);
      });
    }

    function showScreen(screenId) {
      document.getElementById('heroScreen').classList.add('hidden');
      document.getElementById('categoriesScreen').classList.add('hidden');
      document.getElementById('nomineeScreen').classList.add('hidden');
      
      document.getElementById(screenId).classList.remove('hidden');
    }

    function showNomineeScreen(categoryId) {
      currentCategory = CATEGORIES.find(c => c.id === categoryId);
      currentNomineeIndex = 0;
      currentNominees = NOMINEES[categoryId] || [];
      
      // Verificar si ya votó en esta categoría
      const voteData = getVoteData(categoryId);
      if (voteData) {
        showAlreadyVotedModal(voteData);
        return;
      }
      
      if (currentNominees.length > 0) {
        updateNomineeDisplay();
        showScreen('nomineeScreen');
      }
    }

    function updateNomineeDisplay() {
      if (currentNominees.length === 0) return;
      
      const nominee = currentNominees[currentNomineeIndex];
      const total = currentNominees.length;
      
      document.getElementById('nomineeImage').src = nominee.img;
      document.getElementById('nomineeName').textContent = nominee.name;
      document.getElementById('nomineeCategory').textContent = currentCategory.title;
      document.getElementById('nomineeDescription').textContent = nominee.description;
      
      document.getElementById('currentIndex').textContent = currentNomineeIndex + 1;
      document.getElementById('totalNominations').textContent = total;
      
      const prevBtn = document.getElementById('prevButton');
      const nextBtn = document.getElementById('nextButton');
      
      prevBtn.disabled = currentNomineeIndex === 0;
      prevBtn.style.opacity = currentNomineeIndex === 0 ? '0.3' : '1';
      
      nextBtn.disabled = currentNomineeIndex === total - 1;
      nextBtn.style.opacity = currentNomineeIndex === total - 1 ? '0.3' : '1';
    }

    function nextNominee() {
      if (currentNomineeIndex < currentNominees.length - 1) {
        currentNomineeIndex++;
        updateNomineeDisplay();
      }
    }

    function prevNominee() {
      if (currentNomineeIndex > 0) {
        currentNomineeIndex--;
        updateNomineeDisplay();
      }
    }

    // ===== SISTEMA DE VOTACIÓN =====

    function getVoteData(categoryId) {
      return JSON.parse(localStorage.getItem(`vote_${categoryId}`));
    }

    function saveVoteData(categoryId, nominee, message = '') {
      const voteData = {
        categoryId: categoryId,
        categoryName: currentCategory.name,
        nomineeId: nominee.id,
        nomineeName: nominee.name,
        timestamp: new Date().toISOString(),
        message: message
      };
      
      localStorage.setItem(`vote_${categoryId}`, JSON.stringify(voteData));
      return voteData;
    }

    function updateCategoryCards() {
      document.querySelectorAll('.category-card').forEach(card => {
        const categoryId = card.dataset.category;
        const voteData = getVoteData(categoryId);
        
        if (voteData) {
          card.classList.add('voted');
        } else {
          card.classList.remove('voted');
        }
      });
    }

    function openConfirmationModal() {
      const nominee = currentNominees[currentNomineeIndex];
      
      document.getElementById('modalNomineeName').textContent = nominee.name;
      document.getElementById('modalCategoryName').textContent = currentCategory.name;
      document.getElementById('voteMessage').value = '';
      
      document.getElementById('confirmationModal').classList.add('active');
    }

    function closeConfirmationModal() {
      document.getElementById('confirmationModal').classList.remove('active');
    }

    function submitVote() {
      const nominee = currentNominees[currentNomineeIndex];
      const message = document.getElementById('voteMessage').value.trim();
      
      // Guardar voto localmente
      const voteData = saveVoteData(currentCategory.id, nominee, message);
      
      // Enviar a Discord Webhook
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [{
            title: "🏆 NUEVO VOTO — DonationBlox 2025",
            description: `**Categoría:** ${currentCategory.name}\n**Nominado:** ${nominee.name}\n**ID:** ${nominee.id}\n**Mensaje:** ${message || '(Sin mensaje)'}`,
            color: 0xD4AF37,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Sistema de Votación DonationBlox 2025"
            }
          }]
        })
      }).catch(err => console.log("Error al enviar voto:", err));
      
      // Cerrar modal y mostrar éxito
      closeConfirmationModal();
      setTimeout(() => {
        showScreen('categoriesScreen');
        updateCategoryCards();
        document.getElementById('successModal').classList.add('active');
      }, 300);
    }

    function showAlreadyVotedModal(voteData) {
      const detailsDiv = document.getElementById('votedDetails');
      const date = new Date(voteData.timestamp);
      const formattedDate = date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      detailsDiv.innerHTML = `
        <div style="color: rgba(255,255,255,0.9); margin-bottom: 8px;"><strong>Categoría:</strong> ${voteData.categoryName}</div>
        <div style="color: rgba(255,255,255,0.9); margin-bottom: 8px;"><strong>Nominado:</strong> ${voteData.nomineeName}</div>
        <div style="color: rgba(255,255,255,0.9); margin-bottom: 8px;"><strong>Fecha:</strong> ${formattedDate}</div>
        ${voteData.message ? `<div style="color: rgba(255,255,255,0.9); margin-top: 10px; font-style: italic;">"${voteData.message}"</div>` : ''}
      `;
      
      document.getElementById('alreadyVotedModal').classList.add('active');
    }

    // ===== CONFIGURACIÓN DE EVENTOS =====

    function setupNavigation() {
      document.getElementById('startVote').addEventListener('click', () => showScreen('categoriesScreen'));
      document.getElementById('backToHome').addEventListener('click', () => showScreen('heroScreen'));
      document.getElementById('exitCategory').addEventListener('click', () => showScreen('categoriesScreen'));
      
      document.getElementById('prevButton').addEventListener('click', prevNominee);
      document.getElementById('nextButton').addEventListener('click', nextNominee);
      
      // Selección de categorías
      document.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
          const categoryId = categoryCard.dataset.category;
          const voteData = getVoteData(categoryId);
          
          if (voteData) {
            showAlreadyVotedModal(voteData);
          } else {
            showNomineeScreen(categoryId);
          }
        }
      });
    }

    function setupVoting() {
      document.getElementById('voteButton').addEventListener('click', openConfirmationModal);
      document.getElementById('confirmVote').addEventListener('click', submitVote);
      document.getElementById('cancelVote').addEventListener('click', closeConfirmationModal);
      document.getElementById('continueVoting').addEventListener('click', () => {
        document.getElementById('successModal').classList.remove('active');
      });
    }

    function setupModals() {
      document.getElementById('closeVotedModal').addEventListener('click', () => {
        document.getElementById('alreadyVotedModal').classList.remove('active');
      });
      
      // Cerrar modales al hacer clic fuera
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
          }
        });
      });
    }

    function setupSwipe() {
      let touchStartX = 0;
      
      document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });
      
      document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
          nextNominee();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
          prevNominee();
        }
      });
    }