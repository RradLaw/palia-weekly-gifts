let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Sapwood Plank", "Stickleback", "Stalking Catfish", "Fisherman's Brew"],
  "Auni": ["Unopened Oyster", "Duskwing Butterfly", "Hairy Millipede", "Blood Beetle"],
  "Badruu": ["Potato", "HarvestBoost Fertilizer", "Pumpkin Pie", "Meaty Stir Fry"],
  "Caleri": ["Coral", "Glass Bulb", "Blushing Batterfly", "Inyrevn Mermaid"],
  "Chayne": ["Carrot", "Samara", "Honey", "Veggie Chili"],
  "Delaila": ["Channel Catfish", "SpeedyGro Fertilizer", "Blueberry Bush Seed", "Giant Goldfish"],
  "Einar": ["Silver Salmon", "Spineshell Crab", "Palian Betta", "Cloudfish"],
  "Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Ancient Wood", "Rainbow-Tipped Butterfly"],
  "Eshe": ["Fur", "Bluefin Tuna", "Silk Thread", "Black Pearl"],
  "Hassian": ["Grilled Meat", "Striped Chapaa Tail", "Ogopuu Meat", "Slowdown Arrow"],
  "Hekla": ["Bahari Bass", "Fried Catfish Dinner", "Ramen", "Green Pearl"],
  "Hodari": ["Copper Ore", "Striped Chapaa Tail", "Azure Chapaa Tail", "Steak Dinner"],
  "Jel": ["Waterlogged Boot", "Duskray", "Petit Fives", "Eleroo Eel"],
  "Jina": ["Coral", "Brightshroom", "Dragon's Beard Peat", "Cream of Mushroom Soup"],
  "Kenli": ["Wagon Wheel", "Creamy Carrot Soup", "Pan Fried Dumplings", "Meaty Stir Fry"],
  "Kenyatta": ["Garden Mantis", "Creamy Carrot Soup", "Devilfish", "Crimson Fangtooth"],
  "Nai'O": ["Spice Sprouts", "Wheat Seed", "Rockhopper Pumpkin Seed", "Veggie Chili"],
  "Najuma": ["Copper Ore", "Garden Snail", "Iron Bar", "Blueberry Pie"],
  "Reth": ["Wild Garlic", "Rice", "Batterfly Beans", "Rockhopper Pumpkin"],
  "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Turn Pike", "Swordfin Eel"],
  "Subira": ["Napa Cabbage", "Stuffed Cabbage Rolls", "Ancient Wood", "Rice Cake Stir Fry"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Hairy Millipede", "Flametongue Ray"],
  "Tau": ["Chapaa Meat", "Garden Leafhopper", "Elder Sernuk Antlers", "Wagon Wheel"],
  "Tish": ["Clay", "Stuffed Cabbage Rolls", "Flow-Infused Plank", "Angelfish"],
  "Zeki": ["Silvery Minnow", "Silk", "Steamed Fish", "Green Pearl"]
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