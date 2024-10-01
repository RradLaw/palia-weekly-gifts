let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    "Ashura": ["Grilled Fish", "Kilima Catfish", "Flow-Infused Plank", "Fisherman's Brew"],
    "Auni": ["Spotted Stinkbug", "Bahari Bee", "Spotted Mantis", "Blueberry Pie"],
    "Badruu": ["Onion Seed", "Spicy Pepper Seed", "Blueberry Bush Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Shell", "Glass Bulb", "Silk Thread", "Chapaa Masala"],
    "Chayne": ["Tomato Plant Seed", "Rice", "Dragon's Beard Peat", "Dari Cloves"],
    "Delaila": ["Channel Catfish", "Garden Ladybug", "Stalking Catfish", "Giant Goldfish"],
    "Einar": ["Silver Salmon", "Yellow Perch", "Mottled Gobi", "Cactus Moray"],
    "Elouisa": ["Dawnray", "Cerulean Cicada", "Scarlet Koi", "Green Pearl"],
    "Eshe": ["Fur", "Samara", "Black Sea Bass", "Palian Onion Soup"],
    "Hassian": ["Spotted Chapaa Tail", "Chapaa Asada Tacos", "Azure Chapaa Tail", "Shimmerfin"],
    "Hekla": ["Grilled Mushroom", "Fried Catfish Dinner", "Cream of Mushroom Soup", "Green Pearl"],
    "Hodari": ["Sernuk Antlers", "Elder Sernuk Antlers", "Blue Marlin", "Firebreathing Dragonfly"],
    "Jel": ["Shell", "Albino Eel", "Scintillating Centipede", "Willow Lamprey"],
    "Jina": ["Congee", "Heat Root", "Bacon-Stuffed Mushrooms", "Dari Cloves"],
    "Kenli": ["Grilled Oyster", "Creamy Carrot Soup", "Steak Dinner", "Bouillabaisse"],
    "Kenyatta": ["Crystal Lake Lotus", "Oily Anchovy", "Banded Muujin Mane", "Bluebristle Muujin Mane"],
    "Nai'O": ["Muujin Meat", "Wheat Seed", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Blueberry", "Silver Bar"],
    "Reth": ["Sernuk Meat", "Wheat", "Raspberry Beetle", "Palian Onion Soup"],
    "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Iron Bar", "Fireworks Arrow"],
    "Subira": ["Potato", "Steak Dinner", "Rainbow-Tipped Butterfly", "Spitfire Cicada"],
    "Tamala": ["Wild Ginger", "Lunar Fairy Moth", "Shimmerfin", "Flametongue Ray"],
    "Tau": ["Chapaa Meat", "Grilled Fish", "Sernuk Noodle Stew", "Rainbow-Tipped Butterfly"],
    "Tish": ["Shell", "Dawnray", "Celebration Cake", "Green Pearl"],
    "Zeki": ["Grilled Oyster", "Golden Salmon", "Trout Dinner", "Bouillabaisse"]
      
      

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