<template>
    <div class="navbar">
        <ul>
            <li><button class="btn" @click="$router.push('/')">Home</button></li>
            <li><button class="btn" @click="$router.push('/BlogPage')">Messenger</button></li>
            <li><button class="btn" @click="$router.push('/ProfilePage')">Profile</button></li>
            <li style="float:right"><button class="btn">logIn</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #303F62;
}

.btn{
    background-color: #BBD0FF;

}


li {
    float: left;
}

li button {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li button:hover:not(.active) {
    background-color: #FFD6FF;
}

.active {
    background-color: #FFD6FF;
}
</style>