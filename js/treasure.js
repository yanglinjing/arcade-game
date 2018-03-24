//收藏品：可以向游戏中添加宝藏，使玩家能够收集这些宝藏
var locations = [];
treasureLoc();
shuffle(locations);

var Treasure = function(pic, i){
  this.sprite = pic;//图片位置
  this.x = locations[i][0];
  this.y = locations[i][1];
}

function treasureLoc(){ //制作一个包含15个xy坐标数组的数组
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

Treasure.prototype.update = function(dt){};

Treasure.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var myTreasureNum = 0;
Treasure.prototype.getTreasure = function(){
    if (this.x === player.x && this.y === player.y){
        myTreasureNum +=1;
        this.y = -72;
        switch (myTreasureNum) {
            case 1:
              this.x = 0;
              break;
            case 2:
              this.x = 70;
              break;
            case 3:
              this.x = 140;
              break;
            case 4:
              this.x = 210;
              break;
            case 5:
              this.x = 280;
              break;
            case 6:
              this.x = 350;
              break;
            case 7:
              this.x = 420;
              break;
        }
        score +=20;
        //console.log('eat' + myTreasureNum + 'score' +score);
    }
}

var allTreasure = [
  new Treasure('images/heart.png', 0),
  new Treasure('images/key.png', 1),
  new Treasure('images/rock.png', 2),
  new Treasure('images/star.png', 3),
  new Treasure('images/gem_blue.png', 4),
  new Treasure('images/gem_green.png', 5),
  new Treasure('images/gem_orange.png', 6)
];
