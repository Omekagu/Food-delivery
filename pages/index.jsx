import {
  AccountBalanceRounded,
  AddHome,
  Chat,
  Favorite,
  Settings,
  SummarizeRounded,
} from '@mui/icons-material';
import { useEffect } from 'react';
import BannerName from '../Component/BannerName';
import BottomMenu from '../Component/BottomMenu';
import Header from '../Component/Header';
import SubMenu from '../Component/SubMenu';
import RowCard from '../Component/RowCard';
import burger from '../public/burger.jpg';
import ItemContainer from '../Component/ItemContainer';

export default function Home() {
  useEffect(() => {
    const menuLi = document.querySelectorAll('.bottomMenu__menu li');

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach((n) => n.addEventListener('click', setMenuActive));
  }, []);
  return (
    <div className="App">
      {/* Header section */}
      <Header />
      {/* main container */}
      <main>
        <div className="mainContainer">
          <div className="mainContainer__banner">
            <BannerName name="yzvng" discount={20} link="#" />
          </div>

          {/* DishContainer */}
          <div className="dishContainer">
            <div className="dishContainer__mainCard">
              <SubMenu name={'Menu Category'} />
            </div>
            <div className="dishContainer__rowCard">
              <div>
                <RowCard imageSrc={burger} name={'burger'} isActive />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
              <div>
                <RowCard imageSrc={burger} name={'burger'} />
              </div>
            </div>

            <div className="dishContainer__itemContainer">
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />

              <ItemContainer
                imgSrc={burger}
                name={'Burger Bistro'}
                ratings={5}
                price={'20'}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* Button menu */}
      <div className="bottomMenu">
        <ul className="bottomMenu__menu">
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<AddHome />} />
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<Chat />} />
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<AccountBalanceRounded />} />
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<Favorite />} />
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<SummarizeRounded />} />
          {/* prettier ignore */}
          <BottomMenu link="#" icon={<Settings />} />

          {/* indicator */}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}
