const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await User.deleteMany({});

    //   // Drop existing students
    await Thought.deleteMany({});

    // Create empty array to hold the students
    const users = [
        {
            username: 'instant_gramification',
            email: 'andrei@gmail.com'
        },
        {
            username: 'knoll67',
            email: 'skylerk@yahoo.com'
        },
        {
            username: 'jkneeillustration',
            email: 'janeyIll@hotmail.com'
        },
        {
            username: 'stelliumtarot',
            email: 'tarotwoman@gmail.com'
        },
        {
            username: 'surprisehippo',
            email: 'surprise!@gmail.com'
        },
        {
            username: 'smileylily',
            email: 'lillian0709@yahoo.com'
        },
        {
            username: 'boopsnoot',
            email: 'fastninja@yahoo.com'
        },
        {
            username: 'sevenKnives',
            email: 'braxton30@hotmail.com'
        },
        {
            username: 'keebler_sk8s',
            email: 'princess_keebler@yahoo.com'
        },
        {
            username: 'soy-bella',
            email: 'bella33@hotmail.com'
        }
    ];

    const thoughts = [
        {
            username: 'soy-bella',
            thoughtText: 'funnel cakes are gonna have to pick a side when things go down between funnels and cakes'
        },
        {
            username: 'stelliumtarot',
            thoughtText: 'Sun in Cancer. Moon in Leo. But what does it mean?'
        },
        {
            username: 'keebler_sk8s',
            thoughtText: 'How many minions do you thing you could realistically fight before they overpowered you?'
        },
        {
            username: 'boopsnoot',
            thoughtText: "Your boos mean nothing, I've seen what makes you cheer"
        },
        {
            username: 'surprisehippo',
            thoughtText: 'ratios build character'
        },
        {
            username: 'smileylily',
            thoughtText: 'same anxiety, different day'
        },
        {
            username: 'knoll67',
            thoughtText: "can't make fun of Julia Fox bc I have this theory that I am also annoying"
        },
        {
            username: 'jkneeillustration',
            thoughtText: 'Please reshare my new portrait!'
        },
        {
            username: 'sevenKnives',
            thoughtText: 'does my cat love me or is it stockholm syndrome?'
        },
        {
            username: 'instant_gramification',
            thoughtText: 'no thoughts today really'
        }
    ]

    // Add students to the collection and await the results
    await User.collection.insertMany(users);

    // Add courses to the collection and await the results
    await Thought.collection.insertMany(thoughts)

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});