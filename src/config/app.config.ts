interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "View restaurant's profile and menu",
    'Make a table reservation',
    'Update table reservation',
    'Cancel table reservation',
  ],
  ownerAbilities: [
    'Manage restaurant profile',
    'Manage restaurant tables',
    'Invite and manage staff',
    'Manage table reservations',
    'Manage menu',
    'Manage dishes',
    'View and edit reservation requests',
    'View restaurant profile and menu',
    'Make and manage table reservations',
  ],
};
