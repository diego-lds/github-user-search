import {
  Card,
  LeftPanel,
  RightPanel,
  Header,
  HeaderLeft,
  HeaderRight,
  Bio,
  InfoBox,
  Box,
  InfoFooter,
  Row,
} from "./styled";

import iconPin from "../../assets/pin.svg";
import iconUrl from "../../assets/url.svg";
import iconTwitter from "../../assets/twitter.svg";
import iconBuilding from "../../assets/building.svg";

const imgUrl =
  "https://media-exp1.licdn.com/dms/image/C4E03AQGXDFXFlYfDrA/profile-displayphoto-shrink_200_200/0/1625365345722?e=1636588800&v=beta&t=mUEJA6U8Wu8LStnHFGVg2y5sKtRuNE8MJHaEg40TK7M";

const InfoCard = () => {
  return (
    <Card>
      <LeftPanel>
        <img src={imgUrl} />
      </LeftPanel>
      <RightPanel>
        <Header>
          <HeaderLeft>
            <span>Diego Lopes</span>
            <h2>@dlopes087</h2>
          </HeaderLeft>
          <HeaderRight>
            <span>Joined 25 Jan 2011</span>
          </HeaderRight>
        </Header>
        <Bio>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </span>
        </Bio>
        <InfoBox>
          <Box>
            <span>Repos</span>
            <span>8</span>
          </Box>
          <Box>
            <span>Followers</span>
            <span>18</span>
          </Box>
          <Box>
            <span>Following</span>
            <span>104</span>
          </Box>
        </InfoBox>
        <InfoFooter>
          <div>
            <img src={iconPin} />
            <span>Florianópolis</span>
          </div>
          <div>
            <img src={iconTwitter} />
            <span>Not available</span>
          </div>
          <div>
            <img src={iconUrl} />
            <span>https://github.blog</span>
          </div>
          <div>
            <img src={iconBuilding} />
            <span>@github</span>
          </div>
        </InfoFooter>
      </RightPanel>
    </Card>
  );
};

export { InfoCard };
