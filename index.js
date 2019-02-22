// Global constiables

const stepperState = {
  currentStep: 1
};

// Selectors

const getHeaderSteps = () => document.querySelectorAll(".header-step");
const getBodySteps = () => document.querySelectorAll(".body-step");

const getBackButton = () => document.querySelector("#step-back-button");
const getContinueButton = () => document.querySelector("#step-continue-button");

// Listeners

const addBackButtonListener = () =>
  getBackButton().addEventListener("click", handleBackClick);

const addContinueButtonListener = () =>
  getContinueButton().addEventListener("click", handleContinueClick);

const addHeaderStepsListeners = () =>
  getHeaderSteps().forEach(headerStep =>
    headerStep.addEventListener("click", handleStepClick)
  );

const applyListeners = () => {
  addBackButtonListener();
  addContinueButtonListener();
  addHeaderStepsListeners();
};

// Event Handlers

const handleStepClick = e => {
  const step = e.currentTarget.dataset.step;
  setCurrentStep(step);
  getHeaderSteps().forEach(applyCurrentStep);
  getBodySteps().forEach(applyCurrentStep);
};

const handleContinueClick = () => {
  const step = stepperState.currentStep + 1;
  setCurrentStep(step);
  getHeaderSteps().forEach(applyCurrentStep);
  getBodySteps().forEach(applyCurrentStep);
};

const handleBackClick = () => {
  step = stepperState.currentStep - 1;
  setCurrentStep(step);
  getHeaderSteps().forEach(applyCurrentStep);
  getBodySteps().forEach(applyCurrentStep);
};

const manageButtonsDisplay = () => {
  stepperState.currentStep > 1
    ? getBackButton().classList.add("show-button")
    : getBackButton().classList.remove("show-button");
  stepperState.currentStep < 5
    ? getContinueButton().classList.add("show-button")
    : getContinueButton().classList.remove("show-button");
};

// Navigation

const setCurrentStep = step => (stepperState.currentStep = step);

const applyCurrentStep = ele => {
  ele.dataset.step === stepperState.currentStep
    ? ele.classList.add("current-step")
    : ele.classList.remove("current-step");
  manageButtonsDisplay();
};

// Validation

// Initialize

applyListeners();
