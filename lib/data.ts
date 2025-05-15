import type { Drink } from "./types"

export const drinks: Drink[] = [
  // LAGERS & STOUTS
  {
    id: "lager-1",
    name: "Star Lager",
    description:
      "Nigeria's first indigenous beer and one of the country's most iconic lagers. Crisp, refreshing, and perfect for any occasion.",
    price: 800,
    category: "lagers",
    image: "/images/star.png",
    tags: ["Lager", "Nigerian"],
    ingredients: ["Barley malt", "Hops", "Water"],
    popular: true,
  },
  {
    id: "lager-2",
    name: "Gulder",
    description:
      "Known as the 'Ultimate beer', Gulder offers a rich, full-bodied taste with a distinctive golden color and refreshing finish.",
    price: 850,
    category: "lagers",
    image: "/images/gulder.png",
    tags: ["Lager", "Premium"],
  },
  {
    id: "lager-3",
    name: "Heineken",
    description:
      "A premium international lager with a distinctive green bottle. Balanced taste with fruity notes and a mild bitter finish.",
    price: 1000,
    category: "lagers",
    image: "/images/heineken.png",
    tags: ["Lager", "International"],
    popular: true,
  },
  {
    id: "lager-4",
    name: "Guinness Stout",
    description:
      "The iconic Irish dry stout with a rich, creamy head. Features a perfect balance of bitter and sweet with notes of coffee and chocolate.",
    price: 950,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Irish"],
    ingredients: ["Barley", "Roasted malt", "Hops", "Water"],
    popular: true,
  },
  {
    id: "lager-5",
    name: "Trophy Lager",
    description:
      "A premium quality lager that honors the Nigerian spirit of achievement. Crisp and refreshing with a smooth finish.",
    price: 750,
    category: "lagers",
    image: "https://addide.com/cdn/shop/products/10018_trophypremiumlargerbeer600ml_1024x1024_fab1407d-c69c-4148-aeaf-caf4edea2131.png?v=1625500991",
    tags: ["Lager", "Nigerian"],
  },
  {
    id: "lager-6",
    name: "Castle Milk Stout",
    description:
      "A smooth, creamy stout with a rich flavor profile. Notes of chocolate and coffee with a silky mouthfeel.",
    price: 900,
    category: "lagers",
    image: "/images/castle-milk.png",
    tags: ["Stout", "Creamy"],
  },
  {
    id: "lager-7",
    name: "Smirnoff Ice",
    description: "Premium malt beverage with a blend of Smirnoff Vodka and lemon flavor. Refreshing and easy to drink.",
    price: 1100,
    category: "lagers",
    image: "https://centaurusint.net/images/products/VDK0005.png",
    tags: ["Flavored", "Ready-to-drink"],
    ingredients: ["Vodka", "Lemon flavor", "Carbonated water"],
  },

  // PREMIUM & REGULAR SPIRITS
  {
    id: "spirit-1",
    name: "Hennessy VS",
    description: "A classic cognac with notes of oak, vanilla, and cinnamon. Perfect for sipping neat or in cocktails.",
    price: 15000,
    category: "spirits",
    image: "https://barrels.ng/wp-content/uploads/2021/07/hennessy-brandy-cognac-hennessy-v-s-cognac-75cl-removebg-preview.png",
    tags: ["Cognac", "Premium"],
    popular: true,
  },
  {
    id: "spirit-2",
    name: "Jameson Irish Whiskey",
    description:
      "Triple-distilled smooth whiskey with perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry.",
    price: 12000,
    category: "spirits",
    image: "/images/jameson.png",
    tags: ["Whiskey", "Irish"],
    popular: true,
  },
  {
    id: "spirit-3",
    name: "Johnnie Walker Black Label",
    description: "An iconic blended Scotch whisky with rich, complex flavors of sweet fruit and elegant smoke.",
    price: 18000,
    category: "spirits",
    image: "https://www.supermart.ng/cdn/shop/files/spspwh407.png?v=1688719370",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-4",
    name: "Baileys Irish Cream",
    description: "The original Irish cream liqueur blending Irish whiskey with fresh dairy cream and chocolate.",
    price: 10000,
    category: "spirits",
    image: "/images/baileys.png",
    tags: ["Liqueur", "Cream"],
    ingredients: ["Irish whiskey", "Cream", "Cocoa"],
  },
  {
    id: "spirit-5",
    name: "Ciroc Pineapple",
    description:
      "Ultra-premium vodka infused with a delicious pineapple flavor. Distilled five times from French grapes.",
    price: 20000,
    category: "spirits",
    image: "/images/ciroc.png",
    tags: ["Vodka", "Flavored"],
    popular: true,
  },
  {
    id: "spirit-6",
    name: "Gordon's Gin",
    description:
      "A distinctive juniper flavor that makes the perfect gin and tonic. Crisp and refreshing with a clean, juniper-dominant taste.",
    price: 8000,
    category: "spirits",
    image: "/images/gordons.png",
    tags: ["Gin", "Classic"],
    ingredients: ["Juniper berries", "Botanicals", "Neutral spirits"],
  },
  {
    id: "spirit-7",
    name: "Don Julio Tequila",
    description:
      "Premium tequila made from 100% blue agave. Crisp agave flavor with hints of citrus and a smooth finish.",
    price: 25000,
    category: "spirits",
    image: "https://www.myminibar.ng/cdn/shop/files/0b1d36033859736769b4f81cab1d3ecfff3b7b9f-_89356.1732989641.png?v=1734191725",
    tags: ["Tequila", "Premium"],
  },

  // BITTERS
  {
    id: "bitter-1",
    name: "Origin Bitters",
    description:
      "A popular Nigerian herbal alcoholic drink known for its medicinal properties. Made from a blend of herbs and roots.",
    price: 500,
    category: "bitters",
    image: "https://www.nigerianstore.com/cdn/shop/products/Origin_Bitters_75cl_600x600_crop_center.png?v=1723059561",
    tags: ["Herbal", "Medicinal"],
    popular: true,
  },
  {
    id: "bitter-2",
    name: "Action Bitters",
    description:
      "A potent herbal alcoholic drink with a distinctive flavor profile. Made from natural herbs and roots.",
    price: 550,
    category: "bitters",
    image: "/images/action-bitters.png",
    tags: ["Herbal", "Strong"],
  },

  // COCKTAILS & BAR BLENDS
  // {
  //   id: "cocktail-1",
  //   name: "Chapman",
  //   description:
  //     "Nigeria's most popular non-alcoholic cocktail. A refreshing blend of Grenadine, Angostura bitters, and mixed fruit juices.",
  //   price: 2500,
  //   category: "cocktails",
  //   image: "/images/chapman.png",
  //   tags: ["Non-alcoholic", "Nigerian"],
  //   ingredients: ["Grenadine", "Angostura bitters", "Orange juice", "Cucumber", "Lime"],
  //   popular: true,
  // },
  // {
  //   id: "cocktail-2",
  //   name: "Mojito",
  //   description:
  //     "A refreshing cocktail combining white rum, sugar, lime juice, soda water, and mint. Perfect for hot Nigerian days.",
  //   price: 3500,
  //   category: "cocktails",
  //   image: "/images/mojito.png",
  //   tags: ["Rum", "Refreshing"],
  //   ingredients: ["White rum", "Sugar", "Lime juice", "Soda water", "Mint leaves"],
  //   popular: true,
  // },
  // {
  //   id: "cocktail-3",
  //   name: "Long Island Iced Tea",
  //   description:
  //     "A potent mix of vodka, tequila, light rum, triple sec, gin, and cola. Deceptively strong with a smooth taste.",
  //   price: 4500,
  //   category: "cocktails",
  //   image: "/images/long-island.png",
  //   tags: ["Strong", "Mixed spirits"],
  //   ingredients: ["Vodka", "Tequila", "Light rum", "Triple sec", "Gin", "Cola"],
  // },
  // {
  //   id: "cocktail-4",
  //   name: "Sex on the Beach",
  //   description:
  //     "A fruity cocktail with vodka, peach schnapps, orange juice, and cranberry juice. Sweet and tangy with a tropical vibe.",
  //   price: 3800,
  //   category: "cocktails",
  //   image: "/images/sex-on-the-beach.png",
  //   tags: ["Fruity", "Vodka"],
  //   ingredients: ["Vodka", "Peach schnapps", "Orange juice", "Cranberry juice"],
  // },
  // {
  //   id: "cocktail-5",
  //   name: "Margarita",
  //   description:
  //     "A classic cocktail with tequila, lime juice, and orange liqueur. Served with a salt rim for the perfect balance of sweet and sour.",
  //   price: 4000,
  //   category: "cocktails",
  //   image: "/images/margarita.png",
  //   tags: ["Tequila", "Citrus"],
  //   ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"],
  // },
  // {
  //   id: "cocktail-6",
  //   name: "Old Fashioned",
  //   description:
  //     "A sophisticated cocktail made with whiskey, sugar, bitters, and a twist of citrus. A timeless classic for whiskey lovers.",
  //   price: 4200,
  //   category: "cocktails",
  //   image: "/images/old-fashioned.png",
  //   tags: ["Whiskey", "Classic"],
  //   ingredients: ["Whiskey", "Sugar", "Angostura bitters", "Orange peel"],
  // },
  // {
  //   id: "cocktail-7",
  //   name: "Gin & Tonic",
  //   description:
  //     "A refreshing highball cocktail made with gin and tonic water. Garnished with lime for a citrusy finish.",
  //   price: 3000,
  //   category: "cocktails",
  //   image: "/images/gin-tonic.png",
  //   tags: ["Gin", "Refreshing"],
  //   ingredients: ["Gin", "Tonic water", "Lime"],
  //   popular: true,
  // },

  // WINES
  {
    id: "wine-1",
    name: "Carlo Rossi Red",
    description:
      "A smooth, easy-drinking red wine with flavors of dark fruit and a soft finish. Perfect for casual gatherings.",
    price: 6000,
    category: "wines",
    image: "/images/carlo.png",
    tags: ["Red", "Sweet"],
    popular: true,
  },
  {
    id: "wine-2",
    name: "Four Cousins",
    description:
      "A semi-sweet natural red wine with a smooth, fruity taste. Popular for its approachable flavor profile.",
    price: 5500,
    category: "wines",
    image: "/images/four_cousin.png",
    tags: ["Red", "Semi-sweet"],
  },
  {
    id: "wine-3",
    name: "Chamdor",
    description:
      "A premium non-alcoholic sparkling wine. Offers the taste and experience of champagne without the alcohol.",
    price: 4500,
    category: "wines",
    image: "https://static.wixstatic.com/media/bc12db_51714c3f3c304e7e82a1ff82275c02ae~mv2.png/v1/fill/w_480,h_578,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc12db_51714c3f3c304e7e82a1ff82275c02ae~mv2.png",
    tags: ["Non-alcoholic", "Sparkling"],
  },
  {
    id: "wine-4",
    name: "Eva Wine",
    description: "A light, fruity wine with a pleasant sweetness. Easy to drink and perfect for celebrations.",
    price: 5000,
    category: "wines",
    image: "/images/eva.png",
    tags: ["Sweet", "Fruity"],
  },
  {
    id: "wine-5",
    name: "Castillo Del Diablo",
    description:
      "A bold, full-bodied red wine with rich flavors of dark berries and a hint of oak. Perfect for special occasions.",
    price: 8000,
    category: "wines",
    image: "https://cdn11.bigcommerce.com/s-seah8s/images/stencil/320w/products/1017/1475/Casillero_del_Diablo_Merlot_75cl__72371.1470932834.png",
    tags: ["Red", "Full-bodied"],
  },

  // MALTS & NON-ALCOHOLIC BOTTLES
  {
    id: "non-alc-1",
    name: "Malta Guinness",
    description:
      "A non-alcoholic malt drink with a rich, sweet flavor. Packed with vitamins and minerals for a refreshing energy boost.",
    price: 500,
    category: "non-alcoholic",
    image: "https://www.drinksonline.store/wp-content/uploads/2020/11/Guinness_Malta_Nigeria_330ML_StubbyCan-2-1.png",
    tags: ["Malt", "Energy"],
    popular: true,
  },
  {
    id: "non-alc-2",
    name: "Fayrouz",
    description:
      "A refreshing, non-alcoholic malt drink with natural fruit flavors. Available in pear, pineapple, and apple varieties.",
    price: 600,
    category: "non-alcoholic",
    image: "/images/fayrouz.png",
    tags: ["Malt", "Fruity"],
  },
  {
    id: "non-alc-3",
    name: "Fearless Energy Drink",
    description:
      "A high-energy drink designed to boost stamina and vitality. Contains caffeine, taurine, and B-vitamins.",
    price: 700,
    category: "non-alcoholic",
    image: "/images/fearless.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-4",
    name: "Schweppes Chapman",
    description:
      "A bottled version of the popular Nigerian Chapman cocktail. A refreshing blend of citrus and fruit flavors.",
    price: 600,
    category: "non-alcoholic",
    image: "/images/schweppes.png",
    tags: ["Soda", "Fruity"],
    popular: true,
  },
  // {
  //   id: "non-alc-5",
  //   name: "Amstel Malta",
  //   description: "A premium non-alcoholic malt beverage with a unique taste. Rich in vitamins and nutrients.",
  //   price: 500,
  //   category: "non-alcoholic",
  //   image: "/images/amstel-malta.png",
  //   tags: ["Malt", "Vitamin-rich"],
  // },

  // TRADITIONAL / LOCAL FAVORITES
  // {
  //   id: "trad-1",
  //   name: "Zobo",
  //   description:
  //     "A popular Nigerian drink made from dried hibiscus flowers. Refreshing with a tart, cranberry-like flavor.",
  //   price: 400,
  //   category: "traditional",
  //   image: "/images/zobo.png",
  //   tags: ["Hibiscus", "Refreshing"],
  //   ingredients: ["Dried hibiscus flowers", "Pineapple", "Ginger", "Cloves", "Sugar"],
  //   popular: true,
  // },
  // {
  //   id: "trad-2",
  //   name: "Palm Wine",
  //   description:
  //     "A traditional Nigerian alcoholic beverage made from the sap of palm trees. Sweet, milky, and mildly alcoholic when fresh.",
  //   price: 1000,
  //   category: "traditional",
  //   image: "/images/palm-wine.png",
  //   tags: ["Fermented", "Traditional"],
  //   popular: true,
  // },
  // {
  //   id: "trad-3",
  //   name: "Kunu",
  //   description:
  //     "A popular Nigerian beverage made from millet or sorghum. Refreshing with a slightly sweet, nutty flavor.",
  //   price: 400,
  //   category: "traditional",
  //   image: "/images/kunu.png",
  //   tags: ["Grain", "Refreshing"],
  //   ingredients: ["Millet", "Ginger", "Cloves", "Sugar"],
  // },
  // {
  //   id: "trad-4",
  //   name: "Fresh Coconut Water",
  //   description:
  //     "Natural coconut water served directly from the coconut. Hydrating, refreshing, and full of electrolytes.",
  //   price: 800,
  //   category: "traditional",
  //   image: "/images/coconut-water.png",
  //   tags: ["Natural", "Hydrating"],
  // },
]
