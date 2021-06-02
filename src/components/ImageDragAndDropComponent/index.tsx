/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import {
   CircularProgress,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import {Container} from './styles';



interface IProps {
    handleChange: (buffer :ArrayBuffer | string | null) => void,
    value: any,
};

const ImageDnDComponent: React.FC<IProps>  = ({
 handleChange, value,
}) => {

  const [fileLoading, setFileLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [fileError, setFileError] = useState(null);


  const onDrop = useCallback(acceptedFiles => {
    setFileLoading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        handleChange(acceptedFiles[0]);
        setSelectedFile(reader.result)
      } catch (e) {
        setFileError(e);
      } finally {
        setFileLoading(false);
      }
    };
    
    reader.readAsDataURL(acceptedFiles[0]);
  }, [handleChange]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });


  return (
    <Container className='row'>

      <div
        {...getRootProps()}
        className={clsx(
          'dropzone',
          {
            'selected': Boolean(selectedFile),
            'error': Boolean(fileError),
          },
        )}
      >
        <input disabled={fileLoading} {...getInputProps()} accept="image/*" />

        <div className={clsx('internalArea')}>
          {
            selectedFile ? (
              fileLoading  ? ( <CircularProgress /> ) : (<img src={selectedFile} className={clsx('selectedImage')} alt='cover' />)
            ) : fileError ? (
              <>
                <WarningIcon className={clsx('publishIcon')} />
                An error occurred during the uploading, try again
              </>
            ) :
              (
                <>
                  <PublishIcon className={clsx('publishIcon')} />
                  select or drag a image
                </>
              )
          }
        </div>

      </div>


    </Container>
  );
};


export default ImageDnDComponent;
