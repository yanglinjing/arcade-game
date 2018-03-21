/*
Enemy 函数，它通过以下操作初始化 Enemy：
1. 加载图片:通过将 this.sprite 设为 images 文件夹（已经提供）中的相应图片来加载图片
2. 设置 Enemy 初始位置（需要由你执行）
3. 设置 Enemy 速度（需要由你执行）
*/

// 敌人：玩家需要躲避！Enemies: our player must avoid
var Enemy = function() {
    // The image/sprite for our enemies, this uses敌人的图片
    this.sprite = 'images/enemy-bug.png';

    // Variables applied to each of our instances go here,运用到实例的变量
    this.location = ;
    this.speed = ;

};

/*
Enemy 函数的 update 方法
更新 Enemy 位置（需要由你执行）
处理碰撞玩家的部分（需要由你执行）
 */

// Update the enemy's position, required method for game更新敌人的位置
// Parameter: dt, a time delta between ticks参数dt是时间的增量
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game把敌人显示在屏幕上
// ctx.drawImage() 方法有三个参数：一张图片、x 坐标和 y 坐标：
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//-----------------------player------------------------
/*
Player 函数，它通过以下操作初始化 Player：
通过将 this.sprite 设为图片文件夹中的相应图片来加载图片（参考 Enemy 函数中的代码）
设置 Player 初始位置
*/

/*
Player 函数的 update 方法（可以类似于 Enemy 的 update 方法）
Player 函数的 render 方法（使用 Enemy 的 render 方法的代码）
handleInput 方法，应该接收用户输入；allowedKeys（按下的键），并根据该输入移动玩家。尤其是：
向左键应该将玩家移到左边，向右键将玩家移到右边，向上键使玩家向上移动，向下键使玩家向下移动。
注意，玩家不能离开屏幕（因此需要检查这种极端情况并相应地进行处理）。
如果玩家抵达水域，应该重置游戏，即将玩家移回初始位置（你可以编写单独的重置 Player 方法来处理这一情况）。
 */

// Now write your own player class 编写一个玩家的类
// This class requires an update(), render() and 包含三种方法：update, render, handleInput
// a handleInput() method.

/*
执行完 Player 和 Enemy 后，你应该通过以下步骤实例化它们：

创建新的 Player 对象
创建多个 Enemy 对象并将它们放在叫做 allEnemies 的数组中
 */

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies 把所有的敌人对象放在一个叫allEnemies的数组
// Place the player object in a variable called player 把玩家对象放在一个叫player的数组



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
});


//游戏引擎有一个 Resources 对象，它会缓存游戏所需的所有图片，因此在玩游戏期间无需等待加载。engine.js 中列举了可用图片
//起始代码还可以使用很多其他图片。如果你想在游戏中使用这些图片，只需将它们添加到传递给 Resources.load() 方法（位于 engine.js 中）的数组中，并放至列表底部
