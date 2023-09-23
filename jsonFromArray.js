let data = {
    "Ashura": ["Rainbow Trout", "Kilima Catfish", "Fried Catfish Dinner", "Chapaa Masala"],
    "Auni": ["Common Bark Cicada", "Garden Millipede", "Apple", "Apple Pie"],
    "Badruu": ["Carrot Seed", "Creamy Carrot Soup", "Loaded Potato Soup", "Meaty Stir Fry"],
    "Caleri": ["Emerald Carpet Moss", "Kilima Redfin", "Pinecone", "Chapaa Masala"],
    "Chayne": ["Wild Garlic", "Wheat Seed", "Pearl", "Palian Onion Soup"],
    "Delaila": ["Channel Catfish", "SpeedyGro Fertilizer", "Vampire Crab", "Giant Goldfish"],
    "Einar": ["Spotted Bullhead", "Mirror Carp", "Vampire Crab", "Kilima Grayling"],
    "Elouisa": ["Calico Ko", "Albino Eel", "Willow Lamprey", "Green Pearl"],
    "Eshe": ["Leather", "Silk", "Silver Bar", "Gold Bar"],
    "Hassian": ["Sernuk Antlers", "Elder Sernuk Antlers", "Azure Chapaa Tail", "Steak Dinner"],
    "Hekla": ["Crystal Lake Lotus", "Fried Catfish Dinner", "Cream of Mushroom Soup", "Enchanted Pupfish"],
    "Hodari": ["Stone Brick", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers", "Bahari Glowbug"],
    "Jel": ["Coral", "Sernuk Hide", "Azure Chapaa Tail", "Green Pearl"],
    "Jina": ["Flint", "Heat Root", "Dragon's Beard Peat", "Void Ray"],
    "Kenli": ["Wagon Wheel", "Garden Ladybug", "Fried Catfish Dinner", "Iron Bar"],
    "Kenyatta": ["Sernuk Antlers", "Elder Sernuk Antlers", "Alligator Gar", "Fairy Mantis"],
    "Nai'O": ["Stone Brick", "Heartwood Plank", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Knapweed", "Copper Bar", "Silver Ore", "Blueberry Pie"],
    "Reth": ["Tomato", "Sernuk Noodle Stew", "Apple", "Cream of Mushroom Soup"],
    "Sifuu": ["Sernuk Antlers", "Copper Bar", "Cream of Tomato Soup", "Slowdown Arrow"],
    "Tamala": ["Kilima Night Moth", "Silk", "Azure Stonehopper", "Fairy Mantis"],
    "Tau": ["Fried Catfish Dinner", "Striped Chapaa Tail", "Chapaa Masala", "Wagon Wheel"],
    "Tish": ["Sapwood Plank", "Juniper Seed", "Silk Thread", "Green Pearl"],
    "Zeki": ["Silvery Minnow", "Silk", "Silver Ore", "Bouillabaisse"]
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

    for(let i = 0; i < array.length; i++) {
        switch(i) {
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