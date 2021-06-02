import React from 'react';
import {Container, Button} from './styles';
import {ReactComponent as ShareSvg} from '../../assets/share.svg';
import {ReactComponent as BookOpenSvg} from '../../assets/book-open.svg';
import {ReactComponent as HeadphonesSvg} from '../../assets/headphones.svg';
  

  
  const DetailsMenu: React.FC = () => {
   
  
    return (
     <Container>
        <Button>
            <BookOpenSvg/>
            <span>Read</span>
        </Button>
        <Button>
            <HeadphonesSvg />
            <span>Listen</span>
        </Button>
        <Button>
            <ShareSvg/>
            <span>Share</span>
        </Button>
     </Container>
    );
  };
  
  export default DetailsMenu;
  