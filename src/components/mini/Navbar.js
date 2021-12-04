import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { BsMoonFill, BsFillSunFill, BsPersonFill, BsCaretDownFill } from 'react-icons/bs';
import { HiLogout } from 'react-icons/hi';
import { SiApplearcade } from 'react-icons/si';
import { IoSettings } from 'react-icons/io5';
import Sidebar from './Sidebar';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { logout } = useMoralis();
  const navigate = useNavigate();

  const Logout = () => {
    logout();
    navigate('/');
  };

  const onClick = destination => {
    onClose();
    navigate('/' + destination);
  };

  return (
    <Box>
      <Flex
        zIndex='9999'
        as='header'
        position='fixed'
        p={6}
        h='60px'
        w='100%'
        align='center'
        justify='center'
        bg={useColorModeValue('gray.300', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Flex
          flex={{ base: 1, lg: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', xl: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
          <Text
            color={useColorModeValue('gray.800', 'white')}
            cursor={'pointer'}
            onClick={() => {
              navigate('/');
            }}
          >
            <Text
              className='zimFont'
              fontSize='30px'
              color={useColorModeValue('orange.500', 'gold')}
            >
              ZIMS
            </Text>
          </Text>
          <Flex
            fontFamily={'heading'}
            textAlign={['center', 'left']}
            color={useColorModeValue('gray.800', 'white')}
            display={{ base: 'none', xl: 'inline-flex' }}
            cursor='pointer'
            marginTop='10px'
          >
            <Text ml={6} onClick={() => navigate('/profile')}>
              My Profile
            </Text>
            <Text ml={6} onClick={() => navigate('/games')}>
              Arcade
            </Text>
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, lg: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <BsFillSunFill /> : <BsMoonFill />}
            display={{ base: 'none', xl: 'inline-flex' }}
            aria-label='Toggle color mode'
          ></IconButton>
          <Button
            onClick={Logout}
            display={{ base: 'none', xl: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color='gray.900'
            bg='teal.300'
            _hover={{ bg: 'teal.500' }}
          >
            Logout
          </Button>

          <Menu>
            <MenuButton
              display={{ base: 'inline-flex', xl: 'none' }}
              as={IconButton}
              aria-label='Options'
              icon={<BsCaretDownFill />}
              variant='ghost'
            />
            <MenuList>
              <MenuItem icon={<BsPersonFill />} onClick={() => onClick('profile')}>
                My Profile
              </MenuItem>
              <MenuItem icon={<SiApplearcade />} onClick={() => onClick('games')}>
                Arcade
              </MenuItem>
              <MenuItem icon={<IoSettings />} onClick={() => onClick('settings')}>
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<HiLogout />} onClick={Logout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Sidebar isMobile={true} />
      </Collapse>
    </Box>
  );
};

export default Navbar;
