import * as Types from "../actions";

const initialState = {
    strains: [
        {
            name: "Honey Boo Boo",
            type: "indica",
            rating: 4.1,
            effects: "Euphoric, Relaxed, Focused",
            description: "Honey Boo Boo offers a slow, gradually mounting high. When it arrives, this psychoactive edge brings a rush of blood to the face, resulting in a light pressure around the eyes and a possibly flushing in the cheeks. Following these odd sensations is a distortion of the senses that smokers may experience as an intensification of certain sights and sounds or a warping of depth perception. Slowly but surely, this bud’s trademark physical high shows itself, weighing down limbs and eyelids in equal measure. Alternatively, the strain can be a fun way to pass the time with like-minded friends, provoking giggles and good vibes. As time passes or as dosage is increased, Honey Boo Boo’s relaxing properties become even more powerful and can cause smokers to melt into their surroundings Once couch-locked, don’t plan on getting much done. Because of its mostly sleepy characteristics, Honey Boo Boo is recommended for nighttime use. Its effects may help with managing pain, women's health and depression.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Honey-Boo-Boo-Icon.jpg"
        },
        {
            name: "Harry POTter",
            type: "hybrid",
            rating: 4.6,
            effects: "Energetic, Euphoric, Creative",
            description: "The effects of Harry Potter are immediate and strong. Users who swear by it rave about the way their body instantly relaxes and any moodiness melts away. Your body will get tingly and loose as your mind is opened and filled with creative and happy thoughts. Though uplifted and possibly energetic, this bud will also leave you hazy and unfocused, so it’s best to just enjoy the high and not try to be too productive. After just one hit, users will feel chronic pain, muscle spasms, hypertension, and even migraines disappear like magic. Harry Potter offers users full body relaxation that is hard hitting and slow fading, which some have reported as being helpful for controlling seizures. If you suffer from stress or anxiety, this hazy high will keep your mind level and focused on more important things, like snacks. Enjoy the increase in hunger if you suffer from a lack of appetite. Its effects may help with managing arthritis, insomnia and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Harry-Potter-Icon.jpg"
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
            name: "Cat Piss",
            type: "sativa",
            rating: 5,
            effects: "Cotton Mouth, Dry Eyes, Euphoric",
            description: "Cat Piss is a Sativa dominant hybrid that many people pass over due to its name and the pungent stench it exudes. People seem to have extreme views of this strain. Either they love it or they're not fond of it at all. Those whom attest to it being amongst the best they have ever had love the strain because of the purely cerebral high it produces. It reportedly fills users uplifting feelings of a mellow happiness and a positive creativity. The strain can have a faint body high but with no couchlock; leaving many users feeling energized. Most users recommend having food on hand as Cat Piss induces powerful munchies, despite the unappetizing name. Aside from the expected dry eyes and cotton mouth users may experience paranoia and dizziness. Some users also have headaches while using this strain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Cat-Piss-Icon.png"
        },
        {
            name: "Thai Girl",
            type: "sativa",
            rating: 4.3,
            effects: "Social, Euphoric, Focused",
            description: "Like any good sativa, Thai Girl strikes the smoker almost immediately after it has been inhaled. Initial signs of the strain’s action are marked by an increased blood pressure to the face, resulting in some tingle around the temples or along the jaw. Soon after these physical sensations have sunk in, users may notice that their thoughts have a newly focused quality and may seem more intense or dynamic than they ordinarily would. Ideas may flow in free association, making this bud a great way to facilitate open-ended creative brainstorming. This cerebral mindset may also be a good way to accomplish complicated, work-related tasks or to simply get through mundane chores like doing the dishes with a little more excitement. Thai Girl isn’t known to exert powerful physical effects and may only contribute to couchlock for smokers who are already predisposed to drowsiness. The strain can also be a good social lubricant in party settings, where it can contribute to chattiness and a giddy camaraderie, even among new acquaintances. Because it is more likely to motivate its consumers than to slow them down, Thai Girl is recommended for enjoyment during the day rather than closer to bedtime; it may even be a good way to start the morning as a wake-and-bake strain. Its effects help ADHD, appetite and migraines.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Thai-Girl-icon.png"
        },
        {
            name: "Skywalker",
            type: "hybrid",
            rating: 4.5,
            effects: "Sleepy, Relaxed, Cotton Mouth",
            description: "Skywalker is a 50/50 hybrid strain with a THC count of up to 15 percent. Well loved by many for the fruity aroma and taste that is coupled with a rather mellow Indica style high. Quickly creeping in is a sense of euphoria that, while not often leading to couch-lock, will usually leave a user feeling a little lazy, perhaps even sleepy. This strain is great for relaxation as the other cerebral effects follow, uplifting users and making them feel happy. The body high that accompanies these effects is mild in comparison to some pure Indicas but still numbingly potent, as is Skywalker's munchies effect. Unfortunately this strain is not deprived of the usual negative effects; dry eyes and mouth, dizziness, paranoia and headaches. While not everyone feels dragged down to the depths of sleep by the use of Skywalker, responsible first-time users should leave this strain to evening or night time use. It is often the choice of medication for those who sufferer from stress, anxiety and insomnia. Skywalker is not recommended for severe or intense pain but may lessen the effects of milder aches and pains. The strain is also used to induce appetite, fight depression and alleviate nausea.",
            img: "https://assets.wikileaf.com/assets/strains/strain/skywalker-strain-icon.jpg"
        },
        {
            name: "Violator Kush",
            type: "indica",
            rating: 5,
            effects: "Relaxed, Cotton Mouth, Sleepy",
            description: "Violator Kush is an Indica dominant hybrid known for having a THC count as high as 22 percent and a CBD count of up to one and a half percent. The tastes of spice, Kush and pepper deliver a potent Indica high that often leads to true couch-lock. Users report feeling a lazy body buzz coming on as early as the first hit that is accompanied by euphoria. This strain is also a very social strain causing many users to feel more talkative. As with any medicine this strain does carry some negative side effects, such as dry mouth and eyes, anxiety, dizziness and occasionally paranoia. Due to the heaviness this strain can impart upon users' eyelids this strain is recommended for use at night and is often used by those just looking to get a night's reprieve from insomnia. The strong, almost narcotic, body buzz  may also be useful to those suffering chronic aches and pains. Violator Kush may also help alleviate the pressures of stress and anxiety upon the mind. It is also used to help with digestive issues, like nausea, and induce appetite.It is also used to help with digestive issues, like nausea, and induce appetite.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Violator-Kush-icon.png"
        },
        {
            name: "Neville's Haze",
            type: "sativa",
            rating: 4,
            effects: "Creative, Paranoia, Energetic",
            description: "Neville's Haze is a mostly Haze derived strain that won first place in the seeds division of the 1998 High Times Cannabis Cup. The Haze heritage leads to a strong Sativa style high that clouds the mind with euphoric giggly bliss. Though powerful the effects are not the kind to keep most users rooted as they feel a rise in creative juices and a need to be productive when consumed in low doses. Though a wonderful strain it still carries the usual negative effects of dry eyes and mouth, with some users experiencing dizziness, headaches and paranoia. This strain has been known to have a THC content as high as 21 percent and is most often recommended to patients suffering from chronic depression, stress and anxiety. Others have chosen to use it to take the focus away from their cage of chronic pain. A few users have found reprieve from their restless nights of insomnia through Neville's Haze as well. The strain is also chosen to alleviate nausea and the effects of glaucoma.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Nevilles_Haze.jpg"
        },
        {
            name: "Obama Kush",
            type: "indica",
            rating: 5,
            effects: "Relaxed, Cotton Mouth, Dry Eyes",
            description: "Obama Kush is an indica dominant hybrid strain of cannabis that originated in Michigan. Superior Genetics bred this daughter strain using an indica Afghani with a sativa dominant hybrid OG Kush. Obama Kush offer well-rounded effects, and is a strain that can be beneficial to all patients with varying experience levels. The balanced stone combines powerful physical effects with a potent, uplifting cerebral high. Despite the potency of the stone you will not get overwhelmingly tired, making it great for times of deep relaxation or meditation. While the deep relaxation and happy euphoria feeling is great for a boost of creativity, this coveted, rare strain has a variety of medicinal applications. Obama Kush has powerful pain fighting effects, making it useful to treat the agony associated with spinal cord injury. Obama Kush can also be an effective remedy for migraines, a relief that is oftentimes difficult to find. This strain is also used to stave off anxiety, as well as treat the symptoms of Attention Deficit Disorder, Attention Deficit Hyperactive Disorder, and even Post Traumatic Stress Disorder.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Obama-Kush-icon.png"
        },
        {
            name: "Trump OG",
            type: "indica",
            rating: -1,
            effects: "Creative, Hungry, Relaxed",
            description: "This questionably named strain is an indica-dominant hybrid created by blending two well-known strains, OG Kush and the cleverly titled Presidential OG. Don’t let the name sway you one way or the other, as this is an extremely giggly bud and well worth the try. If nothing else about the name Trump makes you laugh, let this be the thing. Trump OG is a creeper and has a tendency to sneak up on if you aren’t careful. This one is coming for you hard after just a couple of hits. At first, you’ll feel talkative and cheerful, with major giggle fits throughout the high. That social butterfly flutters off into a stoney buzz that overtakes your whole body. It causes the user to become completely introspective, so don’t be surprised if you suddenly become quiet and heavy. It is also a strong sedative, which is great if you want a solid night of sleep. As you inch your way closer to your bed you may feel the munchies, so be sure to get set up with your favorite snacks so you don’t find yourself wandering like a zombie in the middle of the night in search of food. It helps with migraines, pain and traumatic stress.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Trump_OG_500x500.png"
        },
        {
            name: "Space Queen",
            type: "hybrid",
            rating: 4.7,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Space Queen, also known as Space Jill, is a Sativa-dominant hybrid that originated in Europe and is known for producing strong Sativa effects with a light body high. This strain is sure to put a smile on users' faces as it causes everyone to feel very happy and euphoric. Accompanying the elevated mood is an increase in the users creative juices and energy. Many experienced users also feel clear-headed and focused. The woodsy pineapple taste will definitely bring on cotton mouth and dry eyes. Some may also experience paranoia, dizziness and anxiety. Great for medicating in the morning, this strain is most often chosen to alleviate the gnawing effects of stress and anxiety disorders. Space Queen is not recommended for severe aches and pains but may help make lesser aches and pains manageable. The soaring cerebral effects may chronic depression, adult ADD and ADHD and PTSD. It has also been used to help patients find relief from arthritis, migraines and nausea.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Space-Queen-Icon.jpg"
        },
        {
            name: "Yoda OG",
            type: "indica",
            rating: 4.7,
            effects: "Euphoric, Sleepy, Sedated",
            description: "The Indica dominant hybrid strain of cannabis is well renowned for its potent effects which induce heavy relaxation of both the body and of the mind. This powerful balance of effects can leave novice users feeling couch locked and lazy, so be advised before using this as a wake and bake at extreme doses. This strain is best suited for lazy days, afternoons or nights to curl up in front of the television set and watch cinematic classics. Not an ideal choice for busy days or tiresome social interactions. This strain holsters very powerful medicinal properties. Yoda OG can be used to treat depression and anxiety, leaving users feeling relaxes as it sends them into a relaxed euphoria. This relaxed euphoria can also prove beneficial to those suffering from insomnia or other sleeping disorders, lulling users into a deep and satisfying sleep that will no doubt leave them feeling refreshed and reinvigorated upon waking up the next morning. For those suffering Post Traumatic Stress Disorder (PTSD), Attention Deficit Disorder (ADD), Attention Deficit Hyperactivity Disorder (ADHD) and Bipolar Disorder, Yoda OG is a good choice of strain to medicate with. Yoda OG also offers a pain-killing edge, making it useful for alleviating those aches and pains throughout the body or to quickly stave off migraines and headaches.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Yoda_OG.png"
        },
        {
            name: "Bubba Kush",
            type: "indica",
            rating: 4.7,
            effects: "Relaxed, Hungry, Uplifted, Sedated, Sleepy",
            description: "Unusually for such an indica-heavy strain, Bubba Kush’s high begins with a warped, disoriented sensation in the head. This fogginess, however, gives way to a more expected body melt that intensifies as the high wears on. Although not necessarily energized, smokers can maintain mental focus and converse or perform tasks as needed. Mostly, users will experience heavy, slow-breathing relaxation and a palpable sense of physical comfort. Its effects may help with managing anxiety, pain and depressed.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Bubba_Kush.png"
        },
        {
            name: "Green Crack",
            type: "sativa",
            rating: 4.5,
            effects: "Euphoric, Creative, Cotton Mouth",
            description: "Green Crack has a strong and buzzy sativa high.  It provides users with a boost of energy that soon manifests as a cerebral mindset, making this an excellent wake and bake strain. Green Crack’s potency can make mundane like dishes and laundry tasks more interesting. It’s also an inspiring smoke -- its sharp sense of focus can help users zero in on creative projects or can draw attention to the nuances in a piece of music or a movie. Green Crack can also have some slightly psychedelic effects, including visual distortions and, particularly, an odd sense of time dilation. Because it can leave users feeling uplifted and fairly wired, this strain isn’t recommended for use late at night. Because it doesn’t have many physically relaxing indica properties, Green Crack doesn’t have a wide range of medical benefits. However, its energizing effects can be great for freeing users from fatigue. Green Crack can also aid those suffering from anxiety and depression, helping them to live in the moment -- although in large enough doses, the tendency towards recursive cerebral thinking can plunge some into panic or paranoia. Its effects manage nausea, anxiety and a loss of appetite.",
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
            name: "Tokyo OG",
            type: "indica",
            rating: 5,
            effects: "Focused, Euphoric, Happy",
            description: "The Tokyo OG high is a complete and all over effect that relaxes you from the top of your head to the balls of your feet. The warming sensation begins in your core and slowly spreads to your head and down your neck until it reaches your spine and limbs. Enjoy the smooth rush as you fall into a deep and melting couch lock that lasts for a couple of hours. On the slow and soothing come down, expect to fall into a peaceful and hard to interrupt sleep. Because of the strong effects that this strain has to offer, it is extremely useful for medical users. Those who suffer from insomnia or night terrors will particularly appreciate this strain, as this is a strong sedative and will alleviate the stress, pain, and restlessness that often leads to those ailments. Additionally, Tokyo OG is a powerful gastrointestinal stimulant making it great for digestion, nausea, and a lack of appetite. This bud is not for the faint of heart or the novice smoker as it can agitate anxiety and paranoia even in small doses. Its effects manage miraines stress and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Tokyo-OG-icon.jpg"
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
            name: "Black Mamba",
            type: "indica",
            rating: 5,
            effects: "Energetic, Focused, Euphoric",
            description: "The high from Black Mamba hits hard and fast, initially manifesting as a pressure in the forehead and around the temples. Smokers may feel their powers of perception suddenly shift to pick up on external stimuli that might otherwise go unnoticed. Not only do sights and sounds seem more intense; smokers may also take increased stock of their own thoughts, which can jump around quickly in rapid association. This mind race can lead many to become talkative and social, more willing to engage with those around them. When used in isolation, Black Mamba can produce the energy needed to accomplish tasks like cleaning, organizing, or running errands. It can also set the stage for users to pore over deep philosophical or analytical questions. At its heights, this strain may induce trippy, almost hallucinogenic effects that can be enjoyable for seasoned smokers but may plunge newbies into panic or paranoia. Black Mamba is definitely a strain to enjoy during the day, as its energetic vibes are likely to leave users wide-eyed and red.It can help those with mild to moderate cases of stress and depression to spend some time more consciously and mindfully. It may also help those with attention deficit disorders to maintain a clearheaded and lucid focus. This strain can also relieve the painful intraocular pressure associated with glaucoma.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Black_Mamba.jpg"
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
            effects: "Creative, Energetic, Paranoia",
            description: "Jack the Ripper is a mostly Sativa hybrid, named after the famous serial killer that terrorized London in 1888. This strain is often described as 'exhilarating and racy'. It clouds users' minds in a dense spacey fog, with many describing the strain as psychedelic (especially in higher doses). The charge of energy, cerebral stimulation, and waves of euphoria lift users' spirits. These cerebral effects are so strong, however, they often drown out the accompanying mild body-high so much so that users rarely recognize it. This is a good coverall medication. It is ideal for daytime use since the cerebral effects are stimulating rather than soporific. The strain can ease most chronic aches and pains and muscle spasms. Its cerebral effects can help relieve stress, anxiety, and depression. Patients may also use this strain for migraines, nausea, glaucoma, inflammation, and anorexia.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Jack_the_Ripper.png"
        },
        {
            name: "Ewok",
            type: "indica",
            rating: 4.2,
            effects: "Euphoric, Relaxed, Dry Eyes",
            description: "Ewok is an Indica-dominant hybrid. It is short and furry with red hairs and smells like a mixture of tangerines and Kush. Flavor-wise, it is a combination of citrus, Kush, diesel, mint, nuts, and hash. Ewok is likely the child of clone-only Albert Walker, probably a cross of Afghanistan Indica and Skunk #1, and the almost entirely Indica strain - Tahoe Alien. Tahoe Alien's lineage includes two of Alien Genetics' other strains, Tahoe OG Kush and Alien Kush. Users might be caught off guard by the calming and energetic body high Ewok induces. Many users feel Ewok stimulates creativity. Ideal for dealing with inflammation, muscle spasms and chronic pain, Ewok may also leave users feeling heavily sedated as it wears off. Possibly a good choice for those dealing with insomnia, it may also increase appetite. The happy cerebral effects may help lessen anxiety and stress. Some users feel more focused using this strain, which may help patients suffering from ADD/ADHD. Its effects manage depression, insomnia and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Ewok.jpg"
        },
        {
            name: "Tesla",
            type: "sativa",
            rating: 4.5,
            effects: "Creative, Relaxed, Happy",
            description: "The high is a slow builder, beginning as a happy and euphoric state that melts into an all over tingle, sinking you into head to toe relaxation. Any mental anguish you may be feeling will drift away and free up the space to focus on whatever tasks you have before you. Tesla is one of those rare smokes that is entirely free of anxiety and paranoia despite its sativa dominance. Though this is an anytime high, it might be best suited for day to early evening as it can be energetic at times and could keep you awake into the night. Medically speaking, Tesla is an ace in the hole. This strain has benefits that cross through so many different ailments including more severe diagnoses such as MS, seizures, severe inflammation, and muscle spasms. Ultra high CBD levels in the strain offers relief from nerve and muscle pain for sufferers of the above ailments as well as soothing any associated nervousness. Additionally, Tesla is beneficial to those who struggle with mental health issues such as depression, stress, anxiety, bipolar, and other disorders agitated by low energy or racing thoughts.",
            img: 'https://assets.wikileaf.com/assets/strains/strain/tesla-icon.png'
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
            name: "Oaxacan Highland",
            type: "sativa",
            rating: 5,
            effects: "Focused, Paranoia, Creative",
            description: "Oaxacan Highland is a creeper whose high unfolds slowly over the course of several hours. At first, effects may manifest as an increase in blood pressure around the eyes and temples, along with an increased capacity for saliva production. Within short order, these odd sensations are matched by psychedelic distortions of the senses. Certain sights -- especially bright colors -- can take on a new intensity or dimension, appearing oversaturated or even glowing. Many consumers also notice that this strain can distort their depth perception (making walking difficult) and can induce strong feelings of time moving more slowly. If properly relaxed and able to ease into these phenomena, though, smokers are soon absorbed by Oaxacan Highland’s buzzy and uplifting energy. An increase in cerebral patterns of thinking is common, with thoughts flowing freely from one to the next in uninhibited succession. Oaxacan Highland’s energetic buzz can have several benefits for medical cannabis patients as well. It can help to sustain concentration, allowing those with attention deficit disorders to focus on a single task. It may also temporarily relieve the troubling effects of mild to moderate stress and depression. Physiologically speaking, the strain can numb pain, whether it’s related to injury, disease, or simple everyday inflammation like headaches. Because its cerebral effects can create a sense of “mindrace,” Oaxacan Highland is not recommended for those who are prone to panic or who have a low THC tolerance. Its effects manage anxiety, migraines and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Oaxacan-Highland-Icon.jpg"
        },
        {
            name: "White Widow",
            type: "sativa",
            rating: 4.5,
            effects: "Energetic, Euphoric, Cotton Mouth",
            description: "What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. Its effects manage nausea, anxiety and pain.",
            img: "https://assets.wikileaf.com/assets/strains/strain/White-Widow-Icon.png"
        },
        {
            id: 0,
            name: "OG Kush",
            type: "hybrid",
            rating: 4.4,
            effects: "Relaxed, Hungry, Uplifted",
            description: "The potency of this strain gives the consumer a one-two punch to the head and body. The high from OG Kush is more head-focused than physical. It starts with a sudden headrush that may lead users to feel more focused on their surroundings; sounds and colors may seem intensified. This alteration of the senses may soon give way to a general uplift in mood that progresses towards euphoria. The increase in focus is not as cerebral as with more pure sativas -- smokers will not suffer from a disorienting sense of rapid thought association or “mindrace.”  It’s a versatile smoke that lends itself to the user’s mood and mindset. Its effects may help with managing nausea, stress, pain, minor body aches, and sleeplessness.",
            img: "https://assets.wikileaf.com/assets/strains/strain/OG_Kush_500x500.png"
        },
        {
            id: 1,
            name: "Tangie",
            type: "sativa",
            rating: 4.1,
            effects: "Happy, Hungry, Focused, Creative, Paranoia",
            description: "Heavily influenced by Sativa, Tangie gives recreational users the uplifting effects they are looking for. Cerebral characteristics include euphoria, creativity, focus, and happiness. The THC level is above average making it more suitable for the intermediate or advanced user. For medical users, the herb is versatile due to its balanced nature. Try it for its sedative effect that may alleviate pain, stress, depression, and insomnia. Some have reported that it is good munchie herb; use it for digestive problems, lack of appetite, and nausea. Side effects of dry mouth and bloodshot eyes are typical for cannabis products.",
            img: "https://assets.wikileaf.com/assets/strains/strain/Tangie.jpg"
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