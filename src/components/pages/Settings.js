import React from 'react';
import { useForm } from 'react-hook-form';
import { useMoralis } from "react-moralis";
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
    const { setUserData } = useMoralis();

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

    return ( <
        Flex h = '100vh'
        direction = 'column'
        justify = 'center'
        align = 'center' >
        <
        VStack w = '40%'
        h = 'full'
        spacing = { 7 }
        p = { 10 }
        mt = { 40 } >
        <
        Heading mb = { 4 } > Profile Settings < /Heading> <
        form onSubmit = { handleSubmit(onSubmit) }
        style = {
            { width: '100%' } } >
        <
        FormControl id = 'username'
        isRequired >
        <
        FormLabel > Username < /FormLabel> <
        Input mb = { 6 }
        type = 'username'
        placeholder = 'Enter username' {...register('username') }
        /> <
        /FormControl > <
        FormControl id = 'email'
        isRequired >
        <
        FormLabel > Email Adress < /FormLabel> <
        Input mb = { 5 }
        type = 'email'
        placehoder = 'Enter email' {...register('email') }
        /> <
        /FormControl> <
        Button mt = { 4 }
        w = '100%'
        colorScheme = 'teal'
        type = 'submit'
        onClick = { handleSubmit } >
        Save <
        /Button> <
        /form> <
        /VStack> <
        /Flex>
    );
};

export default Settings;