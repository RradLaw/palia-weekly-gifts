let data = {


    "Ashura": ["Grilled Fish", "Samara", "Pinecone", "Sashimi"],
    "Auni": ["Common Blue Butterfly", "Garden Leafhopper", "Stripeshell Snail", "Apple Pie"],
    "Badruu": ["Potato Seed", "Corn Seed", "Ramen", "Meaty Stir Fry (Bugged)"],
    "Caleri": ["Crystal Lake Lotus", "Pickled Carrots", "Cream of Tomato Soup", "Bouillabaisse"],
    "Chayne": ["Tomato Plant Seed", "Pickled Tomatoes", "Heat Root", "Cream of Mushroom Soup"],
    "Delaila": ["Bahari Crab", "Kilima Catfish", "Iron Bar", "Gold Bar"],
    "Einar": ["Mudminnow", "Garden Snail", "Glow Worm", "Enchanted Pupfish"],
    "Elouisa": ["Ship Fragments", "Bahari Bee", "Dragon's Beard Peat", "Ancient Amber Beetle"],
    "Eshe": ["Leather", "Fish Stew", "Silver Bar", "Gold Ore"],
    "Hassian": ["Mountain Morel", "Striped Chapaa Tail", "Iron Ore", "Slowdown Arrow"],
    "Hekla": ["Grilled Fish", "Painted Perch", "Chub", "Celebration Cake"],
    "Hodari": ["Paper Lantern Bug", "Elder Sernuk Antlers", "Azure Chapaa Tail", "Spitfire Cicada"],
    "Jel": ["Fur", "Albino Eel", "Gossamer Veil Moth", "Willow Lamprey"],
    "Jina": ["Wagon Wheel", "Cotton Seed", "Mutated Angler", "Dari Cloves"],
    "Kenli": ["Grilled Fish", "Fish Stew", "Trout Dinner", "Bouillabaisse"],
    "Kenyatta": ["Sernuk Antlers", "Inky Dragonfly", "Pinecone", "Meaty Stir Fry"],
    "Nai'O": ["Wagon Wheel", "HarvestBoost Fertilizer", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Flint", "Copper Bar", "Iron Ore", "Silver Bar"],
    "Reth": ["Yellow Perch", "Hearty Vegetable Soup", "Apple", "Palian Onion Soup"],
    "Sifuu": ["Copper Ore", "Oily Anchovy", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Azure Stonehopper", "Ancient Amber Beetle"],
    "Tau": ["Sapwood Plank", "Duskwing Butterfly", "Azure Stonehopper", "Grilled Meat"],
    "Tish": ["Ship Fragments", "Samara", "Pearl", "Blueberry Pie"],
    "Zeki": ["Grilled Fish", "Fish Stew", "Crab Gumbo", "Gold Bar"]



};
console.log("{");
for (const key in data) {
    console.log(generateString(key, data[key]));
}
console.log("}");

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}