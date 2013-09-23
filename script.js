function Kitten(ratio, imageurl) {
    this.ratio = ratio;
    this.imageurl = imageurl
}
var getKitten = {
    init: function (myKitten) {
        this.myKitten = myKitten
    },
    horizontal: function () {
        return this.myKitten.filter(function (myKitten) {
            return myKitten.ratio === "horizontal"
        })
    },
    vertical: function () {
        return this.myKitten.filter(function (myKitten) {
            return myKitten.ratio === "vertical"
        })
    },
    square: function () {
        return this.myKitten.filter(function (myKitten) {
            return myKitten.ratio === "square"
        })
    }
};

function Randomize(images) {
    return Math.floor(Math.random() * images.length)
}
var myKitten = [
	new Kitten("horizontal", "http://placekitten.com/800/300"),
	new Kitten("horizontal", "http://placekitten.com/700/300"),
	new Kitten("horizontal", "http://placekitten.com/600/300"),
	new Kitten("vertical", "http://placekitten.com/400/800"),
	new Kitten("vertical", "http://placekitten.com/400/900"),
	new Kitten("vertical", "http://placekitten.com/400/700"),
	new Kitten("vertical", "http://placekitten.com/400/600"),
	new Kitten("vertical", "http://placekitten.com/400/500"),
	new Kitten("vertical", "http://placekitten.com/400/950"),
	new Kitten("vertical", "http://placekitten.com/400/920"),
	new Kitten("square", "http://placekitten.com/100/100"),
	new Kitten("square", "http://placekitten.com/200/200"),
	new Kitten("square", "http://placekitten.com/300/300"),
	new Kitten("square", "http://placekitten.com/400/400"),
	new Kitten("square", "http://placekitten.com/500/500"),
	new Kitten("square", "http://placekitten.com/600/600")];

function imageRatio(image) {
    var proportion = image.height / image.width;
    if (proportion > 1) return "vertical";
    else if (proportion === 1) return "square";
    else if (proportion < 1) return "horizontal"
}

function replaceKitten(document) {
    var images = document.querySelectorAll(
    'img[src*="profile"]'),
        length = images.length;
    console.log("Images:", length);
    for (var i = 0; i < length; i++) {
        var ratio = imageRatio(images[i]);
        if (ratio === "horizontal") {
            var number = Randomize(getKitten.horizontal());
            var img = getKitten.horizontal()[number];
            images[i].src = img.imageurl
        } else if (ratio === "square") {
            var number = Randomize(getKitten.square());
            var img = getKitten.square()[number];
            images[i].src = img.imageurl
        } else if (ratio === "vertical") {
            var number = Randomize(getKitten.vertical());
            var img = getKitten.vertical()[number];
            images[i].src = img.imageurl
        }
    }
}

(function(document){
    getKitten.init(myKitten);
    replaceKitten(document);
    setInterval(function(){replaceKitten(document);}, 1000);
})(document);