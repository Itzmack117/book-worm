<template>
    <div class="home container-fluid pl-0 ml-0">
        <main>

        <div class="row pt-5">
            
        </div>
        <div class="row mt-4">
            <div class="col-3  offset-8 pt-3 "> <!-- card bg-gradient-primary welcome-card-->
                <p class="welcome-text text-white mb-0"><b>Welcome To Bookworm!</b></p>
                <p class="text-white mb-2 mt-0 sub-title">Please Click The Login Button Above To Continue</p>
            </div>
        </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style>
main{
    min-height: 93vh;
    background-image: linear-gradient(
        to bottom,
        rgba(212, 0, 255, 0.15),
        rgba(96, 0, 151, 0.15)
    );
}
.home{
    height: 93vh;
    width: 100vw;
    background-image: url("../assets/book.jpeg");
    background-size: cover;
    background-position: center;
}
.sub-title{
    font-family: "Ubuntu", sans-serif;
}
.welcome-text{
    font-size: 5em;
    font-family: "Indie Flower", cursive;
    /* font-family: "Ubuntu", sans-serif; */
}
.welcome-card{
    box-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
    border-radius: 0%;
    
}
</style>