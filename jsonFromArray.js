let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {



    "Ashura": ["Rainbow Trout", "Golden Salmon", "Crab Pot Pie", "Trout Dinner"],
    "Auni": ["Unopened Oyster", "Bahari Bee", "Apple", "Celebration Cake"],
    "Badruu": ["Rosy Bitterling", "Corn Seed", "Apple Tree Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Grilled Oyster", "Glass Bulb", "Pinecone", "Dari Cloves"],
    "Chayne": ["Tomato", "Apple Jam", "Apple", "Dari Cloves"],
    "Delaila": ["Rosy Bitterling", "Clay", "Vampire Crab", "Gold Bar"],
    "Einar": ["Bahari Crab", "Mirror Carp", "Mottled Gobi", "Kilima Greyling"],
    "Elouisa": ["Duskray", "Albino Eel", "Spitfire Cicada", "Cloudfish"],
    "Eshe": ["Fur", "Bluefin Tuna", "Silver Bar", "Palian Onion Soup"],
    "Hassian": ["Spotted Chapaa Tail", "Cotton", "Proudhorned Sernuk Antlers", "Shimmerfin"],
    "Hekla": ["Mountain Morel", "Painted Perch", "Beluga", "Celebration Cake"],
    "Hodari": ["Copper Ore", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Jel": ["Shell", "Duskray", "Banded Muujin Mane", "Willow Lamprey"],
    "Jina": ["Wagon Wheel", "Glass Pane", "Mutated Angler", "Void Ray"],
    "Kenli": ["Grilled Fish", "Creamy Carrot Soup", "Princess Ladybug", "Chapaa Masala"],
    "Kenyatta": ["Sundrop Lily", "Acorn", "Dragon's Beard Peat", "Crimson Fangtooth"],
    "Nai'O": ["Wagon Wheel", "Kilima Catfish", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Sweet Leaf", "Copper Bar", "Stripeshell Snail", "Blueberry Pie"],
    "Reth": ["Wild Garlic", "Wheat", "Loaded Potato Soup", "Palian Onion Soup"],
    "Sifuu": ["Grilled Meat", "Pickled Carrots", "Cream of Tomato Soup", "Gold Ore"],
    "Subira": ["Wheat", "Ancient Fish", "Chapaa Onigiri", "?"],
    "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Fairy Carp", "Leafstalker Mantis"],
    "Tau": ["Common Field Cricket", "Steak Dinner", "Chapaa Masala", "Grilled Meat"],
    "Tish": ["Ship Fragments", "Glass Bulb", "Petit Fives", "Blueberry Pie"],
    "Zeki": ["Grilled Fish", "Silk", "Silver Bar", "Gold Ore"],












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