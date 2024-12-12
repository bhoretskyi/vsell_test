import  { useState } from 'react';
import eclipse from '../../img/eclipse.png';
import menu from '../../img/menu.png';
import verify from '../../img/verify.png';
import star from '../../img/star.png';

import { MenuSection, MenuWrapper } from './Menu.styled';
import { StarImg } from './Menu.styled';
import { AvatarWrapper } from './Menu.styled';
import { UserWrapper } from './Menu.styled';
import { UserNameWrapper } from './Menu.styled';
import { UserText } from './Menu.styled';
import { GradientText } from './Menu.styled';
import { UserInfo } from './Menu.styled';

export const Menu = () => {
  const [isReverse, setIsReverse] = useState(false);
  const handleReverse = () => {
    setIsReverse(prev => !prev);
  };
  return (
    <>
      {isReverse ? (
        <MenuSection>
          <AvatarWrapper>
            <img src={eclipse} alt="avatar" />
            <StarImg src={star} alt="star" />
          </AvatarWrapper>
          <UserWrapper>
            <UserInfo>
              <UserNameWrapper>
                {' '}
                <h2>Anna Effective</h2>
                <img
                  src={verify}
                  alt="verify_mark"
                  width="60px"
                  height="60px"
                />{' '}
              </UserNameWrapper>
              <UserText>Double your income with me!</UserText>
            </UserInfo>
            <GradientText>4881</GradientText>
          </UserWrapper>
          <MenuWrapper>
            <img src={menu} alt="menu_btn" />
          </MenuWrapper>
        </MenuSection>
      ) : (
        <MenuSection>
          <MenuWrapper>
            <img src={menu} alt="menu_btn" />
          </MenuWrapper>
          <UserWrapper>
            <UserInfo>
              <UserNameWrapper>
                {' '}
                <h2>Anna Effective</h2>
                <img
                  src={verify}
                  alt="verify_mark"
                  width="60px"
                  height="60px"
                />{' '}
              </UserNameWrapper>
              <UserText>Double your income with me!</UserText>
            </UserInfo>
            <GradientText>4881</GradientText>
          </UserWrapper>

          <AvatarWrapper>
            <img src={eclipse} alt="avatar" />
            <StarImg src={star} alt="star" />
          </AvatarWrapper>
        </MenuSection>
      )}
      <button onClick={handleReverse}> reverse</button>
    </>
  );
};
