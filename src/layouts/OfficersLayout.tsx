import { Grid } from "@mantine/core"
import Footer from "@/components/Footer"
import OfficerCard, { officersInfo_T } from "@/components/OfficerCard"

const officerInfo: officersInfo_T[] = [
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
  {
    name: "Adithya Chandrasekar", 
    img: "https://purdueieee.org/images/officers/2022_Adithya_Chandrasekar.jpg",
    title: "Vice President of Technical Committees",
    desc: "Adithya is a junior in Computer Science & Data Science and is also software lead for EMBS. He has an avid interest in software development, data analytics, and management & technology consulting. In his free time, he enjoys working on personal projects, trying new food, and reading manga.", 
    committees: ["Software Saturdays", "EMBS"], 
    email: "vp@purdueieee.org",
  },
]

export default function OfficersLayout() {
  return (
    <>
      <h1 className="text-center text-6xl font-bold mb-20">Executive Committee 2023 - 2024</h1>
      <Grid pl={200} pr={200} gutter={100}>
        {officerInfo.map((officer, idx) =>
          <Grid.Col className="flex justify-center" key={idx} span={4}>
            <OfficerCard officersInfo={officer}/>
          </Grid.Col>
        )}
      </Grid>
      <Footer />
    </>
  )
}