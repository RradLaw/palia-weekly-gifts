let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    "Ashura": ["Striped Dace", "Stickleback", "Fish Stew", "Sushi"],
    "Auni": ["Ship Fragments", "Garden Millipede", "Petit Fives", "Celebration Cake"],
    "Badruu": ["Wagon Wheel", "Hearty Vegetable Soup", "Blueberry Bush Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Paper Lantern Bug", "Heat Root", "Chapaa Onigiri", "Dari Cloves"],
    "Chayne": ["Hearty Vegetable Soup", "Pearl", "Palian Onion Soup", "?"],
    "Delaila": ["Clay", "Garden Ladybug", "Vampire Crab", "Giant Goldfish"],
    "Einar": ["Gillyfin", "Yellow Perch", "Glow Worm", "Void Ray"],
    "Elouisa": ["Ship Fragments", "Paddlefish", "Willow Lamprey", "Bluebristle Muujin Mane"],
    "Eshe": ["Fur", "Fish Stew", "Silver Bar", "Gold Bar"],
    "Hassian": ["Leather", "Elder Sernuk Antlers", "Iron Bar", "Giant Kilima Stingray"],
    "Hekla": ["Grilled Fish", "Smallmouth Bass", "Green Pearl", "?"],
    "Hodari": ["Stone Brick", "Heartwood", "Iron Ore", "Spitfire Cicada"],
    "Jel": ["Eyeless Minnow", "Freshwater Eel", "Indigo Lamprey", "Bluebristle Muujin Mane"],
    "Jina": ["Congee", "Cotton", "Shimmerfin", "?"],
    "Kenli": ["Grilled Oyster", "Fish Stew", "Azure Chapaa Tail", "Meaty Stir Fry"],
    "Kenyatta": ["Garden Mantis", "Oily Anchovy", "?", "Bluebristle Muujin Mane"],
    "Nai'O": ["Muujin Meat", "Heat Root", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Tomato", "Copper Bar", "Iron Ore", "Silver Bar"],
    "Reth": ["Chapaa Meat", "Rice", "Apple", "Palian Onion Soup"],
    "Sifuu": ["Stone Brick", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Swordfin Eel"],
    "Subira": ["Spice Sprouts", "Grilled Oyster", "Spicy Pepper", "?"],
    "Tamala": ["Emerald Carpet Moss", "Silk", "Pearl", "Green Pearl"],
    "Tau": ["Calico Koi", "Leather", "Ship Fragments", "Apple"],
    "Tish": ["Wagon Wheel", "Dawnray", "Celebration Cake", "Green Pearl"],
    "Zeki": ["Grilled Fish", "Golden Salmon", "Fried Catfish Dinner", "Green Pearl"],
    









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