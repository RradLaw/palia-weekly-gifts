let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Silver Salmon", "Juniper Seed", "Fish Stew", "Chapaa Masala"],
    "Auni": ["Unopened Oyster", "Garden Leafhopper", "Blueberry", "Blueberry Pie"],
    "Badruu": ["Carrot", "Corn Seed", "Blueberry Bush Seed", "Meaty Stir Fry"],
    "Caleri": ["Wild Ginger", "Pickled Carrots", "Bahari Glowbug", "Hypnotic Moray"],
    "Chayne": ["Carrot Seed", "Apple Jam", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
    "Delaila": ["Rainbow Trout", "Wheat Seed", "Blueberry Bush Seed", "Giant Goldfish"],
    "Einar": ["Bahari Crab", "Garden Snail", "Glow Worm", "Fisherman's Brew"],
    "Elouisa": ["Ship Fragments", "Paddlefish", "Brighteye Butterfly", "Cloudfish"],
    "Eshe": ["Leather", "Bluefin Tuna", "Apple Jam", "Gold Ore"],
    "Hassian": ["Grilled Meat", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Slowdown Arrow"],
    "Hekla": ["Sundrop Lily", "Fried Catfish Dinner", "Beluga", "Green Pearl"],
    "Hodari": ["Leather", "Elder Sernuk Antlers", "Loaded Potato Soup", "Bahari Glowbug"],
    "Jel": ["Waterlogged Boot", "Striped Chapaa Tail", "Azure Chapaa Tail", "Green Pearl"],
    "Jina": ["Congee", "Duskwing Butterfly", "Bacon-Stuffed Mushrooms", "Cream of Mushroom Soup"],
    "Kenli": ["Grilled Fish", "Striped Chapaa Tail", "Pan Fried Dumplings", "Muujin Bahari"],
    "Kenyatta": ["Leather", "Oily Anchovy", "Spicy Rice Cakes", "Meaty Stir Fry"],
    "Nai'O": ["Muujin Meat", "Fish Stew", "Blueberry Bush Seed", "Steak Dinner"],
    "Najuma": ["Knapweed", "Copper Bar", "Iron Bar", "Blueberry Pie"],
    "Reth": ["Onion", "Hearty Vegetable Soup", "Loaded Potato Soup", "Dari Cloves"],
    "Sifuu": ["Copper Ore", "Iron Ore", "Cream of Tomato Soup", "Slowdown Arrow"],
    "Subira": ["Flow-Infused Wood", "Loaded Potato Soup", "Ancient Amber Beetle", "Spitfire Cicada"],
    "Tamala": ["Wild Ginger", "Garden Millipede", "Hairy Millipede", "Fairy Mantis"],
    "Tau": ["Trout Dinner", "Oily Anchovy", "Scarlet Koi", "Rainbow-Tipped Butterfly"],
    "Tish": ["Coral", "Samara", "Apple Pie", "Green Pearl"],
    "Zeki": ["Grilled Oyster", "Silk", "Platinum Chad", "Dari Cloves"]



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