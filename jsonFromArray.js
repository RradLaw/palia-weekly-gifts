let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
        "Ashura": ["Grilled Fish", "Prism Trout", "Fish Stew", "Apple Pie"],
        "Auni": ["Common Bark Cicada", "Duskwing Butterfly", "Petit Fives", "Blueberry Pie"],
        "Badruu": ["Rosy Bitterling", "Hearty Vegetable Soup", "Ramen", "Cream of Mushroom Soup"],
        "Caleri": ["Knapweed", "Glass Bulb", "Crucian Carp", "Bouillabaisse"],
        "Chayne": ["Onion Seed", "Hearty Vegetable Soup", "Heat Root", "Dari Cloves"],
        "Delaila": ["Muujin Meat", "Garden Ladybug", "Vampire Crab", "Giant Goldfish"],
        "Einar": ["Eyeless Minnow", "Fairy Carp", "Fathead Minnow", "Ancient Fish"],
        "Elouisa": ["Unopened Oyster", "Bahari Bee", "Pearl", "Ancient Amber Beetle"],
        "Eshe": ["Leather", "Juniper Seed", "Black Sea Bass", "Akwinduu Chapaa"],
        "Hassian": ["Congee", "Standard Arrow", "Azure Chapaa Tail", "Giant Kilima Stingray"],
        "Hekla": ["Sundrop Lily", "Bahari Bream", "Chub", "Celebration Cake"],
        "Hodari": ["Paper Lantern Bug", "Copper Bar", "Iron Ore", "Firebreathing Dragonfly"],
        "Jel": ["Barracuda", "Silk", "Scintillating Centipede", "Bluebristle Muujin Mane"],
        "Jina": ["Congee", "Cotton Seed", "Mutated Angler", "Cream of Mushroom Soup"],
        "Kenli": ["Grilled Fish", "Garden Ladybug", "Trout Dinner", "Meaty Stir Fry"],
        "Kenyatta": ["Leather", "Inky Dragonfly", "Alligator Gar", "Meaty Stir Fry"],
        "Nai'O": ["Muujin Meat", "WeedBlock Fertilizer", "Corn", "Steak Dinner"],
        "Najuma": ["Wild Garlic", "Garden Snail", "Rice Cake Stir Fry", "Silver Bar"],
        "Reth": ["Spice Sprouts", "Wheat", "Loaded Potato Soup", "Palian Onion Soup"],
        "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Silver Ore", "Slowdown Arrow"],
        "Subira": ["Rainbow Trout", "Flow-Infused Plank", "Chili Oil Dumplings", "Enchanted Pupfish"],
        "Tamala": ["Kilima Night Moth", "Garden Millipede", "Dragon's Beard Peat", "Ancient Amber Beetle"],
        "Tau": ["Spotted Chapaa Tail", "Steamed Fish", "Brighteye Butterfly", "Grilled Meat"],
        "Tish": ["Sundrop Lily", "Dawnray", "Celebration Cake", "Blueberry Pie"],
        "Zeki": ["Coral", "Golden Salmon", "Silver Ore", "Gold Ore"]
      
      

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