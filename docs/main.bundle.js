webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api/books/books.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Books; });
var Books = [
    { id: 1, rate: { sum: 6, voters: ['Michał', 'Monika'] }, borrowedBy: 'Michał', name: 'The Hunger Games', author: 'Suzanne Collins', cover: 'https://images.gr-assets.com/books/1447303603l/2767052.jpg', description: "The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The 'tributes' are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory." },
    { id: 2, rate: { sum: 4, voters: ['Monika'] }, borrowedBy: 'Monika', name: 'Harry Potter and the Order of the Phoenix', author: ' J.K. Rowling', cover: 'https://images.gr-assets.com/books/1507396732l/2.jpg', description: "Harry Potter and the Order of the Phoenix is the fifth novel in the Harry Potter series, written by J. K. Rowling. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. Five million copies were sold in the first 24 hours of publication. It is the longest book of the series. Harry Potter and the Order of the Phoenix has won several awards, including being named an American Library Association Best Book for Young Adults in 2003. The book has also been made into a film, which was released in 2007, and into a video game by Electronic Arts." },
    { id: 3, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg', description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic." },
    { id: 4, rate: { sum: 0, voters: [] }, borrowedBy: 'Michał', name: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://images.gr-assets.com/books/1320399351l/1885.jpg', description: "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.” So begins Pride and Prejudice, Jane Austen’s witty comedy of manners—one of the most popular novels of all time—that features splendidly civilized sparring between the proud Mr. Darcy and the prejudiced Elizabeth Bennet as they play out their spirited courtship in a series of eighteenth-century drawing-room intrigues. Renowned literary critic and historian George Saintsbury in 1894 declared it the “most perfect, the most characteristic, the most eminently quintessential of its author’s works,” and Eudora Welty in the twentieth century described it as “irresistible and as nearly flawless as any fiction could be. --back cover" },
    { id: 5, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Twilight', author: 'Stephenie Meyer', cover: 'https://images.gr-assets.com/books/1361039443l/41865.jpg', description: "In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite." },
    { id: 6, rate: { sum: 0, voters: [] }, borrowedBy: 'Michał', name: 'The Book Thief', author: 'Markus Zusak', cover: 'https://images.gr-assets.com/books/1390053681l/19063.jpg', description: "Set during World War II in Germany, Markus Zusak’s groundbreaking new novel is the story of Liesel Meminger, a foster girl living outside of Munich. Liesel scratches out a meager existence for herself by stealing when she encounters something she can’t resist – books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement before he is marched to Dachau. This is an unforgettable story about the ability of books to feed the soul." },
    { id: 7, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Chronicles of Narnia', author: 'C.S. Lewis', cover: 'https://images.gr-assets.com/books/1449868701l/11127.jpg', description: "Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia." },
    { id: 8, rate: { sum: 0, voters: [] }, borrowedBy: 'Monika', name: 'Animal Farm', author: 'George Orwell', cover: 'https://images.gr-assets.com/books/1424037542l/7613.jpg', description: "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors." },
    { id: 9, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Gone with the Wind', author: 'Margaret Mitchell', cover: 'https://images.gr-assets.com/books/1328025229l/18405.jpg', description: "Gone with the Wind is a novel written by Margaret Mitchell, first published in 1936. The story is set in Clayton County, Georgia, and Atlanta during the American Civil War and Reconstruction era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea. A historical novel, the story is a Bildungsroman or coming-of-age story, with the title taken from a poem written by Ernest Dowson." },
    { id: 10, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Hobbit and The Lord of the Rings', author: 'J.R.R. Tolkien', cover: 'https://images.gr-assets.com/books/1346072396l/30.jpg', description: "This four volume, deluxe paperback boxed set contains J.R.R. Tolkien's epic masterworks The Hobbit and the three volumes of The Lord Of The Rings (The Fellowship Of The Ring, The Two Towers, and The Return Of The King) in their definitive text settings complete with maps and cover illustrations from the motion pictures. In The Hobbit, Bilbo Baggins is whisked away from his comfortable, unambitious life in Hobbiton by the wizard Gandalf and a company of dwarves. He finds himself caught up in a plot to raid the treasure hoard of Smaug the Magnificent, The Lord Of The Rings tells of the great and dangerous quest undertaken by Frodo Baggins and the Fellowship of the Ring: Gandalf the wizard; the hobbits Merry, Pippin, and Sam; Gimli the dwarf; Legolas the elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. J.R.R. Tolkien's three volume masterpiece is at once a classic myth and a modern fairy tale - a story of high and heroic adventure set in the unforgettable landscape of Middle-Earth." },
    { id: 11, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Fault in Our Stars', author: 'John Green', cover: 'https://images.gr-assets.com/books/1360206420l/11870085.jpg', description: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten." },
    { id: 12, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', cover: 'https://images.gr-assets.com/books/1513003890l/11.jpg', description: "Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years" },
    { id: 13, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Giving Tree', author: 'Shel Silverstein', cover: 'https://images.gr-assets.com/books/1174210942l/370493.jpg', description: "Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk...and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave and gave." },
    { id: 14, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Wuthering Heights', author: 'Emily Brontë', cover: 'https://images.gr-assets.com/books/1388212715l/6185.jpg', description: "Wuthering Heights is a wild, passionate story of the intense and almost demonic love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine's father. After Mr Earnshaw's death, Heathcliff is bullied and humiliated by Catherine's brother Hindley and wrongly believing that his love for Catherine is not reciprocated, leaves Wuthering Heights, only to return years later as a wealthy and polished man. He proceeds to exact a terrible revenge for his former miseries. The action of the story is chaotic and unremittingly violent, but the accomplished handling of a complex structure, the evocative descriptions of the lonely moorland setting and the poetic grandeur of vision combine to make this unique novel a masterpiece of English literature." },
    { id: 15, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Da Vinci Code', author: 'Dan Brown', cover: 'https://images.gr-assets.com/books/1303252999l/968.jpg', description: "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. While working to solve the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of Da Vinci -- clues visible for all to see -- yet ingeniously disguised by the painter." },
    { id: 16, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Memoirs of a Geisha', author: 'Arthur Golden', cover: 'https://images.gr-assets.com/books/1388367666l/930.jpg', description: "In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable." },
    { id: 17, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', cover: 'https://images.gr-assets.com/books/1327872220l/24213.jpg', description: "The Ugly Duchess, the Mad Hatter, the weeping Mock Turtle, the diabolical Queen of Hearts, the Cheshire Cat--each more eccentric than the last--could only have come from that master of sublime nonsense, Lewis Carroll." },
    { id: 18, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', cover: 'https://images.gr-assets.com/books/1424596966l/5297.jpg', description: "Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.” Just a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment. Of Dorian Gray’s relationship to autobiography, Wilde noted in a letter, “Basil Hallward is what I think I am: Lord Henry what the world thinks me: Dorian what I would like to be—in other ages, perhaps.”" },
    { id: 19, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Les Misérables', author: 'Victor Hugo', cover: 'https://images.gr-assets.com/books/1411852091l/24280.jpg', description: "Introducing one of the most famous characters in literature, Jean Valjean—the noble peasant imprisoned for stealing a loaf of bread—Les Misérables ranks among the greatest novels of all time. In it, Victor Hugo takes readers deep into the Parisian underworld, immerses them in a battle between good and evil, and carries them to the barricades during the uprising of 1832 with a breathtaking realism that is unsurpassed in modern prose. Within his dramatic story are themes that capture the intellect and the emotions: crime and punishment, the relentless persecution of Valjean by Inspector Javert, the desperation of the prostitute Fantine, the amorality of the rogue Thénardier, and the universal desire to escape the prisons of our own minds. Les Misérables gave Victor Hugo a canvas upon which he portrayed his criticism of the French political and judicial systems, but the portrait that resulted is larger than life, epic in scope—an extravagant spectacle that dazzles the senses even as it touches the heart" },
    { id: 20, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Divergent ', author: 'Veronica Roth', cover: 'https://images.gr-assets.com/books/1328559506l/13335037.jpg', description: "In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can't have both. So she makes a choice that surprises everyone, including herself." },
    { id: 21, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Romeo and Juliet', author: 'William Shakespeare', cover: 'https://images.gr-assets.com/books/1327872146l/18135.jpg', description: "In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love. The story is rather extraordinary in that the normal problems faced by young lovers are here so very large. It is not simply that the families of Romeo and Juliet disapprove of the lover's affection for each other; rather, the Montagues and the Capulets are on opposite sides in a blood feud and are trying to kill each other on the streets of Verona. Every time a member of one of the two families dies in the fight, his relatives demand the blood of his killer. Because of the feud, if Romeo is discovered with Juliet by her family, he will be killed. Once Romeo is banished, the only way that Juliet can avoid being married to someone else is to take a potion that apparently kills her, so that she is burried with the bodies of her slain relatives. In this violent, death-filled world, the movement of the story from love at first sight to the union of the lovers in death seems almost inevitable." },
    { id: 22, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Jane Eyre', author: 'Charlotte Brontë', cover: 'https://images.gr-assets.com/books/1327867269l/10210.jpg', description: "Fiery love, shocking twists of fate, and tragic mysteries put a lonely governess in jeopardy in JANE EYRE. Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard. But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?" },
    { id: 23, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Lord of the Flies', author: 'William Golding', cover: 'https://images.gr-assets.com/books/1327869409l/7624.jpg', description: "The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves." },
    { id: 24, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Alchemist', author: 'Paulo Coelho', cover: 'https://images.gr-assets.com/books/1483412266l/865.jpg', description: "The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired." },
    { id: 25, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', cover: 'https://images.gr-assets.com/books/1382846449l/7144.jpg', description: "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden prostitute, can offer the chance of redemption." },
    { id: 26, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'Ender\'s Game', author: 'Orson Scott Card', cover: 'https://images.gr-assets.com/books/1408303130l/375802.jpg', description: "Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card. Set in Earth's future, the novel presents an imperiled mankind after two conflicts with the \"buggers\", an insectoid alien species. In preparation for an anticipated third invasion, children, including the novel's protagonist, Ender Wiggin, are trained from a very young age through increasingly difficult games including some in zero gravity, where Ender's tactical genius is revealed." },
    { id: 27, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'City of Bones', author: 'Cassandra Clare', cover: 'https://images.gr-assets.com/books/1432730315l/256683.jpg', description: "When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder― much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing―not even a smear of blood―to show that a boy has died. Or was he a boy?" },
    { id: 28, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Perks of Being a Wallflower', author: 'Stephen Chbosky', cover: 'https://images.gr-assets.com/books/1167352178l/22628.jpg', description: "The critically acclaimed debut novel from Stephen Chbosky, Perks follows observant “wallflower” Charlie as he charts a course through the strange world between adolescence and adulthood. First dates, family drama, and new friends. Sex, drugs, and The Rocky Horror Picture Show. Devastating loss, young love, and life on the fringes. Caught between trying to live his life and trying to run from it, Charlie must learn to navigate those wild and poignant roller-coaster days known as growing up." },
    { id: 29, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Help', author: 'Kathryn Stockett', cover: 'https://images.gr-assets.com/books/1346100365l/4667024.jpg', description: "In pitch-perfect voices, Kathryn Stockett creates three extraordinary women whose determination to start a movement of their own forever changes a town, and the way women — mothers, daughters, caregivers, friends — view one another. A deeply moving novel filled with poignancy, humor, and hope, The Help is a timeless and universal story about the lines we abide by, and the ones we don't." },
    { id: 30, rate: { sum: 0, voters: [] }, borrowedBy: '', name: 'The Time Traveler\'s Wife', author: 'Audrey Niffenegger', cover: 'https://images.gr-assets.com/books/1380660571l/18619684.jpg', description: "A funny, often poignant tale of boy meets girl with a twist: what if one of them couldn't stop slipping in and out of time? Highly original and imaginative, this debut novel raises questions about life, love, and the effects of time on relationships." }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library_component__ = __webpack_require__("./src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';







var routes = [
    { path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__library_library_component__["a" /* LibraryComponent */] },
    { path: 'library/:id', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__user_user_component__["a" /* UserComponent */] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                // CommonModule
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            // declarations: []
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        this.data = data;
        this.title = 'The Library';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data.loadData();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__library_library_component__ = __webpack_require__("./src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_signup_signup_component__ = __webpack_require__("./src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__library_library_component__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_book_component__["a" /* BookComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__data_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n  background-color: rgba(0,0,0,0.7);\r\n  max-width: 400px;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 0 30px 2px black;\r\n          box-shadow: 0 0 30px 2px black;\r\n}\r\n\r\nlegend {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  text-shadow: 0 0 20px white, 0 0 10px white;\r\n}\r\n\r\ndiv:not(:last-child) {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  font-size: 1.1em;\r\n  color: white;\r\n  width: 90%;\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  text-transform: capitalize;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n\r\n.material-icons {\r\n  font-size: 2em;\r\n  color: white;\r\n  padding-left: 18px;\r\n  -webkit-transform: translateY(12px);\r\n          transform: translateY(12px);\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  color: black;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  font-size: 0.8em;\r\n  color: white;\r\n  max-width: 80%;\r\n  padding-left: 25px;\r\n  margin: 2px auto 0;\r\n}\r\n\r\n.invalid label {\r\n  color: red;\r\n}\r\n\r\n.invalid input {\r\n  border: 2px solid red;\r\n}\r\n\r\n.invalid input {\r\n  -webkit-animation: shake .5s;\r\n          animation: shake .5s;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media only screen and (min-height: 768px) {\r\n  fieldset {\r\n    margin: 10vh auto 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" #form=\"ngForm\" *ngIf=\"data.logged.name === ''\">\n  <fieldset>\n    <legend>Please sign in</legend>\n    <div [class.invalid]=\"name.errors && name.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">account_box</i>\n        <input class=\"col s8\" type=\"text\" name=\"name\" #name=\"ngModel\" placeholder=\"name\" required ngModel>\n      </div>\n        <p *ngIf=\"name.invalid && (name.dirty || name.touched)\">What is your name?</p>\n    </div>\n    <div [class.invalid]=\"password.errors && password.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">lock_outline</i>\n        <input class=\"col s8\" type=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" required ngModel>\n      </div>\n        <p *ngIf=\"password.errors && (password.dirty || password.touched)\">Password is required</p>\n    </div>\n    <div class=\"row\">\n      <i class=\"material-icons col s4\">assignment_turned_in</i>\n      <button class=\"waves-effect waves-light blue lighten-1 btn-large\" type=\"submit\" (click)=\"onSubmit(name.value, password.value)\" [disabled]=\"form.invalid\">login</button>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(_router, _route, data) {
        this._router = _router;
        this._route = _route;
        this.data = data;
    }
    SigninComponent.prototype.onSubmit = function (name, password) {
        var _this = this;
        this.data.users.forEach(function (user) {
            if (user.name === name && user.password === password) {
                _this.data.logged.name = name;
                _this.data.logged.password = password;
                _this.data.saveData();
            }
        });
        if (this.data.logged.name !== '') {
            this._router.navigate(['/library']);
        }
        else {
            alert("Wrong credentials, please try again.");
        }
        return false;
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n  background-color: rgba(0,0,0,0.7);\r\n  max-width: 400px;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 0 30px 2px black;\r\n          box-shadow: 0 0 30px 2px black;\r\n}\r\n\r\nlegend {\r\n  font-size: 2em;\r\n  text-align: center;\r\n  text-shadow: 0 0 20px white, 0 0 10px white;\r\n}\r\n\r\ndiv:not(:last-child) {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  font-size: 1.1em;\r\n  color: white;\r\n  width: 90%;\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  text-transform: capitalize;\r\n  display: block;\r\n  margin-bottom: 4px;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n\r\n.material-icons {\r\n  font-size: 2em;\r\n  color: white;\r\n  padding-left: 18px;\r\n  -webkit-transform: translateY(12px);\r\n          transform: translateY(12px);\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  color: black;\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  font-size: 0.8em;\r\n  color: white;\r\n  max-width: 80%;\r\n  padding-left: 25px;\r\n  margin: 2px auto 0;\r\n}\r\n\r\n.invalid label {\r\n  color: red;\r\n}\r\n\r\n.invalid input {\r\n  border: 2px solid red;\r\n}\r\n\r\n.invalid input {\r\n  -webkit-animation: shake .5s;\r\n          animation: shake .5s;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\r\n  10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\r\n  20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\r\n  30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\r\n  40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\r\n  50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\r\n  60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\r\n  70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\r\n  80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\r\n  90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\r\n  100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\r\n}\r\n\r\n@media only screen and (min-height: 768px) {\r\n  fieldset {\r\n    margin: 10vh auto 0;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" #form=\"ngForm\" *ngIf=\"data.logged.name === ''\">\n  <fieldset>\n    <legend>Please sign up</legend>\n    <div [class.invalid]=\"name.errors && name.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">account_box</i>\n        <input class=\"col s8\" type=\"text\" name=\"name\" #name=\"ngModel\" placeholder=\"name\" required ngModel>\n      </div>\n        <p *ngIf=\"name.invalid && (name.dirty || name.touched)\">What is your name?</p>\n    </div>\n    <div [class.invalid]=\"password.errors && password.touched\">\n      <div class=\"row\">\n        <i class=\"material-icons col s2\">lock_outline</i>\n        <input class=\"col s8\" type=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"password\" required ngModel>\n      </div>\n        <p *ngIf=\"password.errors && (password.dirty || password.touched)\">Please provide password in order to Sign Up</p>\n    </div>\n    <div class=\"row\">\n      <i class=\"material-icons col s4\">assignment_turned_in</i>\n      <button class=\"waves-effect waves-light blue lighten-1 btn-large\" type=\"submit\" (click)=\"onSubmit(name.value, password.value)\" [disabled]=\"form.invalid\">sign up</button>\n    </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_router, _route, data) {
        this._router = _router;
        this._route = _route;
        this.data = data;
    }
    SignupComponent.prototype.onSubmit = function (name, password) {
        var check = false;
        this.data.users.forEach(function (user) {
            if (user.name === name) {
                check = true;
            }
        });
        if (!check) {
            this.data.logged.name = name;
            this.data.logged.password = password;
            this.data.users.push({ name: name, password: password });
            this.data.saveData();
            this._router.navigate(['/library']);
        }
        else {
            alert("Name already in use");
        }
        return false;
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".book, .comment {\r\n  background-color: rgba(255,255,255,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 5px;\r\n  margin-top: 1%;\r\n  padding: 2% 10%;\r\n}\r\n\r\nh1, p {\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.author {\r\n  font-style: italic;\r\n}\r\n\r\n.description {\r\n  text-align: justify;\r\n}\r\n\r\n.responsive-img {\r\n  max-height: 450px;\r\n  display: block;\r\n  margin: auto;\r\n  -webkit-box-shadow: 8px 8px 12px black;\r\n          box-shadow: 8px 8px 12px black;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nform {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ni {\r\n  font-size: 1.2em;\r\n  margin-top: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.starHover {      \r\n  font-size: 1.4em;\r\n  color: gold;\r\n  margin-top: 3px;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}\r\n\r\n.rate {\r\n  color: gold;\r\n  text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"book\">\n  <div class=\"book\">\n    <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n    <p>\n      <span class=\"title\">{{book.name}}</span><br>\n      <span class=\"author\">{{book.author}}</span>\n    </p>\n    <p class=\"description\">{{book.description}}</p>\n    <button class=\"waves-effect waves-light btn\" *ngIf=\"book.borrowedBy === ''\" (click)=\"borrow()\">Borrow</button>\n    <button class=\"waves-effect waves-light btn disabled\" *ngIf=\"book.borrowedBy === data.logged.name && book.borrowedBy !== ''\">Borrowed by You</button>\n    <button class=\"waves-effect waves-light btn disabled\" *ngIf=\"book.borrowedBy !== '' && book.borrowedBy !== data.logged.name\">Borrowed</button>    \n    <a [routerLink]=\"['/library']\" class=\"blue-text text-darken-2\">Back to The Library</a>\n    <div class=\"right\">\n      <!-- in mouseover and mouseleave \"1\" is there to reuse the function from library component (from DataService)-->\n      <i\n        *ngFor=\"let star of data.numberOfStars(5); let index = index\"\n        (mouseover)=\"data.starsHover(index, 1)\"\n        (mouseleave)=\"data.starsLeave(index, 1)\"\n        [class.rate]=\"index < data.rating(book)\"\n        (click)=\"data.starRate(index, book)\"\n        class=\"material-icons\">star\n      </i>\n    </div>\n  </div>\n  <ul>\n    <ng-container *ngFor=\"let comment of data.comments; let index = index\">\n      <li class=\"comment\" *ngIf=\"match_id(comment)\">\n        {{comment.text}} - <span class=\"author\">{{comment.author}}</span>\n        <button *ngIf=\"data.logged.name === comment.author\" (click)=\"deleteComment(index)\" class=\"waves-effect waves-light btn\">delete</button>\n      </li>\n    </ng-container>\n  </ul>\n  <form *ngIf=\"data.logged.name !== ''\">\n    <input type=\"text\" name=\"comment\" [(ngModel)]=\"comment\">\n    <button class=\"waves-effect waves-light btn\" (click)=\"addComment()\">Add comment</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(_route, data) {
        this._route = _route;
        this.data = data;
        this.id = +this._route.snapshot.paramMap.get('id');
        this.book = this.data.books[this.id - 1];
        this.comment = '';
    }
    BookComponent.prototype.borrow = function () {
        if (this.data.logged.name === '') {
            alert("You need to log in to borrow books!");
        }
        else {
            this.book.borrowedBy = this.data.logged.name;
            this.data.saveData();
        }
    };
    BookComponent.prototype.match_id = function (comment) {
        return comment.bookID == this.id;
    };
    BookComponent.prototype.addComment = function () {
        this.data.comments.push({ bookID: this.id, text: this.comment, author: this.data.logged.name });
        this.comment = '';
        this.data.saveData();
    };
    BookComponent.prototype.deleteComment = function (index) {
        this.data.comments.splice(index, 1);
        this.data.saveData();
    };
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_books_books__ = __webpack_require__("./src/api/books/books.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.books = __WEBPACK_IMPORTED_MODULE_1__api_books_books__["a" /* Books */];
        this.users = [
            { name: 'Michał', password: 'password' },
            { name: 'Monika', password: 'password' },
            { name: 'Max', password: 'password' }
        ];
        this.logged = { name: 'Michał', password: 'password' };
        this.comments = [
            { bookID: 1, text: "This is the first comment", author: "Michał" },
            { bookID: 1, text: "This is the second comment", author: "Monika" },
            { bookID: 1, text: "This is the third comment", author: "Michał" },
            { bookID: 2, text: "This is the fourth comment", author: "Max" },
            { bookID: 3, text: "This is the fifth comment", author: "Monika" }
        ];
    }
    DataService.prototype.saveData = function () {
        var local = { books: this.books, users: this.users, logged: this.logged, comments: this.comments };
        localStorage.setItem('libraryState', JSON.stringify(local));
    };
    DataService.prototype.loadData = function () {
        var local = localStorage.getItem('libraryState');
        if (local) {
            this.books = JSON.parse(local).books;
            this.users = JSON.parse(local).users;
            this.logged = JSON.parse(local).logged;
            this.comments = JSON.parse(local).comments;
        }
    };
    DataService.prototype.rating = function (book) {
        return Math.round(book.rate.sum / book.rate.voters.length);
    };
    DataService.prototype.numberOfStars = function (stars) {
        return Array.from(Array(stars), function (_, x) { return x; });
    };
    DataService.prototype.rate = function (vote) {
        this.books[vote.id].rate.sum += vote.value + 1;
        this.books[vote.id].rate.voters.push(this.logged.name);
        this.saveData();
    };
    DataService.prototype.starsHover = function (index, id) {
        for (var i = 0; i <= index; i++) {
            document.querySelectorAll("i")[(5 * (id - 1)) + index - i].classList.add('starHover');
        }
    };
    DataService.prototype.starsLeave = function (index, id) {
        for (var i = 0; i <= index; i++) {
            document.querySelectorAll("i")[(5 * (id - 1)) + index - i].classList.remove('starHover');
        }
    };
    DataService.prototype.starRate = function (index, book) {
        if (this.logged.name) {
            if (!this.books[book.id - 1].rate.voters.includes(this.logged.name)) {
                var vote = {
                    value: index,
                    id: book.id - 1
                };
                this.rate(vote);
            }
            else {
                alert("You have already rated this book!");
            }
        }
        else {
            alert("You have to log in to do that!");
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".brand-logo {\r\n  margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav>\n    <div class=\"nav-wrapper blue lighten-2\">\n      <a [routerLink]=\"['/library']\" class=\"brand-logo left\">Library</a>\n      <ul class=\"right\">\n        <li *ngIf=\"!this.data.logged.name\">\n          <a [routerLink]=\"['/signup']\">Sign Up</a>\n        </li>\n        <li *ngIf=\"!this.data.logged.name\">\n          <a [routerLink]=\"['/signin']\">Sign In</a>\n        </li>\n        <li *ngIf=\"this.data.logged.name\">\n          <a [routerLink]=\"['/user']\">{{data.logged.name}}</a>\n        </li>\n        <li *ngIf=\"this.data.logged.name\" (click)=\"onLogout()\">\n          <a [routerLink]=\"['/welcome']\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
    }
    HeaderComponent.prototype.onLogout = function () {
        this.data.logged.name = '';
        this.data.logged.password = '';
        this.data.saveData();
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n    font-weight: 700;\r\n    color: white;\r\n    opacity: 0.8; /* Firefox */\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  :-ms-input-placeholder {\r\n    font-weight: 700;\r\n    color: white;\r\n    opacity: 0.8; /* Firefox */\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  ::-ms-input-placeholder {\r\n    font-weight: 700;\r\n    color: white;\r\n    opacity: 0.8; /* Firefox */\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  ::placeholder {\r\n    font-weight: 700;\r\n    color: white;\r\n    opacity: 0.8; /* Firefox */\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  :-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    font-weight: 700;\r\n    color: white;\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  ::-ms-input-placeholder { /* Microsoft Edge */\r\n    font-weight: 700;\r\n    color: white;\r\n    text-shadow: 0 0 5px black;;\r\n  }\r\n  input {\r\n    font-weight: 700;\r\n    color: white;\r\n    text-shadow: 0 0 5px black;\r\n  }\r\n  li {\r\n    background-color: rgba(255,255,255,0.3);\r\n    text-align: justify;\r\n    border: 1px solid rgba(0,0,0,0.3);\r\n    border-radius: 5px;\r\n    height: 350px;\r\n    overflow-y: hidden;\r\n    padding-bottom: 50px;\r\n  }\r\n  p {\r\n    line-height: 1.5em;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin: 8px 0 -3px;\r\n  }\r\n  .status {\r\n    text-transform: uppercase;\r\n    border-radius: 2px;\r\n    padding: 1px 6px;\r\n    -webkit-box-shadow: 2px 2px 10px #000;\r\n            box-shadow: 2px 2px 10px #000;\r\n\r\n  }\r\n  .title {\r\n    font-size: 1.25em;\r\n  }\r\n  .author {\r\n    font-style: italic;\r\n  }\r\n  .responsive-img {\r\n    height: 210px;\r\n    display: block;\r\n    margin: auto;\r\n    -webkit-box-shadow: 2px 2px 10px #000;\r\n            box-shadow: 2px 2px 10px #000;\r\n  }\r\n  i {\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n  }\r\n  .starHover {      \r\n    font-size: 1.4em;\r\n    color: gold;\r\n    margin-top: -3px;\r\n    text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n  }\r\n  .rate {\r\n    color: gold;\r\n    text-shadow: 0 0 25px black, 0 0 10px black, 0 0 4px white, 1px 2px 1px black;\r\n  }"

/***/ }),

/***/ "./src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"library\">\n  <div class=\"row\">\n    <div class=\"input-field col s8 l4 offset-s2 offset-l4\">\n      <form>\n        <input type=\"text\" name=\"search\" placeholder=\"Search (by title or author)\" [(ngModel)]=\"search\">\n      </form>\n    </div>\n  </div>\n  <ul class=\"row\">\n    <ng-container *ngFor=\"let book of books\">\n      <li class=\"col s6 m4 l3\" *ngIf=\"matchName(book) || matchAuthor(book)\">\n        <p><i\n          *ngFor=\"let star of data.numberOfStars(5); let index = index\"\n          (mouseover)=\"data.starsHover(index, book.id)\"\n          (mouseleave)=\"data.starsLeave(index, book.id)\"\n          [class.rate]=\"index < data.rating(book)\"\n          (click)=\"data.starRate(index, book)\"\n          class=\"material-icons\">star\n        </i></p>\n        <a [routerLink]=\"['/library', book.id]\">\n          <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n          <p>\n            <span class=\"status green\" *ngIf=\"book.borrowedBy === ''\">available</span>\n            <span class=\"status blue\" *ngIf=\"book.borrowedBy === this.data.logged.name && book.borrowedBy !== ''\">borrowed by you</span>\n            <span class=\"status red\" *ngIf=\"book.borrowedBy !== '' && book.borrowedBy !== this.data.logged.name\">borrowed</span>\n          </p>\n          <p>\n            <span class=\"title\">{{book.name}}</span><br>\n            <span class=\"author\">{{book.author}}</span>\n          </p>\n        </a>\n      </li>\n    </ng-container>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(data) {
        this.data = data;
        this.books = this.data.books;
        this.search = '';
    }
    LibraryComponent.prototype.matchName = function (book) {
        return book.name.toLowerCase().includes(this.search.toLowerCase());
    };
    LibraryComponent.prototype.matchAuthor = function (book) {
        return book.author.toLowerCase().includes(this.search.toLowerCase());
    };
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library',
            template: __webpack_require__("./src/app/library/library.component.html"),
            styles: [__webpack_require__("./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::placeholder {\r\n  font-weight: 700;\r\n  color: white;\r\n  opacity: 0.8; /* Firefox */\r\n  text-shadow: 0 0 5px black;\r\n}\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;;\r\n}\r\ninput {\r\n  font-weight: 700;\r\n  color: white;\r\n  text-shadow: 0 0 5px black;\r\n}\r\nli {\r\n  background-color: rgba(255,255,255,0.3);\r\n  text-align: justify;\r\n  overflow-y: hidden;\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 5px;\r\n  height: 365px;\r\n  padding-bottom: 50px;\r\n}\r\np {\r\n  color: #2c3e50;\r\n  text-align: center;\r\n  margin: 8px 0 -3px;\r\n}\r\n.status {\r\n  text-transform: uppercase;\r\n  border-radius: 2px;\r\n  padding: 1px 6px;\r\n}\r\n.title {\r\n  font-size: 1.25em;\r\n}\r\n.author {\r\n  font-style: italic;\r\n}\r\n.responsive-img {\r\n  height: 210px;\r\n  display: block;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  -webkit-box-shadow: 2px 2px 10px #000;\r\n          box-shadow: 2px 2px 10px #000;\r\n}\r\nbutton {\r\n  display: block;\r\n  margin: 10px auto 0;\r\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"user\">\n  <ul class=\"row\">\n    <h3 class=\"center\">Here you can see all your borrowed books.</h3>\n    <ng-container *ngFor=\"let book of data.books\">\n      <li class=\"col s6 m4 l3\" *ngIf=\"data.logged.name === book.borrowedBy\">\n        <a [routerLink]=\"['/library', book.id]\">\n          <img [src]=\"book.cover\" [alt]=\"book.name\" class=\"responsive-img\">\n          <button class=\"waves-effect waves-light btn\" (click)=\"returnBook(book)\" *ngIf=\"book.borrowedBy === data.logged.name\">return</button>          \n          <p>\n            <span class=\"title\">{{book.name}}</span><br>\n            <span class=\"author\">{{book.author}}</span>\n          </p>\n        </a>\n      </li>\n    </ng-container>    \n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("./src/app/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(data) {
        this.data = data;
    }
    UserComponent.prototype.returnBook = function (book) {
        book.borrowedBy = '';
        this.data.saveData();
        return false;
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = "#welcome {\r\n  text-align: center;\r\n  margin-top: 20%;\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n  text-shadow: 0 0 10px white, 0 0 25px white, 0 0 50px white;\r\n}\r\n\r\n.blue-text {\r\n  font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"welcome\">\n  <h1>Welcome to The Library</h1>\n  <p>You have found the best place to borrow books from</p>\n  <div class=\"row\">\n    <a [routerLink]=\"['/signup']\" class=\"blue-text text-darken-2 offset-m3 col m2 s3\">Sign Up</a>\n    <a [routerLink]=\"['/signin']\" class=\"blue-text text-darken-2 col m2 s3\">Sign In</a>\n    <a [routerLink]=\"['/library']\" class=\"blue-text text-darken-2 col l3 m3 s6\">...or just look</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map