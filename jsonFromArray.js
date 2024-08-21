let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Sapwood Plank", "Striped Sturgeon", "Fried Catfish Dinner", "Celebration Cake"],
  "Auni": ["Waterlogged Boot", "Garden Snail", "Stripeshell Snail", "Blueberry Pie"],
  "Badruu": ["Onion", "SpeedyGro Fertilizer", "Ramen", "Meaty Stir Fry"],
  "Caleri": ["Briar Daisy", "Pickled Carrots", "Crucian Carp", "Bouillabaisse"],
  "Chayne": ["Sundrop Lily", "Rice", "Cream of Tomato Soup", "Palian Onion Soup"],
  "Delaila": ["Bahari Crab", "Clay", "Scarlet Koi", "Giant Goldfish"],
  "Einar": ["Mudminnow", "Fairy Carp", "Shimmerfin", "Kilima Greyling"],
  "Elouisa": ["Spotted Stinkbug", "Inky Dragonfly", "Beluga", "Fairy Mantis"],
  "Eshe": ["Grilled Oyster", "Silk", "Black Sea Bass", "Bouillabaisse"],
  "Hassian": ["Leather", "Sernuk Hide", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
  "Hekla": ["Mountain Morel", "Fried Catfish Dinner", "Pearl", "Celebration Cake"],
  "Hodari": ["Fur", "Elder Sernuk Antlers", "Iron Bar", "Bahari Glowbug"],
  "Jel": ["Barracuda", "Lunar Fairy Moth", "Gossamer Veil Moth", "Bluebristle Muujin Mane"],
  "Jina": ["Congee", "Duskwing Butterfly", "Shimmerfin", "Rainbow-Tipped Butterfly"],
  "Kenli": ["Grilled Oyster", "Hearty Vegetable Soup", "Princess Ladybug", "Celebration Cake"],
  "Kenyatta": ["Emerald Carpet Moss", "Elder Sernuk Antlers", "Firebreathing Dragonfly", "Fairy Mantis"],
  "Nai'O": ["Muujin Meat", "SpeedyGro Fertilizer", "Stalking Catfish", "Steak Dinner"],
  "Najuma": ["Sweet Leaf", "Copper Bar", "Iron Ore", "Silver Bar"],
  "Reth": ["Tomato", "Ramen", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
  "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Gold Ore"],
  "Subira": ["Copper Bar", "Gold Bar", "Dari Cloves", "Spitfire Cicada"],
  "Tamala": ["Kilima Night Moth", "Garden Millipede", "Fairy Carp", "Ancient Amber Beetle"],
  "Tau": ["Muujin Meat", "Unopened Oyster", "Flow-Infused Plank", "Wagon Wheel"],
  "Tish": ["Coral", "Acorn", "Apple Pie", "Green Pearl"],
  "Zeki": ["Grilled Oyster", "Golden Salmon", "Sashimi", "Poke Bowl"]


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