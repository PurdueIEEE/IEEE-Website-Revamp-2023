import CommitteeCard from "@/components/CommitteeCard"
import { committeeInfo_T } from "@/components/CommitteeCard"

import { Grid } from "@mantine/core"


const committeeInfo: committeeInfo_T[] = [
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
{
  name: "ROV", 
  logo: "", 
  desc: "ROV is very cool", 
  pageLink: "rov page link", 
  platformName: "Discord", 
  platformLink: "rov disc link"
},
]

export default function CommitteeLayout() {
  return (
    <>
      <Grid>
        {committeeInfo.map((committee, idx) =>
          <Grid.Col key={ idx } span={4}>
            <CommitteeCard committeeInfo={ committee }/>
          </Grid.Col>
        )}
      </Grid>
    </>
  )
}