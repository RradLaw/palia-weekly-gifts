let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

"Ashura": ["Grilled Fish", "Golden Salmon", "Ancient Wood Plank", "Ancient Wood Seed"],
  "Auni": ["Waterlogged Boot", "Garden Millipede", "Apple", "Blood Beetle"],
  "Badruu": ["Carrot Seed", "Orange Bluegill", "Blueberry Bush Seed", "Unknown"],
  "Caleri": ["Unknown", "Kilima Redfin", "Silk Thread", "Dari Cloves"],
  "Chayne": ["Onion Seed", "Samara", "Elder Clam Mushroom Meat", "Unknown"],
  "Delaila": ["Rosy Bitterling", "Unknown", "Stalking Catfish", "Unknown"],
  "Einar": ["Bahari Crab", "Prism Trout", "Fathead Minnow", "Stormray"],
  "Elouisa": ["Duskray", "Paddlefish", "Dragon's Beard Peat", "Cloudfish"],
  "Eshe": ["Leather", "Silk", "Unknown", "Unknown"],
  "Hassian": ["Congee", "Sernuk Noodle Stew", "Unknown", "Elder Shmole Spore"],
  "Hekla": ["Briar Daisy", "Fried Catfish Dinner", "Trout Dinner", "Unknown"],
  "Hodari": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Shmole Spore", "Bahari Glowbug"],
  "Jel": ["Barracuda", "Muujin Mane", "Banded Muujin Mane", "Green Pearl"],
  "Jina": ["Shell", "Brightshroom", "Umbraan Betta", "Devilfish"],
  "Kenli": ["Spotted Chapaa Tail", "Ramen", "Sashimi", "Bouillabaisse"],
  "Kenyatta": ["Leather", "Elder Sernuk Antlers", "Phoenixfire Relleno", "Fairy Mantis"],
  "Nai'O": ["Unknown", "Kilima Catfish", "Bahari Pike", "Fruit Smoothie Bowl"],
  "Najuma": ["Unknown", "Unknown", "Pumpkin Curry and Rice", "Platinum Ore"],
  "Reth": ["Carrot", "Pickled Onions", "Apple", "Unknown"],
  "Sifuu": ["Unknown", "Standard Arrow", "Whitestone Slab", "Dispel Arrow"],
  "Subira": ["Sernuk Hide", "Heat Root", "Hearty Vegetable Soup", "Unknown"],
  "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Palian Betta", "Unknown"],
  "Tau": ["Common Field Cricket", "Steak Dinner", "Carrot", "Will-o-wisp Rockhopper"],
  "Tish": ["Clay", "Juniper Seed", "Unknown", "Unknown"],
  "Ulfe": ["Unknown", "Unknown", "Unknown", "Unknown"],
  "Zeki": ["Unknown", "Golden Salmon", "Pearl", "Black Pearl"]
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