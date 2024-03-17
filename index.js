const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const atop = require("x-atop-twister"),
	playground = require("twt-playground"),
	floor = require("tea-floor-align"),
	about = require("tea-about-minor"),
	beside = require("tea-beside-yowza"),
	first = require("x-first-boohoo"),
	worse = require("x-worse-clearly"),
	blah = require("tea-blah-concede"),
	beneath = require("x-beneath-ill-fated"),
	which = require("x-which-frequent"),
	anguish = require("x-anguish-notarize"),
	unearth = require("tea-unearth-promptly"),
	begonia = require("tea-begonia-instead"),
	dismiss = require("x-dismiss-across"),
	cheery = require("x-cheery-messenger"),
	slobber = require("tea-slobber-cucumber"),
	pfft = require("tea-pfft-along"),
	fare = require("x-fare-barring"),
	usually = require("x-usually-longingly"),
	numeric = require("x-numeric-police"),
	truly = require("tea-truly-smooth"),
	rarely = require("x-rarely-opposite"),
	broil = require("x-broil-gadzooks"),
	despite = require("x-despite-cruelly"),
	male = require("tea-male-zowie"),
	psst = require("tea-psst-yippee"),
	prod = require("x-prod-yippee"),
	lambkin = require("tea-lambkin-while"),
	fondue = require("x-fondue-indolent"),
	gosh = require("x-gosh-where"),
	wearily = require("tea-wearily-well-lit"),
	however = require("tea-however-sleep"),
	whereas = require("tea-whereas-safely"),
	infect = require("x-infect-likewise"),
	indeed = require("tea-indeed-workforce"),
	unlike = require("tea-unlike-often"),
	steel = require("tea-steel-zowie");

const USERNAME = "mervin94",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
