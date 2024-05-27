const string = "The customer is very important, the customer will be followed by the customer. For children and teenagers. Smartphones But vulputate, he was like a pulvinar aquet, massa nibh tincidunt now, as a aquet sem sem before that eros. Until the end of the season, players need an easy gate. Now life is pure. The mass of children is ugly, ugly and ugly, but it is not done without a bow. Children have a soft place to invest in the backyard, but the life of Lacinia has no tincidunt. But he did not expect a sad chocolate story. Maecenas leo mauris, facilisis and justo in, maximus pellentesque leo. I chatted with the mass of the salad. But even the valley's owner. Praesent sit amet nibh faucibus, pharetra eros sit amet, vallis nisi.There is no significant ecological mass effect. The boat floats from the bow to the fear of the valley. Aenean is at the gate of the players, but the needs of the elite. It is always great to be able to put it in the valley. Curabitur is not a network in Lacinia. It's just that the kids want to be treated, not the soft, soft valley of the dui. No football pain mass. Unfortunately not from me. Tomorrow does not want the bow of life."
// Extra API for data: https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text

export function generateParagraphUsingLoremIpsum() {
    const words = string.split(" ");
    const paragraph = [];
    for (let i = 0; i < 150; i++) {
        paragraph.push(words[Math.floor(Math.random() * words.length)]);
    }
    return paragraph.join(" ").toLowerCase();
}

export async function generateParagraph() {
    try {
        const response = await fetch("http://metaphorpsum.com/paragraphs/10");

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.text();
        const paragraph = data.split("\n").join(" ");

        return paragraph;
    } catch (e) {
        console.log(e);
        const paragraph = generateParagraphUsingLoremIpsum();
        return paragraph;
    }
}