import ExpandableSection from 'components/ExpandableSection';

import GetRaces2 from 'content/UpcomingRaces2'
import EvansRunWriteup from 'content/EvansRunWriteup'
import Emmas2023Writeup from 'content/Emmas2023'
import Ramble2023Writeup from 'content/Ramble2023'



export default function Home() {
    return (
            <div className="pure-g">
                <div className="pure-u-2-3"> 
                    <ExpandableSection expanded={true} sectiontitle="HFC Dominates Evans Run"><EvansRunWriteup /></ExpandableSection>
                    <ExpandableSection expanded={false} sectiontitle="Sea of HFC Green at Emmas Run"><Emmas2023Writeup /></ExpandableSection>
                    <ExpandableSection expanded={false} sectiontitle="HFC At The Ramble"><Ramble2023Writeup /></ExpandableSection>
                </div>
                <div className="pure-u-1-3">
                    <GetRaces2 race_cols={["raceName", "raceDate"]} maxRows={10}/>
                    <div className="content">
                        <h2 className="content-head">HFC Wow Moments</h2>
                    </div>
                </div>
            </div>
        )
};