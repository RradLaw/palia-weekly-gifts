let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Striped Dace", "Heartwood Plank", "Fish Stew", "Apple Pie"],
    "Auni": ["Ship Fragments", "Garden Millipede", "Firebreathing Dragonfly", "Celebration Cake"],
    "Badruu": ["Cotton Seed", "Rice Seed", "Apple Tree Seed", "Azure Stonehopper"],
    "Caleri": ["Sweet Leaf", "Kilima Redfin", "Cream of Tomato Soup", "Bouillabaisse"],
    "Chayne": ["Carrot", "Blueberry Bush Seed", "Apple", "Palian Onion Soup"],
    "Delaila": ["Bahari Crab", "Orange Bluegill", "Iron Bar", "Gold Bar"],
    "Einar": ["Gillyfin", "Mirror Carp", "Flow-Infused Plank", "Cactus Moray"],
    "Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Indigo Lamprey", "Bluebristle Muujin Mane"],
    "Eshe": ["Leather", "Fish Stew", "Silver Ore", "Jewelwing Dragonfly"],
    "Hassian": ["Sernuk Antlers", "Sernuk Noodle Stew", "Azure Chapaa Tail", "Steak Dinner"],
    "Hekla": ["Bahari Bass", "Acorn", "Pearl", "Celebration Cake"],
    "Hodari": ["Copper Ore", "Sernuk Noodle Stew", "Blue Marlin", "Firebreathing Dragonfly"],
    "Jel": ["Leather", "Silk", "Black Sea Bass", "Bluebristle Muujin Mane"],
    "Jina": ["Coral", "Glass Pane", "Shimmerfin", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Spotted Chapaa Tail", "Ramen", "Petit Fives", "Celebration Cake"],
    "Kenyatta": ["Leather", "Acorn", "Phoenixfire Relleno", "Bluebristle Muujin Mane"],
    "Nai'O": ["Spice Sprouts", "WeedBlock Fertilizer", "Corn", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Apple Jam", "Blueberry Pie"],
    "Reth": ["Sweet Leaf", "Sernuk Noodle Stew", "Blueberry", "Palian Onion Soup"],
    "Sifuu": ["Stone Brick", "Elder Sernuk Antlers", "Silver Ore", "Steak Dinner"],
    "Subira": ["Sernuk Hide", "Radiant Sunfish", "Sashimi", "Enchanted Pupfish"],
    "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Sernuk Meat", "Garden Leafhopper", "Sernuk Noodle Stew", "Apple"],
    "Tish": ["Crystal Lake Lotus", "Juniper Seed", "Pinecone", "Green Pearl"],
    "Zeki": ["Coral", "Golden Salmon", "Fish Tacos", "Gold Bar"]
    








};
let outputStr = "{\n";
for (const key in data) {
    outputStr += generateString(key, data[key]) + "\n";
}
outputStr = outputStr.substring(0, outputStr.length - 2)
outputStr += "\n}";
console.log(outputStr);
console.log(errorString);

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "type1",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "type2",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "type3",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "type4",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type1/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type2/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type3/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type4/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}