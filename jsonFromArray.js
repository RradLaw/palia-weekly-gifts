let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {


    "Ashura": ["Striped Dace", "Prism Trout", "Sernuk Noodle Stew", "Chapaa Masala"],
"Auni": ["Common Bark Cicada", "Garden Leafhopper", "Firebreathing Dragonfly", "Celebration Cake"],
"Badruu": ["Rainbow Trout", "Wheat", "Ramen", "Cream of Mushroom Soup"],
"Caleri": ["Spice Sprouts", "Heat Root", "Crucian Carp", "Bouillabaisse"],
"Chayne": ["Tomato", "Wheat", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
"Delaila": ["Muujin Meat", "Spineshell Crab", "Scarlet Koi", "Giant Goldfish"],
"Einar": ["Eyeless Minnow", "Ribbontail Ray", "Vampire Crab", "Long Nosed Unicorn Fish"],
"Elouisa": ["Common Bark Cicada", "Albino Eel", "Brighteye Butterfly", "Ancient Amber Beetle"],
"Eshe": ["Grilled Oyster", "Silk", "Silver Bar", "Muujin Bahari"],
"Hassian": ["Flint", "Elder Sernuk Antlers", "Iron Bar", "Shimmerfin"],
"Hekla": ["Bahari Bass", "Brightshroom", "Chub", "Enchanted Pupfish"],
"Hodari": ["Leather", "Striped Chapaa Tail", "Blue Marlin", "Spitfire Cicada"],
"Jel": ["Kilima Night Moth", "Albino Eel", "Indigo Lamprey", "Green Pearl"],
"Jina": ["Congee", "Brightshroom", "Radiant Sunfish", "Dari Cloves"],
"Kenli": ["Wagon Wheel", "Garden Ladybug", "Trout Dinner", "Bouillabaisse"],
"Kenyatta": ["Sardine", "Elder Sernuk Antlers", "Banded Muujin Mane", "Meaty Stir Fry"],
"Nai'O": ["Muujin Meat", "Channel Catfish", "Bahari Pike", "Steak Dinner"],
"Najuma": ["Copper Ore", "Copper Bar", "Apple Jam", "Silver Bar"],
"Reth": ["Onion", "Rice", "Loaded Potato Soup", "Palian Onion Soup"],
"Sifuu": ["Stone Brick", "Oily Anchovy", "Cream of Tomato Soup", "Gold Ore"],
"Subira": ["Wheat", "Loaded Potato Soup", "Hearty Vegetable Soup", "Enchanted Pupfish"],
"Tamala": ["Kilima Night Moth", "Garden Millipede", "Fairy Carp", "Leafstalker Mantis"],
"Tau": ["Fried Catfish Dinner", "Oily Anchovy", "Oyster Meat", "Shimmerfin"],
"Tish": ["Briar Daisy", "Glass Bulb", "Celebration Cake", "Blueberry Pie"],
"Zeki": ["Unopened Oyster", "Golden Salmon", "Silk Thread", "Poke Bowl"],













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