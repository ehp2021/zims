import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMoralis } from 'react-moralis';
import FileBase64 from 'react-file-base64';
import {
  Flex,
  VStack,
  FormControl,
  Heading,
  FormLabel,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react';

const Settings = () => {
  const { handleSubmit, register, reset } = useForm();
  const { setUserData } = useMoralis();
  const [displayPicture, setDisplayPicture] = useState('');

  const toastSuccess = useToast({
    title: 'Submitted!',
    status: 'success',
    duration: 3000,
    isClosable: true,
  });

  const onSubmit = data => {
    setUserData({
      username: data.username,
      email: data.email,
    });
    reset();
    toastSuccess();
  };

  const onSubmitPhoto = e => {
    e.preventDefault();
    setUserData({
      displayPicture: displayPicture,
    });
    toastSuccess();
  };

  return (
    <>
      <Flex h='100vh' direction='column' justify='center' align='center'>
        <VStack w='40%' h='full' spacing={7} p={10} mt='5rem'>
          <Heading mb={4}> Profile Settings </Heading>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <FormControl id='username' isRequired>
              <FormLabel> Username </FormLabel>
              <Input
                mb={6}
                type='username'
                placeholder='Enter username'
                {...register('username')}
              />
            </FormControl>
            <FormControl id='email' isRequired>
              <FormLabel> Email Address </FormLabel>
              <Input
                mb={5}
                type='email'
                placeholder='Enter email'
                {...register('email')}
              />
            </FormControl>
            <Button
              mt={4}
              w='100%'
              colorScheme='teal'
              type='submit'
              onClick={handleSubmit}
            >
              Save
            </Button>
          </form>

          <VStack>
            <Flex align='center'>
              <img className='profile-pic' src={displayPicture} alt='' />
            </Flex>
            <form onSubmit={onSubmitPhoto} style={{ width: '100%' }}>
              <Flex>
                <FileBase64
                  type='file'
                  name='picture'
                  multiple={false}
                  onDone={({ base64 }) => setDisplayPicture(base64)}
                />
              </Flex>
              <Button
                my={4}
                w='100%'
                colorScheme='teal'
                type='submit'
                onClick={onSubmitPhoto}
              >
                Upload
              </Button>
            </form>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};

export default Settings;
