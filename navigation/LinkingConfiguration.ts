import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home'
            }
          },
          Subscribe: {
            screens: {
              SubscribeScreen: 'subscribe'
            }
          },
          Donate: {
            screens: {
              DonateScreen: 'donate'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
