var acronyms = [
    {"word": "abuse", "letters": ["a", "b", "u", "s", "e"], "start": "a", "length": "5"},
    {"word": "brutality", "letters": ["b", "r", "u", "t", "a", "l", "i", "t", "y"], "start": "b", "length": "9"},
    {"word": "cisgender", "letters": ["c", "i", "s", "g", "e", "n", "d", "e", "r"], "start": "c", "length": "9"},
    {"word": "different", "letters": ["d", "i", "f", "f", "e", "r", "e", "n", "t"], "start": "d", "length": "9"},
    {"word": "equality", "letters": ["e", "q", "u", "a", "l", "i", "t", "y"], "start": "e", "length": "8"},
    {"word": "female", "letters": ["f", "e", "m", "a", "l", "e"], "start": "f", "length": "6"},
    {"word": "gender", "letters": ["g", "e", "n", "d", "e", "r"], "start": "g", "length": "6"},
    {"word": "hate", "letters": ["h", "a", "t", "e"], "start": "h", "length": "4"},
    {"word": "injustice", "letters": ["i", "n", "j", "u", "s", "t", "i", "c", "e"], "start": "i", "length": "9"},
    {"word": "justice", "letters": ["j", "u", "s", "t", "i", "c", "e"], "start": "j", "length": "7"},
    {"word": "killed", "letters": ["k", "i", "l", "l", "e", "d"], "start": "k", "length": "6"},
    {"word": "lives", "letters": ["l", "i", "v", "e", "s"], "start": "l", "length": "5"},
    {"word": "missed", "letters": ["m", "i", "s", "s", "e", "d"], "start": "m", "length": "6"},
    {"word": "no rights", "letters": ["n", "o", null, "r", "i", "g", "t", "s"], "start": "n", "length": "8"},
    {"word": "overworked", "letters": ["o", "v", "e", "r", "w", "o", "r", "k", "e", "d"], "start": "o", "length": "10"},
    {"word": "put down", "letters": ["p", "u", "t", null, "d", "o", "w", "n"], "start": "p", "length": "8"},
    {"word": "queer", "letters": ["q", "u", "e", "e", "r"], "start": "q", "length": "5"},
    {"word": "radical", "letters": ["r", "a", "d", "i", "c", "a", "l"], "start": "r", "length": "7"},
    {"word": "sexuality", "letters": ["s", "e", "x", "u", "a", "l", "i", "t", "y"], "start": "s", "length": "9"},
    {"word": "transgender", "letters": ["t", "r", "a", "n", "s", "g", "e", "n", "d", "e", "r"], "start": "t", "length": "11"},
    {"word": "underpinned", "letters": ["u", "n", "d", "e", "r", "p", "i", "n", "n", "e", "d"], "start": "u", "length": "11"},
    {"word": "valued", "letters": ["v", "a", "l", "u", "e", "d"], "start": "v", "length": "6"},
    {"word": "walled in", "letters": ["w", "a", "l", "l", "e", "d", null, "i", "n"], "start": "w", "length": "9"},
    {"word": "Zander", "letters": ["Z", "a", "n", "d", "e", "r"], "start": "z", "length": "6"}
];

var startWord = 19;

function createText(word, div) {
    console.log("length: " + word.length);
    var e;
    for (var i = 0;; i++) {
        if (i == word.length) break;
        e = document.createElement("p");
        e.appendChild(document.createTextNode(word["letters"][i].toUpperCase()));
        e.className = "word";
        e.onclick = function() { clickHandler(word.letters[i]) };
        div.appendChild(e);
    }
}

function clearText(div) {
    div.innerHTML = "";
}

function clearAllBut(letter, div) {
    for (var i = 0; i < div.children.length; i++) {
        if (!letter == div.children[i].innerHTML) {
            div.children[i].fadeOut(500, function() {
                this.remove();
            });
        }
    }
}

function clickHandler(letter) {
    console.log("letter: " + letter);
    clearAllBut(letter, document.getElementById("acronym"));
}

function init() {
    var div = document.getElementById("acronym");
    createText(acronyms[startWord], div);
}
