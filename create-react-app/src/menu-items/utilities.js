// assets
import { IconTypography, IconBriefcase, IconMessage, IconPalette, IconShadow, IconPlaceholder } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconBriefcase,
  IconChat: IconMessage, // Changed the icon for StateBank Communication
  IconPlaceholder // Add the new icon here
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'NewInvestment',
      title: 'New Investment',
      type: 'item',
      url: '/dashboard/NewInvestment/',
      icon: icons.IconPlaceholder,
      breadcrumbs: false
    },
    {
      id: 'UnsettledDeal',
      title: 'Unsettled Deals',
      type: 'item',
      url: '/dashboard/UnsettledDeal/',
      icon: icons.IconBriefcase,
      breadcrumbs: false
    },
    {
      id: 'StateBank',
      title: 'StateBank Communication',
      type: 'item',
      url: '/dashboard/StateBank/',
      icon: icons.IconChat,
      breadcrumbs: false
    },
    {
      id: 'IPS Report',
      title: 'IPS Report',
      type: 'collapse',
      icon: icons.IconChat,
      isOpen:false,
      children: [
        {
          id: 'IPS Transactional History',
          title: 'IPS Transactional History',
          type: 'item',
          url: '/dashboard/IPS_Report/',
          icon: icons.IconName, 
          breadcrumbs: false
        }
      ]
    }
    
  ]
};

export default utilities;
