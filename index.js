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

var stepForms = $("form.body-form");

var headerSteps = $(".header-step");
var bodySteps = $(".body-step");

var backButton = $("#step-back-button");
var continueButton = $("#step-continue-button");

var stepOneInput = $("#username-input");
var stepTwoInput = $("#mailing-city-input");

function getCurrentForm() {
  return document.querySelector(
    'form[data-step="' + stepperState.currentStep + '"]'
  );
}

// Listeners

headerSteps.click(handleStepClick);
backButton.click(handleBackClick);
continueButton.click(handleContinueClick);
stepForms.on("submit", handleContinueClick);

// Event Handlers

function handleContinueClick(e) {
  e.preventDefault();
  console.log("continue handler");
  validateStepForward(e);
}

function validateStepForward(e) {
  getCurrentForm().checkValidity()
    ? stepForward()
    : e.currentTarget.classList.add("was-validated");
}

function handleBackClick(e) {
  e.preventDefault();
  console.log("back handler");
  step = stepperState.currentStep - 1;
  applyCurrentStep(step);
}

function handleStepClick(e) {
  e.preventDefault();
  console.log("step click handler");
  var step = $(this).data().step;
  applyCurrentStep(step);
}

// Navigation

function stepForward() {
  step = stepperState.currentStep + 1;
  applyCurrentStep(step);
}

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
  focusFirstInput();
}

function manageButtonsDisplay() {
  stepperState.currentStep > 1
    ? backButton.addClass("show-button")
    : backButton.removeClass("show-button");
  stepperState.currentStep < 5
    ? continueButton.addClass("show-button")
    : continueButton.removeClass("show-button");
}

function focusFirstInput() {
  switch (stepperState.currentStep) {
    case 1:
      stepOneInput.focus();
    case 2:
      stepTwoInput.focus();
  }
}

// Validation

// Initialize

stepOneInput.focus();
