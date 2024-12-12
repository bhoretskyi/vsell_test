import styled from 'styled-components';
export const MenuSection = styled.section`
  display: flex;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;
export const StarImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 10px;
  border: 5px solid white;
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  padding-left: 50px;
  margin-bottom: 30px;
`;
export const UserWrapper = styled.div`
  margin-right: 150px;
`;
export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 40px;
  margin-bottom: 20px;
`;
export const UserText = styled.p`
  font-size: 40px;
`;
export const GradientText = styled.p`
  font-size: 35px;
  font-weight: bold;
  background: linear-gradient(to left, #68e0cf, #209cff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MenuWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
