// filepath: /src/context/BlogContext.jsx
import React, { createContext, useState } from "react";
import blogImgOne from "../assets/Energyblog.jpeg";
import blogImgTwo from "../assets/insecurity.jpg";
import blogImgThree from "../assets/solar.webp";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      img: blogImgTwo,
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
      img: blogImgOne,
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
      img: blogImgThree,
      heading:
        "Agbaje Urges Better Education And Healthcare For Children, Lauds Tinubu’s Government For Student Loan Scheme",
      paragraph:
        "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
      createdAt: "10, Oct, 2024",
      current: 10,
      total: 100,
    },
  ]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
