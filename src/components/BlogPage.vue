<template>
    <div>
        Пока не мессенджер, а страница блога
    </div>
        <div class="batman">
            <div class="box">
                <h1 class="head">Собака-друг человека</h1>
            </div>
            <center>
                <img class="idonnow1" src="../img/dog1.jpeg" alt="first">
            </center>  
            <div class="box">
                <div class="flash"></div>
                <h1 class="head"></h1>
                <p class="text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
            </div>
        <center>
            <img class="idonnow2" src="../img/dog2.jpg" alt="second">
        </center>
        <div class="box">
            <button class="btn-like">Нравится</button>
            <button class="btn-dislike">Не нравится</button>
            <button class="button" style="float:right">В избранное</button>
        </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style>
.head{   
    text-align: center;
    background-color: #F5F5F5;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
.text{
    text-align: start;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    height: auto;
    width: 1000px;
    padding: 5px;
    background-color: #F5F5F5;
}
.idonnow1{
    padding-top: 10px;
    height: auto;
    width: 1020px;
    border-radius: 25px;
}
.idonnow2{
    height: auto;
    width: 1020px;
    border-radius: 25px;
}
.box{
    height: auto;
    width: 1000px;
    position: relative;
    margin: 1% auto;
    background: #F5F5F5;
    padding: 10px;
    overflow: hidden;
    border-radius: 25px;
    transition: 1s;
}    
.button{
    background-color: #B8C0FF;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 25px;
}
button:hover:not(.active) {
    background-color: #FFD6FF;
}

.active {
    background-color: #FFD6FF;
}
.btn-like{
  background-color: #B8C0FF;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
}
.btn-dislike{
  background-color: #B8C0FF;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
}
</style>