//Drinks Data

import type { Drink } from "./types";

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
    price: 2500,
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
    price: 180000,
    category: "wines",
    image: "/images/moet.png",
    tags: ["Champagne", "Premium"],
    popular: true,
  },
  {
    id: "wine-3",
    name: "Bottega Gold",
    description:
      "An elegant Italian Prosecco with notes of apple, pear, acacia flowers and a golden bottle design.",
    price: 90000,
    category: "wines",
    image: "/images/bottega-gold.png",
    tags: ["Prosecco", "Luxury"],
  },
  {
    id: "wine-4",
    name: "Grace O' Malley",
    description:
      "A premium Irish whiskey blend with a bold personality and balanced flavors of fruit, spice, and oak.",
    price: 45000,
    category: "spirits",
    image: "/images/grace-omalley.png",
    tags: ["Whiskey", "Irish"],
  },
  {
    id: "brandy-7",
    name: "Bardar 7 Yrs",
    description:
      "A refined Moldovan brandy, aged 7 years in oak barrels. It offers a deep amber color with elegant aromas of dried fruit, vanilla, and subtle spice, delivering a smooth and lingering finish.",
    price: 21000,
    category: "spirits",
    image: "/images/bardar-7yrs.png",
    tags: ["Brandy", "Moldova", "7 Years Aged"],
  },

  {
    id: "brandy-3",
    name: "Bardar 3 Yrs",
    description:
      "A youthful Moldovan brandy aged for 3 years, presenting bright golden hues with notes of fresh fruit, oak, and a light vanilla sweetness. Smooth and approachable, perfect for casual sipping or cocktails.",
    price: 16000,
    category: "spirits",
    image: "/images/bardar-3yrs.png",
    tags: ["Brandy", "Moldova", "3 Years Aged"],
  },
  {
    id: "wine-5",
    name: "Don Vigo",
    description:
      "A smooth Spanish red wine with rich berry flavors and a hint of oak, perfect for evening relaxation.",
    price: 10000,
    category: "wines",
    image: "/images/don-vigo.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "spirit-70",
    name: "Label 5",
    description:
      "A popular blended Scotch whisky with sweet vanilla notes, slight smokiness, and smooth finish.",
    price: 70000,
    category: "spirits",
    image: "/images/labe5.png",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "lager-8",
    name: "Budweiser",
    description:
      "A classic American lager with a smooth taste, medium-bodied mouthfeel, and crisp finish.",
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
    price: 2500,
    category: "lagers",
    image:
      "https://kovmarket.com.ng/wp-content/uploads/2024/11/Flying-fish-Zesty-Lemon-RB-420ml-3kov-1.webp",
    tags: ["Flavored", "Fruity"],
  },
  {
    id: "lager-10",
    name: "Goldberg",
    description:
      "A Nigerian premium lager with a bold taste and rich golden color. Popular for its authenticity.",
    price: 2500,
    category: "lagers",
    image: "/images/goldberg.png",
    tags: ["Lager", "Nigerian"],
  },
  {
    id: "lager-11",
    name: "Big Stout",
    description:
      "A bold and strong stout with rich roasted malt character and intense flavor profile.",
    price: 3000,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Bold"],
  },
  {
    id: "lager-12",
    name: "Small Stout",
    description:
      "A smaller version of the classic stout, offering the same roasted bitterness in a compact bottle.",
    price: 2000,
    category: "lagers",
    image: "/images/guinness.png",
    tags: ["Stout", "Mini"],
  },
  {
    id: "lager-13",
    name: "Star Radler",
    description:
      "A refreshing blend of beer and citrus juice, perfect for a smooth and fruity drinking experience.",
    price: 2500,
    category: "lagers",
    image: "/images/starradler.png",
    tags: ["Radler", "Fruity"],
  },
  {
    id: "wine-6",
    name: "Aznauri",
    description:
      "A Georgian wine known for its deep red color and notes of black cherry, plum, and spice.",
    price: 20000,
    category: "wines",
    image: "/images/Aznauri.png",
    tags: ["Red Wine", "Georgian"],
  },
  {
    id: "lager-5",
    name: "Trophy Lager",
    description:
      "A premium quality lager that honors the Nigerian spirit of achievement. Crisp and refreshing with a smooth finish.",
    price: 2500,
    category: "lagers",
    image:
      "https://addide.com/cdn/shop/products/10018_trophypremiumlargerbeer600ml_1024x1024_fab1407d-c69c-4148-aeaf-caf4edea2131.png?v=1625500991",
    tags: ["Lager", "Nigerian"],
  },
  {
    id: "lager-7",
    name: "Smirnoff Ice",
    description:
      "Premium malt beverage with a blend of Smirnoff Vodka and lemon flavor. Refreshing and easy to drink.",
    price: 2500,
    category: "lagers",
    image: "https://centaurusint.net/images/products/VDK0005.png",
    tags: ["Flavored", "Ready-to-drink"],
    ingredients: ["Vodka", "Lemon flavor", "Carbonated water"],
  },
  {
    id: "lager-80",
    name: "Skirt",
    description:
      "Light and bubbly with a crisp finish, perfect for casual occasions.",
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
    price: 30000,
    category: "wines",
    image:
      "https://www.datocms-assets.com/33016/1699982312-28-silk-spice-spice-road.png",
    tags: ["Red Wine", "Portuguese", "Smooth"],
  },
  {
    id: "lager-14",
    name: "Ace Bitters",
    description:
      "A refreshing Nigerian lager with a distinctive bitter taste and smooth finish.",
    price: 1500,
    category: "bitters",
    image: "https://www.nbplc.com/storage/2021/11/Picture2-min-1.png",
    tags: ["Lager", "Nigerian", "Bitter"],
  },
  {
    id: "lager-15",
    name: "Ace Root",
    description: "A unique root-flavored alcoholic beverage with herbal notes.",
    price: 2500,
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
    image:
      "https://bluepicturesng.com/wp-content/uploads/2023/12/Origin-Bitters.png",
    tags: ["Lager", "Nigerian", "Premium"],
  },
  {
    id: "lager-17",
    name: "33 Export",
    description:
      "Classic Nigerian export lager with a smooth, balanced flavor.",
    price: 2500,
    category: "lagers",
    image: "/images/33-bottle.png",
    tags: ["Lager", "Nigerian", "Export"],
  },
  {
    id: "lager-18",
    name: "Medium Stout",
    description:
      "Rich and creamy stout with roasted malt flavors in a medium-sized bottle.",
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
    description:
      "Rich stout in convenient can format with bold roasted flavors.",
    price: 2000,
    category: "lagers",
    image: "/images/can-stout.png",
    tags: ["Stout", "Can"],
  },
  {
    id: "lager-23",
    name: "Tiger",
    description: "Bold lager with a fierce taste and smooth finish.",
    price: 2500,
    category: "lagers",
    image: "/images/tiger.png",
    tags: ["Lager", "Bold"],
  },
  {
    id: "lager-24",
    name: "Medium Heineken",
    description:
      "Premium international lager in medium-sized bottle with balanced taste.",
    price: 2500,
    category: "lagers",
    image: "/images/heineken.png",
    tags: ["Lager", "International", "Medium"],
  },

  // PREMIUM & REGULAR SPIRITS
  {
    id: "spirit-1",
    name: "Hennessy VSOP",
    description:
      "A classic cognac with notes of oak, vanilla, and cinnamon. Perfect for sipping neat or in cocktails.",
    price: 170000,
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
    id: "spirit-40",
    name: "Sterov VS Brandy",
    description:
      "A smooth and affordable brandy with rich notes of oak, caramel, and dried fruit. Perfect for casual sipping or mixing.",
    price: 45000,
    category: "spirits",
    image:
      "https://steroc.com/wp-content/uploads/2023/10/STEROC-BOTTLE-NEW-1024x1024.png",
    tags: ["Brandy", "Nigerian"],
    popular: false,
  },
  {
    id: "wine-frontera-red",
    name: "Frontera Cabernet Sauvignon",
    description:
      "A vibrant Chilean red wine with notes of ripe plum, blackberries, and a hint of spice. Smooth and medium-bodied, it pairs beautifully with grilled meats, pasta, or cheeses.",
    price: 20000,
    category: "wines",
    image: "/images/frontera-cabernet.png",
    tags: ["Wine", "Red", "Chile", "Cabernet Sauvignon"],
  },
  {
    id: "wine-mirado-red",
    name: "Mirado Red Wine",
    description:
      "A smooth and easy-drinking red wine with notes of ripe berries and a hint of sweetness. Perfect for casual gatherings, celebrations, or pairing with spicy dishes.",
    price: 25000,
    category: "wines",
    image: "/images/mirado-red.png",
    tags: ["Wine", "Red", "Sweet", "Nigeria"],
  },
  {
    id: "shisha",
    name: "Shisha",
    description:
      "A classic shisha flavor loved worldwide. Double Apple combines sweet and anise-like notes for a rich, smooth, and aromatic smoking experience.",
    price: 10000,
    category: "smoke",
    image:
      "https://media.istockphoto.com/id/1337442262/photo/hookah-shisha-with-glass-flask-and-fruit-grapefruit-bowl-with-white-smoke-on-a-black.jpg?s=612x612&w=0&k=20&c=-7qQWctZodwTDv-jIkV-VTTPT9AQ2z54ZaF0lhu0aW8=",
    tags: ["Shisha", "Tobacco", "Double Apple", "Classic Flavor"],
  },
  {
    id: "spirit-50",
    name: "Small Magic Moment Vodka",
    description:
      "A crisp and ultra-smooth vodka crafted from high-quality grains, perfect for cocktails or straight sipping.",
    price: 8000,
    category: "spirits",
    image: "/images/magic-moment.png",
    tags: ["Vodka", "Indian"],
    popular: true,
  },
  {
    id: "cider-kiss-apple",
    name: "Kiss Apple Cider",
    description:
      "A crisp and refreshing apple cider with a natural fruity sweetness and light bubbles. Perfectly balanced for a smooth, easy-drinking experience.",
    price: 3000,
    category: "spirits",
    image: "/images/kiss-apple-cider.png",
    tags: ["Cider", "Apple", "Refreshing"],
  },
  {
    id: "wine-blue-nun-silver",
    name: "Blue Nun Silver Edition Sparkling",
    description:
      "A stylish German sparkling wine crafted with a hint of natural minerals. Blue Nun Silver Edition delivers a crisp, refreshing taste with delicate bubbles, perfect for celebrations, parties, or pairing with light meals.",
    price: 25000,
    category: "wines",
    image: "/images/blue-nun-silver.png",
    tags: ["Wine", "Sparkling", "Germany", "Silver Edition"],
  },
  {
    id: "vodka-parliament-classic",
    name: "Parliament Vodka Classic",
    description:
      "A premium Russian vodka crafted with traditional methods and filtered with natural milk proteins. Smooth, clean, and crisp, it delivers a refined drinking experience whether served neat or in cocktails.",
    price: 15000,
    category: "spirits",
    image: "/images/parliament-vodka.png",
    tags: ["Vodka", "Russia", "Premium", "Classic"],
  },
  {
    id: "gin-bombay-sapphire",
    name: "Bombay Sapphire Gin",
    description:
      "A world-renowned London Dry Gin crafted with a unique blend of 10 botanicals including juniper, lemon peel, coriander, and almonds. Distilled using a vapor infusion process, it delivers a smooth, complex flavor with a bright, crisp finish—perfect for classic cocktails like the Gin & Tonic or Martini.",
    price: 48000,
    category: "spirits",
    image: "/images/bombay-sapphire.png",
    tags: ["Gin", "London Dry", "Premium", "Botanicals"],
  },
  {
    id: "gin-bombay-dry",
    name: "Bombay Dry Gin",
    description:
      "A traditional London Dry Gin crafted with 8 botanicals including juniper, coriander, and citrus peel. Clean, crisp, and versatile, it’s perfect for classic cocktails like the Gin & Tonic or Martini.",
    price: 30000,
    category: "spirits",
    image: "/images/bombay-dry.png",
    tags: ["Gin", "London Dry", "Classic", "Cocktails"],
  },

  {
    id: "wine-blue-nun-authentic",
    name: "Blue Nun Authentic White",
    description:
      "A classic German white wine with a smooth, well-balanced taste. Blue Nun Authentic offers delicate fruit flavors, a hint of sweetness, and a crisp finish, making it a versatile choice for both casual sipping and pairing with light meals.",
    price: 15000,
    category: "wines",
    image: "/images/blue-nun-authentic.png",
    tags: ["Wine", "White", "Germany", "Classic"],
  },
  {
    id: "whisky-william-lawsons",
    name: "William Lawson's Blended Scotch",
    description:
      "A bold and smooth blended Scotch whisky with notes of toasted barley, citrus, and a hint of spice. Approachable and versatile, it’s perfect neat, on the rocks, or mixed in cocktails.",
    price: 9000,
    category: "spirits",
    image: "/images/william-lawsons.png",
    tags: ["Whisky", "Scotch", "Blended", "Classic"],
  },
  {
    id: "spirit-20",
    name: "Martell VS",
    description:
      "A refined cognac with elegant notes of fruit, spice, and wood, offering a smooth and sophisticated finish.",
    price: 100000,
    category: "spirits",
    image: "/images/martell.png",
    tags: ["Cognac", "French"],
    popular: true,
  },
  {
    id: "spirit-20",
    name: "Martell VSOP",
    description:
      "A refined cognac with elegant notes of fruit, spice, and wood, offering a smooth and sophisticated finish.",
    price: 150000,
    category: "spirits",
    image: "/images/martell.png",
    tags: ["Cognac", "French"],
    popular: true,
  },
  {
    id: "spirit-3",
    name: "Jameson Black Barrel",
    description:
      "Triple-distilled smooth whiskey with perfect balance of spicy, nutty and vanilla notes with hints of sweet sherry.",
    price: 75000,
    category: "spirits",
    image:
      "https://barrels.ng/wp-content/uploads/2021/07/PreviewMedium-Black-Barrel-750ml-1-removebg-preview.png",
    tags: ["Whiskey", "Irish"],
    popular: true,
  },
  {
    id: "spirit-4",
    name: "Johnnie Walker Black Label",
    description:
      "An iconic blended Scotch whisky with rich, complex flavors of sweet fruit and elegant smoke.",
    price: 75000,
    category: "spirits",
    image: "https://www.supermart.ng/cdn/shop/files/spspwh407.png?v=1688719370",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-40",
    name: "Johnnie Walker Blonde",
    description:
      "An iconic blended Scotch whisky with rich, complex flavors of sweet fruit and elegant smoke.",
    price: 45000,
    category: "spirits",
    image: "https://www.supermart.ng/cdn/shop/files/spspwh407.png?v=1688719370",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-5",
    name: "Baileys Irish Cream",
    description:
      "The original Irish cream liqueur blending Irish whiskey with fresh dairy cream and chocolate.",
    price: 50000,
    category: "spirits",
    image: "/images/baileys.png",
    tags: ["Liqueur", "Cream"],
    ingredients: ["Irish whiskey", "Cream", "Cocoa"],
  },
  {
    id: "spirit-60",
    name: "Olmeca Tequila",
    description:
      "A premium Mexican tequila crafted from hand-picked blue agave, offering a smooth yet bold flavor with hints of citrus and spice.",
    price: 45000,
    category: "spirits",
    image: "/images/Olmeca.png",
    tags: ["Tequila", "Agave"],
    ingredients: ["Blue agave", "Citrus notes", "Spice"],
  },

  {
    id: "spirit-10",
    name: "Jack Daniel's",
    description:
      "Tennessee whiskey with a smooth, mellow flavor and charcoal mellowing.",
    price: 50000,
    category: "spirits",
    image: "/images/jack-daniels.png",
    tags: ["Whiskey", "Tennessee"],
  },
  {
    id: "spirit-11",
    name: "Blue Label",
    description:
      "Ultra-premium blend of rare Scotch whiskies. Exceptionally smooth.",
    price: 400000,
    category: "spirits",
    image:
      "https://www.myminibar.ng/cdn/shop/products/5415d715-0cf0-4983-8202-1eb825b6af6c.png?v=1624563788",
    tags: ["Whisky", "Luxury"],
  },
  {
    id: "spirit-12",
    name: "Red Label",
    description: "Bold and vibrant Scotch whisky with a fiery kick.",
    price: 50000,
    category: "spirits",
    image: "/images/red-label.png",
    tags: ["Whisky", "Scotch"],
  },
  {
    id: "spirit-130",
    name: "Monkey Shoulder",
    description:
      "Smooth and rich blended malt Scotch whisky with notes of vanilla, spice, and a hint of citrus.",
    price: 70000,
    category: "spirits",
    image: "/images/monkey-shoulder.png",
    tags: ["Whisky", "Scotch", "Blended Malt"],
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
    id: "spirit-13",
    name: "Glenfiddich 15yrs",
    description: "Aged single malt Scotch whisky with pear and oak notes.",
    price: 170000,
    category: "spirits",
    image: "/images/glefiddich.png",
    tags: ["Whisky", "Single Malt"],
  },
  {
    id: "spirit-13",
    name: "Glenfiddich 18yrs",
    description: "Aged single malt Scotch whisky with pear and oak notes.",
    price: 230000,
    category: "spirits",
    image: "/images/glefiddich.png",
    tags: ["Whisky", "Single Malt"],
  },
  {
    id: "spirit-13",
    name: "Glenfiddich 20yrs",
    description: "Aged single malt Scotch whisky with pear and oak notes.",
    price: 280000,
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
    price: 60000,
    category: "spirits",
    image:
      "https://cheers.com.np/uploads/products/995494496485864758607514492044902537728351.png",
    tags: ["Whisky", "Japanese", "Smooth"],
  },
  {
    id: "spirit-17",
    name: "Campari",
    description:
      "Italian bitter aperitif with a distinctive red color and herbal flavor profile.",
    price: 40000,
    category: "spirits",
    image: "https://www.pngplay.com/wp-content/uploads/13/Campari-Free-PNG.png",
    tags: ["Aperitif", "Italian", "Bitter"],
  },
  {
    id: "spirit-18",
    name: "Macallan 12yrs",
    description:
      "Premium single malt Scotch whisky aged for 12 years with rich, complex flavors.",
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
    price: 20000,
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
    price: 20000,
    category: "wines",
    image: "/images/four-cousins.png",
    tags: ["Red", "Semi-sweet"],
  },
  {
    id: "wine-300",
    name: "Chamdor",
    description:
      "A premium non-alcoholic sparkling wine. Offers the taste and experience of champagne without the alcohol.",
    price: 8000,
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
    image:
      "https://brewscanner.ae/wp-content/uploads/2024/12/ROYAL-CIRCLE-PREMIUM-WHISKY.png",
    tags: ["Whisky", "Premium", "Big Bottle"],
  },
  {
    id: "spirit-7",
    name: "Royal Cycle (Small)",
    description:
      "A compact bottle of Royal Cycle whisky, featuring a rich and smooth taste with hints of oak and warm spices.",
    price: 6000,
    category: "spirits",
    image:
      "https://brewscanner.ae/wp-content/uploads/2024/12/ROYAL-CIRCLE-PREMIUM-WHISKY.png",
    tags: ["Whisky", "Compact", "Smooth"],
  },
  {
    id: "wine-8",
    name: "Baron Romero",
    description: "Elegant Spanish wine with subtle oak and dark fruit tones.",
    price: 20000,
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
    description:
      "A bold wine with a complex profile of ripe fruits and subtle spice.",
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
    price: 20000,
    category: "wines",
    image: "/images/dominio.png",
    tags: ["Red Wine", "Spanish"],
  },
  {
    id: "wine-20",
    name: "Cape Ridge",
    description:
      "South African wine with balanced acidity and fruit-forward character.",
    price: 20000,
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
    image:
      "https://barrels.ng/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-5.01.49-PM-removebg-preview.png",
    tags: ["Red Wine", "Full-bodied"],
  },
  {
    id: "wine-22",
    name: "Declan White",
    description:
      "Crisp white wine with fresh acidity and light, refreshing character.",
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
    id: "non-alcoholic-1",
    name: "Climax Energy Drink",
    description:
      "A powerful energy drink packed with caffeine and vitamins to boost stamina, focus, and endurance. Ideal for long nights and active days.",
    price: 3000,
    category: "non-alcoholic",
    image: "/images/climax.png",
    tags: ["Energy Drink", "Non-Alcoholic"],
    popular: true,
  },
  {
    id: "non-alc-1",
    name: "Malta Guinness",
    description:
      "A non-alcoholic malt drink with a rich, sweet flavor. Packed with vitamins and minerals for a refreshing energy boost.",
    price: 1500,
    category: "non-alcoholic",
    image:
      "https://www.drinksonline.store/wp-content/uploads/2020/11/Guinness_Malta_Nigeria_330ML_StubbyCan-2-1.png",
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
    description:
      "Non-alcoholic sparkling wine with a fresh and lively profile.",
    price: 10000,
    category: "wines",
    image: "/images/pure-heaven.png",
    tags: ["Non-alcoholic", "Wine"],
  },
  {
    id: "non-alc-6",
    name: "Coca-Cola",
    description:
      "Classic carbonated soft drink with a unique blend of flavors for a crisp and refreshing taste.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/coke.png",
    tags: ["Soda", "Cola"],
    popular: true,
  },
  {
    id: "non-alc-7",
    name: "Sprite",
    description:
      "Lemon-lime flavored soft drink with a clean, crisp taste. Perfectly refreshing and caffeine-free.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/sprite.png",
    tags: ["Soda", "Lemon-Lime"],
    popular: true,
  },
  {
    id: "non-alc-8",
    name: "Fanta",
    description:
      "Bright and bubbly orange-flavored soda, packed with fruity flavor and fun.",
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
    price: 1000,
    category: "non-alcoholic",
    image: "/images/water.png",
    tags: ["Water", "Pure"],
  },
  {
    id: "non-alc-10",
    name: "Monster",
    description:
      "High-energy drink with caffeine and taurine for maximum energy boost.",
    price: 3000,
    category: "non-alcoholic",
    image: "/images/monster.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-11",
    name: "Predator",
    description:
      "Energy drink designed to unleash your inner strength and vitality.",
    price: 1000,
    category: "non-alcoholic",
    image: "/images/predator.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-12",
    name: "Amstel Malt",
    description:
      "Non-alcoholic malt drink with a rich, smooth taste and nutritional benefits.",
    price: 1500,
    category: "non-alcoholic",
    image: "/images/amstel-malt.png",
    tags: ["Malt", "Non-alcoholic"],
  },
  {
    id: "non-alc-13",
    name: "Maltina",
    description:
      "Popular Nigerian malt drink with vitamins and minerals for energy.",
    price: 1500,
    category: "non-alcoholic",
    image: "/images/maltina.png",
    tags: ["Malt", "Nigerian", "Energy"],
  },
  {
    id: "non-alc-14",
    name: "Chi Exotic",
    description: "Premium fruit juice blend with exotic tropical flavors.",
    price: 3500,
    category: "non-alcoholic",
    image: "/images/chi-exotic.png",
    tags: ["Juice", "Exotic", "Tropical"],
  },
  {
    id: "non-alc-15",
    name: "Holandia",
    description:
      "Premium dairy milk with rich, creamy taste and nutritional value.",
    price: 3500,
    category: "non-alcoholic",
    image: "/images/hollandia.png",
    tags: ["Milk", "Dairy", "Premium"],
  },

  // MEALS - GRILLED ITEMS
  {
    id: "meal-1",
    name: "Grilled Tilapia Fish",
    description:
      "Charcoal-grilled whole fish served with spicy pepper sauce and a side of your choice.",
    price: 15000,
    category: "grill",
    image:
      "https://cdn.momsdish.com/wp-content/uploads/2020/07/Grilled-Tilapia-Recipe-06-scaled.jpg",
    tags: ["Grilled", "Spicy", "Seafood"],
    ingredients: ["Fish", "Pepper", "Onions", "Oil", "Spices"],
    popular: true,
  },
  {
    id: "meal-2",
    name: "Pepper Goat Meat",
    description:
      "Tender pieces of goat meat simmered in hot pepper sauce. A bold and spicy Nigerian delicacy.",
    price: 7000,
    category: "grill",
    image: "/images/goat-meat.jpg",
    tags: ["Spicy", "Goat Meat", "Delicacy"],
    ingredients: ["Goat Meat", "Pepper", "Onions", "Spices", "Oil"],
  },
  {
    id: "meal-3",
    name: "Grilled Chicken",
    description:
      "Juicy chicken pieces sautéed in rich pepper sauce for that spicy kick.",
    price: 10000,
    category: "grill",
    image: "/images/grilled-chicken.webp",
    tags: ["Chicken", "Spicy", "Nigerian"],
    ingredients: ["Chicken", "Pepper", "Seasoning", "Oil", "Onions"],
  },
  {
    id: "meal-3",
    name: "Chicken Wings & Chips",
    description:
      "Crispy golden chicken wings served with freshly fried chips – a perfect combo of crunch and flavor.",
    price: 5000,
    category: "grill",
    image:
      "https://media.istockphoto.com/id/1336435582/photo/roasted-chicken-wings-with-spices-in-plate.jpg?s=612x612&w=0&k=20&c=WbJgFVo9CtWpIefdrhpEdoVKpLqZqWpFkNwtCXGFGa0=",
    tags: ["Chicken", "Wings", "Chips", "Snack"],
    ingredients: ["Chicken Wings", "Potatoes", "Spices", "Oil", "Seasoning"],
  },

  {
    id: "meal-4",
    name: "Peppered Beef & Fries",
    description:
      "Flavorful beef chunks cooked in spicy pepper sauce. A favorite among spice lovers.",
    price: 5000,
    category: "grill",
    image: "/images/peppered-meat.jpeg",
    tags: ["Beef", "Spicy", "Classic"],
    ingredients: ["Beef", "Pepper", "Onions", "Spices"],
  },
  {
    id: "meal-5",
    name: "Yam Chips",
    description:
      "Crispy deep-fried yam sticks served hot, perfect as a side or snack.",
    price: 1500,
    category: "grill",
    image: "/images/yam-chips.png",
    tags: ["Yam", "Crispy", "Snack"],
    ingredients: ["Yam", "Salt", "Oil"],
  },
  {
    id: "meal-10",
    name: "Asun",
    description:
      "Grilled spicy goat meat chunks, smoky and full of bold Nigerian flavor.",
    price: 3000,
    category: "grill",
    image:
      "https://img-global.cpcdn.com/recipes/9530d8a18ea64f77/1200x630cq90/photo.jpg",
    tags: ["Goat Meat", "Spicy", "Grilled"],
    ingredients: ["Goat Meat", "Pepper", "Onions", "Spices", "Oil"],
  },
  {
    id: "meal-11",
    name: "Fried Turkey",
    description: "Juicy turkey pieces fried to perfection with a spicy kick.",
    price: 8000,
    category: "grill",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/11/fried-turkey-recipe-3-edited.jpg",
    tags: ["Turkey", "Spicy", "Fried"],
    ingredients: ["Turkey", "Pepper", "Oil", "Seasoning", "Onions"],
  },
  {
    id: "meal-12",
    name: "Grilled Catfish",
    description:
      "Fresh catfish grilled to perfection with a choice side of fries or plantain.",
    price: 15000,
    category: "grill",
    image: "/images/catfish-barbeque.jpg",
    tags: ["Catfish", "Grilled", "Seafood"],
    ingredients: ["Catfish", "Pepper", "Oil", "Spices", "Onions"],
  },
  {
    id: "meal-13",
    name: "Grilled Croaker Fish",
    description:
      "Iced croaker fish grilled to perfection with a choice side of fries or plantain.",
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
    name: "Full Catfish Pepper Soup",
    description: "Fresh catfish cooked in a peppery aromatic broth.",
    price: 20000,
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
    price: 6000,
    category: "soup",
    image: "/images/goat-meat.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Goat meat", "Pepper", "Local herbs", "Spices"],
  },
  {
    id: "meal-8",
    name: "Chicken Pepper Soup",
    description: "Soft chicken cuts simmered in spicy pepper soup broth.",
    price: 5000,
    category: "soup",
    image:
      "https://quickneedsstore.com/storage/customers/eyoc0cswaaam0lf-1.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Chicken", "Pepper", "Local herbs", "Spices"],
  },
  {
    id: "meal-9",
    name: "Assorted Meat Pepper Soup",
    description: "A flavourful mix of tripe and offal in rich pepper soup.",
    price: 5000,
    category: "soup",
    image:
      "https://raynatglobal.com/wp-content/uploads/2024/01/Assorted-meat-pepper-soup-1.jpg",
    tags: ["Soup", "Spicy", "Traditional"],
    ingredients: ["Tripe", "Offal", "Pepper", "Local herbs"],
  },
  // NEW ADDITIONS - SPIRITS & VODKAS
  {
    id: "spirit-19",
    name: "Tequilla Shot",
    description:
      "Premium tequila served as a shot, perfect for celebrations and parties.",
    price: 3000,
    category: "spirits",
    image: "/images/tequila.png",
    tags: ["Tequila", "Shot"],
  },
  {
    id: "spirit-20",
    name: "Tequilla Bottle",
    description:
      "Full bottle of premium tequila with smooth agave flavor and clean finish.",
    price: 35000,
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
    image:
      "https://worldwineliquors.com/wp-content/uploads/2019/03/ddb9e080-6191-4115-9691-9ba2ad6263b4.png",
    tags: ["Vodka", "Small"],
  },
  {
    id: "spirit-21",
    name: "Big Sky Vodka",
    description: "Premium vodka in a compact bottle with clean, crisp taste.",
    price: 52000,
    category: "spirits",
    image:
      "https://worldwineliquors.com/wp-content/uploads/2019/03/ddb9e080-6191-4115-9691-9ba2ad6263b4.png",
    tags: ["Vodka", "Small"],
  },
  {
    id: "spirit-22",
    name: "Small Label 5",
    description:
      "Compact bottle of Label 5 Scotch whisky with sweet vanilla notes and smooth finish.",
    price: 5000,
    category: "spirits",
    image: "/images/labe5.png",
    tags: ["Whisky", "Scotch", "Small"],
  },
  {
    id: "spirit-23",
    name: "Small Don Royal",
    description:
      "Premium whisky in a smaller bottle with rich, smooth character.",
    price: 6000,
    category: "spirits",
    image: "/images/don-royale.png",
    tags: ["Whisky", "Small"],
  },
  {
    id: "spirit-24",
    name: "Neft Vodka",
    description:
      "Ultra-premium vodka with exceptional purity and smooth taste.",
    price: 50000,
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
    description:
      "Premium Neft vodka in a compact bottle with exceptional smoothness.",
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
    description:
      "Irish whiskey with innovative aging and distinctive flavor profile.",
    price: 50000,
    category: "spirits",
    image:
      "https://d1mp96cehvcx4f.cloudfront.net/wp-content/uploads/sites/4/2024/02/09115900/FY24_Teeling_Bottle_SmallBatch.png",
    tags: ["Whiskey", "Irish", "Premium"],
  },
  {
    id: "spirit-29",
    name: "Small Campari",
    description:
      "Italian bitter aperitif in a compact bottle with distinctive herbal flavor.",
    price: 12000,
    category: "spirits",
    image: "https://www.pngplay.com/wp-content/uploads/13/Campari-Free-PNG.png",
    tags: ["Aperitif", "Italian", "Bitter", "Small"],
  },
  {
    id: "spirit-30",
    name: "Small Jameson",
    description:
      "Triple-distilled Irish whiskey in a compact bottle with smooth, balanced flavor.",
    price: 15000,
    category: "spirits",
    image: "/images/jameson.png",
    tags: ["Whiskey", "Irish", "Small"],
  },
  {
    id: "spirit-31",
    name: "Black Bullet",
    description:
      "A strong alcoholic energy drink in a compact can, popular for its bold flavor and stimulating effect.",
    price: 3000,
    category: "spirits",
    image:
      "https://omamall.com.ng/image/cache/catalog/Groceries/bullet-vodka-mixed-drink-550x550w.jpg",
    tags: ["Energy", "Alcohol", "Can"],
  },

  // NEW ADDITIONS - WINES
  {
    id: "wine-23",
    name: "Small Veleta",
    description:
      "Light and crisp wine in a compact bottle with floral aromas and smooth palate.",
    price: 4000,
    category: "wines",
    image: "/images/veleta.png",
    tags: ["Wine", "Small"],
  },
  {
    id: "wine-24",
    name: "Blue Nun",
    description:
      "German wine with a fresh, fruity character and balanced acidity.",
    price: 8000,
    category: "wines",
    image:
      "https://images.vivino.com/thumbs/zZMXymX7T1ed2vEw_VyyeQ_pl_375x500.png",
    tags: ["Wine", "German"],
  },
  {
    id: "wine-25",
    name: "Maison Castel",
    description:
      "French wine with elegant character and refined taste profile.",
    price: 15000,
    category: "wines",
    image: "/images/maison-castel.png",
    tags: ["Wine", "French"],
  },
  {
    id: "wine-26",
    name: "African Secret",
    description:
      "Premium African wine with rich, complex flavors and smooth finish.",
    price: 17000,
    category: "wines",
    image: "/images/african-secret.png",
    tags: ["Wine", "African", "Premium"],
  },
  {
    id: "wine-rendezvous-red",
    name: "Rendez-Vous Red Wine",
    description:
      "A smooth and semi-sweet red sparkling wine, loved for its fruity taste and light bubbles. Perfect for celebrations, casual sipping, or pairing with spicy dishes.",
    price: 10000,
    category: "wines",
    image: "/images/rendezvous-red.png",
    tags: ["Wine", "Red", "Sparkling", "Nigeria"],
  },
  {
    id: "toni-cranberry",
    name: "Toni Sparkling Cranberry",
    description:
      "A refreshing sparkling cranberry drink with a sweet-tart taste and lively bubbles. Perfect for parties, celebrations, or simply enjoyed chilled on a hot day. Non-alcoholic and loved by all ages.",
    price: 1500,
    category: "non-alcoholic",
    image: "/images/toni-cranberry.png",
    tags: ["Non-Alcoholic", "Sparkling", "Cranberry", "Nigeria"],
  },
  {
    id: "whisky-glenlivet-15",
    name: "The Glenlivet 15 Years",
    description:
      "A classic single malt Scotch whisky aged 15 years in oak casks. Smooth and approachable with notes of citrus fruit, honey, and vanilla. Perfect for both new whisky drinkers and seasoned enthusiasts.",
    price: 170000,
    category: "spirits",
    image:
      "https://www.theglenlivet.com/wp-content/uploads/2021/10/15-year-old-single-malt-whisky-bottle-70cl-aspect-ratio-15-53.png",
    tags: ["Whisky", "Scotch", "Single Malt", "15 Years Aged"],
  },
  {
    id: "wine-devina-red",
    name: "Devina Red Sparkling Wine",
    description:
      "A semi-sweet red sparkling wine with fruity flavors and gentle bubbles. Smooth, vibrant, and perfect for celebrations, dinners, or casual sipping.",
    price: 4000,
    category: "wines",
    image: "/images/devina-red.png",
    tags: ["Wine", "Red", "Sparkling", "Nigeria"],
  },

  // {
  //   id: "wine-27",
  //   name: "Frontera",
  //   description:
  //     "Chilean wine with vibrant fruit flavors and smooth, approachable taste.",
  //   price: 7000,
  //   category: "wines",
  //   image: "/images/frontera.png",
  //   tags: ["Wine", "Chilean"],
  // },
  {
    id: "wine-28",
    name: "4th Street",
    description:
      "South African wine with fresh, fruity character and easy-drinking style.",
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
    image:
      "https://images.commerce7.com/robertson-winery/images/medium/c7-w-chapel-sweet-rose-1-5l-1629801220603.png",
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
    description:
      "Compact wine bottle perfect for intimate occasions with smooth taste.",
    price: 8000,
    category: "wines",
    image: "/images/small-moments.png",
    tags: ["Wine", "Small"],
  },

  // NEW ADDITIONS - NON-ALCOHOLIC
  {
    id: "non-alc-16",
    name: "Red Bull",
    description:
      "Premium energy drink with caffeine, taurine, and B-vitamins for energy boost.",
    price: 3000,
    category: "non-alcoholic",
    image: "https://pngfre.com/wp-content/uploads/Red-Bull-3.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-17",
    name: "Power Horse",
    description:
      "Energy drink designed to boost stamina and performance with natural ingredients.",
    price: 3000,
    category: "non-alcoholic",
    image: "https://dnk1kazq09utu.cloudfront.net/1639059887695_776.png",
    tags: ["Energy", "Caffeinated"],
  },
  {
    id: "non-alc-18",
    name: "Declan Juice",
    description:
      "Premium fruit juice with natural flavors and refreshing taste.",
    price: 5000,
    category: "non-alcoholic",
    image: "/images/declan-juice.png",
    tags: ["Juice", "Premium", "Natural"],
  },
  {
    id: "non-alc-30",
    name: "Martinelli's Gold Medal Apple Juice",
    description:
      "A classic favorite since 1868. Made from 100% U.S.-grown fresh apples, Martinelli’s Gold Medal Apple Juice is cold-pressed and bottled to capture the crisp, refreshing taste of real orchard-fresh fruit.",
    price: 5000,
    category: "non-alcoholic",
    image:
      "https://www.martinellis.com/wp-content/uploads/2023/01/Apple-Juice-1-Liter_740x940.png",
    tags: [
      "100% Apple Juice",
      "Cold-Pressed",
      "Family Tradition",
      "Non-Alcoholic",
    ],
  },

  //cigarettes
  {
    id: "cigarette-edge",
    name: "Edge Cigarettes",
    description:
      "A smooth and affordable cigarette brand, popular for its balanced taste and easy draw.",
    price: 2000,
    category: "smoke",
    image: "/images/edge.png",
    tags: ["Cigarette", "Tobacco", "Classic"],
  },

  {
    id: "cigarette-marlboro",
    name: "Marlboro Cigarettes",
    description:
      "One of the world’s leading cigarette brands, Marlboro is known for its bold flavor and smooth smoking experience.",
    price: 2500,
    category: "smoke",
    image: "/images/marlboro.png",
    tags: ["Cigarette", "Tobacco", "Premium"],
  },

  {
    id: "cigarette-chesterfield",
    name: "Chesterfield Cigarettes",
    description:
      "A classic brand offering a robust tobacco taste with a smooth finish at an affordable price.",
    price: 2000,
    category: "smoke",
    image: "/images/chesterfield.png",
    tags: ["Cigarette", "Tobacco", "Classic"],
  },

  {
    id: "cigarette-dunhill",
    name: "Dunhill Cigarettes",
    description:
      "A premium cigarette brand with a refined taste and smooth draw, crafted for sophisticated smokers.",
    price: 2000,
    category: "smoke",
    image: "/images/dunhill.png",
    tags: ["Cigarette", "Tobacco", "Premium"],
  },

  {
    id: "cigarette-rothmans",
    name: "Rothmans Cigarettes",
    description:
      "A trusted international brand offering a balanced and satisfying smoking experience.",
    price: 1500,
    category: "smoke",
    image: "/images/rothmans.png",
    tags: ["Cigarette", "Tobacco", "Classic"],
  },

  {
    id: "cigarette-esse",
    name: "Esse Cigarettes",
    description:
      "A slim and stylish cigarette brand, known for its light taste and modern appeal.",
    price: 2000,
    category: "smoke",
    image: "/images/esse.png",
    tags: ["Cigarette", "Tobacco", "Slim"],
  },

  {
    id: "cigarette-benson-switch",
    name: "Benson Switch",
    description:
      "A flavored cigarette with capsule technology that lets you switch between classic tobacco and a refreshing menthol taste.",
    price: 2000,
    category: "smoke",
    image: "/images/benson-switch.png",
    tags: ["Cigarette", "Tobacco", "Flavored"],
  },

  {
    id: "cigarette-benson-brown",
    name: "Benson Brown",
    description:
      "A bold and full-bodied variant of Benson cigarettes, offering a rich and intense smoking experience.",
    price: 2000,
    category: "smoke",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDQ8PDw0NDw0PDw8NDg0NFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAPFysdFR0rKysrLSsrKystLS0rLSsrLSsrKystLSs3LS0rLS03NystLCsrNystKy03KysrKysrK//AABEIARcAtQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBgQFB//EAEAQAAIBAgEGCggEBQUBAAAAAAABAgMRIQQSMVFSsgUGE0FhcXOhsdEiMjM0coGRkgcUI0MWQqLB8BUkYuHxRP/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAIFA//EACQRAQEAAgEDBAMBAQAAAAAAAAABAjIDERIxExQhUQQiUkFh/9oADAMBAAIRAxEAPwDqcv8AbVu1q7zMDfL/AG1btam8zA8PPat2GsMAA4UCGAVLJZZLAkllsliCCZFsloDNktGjIaKIZDNGRJEEMllsllEEtFshgSJlEsDsfw+9XKfipbrAPw+9XKfipeDA34axlz2rx8IL9at2tTeZijbL3+tW7WrvMwRi5Nq0YeIoBDOHQEMQQMmxQgqSWWyWgJaJLZLAhoho0ZLLBmyWXYloDNklyJYGbEx3T0Y20gwIkSy2SxR1/wCH3q5T8VLdYB+H/q5T8VLdYG/j1jLn5rxZf7et2tXeZgjbhD29btau8zFGHk2rRj4igADl0YCGEIBiCkSUxASSyrEtCCSWUxMDNkyLZnUdk3qTeJR5Mtr5qsmk7N9K1PpPI8/DOndPOs0tOrEmtUvacrO6alzaEnZLXiVKpHMg1Fu+Fk8Iy6udn06dEZwkm5Wk1pm3ZWzsFbXzlcrUi1nSvdWSwi7259RDqU44ZspN4WwS7sQyicb6LSzcW8c2XMn1F6D3wldJppikefJZNPMwslfpv1856mfPKfKuu/D9ejlHxUt1iHxA9XKPipbrA3cesZc9q8HCHt63a1d5mCZtwh7et21XeZijDybVox8RVxkjRy6UAhgAhgAiSyWgJYi2iAiGJlslhWbMMqTzXZpaLtu3o8+J6JHl4QinTlduK53puWeR8mSu23FOMNCi24t318+vpPQqaUIyVlf05WxWd/K30JiqTxTvayu4W9FfXm6CFUzWsIrQmlG+cufrPqiJ42cM1Scl6Ks2pY4rWh5VTjnqNk8/nT/m52l0lyk4KV1CHpZuclo19xlfUkm1g4qzbAMkzrrQpJ2d3aTjz3XOe+x4oWcoLO5751sZO2joWB7mcZEddxB0ZT8VLwYh8QPVyn4qW6wNuGsZs9q+Zwj7et21XfZkjXhH29btqu8zFMxcm1aMfEWhpkoZwqhkoaCmAAEIAGFIlopksCSGWxMIhoyrWt6SusFY2ZEkFeK1KLvbG7xld9HP8iuWi8dXRibVLq1lf0ldYerzmE+UvglpwvbR/lzoLl4/20EVJwcbtXi03iuZB+pqXdhhjbpvcS5S6ulmtq/Qv8sBEIU7qyx0J46rmrRdiWB1vEH1cp+KlusA4herlHxUt1gbcNYy57V8fhFy/MV8FJctV0NRa9J6zFOWw/up+Z6OEfb1u2q77MEY+TatGGsPOlsP7oeY1KWw/uh5gikcOiUpbD+6HmVnS2H90PMaHcCc6Ww/up+Y86Ww/uh5lABGfLYl90PMM+Ww/up+ZoAGWdLYf3Q8xOUth/dDzNRWAyblsP7oeZLcth/dDzNiWEZNy2H90PMm8th/dT8zVksKyedsP7qfmS87Yf3Q8zZogDJ52x/VDzJtLZ/qp+Zq0QUZtS2f6oeZMlLZ+bnDDvNJIlgdXxCVo5Rjd51K9lZaGAcQ9GUfFS8GBu49Yy5+a+Pwi/163bVd9mKNeEfb1u2q77MUzHybVox8RSKUkSNHMiqz0HKImwU1pfyXUi2SC+URSdzOaxFHBrrsLjOg3ABHIJOxnyq6SZYl09DXSd9AJhJELSrf4jRnNEEysi7CaJBDRLiWRUxw+bO7jBGGv5jdLpQ4xu+80EgwlS6UYyXzN8oehfMxkiVY6niLoyj4qXgwHxE0ZR8VLwYG7j1jLntXxOEvb1+2q77MIm3CXvFftqu+zFGLPatGPiLTG2KIMmK0N4MtNJdWBna7s+spxS0FtClL/wA0sqlF3u/kufrYlhijWLuhRZEqiWHPqWLIlJlUVZdOOJz0GdxxV8LtdXOE1iKLs7nf+DWMEtHm38wJqpWvd/K+PRYlU3ztroTdkcC2TIpR5iJ6RjBIlF4vX4BLxwE6aO6KSsCYWIqvC2vD5D/EZXvjrJaLsSzh06niJoyj4qXgwHxG0ZR8VLdYHocesZc/NfA4S94r9tV32Yo14S94r9tW32Yp9CfXgYc9q0Y6xrEq5kpvUvq/ILvUvq/ISyKunr1u5UiLy1R+r8gSetd7HwKcrf26WWlZExhbF3b6eY0JaMy6b5iHTfNbqd13goS6F835FtlGlRYGRpybemV+hYClT1fR+YlkChpxd3zakaMx5OXQvm/I0UGsW7vm5kc06m2ZXHKM/wDj9X5CzJf8fq/I6nwEsX1YFCSfR1J6X9BPO1R+v/QDuZyd30LBFelqX1fkTd89kuh/9C0iWiWWS0cq6fiNoyj4qW6wFxI0ZR8VLwYzdx39Yy57Vz3Cb/3Fftqu+zBM24T94r9tV32fP4SyxUKNSrg3GLcYv+aeiMfmzJlOuVaMb8R7UVFnMx4xzUE3SjKcq/IQhGWMrRTm/k7ntqcMuNWnScI/qQbjUUnmqppzXhs4vUW8WR3R9tFJnOx4yY5vJNTdVUFBtrNk7tSk9Gbmpu6E+M/o0p8i3CdR05zT9X0nGEkrYqTQ9LI7o6UaPhZdw7yU6VNKDk5qFZtvNpScc6Metl8N8N/l5QUYqX6VWtUve8KcV6OjncmkT0qd0fbTKOep8O1OVpUHThykqMKtW0nmUZTtaD+qMo8a4qTvTzqedlCjKDzpOFLTUa5k3ZF9LI7o6cDm5cZ7UnPk4ud6MI0VJtqpUeEG7Wuo44Hrjw0+XpUHTSdVXjNNuMnpcbrQ0lzk9LI7o9/CGXQoQU53d2opLS2fN/iWjs1P6T53GbKeUrcnHFU/Rsueb0/2REMjjUS5NpL0adRTi+UpSs7z1PRI6mE6fL1OP8bDslzfU/iSjsVO4X8R0tip3Hxv9N9FTz7Qtd3VpK8rKy6bN/IKfBt5xg5YyWfgnZU8cW9dlcvZi+vtuF9j+I6WxU7hfxFS2J/RHx3kGDldxWY6qjZyahe0U3rZNegqfJxzM6bheeLs5yxiumysO3E9twvsvjFS2Z9wnxgpbM/ojwTyaHKcmlH0IvlHad4tRvKWn5ExyGNlnKUc2Eq1RrSot+jDrHbi59vxfT3/AOvUtmfcJ8PUtmfcfMjwd6Si5Wk0pNWvmQavdvoR46iin6LclbS1bnLMMXc/E4svD9S/D3LI1YZRKKatOmsbbLA8X4U+yyrtae6xGvDGdseJ+RhMeTKR4+E/eK/bVd9nlqU4yVpRUldO0ldX1np4U94r9tV32YJnn57VcfEQslp4fpww0eisOo0jQgv5I/Rc6s+4aKTJ3Vehfl6dnHMhZu9s1adZaoQ0Zkbejhmq2GjDoGikTuv2dIieS05NuVOEm7Xbiru2i/UXPJacneUISbSjdxTeatCKKQ7qdIz/ACtK7lycM52edmq/1Kp5NTjfNpwims1pRSzo6jRDHdftOkZLIqWC5OnZPOtmr1troZNdU6MZVcyKcIt3UUnoskelA1fBq61FmVdY9Jer89lOTbk27t5zeN76zallkoqeluScVJt3je12ul2O65OOzH7UHJx2Y/aj6epHpe+nTp2uA5SWPpSxsni8UuYFVnhaUlbBYvA7/ko7MfohclHZj9EPUn0e+x/lwPKztbOlq0u1ukTqSund3Wh3xXUd86cdmP2oXJR2Y/RD1f8Ah77H+XBZ8k7pyTel3d31j5ae1LRbS9B3fJx2Y/REcnHZX0Q9WfR77H+XDOpLXLRbS9BJ3TpR2V9ETKnHZX0Q9Vffz+Xv/Cn2WVdrT3WI+xxKjZV7JL0qWhJczA2YZ/rHj83L3clrmeFPeK/bVt9nnRvwp7xlHb1d9nnRg5Nq+mPiNEUiEUjlWiKTIRRBaKRCZSYFopMhMpBFXGSNBTGABAAAAmibFCuBLRLLZLAhkstksK6PiZor9dLwYD4mf/R10vBgehxz9Yy5+a5XhT3jKO2rb7MEbcK+8ZR29bfZhFmPPatOPiLiykQikcKtFoziWmBaKRCLRBSKIRSCLGShoChiQwoAAAQmUICRMbQmBLJZbE0EdDxM/f66XgwHxN/f66XhIR6HHrGbPauT4U95yjt62+zzpm/CvvGUdvW32edGLPatGPiNBpkIpHLpoikRFlIDRFIhMpEFopEoaAsaJRSCGUKwwpgCAIQDAKTJKEwJZLLZLCOg4n/v9dPwYD4nr2/XS8GBv49YzZeXI8K+85R29bfZ5kb8K+85R29bfZlBKxjz2rTj4gTKTGki1FHKlFlDUVqKUVqASLQ1FailFECTKQ1FFJAJFIeahpIIEMaSCwUDEAAMQmAxCuJsBsQmwiB0XE/9/rpeDAOKH7/XS8GBv49Yy57Vx3Cr/wBzlHb1t9mVPQacLe85R29bfZlTeBjz2rTj4jQtMgpM5VomUjNFoC0UQi0QUikQikwLQyUNBFIolDCmAAEAhiCpaApkgSwiNhFaQjouKH7/AF0vCQBxR/f66fgxm/jv6xmz81xfC3vOUdvW32YwNeF/eco7etvsxhoMee1aMfEaplIzTLRy6aJjRCKA0RSIRSZBoikZxZaAtDRKGgi0MlDQVQCGEAhgFJiYxMCWERgucI6Hij+/10/BgHFH9/rpeDA38esZs/NcRwxVSynKLv8Afrb7PKq8dfcwAycm1aMfENZQtrxLjXW13MAOXRrKFtdzLWULa7mIALWUx2u5lRymO13MAIK/Mx2u5lLKY7XcxgA1lMdruZaymO13MQAWspjteI1lMdruYwAaymO13Mf5mO13MYEQLKIa+5j/ADENruYAUH5iG13MbyiG13MQEB+Yhr7mHLw19zAAro+J9RPl7a6XgwADfx6xly8v/9k=",
    tags: ["Cigarette", "Tobacco", "Strong"],
  },
  {
    id: "meal-8",
    name: "Cow Leg (Nkwobi style)",
    description:
      "Delicacy made with tender cow leg parts in spicy palm oil sauce.",
    price: 7000,
    category: "traditional",
    image: "https://assets.unileversolutions.com/recipes-v2/159354.jpg",
    tags: ["Nkwobi", "Spicy"],
    ingredients: ["Cow leg", "Palm oil", "Utazi", "Seasoning"],
  },
  {
    id: "meal-9",
    name: "Isi Ewu",
    description:
      "Goat head prepared in traditional Nkwobi style with rich spices.",
    price: 15000,
    category: "traditional",
    image: "https://www.edofood.com.ng/wp-content/uploads/2024/04/OIP-7.jpg",
    tags: ["Delicacy", "Spicy", "Traditional"],
    ingredients: ["Goat head", "Palm oil", "Spices", "Onion"],
  },
  {
    id: "meal-10",
    name: "Fried Snail & Chips",
    description: "Delicately fried snail tossed in spicy pepper sauce.",
    price: 7000 - 15000,
    category: "traditional",
    image: "/images/snail3.webp",
    tags: ["Exotic", "Spicy"],
    ingredients: ["Snail", "Pepper", "Onion", "Oil"],
  },
  {
    id: "meal-basmati-rice",
    name: "Basmati Rice",
    description:
      "Fluffy, aromatic basmati rice cooked to perfection – a light and tasty complement to any dish.",
    price: 2000,
    category: "rice",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Rice", "Basmati", "Side", "Meals"],
    ingredients: ["Basmati Rice", "Salt", "Oil", "Water"],
  },
  {
    id: "meal-noodles-egg",
    name: "Noodles & Egg",
    description:
      "Deliciously seasoned instant noodles served with a boiled or fried egg for a quick, satisfying meal.",
    price: 2500,
    category: "rice",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Noodles", "Egg", "Quick Meal", "Comfort Food"],
    ingredients: ["Noodles", "Egg", "Seasoning", "Oil", "Vegetables"],
  },
  {
    id: "meal-jollof-rice",
    name: "Jollof Rice",
    description:
      "Classic Nigerian jollof rice, rich in smoky tomato flavor and perfectly spiced – a party favorite on any plate.",
    price: 2000,
    category: "rice",
    image:
      "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Rice", "Jollof", "Nigerian", "Spicy"],
    ingredients: ["Rice", "Tomatoes", "Pepper", "Seasoning", "Oil", "Onions"],
  },
  {
    id: "meal-fried-rice",
    name: "Fried Rice",
    description:
      "Golden stir-fried rice with vegetables and seasoning – a delicious balance of taste and texture.",
    price: 2000,
    category: "rice",
    image:
      "https://images.pexels.com/photos/17910326/pexels-photo-17910326.jpeg?cs=srgb&dl=pexels-nadja-17910326.jpg&fm=jpg",
    tags: ["Rice", "Fried", "Vegetables", "Nigerian"],
    ingredients: ["Rice", "Carrots", "Peas", "Green Beans", "Seasoning", "Oil"],
  },
  {
    id: "meal-platter-special",
    name: "Platter Special Medium",
    description:
      "A generous mix of favorites on one plate – Barbeque Croaker Fish, Peppered Goat Meat, Peppered Chicken, Chicken Wings, Fried Snails, Shrimps, golden fries (potatoes, yam & plantain), and fresh salad. Perfect for sharing or indulging solo.",
    price: 70000,
    category: "grill",
    image:
      "https://thumbs.dreamstime.com/b/mixed-grilled-meats-vegetables-wooden-platter-barbecue-concept-322956697.jpg",
    tags: [
      "Platter",
      "Croaker Fish",
      "Goat Meat",
      "Chicken",
      "Wings",
      "Snails",
      "Shrimps",
      "Fries",
      "Salad",
    ],
    ingredients: [
      "Croaker Fish",
      "Goat Meat",
      "Chicken",
      "Chicken Wings",
      "Snails",
      "Shrimps",
      "Potatoes",
      "Yam",
      "Plantain",
      "Salad",
      "Spices",
      "Seasoning",
      "Oil",
    ],
  },
  {
    id: "meal-platter-special",
    name: "Platter Special Large",
    description:
      "A generous mix of favorites on one plate – Barbeque Croaker Fish, Peppered Goat Meat, Peppered Chicken, Chicken Wings, Fried Snails, Shrimps, golden fries (potatoes, yam & plantain), and fresh salad. Perfect for sharing or indulging solo.",
    price: 120000,
    category: "grill",
    image: "/images/platter.png",
    tags: [
      "Platter",
      "Croaker Fish",
      "Goat Meat",
      "Chicken",
      "Wings",
      "Snails",
      "Shrimps",
      "Fries",
      "Salad",
    ],
    ingredients: [
      "Croaker Fish",
      "Goat Meat",
      "Chicken",
      "Chicken Wings",
      "Snails",
      "Shrimps",
      "Potatoes",
      "Yam",
      "Plantain",
      "Salad",
      "Spices",
      "Seasoning",
      "Oil",
    ],
  },
];

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
