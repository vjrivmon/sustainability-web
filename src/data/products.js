export const products = [
  {
    id: 1,
    name: "Organic Cotton Canvas",
    category: "Cotton",
    description: "Premium organic cotton canvas made from 100% certified organic cotton fibers. Perfect for heavy-duty applications while maintaining environmental responsibility.",
    basePrice: 24.99,
    sustainability: {
      recycledContent: 0,
      organicCertified: true,
      waterSaving: 85,
      carbonFootprint: "Low"
    },
    variations: [
      {
        id: "occ-natural",
        name: "Natural",
        color: "#F8F5F0",
        description: "Undyed natural organic cotton in its pure form",
        price: 24.99,
        stock: 150,
        image: "/images/organic-cotton-natural.jpg"
      },
      {
        id: "occ-earth",
        name: "Earth Brown",
        color: "#8B4513",
        description: "Naturally dyed with plant-based earth pigments",
        price: 27.99,
        stock: 120,
        image: "/images/organic-cotton-earth.jpg"
      },
      {
        id: "occ-ocean",
        name: "Ocean Blue",
        color: "#4682B4",
        description: "Eco-friendly dyed with sustainable indigo alternatives",
        price: 27.99,
        stock: 100,
        image: "/images/organic-cotton-ocean.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Recycled Denim Fabric",
    category: "Denim",
    description: "High-quality recycled denim made from post-consumer jeans. Each yard saves water and reduces textile waste while maintaining the durability denim is known for.",
    basePrice: 19.99,
    sustainability: {
      recycledContent: 95,
      organicCertified: false,
      waterSaving: 92,
      carbonFootprint: "Very Low"
    },
    variations: [
      {
        id: "rd-light",
        name: "Light Wash",
        color: "#B0C4DE",
        description: "Light blue recycled denim with vintage appeal",
        price: 19.99,
        stock: 200,
        image: "/images/recycled-denim-light.jpg"
      },
      {
        id: "rd-medium",
        name: "Medium Wash",
        color: "#4169E1",
        description: "Classic medium blue recycled denim",
        price: 21.99,
        stock: 180,
        image: "/images/recycled-denim-medium.jpg"
      },
      {
        id: "rd-dark",
        name: "Dark Indigo",
        color: "#191970",
        description: "Deep indigo recycled denim for premium applications",
        price: 23.99,
        stock: 160,
        image: "/images/recycled-denim-dark.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Bamboo Linen Blend",
    category: "Bamboo",
    description: "Luxurious blend of bamboo and organic linen fibers. Naturally antibacterial, moisture-wicking, and incredibly soft with excellent drape.",
    basePrice: 32.99,
    sustainability: {
      recycledContent: 0,
      organicCertified: true,
      waterSaving: 70,
      carbonFootprint: "Low"
    },
    variations: [
      {
        id: "blb-ivory",
        name: "Ivory",
        color: "#FFFFF0",
        description: "Elegant ivory bamboo linen blend",
        price: 32.99,
        stock: 90,
        image: "/images/bamboo-linen-ivory.jpg"
      },
      {
        id: "blb-sage",
        name: "Sage Green",
        color: "#9CAF88",
        description: "Calming sage green with natural bamboo properties",
        price: 35.99,
        stock: 75,
        image: "/images/bamboo-linen-sage.jpg"
      },
      {
        id: "blb-charcoal",
        name: "Charcoal Grey",
        color: "#36454F",
        description: "Sophisticated charcoal grey for modern applications",
        price: 35.99,
        stock: 85,
        image: "/images/bamboo-linen-charcoal.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "Hemp Twill Weave",
    category: "Hemp",
    description: "Durable hemp twill weave fabric made from sustainably grown hemp. Stronger than cotton, naturally resistant to mold and UV rays.",
    basePrice: 28.99,
    sustainability: {
      recycledContent: 0,
      organicCertified: true,
      waterSaving: 95,
      carbonFootprint: "Very Low"
    },
    variations: [
      {
        id: "htw-natural",
        name: "Natural Hemp",
        color: "#E6E6FA",
        description: "Pure natural hemp in its original color",
        price: 28.99,
        stock: 140,
        image: "/images/hemp-twill-natural.jpg"
      },
      {
        id: "htw-forest",
        name: "Forest Green",
        color: "#228B22",
        description: "Rich forest green hemp twill",
        price: 31.99,
        stock: 110,
        image: "/images/hemp-twill-forest.jpg"
      },
      {
        id: "htw-desert",
        name: "Desert Sand",
        color: "#EDC9AF",
        description: "Warm desert sand colored hemp twill",
        price: 31.99,
        stock: 125,
        image: "/images/hemp-twill-desert.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Recycled Polyester Mesh",
    category: "Polyester",
    description: "High-performance mesh fabric made from 100% recycled plastic bottles. Lightweight, breathable, and perfect for activewear and technical applications.",
    basePrice: 16.99,
    sustainability: {
      recycledContent: 100,
      organicCertified: false,
      waterSaving: 60,
      carbonFootprint: "Medium"
    },
    variations: [
      {
        id: "rpm-white",
        name: "Pure White",
        color: "#FFFFFF",
        description: "Clean white recycled polyester mesh",
        price: 16.99,
        stock: 250,
        image: "/images/recycled-poly-white.jpg"
      },
      {
        id: "rpm-black",
        name: "Midnight Black",
        color: "#000000",
        description: "Deep black recycled polyester mesh",
        price: 18.99,
        stock: 220,
        image: "/images/recycled-poly-black.jpg"
      },
      {
        id: "rpm-silver",
        name: "Silver Grey",
        color: "#C0C0C0",
        description: "Modern silver grey recycled polyester mesh",
        price: 18.99,
        stock: 200,
        image: "/images/recycled-poly-silver.jpg"
      }
    ]
  }
];

export const categories = [
  "All",
  "Cotton", 
  "Denim",
  "Bamboo",
  "Hemp",
  "Polyester"
];