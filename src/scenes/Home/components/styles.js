import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import reminderbackground from '../../../images/reminder.jpg';
import map from '../../../images/map.jpg';

export const OrdersContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    width: 248px;
  }

  & > * + * {
    margin: 16px 0px 0px 0px;
  }
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  background: ${theme.canvasColor};
  height: 172px;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;
  }

  @media (max-width: 1300px) {
    height: 148px;
  }
`;

export const IdWrapper = styled.div`
  flex: 1;
  background-image: url(${reminderbackground});
  background-size: cover;
  background-position: bottom;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    z-index: 0px;
  }
`;

export const MomentData = styled.div`
  flex: 1;
  background: #4fc3f7;
  display: flex;
  justify-content: center;
  line-height: 36px;
  text-align: middle;
  font-size: 20px;
  color: ${theme.textColor};
  height: 36px;
`;

export const MomentWrapper = styled.div`
  display: flex;

  & > * + * {
    border-left: solid 0.5px #424242;
  }
`;

export const IdData = styled.div`
  position: relative;
  font-size: 32px;
  color: ${theme.alternateTextColor};
  height: 32px;
  z-index: 2px;
  margin: 0px 0px 16px 0px;
`;

export const ServiceContainer = styled.div`
  flex: 1;
  margin: 0px 32px 0px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    margin: 0px 16px 0px 16px;
  }
`;

export const MapContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  transition: box-shadow 0.2s linear;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 100%;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;
  }
`;

export const MapWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${map});
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MapTextWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  padding: 16px 0px 16px 16px;
  font-size: 1.5em;
  font-weight: 500;
  color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }
`;

export const NotificationContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    width: 248px;
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  background: ${theme.canvasColor};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;
  }
`;

export const NotificationHeading = styled.div`
  height: 28px;
  background-color: #e1f5fe;
  padding: 4px 4px 4px 4px;
  font-weight: 500;
  text-align: center;
  color: #0277bd;
  font-size: 20px;
`;

export const NotificationBody = styled.div`
  display: flex;
  overflow: hidden;
  background: ${theme.canvasColor};
  margin: 4px 4px 4px 4px;
  color: #78909c;
  font-size: 16px;
`;

export const StatusContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 16px;
  max-height: 184px;
`;

export const StatusWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 28px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    opacity: 0.8;
    z-index: 0;
    border-radius: 2px;
  }

  & > * + * {
    margin: 8px 0px 0px 0px;
  }
`;

export const StatusInfoContainer = styled.div`
  color: #3f51b5;
  font-size: 24px;
  z-index: 1;
  vertical-align: middle;
`;

export const FeedbackContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0px;
  max-width: 280px;
`;

export const FeedbackWrapper = styled.div`
  border: solid 1px #d9d9d9;
  border-bottom: none;
  background: #ffffff;2
`;
