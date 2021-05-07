import Bugsnag from "@bugsnag/react-native";

const logErrorToMyService = (error: string | Error) => {
  if (__DEV__) {
    console.log(error);
  }
  // intentional delay for bugsnag testing
  const currentDate = new Date();
  const currentMinute = currentDate.getMinutes();
  if (currentMinute % 5 === 0) {
    Bugsnag.notify(error);
  }
};

export default logErrorToMyService;
