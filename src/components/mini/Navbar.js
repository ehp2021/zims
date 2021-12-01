import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import './Navbar.css';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorMode,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onToggle = () => {};
  const isOpen = () => {};

  const { isAuthenticated, logout } = useMoralis();
  const navigate = useNavigate();

  const Logout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box zIndex={'999'}>
      <Flex
        as='header'
        position='fixed'
        w='100%'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('gray.800', 'white')}
            onClick={() => {
              navigate('/');
            }}
            cursor={'pointer'}
          >
            <div className='zims-logo'>ZIMS</div>
          </Text>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            ml={6}
            cursor={'pointer'}
            marginTop={'10px'}
            onClick={() => {
              navigate('/profile');
            }}
          >
            My Profile
          </Text>{' '}

          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            ml={6}
            cursor={'pointer'}
            marginTop={'10px'}
            onClick={() => {
              navigate('/games');
            }}
          >
            Arcade
          </Text>{' '}
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <BsFillSunFill /> : <BsMoonFill />}
            aria-label='Toggle color mode'
          ></IconButton>
          <Button
            onClick={Logout}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#4FD1C5'}
            href={'#'}
            _hover={{
              bg: '#4FD1C5',
            }}
          >
            Logout{' '}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
