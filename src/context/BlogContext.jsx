// filepath: /src/context/BlogContext.jsx
import React, { createContext, useState } from "react";
import blogImgOne from "../assets/sitting.jpg";
import blogImgTwo from "../assets/image1.jpeg";
import blogImgFour from "../assets/image6.jpeg";
import blogImgThree from "../assets/image3.jpeg";
import blogImgFive from "../assets/withArtwork.webp";
import blogImgSix from "../assets/onsuit.jpg";
import blogImgSeven from "../assets/agbaje-hand-on-chin.jpg";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      img: blogImgOne,
      heading:
        "OYO2027: Makinde's PDP is Defeatable if….— APC Chieftain, Akeem Agbaje Reveals",
      paragraph:
        "A chieftain of the All Progressives’ Congress (APC) in Oyo State, Barr. Akeem Agbaje has revealed the strategy the leading opposition party in the state can employ to oust Gov. Seyi Makinde's PDP in 2027.Agbaje on a popular radio program in Ibadan, the Oyo State capital explained that the present government in the pacesetter state under the leadership of Gov. Makinde's PDP is defeatable at the polls if APC can be united in 2027.Agbaje elucidated further that the event of 2023 should be put behind, and the party could only get it better ahead of 2027 if all stakeholders resolved to stop the blame game over the last electoral loss. “Majority of the aspirants then had the agenda of hijacking the system in their respective favor but only the smartest one won at the end. I do not see why Sen. Folarin should be castigated for emerging as the guber candidate of our party in 2023.If we are going to be honest with ourselves, we need a united APC to take over from the present PDP in the state. There should be strict adherence to party discipline through respect to the leadership of the party in the state. Our state working committee and relevant stakeholders should continue meeting to resolve whatever issues causing division within the party. I trust the capacities of our state Chairman, Alhaji Olayide Abass and other officers of the party at state and other levels. APC is our party, and we are all going to work together.",
      current: 40,
      createdAt: "15, Sep, 2024",
      total: 100,
    },
    {
      id: 2,
      img: blogImgTwo,
      heading:
        "Governance is more than Window Dressing - APC Chieftain Carpets Makinde",
      paragraph:
        "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
      createdAt: "15, Sep, 2024",
      current: 50,
      total: 100,
    },
    {
      id: 3,
      img: blogImgThree,
      heading:
        "Chief Bisi Akande, A Pillar Of Progressivism, Agbaje Congratulates Chief Bisi Akande On His 86th Birthday",
      paragraph:
        "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
      createdAt: "10, Oct, 2024",
      current: 10,
      total: 100,
    },
    {
      id: 4,
      img: blogImgFour,
      heading:
        "Agbaje Urges Better Education And Healthcare For Children, Lauds Tinubu’s Government For Student Loan Scheme",
      paragraph:
        "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
      createdAt: "10, Oct, 2024",
      current: 10,
      total: 100,
    },
    {
      id: 5,
      img: blogImgFive,
      heading: "Our Democracy Is Growing Not Perfect – Agbaje",
      paragraph:
        " A chieftain of the All Progressives Congress in Oyo State, Barrister Akeem Agbaje has congratulated the country on the occasion of yet another Democracy Day commemoration. He thanked former President Muhammadu Buhari for according the day the honor it truly deserves.“I want to congratulate President Bola Ahmed Tinubu GCFR and all Nigerians on the occasion of the Democracy Day celebration. Indeed it is worth commemorating and it is noteworthy to applaud our former President Muhammadu Buhari GCFR for giving the day the honour it truly deserves. The democracy we enjoy today is just an effect and an offshoot of the event of 31 years ago. The significance of this day in our polity, politics and national life cannot be overemphasized. For the struggle, many lost their lives including Chief M.K.O. Abiola who remains the biggest hero; many got displaced, suffered unjust incarceration and went into exile. Through concerted efforts and a dogged spirit, today we have the civilian rule we all craved for.”The APC chieftain urged Nigerians to see light at the end of the tunnel instead of gloom and doom in the face of current challenges. “I want to urge Nigerians not to give up on the nation or our nascent democracy. I know it is sounds a bit awkward to describe a democracy that has lasted for 25 years as young but the reality is that it is still nascent. Our democracy is still very young when compared with countries like America, France even South Africa. The good thing is we are growing and evolving, and would soon outgrow our baby steps and start making giant strides. Our democracy might not be perfect but it is growing and thriving with each electoral cycle. My advice to Nigerians is to embrace this democracy as there is no government like one that allows everyone a freedom of choice and we must not allow our differences and desperacy for power to forment trouble. We have only one task and it is to grow our democracy ",
      createdAt: "10, Oct, 2024",
    },
    {
      id: 6,
      img: blogImgSix,
      heading:
        "We Owe Them An Eternal Debt Of Gratitude, Agbaje Hails Armed Forces",
      paragraph:
        "Chieftain of the All Progressives Congress in Oyo State, Barrister Akeem Agbaje has hailed the indefatigable impact of the members of the Nigerian Armed Forces on the peace and unity of the country. He made this known as part of his message to commemorate the 2025 Armed Forces’ Remembrance Day. “Today, we remember and celebrate the yeoman’s efforts of our Armed Forces in ensuring the continued peace and unity of the country. In the face of daunting security challenges that have bedevilled Nigeria, our armed forces have remained gallant, courageous, resilient and determined in ensuring the country stays peaceful and united. In the war against terrorism, they have been unrelenting, decimating the terror ranks. The fight to defend Nigeria has not been a walk in the park as it has come at a huge cost with some of our gallant soldiers paying the supreme price. Today, we celebrate them all. We remember our fallen heroes, our arms of comfort around our wounded soldiers and our salutes to our gallant men that have ensured our flag as a nation is still standing and as a people, we can enjoy peace, progress and pursue prosperity.As the saying goes, “if you see a soldier, greet a soldier”, I want to urge us all to celebrate our gallant men and honor their memory. To our gallant men, you are our heroes, we commend your resilient aggression against terrorism and insecurity in the country. As a people, we support and cheer you on even as you match towards total victory which would make Nigeria a peaceful and secured territory for all.”",
      createdAt: "10, Oct, 2024",
    },
    {
      id: 7,
      img: blogImgSeven,
      heading:
        "Teachers’ Day 2024: Agbaje Hails Teachers, Labels Them Builders Of The Future",
      paragraph:
        " Chieftain of the All Progressives Congress in Oyo State, Barrister Akeem Agbaje has congratulated teachers in the state on the commemoration of the Teachers’ Day. In his message to teachers released by his media office, he described teachers as architects and builders of the future.“I congratulate teachers across the state on the commemoration of the teachers’ day. It is a day to appreciate and celebrate the contributions of teachers to nation building. They are not just the hands that rock the cradle, they are also the hands that build the future by shaping the minds of children that are the leaders of tomorrow . The All Progressives Congress chieftain urged that the voices, opinions and suggestions of teachers should be valued and critically considered. “In line with the theme of this year’s celebration, “Valuing teachers’ voices: towards a new social contract for education”, I want to urge that the yearnings of teachers be listened to, because it paves way for a better life, living conditions and reward system for teachers which in turn would create a better working and learning environment for teachers and children.”",
      createdAt: "10, Oct, 2024",
    },
    {
      id: 8,
      img: blogImgOne,
      heading:
        "Abiola Ajimobi Technical University, A Fitting Honor Of Ajimobi’s Enduring Legacy – Agbaje",
      paragraph:
        "Chieftain of the All Progressives Congress in Oyo State, Barrister Akeem Agbaje has hailed the renaming of the First Technical University, Ibadan to Abiola Ajimobi Technical University. In a statement released by his media office, Barrister Agbaje described the decision taken by the Oyo State government as laudable and well thought out. “I must applaud the Governor Seyi Makinde-led government of Oyo State for the laudable move of honoring the memory and educational legacy of late two term governor of Oyo State, Sen. Abiola Ajimobi, with the renaming of the First Technical University, Ibadan. The school which is the not only the very first in Nigeria but also in Africa is the novel idea of Sen. Abiola Ajimobi. It was in his quest to ensure youths were properly rooted in technical education and some unconventional courses that were not even available in Nigerian universities.It was his dream to halt capital flight to other countries by bringing high quality technical education to the doorstep of Nigerians and Ibadan people. Today, his dream is a beautiful reality for us all to savor. Sen. Abiola Ajimobi’s legacy in education continues to shine and the signing into law of the name change of the Technical University is a testament to that enduring legacy.”",
      createdAt: "10, Oct, 2024",
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
