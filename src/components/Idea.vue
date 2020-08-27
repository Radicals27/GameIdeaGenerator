<template>
    <div class="twist">
        <h3>Game Idea:</h3>
        <h4 id="idea">{{ idea }}</h4>
        <button id="getIdea" @click="getIdeaData()">Generate Idea</button>
    </div>
</template>

<script>
    export default {
        name: 'Idea',
        props: {
        idea: String
    },
    methods: {
        getIdeaData() {
            var ideaTemplates = [
                [['A '],['style'],[' game about a '],['noun'],[' trying to '],['verb'],[' during '],['event'],['.']],
                [['A '],['style'],[' game where you can only '],['verb'],[', set in a '],['location'],['.']],
                [['A '],['style'],[' game where you must coerce a '],['noun'],[' into '],['verbing'],[' a '],['noun'],['.']],
                [['A '],['style'],[' game about a '],['adjective'],[' '],['noun'],[' trying to '],['verb'],[' during '],['event'],['.']],
                [['A '],['style'],[' game about a '],['noun'],[' who can control a '],['noun'],[' with their '], ['itemsSingular'],['.']],
                [['A '],['adjective'],[' '],['style'],[' game where enemies '],['verb'],[' and the player must '],['verb'],[' to survive.'],['.']],
                [['A day in the life of a '],['noun'],[' set in a '],['location'],[', designed to make the player feel '], ['feeling'],['.']],
                [['A '],['style'],[' game where you play a '],['noun'],[' who collects '],['itemsPlural'],[', so that they can '], ['verb'],[' in order to save '],['event'],['.']]
            ]
            var styles = [['VR'],['first person'],['first person shooter'],['horror'],['racing'],['survival'], ['childrens'], ['strategy'], ['turn-based'],['simulation'],['tycoon'],['roguelike']]
            var nouns = [['fairy'],['bear'],['alien'],['programmer'],['used car salesman'],['politician'],['bird'],['druglord'],['exotic dancer'],['mobster'],['astronaut'], ['scientist'],['actor'],['totally normal person'],['woman'],['man'],['inventor'],['celebrity'],['electric chair']]
            var verbs = [['jump'],['crawl'],['roll'],['climb'],['teleport'],['program'],['shout'],['paint'],['attack'],['die'],['laugh'],['punch'],['kick'],['fly'],['sing'],['think'],['pray'],['swim'],['cheat'],['train'],['drive'],['turn invisible']]
            var events = [['a movie'],['a storm'],['a dream'],['a breakup'],['a work meeting'],['a race'],['a battle'],['a confrontation'],['a fight'],['a holiday'],['a workday'],['a very cold day'],['Christmas'],['Thanksgiving'],['Easter'],['a snowstorm'],['a solar flare'],['a hospital visit'],['an accident'],['a plane trip'],['a road trip'],['a recession'],['a pandemic']]
            var locations = [['bedroom'],['podcast'],['kitchen'],['library'],['school'],['graveyard'],['space station'],['spaceship'],['cinema'],['body'],['city'],['country town'],['desert'],['plate of food'],['brain'],['dream'],['fantasy world'],['scifi world'],['future time'],['past time'],['pool'],['prison']]
            var adjectives = [['scary'],['thrilling'],['anxiety-provoking'],['hilarious'],['wacky'],['stupid'],['religious'],['psychedelic'],['sloppy'],['dark'],['cheerful'],['speedy'],['calming'],['cooperative'],['silly'],['sassy'],['somber'],['clumsy'],['animated'],['sexy']]
            var feelings = [['sad'],['happy'],['angry'],['lost'],['anxious'],['scared'],['nostalgic'],['confused'],['smart'],['dumb'],['awesome'],['weird']]
            var itemsSingular = [['magic wand'],['hand'],['sadness'],['car'],['gun'],['baseball bat'],['yo-yo'],['fist']]
            var itemsPlural = [['hands'],['stamps'],['feelings'],['rubber bands'],['pencils'],['guns'],['plants'],['teeth'],['siblings']]
            var verbing = [['sabotaging'],['creating'],['analyzing'],['eating'],['humiliating'],['challenging'],['cooking'],['annoying']]

            var gameIdea = ""
            var r = Math.floor(Math.random() * Math.floor(ideaTemplates.length))
            var i
            var words

            for (i = 0; i < ideaTemplates[r].length; i++) {
                words = ideaTemplates[r][i]

                if(ideaTemplates[r][i].includes("style")){
                    words = styles[Math.floor(Math.random() * styles.length)]
                }
                if(ideaTemplates[r][i].includes("noun")){
                    words = nouns[Math.floor(Math.random() * nouns.length)]
                }
                if(ideaTemplates[r][i].includes("verb")){           
                    words = verbs[Math.floor(Math.random() * verbs.length)]
                }
                if(ideaTemplates[r][i].includes("event")){
                    words = events[Math.floor(Math.random() * events.length)]
                }
                if(ideaTemplates[r][i].includes("location")){
                    words = locations[Math.floor(Math.random() * locations.length)]
                }
                if(ideaTemplates[r][i].includes("adjective")){
                    words = adjectives[Math.floor(Math.random() * adjectives.length)]
                }
                if(ideaTemplates[r][i].includes("feeling")){
                    words = feelings[Math.floor(Math.random() * feelings.length)]
                }
                if(ideaTemplates[r][i].includes("itemsSingular")){
                    words = itemsSingular[Math.floor(Math.random() * itemsSingular.length)]
                }
                if(ideaTemplates[r][i].includes("itemsPlural")){
                    words = itemsPlural[Math.floor(Math.random() * itemsPlural.length)]
                }
                if(ideaTemplates[r][i].includes("verbing")){
                    words = verbing[Math.floor(Math.random() * verbing.length)]
                }
                gameIdea += words
            }

            var formattedIdea = ""

            // Format the "a" and "an" words
            for(i = 0; i < gameIdea.length; i++) {
                if(gameIdea[i] == "a" & gameIdea[i-1] == " " & gameIdea[i+1] == " ") {
                    if(gameIdea[i+2] == "a" || gameIdea[i+2] == "e" || gameIdea[i+2] == "i" || gameIdea[i+2] == "o"){
                        formattedIdea += "an "
                        i += 1
                    }
                    else {
                        formattedIdea += gameIdea[i]
                    }
                }
                else {
                    formattedIdea += gameIdea[i]
                }
            }
            this.idea = formattedIdea
        }
    }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
