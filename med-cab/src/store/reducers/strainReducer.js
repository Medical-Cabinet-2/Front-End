import * as Types from "../actions";

const initialState = {
    strains: [
        {
        id: 0,
        name: "OG Kush",
        type: "hybrid",
        rating: 4.4,
        effects: "Relaxed, Hungry, Uplifted",
        description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
        },
        {
        id: 1,
        name: "Tangie",
        type: "sativa",
        rating: 4.1,
        effects: "Happy, Hungry, Focused",
        description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
        },
        {
        name: "Bubba Kush",
        type: "indica",
        rating: 4.7,
        effects: "Sleepy, Hungry, Uplifted",
        description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
        }
    ],
    savedStrains: [
        {
            name: "Bubba Kush",
            type: "indica",
            rating: 4.7,
            effects: "Relaxed, Hungry, Uplifted",
            description: "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Jack_the_Ripper.png"
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
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. Its effects manage nausea, anxiety and a loss of appetite.",
        },

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