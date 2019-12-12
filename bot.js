var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');



// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

    colorize: true

});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

   token: auth.token,

   autorun: true

});

bot.on('ready', function (evt) {

    logger.info('Connected');

    logger.info('Logged in as: ');

    logger.info(bot.username + ' - (' + bot.id + ')');

});

function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command

    // It will listen for messages that will start with !

    if (message.substring(0, 1) == '!') {

        var args = message.substring(1).split(' ');

        var cmd = args[0];



        args = args.splice(1);

        switch(cmd) {

            // !ping

            case 'ping?':

                bot.sendMessage({// russell is boomer

                    to: channelID,

                    message: 'Pong!'

                });
                break;
            case 'tennis?':
                
                bot.sendMessage({//tennis
                    to: channelID,
                    
                    message: 'thwack'
                });
                break;
            case 'earth?':// copypasta about flat earth
                bot.sendMessage({
                    to: channelID,
                    
                    message: 'So, to start I need to explain where I come from. I was raised as a round-earther from a young age. Since my first year in school as a five year old, I was taught by my teachers that the Earth is round. That the Earth revolves around the Sun. That this is the reason for day and night. Brainwashed. Today I am going to dispel belief in those theories once and for all. I would like to emphasize my word choice of “theory,” because that is exactly what they are. Nobody that is reading this page has ever been to space. Nobody has seen evidence of any of these theories first hand. Why do we choose to believe the government on these matters – the same government that has lied so many times and in so many ways to us. This is the same government that just so happened to neglect to tell its people about the heinous atrocities committed in Vietnam. I want you, as readers, to view misinformation from the government with a cynical eye, doubting everything and anything you are told. So, enough about me. You are here to see my proof that the Earth is flat. I am going to start with the basics of the belief. First, we will start with the widely recognized premise that the universe was created in a massive explosion of highly compressed matter.  This explosion sent matter flying outwards at a rate of acceleration of exactly 9.81 meters per second squared. Now, how does this explain flat earth? Imagine a boat sail, pushed by the wind. Does the boat sail suddenly form a ball shape when blown on by the wind? No. It does bend slightly, but this is because of uneven pressure caused by the boat going slower than the wind that propels it. In the frictionless vacuum of space, it wouldn’t bend at all. So, what would make one think that matter would suddenly and randomly form a perfect sphere? It simply makes no sense at all. Another thing that needs to be established is that there is no such thing as gravity.'
                    
                   
                });
                setTimeout(myFunc, 1500, 'funky');
                bot.sendMessage({
                    to: channelID,
                    
                    message: 'The feeling of so-called “gravity” is in fact the Earth accelerating constantly away from the center of the universe. This is similar to when you push on the gas pedal of your car and are pushed back in your seat. It is the same, familiar, principle of inertia on a macro scale. So, now to address the issue of day and night, as well as the moon in the flat Earth view. The first thing I would like to point out is that the sun is like a giant light bulb powered by ludicrous amounts of static electricity. It is a huge flat piece of tungsten that, as it moves through space (I will explain this later) rubs against the other particles and collects static electricity. There is enough static electricity continuously building up to “power” the sun. One of the main arguments against this ideology is that the sun appears round to us. The answer is simple. Lightbulbs glow because of resistance built up by the tungsten filament. If you look closely at a incandescent light bulb, you will see that the area of greatest compounded resistance is at the center of the filament, where it is the brightest. The same principle applies to the sun. The spot of greatest resistance is the center, and it gets lower and lower as you move outwards, forming a circle of even radius that glows, hence the circular appearance. Now, how does this explain day and night? The sun was formed at the beginning of the universe just a split second sooner than the Earth, which means that it is further from the epicenter of the explosion. The Earth was formed immediately after the sun and directly between it and the  explosion force. The Earth shielded the sun from the continued push of the great explosion, and the sun continued to move at the same speed while the Earth accelerated towards it. It seemed like a collision was imminent. Luckily, though, the moon was formed behind the Earth and a little offset to the side. '
                });
                setTimeout(myFunc, 1500, 'funky');
                bot.sendMessage({
                    to: channelID,
                    
                    message: 'Now, as we all probably know, electricity of any kind moving through any material causes electromagnetic fields. The sun, with massive amounts of electricity moving through it, produces an equally as massive electromagnetic field. We also know that as easily as electromagnetism can pull something towards it, it can push something of the same charge away from itself. The moon is made of the naturally occurring mineral lodestone, which can be naturally magnetically charged. The moon’s charge was opposite that of the sun’s electromagnetic field. This caused the sun to push itself away from the moon and thus avoid the collision with the Earth. The sun would have sailed off into space, but the earth contains neutral ferromagnetic materials that caused the sun to be attracted to it. This caused the moon to stay close to the Earth as well. So, what happened next is what causes day and night, and the appearance of sunset and sunrise. The sun moved to the side of Earth and the Earth quickly accelerated past. The sun, now no longer shielded from the blast, got a boost of energy and accelerated upwards again, catching up with the Earth. Its “fall” from in front of the Earth gave it momentum that was then turned around, allowing it to accelerate faster than the Earth. Keep in mind that during this whole time, the sideways momentum of the sun caused by its disattraction to the moon is continuing. Once the sun passes the Earth, it again passes into its shadow and is no longer effected by the power of the blast. The Earth accelerates towards it, the moon pushes it to the side in a circle, always keeping the moon directly opposite of the position of the sun, and the cycle starts all over again, creating day and night. It is worth noting that the moon is made of a flat sheet of lodestone, and the circular appearance is caused by the circular beam of light let off by the sun. This is a similar effect to shining a circular spotlight on a flat wall.'
                });
                setTimeout(myFunc, 1500, 'funky');
                bot.sendMessage({
                    to: channelID,
                    
                    message: ' It makes a circle, not the rectangular shape of the wall. So now I have explained the basic mechanics of Flat Earth, but why would the government want to hide this from us? It is all based on crude oil. If you remember, back in the medieval times it was widely known that the Earth was flat. This is also the time when all machines were very simple and primitive. They did not use oil. The first machine to use oil was the simple steam engine. It used oil as a lubricant to ensure smooth operation of the pistons. The first steam engine is thought to have been invented in ancient Egypt, before the year 30 B.C. It was in practice a failure, but in principle it lived on. The technology seemed to stagnate for almost 1700 years until the first commercial steam engine was debuted in Europe in 1698. This is not to say, however, that the steam engine wasn’t used between 30 B.C. and 1968 A.D. It was likely used in secret by European powers who, not wanting to reveal their advantage to rival countries, did not document its use. They likely would have quickly realized that as steam technology grew, so would the need for oil. Africa was already being looted for rubber necessary for war machines, and they realized that this would soon be the case for oil. Explorations by men such as Magellan and Columbus, were to find crude oil reserves, not just for the sake of sailing around the world Magellan quickly found that there were massive oil reserves in the ice caps that rim the flat Earth. (These ice caps make up Antarctica and the North Pole and circle all around the perimeter of the Earth, forming a massive ice wall.'
                });
                setTimeout(myFunc, 1500, 'funky');
                bot.sendMessage({
                    to: channelID,
                    
                    message: 'This ice wall does form a circle shape because of the concentration and qualities of the way heat spreads, so in that way the reachable Earth is a circle in shape) Countries knew that knowledge of this fact would make them rich and powerful, and did everything they could to keep it from others. Thus they invented the myth of the Earth being round. It is all a ploy to keep power in the hands of the governments in an age of oil dependency. The best way to keep people from finding out about massive oil reserves on the edge of the Earth is to make them not even believe in the edge of the Earth. This sham is kept up today, and will likely be kept up as long as possible by the governments, because to admit that they were lying for all this time would be a massive loss of face. Do you remember the Antarctic treaty signed by the 12 most powerful countries in the world in 1959? This wasn’t just some inconsequential treaty about a barren plain of ice, but rather the most important economic agreement in the history of civilization. Want to go to the continent of Antarctica or the North Pole? You’ll need a very hard-to-obtain permit for that. All because of the enormous greed of the leaders of our world. If you aren’t convinced or have questions, feel free to ask. I will have an answer.'
                })

            break;
                case 'AMERICA?':
                bot.sendMessage({
                    to: channelID,
                    
                    message:'FUCK YEAH'
                    
                });
                break;
            case 'Country roads?':
                bot.sendMessage({
                    to: channelID,
                    
                    message:'take me home'
                    
                });
                break;
            case 'coinFlip?':
                var coinFlip = Math.random();
                if (coinFlip >= 0.5) {
                bot.sendMessage({
                    to: channelID,
                    
                    message:'HEADS'
                    });
                } else if (coinFlip < 0.5){
                    bot.sendMessage({
                    to: channelID,
                    
                    message:'TAILS' 
                    })
                                
                 }
                
                

            // Just add any case commands if you want to..

         }

     }

});