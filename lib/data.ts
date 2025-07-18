//Drinks Data

import type { Drink } from "./types"

export const drinks: Drink[] = [
  // LAGERS & STOUTS
  {
    id: "lager-1",
    name: "Star Lager",
    description:
      "Nigeria's first indigenous beer and one of the country's most iconic lagers. Crisp, refreshing, and perfect for any occasion.",
    price: 3000,
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
    price: 2000,
    category: "lagers",
    image: "/images/gulder.png",
    tags: ["Lager", "Premium"],
  },
  {
    id: "lager-3",
    name: "Heineken",
    description:
      "A premium international lager with a distinctive green bottle. Balanced taste with fruity notes and a mild bitter finish.",
    price: 3000,
    category: "lagers",
    image: "/images/heineken.png",
    tags: ["Lager", "International"],
    popular: true,
  },
  {
    id: "wine-100",
    name: "J&W",
    description:
      "A smooth non-alcoholic sparkling red wine alternative with fruity and floral notes. Ideal for celebrations without the alcohol.",
    price: 12000,
    category: "wines",
    image: "/images/j_w.png",
    tags: ["Non-Alcoholic", "Sparkling"],
    popular: true,
  },
  {
    id: "wine-200",
    name: "Moet & Chandon",
    description:
      "A luxurious French champagne known for its bright fruitiness, elegant maturity, and seductive palate.",
    price: 150000,
    category: "wines",
    image: "/images/moet.png",
    tags: ["Champagne", "Premium"],
    popular: true,
  },
  {
    id: "wine-3",
    name: "Bottega Gold",
    description: "An elegant Italian Prosecco with notes of apple, pear, acacia flowers and a golden bottle design.",
    price: 70000,
    category: "wines",
    image: "/images/bottega-gold.png",
    tags: ["Prosecco", "Luxury"],
  },
  {
    id: "wine-4",
    name: "Grace O' Malley",
    description: "A premium Irish whiskey blend with a bold personality and balanced flavors of fruit, spice, and oak.",
    price: 45000,
    category: "spirits",
    image: "/images/grace-omalley.png",
    tags: ["Whiskey", "Irish"],
  },
  {
    id: "wine-5",
    name: "Don Vigo",
    description: "A smooth Spanish red wine with rich berry flavors and a hint of oak, perfect for evening relaxation.",
    price: 10000,
    category: "wines",
    image: "/images/don-vigo.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "spirit-70",
    name: "Label 5",
    description: "A popular blended Scotch whisky with sweet vanilla notes, slight smokiness, and smooth finish.",
    price: 70000,
    category: "spirits",
    image: "/images/labe5.png",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "lager-8",
    name: "Budweiser",
    description: "A classic American lager with a smooth taste, medium-bodied mouthfeel, and crisp finish.",
    price: 3000,
    category: "lagers",
    image: "/images/budweiser.png",
    tags: ["Lager", "International"],
    popular: true,
  },
  {
    id: "lager-90",
    name: "Flying Fish",
    description:
      "A flavored alcoholic beverage combining beer with fruit flavors. Light, refreshing and slightly sweet.",
    price: 2000,
    category: "lagers",
    image: "https://kovmarket.com.ng/wp-content/uploads/2024/11/Flying-fish-Zesty-Lemon-RB-420ml-3kov-1.webp",
    tags: ["Flavored", "Fruity"],
  },
  {
    id: "lager-10",
    name: "Goldberg",
    description: "A Nigerian premium lager with a bold taste and rich golden color. Popular for its authenticity.",
    price: 2000,
    category: "lagers",
    image: "/images/goldberg.png",
    tags: ["Lager", "Nigerian"],
  },
  {
    id: "lager-11",
    name: "Big Stout",
    description: "A bold and strong stout with rich roasted malt character and intense flavor profile.",
    price: 3000,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Bold"],
  },
  {
    id: "lager-12",
    name: "Small Stout",
    description: "A smaller version of the classic stout, offering the same roasted bitterness in a compact bottle.",
    price: 2000,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Mini"],
  },
  {
    id: "lager-13",
    name: "Star Radler",
    description: "A refreshing blend of beer and citrus juice, perfect for a smooth and fruity drinking experience.",
    price: 2000,
    category: "lagers",
    image: "/images/starradler.png",
    tags: ["Radler", "Fruity"],
  },
  {
    id: "wine-6",
    name: "Aznauri",
    description: "A Georgian wine known for its deep red color and notes of black cherry, plum, and spice.",
    price: 14000,
    category: "wines",
    image: "/images/Aznauri.png",
    tags: ["Red Wine", "Georgian"],
  },
  {
    id: "lager-5",
    name: "Trophy Lager",
    description:
      "A premium quality lager that honors the Nigerian spirit of achievement. Crisp and refreshing with a smooth finish.",
    price: 2000,
    category: "lagers",
    image:
      "https://addide.com/cdn/shop/products/10018_trophypremiumlargerbeer600ml_1024x1024_fab1407d-c69c-4148-aeaf-caf4edea2131.png?v=1625500991",
    tags: ["Lager", "Nigerian"],
  },
  {
    id: "lager-7",
    name: "Smirnoff Ice",
    description: "Premium malt beverage with a blend of Smirnoff Vodka and lemon flavor. Refreshing and easy to drink.",
    price: 2000,
    category: "lagers",
    image: "https://centaurusint.net/images/products/VDK0005.png",
    tags: ["Flavored", "Ready-to-drink"],
    ingredients: ["Vodka", "Lemon flavor", "Carbonated water"],
  },
  {
    id: "lager-80",
    name: "Skirt",
    description: "Light and bubbly with a crisp finish, perfect for casual occasions.",
    price: 9000,
    category: "spirits",
    image: "/images/skirt.png",
    tags: ["Beer"],
  },
  {
    id: "lager-9",
    name: "Golden Tiger",
    description: "Smooth spirit drink with golden hues and a balanced taste.",
    price: 12000,
    category: "spirits",
    image: "/images/golden-tiger.png",
    tags: ["Lager"],
  },
  {
    id: "wine-10",
    name: "Murviedro Eko Reserve",
    description:
      "A rich and flavorful Spanish red wine, crafted with local influence. Notes of ripe berries, oak, and soft tannins.",
    price: 14000,
    category: "wines",
    image: "/images/eko.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "wine-11",
    name: "Murviedro",
    description:
      "A Spanish red wine with rich berry flavors and a smooth, well-balanced finish. Ideal for pairing with grilled meats and cheeses.",
    price: 12000,
    category: "wines",
    image: "/images/murviedro.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "wine-12",
    name: "Silk & Spice",
    description:
      "A Portuguese red wine with rich berry notes, hints of vanilla and warm spices, and a smooth, well-rounded finish. Perfect with grilled meats, cheeses, or enjoyed on its own.",
    price: 35000,
    category: "wines",
    image: "https://www.datocms-assets.com/33016/1699982312-28-silk-spice-spice-road.png",
    tags: ["Red Wine", "Portuguese", "Smooth"],
  },
  {
    id: "lager-14",
    name: "Ace Bitters",
    description: "A refreshing Nigerian lager with a distinctive bitter taste and smooth finish.",
    price: 1500,
    category: "bitters",
    image: "https://www.nbplc.com/storage/2021/11/Picture2-min-1.png",
    tags: ["Lager", "Nigerian", "Bitter"],
  },
  {
    id: "lager-15",
    name: "Ace Root",
    description: "A unique root-flavored alcoholic beverage with herbal notes.",
    price: 2000,
    category: "lagers",
    image: "/images/ace-roots.png",
    tags: ["Flavored", "Herbal"],
  },
  {
    id: "lager-16",
    name: "Origin Bitters",
    description: "Premium Nigerian lager with a crisp and refreshing taste.",
    price: 3000,
    category: "bitters",
    image: "https://bluepicturesng.com/wp-content/uploads/2023/12/Origin-Bitters.png",
    tags: ["Lager", "Nigerian", "Premium"],
  },
  {
    id: "lager-17",
    name: "33 Export",
    description: "Classic Nigerian export lager with a smooth, balanced flavor.",
    price: 2000,
    category: "lagers",
    image: "/images/33-bottle.png",
    tags: ["Lager", "Nigerian", "Export"],
  },
  {
    id: "lager-18",
    name: "Medium Stout",
    description: "Rich and creamy stout with roasted malt flavors in a medium-sized bottle.",
    price: 2500,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Medium"],
  },
  {
    id: "lager-19",
    name: "Legend",
    description: "Premium Nigerian lager with a legendary taste and quality.",
    price: 3000,
    category: "lagers",
    image: "/images/legend.png",
    tags: ["Lager", "Nigerian", "Premium"],
  },
  {
    id: "lager-20",
    name: "Legend Twist",
    description: "A flavored variant of Legend beer with a unique twist.",
    price: 2000,
    category: "lagers",
    image: "/images/legend-twist.png",
    tags: ["Lager", "Flavored", "Twist"],
  },
  {
    id: "lager-21",
    name: "Can Trophy",
    description: "Trophy lager in convenient can format, crisp and refreshing.",
    price: 2000,
    category: "lagers",
    image: "/images/can-trophy.png",
    tags: ["Lager", "Nigerian", "Can"],
  },
  {
    id: "lager-22",
    name: "Can Stout",
    description: "Rich stout in convenient can format with bold roasted flavors.",
    price: 2000,
    category: "lagers",
    image: "/images/can-stout.png",
    tags: ["Stout", "Can"],
  },
  {
    id: "lager-23",
    name: "Tiger",
    description: "Bold lager with a fierce taste and smooth finish.",
    price: 2000,
    category: "lagers",
    image: "/images/tiger.png",
    tags: ["Lager", "Bold"],
  },
  {
    id: "lager-24",
    name: "Medium Heineken",
    description: "Premium international lager in medium-sized bottle with balanced taste.",
    price: 2500,
    category: "lagers",
    image: "/images/heineken.png",
    tags: ["Lager", "International", "Medium"],
  },

  // PREMIUM & REGULAR SPIRITS
  {
    id: "spirit-1",
    name: "Hennessy VSOP",
    description: "A classic cognac with notes of oak, vanilla, and cinnamon. Perfect for sipping neat or in cocktails.",
    price: 120000,
    category: "spirits",
    image:
      "https://barrels.ng/wp-content/uploads/2021/07/hennessy-brandy-cognac-hennessy-v-s-cognac-75cl-removebg-preview.png",
    tags: ["Cognac", "Premium"],
    popular: true,
  },
  {
    id: "spirit-2",
    name: "Jameson Irish Whiskey",
    description:
      "Triple-distilled smooth whiskey with perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry.",
    price: 45000,
    category: "spirits",
    image: "/images/jameson.png",
    tags: ["Whiskey", "Irish"],
    popular: true,
  },
  {
    id: "spirit-3",
    name: "Jameson Black Barrel",
    description:
      "Triple-distilled smooth whiskey with perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry.",
    price: 45000,
    category: "spirits",
    image: "https://barrels.ng/wp-content/uploads/2021/07/PreviewMedium-Black-Barrel-750ml-1-removebg-preview.png",
    tags: ["Whiskey", "Irish"],
    popular: true,
  },
  {
    id: "spirit-4",
    name: "Johnnie Walker Black Label",
    description: "An iconic blended Scotch whisky with rich, complex flavors of sweet fruit and elegant smoke.",
    price: 45000,
    category: "spirits",
    image: "https://www.supermart.ng/cdn/shop/files/spspwh407.png?v=1688719370",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-5",
    name: "Baileys Irish Cream",
    description: "The original Irish cream liqueur blending Irish whiskey with fresh dairy cream and chocolate.",
    price: 31000,
    category: "spirits",
    image: "/images/baileys.png",
    tags: ["Liqueur", "Cream"],
    ingredients: ["Irish whiskey", "Cream", "Cocoa"],
  },
  {
    id: "spirit-10",
    name: "Jack Daniel's",
    description: "Tennessee whiskey with a smooth, mellow flavor and charcoal mellowing.",
    price: 32000,
    category: "spirits",
    image: "/images/jack-daniels.png",
    tags: ["Whiskey", "Tennessee"],
  },
  {
    id: "spirit-11",
    name: "Blue Label",
    description: "Ultra-premium blend of rare Scotch whiskies. Exceptionally smooth.",
    price: 315000,
    category: "spirits",
    image: "https://www.myminibar.ng/cdn/shop/products/5415d715-0cf0-4983-8202-1eb825b6af6c.png?v=1624563788",
    tags: ["Whisky", "Luxury"],
  },
  {
    id: "spirit-12",
    name: "Red Label",
    description: "Bold and vibrant Scotch whisky with a fiery kick.",
    price: 21000,
    category: "spirits",
    image: "/images/red-label.png",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-13",
    name: "Glenfiddich 12yrs",
    description: "Aged single malt Scotch whisky with pear and oak notes.",
    price: 113000,
    category: "spirits",
    image: "/images/glefiddich.png",
    tags: ["Whisky", "Single Malt"],
  },
  {
    id: "spirit-14",
    name: "King of Scot",
    description: "Smooth and affordable blend with a hint of peat and malt.",
    price: 14000,
    category: "spirits",
    image: "/images/king-of-scot.png",
    tags: ["Whisky"],
  },
  {
    id: "spirit-15",
    name: "Jack Williams",
    description: "Budget-friendly whisky with a classic malt profile.",
    price: 10000,
    category: "spirits",
    image: "/images/jack-williams.png",
    tags: ["Whisky"],
  },
  {
    id: "spirit-16",
    name: "Tenjaku",
    description:
      "A smooth and well-balanced Japanese whisky with subtle smoky notes and hints of pear, vanilla, and malt. Perfect for sipping or cocktails.",
    price: 49000,
    category: "spirits",
    image: "https://cheers.com.np/uploads/products/995494496485864758607514492044902537728351.png",
    tags: ["Whisky", "Japanese", "Smooth"],
  },
  {
    id: "spirit-17",
    name: "Campari",
    description: "Italian bitter aperitif with a distinctive red color and herbal flavor profile.",
    price: 30000,
    category: "spirits",
    image: "https://www.pngplay.com/wp-content/uploads/13/Campari-Free-PNG.png",
    tags: ["Aperitif", "Italian", "Bitter"],
  },
  {
    id: "spirit-18",
    name: "Macallan 12yrs",
    description: "Premium single malt Scotch whisky aged for 12 years with rich, complex flavors.",
    price: 150000,
    category: "spirits",
    image: "/images/macallan.png",
    tags: ["Whisky", "Single Malt", "Premium", "Aged"],
  },

  // WINES
  {
    id: "wine-1",
    name: "Carlo Rossi Red",
    description:
      "A smooth, easy-drinking red wine with flavors of dark fruit and a soft finish. Perfect for casual gatherings.",
    price: 15000,
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
    price: 15000,
    category: "wines",
    image: "/images/four-cousins.png",
    tags: ["Red", "Semi-sweet"],
  },
  {
    id: "wine-300",
    name: "Chamdor",
    description:
      "A premium non-alcoholic sparkling wine. Offers the taste and experience of champagne without the alcohol.",
    price: 4500,
    category: "wines",
    image:
      "https://static.wixstatic.com/media/bc12db_51714c3f3c304e7e82a1ff82275c02ae~mv2.png/v1/fill/w_480,h_578,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc12db_51714c3f3c304e7e82a1ff82275c02ae~mv2.png",
    tags: ["Non-alcoholic", "Sparkling"],
  },
  {
    id: "spirit-6",
    name: "Royal Cycle (Big)",
    description:
      "A premium whisky with a bold character, offering notes of oak, vanilla, and spice. Perfect for sipping neat or with a mixer.",
    price: 12000,
    category: "spirits",
    image: "https://brewscanner.ae/wp-content/uploads/2024/12/ROYAL-CIRCLE-PREMIUM-WHISKY.png",
    tags: ["Whisky", "Premium", "Big Bottle"],
  },
  {
    id: "spirit-7",
    name: "Royal Cycle (Small)",
    description:
      "A compact bottle of Royal Cycle whisky, featuring a rich and smooth taste with hints of oak and warm spices.",
    price: 6000,
    category: "spirits",
    image: "https://brewscanner.ae/wp-content/uploads/2024/12/ROYAL-CIRCLE-PREMIUM-WHISKY.png",
    tags: ["Whisky", "Compact", "Smooth"],
  },
  {
    id: "wine-8",
    name: "Baron Romero",
    description: "Elegant Spanish wine with subtle oak and dark fruit tones.",
    price: 15000,
    category: "wines",
    image: "/images/baron-romero.png",
    tags: ["Wine", "Spanish"],
  },
  {
    id: "wine-14",
    name: "Velita",
    description: "Light and crisp, with floral aromas and a smooth palate.",
    price: 6000,
    category: "wines",
    image: "/images/veleta.png",
    tags: ["Wine"],
  },
  {
    id: "wine-15",
    name: "Gran Castillo",
    description: "A bold wine with a complex profile of ripe fruits and subtle spice.",
    price: 20000,
    category: "wines",
    image:
      "https://i0.wp.com/brandsandtrade.org/wp-content/uploads/2023/05/Gran-Castillo-tempranillo-Red-1.png?fit=1920%2C5906&ssl=1",
    tags: ["Wine", "Premium"],
  },
  {
    id: "wine-16",
    name: "Bacio Della Luna",
    description: "Sparkling wine with a touch of elegance and a floral finish.",
    price: 15000,
    category: "wines",
    image: "/images/bacio-della.png",
    tags: ["Wine", "Sparkling"],
  },
  {
    id: "wine-17",
    name: "Cape More",
    description: "Balanced and bright, with a hint of tropical fruit flavors.",
    price: 8000,
    category: "wines",
    image: "/images/cape-more.png",
    tags: ["Wine"],
  },
  {
    id: "wine-18",
    name: "Blue Island",
    description: "A sweet and fruity blend, perfect for laid-back moments.",
    price: 16000,
    category: "wines",
    image: "/images/blue-island.png",
    tags: ["Wine"],
  },
  {
    id: "wine-19",
    name: "Dominio",
    description: "Spanish red wine with rich berry flavors and smooth finish.",
    price: 12000,
    category: "wines",
    image: "/images/dominio.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "wine-20",
    name: "Cape Ridge",
    description: "South African wine with balanced acidity and fruit-forward character.",
    price: 15000,
    category: "wines",
    image: "/images/cape-ridge.png",
    tags: ["Wine", "South African"],
  },
  {
    id: "wine-21",
    name: "Declan Red",
    description: "Rich red wine with deep color and full-bodied taste.",
    price: 15000,
    category: "wines",
    image: "https://barrels.ng/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-5.01.49-PM-removebg-preview.png",
    tags: ["Red Wine", "Full-bodied"],
  },
  {
    id: "wine-22",
    name: "Declan White",
    description: "Crisp white wine with fresh acidity and light, refreshing character.",
    price: 15000,
    category: "wines",
    image: "/images/declan-white.png",
    tags: ["White Wine", "Crisp"],
  },

  // COCKTAILS & LIQUEURS
  {
    id: "liqueur-1",
    name: "Amarula",
    description: "Cream liqueur from South Africa made with the marula fruit.",
    price: 25000,
    category: "cocktails",
    image: "/images/amarula.png",
    tags: ["Cream Liqueur"],
  },

  // MALTS & NON-ALCOHOLIC BOTTLES
  {
    id: "non-alc-1",
    name: "Malta Guinness",
    description:
      "A non-alcoholic malt drink with a rich, sweet flavor. Packed with vitamins and minerals for a refreshing energy boost.",
    price: 1500,
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
    price: 1500,
    category: "non-alcoholic",
    image: "/images/fayrouz.png",
    tags: ["Malt", "Fruity"],
  },
  {
    id: "non-alc-3",
    name: "Fearless Energy Drink",
    description:
      "A high-energy drink designed to boost stamina and vitality. Contains caffeine, taurine, and B-vitamins.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/fearless.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-4",
    name: "Schweppes Chapman",
    description:
      "A bottled version of the popular Nigerian Chapman cocktail. A refreshing blend of citrus and fruit flavors.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/schweppes.png",
    tags: ["Soda", "Fruity"],
    popular: true,
  },
  {
    id: "non-alc-5",
    name: "Pure Heaven",
    description: "Non-alcoholic sparkling wine with a fresh and lively profile.",
    price: 8000,
    category: "wines",
    image: "/images/pure-heaven.png",
    tags: ["Non-alcoholic", "Wine"],
  },
  {
    id: "non-alc-6",
    name: "Coca-Cola",
    description: "Classic carbonated soft drink with a unique blend of flavors for a crisp and refreshing taste.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/coke.png",
    tags: ["Soda", "Cola"],
    popular: true,
  },
  {
    id: "non-alc-7",
    name: "Sprite",
    description: "Lemon-lime flavored soft drink with a clean, crisp taste. Perfectly refreshing and caffeine-free.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/sprite.png",
    tags: ["Soda", "Lemon-Lime"],
    popular: true,
  },
  {
    id: "non-alc-8",
    name: "Fanta",
    description: "Bright and bubbly orange-flavored soda, packed with fruity flavor and fun.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/fanta.png",
    tags: ["Soda", "Orange"],
    popular: true,
  },
  {
    id: "non-alc-9",
    name: "Water",
    description: "Pure bottled water for hydration and refreshment.",
    price: 500,
    category: "non-alcoholic",
    image: "/images/water.png",
    tags: ["Water", "Pure"],
  },
  {
    id: "non-alc-10",
    name: "Monster",
    description: "High-energy drink with caffeine and taurine for maximum energy boost.",
    price: 2000,
    category: "non-alcoholic",
    image: "/images/monster.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-11",
    name: "Predator",
    description: "Energy drink designed to unleash your inner strength and vitality.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/predator.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-12",
    name: "Amstel Malt",
    description: "Non-alcoholic malt drink with a rich, smooth taste and nutritional benefits.",
    price: 1500,
    category: "non-alcoholic",
    image: "/images/amstel-malt.png",
    tags: ["Malt", "Non-alcoholic"],
  },
  {
    id: "non-alc-13",
    name: "Maltina",
    description: "Popular Nigerian malt drink with vitamins and minerals for energy.",
    price: 1500,
    category: "non-alcoholic",
    image: "/images/maltina.png",
    tags: ["Malt", "Nigerian", "Energy"],
  },
  {
    id: "non-alc-14",
    name: "Chi Exotic",
    description: "Premium fruit juice blend with exotic tropical flavors.",
    price: 3000,
    category: "non-alcoholic",
    image: "/images/chi-exotic.png",
    tags: ["Juice", "Exotic", "Tropical"],
  },
  {
    id: "non-alc-15",
    name: "Holandia",
    description: "Premium dairy milk with rich, creamy taste and nutritional value.",
    price: 3000,
    category: "non-alcoholic",
    image: "/images/hollandia.png",
    tags: ["Milk", "Dairy", "Premium"],
  },

  // MEALS - GRILLED ITEMS
  {
    id: "meal-1",
    name: "Grilled Tilapia Fish",
    description: "Charcoal-grilled whole fish served with spicy pepper sauce and a side of your choice.",
    price: 15000,
    category: "grill",
    image: "https://cdn.momsdish.com/wp-content/uploads/2020/07/Grilled-Tilapia-Recipe-06-scaled.jpg",
    tags: ["Grilled", "Spicy", "Seafood"],
    ingredients: ["Fish", "Pepper", "Onions", "Oil", "Spices"],
    popular: true,
  },
  {
    id: "meal-2",
    name: "Pepper Goat Meat",
    description: "Tender pieces of goat meat simmered in hot pepper sauce. A bold and spicy Nigerian delicacy.",
    price: 10000,
    category: "grill",
    image: "/images/goat-meat.jpg",
    tags: ["Spicy", "Goat Meat", "Delicacy"],
    ingredients: ["Goat Meat", "Pepper", "Onions", "Spices", "Oil"],
  },
  {
    id: "meal-3",
    name: "Grilled Chicken",
    description: "Juicy chicken pieces sautéed in rich pepper sauce for that spicy kick.",
    price: 9000,
    category: "grill",
    image: "/images/grilled-chicken.webp",
    tags: ["Chicken", "Spicy", "Nigerian"],
    ingredients: ["Chicken", "Pepper", "Seasoning", "Oil", "Onions"],
  },
  {
    id: "meal-4",
    name: "Pepper Beef",
    description: "Flavorful beef chunks cooked in spicy pepper sauce. A favorite among spice lovers.",
    price: 8000,
    category: "grill",
    image: "/images/peppered-meat.jpeg",
    tags: ["Beef", "Spicy", "Classic"],
    ingredients: ["Beef", "Pepper", "Onions", "Spices"],
  },
  {
    id: "meal-5",
    name: "Yam Chips",
    description: "Crispy deep-fried yam sticks served hot, perfect as a side or snack.",
    price: 1500,
    category: "grill",
    image: "/images/yam-chips.png",
    tags: ["Yam", "Crispy", "Snack"],
    ingredients: ["Yam", "Salt", "Oil"],
  },
  {
    id: "meal-10",
    name: "Asun",
    description: "Grilled spicy goat meat chunks, smoky and full of bold Nigerian flavor.",
    price: 4000,
    category: "grill",
    image: "https://img-global.cpcdn.com/recipes/9530d8a18ea64f77/1200x630cq90/photo.jpg",
    tags: ["Goat Meat", "Spicy", "Grilled"],
    ingredients: ["Goat Meat", "Pepper", "Onions", "Spices", "Oil"],
  },
  {
    id: "meal-11",
    name: "Fried Turkey",
    description: "Juicy turkey pieces fried to perfection with a spicy kick.",
    price: 4500,
    category: "grill",
    image: "https://www.thecookierookie.com/wp-content/uploads/2023/11/fried-turkey-recipe-3-edited.jpg",
    tags: ["Turkey", "Spicy", "Fried"],
    ingredients: ["Turkey", "Pepper", "Oil", "Seasoning", "Onions"],
  },
  {
    id: "meal-12",
    name: "Grilled Catfish",
    description: "Fresh catfish grilled to perfection with a choice side of fries or plantain.",
    price: 15000,
    category: "grill",
    image: "/images/catfish-barbeque.jpg",
    tags: ["Catfish", "Grilled", "Seafood"],
    ingredients: ["Catfish", "Pepper", "Oil", "Spices", "Onions"],
  },
  {
    id: "meal-13",
    name: "Grilled Croaker Fish",
    description: "Iced croaker fish grilled to perfection with a choice side of fries or plantain.",
    price: 15000,
    category: "grill",
    image:
      "https://image.api.sportal365.com/process/smp-images-production/pulse.ng/27072024/f465d933-3521-4b2d-b302-b1a32f96c652",
    tags: ["Croaker", "Grilled", "Seafood"],
    ingredients: ["Croaker Fish", "Pepper", "Oil", "Spices", "Onions"],
  },

  // MEALS - SOUPS
  {
    id: "meal-6",
    name: "Catfish Pepper Soup",
    description: "Fresh catfish cooked in a peppery aromatic broth.",
    price: 5500,
    category: "soup",
    image: "/images/catfish.jpg",
    tags: ["Soup", "Seafood", "Spicy"],
    ingredients: ["Catfish", "Pepper", "Local herbs", "Aromatic spices"],
    popular: true,
  },
  {
    id: "meal-7",
    name: "Goat Meat Pepper Soup",
    description: "Tender goat meat in hot, spiced broth with local herbs.",
    price: 7000,
    category: "soup",
    image: "/images/goat-meat.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Goat meat", "Pepper", "Local herbs", "Spices"],
  },
  {
    id: "meal-8",
    name: "Chicken Pepper Soup",
    description: "Soft chicken cuts simmered in spicy pepper soup broth.",
    price: 5500,
    category: "soup",
    image: "https://quickneedsstore.com/storage/customers/eyoc0cswaaam0lf-1.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Chicken", "Pepper", "Local herbs", "Spices"],
  },
  {
    id: "meal-9",
    name: "Assorted Meat Pepper Soup",
    description: "A flavourful mix of tripe and offal in rich pepper soup.",
    price: 5000,
    category: "soup",
    image: "https://raynatglobal.com/wp-content/uploads/2024/01/Assorted-meat-pepper-soup-1.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Tripe", "Offal", "Pepper", "Local herbs"],
  },
  // NEW ADDITIONS - SPIRITS & VODKAS
  {
    id: "spirit-19",
    name: "Tequilla Shot",
    description: "Premium tequila served as a shot, perfect for celebrations and parties.",
    price: 3000,
    category: "spirits",
    image: "/images/tequila.png",
    tags: ["Tequila", "Shot"],
  },
  {
    id: "spirit-20",
    name: "Tequilla Bottle",
    description: "Full bottle of premium tequila with smooth agave flavor and clean finish.",
    price: 30000,
    category: "spirits",
    image: "/images/tequila.png",
    tags: ["Tequila", "Premium"],
  },
  {
    id: "spirit-21",
    name: "Small Sky Vodka",
    description: "Premium vodka in a compact bottle with clean, crisp taste.",
    price: 5000,
    category: "spirits",
    image: "https://worldwineliquors.com/wp-content/uploads/2019/03/ddb9e080-6191-4115-9691-9ba2ad6263b4.png",
    tags: ["Vodka", "Small"],
  },
  {
    id: "spirit-22",
    name: "Small Label 5",
    description: "Compact bottle of Label 5 Scotch whisky with sweet vanilla notes and smooth finish.",
    price: 5000,
    category: "spirits",
    image: "/images/labe5.png",
    tags: ["Whisky", "Scotch", "Small"],
  },
  {
    id: "spirit-23",
    name: "Small Don Royal",
    description: "Premium whisky in a smaller bottle with rich, smooth character.",
    price: 6000,
    category: "spirits",
    image: "/images/don-royale.png",
    tags: ["Whisky", "Small"],
  },
  {
    id: "spirit-24",
    name: "Neft Vodka",
    description: "Ultra-premium vodka with exceptional purity and smooth taste.",
    price: 30000,
    category: "spirits",
    image: "/images/neft-vodka.png",
    tags: ["Vodka", "Premium"],
  },
  {
    id: "spirit-25",
    name: "Absolut Vodka",
    description: "Swedish vodka with a clean, pure taste and smooth character.",
    price: 7000,
    category: "spirits",
    image: "/images/absolut-vodka.png",
    tags: ["Vodka", "Swedish"],
  },
  {
    id: "spirit-26",
    name: "Small Neft",
    description: "Premium Neft vodka in a compact bottle with exceptional smoothness.",
    price: 5000,
    category: "spirits",
    image: "/images/neft-vodka.png",
    tags: ["Vodka", "Premium", "Small"],
  },
  // {
  //   id: "spirit-27",
  //   name: "Steroids",
  //   description: "High-strength premium spirit with bold character and intense flavor.",
  //   price: 45000,
  //   category: "spirits",
  //   image: "/images/steroids.png",
  //   tags: ["Premium", "Strong"],
  // },
  {
    id: "spirit-28",
    name: "Teeling Whiskey",
    description: "Irish whiskey with innovative aging and distinctive flavor profile.",
    price: 40000,
    category: "spirits",
    image: "https://d1mp96cehvcx4f.cloudfront.net/wp-content/uploads/sites/4/2024/02/09115900/FY24_Teeling_Bottle_SmallBatch.png",
    tags: ["Whiskey", "Irish", "Premium"],
  },
  {
    id: "spirit-29",
    name: "Small Campari",
    description: "Italian bitter aperitif in a compact bottle with distinctive herbal flavor.",
    price: 12000,
    category: "spirits",
    image: "https://www.pngplay.com/wp-content/uploads/13/Campari-Free-PNG.png",
    tags: ["Aperitif", "Italian", "Bitter", "Small"],
  },
  {
    id: "spirit-30",
    name: "Small Jameson",
    description: "Triple-distilled Irish whiskey in a compact bottle with smooth, balanced flavor.",
    price: 15000,
    category: "spirits",
    image: "/images/jameson.png",
    tags: ["Whiskey", "Irish", "Small"],
  },
{
  id: "spirit-31",
  name: "Bullet",
  description: "A strong alcoholic energy drink in a compact can, popular for its bold flavor and stimulating effect.",
  price: 3000,
  category: "spirits",
  image: "https://omamall.com.ng/image/cache/catalog/Groceries/bullet-vodka-mixed-drink-550x550w.jpg",
  tags: ["Energy", "Alcohol", "Can"],
},


  // NEW ADDITIONS - WINES
  {
    id: "wine-23",
    name: "Small Veleta",
    description: "Light and crisp wine in a compact bottle with floral aromas and smooth palate.",
    price: 4000,
    category: "wines",
    image: "/images/veleta.png",
    tags: ["Wine", "Small"],
  },
  {
    id: "wine-24",
    name: "Blue Nun",
    description: "German wine with a fresh, fruity character and balanced acidity.",
    price: 8000,
    category: "wines",
    image: "https://images.vivino.com/thumbs/zZMXymX7T1ed2vEw_VyyeQ_pl_375x500.png",
    tags: ["Wine", "German"],
  },
  {
    id: "wine-25",
    name: "Maison Castel",
    description: "French wine with elegant character and refined taste profile.",
    price: 15000,
    category: "wines",
    image: "/images/maison-castel.png",
    tags: ["Wine", "French"],
  },
  {
    id: "wine-26",
    name: "African Secret",
    description: "Premium African wine with rich, complex flavors and smooth finish.",
    price: 17000,
    category: "wines",
    image: "/images/african-secret.png",
    tags: ["Wine", "African", "Premium"],
  },
  {
    id: "wine-27",
    name: "Frontera",
    description: "Chilean wine with vibrant fruit flavors and smooth, approachable taste.",
    price: 7000,
    category: "wines",
    image: "/images/frontera.png",
    tags: ["Wine", "Chilean"],
  },
  {
    id: "wine-28",
    name: "4th Street",
    description: "South African wine with fresh, fruity character and easy-drinking style.",
    price: 8000,
    category: "wines",
    image: "/images/4th-street.png",
    tags: ["Wine", "South African"],
  },
  {
    id: "wine-29",
    name: "Vineyard Friends",
    description: "Premium wine blend with rich flavors and elegant finish.",
    price: 25000,
    category: "wines",
    image: "/images/vineyard-friends.png",
    tags: ["Wine", "Premium"],
  },
  {
    id: "wine-30",
    name: "Roberson Winery",
    description: "Artisanal wine with distinctive character and refined taste.",
    price: 15000,
    category: "wines",
    image: "https://images.commerce7.com/robertson-winery/images/medium/c7-w-chapel-sweet-rose-1-5l-1629801220603.png",
    tags: ["Wine", "Artisanal"],
  },
  {
    id: "wine-31",
    name: "Drostdy Hof",
    description: "South African wine with balanced flavors and smooth finish.",
    price: 15000,
    category: "wines",
    image: "/images/drostdy-hof.png",
    tags: ["Wine", "South African"],
  },
  {
    id: "wine-32",
    name: "Vista Buna",
    description: "Wine with vibrant character and refreshing taste profile.",
    price: 15000,
    category: "wines",
    image: "/images/vista-buna.png",
    tags: ["Wine"],
  },
  {
    id: "wine-33",
    name: "Small Moments",
    description: "Compact wine bottle perfect for intimate occasions with smooth taste.",
    price: 8000,
    category: "wines",
    image: "/images/small-moments.png",
    tags: ["Wine", "Small"],
  },

  // NEW ADDITIONS - NON-ALCOHOLIC
  {
    id: "non-alc-16",
    name: "Red Bull",
    description: "Premium energy drink with caffeine, taurine, and B-vitamins for energy boost.",
    price: 2000,
    category: "non-alcoholic",
    image: "https://pngfre.com/wp-content/uploads/Red-Bull-3.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-17",
    name: "Power Horse",
    description: "Energy drink designed to boost stamina and performance with natural ingredients.",
    price: 2000,
    category: "non-alcoholic",
    image: "https://dnk1kazq09utu.cloudfront.net/1639059887695_776.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-18",
    name: "Declan Juice",
    description: "Premium fruit juice with natural flavors and refreshing taste.",
    price: 5000,
    category: "non-alcoholic",
    image: "/images/declan-juice.png",
    tags: ["Juice", "Premium", "Natural"],
  },
]




  // MEALS - TRADITIONAL
  // {
  //   id: "meal-8",
  //   name: "Cow Leg (Nkwobi style)",
  //   description: "Delicacy made with tender cow leg parts in spicy palm oil sauce.",
  //   price: 2800,
  //   category: "traditional",
  //   image: "https://assets.unileversolutions.com/recipes-v2/159354.jpg",
  //   tags: ["Nkwobi", "Spicy"],
  //   ingredients: ["Cow leg", "Palm oil", "Utazi", "Seasoning"],
  // },
  // {
  //   id: "meal-9",
  //   name: "Isi Ewu",
  //   description: "Goat head prepared in traditional Nkwobi style with rich spices.",
  //   price: 3000,
  //   category: "traditional",
  //   image: "https://www.edofood.com.ng/wp-content/uploads/2024/04/OIP-7.jpg",
  //   tags: ["Delicacy", "Spicy", "Traditional"],
  //   ingredients: ["Goat head", "Palm oil", "Spices", "Onion"],
  // },

  // MEALS - FINGER FOODS
  // {
  //   id: "meal-10",
  //   name: "Fried Snail",
  //   description: "Delicately fried snail tossed in spicy pepper sauce.",
  //   price: 3200,
  //   category: "finger-foods",
  //   image: "/images/snail3.webp",
  //   tags: ["Exotic", "Spicy"],
  //   ingredients: ["Snail", "Pepper", "Onion", "Oil"],
  // },
