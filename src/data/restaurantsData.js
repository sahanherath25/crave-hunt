const restaurants = [
    {
        id: "res1",
        name: "The Curry Leaf",
        icon: "🍛",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "123 Spice Street, Colombo 03",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res2",
        name: "Spicy Bites",
        icon: "🌶️",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "42 Pepper Lane, Colombo 04",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res3",
        name: "Kottu King",
        icon: "👑",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "8 Kottu Ave, Colombo 05",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res4",
        name: "Hoppers House",
        icon: "🥞",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "55 Coconut Drive, Colombo 06",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res5",
        name: "Rice & Curry",
        icon: "🍚",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "77 Rice Street, Colombo 07",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res6",
        name: "Spice Garden",
        icon: "🌿",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "22 Herb Lane, Colombo 02",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res7",
        name: "The Lankan Spoon",
        icon: "🥄",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "19 Cinnamon Rd, Colombo 01",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res8",
        name: "Ceylon Flavors",
        icon: "🍽️",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "301 Island Street, Colombo 08",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res9",
        name: "Roti Rumble",
        icon: "🥙",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "90 Roti Street, Colombo 09",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
    {
        id: "res10",
        name: "Curry Junction",
        icon: "🍲",
        photos: [
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        address: "10 Masala Ave, Colombo 10",
        openingHours: "11:00 AM - 10:00 PM",
        isClosedTemporarily: false,
        rating: 4,
    },
];

export default restaurants