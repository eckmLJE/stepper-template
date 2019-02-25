// Global Variables

var stepperState = {
  currentStep: 1,
  validated: {
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  }
};

// Selectors

var headerSteps = $(".header-step");
var bodySteps = $(".body-step");

var backButton = $("#step-back-button");
var continueButton = $("#step-continue-button");

// Listeners

headerSteps.click(handleStepClick);
backButton.click(handleBackClick);
continueButton.click(handleContinueClick);

// Event Handlers

function handleStepClick() {
  var step = $(this).data().step;
  applyCurrentStep(step);
}

function handleContinueClick() {
  step = stepperState.currentStep + 1;
  applyCurrentStep(step);
}

function handleBackClick() {
  step = stepperState.currentStep - 1;
  applyCurrentStep(step);
}

// Navigation

function setCurrentStep(step) {
  stepperState.currentStep = step;
  console.log(stepperState.currentStep);
}

function applyCurrentStep(step) {
  setCurrentStep(step);
  headerSteps.each(applyStepStyling);
  bodySteps.each(applyStepStyling);
}

function applyStepStyling() {
  $(this).data().step === stepperState.currentStep
    ? $(this).addClass("current-step")
    : $(this).removeClass("current-step");
  manageButtonsDisplay();
}

function manageButtonsDisplay() {
  stepperState.currentStep > 1
    ? backButton.addClass("show-button")
    : backButton.removeClass("show-button");
  stepperState.currentStep < 5
    ? continueButton.addClass("show-button")
    : continueButton.removeClass("show-button");
}

// Validation
