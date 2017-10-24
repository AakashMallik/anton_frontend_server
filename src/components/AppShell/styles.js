import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  flex: 1;
  display: flex;
`;

export const MainContentWrapper = styled.div`
  flex: 1;
  background-color: ${theme.primary3Color};
  height: calc( 100vh - 72px );
  overflow-y: auto;
`;
