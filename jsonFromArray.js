let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
        "Ashura": ["Congee", "Stickleback", "Fried Catfish Dinner", "Blueberry Pie"],
        "Auni": ["Waterlogged Boot", "Cerulean Cicada", "Hairy Millipede", "Blueberry Pie"],
        "Badruu": ["Potato", "Rice Seed", "Blueberry Bush Seed", "Cream of Mushroom Soup"],
        "Caleri": ["Congee", "Glass Bulb", "Oysters Akwinduu", "Dari Cloves"],
        "Chayne": ["Knapweed", "Blueberry Bush Seed", "Blueberry", "Dari Cloves"],
        "Delaila": ["Clay", "QualityUp Fertilizer", "Blueberry", "Giant Goldfish"],
        "Einar": ["Gillyfin", "Garden Snail", "Shimmerfin", "Stormray"],
        "Elouisa": ["Oyster Meat", "Inky Dragonfly", "Blobfish", "Bluebristle Muujin Mane"],
        "Eshe": ["Grilled Oyster", "Silk", "Sushi", "Muujin Bahari"],
        "Hassian": ["Plant Fiber", "Sernuk Noodle Stew", "Azure Chapaa Tail", "Giant Kilima Stingray"],
        "Hekla": ["Briar Daisy", "Smallmouth Bass", "Black Sea Bass", "Green Pearl"],
        "Hodari": ["Leather", "Flow-Infused Wood", "Blue Marlin", "Firebreathing Dragonfly"],
        "Jel": ["Umbran Carp", "Albino Eel", "Petit Fives", "Willow Lamprey"],
        "Jina": ["Congee", "Duskwing Butterfly", "Radiant Sunfish", "Apple Pie"],
        "Kenli": ["Spotted Chapaa Tail", "Fish Stew", "Fried Catfish Dinner", "Bouillabaisse"],
        "Kenyatta": ["Sardine", "Oily Anchovy", "Dragon's Beard Peat", "Bluebristle Muujin Mane"],
        "Nai'O": ["Muujin Meat", "HarvestBoost Fertilizer", "Blueberry Jam", "Steak Dinner"],
        "Najuma": ["Clay", "Garden Snail", "Blueberry", "Blueberry Pie"],
        "Reth": ["Onion", "Rice", "Blueberry", "Dari Cloves"],
        "Sifuu": ["Grilled Meat", "Pickled Carrots", "Silver Ore", "Gold Bar"],
        "Subira": ["Grilled Meat", "Glow Worm", "Spicy Rice Cakes", "? (Report in Discord)"],
        "Tamala": ["Knapweed", "Brightshroom", "Azure Stonehopper", "Fairy Mantis"],
        "Tau": ["Muujin Meat", "Silver Salmon", "Golden Salmon", "Shimmerfin"],
        "Tish": ["Sapwood Plank", "Heartwood Plank", "Celebration Cake", "Green Pearl"],
        "Zeki": ["Silver Salmon", "Golden Salmon", "Proudhorned Sernuk Antlers", "Poke Bowl"]
      
      
      
      
      
      

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