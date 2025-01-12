module.exports = {
  packagerConfig: {
    icon: 'path/to/icon',
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ["win32"],
      config: {
        name: 'grit',
      },
    },
  ],
};