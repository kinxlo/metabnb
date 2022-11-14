import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Image,
  Link,
  Center,
  Box,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { hamburgerIcon } from '../../assets/images-and-icons';
import Links from './NavigationLinks';
import ConnectWallet from '../modal/ConnectWallet';
import { Copyright } from '../socials/Socials';

const Sidenav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center>
        <Image
          cursor={`pointer`}
          display={{ xl: `none` }}
          onClick={onOpen}
          src={hamburgerIcon}
          alt="menu"
        />
      </Center>

      <Drawer
        size={{ base: `sm` }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent p={10} bg={`black`}>
          <DrawerCloseButton color={`white`} fontWeight={500} m={3} />
          <DrawerHeader>
            <Link as={RouterLink} to={`/`}>
              <Image
                cursor={`pointer`}
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group-1_ytb0ig.png`}
                alt="metabnb"
              />
            </Link>
          </DrawerHeader>
          <DrawerBody py={10}>
            <Links isMobile={true} />
            <Box my={20}>
              <ConnectWallet isSidenav />
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Copyright isMobile />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidenav;
