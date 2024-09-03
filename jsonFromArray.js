let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Striped Dace", "Acorn", "Stalking Catfish", "Sashimi"],
  "Auni": ["Common Blue Butterfly", "Bahari Bee", "Firebreathing Dragonfly", "Blueberry Pie"],
  "Badruu": ["Wagon Wheel", "QualityUp Fertilizer", "Blueberry Bush Seed", "Meaty Stir Fry"],
  "Caleri": ["Crystal Lake Lotus", "Glass Bulb", "Chapaa Onigiri", "Dari Cloves"],
  "Chayne": ["Carrot", "Creamy Carrot Soup", "Heat Root", "Palian Onion Soup"],
  "Delaila": ["Rainbow Trout", "Clay", "Vampire Crab", "Giant Goldfish"],
  "Einar": ["Worm", "Garden Snail", "Flow-Infused Plank", "Enchanted Pupfish"],
  "Elouisa": ["Common Bark Cicada", "Cytthroat Trout", "Spitfire Cicada", "Giant Goldfish"],
  "Eshe": ["Fur", "Fish Stew", "Black Sea Bass", "Jewelwing Dragonfly"],
  "Hassian": ["Grilled Meat", "Striped Chapaa Tail", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
  "Hekla": ["Bahari Bass", "Bahari Bream", "Beluga", "Green Pearl"],
  "Hodari": ["Muujin Meat", "Copper Bar", "Blue Marlin", "Firebreathing Dragonfly"],
  "Jel": ["Umbran Carp", "Muujin Mane", "Vampire Crab", "Green Pearl"],
  "Jina": ["Congee", "Cotton Seed", "Dragon's Beard Peat", "Celebration Cake"],
  "Kenli": ["Chapaa Meat", "Ramen", "Sushi", "Kenli's Carp"],
  "Kenyatta": ["Briar Daisy", "Oily Anchovy", "Leafstalker Mantis", "Crimson Fangtooth"],
  "Nai'O": ["Muujin Meat", "Kilima Catfish", "Fried Catfish Dinner", "Steak Dinner"],
  "Najuma": ["Knapweed", "Copper Bar", "Apple", "Blueberry Pie"],
  "Reth": ["Yellow Perch", "Heat Root", "Blueberry", "Cream of Mushroom Soup"],
  "Sifuu": ["Muujin Meat", "Pickled Carrots", "Iron Bar", "Steak Dinner"],
  "Subira": ["Copper Ore", "Silver Ore", "Red-bellied Piranha", "Enchanted Pupfish"],
  "Tamala": ["Wild Ginger", "Garden Millipede", "Pearl", "Fairy Mantis"],
  "Tau": ["Common Field Cricket", "Heartwood Plank", "Golden Salmon", "Akwinduu Chapaa"],
  "Tish": ["Sundrop Lily", "Glass Bulb", "Celebration Cake", "Blueberry Pie"],
  "Zeki": ["Coral", "Golden Salmon", "Silver Bar", "Green Pearl"]


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