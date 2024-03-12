let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Channel Catfish", "Samara", "Fish Stew", "Sushi"],
"Auni": ["Ship Fragments", "Duskwing Butterfly", "Scintillating Centipede", "Celebration Cake"],
"Badruu": ["Potato Seed", "SpeedyGro Fertilizer", "Loaded Potato Soup", "Azure Stonehopper"],
"Caleri": ["Emerald Carpet Moss", "Glass Bulb", "Blueberry Jam", "Bouillabaisse"],
"Chayne": ["Potato Seed", "Apple Jam", "Blueberry", "Green Pearl"],
"Delaila": ["Muujin Meat", "QualityUp Fertilizer", "Vampire Crab", "Gold Bar"],
"Einar": ["Mudminnow", "Red-bellied Piranha", "Vampire Crab", "Long Nosed Unicorn Fish"],
"Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Pearl", "Fairy Mantis"],
"Eshe": ["Leather", "Silk", "Silver Bar", "Jewelwing Dragonfly"],
"Hassian": ["Mountain Morel", "Sernuk Hide", "Azure Chapaa Tail", "Slowdown Arrow"],
"Hekla": ["Grilled Mushroom", "Painted Perch", "Chub", "Enchanted Pupfish"],
"Hodari": ["Spotted Chapaa Tail", "Elder Sernuk Antlers", "Iron Bar", "Bahari Glowbug"],
"Jel": ["Fur", "Striped Chapaa Tail", "Silk Thread", "Muujin Bahari"],
"Jina": ["Coral", "Brightshroom", "Dragon's Beard Peat", "Apple Pie"],
"Kenli": ["Grilled Oyster", "Ramen", "Loaded Potato Soup", "Muujin Bahari"],
"Kenyatta": ["Knapweed", "Cytthroat Trout", "Spicy Rice Cakes", "Fairy Mantis"],
"Nai'O": ["Wagon Wheel", "WeedBlock Fertilizer", "Corn", "Steak Dinner"],
"Najuma": ["Knapweed", "Copper Bar", "Cream of Tomato Soup", "Blueberry Pie"],
"Reth": ["Carrot", "Pickled Onions", "Raspberry Beetle", "Dari Cloves"],
"Sifuu": ["Chapaa Meat", "Oily Anchovy", "Proudhorned Sernuk Antlers", "Fireworks Arrow"],
"Subira": ["Grilled Meat", "Fisherman's Brew", "Hearty Vegetable Soup", "Spicy Pepper"],
"Tamala": ["Fur", "Heat Root", "Shimmerfin", "Fairy Mantis"],
"Tau": ["Spotted Chapaa Tail", "Cantankerous Koi", "Prism Trout", "Wagon Wheel"],
"Tish": ["Wagon Wheel", "Dawnray", "Pinecone", "Blueberry Pie"],
"Zeki": ["Grilled Fish", "Silk", "Silver Ore", "Gold Bar"],

    
    








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