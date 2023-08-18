import Joyride from "react-joyride";

const customStyles = {
  options: {
    zIndex: 10000, // Useful if your app uses z-index heavily.
  },
  buttonClose: {
    display: "none", // Hiding the close button.
  },
  buttonBack: {
    color: "red", // Changing back button text color.
    fontSize: "0.875rem",
    display: "none", // Hiding the back button.
  },
  buttonNext: {
    backgroundColor: "green", // Changing next button background color.
    fontSize: "0.875rem",
  },
  tooltip: {
    backgroundColor: "black", // Changing tooltip background color.
    color: "white", // Changing tooltip text color.
    fontSize: "8px", // Changing tooltip font size.
    maxWidth: "200px",
    maxHeight: "auto",
    overflow: "auto",
  },
};

function Tour({ tourState, handleJoyrideCallback }) {
  return (
    <Joyride
      className="joyride-tooltip"
      continuous
      callback={handleJoyrideCallback}
      run={tourState.run}
      steps={tourState.steps}
      hideCloseButton
      scrollToFirstStep
      showSkipButton
      showProgress
      // styles={customStyles}
    />
  );
}

export default Tour;
