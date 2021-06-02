import styled from 'styled-components';


export const Container = styled.div`

   .dropzone {
      box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
      height: 160px;
      background: #F2F2F2;
      border: 1px solid #F9F9F9;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: 0;
      padding: 6px;
      &:hover {
        cursor: pointer;
        background: #F9F9E9;
        border-color: #E9E9D9;
      }
    }

    .selected {
      background: #FDFCFC;
    };

    .error {
      background: #FAECE1;
    }

    .audioPlayer {
      height: 36px;
      flex: 1px;
    }

    .internalArea {
      padding: 24px;
      border: 1px dashed purple;
      display: flex;
      flex: 1;
      color: #000;
      height: 100%;
      border-radius: 8px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    };
   .publishIcon {
      color: 'purple';
      fill: 'purple';
    };
    .title {
      font-size: 16px;
    };
    .filename {
      font-size: 24px;
      word-break: break-all;
      word-wrap: break-word;
    };
    .row {
      margin: 6px 0;
    };
    .selectedImage {
      max-height: 130px;
      width: 'auto';
    };
`;
