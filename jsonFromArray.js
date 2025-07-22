let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Acorn", "Fish Stew", "Apple Pie"],
  "Auni": ["Common Bark Cicada", "Garden Snail", "Petit Fives", "Blood Beetle"],
  "Badruu": ["Wagon Wheel", "HydratePro Fertilizer", "Rockhopper Pumpkin Seed", "Meaty Stir Fry"],
  "Caleri": ["Sweet Leaf", "Silk", "Floatfish Mushroom", "Dari Cloves"],
  "Chayne": ["Wild Ginger", "Hearty Vegetable Soup", "Candied Kopaa Nuts", "Green Pearl"],
  "Delaila": ["Rainbow Trout", "SpeedyGro Fertilizer", "Turn Pike", "Rockhopper Pumpkin"],
  "Einar": ["Bahari Crab", "Fairy Carp", "Fathead Minnow", "Kilima Grayling"],
  "Elouisa": ["Unopened Oyster", "Bahari Bee", "Raspberry Beetle", "Cloudfish"],
  "Eshe": ["Grilled Oyster", "Silk", "Silk Thread", "Steak Dinner"],
  "Hassian": ["Mountain Morel", "Chapaa Asada Tacos", "Proudhorned Sernuk Antlers", "Slowdown Arrow"],
  "Hekla": ["Grilled Fish", "Painted Perch", "Pinecone", "Celebration Cake"],
  "Hodari": ["Leather", "Copper Bar", "Blue Marlin", "Platinum Ore"],
  "Jel": ["Fur", "Albino Eel", "Petit Fives", "Willow Lamprey"],
  "Jina": ["Mountain Morel", "Duskwing Butterfly", "Brighteye Butterfly", "Apple Pie"],
  "Kenli": ["Chapaa Meat", "Ramen", "Fried Catfish Dinner", "Chapaa Masala"],
  "Kenyatta": ["Barracuda", "Inky Dragonfly", "Spicy Rice Cakes", "Meaty Stir Fry"],
  "Nai'O": ["Muujin Meat", "Rice Seed", "Piksii Berries", "Fruit Smoothie Bowl"],
  "Najuma": ["Knapweed", "Garden Snail", "Cream of Tomato Soup", "Blueberry Pie"],
  "Reth": ["Onion", "Rice", "Flowtato", "Rockhopper Pumpkin"],
  "Sifuu": ["Copper Ore", "Copper Bar", "Turn Pike", "Blood Beetle"],
  "Subira": ["Makeshift Arrow", "Radiant Sunfish", "Ancient Amber Beetle", "Enchanted Pupfish"],
  "Tamala": ["Emerald Carpet Moss", "Silk", "Hairy Millipede", "Dari Cloves"],
  "Tau": ["Sernuk Meat", "Cantankerous Koi", "Oyster Meat", "Wagon Wheel"],
  "Tish": ["Crystal Lake Lotus", "Stuffed Cabbage Rolls", "Whitestone", "Blueberry Pie"],
  "Zeki": ["Grilled Fish", "Fish Stew", "Sabertoothed Anchovy", "Dari Cloves"]
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