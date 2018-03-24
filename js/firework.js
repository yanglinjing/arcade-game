/*
 *烟花特效
 *参考:http://blog.csdn.net/wcslb/article/details/53142221
 */


//封装一个颜色随机的效果
function randomColor(){
  let color = "rgb("
  let r = parseInt(Math.random()*256),
      g = parseInt(Math.random()*256),
      b = parseInt(Math.random()*256);
  color = color+r+","+g+","+b+")";
  return color;
}

//创建一个制造烟花的构造函数，第一个参数为元素，第二参数为初始x轴位置，第三参数为y轴位置。
function FireworkUnit(Div,x,y){
    document.body.appendChild(Div);              //添加一个div

    Div.style.backgroundColor = randomColor();   //给烟花添加背景色
    Div.className = "firworks";                  //添加一个class

    Div.style.left=x+"px";                      //把鼠标点击坐标给div
    Div.style.top=y+"px";

    //三目运算符随机移动方向，概率50%,为1时往正方向移动，负1时往反方向移动第二个随机数随机速度快慢
    let speedX = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*16 + 1);
    let speedY = (parseInt(Math.random()*2) == 0 ? 1 : -1)*parseInt(Math.random()*20 + 1);

    this.move=function(){
        let i = 3;
        let time1 = setInterval(moving,30);
        function moving(){
            i++;

            Div.style.left = Div.offsetLeft + speedX + "px";
            Div.style.top = Div.offsetTop + speedY + i + "px";   //当i+speedY>0时,烟花朝下运动。

            if (Div.offsetLeft + Div.offsetWidth > window.innerWidth || Div.offsetLeft < 2 ||
                Div.offsetTop + Div.offsetHeight > window.innerHeight || Div.offsetTop< 2 ){
                    Div.remove();       //移动出可视区域记得删除div和清除定时器
                    clearInterval(time1);
            }
        }
    }
}

//-------------------以下是我写的-------------
var OneFirework = function(){
    this.x = randomX();
    this.y = randomY();
}

OneFirework.prototype.display = function(){
  //for循环里是一颗完整的烟花
  for(let i=0;i<80;i++){       //一颗烟花所散发的火星的数量
      const div = document.createElement("div");
      let b = new FireworkUnit(div, this.x, this.y);
      b.move();
  }
}

//添加到player_and_enemies.js的win()中
function displayFireworks() {
    let t = 0;
    for (let i=0; i<10; i++){
        setTimeout(function(){
          const oneFirework = new OneFirework();
          oneFirework.display();
        }, t)
        t += 1000;
    }
}


/* 原作者的鼠标点击事件
document.onclick=function (e){
    var evt=e||window.event;    //兼容性处理
    for(var i=0;i<80;i++){       //随机烟花的数量
        var div=document.createElement("div");
        var b=new Fireworks(div,evt.pageX,evt.pageY);
        b.move();
    }
}
*/


/*
生成网页随机坐标：
参考：http://blog.csdn.net/dyushuo6230/article/details/7285313
*/

function randomX(){
    const w = window.screen.availWidth
    let x = randomInt(0, w);
    return x;
}

function randomY(){
    const h = window.screen.availHeight;
    let y = randomInt(0, h);
    return y;
}
