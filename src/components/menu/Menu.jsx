import eclipse from '../../img/eclipse.png';
import menu from '../../img/menu.png';
import verify from '../../img/verify.png';
import star from '../../img/star.png';

import { MenuSection } from './Menu.styled';
import { StarImg } from './Menu.styled';
import { AvatarWrapper } from './Menu.styled';

export const Menu = () => {
  return (
    <>
      <MenuSection>
        <AvatarWrapper>
          <img src={eclipse} alt="avatar" />
          <StarImg src={star} alt="star" />
        </AvatarWrapper>
        <div>
          <h2>Anna Effective</h2>
          <img src={verify} alt="verify_mark" />{' '}
          <p>Double your income with me!</p>
        </div>
        <div>
          <img src={menu} alt="menu_btn" />
        </div>
      </MenuSection>
    </>
  );
};
