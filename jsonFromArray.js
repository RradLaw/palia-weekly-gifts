let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Grilled Fish", "Acorn", "Fried Catfish Dinner", "Trout Dinner"],
    "Auni": ["Spotted Stinkbug", "Bahari Bee", "Petit Fives", "Blueberry Pie"],
    "Badruu": ["Tomato", "Rice", "Loaded Potato Soup", "Meaty Stir Fry"],
    "Caleri": ["Crystal Lake Lotus", "Kilima Redfin", "Chapaa Onigiri", "Chapaa Masala"],
    "Chayne": ["Onion Seed", "Blueberry Bush Seed", "Blueberry", "Dari Cloves"],
    "Delaila": ["Calico Koi", "Wheat Seed", "Golden Glory Bee", "Gold Bar"],
    "Einar": ["Spotted Bullhead", "Red-bellied Piranha", "Fathead Minnow", "Void Ray"],
    "Elouisa": ["Unopened Oyster", "Paddlefish", "Leafstalker Mantis", "Rainbow-Tipped Butterfly"],
    "Eshe": ["Grilled Oyster", "Juniper Seed", "Apple Jam", "Akwinduu Chapaa"],
    "Hassian": ["Plant Fiber", "Cotton", "Iron Bar", "Giant Kilima Stingray"],
    "Hekla": ["Sundrop Lily", "Acorn", "Ramen", "Enchanted Pupfish"],
    "Hodari": ["Spotted Chapaa Tail", "Sernuk Noodle Stew", "Azure Chapaa Tail", "Spitfire Cicada"],
    "Jel": ["Umbran Carp", "Albino Eel", "Azure Chapaa Tail", "Willow Lamprey"],
    "Jina": ["Coral", "Brightshroom", "Bacon-Stuffed Mushrooms", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Chapaa Meat", "Garden Ladybug", "Sushi", "Bouillabaisse"],
    "Kenyatta": ["Emerald Carpet Moss", "Pickled Onions", "Dragon's Beard Peat", "Crimson Fangtooth"],
    "Nai'O": ["Spice Sprouts", "Heartwood Plank", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Copper Ore", "Copper Bar", "Silver Ore", "Blueberry Pie"],
    "Reth": ["Wild Garlic", "Largemouth Bass", "Cream of Tomato Soup", "Dari Cloves"],
    "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Cream of Tomato Soup", "Dispel Arrow"],
    "Subira": ["Grilled Fish", "Ancient Fish", "Standard Arrow", "Enchanted Pupfish"],
    "Tamala": ["Common Field Cricket", "Lunar Fairy Moth", "Hairy Millipede", "Fairy Mantis"],
    "Tau": ["Fried Catfish Dinner", "Steak Dinner", "Carrot", "Rainbow-Tipped Butterfly"],
    "Tish": ["Crystal Lake Lotus", "Samara", "Pinecone", "Green Pearl"],
    "Zeki": ["Coral", "Golden Salmon", "Pearl", "Green Pearl"]



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