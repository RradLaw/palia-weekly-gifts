let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    "Ashura": ["Silver Salmon", "Juniper Seed", "Fried Catfish Dinner", "Trout Dinner"],
  "Auni": ["Common Bark Cicada", "Cerulean Cicada", "Spotted Mantis", "Will-o-wisp Rockhopper"],
  "Badruu": ["Tomato", "HarvestBoost Fertilizer", "Loaded Potato Soup", "Bean Burger"],
  "Caleri": ["Shell", "Pickled Carrots", "Oysters Akwinduu", "Dari Cloves"],
  "Chayne": ["Wild Garlic", "Juniper Seed", "Honey", "Veggie Chili"],
  "Delaila": ["Rosy Bitterling", "WeedBlock Fertilizer", "Honey", "Rockhopper Pumpkin"],
  "Einar": ["Silvery Minnow", "Garden Snail", "Fathead Minnow", "Stormray"],
  "Elouisa": ["Duskray", "Bahari Bee", "Energized Piranha", "Flametongue Ray"],
  "Eshe": ["Grilled Oyster", "Silk", "Veil Piksii", "Steak Dinner"],
  "Hassian": ["Sernuk Antlers", "Cotton", "Iron Bar", "Dispel Arrow"],
  "Hekla": ["Oyster Meat", "Acorn", "Trout Dinner", "Enchanted Pupfish"],
  "Hodari": ["Spotted Chapaa Tail", "Elder Sernuk Antlers", "Iron Bar", "Emerald Ogopuu Scale"],
  "Jel": ["Leather", "Sernuk Hide", "Nightshadow Batterfly", "Muujin Bahari"],
  "Jina": ["Mountain Morel", "Brightshroom", "Shimmerfin", "Blood Beetle"],
  "Kenli": ["Grilled Oyster", "Ramen", "Petit Fives", "Bean Burger"],
  "Kenyatta": ["Sundrop Lily", "Cutthroat Trout", "Chili Oil Dumplings", "Bluebristle Muujin Mane"],
  "Nai'O": ["Muujin Meat", "Rice Seed", "Piksii Berries", "Fruit Smoothie Bowl"],
  "Najuma": ["Wild Garlic", "Garden Snail", "Iron Bar", "Silver Bar"],
  "Reth": ["Wild Garlic", "Creamy Carrot Soup", "Pumpkin Stew", "Fruit Smoothie Bowl"],
  "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Silver Ore", "Gold Ore"],
  "Subira": ["Grilled Mushroom", "Heat Root", "Hearty Vegetable Soup", "Angelfish"],
  "Tamala": ["Spice Sprouts", "Lunar Fairy Moth", "Pearl", "Ancient Amber Beetle"],
  "Tau": ["Sernuk Meat", "Garden Leafhopper", "Azure Chapaa Tail", "Apple"],
  "The Gardener": ["Garden Millipede", "Floatfish Mushroom", "Nightshadow Batterfly", "Princess Ladybug"],
  "Tish": ["Shell", "Acorn", "Whitestone", "Angelfish"],
  "Zeki": ["Unopened Oyster", "Fish Stew", "Sushi", "Gold Bar"]
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