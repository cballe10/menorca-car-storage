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
      subtitle: "Professional care for your vehicle while you are away. Located in Mahon, serving the entire island.",
      cta: "Get a Quote"
    },
    services: {
      heading: "Our Premium Services",
      subheading: "Beyond just parking, we offer complete care for your vehicle.",
      items: [
        {
          title: "Secure Storage",
          description: "Indoor and outdoor storage options in a secure, monitored facility near Mahon. 12 months storage for 550€ + IVA."
        },
        {
          title: "ITV Management",
          description: "We handle the entire ITV (inspection) process for you, ensuring your car is road-legal when you arrive."
        },
        {
          title: "Battery Care",
          description: "Regular battery checks and trickle charging to ensure your car starts instantly upon your return."
        },
        {
          title: "Cleaning & Valet",
          description: "Optional washing and interior cleaning services so your car is pristine for your holiday."
        },
        {
          title: "Airport Handover",
          description: "Convenient drop-off and pick-up arrangements available for seamless travel."
        },
        {
          title: "Maintenance Checks",
          description: "Tyre pressure checks, fluid top-ups, and engine run-ups to keep mechanics in shape."
        }
      ]
    },
    contact: {
      heading: "Contact Us",
      description: "Ready to store your car? Have questions about the ITV? Send us a message.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      messageLabel: "How can we help?",
      submitButton: "Send Message",
      successMessage: "Thank you! We will be in touch shortly."
    },
    ai: {
      title: "Ask AI Assistant",
      placeholder: "Ask about ITV, pricing, or location...",
      disclaimer: "Powered by Google Gemini. Responses are automated.",
      welcome: "Hi! I'm the Mahon Car Storage virtual assistant. How can I help you today?"
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
      title: "Pupilaje de Coches en Menorca",
      subtitle: "Cuidado profesional para su vehículo mientras está fuera. Situados en Mahón, sirviendo a toda la isla.",
      cta: "Solicitar Presupuesto"
    },
    services: {
      heading: "Nuestros Servicios",
      subheading: "Más que un simple parking, ofrecemos cuidado completo para su vehículo.",
      items: [
        {
          title: "Almacenamiento Seguro",
          description: "Opciones de almacenamiento interior y exterior en instalaciones seguras y vigiladas cerca de Mahón. 12 meses por 550€ + IVA."
        },
        {
          title: "Gestión de ITV",
          description: "Nos encargamos de todo el proceso de la ITV, asegurando que su coche esté legal al llegar."
        },
        {
          title: "Cuidado de Batería",
          description: "Revisiones periódicas y carga de mantenimiento para asegurar que su coche arranque al instante."
        },
        {
          title: "Limpieza y Lavado",
          description: "Servicios opcionales de lavado exterior e interior para que su coche esté impecable."
        },
        {
          title: "Entrega en Aeropuerto",
          description: "Acuerdos convenientes de recogida y entrega para un viaje sin complicaciones."
        },
        {
          title: "Mantenimiento Básico",
          description: "Control de presión de neumáticos, niveles de fluidos y arranque de motor periódico."
        }
      ]
    },
    contact: {
      heading: "Contacte con Nosotros",
      description: "¿Listo para guardar su coche? ¿Preguntas sobre la ITV? Envíenos un mensaje.",
      nameLabel: "Su Nombre",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono",
      messageLabel: "¿Cómo podemos ayudarle?",
      submitButton: "Enviar Mensaje",
      successMessage: "¡Gracias! Nos pondremos en contacto pronto."
    },
    ai: {
      title: "Asistente Virtual",
      placeholder: "Pregunte sobre ITV, precios o ubicación...",
      disclaimer: "Impulsado por Google Gemini. Respuestas automatizadas.",
      welcome: "¡Hola! Soy el asistente virtual de Mahon Car Storage. ¿En qué puedo ayudarle hoy?"
    }
  }
};