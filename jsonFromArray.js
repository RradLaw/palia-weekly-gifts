let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Silver Salmon", "Striped Sturgeon", "Pumpkin Curry and Rice", "Blueberry Pie"],

  "Auni": ["Ship Fragments", "Garden Leafhopper", "Spotted Mantis", "Celebration Cake"],

  "Badruu": ["Rainbow Trout", "Rice", "Batterfly Beans", "Azure Stonehopper"],

  "Caleri": ["Sweet Leaf", "Heat Root", "Tinfin", "Hypnotic Moray"],

  "Chayne": ["Wild Garlic", "Blueberry Bush Seed", "Apple", "Veggie Chili"],

  "Delaila": ["Cantankerous Koi", "QualityUp Fertilizer", "Mini Mullet", "Giant Goldfish"],

  "Einar": ["Striped Dace", "Red-bellied Piranha", "Fathead Minnow", "Cactus Moray"],

  "Elouisa": ["Duskray", "Cantankerous Koi", "Cave Piksii", "Green Pearl"],

  "Eshe": ["Leather", "Silk", "Spicy Honey-Baked Muujin", "Steak Dinner"],

  "Hassian": ["Plant Fiber", "Standard Arrow", "Proudhorned Sernuk Antlers", "Fireworks Arrow"],

  "Hekla": ["Oyster Meat", "Bahari Bream", "Ramen", "Celebration Cake"],

  "Hodari": ["Paper Lantern Bug", "Heartwood", "Iron Bar", "Platinum Bar"],

  "Jel": ["Umbran Carp", "Bat Ray", "Silk Thread", "Midnight Paddlefish"],

  "Jina": ["Shell", "Cotton Seed", "Brighteye Butterfly", "Cream of Mushroom Soup"],

  "Kenli": ["Wagon Wheel", "Ramen", "Loaded Potato Soup", "Celebration Cake"],

  "Kenyatta": ["Wild Garlic", "Elder Sernuk Antlers", "Firebreathing Dragonfly", "Majiri-of-War"],

  "Nai'O": ["Spice Sprouts", "Kilima Catfish", "Fried Catfish Dinner", "Fruit Smoothie Bowl"],

  "Najuma": ["Knapweed", "Garden Snail", "Iron Bar", "Silver Bar"],

  "Reth": ["Spice Sprouts", "Ramen", "Pumpkin Stew", "Palian Onion Soup"],

  "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Ogopuu Scale", "Gold Ore"],

  "Subira": ["Spice Sprouts", "Gold Ore", "Long Nosed Unicorn Fish", "Firebreathing Dragonfly"],

  "Tamala": ["Kilima Night Moth", "Brightshroom", "Hairy Millipede", "Ancient Amber Beetle"],

  "Tau": ["Common Field Cricket", "Heartwood Plank", "Brighteye Butterfly", "Akwinduu Chapaa"],

  "The Gardener": ["Grumpy Granite Rockhopper", "Elder Clam Mushroom", "Ancient Wood Seed", "Princess Ladybug"],

  "Tish": ["Briar Daisy", "Heartwood Plank", "Silk Thread", "Green Pearl"],

  "Zeki": ["Coral", "Fish Stew", "Crab Gumbo", "Elder Shmole Spore"]

  
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