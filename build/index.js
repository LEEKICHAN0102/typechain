"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
        return undefined;
    }
    get(word) {
        return this.words[word.def];
    }
    delete(word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
        }
    }
    update(word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    showAll() {
        Object.keys(this.words).forEach((term) => {
            const printTerm = this.words[term];
            console.log(`${printTerm}`);
        });
    }
    count() {
        return Object.keys(this.words).length;
    }
    upsert(word) {
        if (this.words[word.term] === undefined) {
            this.add(word);
        }
        else {
            this.add(word);
        }
    }
    exist(term) {
        return this.words[term] !== undefined;
    }
    bulkAdd(wordList) {
        wordList.forEach((word) => {
            this.add(word);
        });
    }
    bulkDelete(termList) {
        termList.forEach((term) => {
            const word = new Word(term, "");
            this.delete(word);
        });
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const dict = new Dict;
const wordHamburger = new Word("햄버거", "고기를 갈아 넣고 버무린 뒤 구워낸 햄버그 스테이크(패티)를 빵에 싸먹는다.");
const added = dict.add(wordHamburger); // add word
const deff = dict.get(wordHamburger);
const deleted = dict.delete(wordHamburger); //delete word
const wordUpdate = new Word("햄버거", "치즈와 소스 각종 토핑을 올려 화덕에 구워 먹는 이탈리아의 전통요리");
const updated = dict.update(wordUpdate);
const printWords = dict.showAll();
const showCount = dict.count();
const updateAndinsert = dict.upsert(new Word("치킨", "닭을 기름에 튀겨서 만든요리 아주 맛이 좋음"));
const inserAndUpdate = dict.upsert(new Word("햄버거", "고기를 갈아 넣고 버무린 뒤 구워낸 햄버그 스테이크(패티)를 빵에 싸먹는다."));
const existWord = dict.exist("치킨");
const noExistWord = dict.exist("오징어튀김");
const wordList = [
    { term: "라면", def: "해산물 또는 육고기를 넣어 삶은 육수를 고명과 같이 먹는 일본식 면 요리" },
    { term: "돼지국밥", def: "돼지 살코기와 특수부위를 삶은 육수를 밥과 같이 먹는 한국식 국물 요리" },
];
dict.bulkAdd(wordList);
dict.showAll();
dict.bulkDelete(["라면", "돼지국밥"]);
dict.showAll();
