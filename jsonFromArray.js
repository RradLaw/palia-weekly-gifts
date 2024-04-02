let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

        "Ashura": ["Silver Salmon", "Kilima Catfish", "Flow-Infused Plank", "Celebration Cake"],
        "Auni": ["Common Blue Butterfly", "Garden Mantis", "Blueberry", "Celebration Cake"],
        "Badruu": ["Onion Seed", "QualityUp Fertilizer", "Apple Tree Seed", "Azure Stonehopper"],
        "Caleri": ["Shell", "Glass Bulb", "Silk Thread", "Dari Cloves"],
        "Chayne": ["Carrot Seed", "Creamy Carrot Soup", "Dragon's Beard Peat", "Cream of Mushroom Soup"],
        "Delaila": ["Clay", "QualityUp Fertilizer", "Blueberry", "Gold Bar"],
        "Einar": ["Worm", "Mirror Carp", "Glow Worm", "Ancient Fish"],
        "Elouisa": ["Ship Fragments", "Bahari Bee", "Blobfish", "Giant Goldfish"],
        "Eshe": ["Grilled Oyster", "Fish Stew", "Silver Bar", "Gold Ore"],
        "Hassian": ["Fur", "Sernuk Hide", "Azure Chapaa Tail", "Fireworks Arrow"],
        "Hekla": ["Sundrop Lily", "Largemouth Bass", "Black Sea Bass", "Celebration Cake"],
        "Hodari": ["Sernuk Antlers", "Copper Bar", "Loaded Potato Soup", "Bahari Glowbug"],
        "Jel": ["Coral", "Lunar Fairy Moth", "Silk Thread", "Midnight Paddlefish"],
        "Jina": ["Coral", "Heat Root", "Brighteye Butterfly", "Dari Cloves"],
        "Kenli": ["Chapaa Meat", "Fish Stew", "Steak Dinner", "Palian Onion Soup"],
        "Kenyatta": ["Emerald Carpet Moss", "Acorn", "Kimchi Fried Rice", "Bluebristle Muujin Mane"],
        "Nai'O": ["Wagon Wheel", "HarvestBoost Fertilizer", "Stalking Catfish", "Steak Dinner"],
        "Najuma": ["Sweet Leaf", "Copper Bar", "Iron Bar", "Blueberry Pie"],
        "Reth": ["Sernuk Meat", "Spicy Pepper", "Loaded Potato Soup", "Dari Cloves"],
        "Sifuu": ["Sernuk Meat", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
        "Subira": ["Wild Green Onion", "Trout Dinner", "Rainbow-Tipped Butterfly", "Spitfire Cicada"],
        "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Dragon's Beard Peat", "Leafstalker Mantis"],
        "Tau": ["Sapwood Plank", "Striped Chapaa Tail", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers"],
        "Tish": ["Sweet Leaf", "Heartwood Plank", "Pinecone", "Blueberry Pie"],
        "Zeki": ["Silvery Minnow", "Silk", "Proudhorned Sernuk Antlers", "Bouillabaisse"]
      
      
       
    








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