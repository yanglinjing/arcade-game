/*
Enemy 函数，它通过以下操作初始化 Enemy：
1. 加载图片:通过将 this.sprite 设为 images 文件夹（已经提供）中的相应图片来加载图片
2. 设置 Enemy 初始位置（需要由你执行）
3. 设置 Enemy 速度（需要由你执行）
*/

// 敌人：玩家需要躲避！Enemies: our player must avoid
var Enemy = function(x, y, speed) {

    // The image/sprite for our enemies, this uses 敌人的图片
    this.sprite = 'images/enemy-bug.png';

    // Variables applied to each of our instances go here 运用到实例的变量
    this.x = x; //
    this.y = y; //y始终是不变的
    this.speed = speed;

};

/*
Enemy 函数的 update 方法
1. 更新 Enemy 位置（需要由你执行）
2. 处理碰撞玩家的部分（需要由你执行）
 */

// Update the enemy's position, required method for game更新敌人的位置
// Parameter: dt, a time delta between ticks 参数dt是时间变量（游戏已经开始了几秒）
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for all computers.
    this.x += this.speed * dt; //而y值始终不变

    if (this.x > 800){ //让小虫子循环跑
        this.x = -400 + this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game把敌人显示在屏幕上
Enemy.prototype.render = function() {
    // ctx.drawImage() 方法有三个参数：一张图片、x 坐标和 y 坐标
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//enmenies碰撞player的部分
Enemy.prototype.catch = function() {
    
}


//-----------------------player------------------------
/*
Player 函数，它通过以下操作初始化 Player：
1. 通过将 this.sprite 设为图片文件夹中的相应图片来加载图片（参考 Enemy 函数中的代码）
2. 设置 Player 初始位置
*/

// Now write your own player class 编写一个玩家的类
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 405;
}

/*
This class requires an update(), render() and a handleInput() method.
包含三种方法：update, render, handleInput
 */

//Player 函数的 update 方法（可以类似于 Enemy 的 update 方法）???
Player.prototype.update = function(){

}

//Player 函数的 render 方法（使用 Enemy 的 render 方法的代码）
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*handleInput 方法，应该接收用户输入；allowedKeys（按下的键），并根据该输入移动玩家。尤其是：
1. 向左键应该将玩家移到左边，向右键将玩家移到右边，向上键使玩家向上移动，向下键使玩家向下移动。
2. 注意，玩家不能离开屏幕（因此需要检查这种极端情况并相应地进行处理）。
3. 如果玩家抵达水域，应该重置游戏，即将玩家移回初始位置（你可以编写单独的重置 Player 方法来处理这一情况）。
*/


Player.prototype.handleInput = function(key) {
    //向左键应该将玩家移到左边，向右键将玩家移到右边，向上键使玩家向上移动，向下键使玩家向下移动。
    //玩家不能离开屏幕
    if (key==='left' && this.x >= 101) {
        this.x -= 101;
    } else if (key==='up' && this.y >= 0) {
        this.y -= 83;
        if (this.y <= 0) { //抵达水域
            win();
        }
    } else if (key==='right' && this.x <= 303) {
        this.x += 101;
    } else if (key==='down' && this.y <= (83 * 4)) {
        this.y += 83;
    }
    //格子宽101，高83
    //canvas宽505，高606
};

//如果玩家抵达水域，应该重置游戏，即将玩家移回初始位置（你可以编写单独的重置 Player 方法来处理这一情况）
function win(){
    console.log('win!');
}


//-------------------实例--------------------------
/*
执行完 Player 和 Enemy 后，你应该通过以下步骤实例化它们：

1. 创建新的 Player 对象
2. 创建多个 Enemy 对象并将它们放在叫做 allEnemies 的数组中
 */

// Now instantiate your objects.
// Place the player object in a variable called player 把玩家对象放在一个叫player的变量
var player = new Player();


// Place all enemy objects in an array called allEnemies 把所有的敌人对象放在一个叫allEnemies的数组
var allEnemies = [
//row 1
new Enemy(-200, 62, 100),
new Enemy(-800, 62, 80),
new Enemy(-450, 62, 70),
//row 2
new Enemy(-300, 145, 90),
new Enemy(-550, 145, 70),
new Enemy(-800, 145, 80),
//row 3
new Enemy(-400, 228, 105),
new Enemy(-150, 228, 85),
new Enemy(-800, 228, 75),
];





// This listens for key presses and sends the keys to your 监听键盘按键，并把key传递到handleInput方法中
// Player.handleInput() method. You don't need to modify this. 你无须更改此项
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    //The 【KeyboardEvent.keyCode】 read-only property represents a system and implementation dependent 【numerical code】 identifying the unmodified value of the pressed key.键盘上的每一个按键都对应一个数字，即keyboardEvent.keyCode：比如‘上箭头’对应38，该数字是事件自动获取的。所以对象allowedKeys[38]会返回‘up’。
});


//游戏引擎有一个 Resources 对象，它会缓存游戏所需的所有图片，因此在玩游戏期间无需等待加载。engine.js 中列举了可用图片
//起始代码还可以使用很多其他图片。如果你想在游戏中使用这些图片，只需将它们添加到传递给 Resources.load() 方法（位于 engine.js 中）的数组中，并放至列表底部
