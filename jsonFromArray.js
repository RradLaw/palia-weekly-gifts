let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

"Ashura": ["Rainbow Trout", "Striped Sturgeon", "Fish Stew", "Chapaa Masala"],
"Auni": ["Spotted Stinkbug", "Duskwing Butterfly", "Hairy Millipede", "Celebration Cake"],
"Badruu": ["Potato", "Orange Bluegill", "Loaded Potato Soup", "Cream of Mushroom Soup"],
"Caleri": ["Sundrop Lily", "Glass Bulb", "Oysters Akwinduu", "Hypnotic Moray"],
"Chayne": ["Carrot", "Samara", "Dragon's Beard Peat", "Green Pearl"],
"Delaila": ["Cantankerous Koi", "Spineshell Crab", "Blueberry", "Gold Bar"],
"Einar": ["Striped Dace", "Prism Trout", "Fathead Minnow", "Blue Spotted Ray"],
"Elouisa": ["Unopened Oyster", "Cytthroat Trout", "Energised Piranha", "Midnight Paddlefish"],
"Eshe": ["Leather", "Samara", "Silver Bar", "Steak Dinner"],
"Hassian": ["Congee", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Shimmerfin"],
"Hekla": ["Bahari Bass", "Bahari Bream", "Trout Dinner", "Green Pearl"],
"Hodari": ["Fur", "Copper Bar", "Hot Hounds", "Bahari Glowbug"],
"Jel": ["Barracuda", "Striped Chapaa Tail", "Indigo Lamprey", "Muujin Bahari"],
"Jina": ["Coral", "Heat Root", "Radiant Sunfish", "Rainbow-Tipped Butterfly"],
"Kenli": ["Chapaa Meat", "Striped Chapaa Tail", "Princess Ladybug", "Muujin Bahari"],
"Kenyatta": ["Sernuk Antlers", "Cytthroat Trout", "Spotted Mantis", "Fairy Mantis"],
"Nai'O": ["Wagon Wheel", "Fish Stew", "Blueberry Bush Seed", "Steak Dinner"],
"Najuma": ["Knapweed", "Copper Bar", "Honey Loach", "Silver Bar"],
"Reth": ["Tomato", "Rice", "Blueberry", "Palian Onion Soup"],
"Sifuu": ["Grilled Meat", "Iron Ore", "Cream of Tomato Soup", "Steak Dinner"],
"Subira": ["Potato", "Gold Bar", "Dari Cloves", "Spitfire Cicada"],
"Tamala": ["Fur", "Lunar Fairy Moth", "Pearl", "Flametongue Ray"],
"Tau": ["Trout Dinner", "Grilled Fish", "Lucky Braised Fish", "Shimmerfin"],
"Tish": ["Sweet Leaf", "Glass Bulb", "Pinecone", "Blueberry Pie"],
"Zeki": ["Silvery Minnow", "Silk", "Silk Thread", "?"],











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