let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    "Ashura": ["Sweet Leaf", "Kilima Catfish", "Flow-Infused Plank", "Sushi"],
  "Auni": ["Common Bark Cicada", "Garden Snail", "Blueberry", "Will-o-wisp Rockhopper"],
  "Badruu": ["Cotton Seed", "WeedBlock Fertilizer", "Batterfly Beans", "Bean Burger"],
  "Caleri": ["Briar Daisy", "Heat Root", "Cream of Tomato Soup", "Bouillabaisse"],
  "Chayne": ["Tomato", "Rice Seed", "Pearl", "Green Pearl"],
  "Delaila": ["Rainbow Trout", "HarvestBoost Fertilizer", "Blushing Batterfly", "Giant Goldfish"],
  "Einar": ["Worm", "Prism Trout", "Glow Worm", "Fisherman's Brew"],
  "Elouisa": ["Dawnray", "Cytthroat Trout", "Leafstalker Mantis", "Giant Goldfish"],
  "Eshe": ["Fur", "Juniper Seed", "Veil Piksii", "Chapaa Masala"],
  "Hassian": ["Flint", "Elder Sernuk Antlers", "Spicy Honey-Baked Muujin", "Shimmerfin"],
  "Hekla": ["Bahari Bass", "Bahari Bream", "Pinecone", "Celebration Cake"],
  "Hodari": ["Grilled Meat", "Heartwood", "Whitestone Slab", "Spitfire Cicada"],
  "Jel": ["Kilima Night Moth", "Albino Eel", "Veil Piksii", "Willow Lamprey"],
  "Jina": ["Shell", "Cotton", "Brighteye Butterfly", "Celebration Cake"],
  "Kenli": ["Grilled Oyster", "Fish Stew", "Loaded Flowtato", "Akwinduu Chapaa"],
  "Kenyatta": ["Briar Daisy", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Meaty Stir Fry"],
  "Nai'O": ["Spice Sprouts", "HarvestBoost Fertilizer", "Blueberry Jam", "Veggie Chili"],
  "Najuma": ["Tomato Plant Seed", "Garden Snail", "Floatfish Mushroom", "Platinum Ore"],
  "Reth": ["Chapaa Meat", "Creamy Carrot Soup", "Apple Jam", "Fruit Smoothie Bowl"],
  "Sifuu": ["Copper Ore", "Copper Bar", "Cream of Tomato Soup", "Swordfin Eel"],
  "Subira": ["Flow-Infused Wood", "Silver Bar", "Dari Cloves", "Angelfish"],
  "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Shimmerfin", "Leafstalker Mantis"],
  "Tau": ["Muujin Meat", "Striped Chapaa Tail", "Ship Fragments", "Akwinduu Chapaa"],
  "The Gardener": ["Plant Fiber", "Elder Clam Mushroom", "Sunburst Batterfly", "Will-o-wisp Rockhopper"],
  "Tish": ["Shell", "Acorn", "Silk Thread", "Green Pearl"],
  "Zeki": ["Coral", "Golden Salmon", "Silk Thread", "Poke Bowl"]
  
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