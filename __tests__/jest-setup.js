jest.mock('@react-native-community/netinfo', () => ({
    useNetInfo: jest.fn(),
  }));

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  }));
jest.mock("aws-amplify", () => ({
    Auth: {
      signIn: jest.fn().mockResolvedValue({ username: "mockedUsername" }),
      signOut: jest.fn().mockResolvedValue(undefined),
      signUp: jest.fn().mockResolvedValue({
        userSub:"sub-id-uuidv4",

      }),
      signIn: jest.fn()
      // Add moe mock functions or properties as needed
    },
  }));