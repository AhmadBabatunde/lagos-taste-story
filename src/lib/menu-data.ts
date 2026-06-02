export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  tagline: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    tagline: "Crisp beginnings, fragrant with spice",
    items: [
      { name: "Shredded Chicken & Shrimp Rolls", description: "Hand-rolled, crisp shells with a delicate filling.", price: "₦7,500" },
      { name: "Prawn & Mayonnaise Spring Rolls", description: "Sweet prawns folded with house mayonnaise.", price: "₦8,200" },
      { name: "Onion Cake", description: "Layered, pan-fried, scented with sesame.", price: "₦4,500" },
      { name: "Crab Ball", description: "Sweet lump crab, golden and crisp.", price: "₦9,000" },
      { name: "Chicken Samosa", description: "Spiced chicken tucked in flaky pastry.", price: "₦5,500" },
      { name: "Spicy Chicken Wings", description: "Tossed in our signature chilli glaze.", price: "₦8,000" },
      { name: "Butterfly King Prawn", description: "Whole king prawns, salt & chilli.", price: "₦12,500" },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    tagline: "Slow simmered, served steaming",
    items: [
      { name: "Sweet Corn Soup with Chicken", price: "₦5,500" },
      { name: "Hot & Sour Soup (Peking)", price: "₦5,800" },
      { name: "Cream Seafood Soup", price: "₦6,500" },
      { name: "Walton Soup", price: "₦5,500" },
      { name: "Minced Beef Soup", price: "₦5,800" },
    ],
  },
  {
    id: "beef",
    name: "Beef & Sauce",
    tagline: "Cantonese sears on a screaming wok",
    items: [
      { name: "Shredded Beef with Green Pepper", price: "₦11,500" },
      { name: "Diced Beef with Black Bean Sauce", price: "₦11,800" },
      { name: "Beef with Spring Onion on Hot Plate", price: "₦12,500" },
      { name: "Sweet & Spicy Deep Fried Shredded Beef with Carrot", price: "₦12,000" },
      { name: "Sliced Beef with Broccoli in Oyster Sauce", price: "₦11,500" },
    ],
  },
  {
    id: "pork",
    name: "Pork Sauce",
    tagline: "Sweet, sour, fiery — your call",
    items: [
      { name: "Shredded Pork in Chilli Sauce", price: "₦10,500" },
      { name: "Shredded Pork with Green Pepper", price: "₦10,500" },
      { name: "Sweet & Sour Pork", price: "₦11,000" },
      { name: "Spicy Pork Ribs", price: "₦12,800" },
    ],
  },
  {
    id: "fish",
    name: "Fish Sauce",
    tagline: "Day-boat fillets, wok-finished",
    items: [
      { name: "Fish in Chilli Sauce", price: "₦12,000" },
      { name: "Fish Fillet in Sweet & Sour Sauce", price: "₦12,000" },
      { name: "Fried Fish Fillet with Broccoli", price: "₦12,500" },
      { name: "Fried Fish Fillet on Hot Plate", price: "₦13,000" },
      { name: "Fried Fish Fillet with Soya Sauce, Hot Plate", price: "₦13,000" },
    ],
  },
  {
    id: "prawn",
    name: "Prawn Sauce",
    tagline: "Always fresh, never frozen twice",
    items: [
      { name: "Fried Prawn on Hot Plate", price: "₦14,500" },
      { name: "Fried Prawn with Broccoli", price: "₦14,000" },
      { name: "Fried Prawn in Chilli Sauce", price: "₦14,000" },
      { name: "Fried Prawn in Sweet & Sour Sauce", price: "₦14,000" },
      { name: "Deep Fried Prawn with Salt & Pepper", price: "₦14,800" },
    ],
  },
  {
    id: "chicken",
    name: "Chicken Sauce",
    tagline: "From the Cantonese classics",
    items: [
      { name: "Diced Chicken in Black Bean Sauce", price: "₦10,500" },
      { name: "Fried Sliced Chicken with Broccoli", price: "₦10,500" },
      { name: "Shredded Chicken with Green Pepper", price: "₦10,500" },
      { name: "Deep Fried Whole Chicken", price: "₦18,500" },
      { name: "Fried Diced Chicken in Curry Sauce", price: "₦10,800" },
      { name: "Sweet & Sour Chicken", price: "₦10,500" },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    tagline: "Wok-tossed, grain by grain",
    items: [
      { name: "Kurnchi Special Fried Rice", price: "₦8,500" },
      { name: "Chicken Fried Rice", price: "₦7,500" },
      { name: "Beef Fried Rice", price: "₦8,000" },
      { name: "Shrimp Fried Rice", price: "₦9,000" },
      { name: "Vegetable Fried Rice", price: "₦6,500" },
      { name: "Steamed Rice", price: "₦2,500" },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    tagline: "Hand-pulled comfort",
    items: [
      { name: "Singapore Noodle", price: "₦8,500" },
      { name: "Noodle with Assorted Meat", price: "₦9,000" },
      { name: "Noodle with Shredded Chicken", price: "₦8,500" },
      { name: "Noodle with Shrimp", price: "₦9,500" },
    ],
  },
  {
    id: "vegetable",
    name: "Vegetable & Lobster",
    tagline: "Greens with a fiery soul",
    items: [
      { name: "Sliced Lobster on Hot Plate", price: "Market" },
      { name: "Stir Fried Assorted Vegetable", price: "₦6,500" },
      { name: "Braised Black Mushroom with Broccoli", price: "₦7,500" },
      { name: "Sautéed Seasonal Vegetable", price: "₦6,000" },
    ],
  },
];

export const WHATSAPP_NUMBER = "2348105754994";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const RESERVE_WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Kurnchi, I'd like to reserve a table.",
)}`;
export const INSTAGRAM = "https://instagram.com/kurrynchilligbagada";
