let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Sweet Leaf", "Prism Trout", "Sernuk Noodle Stew", "Celebration Cake"],
    "Auni": ["Common Field Cricket", "Duskwing Butterfly", "Hairy Millipede", "Blueberry Pie"],
    "Badruu": ["Rosy Bitterling", "Wheat Seed", "Apple Tree Seed", "Meaty Stir Fry"],
    "Caleri": ["Knapweed", "Heat Root", "Crucian Carp", "Hypnotic Moray"],
    "Chayne": ["Crystal Lake Lotus", "Pickled Tomatoes", "Blueberry", "Green Pearl"],
    "Delaila": ["Rosy Bitterling", "HarvestBoost Fertilizer", "Golden Glory Bee", "Gold Bar"],
    "Einar": ["Silvery Minnow", "Spineshell Crab", "Vampire Crab", "Cloudfish"],
    "Elouisa": ["Ship Fragments", "Bahari Bee", "Dragon's Beard Peat", "Flametongue Ray"],
    "Eshe": ["Fur", "Bluefin Tuna", "Black Sea Bass", "Gold Ore"],
    "Hassian": ["Congee", "Sernuk Hide", "Iron Bar", "Fireworks Arrow"],
    "Hekla": ["Oyster Meat", "Acorn", "Pinecone", "Celebration Cake"],
    "Hodari": ["Leather", "Sernuk Noodle Stew", "Stonefish", "Spitfire Cicada"],
    "Jel": ["Kilima Night Moth", "Sernuk Hide", "Gossamer Veil Moth", "Muujin Bahari"],
    "Jina": ["Coral", "Brightshroom", "Shimmerfin", "Dari Cloves"],
    "Kenli": ["Chapaa Meat", "Striped Chapaa Tail", "Trout Dinner", "Iron Bar"],
    "Kenyatta": ["Crystal Lake Lotus", "Acorn", "Pheonixfire Relleno", "Meaty Stir Fry"],
    "Nai'O": ["Spice Sprouts", "QualityUp Fertilizer", "Blueberry Jam", "Steak Dinner"],
    "Najuma": ["Tomato", "Copper Bar", "Honey Loach", "Silver Bar"],
    "Reth": ["Carrot", "Ramen", "Raspberry Beetle", "Cream of Mushroom Soup"],
    "Sifuu": ["Grilled Meat", "Iron Ore", "Proudhorned Sernuk Antlers", "Gold Ore"],
    "Subira": ["Iron Bar", "Fisherman's Brew", "Hearty Vegetable Soup", "Enchanted Pupfish"],
    "Tamala": ["Emerald Carpet Moss", "Brightshroom", "Garden Leafhopper", "Dari Cloves"],
    "Tau": ["Sapwood Plank", "Silver Salmon", "Oyster Meat", "Apple"],
    "Tish": ["Sundrop Lily", "Acorn", "Pinecone", "Green Pearl"],
    "Zeki": ["Coral", "Fish Stew", "Sashimi", "Gold Ore"]


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