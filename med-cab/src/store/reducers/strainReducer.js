import * as Types from "../actions";

const initialState = {
    strains: [
        {
        id: 0,
        name: "OG Kush",
        type: "hybrid",
        rating: 4.4,
        effects: "Relaxed, Hungry, Uplifted",
        description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
        img: "https://assets.wikileaf.com/assets/strains/strain/OG_Kush_500x500.png"
        },
        {
        id: 1,
        name: "Tangie",
        type: "sativa",
        rating: 4.1,
        effects: "Happy, Hungry, Focused",
        description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
        img: "https://assets.wikileaf.com/assets/strains/strain/Tangie.jpg"
        },
        {
            name: "Pennywise",
            type: "indica",
            rating: 4.5,
            effects: "Focused, Creative, Euphoric",
            description: "If you were traumatized by Stephen King’s It and its killer clown villain, the name of this strain might set you off. Pennywise takes hold relatively quickly, stimulating the smoker’s mind before going to work on the body. External stimulation like certain sights or sounds may take on a new dimension or intensity. Thanks to this strain’s indica influence and CBD content, though, its head high is not overly cerebral or disorienting. Instead, consumers are able to maintain lucid conversation or to execute complicated, detail-oriented tasks. Pennywise may also be helpful for opening up creative avenues for projects like brainstorming or crafting. Fairly soon, users are immersed in the strain’s soothing physical properties. Progressive waves of relaxation roll down through the neck and core, relieving and spots of lingering muscular tension and helping to facilitate deep and easy breathing. At this point, energy levels begin to dip and the average consumer may not want to do much more than lounge on the closes comfortable surface. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Pennywise-icon.png",
        },
        {
            name: "Skywalker4",
            type: "hybrid",
            rating: 4.5,
            effects: "Sleepy, Relaxed, Cotton Mouth",
            description: "This strain is great for relaxation as the other cerebral effects follow, uplifting users and making them feel happy. The body high that accompanies these effects is mild in comparison to some pure Indicas but still numbingly potent, as is Skywalker's munchies effect. Unfortunately this strain is not deprived of the usual negative effects; dry eyes and mouth, dizziness, paranoia and headaches. Its effects manage pain, insomnia and anxiety.",
            img: "https://assets.wikileaf.com/assets/strains/strain/skywalker-strain-icon.jpg"
        },
        {
            name: "Violator Kush",
            type: "indica",
            rating: 5,
            effects: "Relaxed, Cotton Mouth, Sleepy",
            description: "Due to the heaviness this strain can impart upon users' eyelids this strain is recommended for use at night and is often used by those just looking to get a night's reprieve from insomnia. The strong, almost narcotic, body buzz  may also be useful to those suffering chronic aches and pains. Violator Kush may also help alleviate the pressures of stress and anxiety upon the mind. It is also used to help with digestive issues, like nausea, and induce appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Violator-Kush-icon.png"
        },
        {
            name: "Bubba Kush",
            type: "indica",
            rating: 4.7,
            effects: "Relaxed, Hungry, Uplifted",
            description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Bubba_Kush.png"
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Green_Crack_500x500.png"
        },
        {
            name: "Hindu Kush",
            type: "indica",
            rating: 5,
            effects: "Sleepy, Relaxed, Euphoric",
            description: "Hindu Kush boasts a slowly-mounting high that begins as a sense of physical relaxation and then progresses toward a state of mental fogginess. Users will feel a heavy sensation in the limbs and head and may not want to be especially active. The feeling of couchlock is commonly reported: users may have thoughts or intentions of getting up to perform a task, but will just as happily remain motionless. This immobilization can free up the mind for lazy contemplation and meandering creative thinking. Some psychedelic effects like visual distortions and strange tactile sensations may also be present. Its effects manage pain, depression and anxiety.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Hindu-Kush-Icon.png"
        },
        {
            name: "NYC Diesel",
            type: "sativa",
            rating: 5,
            effects: "Focused, Energetic, Paranoia",
            description: "The strain produces a citrus sweet, often described as red grapefruit, flavor that is tinged with just a bit of diesel. Such a rare taste delivers a powerful high that most often energizes users and activates their minds. This activation usually comes coupled with uplifting feelings of euphoria and a burst of insightful creativity. Accompanying these effects are a mildly numbing body stone that can cause some users, especially new users, to feel more lazy and in need of a seat or sleep. NYC Diesel also comes with a powerful “munchies effect” and the common downsides of dry mouth and eyes, paranoia, headaches and dizziness. Its effects manage nausea, depression and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/NYC-Diesel-icon.png"
        },
        {
            name: "Sour Diesel",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Cotton Mouth, Euphoric",
            description: "The high from Sour Diesel comes on users quickly in the form of a warm and pleasant head rush. An uplift in mood may be noticeable as well. Although Sour Diesel stimulates synaptic activity in the brain, the character of this head high is more spacey than intensely cerebral. Users may feel chatty if surrounded by others or somewhat introspective if enjoying the strain alone. Its effects manage pain, depression and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Sour_Diesel_500x500.png"
        },
        {
            name: "Lamb's Bread",
            type: "sativa",
            rating: 4,
            effects: "Cotton Mouth, Creative, Paranoia",
            description: "Lamb’s Bread, Lamb’s Breath, Lambsbread - whatever the name the high is the same, with a rush of uplifting energy that hits you hard in the head and giving you a mood boost that is unparalleled. The euphoria and creativity spring to life after only a few puffs and will have you getting through an artist’s block with ease. This is a high that doesn’t want to slow down and will last for hours, so enjoy the stimulation as it takes you through the galaxy because you’ll feel out of this world. Its effects manage nausea, depressed and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Lambs_Bread.jpg"
        },
        {
            name: "Jack the Ripper",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Jack_the_Ripper.png"
        },
        {
            name: "Blue Dream",
            type: "hybrid",
            rating: 4.5,
            effects: "Creative, Relaxed, Energetic",
            description: "Blue Dream's high is all the best parts of its parentage wrapped neatly into a flavor-packed, beautifully balanced package. It begins with a cerebral rush, bringing with it motivation and heightened focus, so enjoy this through any jam-packed schedule. As the high builds you fall into an ultra-relaxed state, leaving you feeling hazy and totally calm. This numbing sensation will find you pain-free and ready for any task. Its effects manage pain, anxiety and a loss of appetite.",
            img: 'https://assets.wikileaf.com/assets/strains/strain/Blue-Dream-Icon.png'
        },
        {
            name: "Casey Jones",
            type: "sativa",
            rating: 5,
            effects: "Focused, Paranoia, Creative",
            description: "Casey Jones is a Sativa dominant strain named after a famous train conductor who spent the last moments of his life saving the passengers on his train. The strain provides an amazing uplifting high that fills users with euphoria. Sweet tasting smoke delivers the high within moments, causing many users to feel creative and introspective. Users report feeling alert and awake, full of energy and ready to go. These cerebral effects may also be coupled with a light Indica style body high. Most users of Casey Jones experience cotton mouth and dry eyes, a few encounter headaches, paranoia or dizziness but nothing too extreme if doses are kept low. Its effects manage nausea, depression and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Casey_Jones.jpg"
        },
        {
            name: "White Widow",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Euphoric, Cotton Mouth",
            description: "What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/White-Widow-Icon.png"
        }
    ],
    savedStrains: [
        {
            name: "Pennywise",
            type: "indica",
            rating: 4.5,
            effects: "Focused, Creative, Euphoric",
            description: "If you were traumatized by Stephen King’s It and its killer clown villain, the name of this strain might set you off. Pennywise takes hold relatively quickly, stimulating the smoker’s mind before going to work on the body. External stimulation like certain sights or sounds may take on a new dimension or intensity. Thanks to this strain’s indica influence and CBD content, though, its head high is not overly cerebral or disorienting. Instead, consumers are able to maintain lucid conversation or to execute complicated, detail-oriented tasks. Pennywise may also be helpful for opening up creative avenues for projects like brainstorming or crafting. Fairly soon, users are immersed in the strain’s soothing physical properties. Progressive waves of relaxation roll down through the neck and core, relieving and spots of lingering muscular tension and helping to facilitate deep and easy breathing. At this point, energy levels begin to dip and the average consumer may not want to do much more than lounge on the closes comfortable surface. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Pennywise-icon.png"
        },
        {
            name: "Skywalker4",
            type: "hybrid",
            rating: 4.5,
            effects: "Sleepy, Relaxed, Cotton Mouth",
            description: "This strain is great for relaxation as the other cerebral effects follow, uplifting users and making them feel happy. The body high that accompanies these effects is mild in comparison to some pure Indicas but still numbingly potent, as is Skywalker's munchies effect. Unfortunately this strain is not deprived of the usual negative effects; dry eyes and mouth, dizziness, paranoia and headaches. Its effects manage pain, insomnia and anxiety.",
            img: "https://assets.wikileaf.com/assets/strains/strain/skywalker-strain-icon.jpg"
        },
        {
            name: "Violator Kush",
            type: "indica",
            rating: 5,
            effects: "Relaxed, Cotton Mouth, Sleepy",
            description: "Due to the heaviness this strain can impart upon users' eyelids this strain is recommended for use at night and is often used by those just looking to get a night's reprieve from insomnia. The strong, almost narcotic, body buzz  may also be useful to those suffering chronic aches and pains. Violator Kush may also help alleviate the pressures of stress and anxiety upon the mind. It is also used to help with digestive issues, like nausea, and induce appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Violator-Kush-icon.png"
        },
        {
            name: "Bubba Kush",
            type: "indica",
            rating: 4.7,
            effects: "Relaxed, Hungry, Uplifted",
            description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Bubba_Kush.png"
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Green_Crack_500x500.png"
        },
        {
            name: "Hindu Kush",
            type: "indica",
            rating: 5,
            effects: "Sleepy, Relaxed, Euphoric",
            description: "Hindu Kush boasts a slowly-mounting high that begins as a sense of physical relaxation and then progresses toward a state of mental fogginess. Users will feel a heavy sensation in the limbs and head and may not want to be especially active. The feeling of couchlock is commonly reported: users may have thoughts or intentions of getting up to perform a task, but will just as happily remain motionless. This immobilization can free up the mind for lazy contemplation and meandering creative thinking. Some psychedelic effects like visual distortions and strange tactile sensations may also be present. Its effects manage pain, depression and anxiety.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Hindu-Kush-Icon.png"
        },
        {
            name: "NYC Diesel",
            type: "sativa",
            rating: 5,
            effects: "Focused, Energetic, Paranoia",
            description: "The strain produces a citrus sweet, often described as red grapefruit, flavor that is tinged with just a bit of diesel. Such a rare taste delivers a powerful high that most often energizes users and activates their minds. This activation usually comes coupled with uplifting feelings of euphoria and a burst of insightful creativity. Accompanying these effects are a mildly numbing body stone that can cause some users, especially new users, to feel more lazy and in need of a seat or sleep. NYC Diesel also comes with a powerful “munchies effect” and the common downsides of dry mouth and eyes, paranoia, headaches and dizziness. Its effects manage nausea, depression and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/NYC-Diesel-icon.png"
        },
        {
            name: "Sour Diesel",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Cotton Mouth, Euphoric",
            description: "The high from Sour Diesel comes on users quickly in the form of a warm and pleasant head rush. An uplift in mood may be noticeable as well. Although Sour Diesel stimulates synaptic activity in the brain, the character of this head high is more spacey than intensely cerebral. Users may feel chatty if surrounded by others or somewhat introspective if enjoying the strain alone. Its effects manage pain, depression and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Sour_Diesel_500x500.png"
        },
        {
            name: "Lamb's Bread",
            type: "sativa",
            rating: 4,
            effects: "Cotton Mouth, Creative, Paranoia",
            description: "Lamb’s Bread, Lamb’s Breath, Lambsbread - whatever the name the high is the same, with a rush of uplifting energy that hits you hard in the head and giving you a mood boost that is unparalleled. The euphoria and creativity spring to life after only a few puffs and will have you getting through an artist’s block with ease. This is a high that doesn’t want to slow down and will last for hours, so enjoy the stimulation as it takes you through the galaxy because you’ll feel out of this world. Its effects manage nausea, depressed and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Lambs_Bread.jpg"
        },
        {
            name: "Jack the Ripper",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Jack_the_Ripper.png"
        },
        {
            name: "Blue Dream",
            type: "hybrid",
            rating: 4.5,
            effects: "Creative, Relaxed, Energetic",
            description: "Blue Dream's high is all the best parts of its parentage wrapped neatly into a flavor-packed, beautifully balanced package. It begins with a cerebral rush, bringing with it motivation and heightened focus, so enjoy this through any jam-packed schedule. As the high builds you fall into an ultra-relaxed state, leaving you feeling hazy and totally calm. This numbing sensation will find you pain-free and ready for any task. Its effects manage pain, anxiety and a loss of appetite.",
            img: 'https://assets.wikileaf.com/assets/strains/strain/Blue-Dream-Icon.png'
        },
        {
            name: "Casey Jones",
            type: "sativa",
            rating: 5,
            effects: "Focused, Paranoia, Creative",
            description: "Casey Jones is a Sativa dominant strain named after a famous train conductor who spent the last moments of his life saving the passengers on his train. The strain provides an amazing uplifting high that fills users with euphoria. Sweet tasting smoke delivers the high within moments, causing many users to feel creative and introspective. Users report feeling alert and awake, full of energy and ready to go. These cerebral effects may also be coupled with a light Indica style body high. Most users of Casey Jones experience cotton mouth and dry eyes, a few encounter headaches, paranoia or dizziness but nothing too extreme if doses are kept low. Its effects manage nausea, depression and a loss of appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Casey_Jones.jpg"
        },
        {
            name: "White Widow",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Euphoric, Cotton Mouth",
            description: "What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/White-Widow-Icon.png"
        }
    ]
    };

    export const strainReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_STRAIN_TO_USER_SAVED:
        const strain = action.payload;
        console.log(strain);
        return {
            ...state,
            savedStrains: [...state.savedStrains, strain]
        };
        case Types.REMOVE_STRAIN_FROM_USER_SAVED:
        return {
            ...state,
            savedStrains: [
            ...state.savedStrains.filter(obj => obj.id !== action.payload.id)
            ]
        };
        default:
        return state;
    }
};