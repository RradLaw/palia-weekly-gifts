let data = {

    "Ashura": ["Channel Catfish", "Juniper Seed", "Stalking Catfish", "Sashimi"],
    "Auni": ["Brushtail Dragonfly", "Bahari Bee", "Hairy Millipede", "Apple Pie"],
    "Badruu": ["Tomato Plant Seed", "WeedBlock Fertilizer", "Apple Tree Seed", "Meaty Stir Fry"],
    "Caleri": ["Knapweed", "Kilima Redfin", "Blueberry Jam", "Hypnotic Moray"],
    "Chayne": ["Carrot", "Rice Seed", "Pearl", "Dari Cloves"],
    "Delaila": ["Rosy Bitterling", "Kilima Catfish", "Shepp's Pie", "Giant Goldfish"],
    "Einar": ["Silvery Minnow", "Red-bellied Piranha", "Fathead Minnow", "Cactus Moray"],
    "Elouisa": ["Unopened Oyster", "Proudhorned Stag Beetle", "Raspberry Beetle", "Cloudfish"],
    "Eshe": ["Grilled Oyster", "Samara", "Silver Bar", "Akwinduu Chapaa"],
    "Hassian": ["Grilled Meat", "Striped Chapaa Tail", "Azure Chapaa Tail", "Giant Kilima Stingray"],
    "Hekla": ["Bahari Bass", "Fried Catfish Dinner", "Beluga Sturgeon", "Green Pearl"],
    "Hodari": ["Stone Brick", "Sernuk Noodle Stew", "Iron Bar", "Bahari Glowbug"],
    "Jel": ["Waterlogged Boot", "Duskray", "Gossamer Veil Moth", "Midnight Paddlefish"],
    "Jina": ["Flint", "Cotton", "Mutated Angler", "Void Ray"],
    "Kenli": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Princess Ladybug", "Chapaa Masala"],
    "Kenyatta": ["Sardine", "Creamy Carrot Soup", "Leafstalker Mantis", "Crimson Fangtooth"],
    "Nai'O": ["Stone Brick", "QualityUp Fertilizer", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Honey Loach", "Silver Bar"],
    "Reth": ["Sernuk Meat", "Hearty Vegetable Soup", "Blueberries", "Palian Onion Soup"],
    "Sifuu": ["Sardine", "Pickled Carrots", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Tamala": ["Emerald Carpet Moss", "Brightshroom", "Azure Stonehopper", "Ancient Amber Beetle"],
    "Tau": ["Spotted Chapaa Tail", "Leather", "Prism Trout", "Rainbow-tipped Butterfly"],
    "Tish": ["Sapwood Plank", "Samara", "Silk Thread", "Green Pearl"],
    "Zeki": ["Silvery Minnow", "Silk", "Crab Gumbo", "Dari Cloves"]


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