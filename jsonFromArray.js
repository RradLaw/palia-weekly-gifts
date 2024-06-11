let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Channel Catfish", "Prism Trout", "Fish Stew", "Blueberry Pie"],
    "Auni": ["Waterlogged Boot", "Garden Leafhopper", "Blueberry", "Celebration Cake"],
    "Badruu": ["Rainbow Trout", "QualityUp Fertilizer", "Blueberry Bush Seed", "Meaty Stir Fry"],
    "Caleri": ["Knapweed", "Pickled Carrots", "Crucian Carp", "Bouillabaisse"],
    "Chayne": ["Congee", "Samara", "Dragon's Beard Peat", "Green Pearl"],
    "Delaila": ["Muujin Meat", "Kilima Catfish", "Iron Bar", "Giant Goldfish"],
    "Einar": ["Eyeless Minnow", "Yellow Perch", "Shimmerfin", "Radiant Sunfish"],
    "Elouisa": ["Spotted Stinkbug", "Inky Dragonfly", "Dragon's Beard Peat", "Ancient Amber Beetle"],
    "Eshe": ["Leather", "Silk", "Apple Jam", "Bouillabaisse"],
    "Hassian": ["Flint", "Brightshroom", "Proudhorned Sernuk Antlers", "Shimmerfin"],
    "Hekla": ["Grilled Meat", "Bahari Bream", "Chub", "Green Pearl"],
    "Hodari": ["Stone Brick", "Copper Bar", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Jel": ["Kilima Night Moth", "Striped Chapaa Tail", "Pearl", "Muujin Bahari"],
    "Jina": ["Congee", "Heat Root", "Dragon's Beard Peat", "Apple Pie"],
    "Kenli": ["Spotted Chapaa Tail", "Hearty Vegetable Soup", "Trout Dinner", "Gold Bar"],
    "Kenyatta": ["Blueberry Jam", "Oily Anchovy", "Spotted Mantis", "Meaty Stir Fry"],
    "Nai'O": ["Muujin Meat", "SpeedyGro Fertilizer", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Copper Bar", "Stripeshell Snail", "Silver Bar"],
    "Reth": ["Sernuk Meat", "Largemouth Bass", "Apple Jam", "Palian Onion Soup"],
    "Sifuu": ["Chapaa Meat", "Oily Anchovy", "Silver Ore", "Fireworks Arrow"],
    "Subira": ["Spice Sprouts", "Gold Ore", "Mutated Angler", "Enchanted Pupfish"],
    "Tamala": ["Wild Ginger", "Lunar Fairy Moth", "Hairy Millipede", "Enchanted Pupfish"],
    "Tau": ["Muujin Meat", "Striped Chapaa Tail", "Chapaa Masala", "Akwinduu Chapaa"],
    "Tish": ["Crystal Lake Lotus", "Juniper Seed", "Apple Pie", "Blueberry Pie"],
    "Zeki": ["Coral", "Silk", "Oysters Akwinduu", "Gold Ore"]
    








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