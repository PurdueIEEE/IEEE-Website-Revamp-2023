import { Grid } from "@mantine/core"
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
]

export default function OfficersLayout() {
  return (
    <>
      <Grid>
        {officerInfo.map((officer, idx) =>
          <Grid.Col key={idx} span={2}>
            <OfficerCard officersInfo={officer}/>
          </Grid.Col>
        )}
      </Grid>
    </>
  )
}