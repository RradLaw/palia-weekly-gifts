let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Channel Catfish", "Stickleback", "Stalking Catfish", "Trout Dinner"],
    "Auni": ["Common Blue Butterfly", "Garden Mantis", "Scintillating Centipede", "Celebration Cake"],
    "Badruu": ["Potato", "WeedBlock Fertilizer", "Ramen", "Meaty Stir Fry"],
    "Caleri": ["Paper Lantern Bug", "Pickled Carrots", "Oysters Akwinduu", "Dari Cloves"],
    "Chayne": ["Potato Seed", "Wheat Seed", "Apple", "Cream of Mushroom Soup"],
    "Delaila": ["Clay", "Wheat Seed", "Shepp's Pie", "Giant Goldfish"],
    "Einar": ["Gillyfin", "Fairy Carp", "Flow-Infused Plank", "Blue Spotted Ray"],
    "Elouisa": ["Common Bark Cicada", "Cytthroat Trout", "Willow Lamprey", "Bluebristle Muujin Mane"],
    "Eshe": ["Fur", "Fish Stew", "Apple Jam", "Jewelwing Dragonfly"],
    "Hassian": ["Leather", "Cotton", "Proudhorned Sernuk Antlers", "Giant Kilima Stingray"],
    "Hekla": ["Grilled Mushroom", "Smallmouth Bass", "Black Sea Bass", "Enchanted Pupfish"],
    "Hodari": ["Paper Lantern Bug", "Flow-Infused Wood", "Hot Hounds", "Bahari Glowbug"],
    "Jel": ["Eyeless Minnow", "Duskray", "Pearl", "Midnight Paddlefish"],
    "Jina": ["Congee", "Glass Pane", "Brighteye Butterfly", "Dari Cloves"],
    "Kenli": ["Wagon Wheel", "Ramen", "Fried Catfish Dinner", "Palian Onion Soup"],
    "Kenyatta": ["Sundrop Lily", "Elder Sernuk Antlers", "Chili Oil Dumplings", "Bluebristle Muujin Mane"],
    "Nai'O": ["Muujin Meat", "Channel Catfish", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Flint", "Copper Bar", "Cream of Tomato Soup", "Silver Bar"],
    "Reth": ["Spice Sprouts", "Largemouth Bass", "Cream of Tomato Soup", "Palian Onion Soup"],
    "Sifuu": ["Sernuk Meat", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Dispel Arrow"],
    "Subira": ["Grilled Mushroom", "Heat Root", "Red-bellied Piranha", "Spicy Rice Cakes"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Hairy Millipede", "Ancient Amber Beetle"],
    "Tau": ["Common Field Cricket", "Duskwing Butterfly", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers"],
    "Tish": ["Clay", "Samara", "Apple Pie", "Green Pearl"],
    "Zeki": ["Silver Salmon", "Silk", "Steamed Fish", "Green Pearl"]





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