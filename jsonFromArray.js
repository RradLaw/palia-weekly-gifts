let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    "Ashura": ["Sapwood Plank", "Heartwood Plank", "Honey", "Chapaa Masala"],
  "Auni": ["Ship Fragments", "Garden Leafhopper", "Sunburst Batterfly", "Will-o-wisp Rockhopper"],
  "Badruu": ["Potato Seed", "HydratePro Fertilizer", "Flowtato", "Bean Burger"],
  "Caleri": ["Knapweed", "Pickled Carrots", "Bahari Glowbug", "Hypnotic Moray"],
  "Chayne": ["Sundrop Lily", "Glass Pane", "Dragon's Beard Peat", "Veggie Chili"],
  "Delaila": ["Channel Catfish", "WeedBlock Fertilizer", "Apple", "Rockhopper Pumpkin"],
  "Einar": ["Silver Salmon", "Ribbontail Ray", "Flow-Infused Plank", "Void Ray"],
  "Elouisa": ["Oyster Meat", "Albino Eel", "Flowtato Fries with Ketchup", "Rainbow-Tipped Butterfly"],
  "Eshe": ["Leather", "Fish Stew", "Veil Piksii", "Emerald Ogopuu Scale"],
  "Hassian": ["Spotted Chapaa Tail", "Cotton", "Iron Bar", "Steak Dinner"],
  "Hekla": ["Mountain Morel", "Painted Perch", "Ramen", "Celebration Cake"],
  "Hodari": ["Sernuk Antlers", "Copper Bar", "Draugr Beetle", "Emerald Ogopuu Scale"],
  "Jel": ["Shell", "Duskray", "Veil Piksii", "Eleroo Eel"],
  "Jina": ["Mountain Morel", "Heat Root", "Brighteye Butterfly", "Cream of Mushroom Soup"],
  "Kenli": ["Grilled Fish", "Striped Chapaa Tail", "Princess Ladybug", "Celebration Cake"],
  "Kenyatta": ["Leather", "Acorn", "Banded Muujin Mane", "Majiri-of-War"],
  "Nai'O": ["Muujin Meat", "QualityUp Fertilizer", "Bronze Bluegill", "Steak Dinner"],
  "Najuma": ["Clay", "Garden Snail", "Silver Ore", "Veggie Chili"],
  "Reth": ["Tomato", "Creamy Carrot Soup", "Blueberry", "Fruit Smoothie Bowl"],
  "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Steak Dinner"],
  "Subira": ["Grilled Meat", "Loaded Potato Soup", "Ancient Koi", "Enchanted Pupfish"],
  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Radiant Sunfish", "Leafstalker Mantis"],
  "Tau": ["Sapwood Plank", "Unopened Oyster", "Sunburst Batterfly", "Wagon Wheel"],
  "The Gardener": ["Knapweed", "Elder Clam Mushroom", "Nightshadow Batterfly", "Princess Ladybug"],
  "Tish": ["Sundrop Lily", "Acorn", "Whitestone", "Blueberry Pie"],
  "Zeki": ["Grilled Fish", "Silk", "Silver Bar", "Gold Ore"]
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