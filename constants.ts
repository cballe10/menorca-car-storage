import { Content, Language } from './types';

export const PHONE_NUMBER = "611 711 581";
export const EMAIL_ADDRESS = "mahoncarstorage@gmail.com";

export const CONTENT: Record<Language, Content> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      about: "About Us"
    },
    hero: {
      title: "Secure Car Storage in Menorca",
      subtitle: "Professional, long-term vehicle care in Mahón. We look after your car while you're away — and deliver it straight to the airport when you return.",
      cta: "Get a Quote",
      tagline: "Menorca's Premium Car Storage",
      viewServices: "Our Services"
    },
    trustBar: {
      stats: [
        { value: "550€", label: "12-Month Storage" },
        { value: "24/7", label: "Secure Facility" },
        { value: "MAH", label: "Airport Delivery" },
        { value: "100%", label: "Peace of Mind" }
      ]
    },
    services: {
      sectionTitle: "What We Offer",
      heading: "Complete Vehicle Care in Menorca",
      subheading: "From secure long-term storage to airport handover — we handle everything so you don't have to.",
      items: [
        {
          title: "Secure Car Storage",
          description: "Indoor and outdoor car storage in Menorca at our monitored facility near Mahón. Annual storage from just 550€ + IVA. Flexible options by day, week, or month also available."
        },
        {
          title: "ITV Management",
          description: "We handle the full ITV inspection process on your behalf, so your vehicle is road-legal and ready the moment you arrive in Menorca."
        },
        {
          title: "Battery Care",
          description: "Regular battery checks and trickle charging to ensure your car starts reliably after months in storage."
        },
        {
          title: "Cleaning & Valet",
          description: "Optional interior and exterior cleaning so your car is spotless and fresh for the start of your holiday."
        },
        {
          title: "Airport Delivery",
          description: "We drop off and collect your car directly at Menorca Airport (MAH) — no taxis, no transfers, just seamless travel."
        },
        {
          title: "Maintenance Checks",
          description: "Tyre pressure, fluid levels, and periodic engine run-ups to keep your vehicle in perfect mechanical condition."
        }
      ]
    },
    howItWorks: {
      sectionTitle: "Simple Process",
      heading: "How It Works",
      steps: [
        {
          step: "01",
          title: "Contact Us",
          description: "Get in touch by phone, WhatsApp, or email. We'll discuss your needs and provide a personalised quote for car storage in Menorca."
        },
        {
          step: "02",
          title: "Drop Off Your Car",
          description: "Leave your vehicle with us at our secure facility in Mahón, or arrange an airport handover at the end of your stay."
        },
        {
          step: "03",
          title: "We Take Care of Everything",
          description: "Battery care, ITV, cleaning, maintenance checks — we keep your car in perfect condition while you're away."
        },
        {
          step: "04",
          title: "We Deliver to You",
          description: "When you return to Menorca, your car is waiting for you at the airport. Fresh, ready, and perfectly maintained."
        }
      ]
    },
    seoSection: {
      heading: "Car Storage in Menorca — Trusted by Second-Home Owners",
      body: [
        "Mahon Car Storage is Menorca's dedicated vehicle storage solution for property owners and holiday homeowners who need safe, professional long-term parking on the island. Based in Mahón (Maó), we serve clients across the whole of Menorca — from Ciutadella to Es Mercadal.",
        "Our car storage in Menorca is fully secure, with both indoor and outdoor options to suit every vehicle and budget. Whether you need storage for a few weeks or the full year, we offer flexible pricing with transparent rates — including our popular 12-month package from 550€ + IVA.",
        "One of our most valued services is airport delivery. We bring your car directly to Menorca Airport (MAH) when you fly in, saving you the hassle and cost of taxis or hire cars. When you leave, simply hand the keys back and we'll return your vehicle safely to storage.",
        "We also offer optional services including ITV management, battery maintenance, valet cleaning, tyre and fluid checks — everything needed to keep your car roadworthy and ready for your next visit. Contact us today for a no-obligation quote."
      ]
    },
    contact: {
      heading: "Get in Touch",
      description: "Ready to store your car in Menorca? Have questions about pricing or airport delivery? We'd love to hear from you.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      messageLabel: "How can we help?",
      submitButton: "Send Message",
      successMessage: "Thank you! We'll be in touch shortly.",
      callUs: "Call or WhatsApp",
      emailUs: "Email Us",
      location: "Location",
      whatsapp: "Available via WhatsApp",
      locationText: "Mahón (Maó), Menorca\nBalearic Islands, Spain"
    },
    ai: {
      title: "Ask a Question",
      placeholder: "Ask about pricing, airport delivery, ITV...",
      disclaimer: "Powered by Google Gemini. Responses are automated.",
      welcome: "Hi! I'm the Mahon Car Storage assistant. Ask me about our car storage services in Menorca, pricing, or airport delivery."
    }
  },

  [Language.ES]: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      contact: "Contacto",
      about: "Nosotros"
    },
    hero: {
      title: "Custodia de Vehículos en Menorca",
      subtitle: "Cuidado profesional para su vehículo en Mahón. Guardamos su coche mientras usted está fuera — y lo entregamos directamente en el aeropuerto a su regreso.",
      cta: "Solicitar Presupuesto",
      tagline: "Almacenamiento Premium de Coches en Menorca",
      viewServices: "Nuestros Servicios"
    },
    trustBar: {
      stats: [
        { value: "550€", label: "Almacenamiento 12 Meses" },
        { value: "24/7", label: "Instalaciones Seguras" },
        { value: "MAH", label: "Entrega en Aeropuerto" },
        { value: "100%", label: "Tranquilidad Total" }
      ]
    },
    services: {
      sectionTitle: "Lo Que Ofrecemos",
      heading: "Cuidado Completo del Vehículo en Menorca",
      subheading: "Desde almacenamiento seguro hasta entrega en el aeropuerto — nos encargamos de todo.",
      items: [
        {
          title: "Almacenamiento Seguro",
          description: "Opciones de almacenamiento interior y exterior en instalaciones vigiladas cerca de Mahón. Almacenamiento anual desde 550€ + IVA. También disponible por días, semanas o meses."
        },
        {
          title: "Gestión de ITV",
          description: "Gestionamos todo el proceso de la ITV por usted, para que su vehículo esté en regla cuando llegue a Menorca."
        },
        {
          title: "Cuidado de Batería",
          description: "Revisiones periódicas y carga de mantenimiento para garantizar que su coche arranque perfectamente tras meses de almacenamiento."
        },
        {
          title: "Limpieza y Lavado",
          description: "Limpieza interior y exterior opcional para que su coche esté impecable al inicio de sus vacaciones."
        },
        {
          title: "Entrega en Aeropuerto",
          description: "Entregamos y recogemos su coche directamente en el Aeropuerto de Menorca (MAH) — sin taxis, sin trasbordos."
        },
        {
          title: "Revisiones de Mantenimiento",
          description: "Control de presión de neumáticos, niveles de fluidos y arranques periódicos del motor para mantener su vehículo en perfectas condiciones."
        }
      ]
    },
    howItWorks: {
      sectionTitle: "Proceso Sencillo",
      heading: "Cómo Funciona",
      steps: [
        {
          step: "01",
          title: "Contáctenos",
          description: "Póngase en contacto por teléfono, WhatsApp o email. Le ofreceremos un presupuesto personalizado para el almacenamiento de su coche en Menorca."
        },
        {
          step: "02",
          title: "Entregue su Coche",
          description: "Déjenos su vehículo en nuestras instalaciones en Mahón, o acuerde la entrega en el aeropuerto al final de su estancia."
        },
        {
          step: "03",
          title: "Nos Encargamos de Todo",
          description: "Batería, ITV, limpieza, revisiones — mantenemos su coche en perfectas condiciones mientras usted está fuera."
        },
        {
          step: "04",
          title: "Le Llevamos el Coche",
          description: "Cuando regrese a Menorca, su coche le espera en el aeropuerto. Listo y en perfecto estado."
        }
      ]
    },
    seoSection: {
      heading: "Custodia de Vehículos en Menorca — La Solución para Propietarios de Segunda Residencia",
      body: [
        "Mahon Car Storage es la solución de almacenamiento de vehículos en Menorca para propietarios de segunda residencia que necesitan un aparcamiento seguro y profesional en la isla. Con base en Mahón (Maó), atendemos a clientes de toda Menorca — desde Ciutadella hasta Es Mercadal.",
        "Nuestro almacenamiento de coches en Menorca es totalmente seguro, con opciones interiores y exteriores para todo tipo de vehículo y presupuesto. Desde almacenamiento de semanas hasta contratos anuales, ofrecemos precios flexibles y transparentes, incluyendo nuestro popular paquete de 12 meses desde 550€ + IVA.",
        "Uno de nuestros servicios más valorados es la entrega en el aeropuerto de Menorca. Llevamos su coche directamente al Aeropuerto de Menorca (MAH) cuando aterriza, evitándole el coste y la molestia de taxis o coches de alquiler.",
        "También ofrecemos servicios adicionales como gestión de ITV, mantenimiento de batería, limpieza, revisión de neumáticos y fluidos — todo lo necesario para mantener su coche a punto. Contáctenos hoy para un presupuesto sin compromiso."
      ]
    },
    contact: {
      heading: "Contacte con Nosotros",
      description: "¿Listo para guardar su coche en Menorca? ¿Preguntas sobre precios o entrega en aeropuerto? Estaremos encantados de atenderle.",
      nameLabel: "Su Nombre",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono",
      messageLabel: "¿Cómo podemos ayudarle?",
      submitButton: "Enviar Mensaje",
      successMessage: "¡Gracias! Nos pondremos en contacto pronto.",
      callUs: "Llame o WhatsApp",
      emailUs: "Envíenos un Email",
      location: "Ubicación",
      whatsapp: "Disponible vía WhatsApp",
      locationText: "Mahón (Maó), Menorca\nIslas Baleares, España"
    },
    ai: {
      title: "Asistente Virtual",
      placeholder: "Pregunte sobre precios, entrega en aeropuerto, ITV...",
      disclaimer: "Impulsado por Google Gemini. Respuestas automatizadas.",
      welcome: "¡Hola! Soy el asistente de Mahon Car Storage. Pregúnteme sobre nuestros servicios de custodia de vehículos en Menorca, precios o entrega en aeropuerto."
    }
  },

  [Language.FR]: {
    nav: {
      home: "Accueil",
      services: "Services",
      contact: "Contact",
      about: "À Propos"
    },
    hero: {
      title: "Garde-Auto Sécurisé à Minorque",
      subtitle: "Prise en charge professionnelle de votre véhicule à Mahón. Nous gardons votre voiture pendant votre absence — et la livrons directement à l'aéroport à votre retour.",
      cta: "Demander un Devis",
      tagline: "Le Stockage Premium à Minorque",
      viewServices: "Nos Services"
    },
    trustBar: {
      stats: [
        { value: "550€", label: "Stockage 12 Mois" },
        { value: "24/7", label: "Site Sécurisé" },
        { value: "MAH", label: "Livraison Aéroport" },
        { value: "100%", label: "Tranquillité d'Esprit" }
      ]
    },
    services: {
      sectionTitle: "Nos Prestations",
      heading: "Prise en Charge Complète à Minorque",
      subheading: "Du stockage sécurisé à la livraison à l'aéroport — nous gérons tout à votre place.",
      items: [
        {
          title: "Stockage Sécurisé",
          description: "Options de stockage intérieur et extérieur dans notre site surveillé près de Mahón. Stockage annuel à partir de 550€ + TVA. Formules flexibles à la journée, semaine ou mois disponibles."
        },
        {
          title: "Gestion du Contrôle Technique",
          description: "Nous gérons l'intégralité du contrôle technique (ITV) à votre place, afin que votre véhicule soit en règle dès votre arrivée à Minorque."
        },
        {
          title: "Entretien de la Batterie",
          description: "Vérifications régulières et charge d'entretien pour garantir un démarrage fiable après plusieurs mois de stockage."
        },
        {
          title: "Nettoyage & Valet",
          description: "Nettoyage intérieur et extérieur optionnel pour que votre voiture soit impeccable dès le début de vos vacances."
        },
        {
          title: "Livraison à l'Aéroport",
          description: "Nous déposons et récupérons votre voiture directement à l'aéroport de Minorque (MAH) — sans taxi, sans transfert."
        },
        {
          title: "Vérifications Mécaniques",
          description: "Pression des pneus, niveaux des fluides et démarrages périodiques pour maintenir votre véhicule en parfait état mécanique."
        }
      ]
    },
    howItWorks: {
      sectionTitle: "Processus Simple",
      heading: "Comment Ça Marche",
      steps: [
        {
          step: "01",
          title: "Contactez-Nous",
          description: "Appelez-nous, envoyez un WhatsApp ou un email. Nous discuterons de vos besoins et vous proposerons un devis personnalisé."
        },
        {
          step: "02",
          title: "Déposez Votre Voiture",
          description: "Laissez votre véhicule dans notre site sécurisé à Mahón, ou organisez une remise à l'aéroport en fin de séjour."
        },
        {
          step: "03",
          title: "Nous Gérons Tout",
          description: "Batterie, contrôle technique, nettoyage, vérifications — nous maintenons votre voiture en parfait état pendant votre absence."
        },
        {
          step: "04",
          title: "Livraison à Votre Arrivée",
          description: "À votre retour à Minorque, votre voiture vous attend à l'aéroport. Propre, prête, parfaitement entretenue."
        }
      ]
    },
    seoSection: {
      heading: "Garde-Auto à Minorque — Le Service de Confiance pour les Propriétaires de Résidence Secondaire",
      body: [
        "Mahon Car Storage est le spécialiste du stockage de véhicules à Minorque pour les propriétaires de résidence secondaire ayant besoin d'un parking sécurisé et professionnel sur l'île. Basés à Mahón (Maó), nous accueillons des clients de toute l'île — de Ciutadella à Es Mercadal.",
        "Notre garde-auto à Minorque est entièrement sécurisé, avec des options intérieures et extérieures adaptées à tous les véhicules et budgets. Qu'il s'agisse de quelques semaines ou d'une année complète, nous proposons des tarifs flexibles et transparents, dont notre formule annuelle à partir de 550€ + TVA.",
        "L'un de nos services les plus appréciés est la livraison à l'aéroport de Minorque. Nous amenons votre voiture directement à l'aéroport (MAH) lors de votre arrivée, vous évitant taxis et voitures de location.",
        "Nous proposons également des services optionnels : gestion du contrôle technique, entretien de la batterie, nettoyage, vérification des pneus et des niveaux — tout ce qu'il faut pour garder votre voiture en parfait état. Contactez-nous dès aujourd'hui pour un devis sans engagement."
      ]
    },
    contact: {
      heading: "Contactez-Nous",
      description: "Vous souhaitez stocker votre voiture à Minorque ? Des questions sur les tarifs ou la livraison à l'aéroport ? Nous sommes à votre disposition.",
      nameLabel: "Votre Nom",
      emailLabel: "Adresse Email",
      phoneLabel: "Numéro de Téléphone",
      messageLabel: "Comment pouvons-nous vous aider ?",
      submitButton: "Envoyer le Message",
      successMessage: "Merci ! Nous vous recontacterons très bientôt.",
      callUs: "Appelez ou WhatsApp",
      emailUs: "Envoyez un Email",
      location: "Localisation",
      whatsapp: "Disponible via WhatsApp",
      locationText: "Mahón (Maó), Minorque\nÎles Baléares, Espagne"
    },
    ai: {
      title: "Assistant Virtuel",
      placeholder: "Questions sur les tarifs, la livraison, le contrôle technique...",
      disclaimer: "Propulsé par Google Gemini. Réponses automatisées.",
      welcome: "Bonjour ! Je suis l'assistant de Mahon Car Storage. Posez-moi vos questions sur notre service de garde-auto à Minorque, les tarifs ou la livraison à l'aéroport."
    }
  }
};
