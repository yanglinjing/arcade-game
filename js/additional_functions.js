//收藏品：可以向游戏中添加宝藏，使玩家能够收集这些宝藏
var locations = [];

var Treasure = function(pic){
  this.sprite = pic;//图片位置
  this.x = pickOneLoc(0);
  this.y = pickOneLoc(1);
}

function pickOneLoc(i){
    treasureLoc();
    shuffle(locations);
    console.log(locations);
    return location[i];
}

function treasureLoc(){
    let xs = [0, 101, 202, 303, 404],
        ys = [73, 156, 239];
    for (const x of xs){
        for (const y of ys){
            let loc = [];
            loc.push(x, y);
            locations.push(loc);
        }
    }
}

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
