let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
"Ashura": ["Silver Salmon", "Heartwood Plank", "Flow-Infused Plank", "Chapaa Masala"],
  "Auni": ["Common Field Cricket", "Garden Millipede", "Stripeshell Snail", "Blueberry Pie"],
  "Badruu": ["Cotton Seed", "Orange Bluegill", "Ramen", "Meaty Stir Fry"],
  "Caleri": ["Sweet Leaf", "Pickled Carrots", "Cream of Tomato Soup", "Hypnotic Moray"],
  "Chayne": ["Potato", "Samara", "Pearl", "Cream of Mushroom Soup"],
  "Delaila": ["Cantankerous Koi", "WeedBlock Fertilizer", "Golden Glory Bee", "Giant Goldfish"],
  "Einar": ["Striped Dace", "Ribbontail Ray", "Mottled Gobi", "Long Nosed Unicorn Fish"],
  "Elouisa": ["Dawnray", "Cerulean Cicada", "Indigo Lamprey", "Midnight Paddlefish"],
  "Eshe": ["Grilled Oyster", "Samara", "Apple Jam", "Palian Onion Soup"],
  "Hassian": ["Sernuk Antlers", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Slowdown Arrow"],
  "Hekla": ["Crystal Lake Lotus", "Bahari Bream", "Trout Dinner", "Celebration Cake"],
  "Hodari": ["Grilled Meat", "Copper Bar", "Iron Bar", "Bahari Glowbug"],
  "Jel": ["Leather", "Lunar Fairy Moth", "Azure Chapaa Tail", "Midnight Paddlefish"],
  "Jina": ["Congee", "Cotton", "Mutated Angler", "Celebration Cake"],
  "Kenli": ["Chapaa Meat", "Creamy Carrot Soup", "Petit Fives", "Palian Onion Soup"],
  "Kenyatta": ["Barracuda", "Elder Sernuk Antlers", "Kimchi Fried Rice", "Bluebristle Muujin Mane"],
  "Nai'O": ["Muujin Meat", "Wheat Seed", "Iron Bar", "Steak Dinner"],
  "Najuma": ["Sweet Leaf", "Copper Bar", "Flow-Infused Plank", "Blueberry Pie"],
  "Reth": ["Chapaa Meat", "Hearty Vegetable Soup", "Apple", "Dari Cloves"],
  "Sifuu": ["Copper Ore", "Copper Bar", "Cream of Tomato Soup", "Gold Bar"],
  "Subira": ["Wild Green Onion", "Grilled Oyster", "Pan Fried Dumplings", "Enchanted Pupfish"],
  "Tamala": ["Kilima Night Moth", "Heat Root", "Hairy Millipede", "Leafstalker Mantis"],
  "Tau": ["Chapaa Meat", "Sernuk Antlers", "Prism Trout", "Grilled Meat"],
  "Tish": ["Sundrop Lily", "Acorn", "Apple Pie", "Blueberry Pie"],
  "Zeki": ["Coral", "Silk", "Flow-Infused Plank", "Gold Bar"]




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