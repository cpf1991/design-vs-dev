import { VStack, IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { MdDashboard, MdMail, MdSettings } from 'react-icons/md';
import { HiLightningBolt, HiBell, HiTag, HiSearch } from 'react-icons/hi';

import ChakraLogo from './ChakraLogo';
import { ThemeEditor } from './ThemeEditor';
const Navigation = () => {
  //navbar的图标颜色随着浅色或深色主题变化
  const navbarIconColor = useColorModeValue("brand.500", "brandDark.50");
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <ChakraLogo mb={6} />
        <Tooltip label="Dashboard" placement="right">
          <IconButton color={navbarIconColor} icon={<MdDashboard />} aria-label="Dashboard" bg='transparent' />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton color={navbarIconColor} icon={<HiLightningBolt />} aria-label="Actions" bg='transparent' />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton color={navbarIconColor} icon={<HiSearch />} aria-label="Search" bg='transparent' />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton color={navbarIconColor} icon={<HiBell />} aria-label="Notifications" bg='transparent' />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton color={navbarIconColor} icon={<HiTag />} aria-label="Tags" bg='transparent' />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton color={navbarIconColor} icon={<MdMail />} aria-label="Messages" bg='transparent' />
        </Tooltip>
      </VStack>
      <VStack>``
        <Tooltip label="Settings" placement="right">
          <IconButton color={navbarIconColor} icon={<MdSettings />} aria-label="Settings" bg='transparent' />
        </Tooltip>
        <ThemeEditor navbarIcon={navbarIconColor} />
      </VStack>
    </VStack>
  );
};

export default Navigation;
