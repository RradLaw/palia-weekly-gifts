let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Subira": ["Flow-Infused Wood", "Glow Worm", "Unknown", "Enchanted Pupfish"],
    "Hekla": ["Sundrop Lily", "Brightshroom", "Trout Dinner", "Green Pearl"],
    "Sifuu": ["Sernuk Antlers", "Copper Bar", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
    "Zeki": ["Unopened Oyster", "Fish Stew", "Silver Ore", "Gold Bar"],
    "Caleri": ["Sweet Leaf", "Silk", "Cream of Tomato Soup", "Chapaa Masala"],
    "Jel": ["Leather", "Freshwater Eel", "Silk Thread", "Bluebristle Muujin Mane"],
    "Nai'o": ["Muujin Meat", "HydratePro Fertilizer", "Blueberry Jam", "Steak Dinner"],
    "Eshe": ["Fur", "Samara", "Silver Bar", "Akwinduu Chapaa"],
    "Elouisa": ["Unopened Oyster", "Proudhorned Stag Beetle", "Beluga", "Midnight Paddlefish"],
    "Delaila": ["Cantankerous Koi", "QualityUp Fertilizer", "Stalking Catfish", "Unknown"],
    "Chayne": ["Onion Seed", "Juniper Seed", "Cream of Tomato Soup", "Palian Onion Soup"],
    "Tish": ["Briar Daisy", "Heartwood Plank", "Apple Pie", "Blueberry Pie"],
    "Einar": ["Striped Dace", "Garden Snail", "Fathead Minnow", "Enchanted Pupfish"],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Shimmerfin", "Fairy Mantis"],
    "Badruu": ["Cotton Seed", "HarvestBoost Fertilizer", "Blueberry Bush Seed", "Azure Stonehopper"],
    "Hodari": ["Fur", "Striped Chapaa Tail", "Azure Chapaa Tail", "Spitfire Cicada"],
    "Kenli": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Petit Fives", "Meaty Stir Fry"],
    "Kenyatta": ["Sundrop Lily", "Oily Anchovy", "Firebreathing Dragonfly", "Bluebristle Muujin Mane"],
    "Hassian": ["Sernuk Antlers", "Sernuk Hide", "Iron Ore", "Slowdown Arrow"],
    "Jina": ["Congee", "Duskwing Butterfly", "Brighteye Butterfly", "Void Ray"],
    "Najuma": ["Tomato", "Copper Bar", "Silver Ore", "Blueberry Pie"],
    "Auni": ["Brushtail Dragonfly", "Garden Snail", "Petit Fives", "Celebration Cake"],
    "Reth": ["Potato", "Pickled Onions", "Cream of Tomato Soup", "Dari Cloves"],
    "Tau": ["Sapwood Plank", "Unopened Oyster", "Azure Stonehopper", "Akwinduu Chapaa"],
    "Ashura": ["Grilled Fish", "Heartwood Plank", "Reth's Century Egg", "Celebration Cake"],
       
    








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