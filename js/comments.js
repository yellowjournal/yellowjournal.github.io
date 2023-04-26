let COMMENTS = [
    {
        name: "Tiny Dean Groves",
        body: "Help! I am trapped in a jar at Purdue"
    },
    {
        name: "KatieC93",
        body: "Hello sexy .. see my pics at https://thecavalierdaily.com/"
    },
    {
        name: "Small Liz Magill",
        body: "Please send small Bodo's bagels to UPenn! I am so small"
    },
    {
        name: "Jim Ryan",
        body: "I don't even feel bad for stealing that punk's popsicle >:)"
    },
    {
        name: "UVA Sheldon",
        body: "Belzinga"
    },
    {
        name: "Lil' Nell",
        body: "Yellow Jornal"
    },
    {
        name: "CavDailyEIC",
        body: "I love YJ... Now *this* is how you write a newspaper!"
    },
    {
        name: "NewHoo23",
        body: "I can't wait to apply to YJ so I can put it on my resume :)"
    },
    {
        name: "ConcernedCitizen99",
        body: "I find this repulsive"
    },
    {
        name: "Lawnie",
        body: "What the fuck is 'beanol'?"
    },
    {
        name: "CoachDonne",
        body: "I've been coaching B-Ball going on 45 years, and I've never seen game like this!"
    },
    {
        name: "Sisyfuss",
        body: "Took a break from work (rock pushing factory lol) to read this... good stuff haha"
    },
    {
        name: "EruditeDragon",
        body: "oh i get it... because the website is yellow"
    },
    {
        name: "SmackinGraphix",
        body: "This website is pretty good if you're into web0 brutalist chic..."
    },
    {
        name: "John D. Matthews",
        body: "I didn't do anything wrong"
    },
    {
        name: "John D. Matthews",
        body: "Literally what"
    },
    {
        name: "GoldbrickinBastard77",
        body: "Ohh, these cats are cooking! Ah, ooh, ahh, *snaps*"
    },
    {
        name: "Drake",
        body: "It's drizzy... I got locked out of some accounts and need just a few hundred to sort out my affairs... I'll reward you tenfold if you help me out!"
    },
    {
        name: "ErtBellis75",
        body: "Just wait until the Board of Visitors learns of this malarkey."
    },
    {
        name: "PierreDelecto",
        body: "C'est moi"
    }
];

let numComments = 0;

function getComments() {
    var selected = [];
    var nestComment = null;

    shuffle(COMMENTS);

    COMMENTS.forEach(comment => {
        comment.replies = [];

        if(Math.random() < 0.5) {
            numComments += 1;
            if(!!nestComment) {
                /* commenters will always be mean to John D. Matthews */
                if(nestComment.name === "John D. Matthews") {
                    comment.body = "I hate you so much man";
                } else if(nestComment.body === "I hate you so much man") {
                    comment.body = "We all hate you John D. Matthews";
                } else {
                    comment.body = `Hi ${nestComment.name}... ` + comment.body;
                }
                nestComment.replies.push(comment);
            } else {
                selected.push(comment);
            }

            if(Math.random() < 0.5) {
                nestComment = comment;
            }
        }
    });

    return selected;
}

/* courtesy of https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function renderComment(comment) {
    return `
    <div class="comment">
        <p class="name">${comment.name}</p>
        <p>${comment.body}</p>
        <div class="replies">
            ${comment.replies.map(renderComment).join("\n")}
        </div>
    </div>
    `;
}

function makeCommentsSection() {
    let comments = getComments();

    return `
    <section class="comments">
        <h1>${numComments} Comments</h1>
        ${comments.map(renderComment).join("\n")}
    </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
    let main = document.getElementsByTagName("main")[0];
    main.insertAdjacentHTML("beforeend", makeCommentsSection());
});
