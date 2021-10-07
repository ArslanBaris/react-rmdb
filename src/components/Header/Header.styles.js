import styled from 'styled-components'

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;    
    color: var(--medGrey);

        a {        
            color: var(--medGrey);
            text-decoration: none;
            font-size: var(--fontBig);
            
        }

    .login {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 20px;
    margin: 0 20px;
    width: auto;
    height: auto;
    padding: 10px;
    
  }
`;

export const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 500px) {  /* media screen < 500px ? 150px : 200px */
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`

    width: 100px;

    @media screen and (max-width: 500px) {   /* media screen < 500px ? 80px : 100px */
        width: 80px;
    }
`;

