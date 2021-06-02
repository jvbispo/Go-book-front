import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
  url("../fonts/sfProDisplay.ttf") format("truetype");
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f2f2f2; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #999; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
  }

  body{
    background:#999;
    color: #fff;
    -webkit-font-smoothing: antialiased ;
    
    
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 375px;
    margin: auto;
    height: 100vh;

    
  }

  body,input,button{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;

  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 500;

  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;
