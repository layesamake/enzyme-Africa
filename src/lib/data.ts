export const SECTIONS = {
    USAGES: "usages",
    FORMATS: "formats",
    CONSEILS: "conseils",
    FAQ: "faq",
    COMMANDE: "commande",
  };
  
  export const PROBLEMS = [
    {
      id: "insectes",
      icon: "Bug",
      title: "Insectes & ravageurs",
      text: "Besoin d'une approche plus naturelle pour repousser certains insectes et limiter les agressions chimiques."
    },
    {
      id: "sols",
      icon: "Sprout",
      title: "Sols fatigués",
      text: "Des cultures qui manquent de vigueur, des terres appauvries et un besoin de renforcer progressivement le sol."
    },
    {
      id: "odeurs",
      icon: "Wind",
      title: "Mauvaises odeurs",
      text: "Des espaces d'élevage ou d'habitation qui nécessitent un assainissement régulier et pratique."
    },
    {
      id: "dechets",
      icon: "Trash2",
      title: "Déchets organiques",
      text: "Des résidus alimentaires, lisiers ou déchets biologiques à gérer plus sainement."
    }
  ];
  
  export const BENEFITS = [
    {
      title: "Fertilisation naturelle",
      text: "Accompagne naturellement la régénération et la vitalité des sols.",
      icon: "Leaf"
    },
    {
      title: "Désodorisation & assainissement",
      text: "Aide à maintenir des espaces plus propres et plus agréables.",
      icon: "Wind"
    },
    {
      title: "Répulsif biologique",
      text: "Contribue à repousser certains insectes et nuisibles.",
      icon: "ShieldAlert"
    },
    {
      title: "Solution écologique",
      text: "Favorise une démarche plus saine et moins dépendante des produits agressifs.",
      icon: "Recycle"
    }
  ];
  
  export const USE_CASES = [
    {
      title: "Agriculture",
      icon: "Tractor",
      text: "Pour accompagner les cultures dans une logique de production plus durable.",
      points: ["Fertilisation naturelle", "Protection végétale", "Vitalité organique"]
    },
    {
      title: "Élevage",
      icon: "Bird",
      text: "Améliorer l'environnement sanitaire des animaux et réduire les nuisances.",
      points: ["Réduction des odeurs", "Hygiène des espaces d'élevage", "Environnement plus sain"]
    },
    {
      title: "Environnement",
      icon: "TreePine",
      text: "Gestion des eaux, déchets et espaces nécessitant un entretien écologique.",
      points: ["Compostage", "Déchets organiques", "Entretien des lieux"]
    },
    {
      title: "Maison & Jardin",
      icon: "Home",
      text: "L'entretien courant des petits jardins et des espaces domestiques.",
      points: ["Assainissement", "Entretien naturel", "Jardinage écologique"]
    }
  ];
  
  export const PRODUCTS = [
    {
      id: "15ml",
      name: "Bouteille 15 ml",
      format: "15 ml",
      price: "3 000 F CFA",
      image: "/images/15ml.webp",
      fallbackImage: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=400&auto=format&fit=crop",
      description: "Le bon format pour essayer Enzyme Africa sans engagement lourd.",
      usage: "Usage test — petit jardin — première expérience",
      recommended: false
    },
    {
      id: "150ml",
      name: "Bouteille 150 ml",
      format: "150 ml",
      price: "30 000 F CFA",
      badge: "LE PLUS PRÉCIS",
      image: "/images/150ml.webp",
      fallbackImage: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop",
      description: "Le format idéal pour un usage régulier au jardin, à la ferme ou en petit élevage.",
      usage: "Agriculture — élevage — entretien régulier",
      recommended: true
    },
    {
      id: "200ml",
      name: "Bouteille 200 ml",
      format: "200 ml",
      price: "40 000 F CFA",
      image: "/images/200ml.webp",
      fallbackImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop",
      description: "Le meilleur choix pour les professionnels, les fermes et les utilisations fréquentes.",
      usage: "Production — espace large — usage intensif",
      recommended: false
    }
  ];
  
  export const USAGE_TIPS = [
    {
      title: "Fertilisation",
      text: "Dilution faible recommandée pour accompagner les sols sans excès. L'usage doit être progressif et adapté à la surface."
    },
    {
      title: "Harmonie végétale",
      text: "Usage en dilution adaptée pour favoriser la fraîcheur et accompagner la protection du feuillage."
    },
    {
      title: "Assainissement",
      text: "Utilisation pratique dans l'eau ou sur les zones à traiter pour contribuer à la désodorisation et à la propreté."
    }
  ];
  
  export const TESTIMONIALS = [
    {
      name: "Mamadou N.",
      profile: "Maraîcher",
      text: "J'utilise Enzyme Africa pour accompagner mes cultures dans une démarche plus naturelle. Le produit est simple à utiliser et pratique au quotidien."
    },
    {
      name: "Seydouba D.",
      profile: "Éleveur",
      text: "Je l'utilise lors du nettoyage de mes espaces d'élevage. L'environnement devient plus agréable et l'entretien est plus facile à gérer."
    },
    {
      name: "Abdoulaye K.",
      profile: "Agriculteur",
      text: "J'apprécie l'idée d'une solution plus douce pour mes cultures et mon espace de travail. C'est un produit utile dans une démarche durable."
    }
  ];
  
  export const FAQ_ITEMS = [
    {
      question: "Quel format choisir pour commencer ?",
      answer: "Le 15 ml est idéal pour tester. Le 150 ml convient à un usage régulier. Le 200 ml est plus adapté aux fermes, élevages et exploitations."
    },
    {
      question: "Peut-on l'utiliser en agriculture ?",
      answer: "Oui, Enzyme Africa peut être utilisé dans une démarche agricole naturelle, selon les besoins et les conseils d'utilisation adaptés."
    },
    {
      question: "Peut-on l'utiliser en élevage ?",
      answer: "Oui, il peut accompagner l'assainissement des espaces d'élevage, notamment pour contribuer à réduire certaines odeurs."
    },
    {
      question: "Comment obtenir le prix ?",
      answer: "Cliquez sur le bouton WhatsApp pour demander les prix, la disponibilité et les conditions de livraison."
    }
  ];
