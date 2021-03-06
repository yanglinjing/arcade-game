myTime();

var score = 100, //score在engin.js中的update中更新
    gamePause = false;

//换头像
var face = 'images/char-boy.png';
document.querySelector('select').addEventListener('change', function(){
    face = this.value;
    this.blur();//选择新头像后，从选择框移除焦点
});

/*
暂停游戏if (!gamePause) {updateEntities(dt);} 在engine.js文件中
暂停游戏也加在player的handleInput()中
*/

//暂停
let pause = document.getElementById('pause');
pause.addEventListener('click', function(){
    gamePause = true;
    pause.setAttribute('src', 'images/pause_gray.svg');
    pause.setAttribute('class', 'unavailable');
    start.setAttribute('src', 'images/start.svg');
    start.setAttribute('class', 'available');
});

//继续
let start = document.getElementById('start');
start.addEventListener('click', function(){
    gamePause = false;
    start.setAttribute('src', 'images/start_gray.svg');
    start.setAttribute('class', 'unavailable');
    pause.setAttribute('src', 'images/pause.svg');
    pause.setAttribute('class', 'available');
});

//重新开始游戏
document.getElementById('refresh').addEventListener('click', function(){
    window.location.reload();
});

//游戏结束界面

document.getElementById('replay').addEventListener('click', function(){
    window.location.reload();
});

document.getElementById('close').addEventListener('click', function(){
    document.querySelector('#congratulations').setAttribute('class', 'hideWindow');
});
/*
 *网页计时器
 *来自:https://zhidao.baidu.com/question/2077864432758305548.html
 */

//reviewer:由于 timer() 函数会不断重复的被调用，更推荐将获取网页元素移到外部以避免不太必要的重复获取
function myTime() {
    let sec=0;
    timerElm = document.querySelector(".time");// 将获取元素保存在 timer() 函数外面
    int = setInterval(timer, 1000);
    function timer() {
        sec++;
        let date = new Date(0, 0)
        date.setSeconds(sec);
        let h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        time = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
        timerElm.innerText = time; //网页元素
    }
}

function two_char(n) { //补零
    return n >= 10 ? n : "0" + n;
}
