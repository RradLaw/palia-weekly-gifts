let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Congee", "Golden Salmon", "Fish Stew", "Sashimi"],
    "Auni": ["Waterlogged Boot", "Bahari Bee", "Spotted Mantis", "Celebration Cake"],
    "Badruu": ["Rosy Bitterling", "HydratePro Fertilizer", "Ramen", "Azure Stonehopper"],
    "Caleri": ["Grilled Mushroom", "Silk", "Pinecone", "Chapaa Masala"],
    "Chayne": ["Knapweed", "Glass Pane", "Pearl", "Dari Cloves"],
    "Delaila": ["Calico Koi", "HydratePro Fertilizer", "Princess Ladybug", "Giant Goldfish"],
    "Einar": ["Spotted Bullhead", "Ribbontail Ray", "Shimmerfin", "Cloudfish"],
    "Elouisa": ["Spotted Stinkbug", "Inky Dragonfly", "Spitfire Cicada", "Rainbow-Tipped Butterfly"],
    "Eshe": ["Leather", "Juniper Seed", "Silver Ore", "Bouillabaisse"],
    "Hassian": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Iron Ore", "Fireworks Arrow"],
    "Hekla": ["Briar Daisy", "Smallmouth Bass", "Ramen", "Enchanted Pupfish"],
    "Hodari": ["Grilled Meat", "Flow-Infused Wood", "Stonefish", "Spitfire Cicada"],
    "Jel": ["Shell", "Bat Ray", "Thundering Eel", "Willow Lamprey"],
    "Jina": ["Willow Lamprey", "Cotton", "Bacon-Stuffed Mushrooms", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Grilled Oyster", "Hearty Vegetable Soup", "Oysters Akwinduu", "Akwinduu Chapaa"],
    "Kenyatta": ["Sernuk Antlers", "Elder Sernuk Antlers", "Spicy Stir Fry", "Crimson Fangtooth"],
    "Nai'O": ["Muujin Meat", "SpeedyGro Fertilizer", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Flint", "Copper Bar", "Blueberry", "Blueberry Pie"],
    "Reth": ["Congee", "Spicy Pepper", "Blueberry", "Dari Cloves"],
    "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Proudhorned Sernuk Antlers", "Slowdown Arrow"],
    "Subira": ["Napa Cabbage", "Silver Ore", "Long Nosed Unicorn Fish", "Spicy Rice Cakes"],
    "Tamala": ["Kilima Night Moth", "Garden Millipede", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Muujin Meat", "Heartwood Plank", "Oyster Meat", "Proudhorned Sernuk Antlers"],
    "Tish": ["Wagon Wheel", "Heartwood Plank", "Apple Pie", "Green Pearl"],
    "Zeki": ["Grilled Fish", "Fish Stew", "Proudhorned Sernuk Antlers", "Gold Ore"]
      
      
       
    








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