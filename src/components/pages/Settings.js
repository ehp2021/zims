import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useMoralis, useMoralisFile } from "react-moralis";
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
    const toast = useToast();
    const { handleSubmit, register, reset } = useForm();
		const { setUserData, user } = useMoralis();
		const [displayPicture, setDisplayPicture] = useState('');

    const onSubmit = data => {
        setUserData({
            username: data.username,
            email: data.email,
        })
        reset()
        toast({
            title: 'Submitted!',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }

	const onSubmitPhoto = e => {
		e.preventDefault();
			setUserData({
		displayPicture: displayPicture
	})
		toast({
			title: 'Submitted!',
			status: 'success',
			duration: 3000,
			isClosable: true,
	});     
	}

  return (
		<div>
			<Flex h = '100vh'
					direction = 'column'
					justify = 'center'
					align = 'center' >
				<VStack w = '40%'
					h = 'full'
					spacing = { 7 }
					p = { 10 }
					mt = { 40 } >
					<Heading mb = { 4 } > Profile Settings </Heading> 
					<form onSubmit = { handleSubmit(onSubmit) }
							style = {
									{ width: '100%' }
							} >
						<FormControl id = 'username' isRequired>
								<FormLabel > Username </FormLabel> 
								<Input mb = { 6 }
										type = 'username'
										placeholder = 'Enter username' {...register('username') }
										/> 
						</FormControl > 

						<FormControl id = 'email' isRequired>
							<FormLabel > Email Address </FormLabel> 
							<Input mb = { 5 }
							type = 'email'
							placeholder = 'Enter email' {...register('email') }
							/> 
						</FormControl > 
						<Button mt = { 4 }
							w = '100%'
							colorScheme = 'teal'
							type = 'submit'
							onClick = { handleSubmit } >
							Save </Button> 
					</form> 

					<div className="profile-pic-update-container">
					<div className="profile-pic-container">
						<img 
						className="profile-pic" 
						//style={{height: '100px', width: '100px', borderStyle: 'none'}}
						src={displayPicture} alt="" />
					</div> 

					<form onSubmit={onSubmitPhoto}
						style = {{ width: '100%' }}
						>                            
								<div className="profile-pic-update"> 
						<FileBase64
                type='file'
                name='picture'
                multiple={false}
                onDone={({ base64 }) => setDisplayPicture(base64)}
              />
								</div>
		
								<Button mt = { 4 }
										w = '100%'
										colorScheme = 'teal'
										type = 'submit'
										onClick = { onSubmitPhoto } >
										Upload </Button> 
						</form>
					</div>
				</VStack> 
		</Flex >
	</div>

  );
};

export default Settings;