let data = {




    "Ashura": ["Rainbow Trout", "Stickleback", "Fish Stew", "Celebration Cake"],
    "Auni": ["Common Field Cricket", "Garden Snail", "Apple", "Apple Pie"],
    "Badruu": ["Wagon Wheel", "QualityUp Fertilizer", "Loaded Potato Soup", "Meaty Stir Fry (Bugged)"],
    "Caleri": ["Spice Sprouts", "Kilima Redfin", "Bahari Glowbug", "Dari Cloves"],
    "Chayne": ["Tomato", "Samara", "Cream of Tomato Soup", "Dari Cloves"],
    "Delaila": ["Rainbow Trout", "Orange Bluegill", "Iron Bar", "Giant Goldfish"],
    "Einar": ["Worm", "Spineshell Crab", "Mottled Gobi", "Cloudfish"],
    "Elouisa": ["Duskray", "Cantankerous Koi", "Indigo Lamprey", "Giant Goldfish"],
    "Eshe": ["Leather", "Bluefin Tuna", "Silver Bar", "Palian Onion Soup"],
    "Hassian": ["Leather", "Sernuk Hide", "Azure Chapaa Tail", "Giant Kilima Stingray"],
    "Hekla": ["Mountain Morel", "Largemouth Bass", "Pearl", "Enchanted Pupfish"],
    "Hodari": ["Leather", "Heartwood", "Proudhorned Sernuk Antlers", "Bahari Glowbug"],
    "Jel": ["Eyeless Minnow", "Sernuk Hide", "Gossamer Veil Moth", "Green Pearl"],
    "Jina": ["Flint", "Duskwing Butterfly", "Bacon-Stuffed Mushrooms", "Celebration Cake"],
    "Kenli": ["Chapaa Meat", "Ramen", "Azure Chapaa Tail", "Iron Bar"],
    "Kenyatta": ["Knapweed", "Elder Sernuk Antlers", "Brighteye Butterfly", "Fairy Mantis"],
    "Nai'O": ["Stone Brick", "Rice Seed", "Corn", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Stripeshell Snail", "Silver Bar"],
    "Reth": ["Onion", "Largemouth Bass", "Cream of Tomato Soup", "Palian Onion Soup"],
    "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Gold Ore"],
    "Tamala": ["Kilima Night Moth", "Garden Millipede", "Azure Stonehopper", "Long Nosed Unicorn Fish"],
    "Tau": ["Chapaa Meat", "Oily Anchovy", "Golden Salmon", "Proudhorned Sernuk Antlers"],
    "Tish": ["Sundrop Lily", "Juniper Seed", "Silk Thread", "Green Pearl"],
    "Zeki": ["Grilled Fish", "Silk", "Golden Glory Bee", "Green Pearl"]
};
console.log("{");
for (const key in data) {
    console.log(generateString(key, data[key]));
}
console.log("}");

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}