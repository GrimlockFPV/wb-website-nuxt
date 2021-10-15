<template>
  <!-- Masthead-->
    <CoreSection id="masthead">
        <v-row 
          justify="center"
          align="center"
          class="overlay-text text-center mx-0"
        >  
          <v-col 
           cols="12" 
            lg="8" 
          >
            <CoreHeading>Wayne's World</CoreHeading>
            <v-row>
              <v-col 
                cols="6"
                class="mx-auto"
              >
                <hr class="divider"/>
              </v-col>
            </v-row>
          </v-col>  
          
          <v-col 
            cols="12"
            md="8"
          >
          <p class="text-brown">Hello, kind sir!  Welcome to my little corner of the Internet.<br>
            I can only assume that you are lost ...<br><br>
            But hey, while you're here, I invite you to peruse my <strike>budget-therapy</strike>
            <NuxtLink text-reset to=/blog>blog</NuxtLink>.<br>
            If you do read it, and you are not my mother, I will win a bet.<br>
            Send me a <NuxtLink text-reset to="/resume#lets-talk">message</NuxtLink> and I'll split the winnings with
            you.<br><br>
            Also hidden in plain site is my <NuxtLink text-reset to=/resume>resume</NuxtLink> for, you know ...
            reasons.
          </p>
          <v-btn
            color="primary"
            nuxt
            to="#about"
          >
          Find Out More
          </v-btn>
        </v-col>
      </v-row>   
    </CoreSection>
</template>


<style lang="scss" scoped>

$compliment: #3accf4;
$brown: #5c4d42; 

#masthead {
    padding-top: 10rem;
    
    background-color: linear-gradient(to bottom,
            #3accf480 0%,
            #5c4d4280 100%);
    background-image: url(../../assets/ski-carve.jpeg); /*no-repeat scroll center*/
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    opacity: 1.0;

}
.overlay-text {
   /*position: relative;*/    
   text-align: center;    
   display: flex;
   flex-direction: column;
      /*vertical-align: top;*/
   margin-left: auto;
   margin-top: 1rem;
   justify-content: flex-start;
   align-self: flex-start;

}

p{
  color: white;
}
</style>