// Whole Spices Images
import tejaChillies from '../assets/whole spices/Teja Chillies.png';
import kashmiriChillies from '../assets/whole spices/Kashmiri Chillies.png';
import wonderHotChillies from '../assets/whole spices/Wonder Hot Chillies.png';
import otherRedChillies from '../assets/whole spices/All Type of Other Red Chillies.png';
import turmericWhole from '../assets/whole spices/Turmeric grown in Selam, Sangli and Hingoli.png';
import corianderWhole from '../assets/whole spices/Coriander.png';
import cuminWhole from '../assets/whole spices/Cumin.png';
import ajwainWhole from '../assets/whole spices/Ajwain.png';
import otherWholeSpices from '../assets/whole spices/Other Whole Spices.png';

// Powdered Spices Images
import tezzaChilliPowder from '../assets/powder/Tezza chilli powder.jpeg';
import teekhaLaalPowder from '../assets/powder/Teekha laal.jpeg';
import kashmiriKumthiPowder from '../assets/powder/kashmiri kumthi chilli powder.jpeg';
import mahaHotPowder from '../assets/powder/maha hot chilli powder.jpeg';
import turmericPowder from '../assets/powder/turmeric powder.jpeg';
import corianderPowder from '../assets/powder/CORIANDER  POWDER.jpeg';
import corianderCuminPowder from '../assets/powder/CORIANDER CUMIN POWDER.jpeg';
import garamMasala from '../assets/powder/garam masala.jpeg';
import teaMasala from '../assets/powder/tea masala.jpeg';
import otherPowderedSpices from '../assets/powder/other powdered spices.jpeg';

export const products = [
  // --- WHOLE SPICES ---
  {
    id: 'teja-chillies',
    name: 'S17/Teja Chillies',
    category: 'whole',
    type: 'Whole Spices',
    image: tejaChillies,
    tagline: 'High-pungency, brilliant red whole Guntur chillies.',
    description: 'Directly sourced from Guntur, Andhra Pradesh, our S17/Teja whole chillies are highly sought after for their fierce heat and vibrant red color, serving as a vital ingredient for commercial spice grinding and export.',
    aroma: 'Pungent, sharp, and fiery.',
    heatLevel: 'Fiery (5/5)',
    origin: 'Guntur, Andhra Pradesh',
    bestFor: 'Tadka, hot sauces, commercial spice processing, and exports.'
  },
  {
    id: 'kashmiri-chillies',
    name: 'Kashmiri Chillies',
    category: 'whole',
    type: 'Whole Spices',
    image: kashmiriChillies,
    tagline: 'Vibrant crimson color with exceptionally mild heat.',
    description: 'Selected hand-picked whole Kashmiri chillies that impart a rich, royal red hue to food. Perfect for chefs and exporters looking to achieve visual brilliance without high spiciness.',
    aroma: 'Mild, sweet, and smoky.',
    heatLevel: 'Mild (1/5)',
    origin: 'Kashmiri Plains / Karnataka',
    bestFor: 'Rogan Josh, tandoori marinades, and color extraction.'
  },
  {
    id: 'wonder-hot-chillies',
    name: 'Wonder Hot Chillies',
    category: 'whole',
    type: 'Whole Spices',
    image: wonderHotChillies,
    tagline: 'Bold flavor with medium-to-high pungency.',
    description: 'Wonder Hot chillies feature a thick, glossy crimson skin and a robust, well-rounded spicy flavor. Highly popular among commercial spice blenders.',
    aroma: 'Robust, sharp, and highly aromatic.',
    heatLevel: 'Hot (4/5)',
    origin: 'Guntur / Madhya Pradesh',
    bestFor: 'Daily culinary formulations, hot pickle bases, and spice powders.'
  },
  {
    id: 'other-red-chillies',
    name: 'All Type of Other Red Chillies',
    category: 'whole',
    type: 'Whole Spices',
    image: otherRedChillies,
    tagline: 'Custom trade options for diverse whole red chilli varieties.',
    description: 'We source, clean, and grade any whole red chilli variety including Byadgi, Guntur 334, and Sanam, customized to match domestic and international business specifications.',
    aroma: 'Warm, spicy, and variable.',
    heatLevel: 'Customizable',
    origin: 'Selected Farm Hubs in India',
    bestFor: 'Bulk spice processing units, food companies, and wholesale exporters.'
  },
  {
    id: 'selam-sangli-turmeric',
    name: 'Turmeric (Selam, Sangli & Hingoli)',
    category: 'whole',
    type: 'Whole Spices',
    image: turmericWhole,
    tagline: 'Premium whole turmeric fingers rich in natural curcumin.',
    description: 'Meticulously selected whole turmeric fingers grown in the fertile soils of Selam, Sangli, and Hingoli. Sun-cured and double-polished for maximum purity and high oil content.',
    aroma: 'Warm, earthy, woody, with a hint of ginger.',
    heatLevel: 'None',
    origin: 'Selam / Sangli / Hingoli',
    bestFor: 'Spice grinding, culinary color base, and dietary formulations.'
  },
  {
    id: 'whole-coriander',
    name: 'Coriander (Dhania)',
    category: 'whole',
    type: 'Whole Spices',
    image: corianderWhole,
    tagline: 'Double-polished whole coriander seeds with citrusy oils.',
    description: 'Thoroughly cleaned, double-polished green coriander seeds. Slow sun-cured to lock in sweet, citrusy volatile oils that enhance any spice blend.',
    aroma: 'Fresh, citrusy, and sweet-woody.',
    heatLevel: 'None',
    origin: 'Rajasthan Plains',
    bestFor: 'Garam Masala bases, whole spice tempering, and pickling.'
  },
  {
    id: 'whole-cumin',
    name: 'Cumin (Jeera)',
    category: 'whole',
    type: 'Whole Spices',
    image: cuminWhole,
    tagline: 'Highly aromatic, machine-cleaned whole cumin seeds.',
    description: 'Sourced directly from the market yards of Unjha, Gujarat. Our whole cumin seeds are cleaned to 99% purity, delivering an intense, earthy aroma when heated.',
    aroma: 'Sharp, warm, and highly aromatic.',
    heatLevel: 'None',
    origin: 'Unjha, Gujarat',
    bestFor: 'Tempering (Tadka), roasted cumin powder, and rice dishes.'
  },
  {
    id: 'whole-ajwain',
    name: 'Ajwain (Carom Seeds)',
    category: 'whole',
    type: 'Whole Spices',
    image: ajwainWhole,
    tagline: 'Digestive-rich carom seeds with sharp thyme aroma.',
    description: 'Premium bold whole ajwain seeds packed with essential thymol oils. Sourced from optimal farming locations to assure clean, authentic taste and digestives properties.',
    aroma: 'Sharp, medicinal, and thyme-like.',
    heatLevel: 'None',
    origin: 'Gujarat Hills',
    bestFor: 'Batters, flatbreads (parathas), and traditional digestive mixes.'
  },
  {
    id: 'other-whole-spices',
    name: 'Other Whole Spices as per Requirement',
    category: 'whole',
    type: 'Whole Spices',
    image: otherWholeSpices,
    tagline: 'Custom wholesale procurement for exotic whole spices.',
    description: 'We offer customized wholesale trade for black pepper, green cardamom, black cardamom, cloves, cassia, fenugreek, mustard, fennel seeds, and other whole spices to meet global demands.',
    aroma: 'Rich, mixed aromatic spice tones.',
    heatLevel: 'Variable',
    origin: 'Western Ghats / Rajasthan Plains',
    bestFor: 'HoReCa supply, spice packers, and custom bulk wholesalers.'
  },

  // --- POWDERED SPICES ---
  {
    id: 'tezza-chilli-powder',
    name: 'Red Chilli Powder (Tezza Hot)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: tezzaChilliPowder,
    tagline: 'Extra hot, pure authentic ground red chilli powder.',
    description: 'Processed from premium Teja red chillies in our Nadiad facility. Ground using authentic traditional methods to retain its fiery pungency, color, and natural oils.',
    aroma: 'Fiery, sharp, and intensely warm.',
    heatLevel: 'Fiery (5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Hot pickles, spicy gravies, commercial caterers, and bulk exports.'
  },
  {
    id: 'teekha-laal-powder',
    name: 'Red Chilli Powder (Teekha Laal)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: teekhaLaalPowder,
    tagline: 'The perfect balance of moderate heat and rich red color.',
    description: 'A classic everyday red chilli powder designed to bring a pleasant warmth and deep crimson tint to all traditional Indian dishes.',
    aroma: 'Warm, spicy, and classic.',
    heatLevel: 'Medium-High (3.5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Daily curries, dal tadka, stir-fry seasoning, and dry masalas.'
  },
  {
    id: 'kashmiri-kumthi-powder',
    name: 'Red Chilli Powder (Kashmiri Kumthi)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: kashmiriKumthiPowder,
    tagline: 'Stunning crimson shade with very mild heat.',
    description: 'Authentically ground from premium Kashmiri Kumthi chillies. Focuses on providing an exquisite ruby-red color to dishes while keeping the spice level highly accessible.',
    aroma: 'Sweet, mild, and lightly smoky.',
    heatLevel: 'Mild (1.5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Rogan Josh, butter paneer, marinades, and tandoori items.'
  },
  {
    id: 'maha-hot-powder',
    name: 'Red Chilli Powder (Maha Hot)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: mahaHotPowder,
    tagline: 'Intensely hot red chilli powder for extreme spice.',
    description: 'For kitchens that require a massive spice impact. Carefully authentic ground from selected sharp chilli crops, yielding raw, fiery warmth with zero additives.',
    aroma: 'Sharp, pungent, and warm.',
    heatLevel: 'Super Hot (4.5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Fiery street food, commercial spice blending, and hot curries.'
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder (Haldi)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: turmericPowder,
    tagline: 'High curcumin golden turmeric powder.',
    description: 'Sun-dried whole turmeric from Sangli and Hingoli, ground using authentic traditional methods in our Nadiad facility. Yields a rich golden color, high aroma, and natural curcumin benefits.',
    aroma: 'Warm, earthy, ginger-like.',
    heatLevel: 'None',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Daily curries, yellow stews, milk infusions, and wellness blends.'
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder (Dhania)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: corianderPowder,
    tagline: 'Freshly milled green coriander seeds powder.',
    description: 'Made exclusively from dry-roasted, double-polished coriander seeds. Carefully authentic ground to release a citrus-toned flavor that forms the foundation of Indian gravies.',
    aroma: 'Fresh, sweet, and citrusy.',
    heatLevel: 'None',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Base gravies, dry vegetable seasoning, and Gujarati style curries.'
  },
  {
    id: 'coriander-cumin-powder',
    name: 'Coriander Cumin Powder (Dhania Jeera)',
    category: 'powdered',
    type: 'Powdered Spices',
    image: corianderCuminPowder,
    tagline: 'The traditional Gujarati spice base in perfect ratio.',
    description: 'An expert blend of coriander and cumin powders in perfect harmony. Sourced, roasted, and ground together to yield a complex, warming foundation for everyday stews.',
    aroma: 'Earthy, warm, citrusy, and savory.',
    heatLevel: 'None',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Gujarati dals, everyday curries, subzi seasoning, and rasam.'
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala Powder',
    category: 'powdered',
    type: 'Powdered Spices',
    image: garamMasala,
    tagline: 'Premium heritage blend of 15 whole spices.',
    description: 'Our proprietary family recipe combining cardamom, cloves, cinnamon, mace, and nutmeg. Hand-roasted in small batches to preserve its fragile aroma and finishing depth.',
    aroma: 'Warm, highly fragrant, and sweet-spicy.',
    heatLevel: 'Medium (2.5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Finishing touch over curries, biryanis, dry sabzis, and samosa fillings.'
  },
  {
    id: 'tea-masala',
    name: 'Tea Masala Powder',
    category: 'powdered',
    type: 'Powdered Spices',
    image: teaMasala,
    tagline: 'Traditional warming spices for the perfect masala chai.',
    description: 'A premium, ginger-forward blend containing dried ginger (sonth), black pepper, green cardamom, cloves, and nutmeg. Handcrafted to bring warm comfort to every sip of tea.',
    aroma: 'Warm, zesty, sweet-spicy, and comforting.',
    heatLevel: 'Warm (1.5/5)',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Masala tea (chai), warm spiced milk, and festive baking.'
  },
  {
    id: 'other-powdered-spices',
    name: 'Other Powdered Spices as per Requirement',
    category: 'powdered',
    type: 'Powdered Spices',
    image: otherPowderedSpices,
    tagline: 'Bespoke custom blends and single powders for trade.',
    description: 'We process and blend custom dry spice mixtures (such as Kitchen King, Amchur powder, dry ginger powder, black pepper powder) to match specific wholesale orders.',
    aroma: 'Complex, savory, and customizable.',
    heatLevel: 'Variable',
    origin: 'Nadiad Unit, Gujarat',
    bestFor: 'Corporate labeling, hotel-restaurant chains, and export distributors.'
  }
];
