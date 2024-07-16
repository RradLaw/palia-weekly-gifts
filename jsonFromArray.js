let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Congee", "Samara", "Reth's Century Egg", "Chapaa Masala"],
  "Auni": ["Common Bark Cicada", "Rice Cake Stir Fry", "Hairy Millipede", "Blueberry Pie"],
  "Badruu": ["Tomato Plant Seed", "Wheat", "Apple Tree Seed", "Meaty Stir Fry"],
  "Caleri": ["Coral", "Heat Root", "Blueberry Jam", "Bouillabaisse"],
  "Chayne": ["Knapweed", "Wheat", "Dragon's Beard Peat", "Dari Cloves"],
  "Delaila": ["Muujin Meat", "WeedBlock Fertilizer", "Apple", "Gold Bar"],
  "Einar": ["Mudminnow", "Mirror Carp", "Shimmerfin", "Radiant Sunfish"],
  "Elouisa": ["Spotted Stinkbug", "Cantankerous Koi", "Energised Piranha", "Fairy Mantis"],
  "Eshe": ["Fur", "Silk", "Apple Jam", "Bouillabaisse"],
  "Hassian": ["Mountain Morel", "Elder Sernuk Antlers", "Iron Bar", "Slowdown Arrow"],
  "Hekla": ["Briar Daisy", "Painted Perch", "Chub", "Celebration Cake"],
  "Hodari": ["Sernuk Antlers", "Striped Chapaa Tail", "Stonefish", "Spitfire Cicada"],
  "Jel": ["Fur", "Freshwater Eel", "Azure Chapaa Tail", "Bluebristle Muujin Mane"],
  "Jina": ["Coral", "Heat Root", "Mutated Angler", "Cream of Mushroom Soup"],
  "Kenli": ["Wagon Wheel", "Hearty Vegetable Soup", "Loaded Potato Soup", "Iron Bar"],
  "Kenyatta": ["Briar Daisy", "Acorn", "Firebreathing Dragonfly", "Fairy Mantis"],
  "Nai'O": ["Spice Sprouts", "Carrot", "Apple Tree Seed", "Steak Dinner"],
  "Najuma": ["Tomato", "Copper Bar", "Blueberry", "Blueberry Pie"],
  "Reth": ["Tomato", "Hearty Vegetable Soup", "Blueberry", "Dari Cloves"],
  "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Slowdown Arrow"],
  "Subira": ["Congee", "Silver Bar", "Mutated Angler", "Spicy Rice Cakes"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Hairy Millipede", "Leafstalker Mantis"],
  "Tau": ["Calico Koi", "Grilled Fish", "Azure Chapaa Tail", "Grilled Meat"],
  "Tish": ["Clay", "Samara", "Pinecone", "Blueberry Pie"],
  "Zeki": ["Silver Salmon", "Fish Stew", "Platinum Chad", "Dari Cloves"]


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