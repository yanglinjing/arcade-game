myTime();

var score = 100,
    gamePause = false;

//换头像，参考：https://blog.csdn.net/Kang_xiong/article/details/52893610?locationNum=14&fps=1
document.querySelector('select').addEventListener('change', function(){
    var a = this.value;
    console.log(a);
});

/*
暂停游戏if (!gamePause) {updateEntities(dt);} 在engine.js文件中
暂停游戏也加在player的handleInput()中
*/

//暂停
document.getElementById('pause').addEventListener('click', function(){
    gamePause = true;
});

//继续
document.getElementById('start').addEventListener('click', function(){
    gamePause = false;
});

//重新开始游戏
document.getElementById('refresh').addEventListener('click', function(){
    window.location.reload();
});

/*
 *网页计时器
 *来自:https://zhidao.baidu.com/question/2077864432758305548.html
 */

function myTime() {
    let sec=0;
    int = setInterval(timer, 1000);
    function timer() {
        sec++;
        let date = new Date(0, 0)
        date.setSeconds(sec);
        let h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
        time = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
        document.getElementById("mytime").innerText = time; //网页元素
    }
}

function two_char(n) { //补零
    return n >= 10 ? n : "0" + n;
}
