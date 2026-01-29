const imageUrl = (name: string) => "/mocks/" + name;

export const brandList: {
  image: string;
  name: string;
}[] = [
  {
    image: imageUrl("brand-niscala.svg"),
    name: "Niscala.io",
  },
  {
    image: imageUrl("brand-samtiv.svg"),
    name: "SAMTIV",
  },
  {
    image: imageUrl("brand-iea.svg"),
    name: "IEA.",
  },
  {
    image: imageUrl("brand-slavica.svg"),
    name: "SLAVICA",
  },
  {
    image: imageUrl("brand-unica.svg"),
    name: "UNICA",
  },
  {
    image: imageUrl("brand-boking.svg"),
    name: "BOKING",
  },
];

export const heroData = {
  title: "NESSO DIGITALE",
  subtitle: "LAB",
  brands: brandList,
  brandSectionTitle: "Brands that work with us",
  image: imageUrl("hero-image.png"),
};

export const aboutData = {
  sectionTitle: "Nesso Digitale",
  image: imageUrl("about-cover.jpg"),
  content: [
    {
      title: "Due servizi, un solo partner",
      accent: true,
      content:
        " Sviluppiamo software su misura e forniamo sviluppatori e DevOps on-demand per rafforzare il tuo team.",
    },
    {
      title: "Qualità da software house, flessibilità globale",
      content:
        "Un approccio ibrido che unisce standard da software house e una rete internazionale di talenti.",
    },
    {
      title: "Focus totale sul tuo business",
      content:
        "Un referente locale e un team globale lavorano insieme per trasformare le esigenze in soluzioni.",
    },
  ],
};

export const servicesData = {
  sectionTItle: "I nostri servizi",
  sectionDescription:
    "Questi servizi sono progettati per aiutare i clienti a costruire e far crescere il proprio brand attraverso strategie creative e soluzioni digitali innovative.",
  content: [
    {
      title: "Progetti su misura",
      content:
        "Progettiamo e sviluppiamo applicazioni web e gestionali personalizzate, costruite sulle reali esigenze del tuo business.",
    },
    {
      title: "Team on-demand",
      content:
        "Rafforza il tuo team con sviluppatori e DevOps esperti, pronti a integrarsi rapidamente nei tuoi processi.",
    },
  ],
};

export const portfolioData = {
  sectionTitle: "Progetti digitali di cui siamo orgogliosi",
  sectionDescription:
    "Piattaforma e-commerce scalabile, progettata per offrire un’esperienza utente fluida e pagamenti sicuri.",
  items: [
    {
      title: "AC Milan App",
      description:
        "An official mobile experience crafted to bring fans closer to the club through performance-driven design",
      cta: "Official App Milan",
      image: imageUrl("portfolio-1.png"),
    },
    {
      title: "Showcase 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe sequi vero rem illum aut sunt sapiente ",
      cta: "Official Showcase 2",
      image: imageUrl("portfolio-1.png"),
    },
    {
      title: "Showcase 3",
      description:
        "Magni esse animi unde qui sed atque natus vitae repellat itaque, pariatur, aperiam eligendi quam fuga, ",
      cta: "Visit Showcase 3",
      image: imageUrl("portfolio-1.png"),
    },
    {
      title: "Showcase 4",
      description:
        "Sapiente nihil nemo ipsam placeat iusto, necessitatibus itaque at laboriosam labore ducimus sint porro",
      cta: "Official Showcase 3",
      image: imageUrl("portfolio-1.png"),
    },
  ],
};

export const menuItems = [
  {
    href: "/",
    label: "Home",
  },
  { href: "/servizi", label: "Servizi" },
  { href: "/settori", label: "Settori" },
  {
    href: "/metodo-di-lavoro",
    label: "Metodo dilavaro",
  },
  { href: "/chi-siamo", label: "Chi siamo" },
];

export const transformationData = {
  sectionTitle: "La trasformazione digitale in azione",
  sectionDescription:
    "Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili.",
  image: imageUrl("transformation-cover.png"),
  content: [
    {
      title: "Integrazione sito web e CRM",
      content:
        "Sincronizzazione automatica dei lead e tempi di risposta ridotti da ore a pochi minuti.",
    },
    {
      title: "Automazione dei report di vendita mensili",
      content:
        "Tempo di reporting ridotto del 70%, con un risparmio di circa 40 ore uomo al mese.",
    },
    {
      title: "Gestionale leggero su misura",
      content:
        "Processi centralizzati e attività amministrative quotidiane ridotte del 50%.",
    },
  ],
};

export const transformationStepData = {
  sectionTitle: "La trasformazione digitale, passo dopo passo",
  sectionDescription:
    "Esempi pratici di automazione che semplificano le attività operative e migliorano le performance aziendali.",

  content: [
    {
      title: "ArchiTech Digital Design —",
      content:
        "Crafted ArchiTech Application. Includes 80+ layouts and style guides.",
      image: imageUrl("transformation-step-thumbnail.jpg"),
    },
    {
      title: "ArchiTech Digital Design —",
      content:
        "Crafted ArchiTech Application. Includes 80+ layouts and style guides.",
      image: imageUrl("transformation-step-thumbnail.jpg"),
    },
    {
      title: "ArchiTech Digital Design —",
      content:
        "Crafted ArchiTech Application. Includes 80+ layouts and style guides.",
      image: imageUrl("transformation-step-thumbnail.jpg"),
    },
  ],
};

export const collaborationData = {
  title: "Interessato a collaborare con noi?",
  subtitle: "Attualmente disponibili per nuovi progetti",
  content:
    "Aiutiamo aziende e team a progettare e sviluppare soluzioni digitali efficaci. Raccontaci il tuo progetto e scopriamo insieme come possiamo trasformare le tue idee in risultati concreti.",
};
